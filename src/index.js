export class TwirpError extends Error {
  /**
   * @param {string} errorCode
   * @param {string} msg
   */
  constructor(errorCode, msg, meta = {}) {
    this.errorCode = errorCode;
    this.message = msg;
    this.meta = meta;
  }

  /**
   * @param {string} key
   * @param {string} value
   */
  withMeta(key, value) {
    const newError = new TwirpError(this.errorCode, this.message, {
      ...this.meta,
      [key]: value,
    });
    newError.stack = this.stack;
    return newError;
  }

  /**
   * @returns {*}
   */
  toJSON() {
    const out = {
      code: this.errorCode,
      msg: this.message,
    };
    if (Object.keys(this.meta).length > 0) {
      out.meta = this.meta;
    }
    return out;
  }
}

/**
 * @typedef {Object} RequestDetails
 * @property {Headers} headers
 */

/** @type {WeakMap<any, RequestDetails>} */
const requestInfo = new WeakMap();

/**
 * @param {*} request
 * @param {RequestDetails} details
 * @returns {void}
 */
export function setRequestDetails(request, details) {
  requestInfo.set(request, details);
}

/**
 * @param {*} request
 * @returns {RequestDetails|undefined}
 */
export function getRequestDetails(request) {
  return requestInfo.get(request);
}

/**
 * @param {string} msg
 * @param {string} method
 * @param {string} url
 * @throws {TwirpError}
 * @returns {never}
 */
export function badRouteError(msg, method, url) {
  throw new TwirpError(BadRoute, msg, {
    twirp_invalid_route: `${method} ${url}`,
  });
}

/**
 * @param {string} path
 * @returns {[string, string, string]}
 */
export function parseTwirpPath(path) {
  const parts = path.split("/");
  if (parts.length < 2) {
    return ["", "", ""];
  }
  const method = parts[parts.length - 1];
  const pkgService = parts[parts.length - 2];
  const prefix = parts.slice(0, parts.length - 2).join("/");
  return [prefix, pkgService, method];
}

/**
 * @param {Error} otherErr
 * @returns {TwirpError}
 */
export function internalErrorWith(otherErr) {
  if (otherErr instanceof TwirpError) {
    return otherErr;
  }
  const twerr = new TwirpError(Internal, otherErr.message);
  twerr.stack = otherErr.stack;
  return twerr.withMeta("cause", otherErr.name);
}

/**
 * @param {Error} e
 * @returns {Response}
 */
export function writeTwirpError(e) {
  if (!(e instanceof TwirpError)) {
    e = internalErrorWith(e);
  }
  const statusCode = serverHTTPStatusFromErrorCode(e.errorCode);
  const respBody = JSON.stringify(e);
  const headers = new Headers({
    "Content-Type": "application/json",
    "Content-Length": respBody.length.toString(),
  });
  return new Response(respBody, { status: statusCode, headers });
}

/**
 * @param {string} contentType
 * @param {ArrayBuffer} body
 * @param {*} requestClass
 */
export function decodeRequest(contentType, body, requestClass) {
  switch (contentType) {
    case "application/json":
      const td = new TextDecoder();
      const jstr = td.decode(new Uint8Array(body));
      try {
        const rawJson = JSON.parse(jstr);
        return requestClass.fromObject(rawJson);
      } catch (e) {
        throw new TwirpError(
          Malformed,
          `the json request could not be decoded: ${e.message}`
        );
      }
    case "application/protobuf":
      try {
        return requestClass.decode(new Uint8Array(body));
      } catch (e) {
        throw new TwirpError(
          Malformed,
          `the protobuf request could not be decoded: ${e.message}`
        );
      }
  }
  badRouteError(`unexpected Content-Type: ${contentType}`);
}

/**
 * @param {string} contentType
 * @param {*} response
 * @param {*} responseClass
 * @returns {Response}
 */
export function encodeResponse(contentType, response, responseClass) {
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
  badRouteError(`unexpected Content-Type: ${contentType}`);
}

/**
 * @param {string} code
 * @returns {number}
 */
