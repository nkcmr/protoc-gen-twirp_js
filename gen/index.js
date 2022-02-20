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
 */
class SourceCode extends Array {
  constructor(...args) {
    super(...args);
    this.level = 0;
  }
  /**
   * @param {number} level
   * @param {Generator<string, string, string>} fn
   */
  write(fn, ...args) {
    this.level += 1;
    for (let line of fn(...args)) {
      this.push(line);
    }
    this.level -= 1;
  }

  push(...lines) {
    for (let line of lines) {
      super.push(`${"  ".repeat(this.level)}${line}`);
    }
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
}

/**
 * @param {google.protobuf.compiler.CodeGeneratorRequest} request
 * @param {string} pbjsFileName
 * @returns {Promise<google.protobuf.compiler.CodeGeneratorResponse.File[]>}
 */
async function genTwirpCFServer(request, pbjsFileName, options) {
  /** @type {Set<string>} */
  const rootsToImport = new Set();
  for (let pf of request.proto_file) {
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

  const sc = new SourceCode();
  const typeSc = new SourceCode();
  const runtimeImports =
    "badRouteError, parseTwirpPath, decodeRequest, setRequestDetails, encodeResponse, writeTwirpError";
  if (options.moduleSystem === "commonjs") {
    const importPb = `const { ${[...rootsToImport.values()].join(
      ", "
    )} } = require('./${pbjsFileName.replace(/\.js$/i, "")}');`;
    sc.push(
      importPb,
      `const { ${runtimeImports} } = require('@nkcmr/protoc-gen-twirp_js');`,
      ""
    );
    typeSc.push(importPb);
  } else if (options.moduleSystem === "es6") {
    const importPb = `import { ${[...rootsToImport.values()].join(
      ", "
    )} } from './${pbjsFileName.replace(/\.js$/i, "")}';`;
    sc.push(
      importPb,
      `import { ${runtimeImports} } from '@nkcmr/protoc-gen-twirp_js';`,
      ""
    );
    typeSc.push(importPb);
  } else {
    throw new Error(`unknown module system: ${options.moduleSystem}`);
  }

  for (let pf of request.proto_file) {
    for (let svc of pf.service) {
      typeSc.push(`export interface I${svc.name}Handler {`);
      sc.write(function* () {
        yield `export async function handle${svc.name}Server(request, handler) {`;
        sc.write(function* () {
          sc.tryCatch({
            *tryBlock() {
              yield `const u = new URL(request.url);`;
              yield `if (request.method !== "POST") {`;
              sc.write(function* () {
                yield "badRouteError(";
                sc.write(function* () {
                  yield "`unsupported method ${request.method} (only POST is allowed)`,";
                  yield `request.method,`;
                  yield `u.pathname`;
                });
                yield `);`;
              });
              yield `}`;
              yield "// Verify path format: [<prefix>]/<package>.<Service>/<Method>";
              yield `const [prefix, pkgService, method] = parseTwirpPath(u.pathname);`;
              yield `if (pkgService !== "${pf.package}.${svc.name}") {`;
              sc.write(function* () {
                yield "badRouteError(";
                sc.write(function* () {
                  yield "`no handler for path ${u.pathname}`,";
                  yield `request.method,`;
                  yield `u.pathname`;
                });
                yield `);`;
              });
              yield `}`;
              yield `if (prefix !== "twirp") {`;
              sc.write(function* () {
                yield "badRouteError(";
                sc.write(function* () {
                  yield "`invalid path prefix ${prefix}, expected twirp, on path ${u.pathname}`,";
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
                const input = m.input_type.slice(1);
                const output = m.output_type.slice(1);
                typeSc.write(function* () {
                  yield `${m.name}(request: ${input}): Promise<${output}>`;
                });
                sc.write(function* () {
                  yield `case "${m.name}":`;
                  sc.write(function* () {
                    yield `const [request${i}, ct${i}] = await decodeRequest(request, ${input})`;
                    yield `setRequestDetails(request${i}, {`;
                    sc.write(function* () {
                      yield `headers: request.headers,`;
                    });
                    yield `});`;
                    yield `/** @type {${m.output_type.slice(
                      1
                    )}} response${i} */`;
                    yield `const response${i} = await handler.${m.name}(request${i});`;
                    yield `return encodeResponse(ct${i}, response${i}, ${output})`;
                  });
                });
              }
              typeSc.push("}", "");
              yield `}`;
              yield "badRouteError(";
              sc.write(function* () {
                yield "`no handler for path ${u.pathname}`,";
                yield `request.method,`;
                yield `u.pathname`;
              });
              yield `);`;
            },
            *catchBlock(eIdent) {
              yield `return writeTwirpError(${eIdent})`;
            },
          });
        });
        yield `}`;
      });
      typeSc.push(
        `export function handle${svc.name}Server(request: Request, handler: I${svc.name}Handler): Promise<Response>;`
      );
    }
  }
  const twirpJSFile = {
    name: `${commonPackagePrefix(request)}.twirp.js`,
    content: prettier.format([...sc, ""].join("\n"), {
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
      name: `${commonPackagePrefix(request)}.twirp.d.ts`,
      content: prettier.format([...typeSc, ""].join("\n"), {
        filepath: process.cwd(),
        parser: "babel-ts",
      }),
    },
  ];
}

/**
 * commonPackagePrefix will find the lengthiest common package prefix among all
 * input protobuf files. So out of:
 *
 * - example.foo.bar.beep
 * - example.foo.boop
 *
 * This function will return "example.foo"
 *
 * @param {google.protobuf.compiler.CodeGeneratorRequest} request
 * @returns {string}
 */
function commonPackagePrefix(request) {
  /** @type {Record<string, number>} */
  const pkgpartsCount = {};
  for (let pf of request.proto_file) {
    const pkgparts = pf.package.split(".");
    for (let i = 0; i < pkgparts.length; i++) {
      const s = pkgparts.slice(0, i + 1).join(".");
      const curr = pkgpartsCount[s] ?? 0;
      pkgpartsCount[s] = curr + 1;
    }
  }
  let bestp = "";
  let bestc = -Infinity;
  for (let [p, c] of Object.entries(pkgpartsCount)) {
    if (c < bestc) {
      continue;
    }
    if (bestp.length > p) {
      continue;
    }
    bestp = p;
    bestc = c;
  }
  return bestp;
}

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

  const options = {
    emitTypes: !parameters["no_emit_types"],
    moduleSystem: parameters["module"] ?? "es6",
  };
  if (["es6", "commonjs"].includes(options.moduleSystem) === false) {
    throw new Error(
      `invalid option: expected "es6" or "commonjs" for "module" option, got "${moduleSystem}"`
    );
  }

  await debug("params", { parameters });

  const [outputName, dtsOutputName, protoFiles] = (() => {
    if (parameters["pb_js_name"]) {
      return [
        `${parameters["pb_js_name"]}.pb.js`,
        `${parameters["pb_js_name"]}.pb.d.ts`,
        request.file_to_generate,
      ];
    }
    if (request.file_to_generate.length > 1) {
      const p = commonPackagePrefix(request);
      return [`${p}.pb.js`, `${p}.pb.d.ts`, request.file_to_generate];
    } else {
      const protoFile = request.file_to_generate[0];
      const pbjsFileName = protoFile.replace(/\.proto$/i, ".pb.js");
      const pbtsFileName = protoFile.replace(/\.proto$/i, ".pb.d.ts");
      return [pbjsFileName, pbtsFileName, request.file_to_generate];
    }
  })();

  /** @type {google.protobuf.compiler.CodeGeneratorResponse.File[]} */
  const files = [];

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
      ...protoFiles,
    ]),
    {
      filepath: process.cwd(),
      parser: "babel",
    }
  );

  files.push({ name: outputName, content: pbjsFileContents });

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
      name: dtsOutputName,
      content: pbtsFileContents,
    });
  }

  files.push(...(await genTwirpCFServer(request, outputName, options)));

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
