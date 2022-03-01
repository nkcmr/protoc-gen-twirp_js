import * as globalThisPolyfill from "globalthis";
import { strings } from "./strings.reverser.pb";
import {
  encodeRequest,
  errorFromResponse,
  decodeResponse,
  badRouteError,
  parseTwirpPath,
  decodeRequest,
  setRequestDetails,
  encodeResponse,
  writeTwirpError,
} from "@nkcmr/protoc-gen-twirp_js";

export function sendReverserJSONRequest(method, request, options) {
  return sendReverserRequest(method, request, {
    ...options,
    contentType: "application/json",
  });
}
export function sendReverserProtobufRequest(method, request, options) {
  return sendReverserRequest(method, request, {
    ...options,
    contentType: "application/protobuf",
  });
}
async function sendReverserRequest(method, request, options) {
  const path = `/${encodeURIComponent(
    options.prefix || "twirp"
  )}/strings.reverser.Reverser/${method}`;
  let u = path;
  if (options.endpoint) {
    const epurl = new URL(options.endpoint);
    epurl.pathname = path;
    epurl.search = "";
    epurl.hash = "";
    u = epurl.toString();
  }
  /** @type {typeof fetch} */
  const fetcher = options.fetcher || globalThisPolyfill().fetch;
  switch (method) {
    case "StringReverse":
      const [body0, headers0] = encodeRequest(
        options.contentType,
        request,
        strings.reverser.StringReverseRequest
      );
      headers0.set("Accept", options.contentType);
      headers0.set("Twirp-Version", "v8.1.1");
      const res0 = await fetcher(u, {
        method: "POST",
        headers: headers0,
        body: body0,
      });
      const resBody0 = await res0.arrayBuffer();
      if (res0.status !== 200) {
        errorFromResponse(res0, resBody0);
      }
      return decodeResponse(
        options.contentType,
        resBody0,
        strings.reverser.StringReverseResponse
      );
  }
  badRouteError(`no handler for path ${path}`, "POST", path);
}
export async function handleReverserServer(request, handler) {
  try {
    const u = new URL(request.url);
    if (request.method !== "POST") {
      badRouteError(
        `unsupported method ${request.method} (only POST is allowed)`,
        request.method,
        u.pathname
      );
    }
    // Verify path format: [<prefix>]/<package>.<Service>/<Method>
    const [prefix, pkgService, method] = parseTwirpPath(u.pathname);
    if (pkgService !== "strings.reverser.Reverser") {
      badRouteError(
        `no handler for path ${u.pathname}`,
        request.method,
        u.pathname
      );
    }
    const expPrefix = handler.prefix || "twirp";
    if (prefix !== expPrefix) {
      badRouteError(
        `invalid path prefix ${prefix}, expected ${expPrefix}, on path ${u.pathname}`,
        request.method,
        u.pathname
      );
    }

    switch (method) {
      case "StringReverse":
        const [request0, ct0] = await decodeRequest(
          request,
          strings.reverser.StringReverseRequest
        );
        setRequestDetails(request0, {
          headers: request.headers,
        });
        const response0 = await handler.StringReverse(request0);
        return encodeResponse(
          ct0,
          response0,
          strings.reverser.StringReverseResponse
        );
    }
    badRouteError(
      `no handler for path ${u.pathname}`,
      request.method,
      u.pathname
    );
  } catch (e) {
    return writeTwirpError(e);
  }
}