export function serverHTTPStatusFromErrorCode(code) {
  switch (code) {
    case Canceled:
      return 408; // RequestTimeout
    case Unknown:
      return 500; // Internal Server Error
    case InvalidArgument:
      return 400; // BadRequest
    case Malformed:
      return 400; // BadRequest
    case DeadlineExceeded:
      return 408; // RequestTimeout
    case NotFound:
      return 404; // Not Found
    case BadRoute:
      return 404; // Not Found
    case AlreadyExists:
      return 409; // Conflict
    case PermissionDenied:
      return 403; // Forbidden
    case Unauthenticated:
      return 401; // Unauthorized
    case ResourceExhausted:
      return 429; // Too Many Requests
    case FailedPrecondition:
      return 412; // Precondition Failed
    case Aborted:
      return 409; // Conflict
    case OutOfRange:
      return 400; // Bad Request
    case Unimplemented:
      return 501; // Not Implemented
    case Internal:
      return 500; // Internal Server Error
    case Unavailable:
      return 503; // Service Unavailable
    case DataLoss:
      return 500; // Internal Server Error
    case NoError:
      return 200; // OK
  }
  return 0; // Invalid!
}

// Valid Twirp error types. Most error types are equivalent to gRPC status codes
// and follow the same semantics.

// Canceled indicates the operation was cancelled (typically by the caller).
export const Canceled = "canceled";

// Unknown error. For example when handling errors raised by APIs that do not
// return enough error information.
export const Unknown = "unknown";

// InvalidArgument indicates client specified an invalid argument. It
// indicates arguments that are problematic regardless of the state of the
// system (i.e. a malformed file name, required argument, number out of range,
// etc.).
export const InvalidArgument = "invalid_argument";

// Malformed indicates an error occurred while decoding the client's request.
// This may mean that the message was encoded improperly, or that there is a
// disagreement in message format between the client and server.
export const Malformed = "malformed";

// DeadlineExceeded means operation expired before completion. For operations
// that change the state of the system, this error may be returned even if the
// operation has completed successfully (timeout).
export const DeadlineExceeded = "deadline_exceeded";

// NotFound means some requested entity was not found.
export const NotFound = "not_found";

// BadRoute means that the requested URL path wasn't routable to a Twirp
// service and method. This is returned by the generated server, and usually
// shouldn't be returned by applications. Instead, applications should use
// NotFound or Unimplemented.
export const BadRoute = "bad_route";

// AlreadyExists means an attempt to create an entity failed because one
// already exists.
export const AlreadyExists = "already_exists";

// PermissionDenied indicates the caller does not have permission to execute
// the specified operation. It must not be used if the caller cannot be
// identified (Unauthenticated).
export const PermissionDenied = "permission_denied";

// Unauthenticated indicates the request does not have valid authentication
// credentials for the operation.
export const Unauthenticated = "unauthenticated";

// ResourceExhausted indicates some resource has been exhausted or rate-limited,
// perhaps a per-user quota, or perhaps the entire file system is out of space.
export const ResourceExhausted = "resource_exhausted";

// FailedPrecondition indicates operation was rejected because the system is
// not in a state required for the operation's execution. For example, doing
// an rmdir operation on a directory that is non-empty, or on a non-directory
// object, or when having conflicting read-modify-write on the same resource.
export const FailedPrecondition = "failed_precondition";

// Aborted indicates the operation was aborted, typically due to a concurrency
// issue like sequencer check failures, transaction aborts, etc.
export const Aborted = "aborted";

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
export const OutOfRange = "out_of_range";

// Unimplemented indicates operation is not implemented or not
// supported/enabled in this service.
export const Unimplemented = "unimplemented";

// Internal errors. When some invariants expected by the underlying system
// have been broken. In other words, something bad happened in the library or
// backend service. Do not confuse with HTTP Internal Server Error; an
// Internal error could also happen on the client code, i.e. when parsing a
// server response.
export const Internal = "internal";

// Unavailable indicates the service is currently unavailable. This is a most
// likely a transient condition and may be corrected by retrying with a
// backoff.
export const Unavailable = "unavailable";

// DataLoss indicates unrecoverable data loss or corruption.
export const DataLoss = "data_loss";

// NoError is the zero-value, is considered an empty error and should not be
// used.
export const NoError = "";
