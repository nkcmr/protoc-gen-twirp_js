const fs = require("fs");
const { main: protobufjsmain } = require("protobufjs/cli/pbjs");
const { main: protobuftsmain } = require("protobufjs/cli/pbts");
const tmp = require("tmp");
const { google } = require("./plugin.pb");
const prettier = require("prettier");
const { promisify } = require("util");

const writeFile = promisify(fs.writeFile);

const { CodeGeneratorRequest, CodeGeneratorResponse } =
  google.protobuf.compiler;

/**
 * @returns {Promise<Buffer>}
 */
function stdin() {
  return new Promise((resolve, reject) => {
    const buf = [];
    process.stdin.on("data", (chunk) => {
      buf.push(chunk);
    });
    process.stdin.on("end", () => {
      resolve(Buffer.concat(buf));
    });
    process.stdin.on("error", (err) => {
      reject(err);
    });
  });
}

function debug(message, v = {}) {
  if (process.env.DEBUG_PROTOC_GEN_TWIRP_TS !== "1") {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    fs.appendFile(
      "./debug",
      "debug: " +
        JSON.stringify(new Date()) +
        " " +
        message +
        ": " +
        JSON.stringify(v, null, 2) +
        "\n",
      {},
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

/**
 * @returns {Promise<any>}
 */
function tmpfile(work) {
  return new Promise((resolve, reject) => {
    tmp.file(async (err, path, fd, cleanupCallback) => {
      if (err) {
        reject(err);
        return;
      }
      const result = await work(path);
      cleanupCallback();
      resolve(result);
    });
  });
}

/**
 * @param {string[]} args
 * @returns {Promise<string>}
 */
function protobufjs(args) {
  return new Promise((resolve, reject) => {
    protobufjsmain(args, (err, output) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(output);
    });
  });
}

function protobufts(args) {
  return new Promise((resolve, reject) => {
    protobuftsmain(args, (err, output) => {
      debug("protobufts output", { err, output });
      if (err) {
        reject(err);
        return;
      }
      resolve(output);
    });
  });
}

/**
 * @extends {Array<string>}
 * @property {Map<string, Set<string>} imports
 */
class SourceCode extends Array {
  constructor(...args) {
    super(...args);

    /**
     * @type {number}
     * @private
     */
    this.level = 0;

    /**
     * @type {Map<string, Set<string>>}
     * @private
     * @readonly
     */
    this.imports = new Map();

    /**
     * @type {Map<string, string>}
     * @private
     * @readonly
     */
    this.defaultImports = new Map();
  }
  /**
   * @param {number} level
   * @param {(...args: any) => IterableIterator<string>} fn
   */
  write(fn, ...args) {
    this.level += 1;
    for (let line of fn(...args)) {
      this.push(line);
    }
    this.level -= 1;
  }

  /**
   * @param {...string} lines
   */
  push(...lines) {
    for (let line of lines) {
      super.push(`${"  ".repeat(this.level)}${line}`);
    }
  }

  /**
   * @param {string} symbol
   * @param {string} from
   * @returns {string}
   */
  importDefault(symbol, from) {
    const importSymbol = symbol.split(".").shift();
    if (!this.defaultImports.has(from)) {
      this.defaultImports.set(from, importSymbol);
    } else {
      if (this.defaultImports.get(from) !== importSymbol) {
        throw new Error(
          `conflicting import symbols for default export of ${from}`
        );
      }
    }
    return symbol;
  }

  /**
   * @param {string} symbol
   * @param {string} from
   * @returns {string}
   */
  import(symbol, from) {
    const importSymbol = symbol.split(".").shift();
    if (!this.imports.has(from)) {
      this.imports.set(from, new Set([importSymbol]));
    } else {
      this.imports.get(from).add(importSymbol);
    }
    return symbol;
  }

  tryCatch({ tryBlock, catchBlock, finallyBlock }) {
    this.push(`try {`);
    this.write(tryBlock);
    this.push(`} catch (e) {`);
    this.write(catchBlock, "e");
    if (finallyBlock) {
      this.push(`} finally {`);
      this.write(finallyBlock);
    }
    this.push(`}`);
  }

  /**
   * @param {"es6"|"commonjs"} moduleSystem
   * @returns {string}
   */
  finish(moduleSystem) {
    const imports = [];
    for (let [path, sym] of this.defaultImports.entries()) {
      if (moduleSystem === "es6") {
        imports.push(`import * as ${sym} from '${path}';`);
      } else if (moduleSystem === "commonjs") {
        imports.push(`const ${sym} = require('${path}')`);
      }
    }
    for (let [path, sym] of this.imports.entries()) {
      if (moduleSystem === "es6") {
        imports.push(`import { ${[...sym].join(", ")} } from '${path}';`);
      } else if (moduleSystem === "commonjs") {
        imports.push(`const { ${[...sym].join(", ")} } = require('${path}')`);
      }
    }
    imports.push("");
    return [...imports, ...this, ""].join("\n");
  }
}

/**
 * Ensures files being iterated over are only the ones being generated and not
 * dependencies.
 *
 * @param {google.protobuf.compiler.CodeGeneratorRequest} request
 * @returns {IterableIterator<google.protobuf.FileDescriptorProto>}
 */
function* iterFtg(request) {
  /** @type {Set<string>} */
  const ftg = new Set();
  for (let f of request.file_to_generate) {
    ftg.add(f);
  }
  for (let pf of request.proto_file) {
    if (!ftg.has(pf.name)) {
      continue;
    }
    yield pf;
  }
}

/**
 * @param {google.protobuf.compiler.CodeGeneratorRequest} request
 * @param {string} basename
 * @param {GenOptions} options
 * @returns {Promise<google.protobuf.compiler.CodeGeneratorResponse.File[]>}
 */
async function genTwirpCFServer(request, basename, options) {
  /** @type {Set<string>} */
  const rootsToImport = new Set();
  for (let pf of iterFtg(request)) {
    for (let svc of pf.service) {
      for (let m of svc.method) {
        if (m.client_streaming || m.server_streaming) {
          throw new Error("twirp does not support client/server streaming");
        }
        rootsToImport.add(m.input_type.slice(1).split(".").shift());
        rootsToImport.add(m.output_type.slice(1).split(".").shift());
      }
    }
  }

  // imports
  const thisPackage = "@nkcmr/protoc-gen-twirp_js";
  const sc = new SourceCode();
  const typeSc = new SourceCode();

  for (let pf of iterFtg(request)) {
    for (let svc of pf.service) {
      // client
      if (options.gen.has("client")) {
        for (let [name, ct] of [
          ["JSON", "application/json"],
          ["Protobuf", "application/protobuf"],
        ]) {
          for (let m of svc.method) {
            const input = typeSc.import(
              m.input_type.slice(1),
              `./${basename}.pb`
            );
            const output = typeSc.import(
              m.output_type.slice(1),
              `./${basename}.pb`
            );
            typeSc.push(
              `export function send${svc.name}${name}Request(method: "${
                m.name
              }", request: ${input}, options: Omit<${typeSc.import(
                "TwirpRequestOptions",
                thisPackage
              )}, 'contentType'>): Promise<${output}>;`
            );
          }
        }
      }
      typeSc.push("");
      // server
      if (options.gen.has("server")) {
        typeSc.push(`export interface I${svc.name}Handler {`);
        typeSc.write(function* () {
          yield `prefix?: string;`;
        });
        for (let m of svc.method) {
          const input = typeSc.import(
            m.input_type.slice(1),
            `./${basename}.pb`
          );
          const output = typeSc.import(
            m.output_type.slice(1),
            `./${basename}.pb`
          );
          typeSc.write(function* () {
            yield `${m.name}(request: ${input}): Promise<${output}>`;
          });
        }
        typeSc.push("}", "");
        typeSc.push(
          `export function handle${svc.name}Server(request: Request, handler: I${svc.name}Handler): Promise<Response>;`
        );
      }
    }
  }
  for (let pf of iterFtg(request)) {
    for (let svc of pf.service) {
      // client
      if (options.gen.has("client")) {
        sc.write(function* () {
          yield `export function send${svc.name}JSONRequest(method, request, options) {`;
          sc.write(function* () {
            yield `return send${svc.name}Request(method, request, { ...options, contentType: "application/json" })`;
          });
          yield `}`;
          yield `export function send${svc.name}ProtobufRequest(method, request, options) {`;
          sc.write(function* () {
            yield `return send${svc.name}Request(method, request, { ...options, contentType: "application/protobuf" })`;
          });
          yield `}`;
          yield `async function send${svc.name}Request(method, request, options) {`;
          sc.write(function* () {
            yield "const path = `/${encodeURIComponent(options.prefix || 'twirp')}/" +
              pf.package +
              "." +
              svc.name +
              "/${method}`";
            yield `let u = path;`;
            yield `if (options.endpoint) {`;
            sc.write(function* () {
              yield `const epurl = new URL(options.endpoint);`;
              yield `epurl.pathname = path;`;
              yield `epurl.search = '';`;
              yield `epurl.hash = '';`;
              yield `u = epurl.toString();`;
            });
            yield `}`;
            yield `/** @type {typeof fetch} */`;
            yield `const fetcher = options.fetcher || ${sc.importDefault(
              "globalThisPolyfill",
              "globalthis"
            )}().fetch;`;
            yield `switch (method) {`;
            sc.write(function* () {
              for (let i = 0; i < svc.method.length; i++) {
                const m = svc.method[i];
                const input = sc.import(
                  m.input_type.slice(1),
                  `./${basename}.pb`
                );
                const output = sc.import(
                  m.output_type.slice(1),
                  `./${basename}.pb`
                );
                yield `case "${m.name}":`;
                sc.write(function* () {
                  const encodeRequest = sc.import("encodeRequest", thisPackage);
                  yield `const [body${i}, headers${i}] = ${encodeRequest}(options.contentType, request, ${input})`;
                  yield `headers${i}.set("Accept", options.contentType);`;
                  yield `headers${i}.set("Twirp-Version", "v8.1.1");`; // TODO: verify?
                  yield `const res${i} = await fetcher(u, {`;
                  sc.write(function* () {
                    yield `method: "POST",`;
                    yield `headers: headers${i},`;
                    yield `body: body${i},`;
                  });
                  yield `});`;
                  yield `const resBody${i} = await res${i}.arrayBuffer();`;
                  yield `if (res${i}.status !== 200) {`;
                  sc.write(function* () {
                    const errorFromResponse = sc.import(
                      "errorFromResponse",
                      thisPackage
                    );
                    yield `${errorFromResponse}(res${i}, resBody${i});`;
                  });
                  yield `}`;
                  yield `return ${sc.import(
                    "decodeResponse",
                    thisPackage
                  )}(options.contentType, resBody${i}, ${output})`;
                });
              }
            });
            yield `}`;
            yield `${sc.import("badRouteError", thisPackage)}(`;
            sc.write(function* () {
              yield "`no handler for path ${path}`,";
              yield `"POST",`;
              yield `path,`;
            });
            yield `);`;
          });
          yield `}`;
        });
      }

      // server
      if (options.gen.has("server")) {
        sc.write(function* () {
          yield `export async function handle${svc.name}Server(request, handler) {`;
          sc.write(function* () {
            sc.tryCatch({
              *tryBlock() {
                yield `const u = new URL(request.url);`;
                yield `if (request.method !== "POST") {`;
                sc.write(function* () {
                  yield `${sc.import("badRouteError", thisPackage)}(`;
                  sc.write(function* () {
                    yield "`unsupported method ${request.method} (only POST is allowed)`,";
                    yield `request.method,`;
                    yield `u.pathname`;
                  });
                  yield `);`;
                });
                yield `}`;
                yield "// Verify path format: [<prefix>]/<package>.<Service>/<Method>";
                yield `const [prefix, pkgService, method] = ${sc.import(
                  "parseTwirpPath",
                  thisPackage
                )}(u.pathname);`;
                yield `if (pkgService !== "${pf.package}.${svc.name}") {`;
                sc.write(function* () {
                  yield `${sc.import("badRouteError", thisPackage)}(`;
                  sc.write(function* () {
                    yield "`no handler for path ${u.pathname}`,";
                    yield `request.method,`;
                    yield `u.pathname`;
                  });
                  yield `);`;
                });
                yield `}`;
                yield `const expPrefix = handler.prefix || "twirp";`;
                yield `if (prefix !== expPrefix) {`;
                sc.write(function* () {
                  yield `${sc.import("badRouteError", thisPackage)}(`;
                  sc.write(function* () {
                    yield "`invalid path prefix ${prefix}, expected ${expPrefix}, on path ${u.pathname}`,";
                    yield `request.method,`;
                    yield `u.pathname`;
                  });
                  yield `);`;
                });
                yield `}`;
                yield "";
                yield `switch (method) {`;
                for (let i = 0; i < svc.method.length; i++) {
                  const m = svc.method[i];
                  const input = sc.import(
                    m.input_type.slice(1),
                    `./${basename}.pb`
                  );
                  const output = sc.import(
                    m.output_type.slice(1),
                    `./${basename}.pb`
                  );
                  sc.write(function* () {
                    yield `case "${m.name}":`;
                    sc.write(function* () {
                      yield `const [request${i}, ct${i}] = await ${sc.import("decodeRequest", thisPackage)}(request, ${input})`;
                      yield `${sc.import(
                        "setRequestDetails",
                        thisPackage
                      )}(request${i}, {`;
                      sc.write(function* () {
                        yield `headers: request.headers,`;
                      });
                      yield `});`;
                      yield `const response${i} = await handler.${m.name}(request${i});`;
                      yield `return ${sc.import(
                        "encodeResponse",
                        thisPackage
                      )}(ct${i}, response${i}, ${output})`;
                    });
                  });
                }
                yield `}`;
                yield `${sc.import("badRouteError", thisPackage)}(`;
                sc.write(function* () {
                  yield "`no handler for path ${u.pathname}`,";
                  yield `request.method,`;
                  yield `u.pathname`;
                });
                yield `);`;
              },
              *catchBlock(eIdent) {
                yield `return ${sc.import(
                  "writeTwirpError",
                  thisPackage
                )}(${eIdent})`;
              },
            });
          });
          yield `}`;
        });
      }
    }
  }
  const twirpJSFile = {
    name: `${basename}.twirp.js`,
    content: prettier.format(sc.finish(options.moduleSystem), {
      filepath: process.cwd(),
      parser: "babel",
    }),
  };
  if (!options.emitTypes) {
    return [twirpJSFile];
  }
  return [
    twirpJSFile,
    {
      name: `${basename}.twirp.d.ts`,
      content: prettier.format(typeSc.finish(options.moduleSystem), {
        filepath: process.cwd(),
        parser: "babel-ts",
      }),
    },
  ];
}

/**
 * @param {string} str
 * @returns {number}
 */
const countDots = (str) =>
  str.split("").reduce((m, c) => (c === "." ? m + 1 : m), 0);

/**
 * commonPackagePrefix will find the lengthiest common package prefix among all
 * input protobuf files. So out of:
 *
 * - example.foo.bar.beep
 * - example.foo.boop
 * - google.protobuf
 *
 * This function will return "example.foo"
 *
 * @param {google.protobuf.compiler.CodeGeneratorRequest} request
 * @returns {string}
 */
function commonPackagePrefix(request) {
  /** @type {Set<string>} */
  const ftg = new Set();
  for (let f of request.file_to_generate) {
    ftg.add(f);
  }
  /** @type {Map<string, number>} */
  const pkgpartsCount = new Map(); // using Map due to them remembering insertion order
  for (let pf of request.proto_file) {
    if (!pf.package || !ftg.has(pf.name)) {
      continue;
    }
    const pkgparts = pf.package.split(".");
    for (let i = pkgparts.length - 1; i >= 0; i--) {
      const s = pkgparts.slice(0, i + 1).join(".");
      const curr = pkgpartsCount.get(s) ?? 0;
      pkgpartsCount.set(s, curr + 1);
    }
  }
  const pkgs = [...pkgpartsCount.entries()];
  pkgs.sort((a, b) => {
    const [apkg, acount] = a;
    const [bpkg, bcount] = b;
    if (acount > bcount) {
      return -1;
    } else if (bcount > acount) {
      return 1;
    } else {
      const adots = countDots(apkg);
      const bdots = countDots(bpkg);
      if (adots > bdots) {
        return -1;
      } else if (bdots > adots) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  const [result] = pkgs[0];
  if (!result) {
    throw new Error(
      "unable to determine suitable basename for output files (use `basename` option?)"
    );
  }
  return result;
}

/**
 * @typedef GenOptions
 * @property {boolean} emitTypes
 * @property {"es6"|"commonjs"} moduleSystem
 * @property {Set<"client"|"server"|"proto">} gen
 */

/**
 * @param {google.protobuf.compiler.CodeGeneratorRequest} request
 * @returns {Promise<google.protobuf.compiler.CodeGeneratorResponse>}
 */
async function main(request) {
  await debug("\n\nstarting...");

  /** @type {Record<string, string>} */
  const parameters = request.parameter
    .split(",")
    .map((p) => p.split("="))
    .reduce((p, c) => ({ ...p, [c[0]]: c[1] }), {});

  /** @type {GenOptions} */
  const options = {
    emitTypes: !parameters["no_emit_types"],
    moduleSystem: parameters["module"] ?? "es6",
    gen: new Set((parameters["gen"] ?? "proto|server|client").split("|")),
  };
  if (["es6", "commonjs"].includes(options.moduleSystem) === false) {
    throw new Error(
      `invalid option: expected "es6" or "commonjs" for "module" option, got "${moduleSystem}"`
    );
  }

  await debug("params", { parameters });
  const basename = parameters["basename"] ?? commonPackagePrefix(request);

  /** @type {google.protobuf.compiler.CodeGeneratorResponse.File[]} */
  const files = [];

  if (options.gen.has("proto")) {
    const pbjsFileContents = prettier.format(
      await protobufjs([
        "-t",
        "static-module",
        "-w",
        options.moduleSystem,
        "--es6",
        "--no-service",
        "--force-number",
        "--force-message",
        "--keep-case",
        "--sparse",
        ...request.file_to_generate,
      ]),
      {
        filepath: process.cwd(),
        parser: "babel",
      }
    );

    files.push({ name: `${basename}.pb.js`, content: pbjsFileContents });

    if (options.emitTypes) {
      // pbts only accepts files as an argument, so we have to write the pbjs file
      // contents to a temporary file and
      const pbtsFileContents = await tmpfile(async (path) => {
        const jsPath = `${path}.js`;
        await writeFile(jsPath, pbjsFileContents);
        const pbtsContents = await protobufts([jsPath]);
        return prettier.format(pbtsContents, {
          filepath: process.cwd(),
          parser: "babel-ts",
        });
      });
      files.push({
        name: `${basename}.pb.d.ts`,
        content: pbtsFileContents,
      });
    }
  }

  files.push(...(await genTwirpCFServer(request, basename, options)));

  const response = google.protobuf.compiler.CodeGeneratorResponse.create({
    file: files,
  });

  return response;
}

/**
 * @param {google.protobuf.compiler.CodeGeneratorResponse} response
 * @returns {void}
 */
function outputResponse(response) {
  const outbuf = Buffer.from(CodeGeneratorResponse.encode(response).finish());
  process.stdout.write(outbuf);
}

(async () => {
  try {
    const stdinbuf = await stdin();
    const request = CodeGeneratorRequest.decode(stdinbuf);
    const response = await main(request);
    outputResponse(response);
  } catch (e) {
    const errResponse = CodeGeneratorResponse.create({
      error: `${e}\n${e.stack}`,
    });
    outputResponse(errResponse);
  }
})();
