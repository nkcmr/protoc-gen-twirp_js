import * as $protobuf from "protobufjs";
/** Namespace strings. */
export namespace strings {
  /** Namespace reverser. */
  namespace reverser {
    /** Properties of a StringReverseRequest. */
    interface IStringReverseRequest {
      /** StringReverseRequest user_string */
      user_string?: string | null;
    }

    /** Represents a StringReverseRequest. */
    class StringReverseRequest implements IStringReverseRequest {
      /**
       * Constructs a new StringReverseRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: strings.reverser.IStringReverseRequest);

      /** StringReverseRequest user_string. */
      public user_string: string;

      /**
       * Creates a new StringReverseRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns StringReverseRequest instance
       */
      public static create(
        properties?: strings.reverser.IStringReverseRequest
      ): strings.reverser.StringReverseRequest;

      /**
       * Encodes the specified StringReverseRequest message. Does not implicitly {@link strings.reverser.StringReverseRequest.verify|verify} messages.
       * @param message StringReverseRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: strings.reverser.StringReverseRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified StringReverseRequest message, length delimited. Does not implicitly {@link strings.reverser.StringReverseRequest.verify|verify} messages.
       * @param message StringReverseRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: strings.reverser.StringReverseRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a StringReverseRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns StringReverseRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): strings.reverser.StringReverseRequest;

      /**
       * Decodes a StringReverseRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns StringReverseRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): strings.reverser.StringReverseRequest;

      /**
       * Verifies a StringReverseRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a StringReverseRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns StringReverseRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): strings.reverser.StringReverseRequest;

      /**
       * Creates a plain object from a StringReverseRequest message. Also converts values to other types if specified.
       * @param message StringReverseRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: strings.reverser.StringReverseRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this StringReverseRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringReverseResponse. */
    interface IStringReverseResponse {
      /** StringReverseResponse reversed_string */
      reversed_string?: string | null;

      /** StringReverseResponse reversed_at */
      reversed_at?: google.protobuf.Timestamp | null;
    }

    /** Represents a StringReverseResponse. */
    class StringReverseResponse implements IStringReverseResponse {
      /**
       * Constructs a new StringReverseResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: strings.reverser.IStringReverseResponse);

      /** StringReverseResponse reversed_string. */
      public reversed_string: string;

      /** StringReverseResponse reversed_at. */
      public reversed_at?: google.protobuf.Timestamp | null;

      /**
       * Creates a new StringReverseResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns StringReverseResponse instance
       */
      public static create(
        properties?: strings.reverser.IStringReverseResponse
      ): strings.reverser.StringReverseResponse;

      /**
       * Encodes the specified StringReverseResponse message. Does not implicitly {@link strings.reverser.StringReverseResponse.verify|verify} messages.
       * @param message StringReverseResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: strings.reverser.StringReverseResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified StringReverseResponse message, length delimited. Does not implicitly {@link strings.reverser.StringReverseResponse.verify|verify} messages.
       * @param message StringReverseResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: strings.reverser.StringReverseResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a StringReverseResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns StringReverseResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): strings.reverser.StringReverseResponse;

      /**
       * Decodes a StringReverseResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns StringReverseResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): strings.reverser.StringReverseResponse;

      /**
       * Verifies a StringReverseResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a StringReverseResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns StringReverseResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): strings.reverser.StringReverseResponse;

      /**
       * Creates a plain object from a StringReverseResponse message. Also converts values to other types if specified.
       * @param message StringReverseResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: strings.reverser.StringReverseResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this StringReverseResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}

/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of a Timestamp. */
    interface ITimestamp {
      /** Timestamp seconds */
      seconds?: number | null;

      /** Timestamp nanos */
      nanos?: number | null;
    }

    /** Represents a Timestamp. */
    class Timestamp implements ITimestamp {
      /**
       * Constructs a new Timestamp.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.ITimestamp);

      /** Timestamp seconds. */
      public seconds: number;

      /** Timestamp nanos. */
      public nanos: number;

      /**
       * Creates a new Timestamp instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Timestamp instance
       */
      public static create(
        properties?: google.protobuf.ITimestamp
      ): google.protobuf.Timestamp;

      /**
       * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.Timestamp,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
       * @param message Timestamp message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.Timestamp,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Timestamp message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.Timestamp;

      /**
       * Decodes a Timestamp message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Timestamp
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.Timestamp;

      /**
       * Verifies a Timestamp message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Timestamp
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.Timestamp;

      /**
       * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
       * @param message Timestamp
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.Timestamp,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Timestamp to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }
}
