/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const strings = ($root.strings = (() => {
  /**
   * Namespace strings.
   * @exports strings
   * @namespace
   */
  const strings = {};

  strings.reverser = (function () {
    /**
     * Namespace reverser.
     * @memberof strings
     * @namespace
     */
    const reverser = {};

    reverser.StringReverseRequest = (function () {
      /**
       * Properties of a StringReverseRequest.
       * @memberof strings.reverser
       * @interface IStringReverseRequest
       * @property {string|null} [user_string] StringReverseRequest user_string
       */

      /**
       * Constructs a new StringReverseRequest.
       * @memberof strings.reverser
       * @classdesc Represents a StringReverseRequest.
       * @implements IStringReverseRequest
       * @constructor
       * @param {strings.reverser.IStringReverseRequest=} [properties] Properties to set
       */
      function StringReverseRequest(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * StringReverseRequest user_string.
       * @member {string} user_string
       * @memberof strings.reverser.StringReverseRequest
       * @instance
       */
      StringReverseRequest.prototype.user_string = "";

      /**
       * Creates a new StringReverseRequest instance using the specified properties.
       * @function create
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {strings.reverser.IStringReverseRequest=} [properties] Properties to set
       * @returns {strings.reverser.StringReverseRequest} StringReverseRequest instance
       */
      StringReverseRequest.create = function create(properties) {
        return new StringReverseRequest(properties);
      };

      /**
       * Encodes the specified StringReverseRequest message. Does not implicitly {@link strings.reverser.StringReverseRequest.verify|verify} messages.
       * @function encode
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {strings.reverser.StringReverseRequest} message StringReverseRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StringReverseRequest.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.user_string != null &&
          Object.hasOwnProperty.call(message, "user_string")
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.user_string);
        return writer;
      };

      /**
       * Encodes the specified StringReverseRequest message, length delimited. Does not implicitly {@link strings.reverser.StringReverseRequest.verify|verify} messages.
       * @function encodeDelimited
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {strings.reverser.StringReverseRequest} message StringReverseRequest message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StringReverseRequest.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a StringReverseRequest message from the specified reader or buffer.
       * @function decode
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {strings.reverser.StringReverseRequest} StringReverseRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StringReverseRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.strings.reverser.StringReverseRequest();
        while (reader.pos < end) {
          let tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.user_string = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a StringReverseRequest message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {strings.reverser.StringReverseRequest} StringReverseRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StringReverseRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a StringReverseRequest message.
       * @function verify
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      StringReverseRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (
          message.user_string != null &&
          message.hasOwnProperty("user_string")
        )
          if (!$util.isString(message.user_string))
            return "user_string: string expected";
        return null;
      };

      /**
       * Creates a StringReverseRequest message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {strings.reverser.StringReverseRequest} StringReverseRequest
       */
      StringReverseRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.strings.reverser.StringReverseRequest)
          return object;
        let message = new $root.strings.reverser.StringReverseRequest();
        if (object.user_string != null)
          message.user_string = String(object.user_string);
        return message;
      };

      /**
       * Creates a plain object from a StringReverseRequest message. Also converts values to other types if specified.
       * @function toObject
       * @memberof strings.reverser.StringReverseRequest
       * @static
       * @param {strings.reverser.StringReverseRequest} message StringReverseRequest
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      StringReverseRequest.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) object.user_string = "";
        if (
          message.user_string != null &&
          message.hasOwnProperty("user_string")
        )
          object.user_string = message.user_string;
        return object;
      };

      /**
       * Converts this StringReverseRequest to JSON.
       * @function toJSON
       * @memberof strings.reverser.StringReverseRequest
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      StringReverseRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return StringReverseRequest;
    })();

    reverser.StringReverseResponse = (function () {
      /**
       * Properties of a StringReverseResponse.
       * @memberof strings.reverser
       * @interface IStringReverseResponse
       * @property {string|null} [reversed_string] StringReverseResponse reversed_string
       * @property {google.protobuf.Timestamp|null} [reversed_at] StringReverseResponse reversed_at
       */

      /**
       * Constructs a new StringReverseResponse.
       * @memberof strings.reverser
       * @classdesc Represents a StringReverseResponse.
       * @implements IStringReverseResponse
       * @constructor
       * @param {strings.reverser.IStringReverseResponse=} [properties] Properties to set
       */
      function StringReverseResponse(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * StringReverseResponse reversed_string.
       * @member {string} reversed_string
       * @memberof strings.reverser.StringReverseResponse
       * @instance
       */
      StringReverseResponse.prototype.reversed_string = "";

      /**
       * StringReverseResponse reversed_at.
       * @member {google.protobuf.Timestamp|null|undefined} reversed_at
       * @memberof strings.reverser.StringReverseResponse
       * @instance
       */
      StringReverseResponse.prototype.reversed_at = null;

      /**
       * Creates a new StringReverseResponse instance using the specified properties.
       * @function create
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {strings.reverser.IStringReverseResponse=} [properties] Properties to set
       * @returns {strings.reverser.StringReverseResponse} StringReverseResponse instance
       */
      StringReverseResponse.create = function create(properties) {
        return new StringReverseResponse(properties);
      };

      /**
       * Encodes the specified StringReverseResponse message. Does not implicitly {@link strings.reverser.StringReverseResponse.verify|verify} messages.
       * @function encode
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {strings.reverser.StringReverseResponse} message StringReverseResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StringReverseResponse.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.reversed_string != null &&
          Object.hasOwnProperty.call(message, "reversed_string")
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.reversed_string);
        if (
          message.reversed_at != null &&
          Object.hasOwnProperty.call(message, "reversed_at")
        )
          $root.google.protobuf.Timestamp.encode(
            message.reversed_at,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified StringReverseResponse message, length delimited. Does not implicitly {@link strings.reverser.StringReverseResponse.verify|verify} messages.
       * @function encodeDelimited
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {strings.reverser.StringReverseResponse} message StringReverseResponse message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      StringReverseResponse.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a StringReverseResponse message from the specified reader or buffer.
       * @function decode
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {strings.reverser.StringReverseResponse} StringReverseResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StringReverseResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.strings.reverser.StringReverseResponse();
        while (reader.pos < end) {
          let tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.reversed_string = reader.string();
              break;
            case 2:
              message.reversed_at = $root.google.protobuf.Timestamp.decode(
                reader,
                reader.uint32()
              );
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a StringReverseResponse message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {strings.reverser.StringReverseResponse} StringReverseResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      StringReverseResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a StringReverseResponse message.
       * @function verify
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      StringReverseResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (
          message.reversed_string != null &&
          message.hasOwnProperty("reversed_string")
        )
          if (!$util.isString(message.reversed_string))
            return "reversed_string: string expected";
        if (
          message.reversed_at != null &&
          message.hasOwnProperty("reversed_at")
        ) {
          let error = $root.google.protobuf.Timestamp.verify(
            message.reversed_at
          );
          if (error) return "reversed_at." + error;
        }
        return null;
      };

      /**
       * Creates a StringReverseResponse message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {strings.reverser.StringReverseResponse} StringReverseResponse
       */
      StringReverseResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.strings.reverser.StringReverseResponse)
          return object;
        let message = new $root.strings.reverser.StringReverseResponse();
        if (object.reversed_string != null)
          message.reversed_string = String(object.reversed_string);
        if (object.reversed_at != null) {
          if (typeof object.reversed_at !== "object")
            throw TypeError(
              ".strings.reverser.StringReverseResponse.reversed_at: object expected"
            );
          message.reversed_at = $root.google.protobuf.Timestamp.fromObject(
            object.reversed_at
          );
        }
        return message;
      };

      /**
       * Creates a plain object from a StringReverseResponse message. Also converts values to other types if specified.
       * @function toObject
       * @memberof strings.reverser.StringReverseResponse
       * @static
       * @param {strings.reverser.StringReverseResponse} message StringReverseResponse
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      StringReverseResponse.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          object.reversed_string = "";
          object.reversed_at = null;
        }
        if (
          message.reversed_string != null &&
          message.hasOwnProperty("reversed_string")
        )
          object.reversed_string = message.reversed_string;
        if (
          message.reversed_at != null &&
          message.hasOwnProperty("reversed_at")
        )
          object.reversed_at = $root.google.protobuf.Timestamp.toObject(
            message.reversed_at,
            options
          );
        return object;
      };

      /**
       * Converts this StringReverseResponse to JSON.
       * @function toJSON
       * @memberof strings.reverser.StringReverseResponse
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      StringReverseResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return StringReverseResponse;
    })();

    return reverser;
  })();

  return strings;
})());

export const google = ($root.google = (() => {
  /**
   * Namespace google.
   * @exports google
   * @namespace
   */
  const google = {};

  google.protobuf = (function () {
    /**
     * Namespace protobuf.
     * @memberof google
     * @namespace
     */
    const protobuf = {};

    protobuf.Timestamp = (function () {
      /**
       * Properties of a Timestamp.
       * @memberof google.protobuf
       * @interface ITimestamp
       * @property {number|null} [seconds] Timestamp seconds
       * @property {number|null} [nanos] Timestamp nanos
       */

      /**
       * Constructs a new Timestamp.
       * @memberof google.protobuf
       * @classdesc Represents a Timestamp.
       * @implements ITimestamp
       * @constructor
       * @param {google.protobuf.ITimestamp=} [properties] Properties to set
       */
      function Timestamp(properties) {
        if (properties)
          for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Timestamp seconds.
       * @member {number} seconds
       * @memberof google.protobuf.Timestamp
       * @instance
       */
      Timestamp.prototype.seconds = $util.Long
        ? $util.Long.fromBits(0, 0, false)
        : 0;

      /**
       * Timestamp nanos.
       * @member {number} nanos
       * @memberof google.protobuf.Timestamp
       * @instance
       */
      Timestamp.prototype.nanos = 0;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @function create
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.ITimestamp=} [properties] Properties to set
       * @returns {google.protobuf.Timestamp} Timestamp instance
       */
      Timestamp.create = function create(properties) {
        return new Timestamp(properties);
      };

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @function encode
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.Timestamp} message Timestamp message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Timestamp.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.seconds != null &&
          Object.hasOwnProperty.call(message, "seconds")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int64(message.seconds);
        if (
          message.nanos != null &&
          Object.hasOwnProperty.call(message, "nanos")
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.nanos);
        return writer;
      };

      /**
       * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @function encodeDelimited
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.Timestamp} message Timestamp message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @function decode
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {google.protobuf.Timestamp} Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Timestamp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.google.protobuf.Timestamp();
        while (reader.pos < end) {
          let tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.seconds = reader.int64();
              break;
            case 2:
              message.nanos = reader.int32();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Timestamp message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {google.protobuf.Timestamp} Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Timestamp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Timestamp message.
       * @function verify
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Timestamp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.seconds != null && message.hasOwnProperty("seconds"))
          if (
            !$util.isInteger(message.seconds) &&
            !(
              message.seconds &&
              $util.isInteger(message.seconds.low) &&
              $util.isInteger(message.seconds.high)
            )
          )
            return "seconds: integer|Long expected";
        if (message.nanos != null && message.hasOwnProperty("nanos"))
          if (!$util.isInteger(message.nanos)) return "nanos: integer expected";
        return null;
      };

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {google.protobuf.Timestamp} Timestamp
       */
      Timestamp.fromObject = function fromObject(object) {
        if (object instanceof $root.google.protobuf.Timestamp) return object;
        let message = new $root.google.protobuf.Timestamp();
        if (object.seconds != null)
          if ($util.Long)
            (message.seconds = $util.Long.fromValue(
              object.seconds
            )).unsigned = false;
          else if (typeof object.seconds === "string")
            message.seconds = parseInt(object.seconds, 10);
          else if (typeof object.seconds === "number")
            message.seconds = object.seconds;
          else if (typeof object.seconds === "object")
            message.seconds = new $util.LongBits(
              object.seconds.low >>> 0,
              object.seconds.high >>> 0
            ).toNumber();
        if (object.nanos != null) message.nanos = object.nanos | 0;
        return message;
      };

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @function toObject
       * @memberof google.protobuf.Timestamp
       * @static
       * @param {google.protobuf.Timestamp} message Timestamp
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Timestamp.toObject = function toObject(message, options) {
        if (!options) options = {};
        let object = {};
        if (options.defaults) {
          if ($util.Long) {
            let long = new $util.Long(0, 0, false);
            object.seconds =
              options.longs === String
                ? long.toString()
                : options.longs === Number
                ? long.toNumber()
                : long;
          } else object.seconds = options.longs === String ? "0" : 0;
          object.nanos = 0;
        }
        if (message.seconds != null && message.hasOwnProperty("seconds"))
          if (typeof message.seconds === "number")
            object.seconds =
              options.longs === String
                ? String(message.seconds)
                : message.seconds;
          else
            object.seconds =
              options.longs === String
                ? $util.Long.prototype.toString.call(message.seconds)
                : options.longs === Number
                ? new $util.LongBits(
                    message.seconds.low >>> 0,
                    message.seconds.high >>> 0
                  ).toNumber()
                : message.seconds;
        if (message.nanos != null && message.hasOwnProperty("nanos"))
          object.nanos = message.nanos;
        return object;
      };

      /**
       * Converts this Timestamp to JSON.
       * @function toJSON
       * @memberof google.protobuf.Timestamp
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Timestamp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Timestamp;
    })();

    return protobuf;
  })();

  return google;
})());

export { $root as default };
