import { strings } from "./strings.reverser.pb";
import { TwirpRequestOptions } from "@nkcmr/protoc-gen-twirp_js";

export function sendReverserJSONRequest(
  method: "StringReverse",
  request: strings.reverser.StringReverseRequest,
  options: Omit<TwirpRequestOptions, "contentType">
): Promise<strings.reverser.StringReverseResponse>;
export function sendReverserProtobufRequest(
  method: "StringReverse",
  request: strings.reverser.StringReverseRequest,
  options: Omit<TwirpRequestOptions, "contentType">
): Promise<strings.reverser.StringReverseResponse>;

export interface IReverserHandler {
  prefix?: string;
  StringReverse(
    request: strings.reverser.StringReverseRequest
  ): Promise<strings.reverser.StringReverseResponse>;
}

export function handleReverserServer(
  request: Request,
  handler: IReverserHandler
): Promise<Response>;
