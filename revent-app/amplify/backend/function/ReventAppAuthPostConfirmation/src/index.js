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

/***/ "./tsc-src/function/ReventAppAuthPostConfirmation/index.ts":
/*!*****************************************************************!*\
  !*** ./tsc-src/function/ReventAppAuthPostConfirmation/index.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst aws_sdk_1 = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\nconst _app_core_1 = __webpack_require__(/*! @app-core */ \"./tsc-src/core/index.ts\");\nvar documentClient = new aws_sdk_1.DynamoDB.DocumentClient();\nconst handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {\n    const date = new Date();\n    if (event.request.userAttributes.sub &&\n        typeof process.env.API_REVENTAPPAPI_USERTABLE_NAME === 'string') {\n        const params = {\n            TableName: process.env.API_REVENTAPPAPI_USERTABLE_NAME,\n            Item: {\n                'id': event.request.userAttributes.sub,\n                '__typename': 'User',\n                'name': event.request.userAttributes.name,\n                'email': event.request.userAttributes.email,\n                'createdAt': date.toISOString(),\n                'updatedAt': date.toISOString(),\n            },\n        };\n        try {\n            yield documentClient.put(params).promise();\n        }\n        catch (err) {\n            throw Error(_app_core_1.Message.InternalServerError);\n        }\n    }\n    else {\n        throw Error(_app_core_1.Message.BadRequestError);\n    }\n    return event;\n});\nexports.handler = handler;\n\n\n//# sourceURL=webpack:///./tsc-src/function/ReventAppAuthPostConfirmation/index.ts?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "aws-sdk/clients/dynamodb":
/*!*******************************************!*\
  !*** external "aws-sdk/clients/dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("aws-sdk/clients/dynamodb");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./tsc-src/function/ReventAppAuthPostConfirmation/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;