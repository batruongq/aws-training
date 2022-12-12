/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./tsc-src/core/common/ddb-doc-client.ts":
/*!***********************************************!*\
  !*** ./tsc-src/core/common/ddb-doc-client.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ddbDocClient = void 0;\nconst dynamodb_1 = __webpack_require__(/*! aws-sdk/clients/dynamodb */ \"aws-sdk/clients/dynamodb\");\nexports.ddbDocClient = new dynamodb_1.DocumentClient({\n    // Whether to automatically convert empty strings, blobs, and sets to `null`\n    convertEmptyValues: true,\n    // Whether to return numbers as a string instead of converting them to native JavaScript numbers\n    wrapNumbers: true,\n});\n\n\n//# sourceURL=webpack:///./tsc-src/core/common/ddb-doc-client.ts?");

/***/ }),

/***/ "./tsc-src/core/common/error.ts":
/*!**************************************!*\
  !*** ./tsc-src/core/common/error.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LambdaResolverError = void 0;\nclass LambdaResolverError extends Error {\n    constructor(type, message) {\n        super(message);\n        Object.setPrototypeOf(this, LambdaResolverError.prototype);\n        this.type = type;\n        this.message = message;\n    }\n}\nexports.LambdaResolverError = LambdaResolverError;\n\n\n//# sourceURL=webpack:///./tsc-src/core/common/error.ts?");

/***/ }),

/***/ "./tsc-src/core/constant/error-type.ts":
/*!*********************************************!*\
  !*** ./tsc-src/core/constant/error-type.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.LambdaResolverErrorType = void 0;\nvar LambdaResolverErrorType;\n(function (LambdaResolverErrorType) {\n    LambdaResolverErrorType[\"BadRequest\"] = \"BAD_REQUEST\";\n    LambdaResolverErrorType[\"InternalServerError\"] = \"INTERNAL_SERVER_ERROR\";\n    LambdaResolverErrorType[\"NotFound\"] = \"NOT_FOUND\";\n    LambdaResolverErrorType[\"Unauthorized\"] = \"UNAUTHORIZED\";\n    LambdaResolverErrorType[\"Duplicated\"] = \"DUPLICATED\";\n    LambdaResolverErrorType[\"ConditionalCheckFailed\"] = \"CONDITION_CHECK_FAILED\";\n    LambdaResolverErrorType[\"Archived\"] = \"ARCHIVED\";\n})(LambdaResolverErrorType = exports.LambdaResolverErrorType || (exports.LambdaResolverErrorType = {}));\n\n\n//# sourceURL=webpack:///./tsc-src/core/constant/error-type.ts?");

/***/ }),

/***/ "./tsc-src/core/constant/message.ts":
/*!******************************************!*\
  !*** ./tsc-src/core/constant/message.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Message = void 0;\nvar Message;\n(function (Message) {\n    Message[\"BadRequestError\"] = \"Bad request\";\n    Message[\"InternalServerError\"] = \"Internal server error\";\n    Message[\"NotFound\"] = \"Item not found\";\n    Message[\"Unauthorized\"] = \"Unauthorized\";\n    Message[\"Duplicated\"] = \"Item duplicated\";\n    Message[\"ConditionalCheckFailed\"] = \"The conditional request failed\";\n    Message[\"Archived\"] = \"Item archived\";\n})(Message = exports.Message || (exports.Message = {}));\n\n\n//# sourceURL=webpack:///./tsc-src/core/constant/message.ts?");

/***/ }),

/***/ "./tsc-src/core/helpers/is-empty.ts":
/*!******************************************!*\
  !*** ./tsc-src/core/helpers/is-empty.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isEmpty = void 0;\nconst isEmpty = (input) => {\n    const type = typeof input;\n    switch (type) {\n        case 'object':\n            return Object.keys(input).length === 0 && input.constructor === Object;\n        default:\n            return false;\n    }\n};\nexports.isEmpty = isEmpty;\n\n\n//# sourceURL=webpack:///./tsc-src/core/helpers/is-empty.ts?");

/***/ }),

/***/ "./tsc-src/core/helpers/update-expression.ts":
/*!***************************************************!*\
  !*** ./tsc-src/core/helpers/update-expression.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getUpdateExpression = void 0;\nconst getUpdateExpression = (input) => {\n    const updateItem = Object.assign(Object.assign({}, input), { updatedAt: new Date().toISOString() });\n    const expressionAttributes = {};\n    const expressionAttributeValues = {};\n    const keys = Object.keys(updateItem);\n    const updateExpressionsMap = keys.map((key) => {\n        expressionAttributes[`#${key}`] = key;\n        expressionAttributeValues[`:${key}`] = updateItem[key];\n        return `#${key} = :${key}`;\n    });\n    const updateExpression = `SET ${updateExpressionsMap.join(',')}`;\n    return {\n        UpdateExpression: updateExpression,\n        ExpressionAttributeNames: expressionAttributes,\n        ExpressionAttributeValues: expressionAttributeValues,\n    };\n};\nexports.getUpdateExpression = getUpdateExpression;\n\n\n//# sourceURL=webpack:///./tsc-src/core/helpers/update-expression.ts?");

/***/ }),

