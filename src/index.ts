import { Reader, Writer } from "protobufjs/minimal";

export class TwirpError extends Error {
  public readonly errorCode: ErrorCode;
  public readonly meta: Record<string, string>;

  constructor(
    errorCode: ErrorCode,
    msg: string,
    meta: Record<string, string> = {}
  ) {
    super(msg);
    this.errorCode = errorCode;
    this.meta = meta;
  }

  withMeta(key: string, value: string): TwirpError {
    const newError = new TwirpError(this.errorCode, this.message, {
      ...this.meta,
      [key]: value,
    });
    newError.stack = this.stack;
    return newError;
  }

  toJSON(): any {
    const out: any = {
      code: this.errorCode,
      msg: this.message,
    };
    if (Object.keys(this.meta).length > 0) {
      out.meta = this.meta;
    }
    return out;
  }
}

type RawTwirpError = {
  code: string;
  msg: string;
  meta?: Record<string, string>;
};

function isRawTwirpError(v?: any): v is RawTwirpError {
  if (!v) {
    return false;
  }
  if (typeof v !== "object") {
    return false;
  }
  const presentKeys = new Set<string>(Object.keys(v));
  const requiredKeys = new Set(["code", "msg"]);
  const allowedKeys = new Set(["code", "msg", "meta"]);
  const missingRequired = difference(requiredKeys, presentKeys);
  if (missingRequired.size > 0) {
    return false;
  }
  const extraKeys = difference(presentKeys, allowedKeys);
  if (extraKeys.size > 0) {
    return false;
  }

  if (typeof v["code"] !== "string") {
    return false;
  }
  if (typeof v["msg"] !== "string") {
    return false;
  }
  if (v["meta"]) {
    if (typeof v["meta"] !== "object") {
      return false;
    }
    for (let [mk, mv] of Object.entries(v["meta"])) {
      if (typeof mk !== "string") {
        return false;
      }
      if (typeof mv !== "string") {
        return false;
      }
    }
  }
  return true;
}

function difference<T = any>(setA: Set<T>, setB: Set<T>) {
  let diff = new Set(setA);
  for (let elem of setB) {
    diff.delete(elem);
  }
  return diff;
}

const JSON_DECODE_FAILURE = Symbol("safeParseJSON.failure");

function arrayBufferToString(data: ArrayBuffer): string {
  const td = new TextDecoder();
  return td.decode(data);
}

function safeParseJSON(data: ArrayBuffer): typeof JSON_DECODE_FAILURE | any {
  try {
    return JSON.parse(arrayBufferToString(data));
  } catch {
    return JSON_DECODE_FAILURE;
  }
}

export function errorFromResponse(resp: Response, body: ArrayBuffer): never {
  const statusCode = resp.status;
  const statusText = resp.statusText;
  if (isHTTPRedirect(statusCode)) {
    const location = resp.headers.get("Location") ?? "";
    const msg = `unexpected HTTP status code ${statusCode} ${statusText} received, Location=${location}`;
    twirpErrorFromIntermediary(statusCode, msg, location);
  }

  const jsonBody = safeParseJSON(body);
  if (!isRawTwirpError(jsonBody)) {
    const msg = `Error from intermediary with HTTP status code ${statusCode} ${statusText}`;
    twirpErrorFromIntermediary(statusCode, msg, arrayBufferToString(body));
  }

  if (serverHTTPStatusFromErrorCode(jsonBody.code as ErrorCode) === 0) {
    const msg = `invalid type returned from server error response: ${jsonBody.code}`;
    throw new TwirpError(ErrorCode.Internal, msg, {
      body: arrayBufferToString(body),
    });
  }

  throw new TwirpError(jsonBody.code as ErrorCode, jsonBody.msg, jsonBody.meta);
}

