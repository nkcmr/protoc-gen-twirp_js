const fs = require("fs");
const { main: protobufjsmain } = require("protobufjs/cli/pbjs");
const { main: protobuftsmain } = require("protobufjs/cli/pbts");
const { google } = require("./plugin.pb");
const prettier = require("prettier");

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
async function genTwirpCFServer(request, pbjsFileName) {
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
  sc.push(
    `const { ${[...rootsToImport.values()].join(
      ", "
    )} } = require('./${pbjsFileName.replace(/\.js$/i, "")}');`,
    `const { badRouteError, parseTwirpPath, decodeRequest, setRequestDetails } = require('@nkcmr/protoc-gen-twirp_js');`,
    ""
  );

  for (let pf of request.proto_file) {
    for (let svc of pf.service) {
      sc.write(function* () {
        yield `/**`;
        yield ` * @param {Request} request`;
        yield ` * @param {*} handler`;
        yield ` * @returns {Promise<Response>}`;
        yield ` */`;
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
              yield `const contentType = request.headers.get('Content-Type').split(';').pop();`;
              yield "";
              yield `switch (method) {`;
              for (let i = 0; i < svc.method.length; i++) {
                const m = svc.method[i];
                sc.write(function* () {
                  yield `case "${m.name}":`;
                  sc.write(function* () {
                    yield `const request${i} = decodeRequest(contentType, await request.arrayBuffer(), ${m.input_type.slice(1)})`;
                    yield `setRequestDetails(request${i}, {`;
                    sc.write(function* () {
                      yield `headers: request.headers,`;
                    });
                    yield `});`;
                    yield `/** @type {${m.output_type.slice(
                      1
                    )}} response${i} */`;
                    yield `const response${i} = await handler.${m.name}(request${i});`;
                    yield `return encodeResponse(contentType, response${i}, ${m.output_type.slice(1)})`;
                  });
                });
              }
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
    }
  }

  return {
    name: `${commonPackagePrefix(request)}.twirp.js`,
    content: prettier.format([...sc, ""].join("\n"), {
      filepath: process.cwd(),
      parser: "babel",
    }),
  };
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

  await debug("params", { parameters });

  const [outputName, protoFiles] = (() => {
    if (parameters["pb_js_name"]) {
      return [`${parameters["pb_js_name"]}.pb.js`, request.file_to_generate];
    }
    if (request.file_to_generate.length > 1) {
      return [
        `${commonPackagePrefix(request)}.pb.js`,
        request.file_to_generate,
      ];
    } else {
      const protoFile = request.file_to_generate[0];
      const pbjsFileName = protoFile.replace(/\.proto$/i, ".pb.js");
      return [pbjsFileName, request.file_to_generate];
    }
  })();

  const pbjsFileContents = prettier.format(
    await protobufjs([
      "-t",
      "static-module",
      "-w",
      "commonjs",
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

  const response = google.protobuf.compiler.CodeGeneratorResponse.create({});
  response.file.push(
    {
      name: outputName,
      content: pbjsFileContents,
    },
    await genTwirpCFServer(request, outputName)
  );

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
    const errResponse = CodeGeneratorResponse.create({ error: `${e}` });
    outputResponse(errResponse);
  }
})();