/***/ "./tsc-src/core/index.ts":
/*!*******************************!*\
  !*** ./tsc-src/core/index.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__exportStar(__webpack_require__(/*! ./common/ddb-doc-client */ \"./tsc-src/core/common/ddb-doc-client.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./common/error */ \"./tsc-src/core/common/error.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./constant/error-type */ \"./tsc-src/core/constant/error-type.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./constant/message */ \"./tsc-src/core/constant/message.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./helpers/is-empty */ \"./tsc-src/core/helpers/is-empty.ts\"), exports);\n__exportStar(__webpack_require__(/*! ./helpers/update-expression */ \"./tsc-src/core/helpers/update-expression.ts\"), exports);\n\n\n//# sourceURL=webpack:///./tsc-src/core/index.ts?");

/***/ }),

/***/ "./tsc-src/function/ReventAppOrganizationCreate/index.ts":
/*!***************************************************************!*\
  !*** ./tsc-src/function/ReventAppOrganizationCreate/index.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst uuid_1 = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/index.js\");\nconst _app_core_1 = __webpack_require__(/*! @app-core */ \"./tsc-src/core/index.ts\");\nconst handler = (event) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a, _b;\n    const userId = (_b = (_a = event.identity) === null || _a === void 0 ? void 0 : _a.claims) === null || _b === void 0 ? void 0 : _b.sub;\n    const { input } = event.arguments;\n    const date = new Date();\n    if (!input) {\n        throw new _app_core_1.LambdaResolverError(_app_core_1.LambdaResolverErrorType.BadRequest, _app_core_1.Message.BadRequestError);\n    }\n    const { name, description } = input;\n    // Validation required fields\n    if (!name) {\n        throw new _app_core_1.LambdaResolverError(_app_core_1.LambdaResolverErrorType.BadRequest, _app_core_1.Message.BadRequestError);\n    }\n    try {\n        // Add item to validation table, this help prevent a user create organization duplicate name\n        yield _app_core_1.ddbDocClient.put({\n            TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME,\n            Item: {\n                userId,\n                name,\n            },\n            ConditionExpression: \"attribute_not_exists(userId) AND attribute_not_exists(#name)\",\n            ExpressionAttributeNames: { \"#name\": \"name\" },\n        }).promise();\n        // const itemByName = await ddbDocClient.get({\n        //   TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,\n        //   Key: {\n        //     userId,\n        //     name,\n        //   }\n        // }).promise();\n        // if (!isEmpty(itemByName)) {\n        //   throw new LambdaResolverError(LambdaResolverErrorType.Duplicated, Message.Duplicated);\n        // }\n        const dataInput = {\n            id: (0, uuid_1.v4)(),\n            userId,\n            name,\n            description,\n            createdAt: date.toISOString(),\n            updatedAt: date.toISOString(),\n        };\n        yield _app_core_1.ddbDocClient.put({\n            TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONTABLE_NAME,\n            Item: Object.assign(Object.assign({}, dataInput), { \"__typename\": \"Organization\" }),\n        }).promise();\n        // Add item to OrganizationValidation data source\n        // OrganizationValidation data source used to validate duplicate\n        // await ddbDocClient.put({\n        //   TableName: process.env.API_REVENTAPPAPI_ORGANIZATIONVALIDATIONTABLE_NAME as string,\n        //   Item: {\n        //     userId,\n        //     name,\n        //   }\n        // }).promise();\n        return dataInput;\n    }\n    catch (error) {\n        console.log('LOG ME', error);\n        throw new _app_core_1.LambdaResolverError(_app_core_1.LambdaResolverErrorType.InternalServerError, _app_core_1.Message.InternalServerError);\n    }\n});\nexports.handler = handler;\n\n\n//# sourceURL=webpack:///./tsc-src/function/ReventAppOrganizationCreate/index.ts?");

/***/ }),