// twirpErrorFromIntermediary maps HTTP errors from non-twirp sources to twirp errors.
// The mapping is similar to gRPC: https://github.com/grpc/grpc/blob/master/doc/http-grpc-status-mapping.md.
// Returned twirp Errors have some additional metadata for inspection.
function twirpErrorFromIntermediary(
  status: number,
  msg: string,
  bodyOrLocation: string
): never {
  var code: ErrorCode;
  if (isHTTPRedirect(status)) {
    // 3xx
    code = ErrorCode.Internal;
  } else {
    switch (status) {
      case 400: // Bad Request
        code = ErrorCode.Internal;
        break;
      case 401: // Unauthorized
        code = ErrorCode.Unauthenticated;
        break;
      case 403: // Forbidden
        code = ErrorCode.PermissionDenied;
        break;
      case 404: // Not Found
        code = ErrorCode.BadRoute;
        break;
      case 429: // Too Many Requests
        code = ErrorCode.ResourceExhausted;
        break;

      // Bad Gateway, Service Unavailable, Gateway Timeout
      case 502:
      case 503:
      case 504:
        code = ErrorCode.Unavailable;
        break;
      default:
        // All other codes
        code = ErrorCode.Unknown;
        break;
    }
  }

  const twerr = new TwirpError(code, msg, {
    http_error_from_intermediary: "true",
    status_code: status.toString(),
  });
  if (isHTTPRedirect(status)) {
    throw twerr.withMeta("location", bodyOrLocation);
  } else {
    throw twerr.withMeta("body", bodyOrLocation);
  }
}

function isHTTPRedirect(status: number): boolean {
  return status >= 300 && status <= 399;
}

export type TwirpRequestOptions = {
  contentType: ContentType;
  fetcher?: typeof fetch;
  prefix?: string;
  endpoint?: string; // https://example.com
};

export type RequestDetails = {
  headers: Headers;
};

const requestInfo = new WeakMap<object, RequestDetails>();

export function setRequestDetails(request: object, details: RequestDetails) {
  requestInfo.set(request, details);
}

export function getRequestDetails(request: object): RequestDetails | undefined {
  return requestInfo.get(request);
}

const responseHeaders = new WeakMap<object, Headers>();

/**
 * setResponseHeaders allow for business-logic code to modify response HTTP
 * headers. Wrapping the return with this call will suffice:
 *
 * return setResponseHeaders(my.protobuf.create({ ... }), {"Set-Cookie": "..."})
 */
export function setResponseHeaders<T extends object>(
  response: T,
  headers: HeadersInit
): T {
  responseHeaders.set(response, new Headers(headers));
  return response;
}

function getResponseHeaders<T extends object>(
  response: T
): Headers | undefined {
  return responseHeaders.get(response);
}

/**
 * @throws {TwirpError}
 */
export function badRouteError(msg: string, method: string, url: string): never {
  throw new TwirpError(ErrorCode.BadRoute, msg, {
    twirp_invalid_route: `${method} ${url}`,
  });
}

export function parseTwirpPath(path: string): [string, string, string] {
  const parts = path.split("/").slice(1 /** skip the first "/" */);
  if (parts.length < 2) {
    return ["", "", ""];
  }
  const method = parts[parts.length - 1];
  const pkgService = parts[parts.length - 2];
  const prefix = parts.slice(0, parts.length - 2).join("/");
  return [prefix, pkgService, method];
}

export function internalErrorWith(otherErr: Error): TwirpError {
  if (otherErr instanceof TwirpError) {
    return otherErr;
  }
  const twerr = new TwirpError(ErrorCode.Internal, otherErr.message);
  twerr.stack = otherErr.stack;
  return twerr.withMeta("cause", otherErr.name);
}

export function writeTwirpError(e: any): Response {
  if (!(e instanceof TwirpError)) {
    if (e instanceof Error) {
      e = internalErrorWith(e);
    } else {
      const te = new TwirpError(ErrorCode.Unknown, `unknown error: ${e}`);
      e = te;
    }
  }
  const statusCode = serverHTTPStatusFromErrorCode((e as TwirpError).errorCode);
  const respBody = JSON.stringify(e);
  const headers = new Headers({
    "Content-Type": "application/json",
    "Content-Length": respBody.length.toString(),
  });
  return new Response(respBody, { status: statusCode, headers });
}

export interface IProtobufClass<T> {
  fromObject(object: Record<string, any>): T;
  toObject(message: T): any;
  decode(reader: Reader | Uint8Array, length?: number): T;
  encode(message: T): Writer;
}

type ContentType = "application/json" | "application/protobuf";

