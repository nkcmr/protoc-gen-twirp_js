import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {
  /** Namespace protobuf. */
  namespace protobuf {
    /** Properties of a FileDescriptorSet. */
    interface IFileDescriptorSet {
      /** FileDescriptorSet file */
      file?: google.protobuf.FileDescriptorProto[] | null;
    }

    /** Represents a FileDescriptorSet. */
    class FileDescriptorSet implements IFileDescriptorSet {
      /**
       * Constructs a new FileDescriptorSet.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileDescriptorSet);

      /** FileDescriptorSet file. */
      public file: google.protobuf.FileDescriptorProto[];

      /**
       * Creates a new FileDescriptorSet instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileDescriptorSet instance
       */
      public static create(
        properties?: google.protobuf.IFileDescriptorSet
      ): google.protobuf.FileDescriptorSet;

      /**
       * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
       * @param message FileDescriptorSet message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.FileDescriptorSet,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
       * @param message FileDescriptorSet message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.FileDescriptorSet,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorSet message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileDescriptorSet
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileDescriptorSet;

      /**
       * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FileDescriptorSet
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FileDescriptorSet;

      /**
       * Verifies a FileDescriptorSet message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileDescriptorSet
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileDescriptorSet;

      /**
       * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
       * @param message FileDescriptorSet
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileDescriptorSet,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileDescriptorSet to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileDescriptorProto. */
    interface IFileDescriptorProto {
      /** FileDescriptorProto name */
      name?: string | null;

      /** FileDescriptorProto package */
      package?: string | null;

      /** FileDescriptorProto dependency */
      dependency?: string[] | null;

      /** FileDescriptorProto public_dependency */
      public_dependency?: number[] | null;

      /** FileDescriptorProto weak_dependency */
      weak_dependency?: number[] | null;

      /** FileDescriptorProto message_type */
      message_type?: google.protobuf.DescriptorProto[] | null;

      /** FileDescriptorProto enum_type */
      enum_type?: google.protobuf.EnumDescriptorProto[] | null;

      /** FileDescriptorProto service */
      service?: google.protobuf.ServiceDescriptorProto[] | null;

      /** FileDescriptorProto extension */
      extension?: google.protobuf.FieldDescriptorProto[] | null;

      /** FileDescriptorProto options */
      options?: google.protobuf.FileOptions | null;

      /** FileDescriptorProto source_code_info */
      source_code_info?: google.protobuf.SourceCodeInfo | null;

      /** FileDescriptorProto syntax */
      syntax?: string | null;
    }

    /** Represents a FileDescriptorProto. */
    class FileDescriptorProto implements IFileDescriptorProto {
      /**
       * Constructs a new FileDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileDescriptorProto);

      /** FileDescriptorProto name. */
      public name: string;

      /** FileDescriptorProto package. */
      public package: string;

      /** FileDescriptorProto dependency. */
      public dependency: string[];

      /** FileDescriptorProto public_dependency. */
      public public_dependency: number[];

      /** FileDescriptorProto weak_dependency. */
      public weak_dependency: number[];

      /** FileDescriptorProto message_type. */
      public message_type: google.protobuf.DescriptorProto[];

      /** FileDescriptorProto enum_type. */
      public enum_type: google.protobuf.EnumDescriptorProto[];

      /** FileDescriptorProto service. */
      public service: google.protobuf.ServiceDescriptorProto[];

      /** FileDescriptorProto extension. */
      public extension: google.protobuf.FieldDescriptorProto[];

      /** FileDescriptorProto options. */
      public options?: google.protobuf.FileOptions | null;

      /** FileDescriptorProto source_code_info. */
      public source_code_info?: google.protobuf.SourceCodeInfo | null;

      /** FileDescriptorProto syntax. */
      public syntax: string;

      /**
       * Creates a new FileDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IFileDescriptorProto
      ): google.protobuf.FileDescriptorProto;

      /**
       * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
       * @param message FileDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.FileDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
       * @param message FileDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.FileDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileDescriptorProto;

      /**
       * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FileDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FileDescriptorProto;

      /**
       * Verifies a FileDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileDescriptorProto;

      /**
       * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
       * @param message FileDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a DescriptorProto. */
    interface IDescriptorProto {
      /** DescriptorProto name */
      name?: string | null;

      /** DescriptorProto field */
      field?: google.protobuf.FieldDescriptorProto[] | null;

      /** DescriptorProto extension */
      extension?: google.protobuf.FieldDescriptorProto[] | null;

      /** DescriptorProto nested_type */
      nested_type?: google.protobuf.DescriptorProto[] | null;

      /** DescriptorProto enum_type */
      enum_type?: google.protobuf.EnumDescriptorProto[] | null;

      /** DescriptorProto extension_range */
      extension_range?: google.protobuf.DescriptorProto.ExtensionRange[] | null;

      /** DescriptorProto oneof_decl */
      oneof_decl?: google.protobuf.OneofDescriptorProto[] | null;

      /** DescriptorProto options */
      options?: google.protobuf.MessageOptions | null;

      /** DescriptorProto reserved_range */
      reserved_range?: google.protobuf.DescriptorProto.ReservedRange[] | null;

      /** DescriptorProto reserved_name */
      reserved_name?: string[] | null;
    }

    /** Represents a DescriptorProto. */
    class DescriptorProto implements IDescriptorProto {
      /**
       * Constructs a new DescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IDescriptorProto);

      /** DescriptorProto name. */
      public name: string;

      /** DescriptorProto field. */
      public field: google.protobuf.FieldDescriptorProto[];

      /** DescriptorProto extension. */
      public extension: google.protobuf.FieldDescriptorProto[];

      /** DescriptorProto nested_type. */
      public nested_type: google.protobuf.DescriptorProto[];

      /** DescriptorProto enum_type. */
      public enum_type: google.protobuf.EnumDescriptorProto[];

      /** DescriptorProto extension_range. */
      public extension_range: google.protobuf.DescriptorProto.ExtensionRange[];

      /** DescriptorProto oneof_decl. */
      public oneof_decl: google.protobuf.OneofDescriptorProto[];

      /** DescriptorProto options. */
      public options?: google.protobuf.MessageOptions | null;

      /** DescriptorProto reserved_range. */
      public reserved_range: google.protobuf.DescriptorProto.ReservedRange[];

      /** DescriptorProto reserved_name. */
      public reserved_name: string[];

      /**
       * Creates a new DescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns DescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IDescriptorProto
      ): google.protobuf.DescriptorProto;

      /**
       * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
       * @param message DescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.DescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
       * @param message DescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.DescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a DescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns DescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.DescriptorProto;

      /**
       * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns DescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.DescriptorProto;

      /**
       * Verifies a DescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns DescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.DescriptorProto;

      /**
       * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
       * @param message DescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.DescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this DescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace DescriptorProto {
      /** Properties of an ExtensionRange. */
      interface IExtensionRange {
        /** ExtensionRange start */
        start?: number | null;

        /** ExtensionRange end */
        end?: number | null;

        /** ExtensionRange options */
        options?: google.protobuf.ExtensionRangeOptions | null;
      }

      /** Represents an ExtensionRange. */
      class ExtensionRange implements IExtensionRange {
        /**
         * Constructs a new ExtensionRange.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.DescriptorProto.IExtensionRange
        );

        /** ExtensionRange start. */
        public start: number;

        /** ExtensionRange end. */
        public end: number;

        /** ExtensionRange options. */
        public options?: google.protobuf.ExtensionRangeOptions | null;

        /**
         * Creates a new ExtensionRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExtensionRange instance
         */
        public static create(
          properties?: google.protobuf.DescriptorProto.IExtensionRange
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
         * @param message ExtensionRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.DescriptorProto.ExtensionRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
         * @param message ExtensionRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.DescriptorProto.ExtensionRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an ExtensionRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExtensionRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExtensionRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Verifies an ExtensionRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExtensionRange
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.DescriptorProto.ExtensionRange;

        /**
         * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
         * @param message ExtensionRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.DescriptorProto.ExtensionRange,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ExtensionRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a ReservedRange. */
      interface IReservedRange {
        /** ReservedRange start */
        start?: number | null;

        /** ReservedRange end */
        end?: number | null;
      }

      /** Represents a ReservedRange. */
      class ReservedRange implements IReservedRange {
        /**
         * Constructs a new ReservedRange.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.DescriptorProto.IReservedRange
        );

        /** ReservedRange start. */
        public start: number;

        /** ReservedRange end. */
        public end: number;

        /**
         * Creates a new ReservedRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReservedRange instance
         */
        public static create(
          properties?: google.protobuf.DescriptorProto.IReservedRange
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
         * @param message ReservedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.DescriptorProto.ReservedRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
         * @param message ReservedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.DescriptorProto.ReservedRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a ReservedRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Verifies a ReservedRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReservedRange
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.DescriptorProto.ReservedRange;

        /**
         * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
         * @param message ReservedRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.DescriptorProto.ReservedRange,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this ReservedRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of an ExtensionRangeOptions. */
    interface IExtensionRangeOptions {
      /** ExtensionRangeOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents an ExtensionRangeOptions. */
    class ExtensionRangeOptions implements IExtensionRangeOptions {
      /**
       * Constructs a new ExtensionRangeOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IExtensionRangeOptions);

      /** ExtensionRangeOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new ExtensionRangeOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ExtensionRangeOptions instance
       */
      public static create(
        properties?: google.protobuf.IExtensionRangeOptions
      ): google.protobuf.ExtensionRangeOptions;

      /**
       * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
       * @param message ExtensionRangeOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ExtensionRangeOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
       * @param message ExtensionRangeOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.ExtensionRangeOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ExtensionRangeOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.ExtensionRangeOptions;

      /**
       * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ExtensionRangeOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.ExtensionRangeOptions;

      /**
       * Verifies an ExtensionRangeOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ExtensionRangeOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.ExtensionRangeOptions;

      /**
       * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
       * @param message ExtensionRangeOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.ExtensionRangeOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ExtensionRangeOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FieldDescriptorProto. */
    interface IFieldDescriptorProto {
      /** FieldDescriptorProto name */
      name?: string | null;

      /** FieldDescriptorProto number */
      number?: number | null;

      /** FieldDescriptorProto label */
      label?: google.protobuf.FieldDescriptorProto.Label | null;

      /** FieldDescriptorProto type */
      type?: google.protobuf.FieldDescriptorProto.Type | null;

      /** FieldDescriptorProto type_name */
      type_name?: string | null;

      /** FieldDescriptorProto extendee */
      extendee?: string | null;

      /** FieldDescriptorProto default_value */
      default_value?: string | null;

      /** FieldDescriptorProto oneof_index */
      oneof_index?: number | null;

      /** FieldDescriptorProto json_name */
      json_name?: string | null;

      /** FieldDescriptorProto options */
      options?: google.protobuf.FieldOptions | null;

      /** FieldDescriptorProto proto3_optional */
      proto3_optional?: boolean | null;
    }

    /** Represents a FieldDescriptorProto. */
    class FieldDescriptorProto implements IFieldDescriptorProto {
      /**
       * Constructs a new FieldDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFieldDescriptorProto);

      /** FieldDescriptorProto name. */
      public name: string;

      /** FieldDescriptorProto number. */
      public number: number;

      /** FieldDescriptorProto label. */
      public label: google.protobuf.FieldDescriptorProto.Label;

      /** FieldDescriptorProto type. */
      public type: google.protobuf.FieldDescriptorProto.Type;

      /** FieldDescriptorProto type_name. */
      public type_name: string;

      /** FieldDescriptorProto extendee. */
      public extendee: string;

      /** FieldDescriptorProto default_value. */
      public default_value: string;

      /** FieldDescriptorProto oneof_index. */
      public oneof_index: number;

      /** FieldDescriptorProto json_name. */
      public json_name: string;

      /** FieldDescriptorProto options. */
      public options?: google.protobuf.FieldOptions | null;

      /** FieldDescriptorProto proto3_optional. */
      public proto3_optional: boolean;

      /**
       * Creates a new FieldDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FieldDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IFieldDescriptorProto
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
       * @param message FieldDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.FieldDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
       * @param message FieldDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.FieldDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FieldDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FieldDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FieldDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FieldDescriptorProto;

      /**
       * Verifies a FieldDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FieldDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FieldDescriptorProto;

      /**
       * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
       * @param message FieldDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FieldDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FieldDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FieldDescriptorProto {
      /** Type enum. */
      enum Type {
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18,
      }

      /** Label enum. */
      enum Label {
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3,
      }
    }

    /** Properties of an OneofDescriptorProto. */
    interface IOneofDescriptorProto {
      /** OneofDescriptorProto name */
      name?: string | null;

      /** OneofDescriptorProto options */
      options?: google.protobuf.OneofOptions | null;
    }

    /** Represents an OneofDescriptorProto. */
    class OneofDescriptorProto implements IOneofDescriptorProto {
      /**
       * Constructs a new OneofDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IOneofDescriptorProto);

      /** OneofDescriptorProto name. */
      public name: string;

      /** OneofDescriptorProto options. */
      public options?: google.protobuf.OneofOptions | null;

      /**
       * Creates a new OneofDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns OneofDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IOneofDescriptorProto
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
       * @param message OneofDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.OneofDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
       * @param message OneofDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.OneofDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an OneofDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns OneofDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns OneofDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.OneofDescriptorProto;

      /**
       * Verifies an OneofDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns OneofDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.OneofDescriptorProto;

      /**
       * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
       * @param message OneofDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.OneofDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this OneofDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumDescriptorProto. */
    interface IEnumDescriptorProto {
      /** EnumDescriptorProto name */
      name?: string | null;

      /** EnumDescriptorProto value */
      value?: google.protobuf.EnumValueDescriptorProto[] | null;

      /** EnumDescriptorProto options */
      options?: google.protobuf.EnumOptions | null;

      /** EnumDescriptorProto reserved_range */
      reserved_range?:
        | google.protobuf.EnumDescriptorProto.EnumReservedRange[]
        | null;

      /** EnumDescriptorProto reserved_name */
      reserved_name?: string[] | null;
    }

    /** Represents an EnumDescriptorProto. */
    class EnumDescriptorProto implements IEnumDescriptorProto {
      /**
       * Constructs a new EnumDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumDescriptorProto);

      /** EnumDescriptorProto name. */
      public name: string;

      /** EnumDescriptorProto value. */
      public value: google.protobuf.EnumValueDescriptorProto[];

      /** EnumDescriptorProto options. */
      public options?: google.protobuf.EnumOptions | null;

      /** EnumDescriptorProto reserved_range. */
      public reserved_range: google.protobuf.EnumDescriptorProto.EnumReservedRange[];

      /** EnumDescriptorProto reserved_name. */
      public reserved_name: string[];

      /**
       * Creates a new EnumDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IEnumDescriptorProto
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
       * @param message EnumDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.EnumDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
       * @param message EnumDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.EnumDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumDescriptorProto;

      /**
       * Verifies an EnumDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumDescriptorProto;

      /**
       * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
       * @param message EnumDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace EnumDescriptorProto {
      /** Properties of an EnumReservedRange. */
      interface IEnumReservedRange {
        /** EnumReservedRange start */
        start?: number | null;

        /** EnumReservedRange end */
        end?: number | null;
      }

      /** Represents an EnumReservedRange. */
      class EnumReservedRange implements IEnumReservedRange {
        /**
         * Constructs a new EnumReservedRange.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange
        );

        /** EnumReservedRange start. */
        public start: number;

        /** EnumReservedRange end. */
        public end: number;

        /**
         * Creates a new EnumReservedRange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnumReservedRange instance
         */
        public static create(
          properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange
        ): google.protobuf.EnumDescriptorProto.EnumReservedRange;

        /**
         * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
         * @param message EnumReservedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.EnumDescriptorProto.EnumReservedRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
         * @param message EnumReservedRange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.EnumDescriptorProto.EnumReservedRange,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an EnumReservedRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnumReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.EnumDescriptorProto.EnumReservedRange;

        /**
         * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnumReservedRange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.EnumDescriptorProto.EnumReservedRange;

        /**
         * Verifies an EnumReservedRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnumReservedRange
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

        /**
         * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
         * @param message EnumReservedRange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.EnumDescriptorProto.EnumReservedRange,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this EnumReservedRange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of an EnumValueDescriptorProto. */
    interface IEnumValueDescriptorProto {
      /** EnumValueDescriptorProto name */
      name?: string | null;

      /** EnumValueDescriptorProto number */
      number?: number | null;

      /** EnumValueDescriptorProto options */
      options?: google.protobuf.EnumValueOptions | null;
    }

    /** Represents an EnumValueDescriptorProto. */
    class EnumValueDescriptorProto implements IEnumValueDescriptorProto {
      /**
       * Constructs a new EnumValueDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

      /** EnumValueDescriptorProto name. */
      public name: string;

      /** EnumValueDescriptorProto number. */
      public number: number;

      /** EnumValueDescriptorProto options. */
      public options?: google.protobuf.EnumValueOptions | null;

      /**
       * Creates a new EnumValueDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumValueDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IEnumValueDescriptorProto
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
       * @param message EnumValueDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.EnumValueDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
       * @param message EnumValueDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.EnumValueDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumValueDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumValueDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumValueDescriptorProto;

      /**
       * Verifies an EnumValueDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumValueDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumValueDescriptorProto;

      /**
       * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
       * @param message EnumValueDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumValueDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumValueDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceDescriptorProto. */
    interface IServiceDescriptorProto {
      /** ServiceDescriptorProto name */
      name?: string | null;

      /** ServiceDescriptorProto method */
      method?: google.protobuf.MethodDescriptorProto[] | null;

      /** ServiceDescriptorProto options */
      options?: google.protobuf.ServiceOptions | null;
    }

    /** Represents a ServiceDescriptorProto. */
    class ServiceDescriptorProto implements IServiceDescriptorProto {
      /**
       * Constructs a new ServiceDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IServiceDescriptorProto);

      /** ServiceDescriptorProto name. */
      public name: string;

      /** ServiceDescriptorProto method. */
      public method: google.protobuf.MethodDescriptorProto[];

      /** ServiceDescriptorProto options. */
      public options?: google.protobuf.ServiceOptions | null;

      /**
       * Creates a new ServiceDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ServiceDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IServiceDescriptorProto
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
       * @param message ServiceDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ServiceDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
       * @param message ServiceDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.ServiceDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ServiceDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ServiceDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.ServiceDescriptorProto;

      /**
       * Verifies a ServiceDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ServiceDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.ServiceDescriptorProto;

      /**
       * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
       * @param message ServiceDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.ServiceDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ServiceDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MethodDescriptorProto. */
    interface IMethodDescriptorProto {
      /** MethodDescriptorProto name */
      name?: string | null;

      /** MethodDescriptorProto input_type */
      input_type?: string | null;

      /** MethodDescriptorProto output_type */
      output_type?: string | null;

      /** MethodDescriptorProto options */
      options?: google.protobuf.MethodOptions | null;

      /** MethodDescriptorProto client_streaming */
      client_streaming?: boolean | null;

      /** MethodDescriptorProto server_streaming */
      server_streaming?: boolean | null;
    }

    /** Represents a MethodDescriptorProto. */
    class MethodDescriptorProto implements IMethodDescriptorProto {
      /**
       * Constructs a new MethodDescriptorProto.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMethodDescriptorProto);

      /** MethodDescriptorProto name. */
      public name: string;

      /** MethodDescriptorProto input_type. */
      public input_type: string;

      /** MethodDescriptorProto output_type. */
      public output_type: string;

      /** MethodDescriptorProto options. */
      public options?: google.protobuf.MethodOptions | null;

      /** MethodDescriptorProto client_streaming. */
      public client_streaming: boolean;

      /** MethodDescriptorProto server_streaming. */
      public server_streaming: boolean;

      /**
       * Creates a new MethodDescriptorProto instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MethodDescriptorProto instance
       */
      public static create(
        properties?: google.protobuf.IMethodDescriptorProto
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
       * @param message MethodDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.MethodDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
       * @param message MethodDescriptorProto message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.MethodDescriptorProto,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MethodDescriptorProto message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MethodDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MethodDescriptorProto
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.MethodDescriptorProto;

      /**
       * Verifies a MethodDescriptorProto message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MethodDescriptorProto
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MethodDescriptorProto;

      /**
       * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
       * @param message MethodDescriptorProto
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MethodDescriptorProto,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MethodDescriptorProto to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileOptions. */
    interface IFileOptions {
      /** FileOptions java_package */
      java_package?: string | null;

      /** FileOptions java_outer_classname */
      java_outer_classname?: string | null;

      /** FileOptions java_multiple_files */
      java_multiple_files?: boolean | null;

      /** FileOptions java_generate_equals_and_hash */
      java_generate_equals_and_hash?: boolean | null;

      /** FileOptions java_string_check_utf8 */
      java_string_check_utf8?: boolean | null;

      /** FileOptions optimize_for */
      optimize_for?: google.protobuf.FileOptions.OptimizeMode | null;

      /** FileOptions go_package */
      go_package?: string | null;

      /** FileOptions cc_generic_services */
      cc_generic_services?: boolean | null;

      /** FileOptions java_generic_services */
      java_generic_services?: boolean | null;

      /** FileOptions py_generic_services */
      py_generic_services?: boolean | null;

      /** FileOptions php_generic_services */
      php_generic_services?: boolean | null;

      /** FileOptions deprecated */
      deprecated?: boolean | null;

      /** FileOptions cc_enable_arenas */
      cc_enable_arenas?: boolean | null;

      /** FileOptions objc_class_prefix */
      objc_class_prefix?: string | null;

      /** FileOptions csharp_namespace */
      csharp_namespace?: string | null;

      /** FileOptions swift_prefix */
      swift_prefix?: string | null;

      /** FileOptions php_class_prefix */
      php_class_prefix?: string | null;

      /** FileOptions php_namespace */
      php_namespace?: string | null;

      /** FileOptions php_metadata_namespace */
      php_metadata_namespace?: string | null;

      /** FileOptions ruby_package */
      ruby_package?: string | null;

      /** FileOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents a FileOptions. */
    class FileOptions implements IFileOptions {
      /**
       * Constructs a new FileOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFileOptions);

      /** FileOptions java_package. */
      public java_package: string;

      /** FileOptions java_outer_classname. */
      public java_outer_classname: string;

      /** FileOptions java_multiple_files. */
      public java_multiple_files: boolean;

      /** FileOptions java_generate_equals_and_hash. */
      public java_generate_equals_and_hash: boolean;

      /** FileOptions java_string_check_utf8. */
      public java_string_check_utf8: boolean;

      /** FileOptions optimize_for. */
      public optimize_for: google.protobuf.FileOptions.OptimizeMode;

      /** FileOptions go_package. */
      public go_package: string;

      /** FileOptions cc_generic_services. */
      public cc_generic_services: boolean;

      /** FileOptions java_generic_services. */
      public java_generic_services: boolean;

      /** FileOptions py_generic_services. */
      public py_generic_services: boolean;

      /** FileOptions php_generic_services. */
      public php_generic_services: boolean;

      /** FileOptions deprecated. */
      public deprecated: boolean;

      /** FileOptions cc_enable_arenas. */
      public cc_enable_arenas: boolean;

      /** FileOptions objc_class_prefix. */
      public objc_class_prefix: string;

      /** FileOptions csharp_namespace. */
      public csharp_namespace: string;

      /** FileOptions swift_prefix. */
      public swift_prefix: string;

      /** FileOptions php_class_prefix. */
      public php_class_prefix: string;

      /** FileOptions php_namespace. */
      public php_namespace: string;

      /** FileOptions php_metadata_namespace. */
      public php_metadata_namespace: string;

      /** FileOptions ruby_package. */
      public ruby_package: string;

      /** FileOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new FileOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FileOptions instance
       */
      public static create(
        properties?: google.protobuf.IFileOptions
      ): google.protobuf.FileOptions;

      /**
       * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
       * @param message FileOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.FileOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
       * @param message FileOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.FileOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FileOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FileOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FileOptions;

      /**
       * Decodes a FileOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FileOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FileOptions;

      /**
       * Verifies a FileOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FileOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FileOptions;

      /**
       * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
       * @param message FileOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FileOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FileOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FileOptions {
      /** OptimizeMode enum. */
      enum OptimizeMode {
        SPEED = 1,
        CODE_SIZE = 2,
        LITE_RUNTIME = 3,
      }
    }

    /** Properties of a MessageOptions. */
    interface IMessageOptions {
      /** MessageOptions message_set_wire_format */
      message_set_wire_format?: boolean | null;

      /** MessageOptions no_standard_descriptor_accessor */
      no_standard_descriptor_accessor?: boolean | null;

      /** MessageOptions deprecated */
      deprecated?: boolean | null;

      /** MessageOptions map_entry */
      map_entry?: boolean | null;

      /** MessageOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents a MessageOptions. */
    class MessageOptions implements IMessageOptions {
      /**
       * Constructs a new MessageOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMessageOptions);

      /** MessageOptions message_set_wire_format. */
      public message_set_wire_format: boolean;

      /** MessageOptions no_standard_descriptor_accessor. */
      public no_standard_descriptor_accessor: boolean;

      /** MessageOptions deprecated. */
      public deprecated: boolean;

      /** MessageOptions map_entry. */
      public map_entry: boolean;

      /** MessageOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new MessageOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MessageOptions instance
       */
      public static create(
        properties?: google.protobuf.IMessageOptions
      ): google.protobuf.MessageOptions;

      /**
       * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
       * @param message MessageOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.MessageOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
       * @param message MessageOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.MessageOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MessageOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MessageOptions;

      /**
       * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MessageOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.MessageOptions;

      /**
       * Verifies a MessageOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MessageOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MessageOptions;

      /**
       * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
       * @param message MessageOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MessageOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MessageOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a FieldOptions. */
    interface IFieldOptions {
      /** FieldOptions ctype */
      ctype?: google.protobuf.FieldOptions.CType | null;

      /** FieldOptions packed */
      packed?: boolean | null;

      /** FieldOptions jstype */
      jstype?: google.protobuf.FieldOptions.JSType | null;

      /** FieldOptions lazy */
      lazy?: boolean | null;

      /** FieldOptions deprecated */
      deprecated?: boolean | null;

      /** FieldOptions weak */
      weak?: boolean | null;

      /** FieldOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents a FieldOptions. */
    class FieldOptions implements IFieldOptions {
      /**
       * Constructs a new FieldOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IFieldOptions);

      /** FieldOptions ctype. */
      public ctype: google.protobuf.FieldOptions.CType;

      /** FieldOptions packed. */
      public packed: boolean;

      /** FieldOptions jstype. */
      public jstype: google.protobuf.FieldOptions.JSType;

      /** FieldOptions lazy. */
      public lazy: boolean;

      /** FieldOptions deprecated. */
      public deprecated: boolean;

      /** FieldOptions weak. */
      public weak: boolean;

      /** FieldOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new FieldOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FieldOptions instance
       */
      public static create(
        properties?: google.protobuf.IFieldOptions
      ): google.protobuf.FieldOptions;

      /**
       * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
       * @param message FieldOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.FieldOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
       * @param message FieldOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.FieldOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FieldOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.FieldOptions;

      /**
       * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FieldOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.FieldOptions;

      /**
       * Verifies a FieldOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FieldOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.FieldOptions;

      /**
       * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
       * @param message FieldOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.FieldOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FieldOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace FieldOptions {
      /** CType enum. */
      enum CType {
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2,
      }

      /** JSType enum. */
      enum JSType {
        JS_NORMAL = 0,
        JS_STRING = 1,
        JS_NUMBER = 2,
      }
    }

    /** Properties of an OneofOptions. */
    interface IOneofOptions {
      /** OneofOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents an OneofOptions. */
    class OneofOptions implements IOneofOptions {
      /**
       * Constructs a new OneofOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IOneofOptions);

      /** OneofOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new OneofOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns OneofOptions instance
       */
      public static create(
        properties?: google.protobuf.IOneofOptions
      ): google.protobuf.OneofOptions;

      /**
       * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
       * @param message OneofOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.OneofOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
       * @param message OneofOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.OneofOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an OneofOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns OneofOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.OneofOptions;

      /**
       * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns OneofOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.OneofOptions;

      /**
       * Verifies an OneofOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns OneofOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.OneofOptions;

      /**
       * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
       * @param message OneofOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.OneofOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this OneofOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumOptions. */
    interface IEnumOptions {
      /** EnumOptions allow_alias */
      allow_alias?: boolean | null;

      /** EnumOptions deprecated */
      deprecated?: boolean | null;

      /** EnumOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents an EnumOptions. */
    class EnumOptions implements IEnumOptions {
      /**
       * Constructs a new EnumOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumOptions);

      /** EnumOptions allow_alias. */
      public allow_alias: boolean;

      /** EnumOptions deprecated. */
      public deprecated: boolean;

      /** EnumOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new EnumOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumOptions instance
       */
      public static create(
        properties?: google.protobuf.IEnumOptions
      ): google.protobuf.EnumOptions;

      /**
       * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
       * @param message EnumOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.EnumOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
       * @param message EnumOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.EnumOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumOptions;

      /**
       * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumOptions;

      /**
       * Verifies an EnumOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumOptions;

      /**
       * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
       * @param message EnumOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnumValueOptions. */
    interface IEnumValueOptions {
      /** EnumValueOptions deprecated */
      deprecated?: boolean | null;

      /** EnumValueOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents an EnumValueOptions. */
    class EnumValueOptions implements IEnumValueOptions {
      /**
       * Constructs a new EnumValueOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IEnumValueOptions);

      /** EnumValueOptions deprecated. */
      public deprecated: boolean;

      /** EnumValueOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new EnumValueOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns EnumValueOptions instance
       */
      public static create(
        properties?: google.protobuf.IEnumValueOptions
      ): google.protobuf.EnumValueOptions;

      /**
       * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
       * @param message EnumValueOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.EnumValueOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
       * @param message EnumValueOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.EnumValueOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an EnumValueOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns EnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.EnumValueOptions;

      /**
       * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns EnumValueOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.EnumValueOptions;

      /**
       * Verifies an EnumValueOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumValueOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.EnumValueOptions;

      /**
       * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
       * @param message EnumValueOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.EnumValueOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this EnumValueOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceOptions. */
    interface IServiceOptions {
      /** ServiceOptions deprecated */
      deprecated?: boolean | null;

      /** ServiceOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents a ServiceOptions. */
    class ServiceOptions implements IServiceOptions {
      /**
       * Constructs a new ServiceOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IServiceOptions);

      /** ServiceOptions deprecated. */
      public deprecated: boolean;

      /** ServiceOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new ServiceOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns ServiceOptions instance
       */
      public static create(
        properties?: google.protobuf.IServiceOptions
      ): google.protobuf.ServiceOptions;

      /**
       * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
       * @param message ServiceOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.ServiceOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
       * @param message ServiceOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.ServiceOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a ServiceOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns ServiceOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.ServiceOptions;

      /**
       * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns ServiceOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.ServiceOptions;

      /**
       * Verifies a ServiceOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ServiceOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.ServiceOptions;

      /**
       * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
       * @param message ServiceOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.ServiceOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this ServiceOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    /** Properties of a MethodOptions. */
    interface IMethodOptions {
      /** MethodOptions deprecated */
      deprecated?: boolean | null;

      /** MethodOptions idempotency_level */
      idempotency_level?: google.protobuf.MethodOptions.IdempotencyLevel | null;

      /** MethodOptions uninterpreted_option */
      uninterpreted_option?: google.protobuf.UninterpretedOption[] | null;
    }

    /** Represents a MethodOptions. */
    class MethodOptions implements IMethodOptions {
      /**
       * Constructs a new MethodOptions.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IMethodOptions);

      /** MethodOptions deprecated. */
      public deprecated: boolean;

      /** MethodOptions idempotency_level. */
      public idempotency_level: google.protobuf.MethodOptions.IdempotencyLevel;

      /** MethodOptions uninterpreted_option. */
      public uninterpreted_option: google.protobuf.UninterpretedOption[];

      /**
       * Creates a new MethodOptions instance using the specified properties.
       * @param [properties] Properties to set
       * @returns MethodOptions instance
       */
      public static create(
        properties?: google.protobuf.IMethodOptions
      ): google.protobuf.MethodOptions;

      /**
       * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
       * @param message MethodOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.MethodOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
       * @param message MethodOptions message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.MethodOptions,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a MethodOptions message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns MethodOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.MethodOptions;

      /**
       * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns MethodOptions
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.MethodOptions;

      /**
       * Verifies a MethodOptions message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns MethodOptions
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.MethodOptions;

      /**
       * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
       * @param message MethodOptions
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.MethodOptions,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this MethodOptions to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace MethodOptions {
      /** IdempotencyLevel enum. */
      enum IdempotencyLevel {
        IDEMPOTENCY_UNKNOWN = 0,
        NO_SIDE_EFFECTS = 1,
        IDEMPOTENT = 2,
      }
    }

    /** Properties of an UninterpretedOption. */
    interface IUninterpretedOption {
      /** UninterpretedOption name */
      name?: google.protobuf.UninterpretedOption.NamePart[] | null;

      /** UninterpretedOption identifier_value */
      identifier_value?: string | null;

      /** UninterpretedOption positive_int_value */
      positive_int_value?: number | null;

      /** UninterpretedOption negative_int_value */
      negative_int_value?: number | null;

      /** UninterpretedOption double_value */
      double_value?: number | null;

      /** UninterpretedOption string_value */
      string_value?: Uint8Array | null;

      /** UninterpretedOption aggregate_value */
      aggregate_value?: string | null;
    }

    /** Represents an UninterpretedOption. */
    class UninterpretedOption implements IUninterpretedOption {
      /**
       * Constructs a new UninterpretedOption.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IUninterpretedOption);

      /** UninterpretedOption name. */
      public name: google.protobuf.UninterpretedOption.NamePart[];

      /** UninterpretedOption identifier_value. */
      public identifier_value: string;

      /** UninterpretedOption positive_int_value. */
      public positive_int_value: number;

      /** UninterpretedOption negative_int_value. */
      public negative_int_value: number;

      /** UninterpretedOption double_value. */
      public double_value: number;

      /** UninterpretedOption string_value. */
      public string_value: Uint8Array;

      /** UninterpretedOption aggregate_value. */
      public aggregate_value: string;

      /**
       * Creates a new UninterpretedOption instance using the specified properties.
       * @param [properties] Properties to set
       * @returns UninterpretedOption instance
       */
      public static create(
        properties?: google.protobuf.IUninterpretedOption
      ): google.protobuf.UninterpretedOption;

      /**
       * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
       * @param message UninterpretedOption message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.UninterpretedOption,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
       * @param message UninterpretedOption message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.UninterpretedOption,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an UninterpretedOption message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns UninterpretedOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.UninterpretedOption;

      /**
       * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns UninterpretedOption
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.UninterpretedOption;

      /**
       * Verifies an UninterpretedOption message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns UninterpretedOption
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.UninterpretedOption;

      /**
       * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
       * @param message UninterpretedOption
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.UninterpretedOption,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this UninterpretedOption to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace UninterpretedOption {
      /** Properties of a NamePart. */
      interface INamePart {
        /** NamePart name_part */
        name_part: string;

        /** NamePart is_extension */
        is_extension: boolean;
      }

      /** Represents a NamePart. */
      class NamePart implements INamePart {
        /**
         * Constructs a new NamePart.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

        /** NamePart name_part. */
        public name_part: string;

        /** NamePart is_extension. */
        public is_extension: boolean;

        /**
         * Creates a new NamePart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NamePart instance
         */
        public static create(
          properties?: google.protobuf.UninterpretedOption.INamePart
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
         * @param message NamePart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.UninterpretedOption.NamePart,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
         * @param message NamePart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.UninterpretedOption.NamePart,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a NamePart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NamePart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Decodes a NamePart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NamePart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Verifies a NamePart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NamePart
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.UninterpretedOption.NamePart;

        /**
         * Creates a plain object from a NamePart message. Also converts values to other types if specified.
         * @param message NamePart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.UninterpretedOption.NamePart,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this NamePart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a SourceCodeInfo. */
    interface ISourceCodeInfo {
      /** SourceCodeInfo location */
      location?: google.protobuf.SourceCodeInfo.Location[] | null;
    }

    /** Represents a SourceCodeInfo. */
    class SourceCodeInfo implements ISourceCodeInfo {
      /**
       * Constructs a new SourceCodeInfo.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.ISourceCodeInfo);

      /** SourceCodeInfo location. */
      public location: google.protobuf.SourceCodeInfo.Location[];

      /**
       * Creates a new SourceCodeInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns SourceCodeInfo instance
       */
      public static create(
        properties?: google.protobuf.ISourceCodeInfo
      ): google.protobuf.SourceCodeInfo;

      /**
       * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
       * @param message SourceCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.SourceCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
       * @param message SourceCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.SourceCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a SourceCodeInfo message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns SourceCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.SourceCodeInfo;

      /**
       * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns SourceCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.SourceCodeInfo;

      /**
       * Verifies a SourceCodeInfo message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns SourceCodeInfo
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.SourceCodeInfo;

      /**
       * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
       * @param message SourceCodeInfo
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.SourceCodeInfo,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this SourceCodeInfo to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace SourceCodeInfo {
      /** Properties of a Location. */
      interface ILocation {
        /** Location path */
        path?: number[] | null;

        /** Location span */
        span?: number[] | null;

        /** Location leading_comments */
        leading_comments?: string | null;

        /** Location trailing_comments */
        trailing_comments?: string | null;

        /** Location leading_detached_comments */
        leading_detached_comments?: string[] | null;
      }

      /** Represents a Location. */
      class Location implements ILocation {
        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

        /** Location path. */
        public path: number[];

        /** Location span. */
        public span: number[];

        /** Location leading_comments. */
        public leading_comments: string;

        /** Location trailing_comments. */
        public trailing_comments: string;

        /** Location leading_detached_comments. */
        public leading_detached_comments: string[];

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(
          properties?: google.protobuf.SourceCodeInfo.ILocation
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.SourceCodeInfo.Location,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.SourceCodeInfo.Location,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.SourceCodeInfo.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.SourceCodeInfo.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.SourceCodeInfo.Location,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Properties of a GeneratedCodeInfo. */
    interface IGeneratedCodeInfo {
      /** GeneratedCodeInfo annotation */
      annotation?: google.protobuf.GeneratedCodeInfo.Annotation[] | null;
    }

    /** Represents a GeneratedCodeInfo. */
    class GeneratedCodeInfo implements IGeneratedCodeInfo {
      /**
       * Constructs a new GeneratedCodeInfo.
       * @param [properties] Properties to set
       */
      constructor(properties?: google.protobuf.IGeneratedCodeInfo);

      /** GeneratedCodeInfo annotation. */
      public annotation: google.protobuf.GeneratedCodeInfo.Annotation[];

      /**
       * Creates a new GeneratedCodeInfo instance using the specified properties.
       * @param [properties] Properties to set
       * @returns GeneratedCodeInfo instance
       */
      public static create(
        properties?: google.protobuf.IGeneratedCodeInfo
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
       * @param message GeneratedCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: google.protobuf.GeneratedCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
       * @param message GeneratedCodeInfo message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: google.protobuf.GeneratedCodeInfo,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns GeneratedCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns GeneratedCodeInfo
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): google.protobuf.GeneratedCodeInfo;

      /**
       * Verifies a GeneratedCodeInfo message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GeneratedCodeInfo
       */
      public static fromObject(object: {
        [k: string]: any;
      }): google.protobuf.GeneratedCodeInfo;

      /**
       * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
       * @param message GeneratedCodeInfo
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: google.protobuf.GeneratedCodeInfo,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this GeneratedCodeInfo to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }

    namespace GeneratedCodeInfo {
      /** Properties of an Annotation. */
      interface IAnnotation {
        /** Annotation path */
        path?: number[] | null;

        /** Annotation source_file */
        source_file?: string | null;

        /** Annotation begin */
        begin?: number | null;

        /** Annotation end */
        end?: number | null;
      }

      /** Represents an Annotation. */
      class Annotation implements IAnnotation {
        /**
         * Constructs a new Annotation.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

        /** Annotation path. */
        public path: number[];

        /** Annotation source_file. */
        public source_file: string;

        /** Annotation begin. */
        public begin: number;

        /** Annotation end. */
        public end: number;

        /**
         * Creates a new Annotation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Annotation instance
         */
        public static create(
          properties?: google.protobuf.GeneratedCodeInfo.IAnnotation
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
         * @param message Annotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.GeneratedCodeInfo.Annotation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
         * @param message Annotation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.GeneratedCodeInfo.Annotation,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes an Annotation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Annotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Decodes an Annotation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Annotation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Verifies an Annotation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Annotation
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.GeneratedCodeInfo.Annotation;

        /**
         * Creates a plain object from an Annotation message. Also converts values to other types if specified.
         * @param message Annotation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.GeneratedCodeInfo.Annotation,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Annotation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }
    }

    /** Namespace compiler. */
    namespace compiler {
      /** Properties of a Version. */
      interface IVersion {
        /** Version major */
        major?: number | null;

        /** Version minor */
        minor?: number | null;

        /** Version patch */
        patch?: number | null;

        /** Version suffix */
        suffix?: string | null;
      }

      /** Represents a Version. */
      class Version implements IVersion {
        /**
         * Constructs a new Version.
         * @param [properties] Properties to set
         */
        constructor(properties?: google.protobuf.compiler.IVersion);

        /** Version major. */
        public major: number;

        /** Version minor. */
        public minor: number;

        /** Version patch. */
        public patch: number;

        /** Version suffix. */
        public suffix: string;

        /**
         * Creates a new Version instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Version instance
         */
        public static create(
          properties?: google.protobuf.compiler.IVersion
        ): google.protobuf.compiler.Version;

        /**
         * Encodes the specified Version message. Does not implicitly {@link google.protobuf.compiler.Version.verify|verify} messages.
         * @param message Version message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.compiler.Version,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified Version message, length delimited. Does not implicitly {@link google.protobuf.compiler.Version.verify|verify} messages.
         * @param message Version message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.compiler.Version,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a Version message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.compiler.Version;

        /**
         * Decodes a Version message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.compiler.Version;

        /**
         * Verifies a Version message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a Version message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Version
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.compiler.Version;

        /**
         * Creates a plain object from a Version message. Also converts values to other types if specified.
         * @param message Version
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.compiler.Version,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this Version to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CodeGeneratorRequest. */
      interface ICodeGeneratorRequest {
        /** CodeGeneratorRequest file_to_generate */
        file_to_generate?: string[] | null;

        /** CodeGeneratorRequest parameter */
        parameter?: string | null;

        /** CodeGeneratorRequest proto_file */
        proto_file?: google.protobuf.FileDescriptorProto[] | null;

        /** CodeGeneratorRequest compiler_version */
        compiler_version?: google.protobuf.compiler.Version | null;
      }

      /** Represents a CodeGeneratorRequest. */
      class CodeGeneratorRequest implements ICodeGeneratorRequest {
        /**
         * Constructs a new CodeGeneratorRequest.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.compiler.ICodeGeneratorRequest
        );

        /** CodeGeneratorRequest file_to_generate. */
        public file_to_generate: string[];

        /** CodeGeneratorRequest parameter. */
        public parameter: string;

        /** CodeGeneratorRequest proto_file. */
        public proto_file: google.protobuf.FileDescriptorProto[];

        /** CodeGeneratorRequest compiler_version. */
        public compiler_version?: google.protobuf.compiler.Version | null;

        /**
         * Creates a new CodeGeneratorRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CodeGeneratorRequest instance
         */
        public static create(
          properties?: google.protobuf.compiler.ICodeGeneratorRequest
        ): google.protobuf.compiler.CodeGeneratorRequest;

        /**
         * Encodes the specified CodeGeneratorRequest message. Does not implicitly {@link google.protobuf.compiler.CodeGeneratorRequest.verify|verify} messages.
         * @param message CodeGeneratorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.compiler.CodeGeneratorRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified CodeGeneratorRequest message, length delimited. Does not implicitly {@link google.protobuf.compiler.CodeGeneratorRequest.verify|verify} messages.
         * @param message CodeGeneratorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.compiler.CodeGeneratorRequest,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CodeGeneratorRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CodeGeneratorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.compiler.CodeGeneratorRequest;

        /**
         * Decodes a CodeGeneratorRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CodeGeneratorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.compiler.CodeGeneratorRequest;

        /**
         * Verifies a CodeGeneratorRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a CodeGeneratorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CodeGeneratorRequest
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.compiler.CodeGeneratorRequest;

        /**
         * Creates a plain object from a CodeGeneratorRequest message. Also converts values to other types if specified.
         * @param message CodeGeneratorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.compiler.CodeGeneratorRequest,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CodeGeneratorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      /** Properties of a CodeGeneratorResponse. */
      interface ICodeGeneratorResponse {
        /** CodeGeneratorResponse error */
        error?: string | null;

        /** CodeGeneratorResponse supported_features */
        supported_features?: number | null;

        /** CodeGeneratorResponse file */
        file?: google.protobuf.compiler.CodeGeneratorResponse.File[] | null;
      }

      /** Represents a CodeGeneratorResponse. */
      class CodeGeneratorResponse implements ICodeGeneratorResponse {
        /**
         * Constructs a new CodeGeneratorResponse.
         * @param [properties] Properties to set
         */
        constructor(
          properties?: google.protobuf.compiler.ICodeGeneratorResponse
        );

        /** CodeGeneratorResponse error. */
        public error: string;

        /** CodeGeneratorResponse supported_features. */
        public supported_features: number;

        /** CodeGeneratorResponse file. */
        public file: google.protobuf.compiler.CodeGeneratorResponse.File[];

        /**
         * Creates a new CodeGeneratorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CodeGeneratorResponse instance
         */
        public static create(
          properties?: google.protobuf.compiler.ICodeGeneratorResponse
        ): google.protobuf.compiler.CodeGeneratorResponse;

        /**
         * Encodes the specified CodeGeneratorResponse message. Does not implicitly {@link google.protobuf.compiler.CodeGeneratorResponse.verify|verify} messages.
         * @param message CodeGeneratorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(
          message: google.protobuf.compiler.CodeGeneratorResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Encodes the specified CodeGeneratorResponse message, length delimited. Does not implicitly {@link google.protobuf.compiler.CodeGeneratorResponse.verify|verify} messages.
         * @param message CodeGeneratorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(
          message: google.protobuf.compiler.CodeGeneratorResponse,
          writer?: $protobuf.Writer
        ): $protobuf.Writer;

        /**
         * Decodes a CodeGeneratorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CodeGeneratorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number
        ): google.protobuf.compiler.CodeGeneratorResponse;

        /**
         * Decodes a CodeGeneratorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CodeGeneratorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array
        ): google.protobuf.compiler.CodeGeneratorResponse;

        /**
         * Verifies a CodeGeneratorResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): string | null;

        /**
         * Creates a CodeGeneratorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CodeGeneratorResponse
         */
        public static fromObject(object: {
          [k: string]: any;
        }): google.protobuf.compiler.CodeGeneratorResponse;

        /**
         * Creates a plain object from a CodeGeneratorResponse message. Also converts values to other types if specified.
         * @param message CodeGeneratorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(
          message: google.protobuf.compiler.CodeGeneratorResponse,
          options?: $protobuf.IConversionOptions
        ): { [k: string]: any };

        /**
         * Converts this CodeGeneratorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
      }

      namespace CodeGeneratorResponse {
        /** Feature enum. */
        enum Feature {
          FEATURE_NONE = 0,
          FEATURE_PROTO3_OPTIONAL = 1,
        }

        /** Properties of a File. */
        interface IFile {
          /** File name */
          name?: string | null;

          /** File insertion_point */
          insertion_point?: string | null;

          /** File content */
          content?: string | null;

          /** File generated_code_info */
          generated_code_info?: google.protobuf.GeneratedCodeInfo | null;
        }

        /** Represents a File. */
        class File implements IFile {
          /**
           * Constructs a new File.
           * @param [properties] Properties to set
           */
          constructor(
            properties?: google.protobuf.compiler.CodeGeneratorResponse.IFile
          );

          /** File name. */
          public name: string;

          /** File insertion_point. */
          public insertion_point: string;

          /** File content. */
          public content: string;

          /** File generated_code_info. */
          public generated_code_info?: google.protobuf.GeneratedCodeInfo | null;

          /**
           * Creates a new File instance using the specified properties.
           * @param [properties] Properties to set
           * @returns File instance
           */
          public static create(
            properties?: google.protobuf.compiler.CodeGeneratorResponse.IFile
          ): google.protobuf.compiler.CodeGeneratorResponse.File;

          /**
           * Encodes the specified File message. Does not implicitly {@link google.protobuf.compiler.CodeGeneratorResponse.File.verify|verify} messages.
           * @param message File message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encode(
            message: google.protobuf.compiler.CodeGeneratorResponse.File,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Encodes the specified File message, length delimited. Does not implicitly {@link google.protobuf.compiler.CodeGeneratorResponse.File.verify|verify} messages.
           * @param message File message or plain object to encode
           * @param [writer] Writer to encode to
           * @returns Writer
           */
          public static encodeDelimited(
            message: google.protobuf.compiler.CodeGeneratorResponse.File,
            writer?: $protobuf.Writer
          ): $protobuf.Writer;

          /**
           * Decodes a File message from the specified reader or buffer.
           * @param reader Reader or buffer to decode from
           * @param [length] Message length if known beforehand
           * @returns File
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decode(
            reader: $protobuf.Reader | Uint8Array,
            length?: number
          ): google.protobuf.compiler.CodeGeneratorResponse.File;

          /**
           * Decodes a File message from the specified reader or buffer, length delimited.
           * @param reader Reader or buffer to decode from
           * @returns File
           * @throws {Error} If the payload is not a reader or valid buffer
           * @throws {$protobuf.util.ProtocolError} If required fields are missing
           */
          public static decodeDelimited(
            reader: $protobuf.Reader | Uint8Array
          ): google.protobuf.compiler.CodeGeneratorResponse.File;

          /**
           * Verifies a File message.
           * @param message Plain object to verify
           * @returns `null` if valid, otherwise the reason why it is not
           */
          public static verify(message: { [k: string]: any }): string | null;

          /**
           * Creates a File message from a plain object. Also converts values to their respective internal types.
           * @param object Plain object
           * @returns File
           */
          public static fromObject(object: {
            [k: string]: any;
          }): google.protobuf.compiler.CodeGeneratorResponse.File;

          /**
           * Creates a plain object from a File message. Also converts values to other types if specified.
           * @param message File
           * @param [options] Conversion options
           * @returns Plain object
           */
          public static toObject(
            message: google.protobuf.compiler.CodeGeneratorResponse.File,
            options?: $protobuf.IConversionOptions
          ): { [k: string]: any };

          /**
           * Converts this File to JSON.
           * @returns JSON object
           */
          public toJSON(): { [k: string]: any };
        }
      }
    }
  }
}
