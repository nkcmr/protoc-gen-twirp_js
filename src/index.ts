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

/**
 * @param {string} contentType
 * @param {*} response
 * @param {*} responseClass
 * @returns {Response}
 */
export function encodeResponse<T = unknown>(
  contentType: ContentType,
  response: T,
  responseClass: IProtobufClass<T>
): Response {
  switch (contentType) {
    case "application/json":
      const responseStr = JSON.stringify(responseClass.toObject(response));
      return new Response(responseStr, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": responseStr.length.toString(),
        },
      });
    case "application/protobuf":
      /** @type {Uint8Array} responseUint8Arr */
      const responseUint8Arr = responseClass.encode(response).finish();
      return new Response(responseUint8Arr, {
        status: 200,
        headers: {
          "Content-Type": "application/protobuf",
          "Content-Length": responseUint8Arr.byteLength.toString(),
        },
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