export function decodeResponse<T extends object>(
  contentType: ContentType,
  response: ArrayBuffer,
  responseClass: IProtobufClass<T>
): T {
  switch (contentType) {
    case "application/json":
      const rawJson = safeParseJSON(response);
      if (rawJson === JSON_DECODE_FAILURE) {
        throw new TwirpError(
          ErrorCode.Malformed,
          "failed to parse json response"
        );
      }
      return responseClass.fromObject(rawJson);
    case "application/protobuf":
      return responseClass.decode(new Uint8Array(response));
  }
}

export async function decodeRequest<T = unknown>(
  request: Request,
  requestClass: IProtobufClass<T>
): Promise<[T, ContentType]> {
  const body = await request.arrayBuffer();
  const contentTypeRaw = request.headers.get("Content-Type") || "";
  const contentType = contentTypeRaw.split(";").pop();

  switch (contentType) {
    case "application/json":
      const td = new TextDecoder();
      const jstr = td.decode(new Uint8Array(body));
      try {
        const rawJson = JSON.parse(jstr);
        return [requestClass.fromObject(rawJson), contentType];
      } catch (e: any) {
        throw new TwirpError(
          ErrorCode.Malformed,
          `the json request could not be decoded: ${e.message}`
        );
      }
    case "application/protobuf":
      try {
        return [requestClass.decode(new Uint8Array(body)), contentType];
      } catch (e: any) {
        throw new TwirpError(
          ErrorCode.Malformed,
          `the protobuf request could not be decoded: ${e.message}`
        );
      }
  }
  badRouteError(
    `unexpected Content-Type: ${contentTypeRaw}`,
    request.method,
    new URL(request.url).pathname
  );
}

export function encodeRequest<T extends object>(
  contentType: ContentType,
  request: T,
  requestClass: IProtobufClass<T>
): [BodyInit, Headers] {
  switch (contentType) {
    case "application/json":
      const requestStr = JSON.stringify(requestClass.toObject(request));
      return [
        requestStr,
        new Headers({
          "Content-Type": contentType,
          "Content-Length": requestStr.length.toString(),
        }),
      ];
    case "application/protobuf":
      const requestUint8Arr = requestClass.encode(request).finish();
      return [
        requestUint8Arr,
        new Headers({
          "Content-Type": contentType,
          "Content-Length": requestUint8Arr.byteLength.toString(),
        }),
      ];
  }
}

export function encodeResponse<T extends object>(
  contentType: ContentType,
  response: T,
  responseClass: IProtobufClass<T>
): Response {
  const headers = getResponseHeaders(response) ?? new Headers();
  switch (contentType) {
    case "application/json":
      const responseStr = JSON.stringify(responseClass.toObject(response));
      headers.set("Content-Type", "application/json");
      headers.set("Content-Length", responseStr.length.toString());
      return new Response(responseStr, {
        status: 200,
        headers: headers,
      });
    case "application/protobuf":
      const responseUint8Arr = responseClass.encode(response).finish();
      headers.set("Content-Type", "application/protobuf");
      headers.set("Content-Length", responseUint8Arr.byteLength.toString());
      return new Response(responseUint8Arr, {
        status: 200,
        headers: headers,
      });
  }
}

/**
 * @param {ErrorCode} code
 * @returns {number}
 */
export function serverHTTPStatusFromErrorCode(code: ErrorCode): number {
  switch (code) {
    case ErrorCode.Canceled:
      return 408; // RequestTimeout
    case ErrorCode.Unknown:
      return 500; // Internal Server Error
    case ErrorCode.InvalidArgument:
      return 400; // BadRequest
    case ErrorCode.Malformed:
      return 400; // BadRequest
    case ErrorCode.DeadlineExceeded:
      return 408; // RequestTimeout
    case ErrorCode.NotFound:
      return 404; // Not Found
    case ErrorCode.BadRoute:
      return 404; // Not Found
    case ErrorCode.AlreadyExists:
      return 409; // Conflict
    case ErrorCode.PermissionDenied:
      return 403; // Forbidden
    case ErrorCode.Unauthenticated:
      return 401; // Unauthorized
    case ErrorCode.ResourceExhausted:
      return 429; // Too Many Requests
    case ErrorCode.FailedPrecondition:
      return 412; // Precondition Failed
    case ErrorCode.Aborted:
      return 409; // Conflict
    case ErrorCode.OutOfRange:
      return 400; // Bad Request
    case ErrorCode.Unimplemented:
      return 501; // Not Implemented
    case ErrorCode.Internal:
      return 500; // Internal Server Error
    case ErrorCode.Unavailable:
      return 503; // Service Unavailable
    case ErrorCode.DataLoss:
      return 500; // Internal Server Error
    case ErrorCode.NoError:
      return 200; // OK
  }
  return 0; // Invalid!
}

