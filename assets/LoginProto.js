/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.com = (function() {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    var com = {};

    com.github = (function() {

        /**
         * Namespace github.
         * @memberof com
         * @namespace
         */
        var github = {};

        github.leixuan6 = (function() {

            /**
             * Namespace leixuan6.
             * @memberof com.github
             * @namespace
             */
            var leixuan6 = {};

            leixuan6.message = (function() {

                /**
                 * Namespace message.
                 * @memberof com.github.leixuan6
                 * @namespace
                 */
                var message = {};

                message.proto = (function() {

                    /**
                     * Namespace proto.
                     * @memberof com.github.leixuan6.message
                     * @namespace
                     */
                    var proto = {};

                    proto.C2L_Login = (function() {

                        /**
                         * Properties of a C2L_Login.
                         * @memberof com.github.leixuan6.message.proto
                         * @interface IC2L_Login
                         * @property {string|null} [platAccountId] C2L_Login platAccountId
                         * @property {string|null} [platAccountName] C2L_Login platAccountName
                         * @property {number|null} [channelId] C2L_Login channelId
                         * @property {number|null} [serverId] C2L_Login serverId
                         * @property {string|null} [md5Flag] C2L_Login md5Flag
                         * @property {string|null} [imei] C2L_Login imei
                         * @property {string|null} [deviceInfo] C2L_Login deviceInfo
                         */

                        /**
                         * Constructs a new C2L_Login.
                         * @memberof com.github.leixuan6.message.proto
                         * @classdesc Represents a C2L_Login.
                         * @implements IC2L_Login
                         * @constructor
                         * @param {com.github.leixuan6.message.proto.IC2L_Login=} [properties] Properties to set
                         */
                        function C2L_Login(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * C2L_Login platAccountId.
                         * @member {string} platAccountId
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         */
                        C2L_Login.prototype.platAccountId = "";

                        /**
                         * C2L_Login platAccountName.
                         * @member {string} platAccountName
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         */
                        C2L_Login.prototype.platAccountName = "";

                        /**
                         * C2L_Login channelId.
                         * @member {number} channelId
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         */
                        C2L_Login.prototype.channelId = 0;

                        /**
                         * C2L_Login serverId.
                         * @member {number} serverId
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         */
                        C2L_Login.prototype.serverId = 0;

                        /**
                         * C2L_Login md5Flag.
                         * @member {string} md5Flag
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         */
                        C2L_Login.prototype.md5Flag = "";

                        /**
                         * C2L_Login imei.
                         * @member {string} imei
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         */
                        C2L_Login.prototype.imei = "";

                        /**
                         * C2L_Login deviceInfo.
                         * @member {string} deviceInfo
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         */
                        C2L_Login.prototype.deviceInfo = "";

                        /**
                         * Creates a new C2L_Login instance using the specified properties.
                         * @function create
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.IC2L_Login=} [properties] Properties to set
                         * @returns {com.github.leixuan6.message.proto.C2L_Login} C2L_Login instance
                         */
                        C2L_Login.create = function create(properties) {
                            return new C2L_Login(properties);
                        };

                        /**
                         * Encodes the specified C2L_Login message. Does not implicitly {@link com.github.leixuan6.message.proto.C2L_Login.verify|verify} messages.
                         * @function encode
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.IC2L_Login} message C2L_Login message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        C2L_Login.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.platAccountId != null && message.hasOwnProperty("platAccountId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.platAccountId);
                            if (message.platAccountName != null && message.hasOwnProperty("platAccountName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.platAccountName);
                            if (message.channelId != null && message.hasOwnProperty("channelId"))
                                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channelId);
                            if (message.serverId != null && message.hasOwnProperty("serverId"))
                                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.serverId);
                            if (message.md5Flag != null && message.hasOwnProperty("md5Flag"))
                                writer.uint32(/* id 5, wireType 2 =*/42).string(message.md5Flag);
                            if (message.imei != null && message.hasOwnProperty("imei"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.imei);
                            if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
                                writer.uint32(/* id 7, wireType 2 =*/58).string(message.deviceInfo);
                            return writer;
                        };

                        /**
                         * Encodes the specified C2L_Login message, length delimited. Does not implicitly {@link com.github.leixuan6.message.proto.C2L_Login.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.IC2L_Login} message C2L_Login message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        C2L_Login.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a C2L_Login message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.github.leixuan6.message.proto.C2L_Login} C2L_Login
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        C2L_Login.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.github.leixuan6.message.proto.C2L_Login();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.platAccountId = reader.string();
                                    break;
                                case 2:
                                    message.platAccountName = reader.string();
                                    break;
                                case 3:
                                    message.channelId = reader.int32();
                                    break;
                                case 4:
                                    message.serverId = reader.int32();
                                    break;
                                case 5:
                                    message.md5Flag = reader.string();
                                    break;
                                case 6:
                                    message.imei = reader.string();
                                    break;
                                case 7:
                                    message.deviceInfo = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a C2L_Login message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.github.leixuan6.message.proto.C2L_Login} C2L_Login
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        C2L_Login.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a C2L_Login message.
                         * @function verify
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        C2L_Login.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.platAccountId != null && message.hasOwnProperty("platAccountId"))
                                if (!$util.isString(message.platAccountId))
                                    return "platAccountId: string expected";
                            if (message.platAccountName != null && message.hasOwnProperty("platAccountName"))
                                if (!$util.isString(message.platAccountName))
                                    return "platAccountName: string expected";
                            if (message.channelId != null && message.hasOwnProperty("channelId"))
                                if (!$util.isInteger(message.channelId))
                                    return "channelId: integer expected";
                            if (message.serverId != null && message.hasOwnProperty("serverId"))
                                if (!$util.isInteger(message.serverId))
                                    return "serverId: integer expected";
                            if (message.md5Flag != null && message.hasOwnProperty("md5Flag"))
                                if (!$util.isString(message.md5Flag))
                                    return "md5Flag: string expected";
                            if (message.imei != null && message.hasOwnProperty("imei"))
                                if (!$util.isString(message.imei))
                                    return "imei: string expected";
                            if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
                                if (!$util.isString(message.deviceInfo))
                                    return "deviceInfo: string expected";
                            return null;
                        };

                        /**
                         * Creates a C2L_Login message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.github.leixuan6.message.proto.C2L_Login} C2L_Login
                         */
                        C2L_Login.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.github.leixuan6.message.proto.C2L_Login)
                                return object;
                            var message = new $root.com.github.leixuan6.message.proto.C2L_Login();
                            if (object.platAccountId != null)
                                message.platAccountId = String(object.platAccountId);
                            if (object.platAccountName != null)
                                message.platAccountName = String(object.platAccountName);
                            if (object.channelId != null)
                                message.channelId = object.channelId | 0;
                            if (object.serverId != null)
                                message.serverId = object.serverId | 0;
                            if (object.md5Flag != null)
                                message.md5Flag = String(object.md5Flag);
                            if (object.imei != null)
                                message.imei = String(object.imei);
                            if (object.deviceInfo != null)
                                message.deviceInfo = String(object.deviceInfo);
                            return message;
                        };

                        /**
                         * Creates a plain object from a C2L_Login message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.C2L_Login} message C2L_Login
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        C2L_Login.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.platAccountId = "";
                                object.platAccountName = "";
                                object.channelId = 0;
                                object.serverId = 0;
                                object.md5Flag = "";
                                object.imei = "";
                                object.deviceInfo = "";
                            }
                            if (message.platAccountId != null && message.hasOwnProperty("platAccountId"))
                                object.platAccountId = message.platAccountId;
                            if (message.platAccountName != null && message.hasOwnProperty("platAccountName"))
                                object.platAccountName = message.platAccountName;
                            if (message.channelId != null && message.hasOwnProperty("channelId"))
                                object.channelId = message.channelId;
                            if (message.serverId != null && message.hasOwnProperty("serverId"))
                                object.serverId = message.serverId;
                            if (message.md5Flag != null && message.hasOwnProperty("md5Flag"))
                                object.md5Flag = message.md5Flag;
                            if (message.imei != null && message.hasOwnProperty("imei"))
                                object.imei = message.imei;
                            if (message.deviceInfo != null && message.hasOwnProperty("deviceInfo"))
                                object.deviceInfo = message.deviceInfo;
                            return object;
                        };

                        /**
                         * Converts this C2L_Login to JSON.
                         * @function toJSON
                         * @memberof com.github.leixuan6.message.proto.C2L_Login
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        C2L_Login.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return C2L_Login;
                    })();

                    proto.L2C_Login = (function() {

                        /**
                         * Properties of a L2C_Login.
                         * @memberof com.github.leixuan6.message.proto
                         * @interface IL2C_Login
                         * @property {number|null} [result] L2C_Login result
                         */

                        /**
                         * Constructs a new L2C_Login.
                         * @memberof com.github.leixuan6.message.proto
                         * @classdesc Represents a L2C_Login.
                         * @implements IL2C_Login
                         * @constructor
                         * @param {com.github.leixuan6.message.proto.IL2C_Login=} [properties] Properties to set
                         */
                        function L2C_Login(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * L2C_Login result.
                         * @member {number} result
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @instance
                         */
                        L2C_Login.prototype.result = 0;

                        /**
                         * Creates a new L2C_Login instance using the specified properties.
                         * @function create
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.IL2C_Login=} [properties] Properties to set
                         * @returns {com.github.leixuan6.message.proto.L2C_Login} L2C_Login instance
                         */
                        L2C_Login.create = function create(properties) {
                            return new L2C_Login(properties);
                        };

                        /**
                         * Encodes the specified L2C_Login message. Does not implicitly {@link com.github.leixuan6.message.proto.L2C_Login.verify|verify} messages.
                         * @function encode
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.IL2C_Login} message L2C_Login message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        L2C_Login.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.result != null && message.hasOwnProperty("result"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
                            return writer;
                        };

                        /**
                         * Encodes the specified L2C_Login message, length delimited. Does not implicitly {@link com.github.leixuan6.message.proto.L2C_Login.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.IL2C_Login} message L2C_Login message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        L2C_Login.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a L2C_Login message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {com.github.leixuan6.message.proto.L2C_Login} L2C_Login
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        L2C_Login.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.github.leixuan6.message.proto.L2C_Login();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.result = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a L2C_Login message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {com.github.leixuan6.message.proto.L2C_Login} L2C_Login
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        L2C_Login.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a L2C_Login message.
                         * @function verify
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        L2C_Login.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.result != null && message.hasOwnProperty("result"))
                                if (!$util.isInteger(message.result))
                                    return "result: integer expected";
                            return null;
                        };

                        /**
                         * Creates a L2C_Login message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {com.github.leixuan6.message.proto.L2C_Login} L2C_Login
                         */
                        L2C_Login.fromObject = function fromObject(object) {
                            if (object instanceof $root.com.github.leixuan6.message.proto.L2C_Login)
                                return object;
                            var message = new $root.com.github.leixuan6.message.proto.L2C_Login();
                            if (object.result != null)
                                message.result = object.result | 0;
                            return message;
                        };

                        /**
                         * Creates a plain object from a L2C_Login message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @static
                         * @param {com.github.leixuan6.message.proto.L2C_Login} message L2C_Login
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        L2C_Login.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults)
                                object.result = 0;
                            if (message.result != null && message.hasOwnProperty("result"))
                                object.result = message.result;
                            return object;
                        };

                        /**
                         * Converts this L2C_Login to JSON.
                         * @function toJSON
                         * @memberof com.github.leixuan6.message.proto.L2C_Login
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        L2C_Login.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return L2C_Login;
                    })();

                    return proto;
                })();

                return message;
            })();

            return leixuan6;
        })();

        return github;
    })();

    return com;
})();

module.exports = $root;