/***/ "./node_modules/uuid/dist/bytesToUuid.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/bytesToUuid.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n\n  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');\n}\n\nvar _default = bytesToUuid;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/uuid/dist/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nObject.defineProperty(exports, \"v1\", ({\n  enumerable: true,\n  get: function () {\n    return _v.default;\n  }\n}));\nObject.defineProperty(exports, \"v3\", ({\n  enumerable: true,\n  get: function () {\n    return _v2.default;\n  }\n}));\nObject.defineProperty(exports, \"v4\", ({\n  enumerable: true,\n  get: function () {\n    return _v3.default;\n  }\n}));\nObject.defineProperty(exports, \"v5\", ({\n  enumerable: true,\n  get: function () {\n    return _v4.default;\n  }\n}));\n\nvar _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/v1.js\"));\n\nvar _v2 = _interopRequireDefault(__webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/v3.js\"));\n\nvar _v3 = _interopRequireDefault(__webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/v4.js\"));\n\nvar _v4 = _interopRequireDefault(__webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/v5.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/md5.js":
/*!***************************************!*\
  !*** ./node_modules/uuid/dist/md5.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ \"crypto\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction md5(bytes) {\n  if (Array.isArray(bytes)) {\n    bytes = Buffer.from(bytes);\n  } else if (typeof bytes === 'string') {\n    bytes = Buffer.from(bytes, 'utf8');\n  }\n\n  return _crypto.default.createHash('md5').update(bytes).digest();\n}\n\nvar _default = md5;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/rng.js":
/*!***************************************!*\
  !*** ./node_modules/uuid/dist/rng.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = rng;\n\nvar _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ \"crypto\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction rng() {\n  return _crypto.default.randomBytes(16);\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/sha1.js":
/*!****************************************!*\
  !*** ./node_modules/uuid/dist/sha1.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ \"crypto\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction sha1(bytes) {\n  if (Array.isArray(bytes)) {\n    bytes = Buffer.from(bytes);\n  } else if (typeof bytes === 'string') {\n    bytes = Buffer.from(bytes, 'utf8');\n  }\n\n  return _crypto.default.createHash('sha1').update(bytes).digest();\n}\n\nvar _default = sha1;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/v1.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/dist/v1.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/rng.js\"));\n\nvar _bytesToUuid = _interopRequireDefault(__webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuid/dist/bytesToUuid.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng.default)();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : (0, _bytesToUuid.default)(b);\n}\n\nvar _default = v1;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/v3.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/dist/v3.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/v35.js\"));\n\nvar _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/md5.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst v3 = (0, _v.default)('v3', 0x30, _md.default);\nvar _default = v3;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/v35.js":
/*!***************************************!*\
  !*** ./node_modules/uuid/dist/v35.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = _default;\nexports.URL = exports.DNS = void 0;\n\nvar _bytesToUuid = _interopRequireDefault(__webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuid/dist/bytesToUuid.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction uuidToBytes(uuid) {\n  // Note: We assume we're being passed a valid uuid string\n  var bytes = [];\n  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {\n    bytes.push(parseInt(hex, 16));\n  });\n  return bytes;\n}\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  var bytes = new Array(str.length);\n\n  for (var i = 0; i < str.length; i++) {\n    bytes[i] = str.charCodeAt(i);\n  }\n\n  return bytes;\n}\n\nconst DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nexports.DNS = DNS;\nconst URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\nexports.URL = URL;\n\nfunction _default(name, version, hashfunc) {\n  var generateUUID = function (value, namespace, buf, offset) {\n    var off = buf && offset || 0;\n    if (typeof value == 'string') value = stringToBytes(value);\n    if (typeof namespace == 'string') namespace = uuidToBytes(namespace);\n    if (!Array.isArray(value)) throw TypeError('value must be an array of bytes');\n    if (!Array.isArray(namespace) || namespace.length !== 16) throw TypeError('namespace must be uuid string or an Array of 16 byte values'); // Per 4.3\n\n    var bytes = hashfunc(namespace.concat(value));\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      for (var idx = 0; idx < 16; ++idx) {\n        buf[off + idx] = bytes[idx];\n      }\n    }\n\n    return buf || (0, _bytesToUuid.default)(bytes);\n  }; // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name;\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/v4.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/dist/v4.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/rng.js\"));\n\nvar _bytesToUuid = _interopRequireDefault(__webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuid/dist/bytesToUuid.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof options == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n\n  options = options || {};\n\n  var rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || (0, _bytesToUuid.default)(rnds);\n}\n\nvar _default = v4;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/v5.js":
/*!**************************************!*\
  !*** ./node_modules/uuid/dist/v5.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/v35.js\"));\n\nvar _sha = _interopRequireDefault(__webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/sha1.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst v5 = (0, _v.default)('v5', 0x50, _sha.default);\nvar _default = v5;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/v5.js?");

/***/ }),

/***/ "aws-sdk/clients/dynamodb":
/*!*******************************************!*\
  !*** external "aws-sdk/clients/dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("aws-sdk/clients/dynamodb");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./tsc-src/function/ReventAppOrganizationCreate/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;