// Valid Twirp error types. Most error types are equivalent to gRPC status codes
// and follow the same semantics.

export enum ErrorCode {
  // Canceled indicates the operation was cancelled (typically by the caller).
  Canceled = "canceled",

  // Unknown error. For example when handling errors raised by APIs that do not
  // return enough error information.
  Unknown = "unknown",

  // InvalidArgument indicates client specified an invalid argument. It
  // indicates arguments that are problematic regardless of the state of the
  // system (i.e. a malformed file name, required argument, number out of range,
  // etc.).
  InvalidArgument = "invalid_argument",

  // Malformed indicates an error occurred while decoding the client's request.
  // This may mean that the message was encoded improperly, or that there is a
  // disagreement in message format between the client and server.
  Malformed = "malformed",

  // DeadlineExceeded means operation expired before completion. For operations
  // that change the state of the system, this error may be returned even if the
  // operation has completed successfully (timeout).
  DeadlineExceeded = "deadline_exceeded",

  // NotFound means some requested entity was not found.
  NotFound = "not_found",

  // BadRoute means that the requested URL path wasn't routable to a Twirp
  // service and method. This is returned by the generated server, and usually
  // shouldn't be returned by applications. Instead, applications should use
  // NotFound or Unimplemented.
  BadRoute = "bad_route",

  // AlreadyExists means an attempt to create an entity failed because one
  // already exists.
  AlreadyExists = "already_exists",

  // PermissionDenied indicates the caller does not have permission to execute
  // the specified operation. It must not be used if the caller cannot be
  // identified (Unauthenticated).
  PermissionDenied = "permission_denied",

  // Unauthenticated indicates the request does not have valid authentication
  // credentials for the operation.
  Unauthenticated = "unauthenticated",

  // ResourceExhausted indicates some resource has been exhausted or rate-limited,
  // perhaps a per-user quota, or perhaps the entire file system is out of space.
  ResourceExhausted = "resource_exhausted",

  // FailedPrecondition indicates operation was rejected because the system is
  // not in a state required for the operation's execution. For example, doing
  // an rmdir operation on a directory that is non-empty, or on a non-directory
  // object, or when having conflicting read-modify-write on the same resource.
  FailedPrecondition = "failed_precondition",

  // Aborted indicates the operation was aborted, typically due to a concurrency
  // issue like sequencer check failures, transaction aborts, etc.
  Aborted = "aborted",

  // OutOfRange means operation was attempted past the valid range. For example,
  // seeking or reading past end of a paginated collection.
  //
  // Unlike InvalidArgument, this error indicates a problem that may be fixed if
  // the system state changes (i.e. adding more items to the collection).
  //
  // There is a fair bit of overlap between FailedPrecondition and OutOfRange.
  // We recommend using OutOfRange (the more specific error) when it applies so
  // that callers who are iterating through a space can easily look for an
  // OutOfRange error to detect when they are done.
  OutOfRange = "out_of_range",

  // Unimplemented indicates operation is not implemented or not
  // supported/enabled in this service.
  Unimplemented = "unimplemented",

  // Internal errors. When some invariants expected by the underlying system
  // have been broken. In other words, something bad happened in the library or
  // backend service. Do not confuse with HTTP Internal Server Error; an
  // Internal error could also happen on the client code, i.e. when parsing a
  // server response.
  Internal = "internal",

  // Unavailable indicates the service is currently unavailable. This is a most
  // likely a transient condition and may be corrected by retrying with a
  // backoff.
  Unavailable = "unavailable",

  // DataLoss indicates unrecoverable data loss or corruption.
  DataLoss = "data_loss",

  // NoError is the zero-value, is considered an empty error and should not be
  // used.
  NoError = "",
}
