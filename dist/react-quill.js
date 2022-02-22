(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("prop-types"), require("react-dom/server"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "prop-types", "react-dom/server"], factory);
	else if(typeof exports === 'object')
		exports["ReactQuill"] = factory(require("react"), require("react-dom"), require("prop-types"), require("react-dom/server"));
	else
		root["ReactQuill"] = factory(root["React"], root["ReactDOM"], root["PropTypes"], root["ReactDOMServer"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_143__, __WEBPACK_EXTERNAL_MODULE_146__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	/*
	React-Quill v1.0.0
	https://github.com/zenoamaro/react-quill
	*/
	var Quill = __webpack_require__(/*! quill */ 1);
	var Component = __webpack_require__(/*! ./component */ 2);
	
	module.exports = Component;
	module.exports.default = Component;
	module.exports.Quill = Quill;
	module.exports.Mixin = __webpack_require__(/*! ./mixin */ 9);
	module.exports.Toolbar = __webpack_require__(/*! ./toolbar */ 145);


/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./~/quill/dist/quill.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/*!
	 * Quill Editor v2.0.0-dev.3
	 * https://quilljs.com/
	 * Copyright (c) 2014, Jason Chen
	 * Copyright (c) 2013, salesforce.com
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(typeof exports === 'object' && typeof module === 'object')
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Quill"] = factory();
		else
			root["Quill"] = factory();
	})(window, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 0);
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ "./assets/icons/align-center.svg":
	/*!***************************************!*\
	  !*** ./assets/icons/align-center.svg ***!
	  \***************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-center.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/align-justify.svg":
	/*!****************************************!*\
	  !*** ./assets/icons/align-justify.svg ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-justify.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/align-left.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/align-left.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-left.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/align-right.svg":
	/*!**************************************!*\
	  !*** ./assets/icons/align-right.svg ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/align-right.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/background.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/background.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <g class=\\\"ql-fill ql-color-label\\\"> <polygon points=\\\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\\\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\\\"6.817 5 6 5 6 6 6.38 6 6.817 5\\\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\\\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\\\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\\\"4.63 10 4 10 4 11 4.192 11 4.63 10\\\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\\\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\\\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\\\"12 6.868 12 6 11.62 6 12 6.868\\\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\\\"12.933 9 13 9 13 8 12.495 8 12.933 9\\\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\\\"5.5 13 9 5 12.5 13\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/background.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/blockquote.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/blockquote.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=4 y=5></rect> <rect class=\\\"ql-fill ql-stroke\\\" height=3 width=3 x=11 y=5></rect> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\\\"ql-even ql-fill ql-stroke\\\" d=M14,8c0,4.031-3,5-3,5></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/blockquote.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/bold.svg":
	/*!*******************************!*\
	  !*** ./assets/icons/bold.svg ***!
	  \*******************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/bold.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/clean.svg":
	/*!********************************!*\
	  !*** ./assets/icons/clean.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/clean.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/code.svg":
	/*!*******************************!*\
	  !*** ./assets/icons/code.svg ***!
	  \*******************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"5 7 3 9 5 11\\\"></polyline> <polyline class=\\\"ql-even ql-stroke\\\" points=\\\"13 7 15 9 13 11\\\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/code.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/color.svg":
	/*!********************************!*\
	  !*** ./assets/icons/color.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-color-label ql-stroke ql-transparent\\\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\\\"5.5 11 9 3 12.5 11\\\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/color.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/direction-ltr.svg":
	/*!****************************************!*\
	  !*** ./assets/icons/direction-ltr.svg ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"3 11 5 9 3 7 3 11\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-ltr.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/direction-rtl.svg":
	/*!****************************************!*\
	  !*** ./assets/icons/direction-rtl.svg ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=\\\"ql-stroke ql-fill\\\" points=\\\"15 12 13 10 15 8 15 12\\\"></polygon> <line class=\\\"ql-stroke ql-fill\\\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/direction-rtl.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/dropdown.svg":
	/*!***********************************!*\
	  !*** ./assets/icons/dropdown.svg ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <polygon class=ql-stroke points=\\\"7 11 9 13 11 11 7 11\\\"></polygon> <polygon class=ql-stroke points=\\\"7 7 9 5 11 7 7 7\\\"></polygon> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/dropdown.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/formula.svg":
	/*!**********************************!*\
	  !*** ./assets/icons/formula.svg ***!
	  \**********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/formula.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/header-2.svg":
	/*!***********************************!*\
	  !*** ./assets/icons/header-2.svg ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header-2.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/header.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/header.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewBox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/header.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/image.svg":
	/*!********************************!*\
	  !*** ./assets/icons/image.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\\\"ql-even ql-fill\\\" points=\\\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/image.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/indent.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/indent.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\\\"ql-fill ql-stroke\\\" points=\\\"3 7 3 11 5 9 3 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/indent.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/italic.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/italic.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/italic.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/link.svg":
	/*!*******************************!*\
	  !*** ./assets/icons/link.svg ***!
	  \*******************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\\\"ql-even ql-stroke\\\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\\\"ql-even ql-stroke\\\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/link.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/list-bullet.svg":
	/*!**************************************!*\
	  !*** ./assets/icons/list-bullet.svg ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-bullet.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/list-check.svg":
	/*!*************************************!*\
	  !*** ./assets/icons/list-check.svg ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg class=\\\"\\\" viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\\\"3 4 4 5 6 3\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\\\"3 14 4 15 6 13\\\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"3 9 4 10 6 8\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-check.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/list-ordered.svg":
	/*!***************************************!*\
	  !*** ./assets/icons/list-ordered.svg ***!
	  \***************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\\\"ql-stroke ql-thin\\\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\\\"ql-stroke ql-thin\\\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\\\"ql-stroke ql-thin\\\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/list-ordered.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/outdent.svg":
	/*!**********************************!*\
	  !*** ./assets/icons/outdent.svg ***!
	  \**********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\\\"5 7 5 11 3 9 5 7\\\"></polyline> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/outdent.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/strike.svg":
	/*!*********************************!*\
	  !*** ./assets/icons/strike.svg ***!
	  \*********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <line class=\\\"ql-stroke ql-thin\\\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/strike.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/subscript.svg":
	/*!************************************!*\
	  !*** ./assets/icons/subscript.svg ***!
	  \************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/subscript.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/superscript.svg":
	/*!**************************************!*\
	  !*** ./assets/icons/superscript.svg ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/superscript.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/table.svg":
	/*!********************************!*\
	  !*** ./assets/icons/table.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=2 width=3 x=5 y=5></rect> <rect class=ql-fill height=2 width=4 x=9 y=5></rect> <g class=\\\"ql-fill ql-transparent\\\"> <rect height=2 width=3 x=5 y=8></rect> <rect height=2 width=4 x=9 y=8></rect> <rect height=2 width=3 x=5 y=11></rect> <rect height=2 width=4 x=9 y=11></rect> </g> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/table.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/underline.svg":
	/*!************************************!*\
	  !*** ./assets/icons/underline.svg ***!
	  \************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/underline.svg?");
	
	/***/ }),
	
	/***/ "./assets/icons/video.svg":
	/*!********************************!*\
	  !*** ./assets/icons/video.svg ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// Module\nvar code = \"<svg viewbox=\\\"0 0 18 18\\\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://Quill/./assets/icons/video.svg?");
	
	/***/ }),
	
	/***/ "./blots/block.js":
	/*!************************!*\
	  !*** ./blots/block.js ***!
	  \************************/
	/*! exports provided: blockDelta, bubbleFormats, BlockEmbed, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blockDelta\", function() { return blockDelta; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubbleFormats\", function() { return bubbleFormats; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BlockEmbed\", function() { return BlockEmbed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Block; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inline */ \"./blots/inline.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\n\n\n\nconst NEWLINE_LENGTH = 1;\n\nclass Block extends parchment__WEBPACK_IMPORTED_MODULE_2__[\"BlockBlot\"] {\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    this.cache = {};\n  }\n\n  delta() {\n    if (this.cache.delta == null) {\n      this.cache.delta = blockDelta(this);\n    }\n\n    return this.cache.delta;\n  }\n\n  deleteAt(index, length) {\n    super.deleteAt(index, length);\n    this.cache = {};\n  }\n\n  formatAt(index, length, name, value) {\n    if (length <= 0) return;\n\n    if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK)) {\n      if (index + length === this.length()) {\n        this.format(name, value);\n      }\n    } else {\n      super.formatAt(index, Math.min(length, this.length() - index - 1), name, value);\n    }\n\n    this.cache = {};\n  }\n\n  insertAt(index, value, def) {\n    if (def != null) {\n      super.insertAt(index, value, def);\n      this.cache = {};\n      return;\n    }\n\n    if (value.length === 0) return;\n    const lines = value.split('\\n');\n    const text = lines.shift();\n\n    if (text.length > 0) {\n      if (index < this.length() - 1 || this.children.tail == null) {\n        super.insertAt(Math.min(index, this.length() - 1), text);\n      } else {\n        this.children.tail.insertAt(this.children.tail.length(), text);\n      }\n\n      this.cache = {};\n    }\n\n    let block = this;\n    lines.reduce((lineIndex, line) => {\n      block = block.split(lineIndex, true);\n      block.insertAt(0, line);\n      return line.length;\n    }, index + text.length);\n  }\n\n  insertBefore(blot, ref) {\n    const {\n      head\n    } = this.children;\n    super.insertBefore(blot, ref);\n\n    if (head instanceof _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n      head.remove();\n    }\n\n    this.cache = {};\n  }\n\n  length() {\n    if (this.cache.length == null) {\n      this.cache.length = super.length() + NEWLINE_LENGTH;\n    }\n\n    return this.cache.length;\n  }\n\n  moveChildren(target, ref) {\n    super.moveChildren(target, ref);\n    this.cache = {};\n  }\n\n  optimize(context) {\n    super.optimize(context);\n    this.cache = {};\n  }\n\n  path(index) {\n    return super.path(index, true);\n  }\n\n  removeChild(child) {\n    super.removeChild(child);\n    this.cache = {};\n  }\n\n  split(index, force = false) {\n    if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {\n      const clone = this.clone();\n\n      if (index === 0) {\n        this.parent.insertBefore(clone, this);\n        return this;\n      }\n\n      this.parent.insertBefore(clone, this.next);\n      return clone;\n    }\n\n    const next = super.split(index, force);\n    this.cache = {};\n    return next;\n  }\n\n}\n\nBlock.blotName = 'block';\nBlock.tagName = 'P';\nBlock.defaultChild = _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nBlock.allowedChildren = [_break__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _inline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n\nclass BlockEmbed extends parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"] {\n  attach() {\n    super.attach();\n    this.attributes = new parchment__WEBPACK_IMPORTED_MODULE_2__[\"AttributorStore\"](this.domNode);\n  }\n\n  delta() {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(this.value(), extend__WEBPACK_IMPORTED_MODULE_0___default()(this.formats(), this.attributes.values()));\n  }\n\n  format(name, value) {\n    const attribute = this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK_ATTRIBUTE);\n\n    if (attribute != null) {\n      this.attributes.attribute(attribute, value);\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    this.format(name, value);\n  }\n\n  insertAt(index, value, def) {\n    if (typeof value === 'string' && value.endsWith('\\n')) {\n      const block = this.scroll.create(Block.blotName);\n      this.parent.insertBefore(block, index === 0 ? this : this.next);\n      block.insertAt(0, value.slice(0, -1));\n    } else {\n      super.insertAt(index, value, def);\n    }\n  }\n\n}\n\nBlockEmbed.scope = parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].BLOCK_BLOT; // It is important for cursor behavior BlockEmbeds use tags that are block level elements\n\nfunction blockDelta(blot, filter = true) {\n  return blot.descendants(parchment__WEBPACK_IMPORTED_MODULE_2__[\"LeafBlot\"]).reduce((delta, leaf) => {\n    if (leaf.length() === 0) {\n      return delta;\n    }\n\n    return delta.insert(leaf.value(), bubbleFormats(leaf, {}, filter));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a()).insert('\\n', bubbleFormats(blot));\n}\n\nfunction bubbleFormats(blot, formats = {}, filter = true) {\n  if (blot == null) return formats;\n\n  if (typeof blot.formats === 'function') {\n    formats = extend__WEBPACK_IMPORTED_MODULE_0___default()(formats, blot.formats());\n\n    if (filter) {\n      // exclude syntax highlighting from deltas and getFormat()\n      delete formats['code-token'];\n    }\n  }\n\n  if (blot.parent == null || blot.parent.statics.blotName === 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {\n    return formats;\n  }\n\n  return bubbleFormats(blot.parent, formats, filter);\n}\n\n\n\n//# sourceURL=webpack://Quill/./blots/block.js?");
	
	/***/ }),
	
	/***/ "./blots/break.js":
	/*!************************!*\
	  !*** ./blots/break.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Break extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static value() {\n    return undefined;\n  }\n\n  optimize() {\n    if (this.prev || this.next) {\n      this.remove();\n    }\n  }\n\n  length() {\n    return 0;\n  }\n\n  value() {\n    return '';\n  }\n\n}\n\nBreak.blotName = 'break';\nBreak.tagName = 'BR';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Break);\n\n//# sourceURL=webpack://Quill/./blots/break.js?");
	
	/***/ }),
	
	/***/ "./blots/container.js":
	/*!****************************!*\
	  !*** ./blots/container.js ***!
	  \****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Container extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"] {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);\n\n//# sourceURL=webpack://Quill/./blots/container.js?");
	
	/***/ }),
	
	/***/ "./blots/cursor.js":
	/*!*************************!*\
	  !*** ./blots/cursor.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\nclass Cursor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static value() {\n    return undefined;\n  }\n\n  constructor(scroll, domNode, selection) {\n    super(scroll, domNode);\n    this.selection = selection;\n    this.textNode = document.createTextNode(Cursor.CONTENTS);\n    this.domNode.appendChild(this.textNode);\n    this.savedLength = 0;\n  }\n\n  detach() {\n    // super.detach() will also clear domNode.__blot\n    if (this.parent != null) this.parent.removeChild(this);\n  }\n\n  format(name, value) {\n    if (this.savedLength !== 0) {\n      super.format(name, value);\n      return;\n    }\n\n    let target = this;\n    let index = 0;\n\n    while (target != null && target.statics.scope !== parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK_BLOT) {\n      index += target.offset(target.parent);\n      target = target.parent;\n    }\n\n    if (target != null) {\n      this.savedLength = Cursor.CONTENTS.length;\n      target.optimize();\n      target.formatAt(index, Cursor.CONTENTS.length, name, value);\n      this.savedLength = 0;\n    }\n  }\n\n  index(node, offset) {\n    if (node === this.textNode) return 0;\n    return super.index(node, offset);\n  }\n\n  length() {\n    return this.savedLength;\n  }\n\n  position() {\n    return [this.textNode, this.textNode.data.length];\n  }\n\n  remove() {\n    super.remove();\n    this.parent = null;\n  }\n\n  restore() {\n    if (this.selection.composing || this.parent == null) return null;\n    const range = this.selection.getNativeRange(); // Link format will insert text outside of anchor tag\n\n    while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {\n      this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);\n    }\n\n    const prevTextBlot = this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.prev : null;\n    const prevTextLength = prevTextBlot ? prevTextBlot.length() : 0;\n    const nextTextBlot = this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"] ? this.next : null;\n    const nextText = nextTextBlot ? nextTextBlot.text : '';\n    const {\n      textNode\n    } = this; // take text from inside this blot and reset it\n\n    const newText = textNode.data.split(Cursor.CONTENTS).join('');\n    textNode.data = Cursor.CONTENTS; // proactively merge TextBlots around cursor so that optimization\n    // doesn't lose the cursor.  the reason we are here in cursor.restore\n    // could be that the user clicked in prevTextBlot or nextTextBlot, or\n    // the user typed something.\n\n    let mergedTextBlot;\n\n    if (prevTextBlot) {\n      mergedTextBlot = prevTextBlot;\n\n      if (newText || nextTextBlot) {\n        prevTextBlot.insertAt(prevTextBlot.length(), newText + nextText);\n\n        if (nextTextBlot) {\n          nextTextBlot.remove();\n        }\n      }\n    } else if (nextTextBlot) {\n      mergedTextBlot = nextTextBlot;\n      nextTextBlot.insertAt(0, newText);\n    } else {\n      const newTextNode = document.createTextNode(newText);\n      mergedTextBlot = this.scroll.create(newTextNode);\n      this.parent.insertBefore(mergedTextBlot, this);\n    }\n\n    this.remove();\n\n    if (range) {\n      // calculate selection to restore\n      const remapOffset = (node, offset) => {\n        if (prevTextBlot && node === prevTextBlot.domNode) {\n          return offset;\n        }\n\n        if (node === textNode) {\n          return prevTextLength + offset - 1;\n        }\n\n        if (nextTextBlot && node === nextTextBlot.domNode) {\n          return prevTextLength + newText.length + offset;\n        }\n\n        return null;\n      };\n\n      const start = remapOffset(range.start.node, range.start.offset);\n      const end = remapOffset(range.end.node, range.end.offset);\n\n      if (start !== null && end !== null) {\n        return {\n          startNode: mergedTextBlot.domNode,\n          startOffset: start,\n          endNode: mergedTextBlot.domNode,\n          endOffset: end\n        };\n      }\n    }\n\n    return null;\n  }\n\n  update(mutations, context) {\n    if (mutations.some(mutation => {\n      return mutation.type === 'characterData' && mutation.target === this.textNode;\n    })) {\n      const range = this.restore();\n      if (range) context.range = range;\n    }\n  }\n\n  value() {\n    return '';\n  }\n\n}\n\nCursor.blotName = 'cursor';\nCursor.className = 'ql-cursor';\nCursor.tagName = 'span';\nCursor.CONTENTS = '\\uFEFF'; // Zero width no break space\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\n\n//# sourceURL=webpack://Quill/./blots/cursor.js?");
	
	/***/ }),
	
	/***/ "./blots/embed.js":
	/*!************************!*\
	  !*** ./blots/embed.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\nconst GUARD_TEXT = '\\uFEFF';\n\nclass Embed extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  constructor(scroll, node) {\n    super(scroll, node);\n    this.contentNode = document.createElement('span');\n    this.contentNode.setAttribute('contenteditable', false);\n    Array.from(this.domNode.childNodes).forEach(childNode => {\n      this.contentNode.appendChild(childNode);\n    });\n    this.leftGuard = document.createTextNode(GUARD_TEXT);\n    this.rightGuard = document.createTextNode(GUARD_TEXT);\n    this.domNode.appendChild(this.leftGuard);\n    this.domNode.appendChild(this.contentNode);\n    this.domNode.appendChild(this.rightGuard);\n  }\n\n  index(node, offset) {\n    if (node === this.leftGuard) return 0;\n    if (node === this.rightGuard) return 1;\n    return super.index(node, offset);\n  }\n\n  restore(node) {\n    let range;\n    let textNode;\n    const text = node.data.split(GUARD_TEXT).join('');\n\n    if (node === this.leftGuard) {\n      if (this.prev instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        const prevLength = this.prev.length();\n        this.prev.insertAt(prevLength, text);\n        range = {\n          startNode: this.prev.domNode,\n          startOffset: prevLength + text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    } else if (node === this.rightGuard) {\n      if (this.next instanceof _text__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.next.insertAt(0, text);\n        range = {\n          startNode: this.next.domNode,\n          startOffset: text.length\n        };\n      } else {\n        textNode = document.createTextNode(text);\n        this.parent.insertBefore(this.scroll.create(textNode), this.next);\n        range = {\n          startNode: textNode,\n          startOffset: text.length\n        };\n      }\n    }\n\n    node.data = GUARD_TEXT;\n    return range;\n  }\n\n  update(mutations, context) {\n    mutations.forEach(mutation => {\n      if (mutation.type === 'characterData' && (mutation.target === this.leftGuard || mutation.target === this.rightGuard)) {\n        const range = this.restore(mutation.target);\n        if (range) context.range = range;\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Embed);\n\n//# sourceURL=webpack://Quill/./blots/embed.js?");
	
	/***/ }),
	
	/***/ "./blots/inline.js":
	/*!*************************!*\
	  !*** ./blots/inline.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ \"./blots/text.js\");\n\n\n\n\nclass Inline extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"InlineBlot\"] {\n  static compare(self, other) {\n    const selfIndex = Inline.order.indexOf(self);\n    const otherIndex = Inline.order.indexOf(other);\n\n    if (selfIndex >= 0 || otherIndex >= 0) {\n      return selfIndex - otherIndex;\n    }\n\n    if (self === other) {\n      return 0;\n    }\n\n    if (self < other) {\n      return -1;\n    }\n\n    return 1;\n  }\n\n  formatAt(index, length, name, value) {\n    if (Inline.compare(this.statics.blotName, name) < 0 && this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOT)) {\n      const blot = this.isolate(index, length);\n\n      if (value) {\n        blot.wrap(name, value);\n      }\n    } else {\n      super.formatAt(index, length, name, value);\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.parent instanceof Inline && Inline.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {\n      const parent = this.parent.isolate(this.offset(), this.length());\n      this.moveChildren(parent);\n      parent.wrap(this);\n    }\n  }\n\n}\n\nInline.allowedChildren = [Inline, _break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"], _text__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]; // Lower index means deeper in the DOM tree, since not found (-1) is for embeds\n\nInline.order = ['cursor', 'inline', // Must be lower\n'link', // Chrome wants <a> to be lower\n'underline', 'strike', 'italic', 'bold', 'script', 'code' // Must be higher\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Inline);\n\n//# sourceURL=webpack://Quill/./blots/inline.js?");
	
	/***/ }),
	
	/***/ "./blots/scroll.js":
	/*!*************************!*\
	  !*** ./blots/scroll.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block */ \"./blots/block.js\");\n/* harmony import */ var _break__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break */ \"./blots/break.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./blots/container.js\");\n\n\n\n\n\n\nfunction isLine(blot) {\n  return blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"] || blot instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"];\n}\n\nclass Scroll extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ScrollBlot\"] {\n  constructor(registry, domNode, {\n    emitter\n  }) {\n    super(registry, domNode);\n    this.emitter = emitter;\n    this.batch = false;\n    this.optimize();\n    this.enable();\n    this.domNode.addEventListener('dragstart', e => this.handleDragStart(e));\n  }\n\n  batchStart() {\n    if (!Array.isArray(this.batch)) {\n      this.batch = [];\n    }\n  }\n\n  batchEnd() {\n    const mutations = this.batch;\n    this.batch = false;\n    this.update(mutations);\n  }\n\n  emitMount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_MOUNT, blot);\n  }\n\n  emitUnmount(blot) {\n    this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BLOT_UNMOUNT, blot);\n  }\n\n  deleteAt(index, length) {\n    const [first, offset] = this.line(index);\n    const [last] = this.line(index + length);\n    super.deleteAt(index, length);\n\n    if (last != null && first !== last && offset > 0) {\n      if (first instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"] || last instanceof _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"]) {\n        this.optimize();\n        return;\n      }\n\n      const ref = last.children.head instanceof _break__WEBPACK_IMPORTED_MODULE_3__[\"default\"] ? null : last.children.head;\n      first.moveChildren(last, ref);\n      first.remove();\n    }\n\n    this.optimize();\n  }\n\n  enable(enabled = true) {\n    this.domNode.setAttribute('contenteditable', enabled);\n  }\n\n  formatAt(index, length, format, value) {\n    super.formatAt(index, length, format, value);\n    this.optimize();\n  }\n\n  handleDragStart(event) {\n    event.preventDefault();\n  }\n\n  insertAt(index, value, def) {\n    if (index >= this.length()) {\n      if (def == null || this.scroll.query(value, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) == null) {\n        const blot = this.scroll.create(this.statics.defaultChild.blotName);\n        this.appendChild(blot);\n\n        if (def == null && value.endsWith('\\n')) {\n          blot.insertAt(0, value.slice(0, -1), def);\n        } else {\n          blot.insertAt(0, value, def);\n        }\n      } else {\n        const embed = this.scroll.create(value, def);\n        this.appendChild(embed);\n      }\n    } else {\n      super.insertAt(index, value, def);\n    }\n\n    this.optimize();\n  }\n\n  insertBefore(blot, ref) {\n    if (blot.statics.scope === parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE_BLOT) {\n      const wrapper = this.scroll.create(this.statics.defaultChild.blotName);\n      wrapper.appendChild(blot);\n      super.insertBefore(wrapper, ref);\n    } else {\n      super.insertBefore(blot, ref);\n    }\n  }\n\n  isEnabled() {\n    return this.domNode.getAttribute('contenteditable') === 'true';\n  }\n\n  leaf(index) {\n    return this.path(index).pop() || [null, -1];\n  }\n\n  line(index) {\n    if (index === this.length()) {\n      return this.line(index - 1);\n    }\n\n    return this.descendant(isLine, index);\n  }\n\n  lines(index = 0, length = Number.MAX_VALUE) {\n    const getLines = (blot, blotIndex, blotLength) => {\n      let lines = [];\n      let lengthLeft = blotLength;\n      blot.children.forEachAt(blotIndex, blotLength, (child, childIndex, childLength) => {\n        if (isLine(child)) {\n          lines.push(child);\n        } else if (child instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"ContainerBlot\"]) {\n          lines = lines.concat(getLines(child, childIndex, lengthLeft));\n        }\n\n        lengthLeft -= childLength;\n      });\n      return lines;\n    };\n\n    return getLines(this, index, length);\n  }\n\n  optimize(mutations = [], context = {}) {\n    if (this.batch) return;\n    super.optimize(mutations, context);\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations, context);\n    }\n  }\n\n  path(index) {\n    return super.path(index).slice(1); // Exclude self\n  }\n\n  remove() {// Never remove self\n  }\n\n  update(mutations) {\n    if (this.batch) {\n      if (Array.isArray(mutations)) {\n        this.batch = this.batch.concat(mutations);\n      }\n\n      return;\n    }\n\n    let source = _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER;\n\n    if (typeof mutations === 'string') {\n      source = mutations;\n    }\n\n    if (!Array.isArray(mutations)) {\n      mutations = this.observer.takeRecords();\n    }\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_BEFORE_UPDATE, source, mutations);\n    }\n\n    super.update(mutations.concat([])); // pass copy\n\n    if (mutations.length > 0) {\n      this.emitter.emit(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_UPDATE, source, mutations);\n    }\n  }\n\n}\n\nScroll.blotName = 'scroll';\nScroll.className = 'ql-editor';\nScroll.tagName = 'DIV';\nScroll.defaultChild = _block__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nScroll.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _block__WEBPACK_IMPORTED_MODULE_2__[\"BlockEmbed\"], _container__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scroll);\n\n//# sourceURL=webpack://Quill/./blots/scroll.js?");
	
	/***/ }),
	
	/***/ "./blots/text.js":
	/*!***********************!*\
	  !*** ./blots/text.js ***!
	  \***********************/
	/*! exports provided: default, escapeText */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"escapeText\", function() { return escapeText; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass Text extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"TextBlot\"] {}\n\nfunction escapeText(text) {\n  return text.replace(/[&<>\"']/g, s => {\n    // https://lodash.com/docs#escape\n    const entityMap = {\n      '&': '&amp;',\n      '<': '&lt;',\n      '>': '&gt;',\n      '\"': '&quot;',\n      \"'\": '&#39;'\n    };\n    return entityMap[s];\n  });\n}\n\n\n\n//# sourceURL=webpack://Quill/./blots/text.js?");
	
	/***/ }),
	
	/***/ "./core.js":
	/*!*****************!*\
	  !*** ./core.js ***!
	  \*****************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/quill */ \"./core/quill.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blots/container */ \"./blots/container.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blots/embed */ \"./blots/embed.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blots/scroll */ \"./blots/scroll.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blots/text */ \"./blots/text.js\");\n/* harmony import */ var _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clipboard */ \"./modules/clipboard.js\");\n/* harmony import */ var _modules_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/history */ \"./modules/history.js\");\n/* harmony import */ var _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/keyboard */ \"./modules/keyboard.js\");\n/* harmony import */ var _modules_uploader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/uploader */ \"./modules/uploader.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'blots/block': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'blots/block/embed': _blots_block__WEBPACK_IMPORTED_MODULE_1__[\"BlockEmbed\"],\n  'blots/break': _blots_break__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'blots/container': _blots_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'blots/cursor': _blots_cursor__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'blots/embed': _blots_embed__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'blots/inline': _blots_inline__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'blots/scroll': _blots_scroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  'blots/text': _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  'modules/clipboard': _modules_clipboard__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  'modules/history': _modules_history__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  'modules/keyboard': _modules_keyboard__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'modules/uploader': _modules_uploader__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core_quill__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Quill/./core.js?");
	
	/***/ }),
	
	/***/ "./core/editor.js":
	/*!************************!*\
	  !*** ./core/editor.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n\n\n\n\n\n\n\n\n\n\nconst ASCII = /^[ -~]*$/;\n\nclass Editor {\n  constructor(scroll) {\n    this.scroll = scroll;\n    this.delta = this.getDelta();\n  }\n\n  applyDelta(delta) {\n    let consumeNextNewline = false;\n    this.scroll.update();\n    let scrollLength = this.scroll.length();\n    this.scroll.batchStart();\n    const normalizedDelta = normalizeDelta(delta);\n    normalizedDelta.reduce((index, op) => {\n      const length = op.retain || op.delete || op.insert.length || 1;\n      let attributes = op.attributes || {};\n\n      if (op.insert != null) {\n        if (typeof op.insert === 'string') {\n          let text = op.insert;\n\n          if (text.endsWith('\\n') && consumeNextNewline) {\n            consumeNextNewline = false;\n            text = text.slice(0, -1);\n          }\n\n          if ((index >= scrollLength || this.scroll.descendant(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"BlockEmbed\"], index)[0]) && !text.endsWith('\\n')) {\n            consumeNextNewline = true;\n          }\n\n          this.scroll.insertAt(index, text);\n          const [line, offset] = this.scroll.line(index);\n          let formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(line));\n\n          if (line instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n            const [leaf] = line.descendant(parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"], offset);\n            formats = extend__WEBPACK_IMPORTED_MODULE_2___default()(formats, Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(leaf));\n          }\n\n          attributes = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(formats, attributes) || {};\n        } else if (typeof op.insert === 'object') {\n          const key = Object.keys(op.insert)[0]; // There should only be one key\n\n          if (key == null) return index;\n          this.scroll.insertAt(index, key, op.insert[key]);\n        }\n\n        scrollLength += length;\n      }\n\n      Object.keys(attributes).forEach(name => {\n        this.scroll.formatAt(index, length, name, attributes[name]);\n      });\n      return index + length;\n    }, 0);\n    normalizedDelta.reduce((index, op) => {\n      if (typeof op.delete === 'number') {\n        this.scroll.deleteAt(index, op.delete);\n        return index;\n      }\n\n      return index + (op.retain || op.insert.length || 1);\n    }, 0);\n    this.scroll.batchEnd();\n    this.scroll.optimize();\n    return this.update(normalizedDelta);\n  }\n\n  deleteText(index, length) {\n    this.scroll.deleteAt(index, length);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).delete(length));\n  }\n\n  formatLine(index, length, formats = {}) {\n    this.scroll.update();\n    Object.keys(formats).forEach(format => {\n      this.scroll.lines(index, Math.max(length, 1)).forEach(line => {\n        line.format(format, formats[format]);\n      });\n    });\n    this.scroll.optimize();\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n\n  formatText(index, length, formats = {}) {\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, length, format, formats[format]);\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).retain(length, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats));\n    return this.update(delta);\n  }\n\n  getContents(index, length) {\n    return this.delta.slice(index, index + length);\n  }\n\n  getDelta() {\n    return this.scroll.lines().reduce((delta, line) => {\n      return delta.concat(line.delta());\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n  }\n\n  getFormat(index, length = 0) {\n    let lines = [];\n    let leaves = [];\n\n    if (length === 0) {\n      this.scroll.path(index).forEach(path => {\n        const [blot] = path;\n\n        if (blot instanceof _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"]) {\n          lines.push(blot);\n        } else if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"]) {\n          leaves.push(blot);\n        }\n      });\n    } else {\n      lines = this.scroll.lines(index, length);\n      leaves = this.scroll.descendants(parchment__WEBPACK_IMPORTED_MODULE_4__[\"LeafBlot\"], index, length);\n    }\n\n    const formatsArr = [lines, leaves].map(blots => {\n      if (blots.length === 0) return {};\n      let formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(blots.shift());\n\n      while (Object.keys(formats).length > 0) {\n        const blot = blots.shift();\n        if (blot == null) return formats;\n        formats = combineFormats(Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(blot), formats);\n      }\n\n      return formats;\n    });\n    return extend__WEBPACK_IMPORTED_MODULE_2___default.a.apply(extend__WEBPACK_IMPORTED_MODULE_2___default.a, formatsArr);\n  }\n\n  getHTML(index, length) {\n    const [line, lineOffset] = this.scroll.line(index);\n\n    if (line.length() >= lineOffset + length) {\n      return convertHTML(line, lineOffset, length, true);\n    }\n\n    return convertHTML(this.scroll, index, length, true);\n  }\n\n  getText(index, length) {\n    return this.getContents(index, length).filter(op => typeof op.insert === 'string').map(op => op.insert).join('');\n  }\n\n  insertEmbed(index, embed, value) {\n    this.scroll.insertAt(index, embed, value);\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert({\n      [embed]: value\n    }));\n  }\n\n  insertText(index, text, formats = {}) {\n    text = text.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n    this.scroll.insertAt(index, text);\n    Object.keys(formats).forEach(format => {\n      this.scroll.formatAt(index, text.length, format, formats[format]);\n    });\n    return this.update(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert(text, clone__WEBPACK_IMPORTED_MODULE_0___default()(formats)));\n  }\n\n  isBlank() {\n    if (this.scroll.children.length === 0) return true;\n    if (this.scroll.children.length > 1) return false;\n    const block = this.scroll.children.head;\n    if (block.statics.blotName !== _blots_block__WEBPACK_IMPORTED_MODULE_7__[\"default\"].blotName) return false;\n    if (block.children.length > 1) return false;\n    return block.children.head instanceof _blots_break__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n  }\n\n  removeFormat(index, length) {\n    const text = this.getText(index, length);\n    const [line, offset] = this.scroll.line(index + length);\n    let suffixLength = 0;\n    let suffix = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a();\n\n    if (line != null) {\n      suffixLength = line.length() - offset;\n      suffix = line.delta().slice(offset, offset + suffixLength - 1).insert('\\n');\n    }\n\n    const contents = this.getContents(index, length + suffixLength);\n    const diff = contents.diff(new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(text).concat(suffix));\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(diff);\n    return this.applyDelta(delta);\n  }\n\n  update(change, mutations = [], selectionInfo = undefined) {\n    const oldDelta = this.delta;\n\n    if (mutations.length === 1 && mutations[0].type === 'characterData' && mutations[0].target.data.match(ASCII) && this.scroll.find(mutations[0].target)) {\n      // Optimization for character changes\n      const textBlot = this.scroll.find(mutations[0].target);\n      const formats = Object(_blots_block__WEBPACK_IMPORTED_MODULE_7__[\"bubbleFormats\"])(textBlot);\n      const index = textBlot.offset(this.scroll);\n      const oldValue = mutations[0].oldValue.replace(_blots_cursor__WEBPACK_IMPORTED_MODULE_6__[\"default\"].CONTENTS, '');\n      const oldText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(oldValue);\n      const newText = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().insert(textBlot.value());\n      const relativeSelectionInfo = selectionInfo && {\n        oldRange: shiftRange(selectionInfo.oldRange, -index),\n        newRange: shiftRange(selectionInfo.newRange, -index)\n      };\n      const diffDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).concat(oldText.diff(newText, relativeSelectionInfo));\n      change = diffDelta.reduce((delta, op) => {\n        if (op.insert) {\n          return delta.insert(op.insert, formats);\n        }\n\n        return delta.push(op);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n      this.delta = oldDelta.compose(change);\n    } else {\n      this.delta = this.getDelta();\n\n      if (!change || !deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(oldDelta.compose(change), this.delta)) {\n        change = oldDelta.diff(this.delta, selectionInfo);\n      }\n    }\n\n    return change;\n  }\n\n}\n\nfunction convertListHTML(items, lastIndent, types) {\n  if (items.length === 0) {\n    const [endTag] = getListType(types.pop());\n\n    if (lastIndent <= 0) {\n      return \"</li></\".concat(endTag, \">\");\n    }\n\n    return \"</li></\".concat(endTag, \">\").concat(convertListHTML([], lastIndent - 1, types));\n  }\n\n  const [{\n    child,\n    offset,\n    length,\n    indent,\n    type\n  }, ...rest] = items;\n  const [tag, attribute] = getListType(type);\n\n  if (indent > lastIndent) {\n    types.push(type);\n\n    if (indent === lastIndent + 1) {\n      return \"<\".concat(tag, \"><li\").concat(attribute, \">\").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));\n    }\n\n    return \"<\".concat(tag, \"><li>\").concat(convertListHTML(items, lastIndent + 1, types));\n  }\n\n  const previousType = types[types.length - 1];\n\n  if (indent === lastIndent && type === previousType) {\n    return \"</li><li\".concat(attribute, \">\").concat(convertHTML(child, offset, length)).concat(convertListHTML(rest, indent, types));\n  }\n\n  const [endTag] = getListType(types.pop());\n  return \"</li></\".concat(endTag, \">\").concat(convertListHTML(items, lastIndent - 1, types));\n}\n\nfunction convertHTML(blot, index, length, isRoot = false) {\n  if (typeof blot.html === 'function') {\n    return blot.html(index, length);\n  }\n\n  if (blot instanceof _blots_text__WEBPACK_IMPORTED_MODULE_9__[\"default\"]) {\n    return Object(_blots_text__WEBPACK_IMPORTED_MODULE_9__[\"escapeText\"])(blot.value().slice(index, index + length));\n  }\n\n  if (blot.children) {\n    // TODO fix API\n    if (blot.statics.blotName === 'list-container') {\n      const items = [];\n      blot.children.forEachAt(index, length, (child, offset, childLength) => {\n        const formats = child.formats();\n        items.push({\n          child,\n          offset,\n          length: childLength,\n          indent: formats.indent || 0,\n          type: formats.list\n        });\n      });\n      return convertListHTML(items, -1, []);\n    }\n\n    const parts = [];\n    blot.children.forEachAt(index, length, (child, offset, childLength) => {\n      parts.push(convertHTML(child, offset, childLength));\n    });\n\n    if (isRoot || blot.statics.blotName === 'list') {\n      return parts.join('');\n    }\n\n    const {\n      outerHTML,\n      innerHTML\n    } = blot.domNode;\n    const [start, end] = outerHTML.split(\">\".concat(innerHTML, \"<\")); // TODO cleanup\n\n    if (start === '<table') {\n      return \"<table style=\\\"border: 1px solid #000;\\\">\".concat(parts.join(''), \"<\").concat(end);\n    }\n\n    return \"\".concat(start, \">\").concat(parts.join(''), \"<\").concat(end);\n  }\n\n  return blot.domNode.outerHTML;\n}\n\nfunction combineFormats(formats, combined) {\n  return Object.keys(combined).reduce((merged, name) => {\n    if (formats[name] == null) return merged;\n\n    if (combined[name] === formats[name]) {\n      merged[name] = combined[name];\n    } else if (Array.isArray(combined[name])) {\n      if (combined[name].indexOf(formats[name]) < 0) {\n        merged[name] = combined[name].concat([formats[name]]);\n      }\n    } else {\n      merged[name] = [combined[name], formats[name]];\n    }\n\n    return merged;\n  }, {});\n}\n\nfunction getListType(type) {\n  const tag = type === 'ordered' ? 'ol' : 'ul';\n\n  switch (type) {\n    case 'checked':\n      return [tag, ' data-list=\"checked\"'];\n\n    case 'unchecked':\n      return [tag, ' data-list=\"unchecked\"'];\n\n    default:\n      return [tag, ''];\n  }\n}\n\nfunction normalizeDelta(delta) {\n  return delta.reduce((normalizedDelta, op) => {\n    if (typeof op.insert === 'string') {\n      const text = op.insert.replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');\n      return normalizedDelta.insert(text, op.attributes);\n    }\n\n    return normalizedDelta.push(op);\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a());\n}\n\nfunction shiftRange({\n  index,\n  length\n}, amount) {\n  return new _selection__WEBPACK_IMPORTED_MODULE_5__[\"Range\"](index + amount, length);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\n\n//# sourceURL=webpack://Quill/./core/editor.js?");
	
	/***/ }),
	
	/***/ "./core/emitter.js":
	/*!*************************!*\
	  !*** ./core/emitter.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ \"./node_modules/eventemitter3/index.js\");\n/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('quill:events');\nconst EVENTS = ['selectionchange', 'mousedown', 'mouseup', 'click'];\nEVENTS.forEach(eventName => {\n  document.addEventListener(eventName, (...args) => {\n    Array.from(document.querySelectorAll('.ql-container')).forEach(node => {\n      const quill = _instances__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(node);\n\n      if (quill && quill.emitter) {\n        quill.emitter.handleDOM(...args);\n      }\n    });\n  });\n});\n\nclass Emitter extends eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a {\n  constructor() {\n    super();\n    this.listeners = {};\n    this.on('error', debug.error);\n  }\n\n  emit(...args) {\n    debug.log.call(debug, ...args);\n    super.emit(...args);\n  }\n\n  handleDOM(event, ...args) {\n    (this.listeners[event.type] || []).forEach(({\n      node,\n      handler\n    }) => {\n      if (event.target === node || node.contains(event.target)) {\n        handler(event, ...args);\n      }\n    });\n  }\n\n  listenDOM(eventName, node, handler) {\n    if (!this.listeners[eventName]) {\n      this.listeners[eventName] = [];\n    }\n\n    this.listeners[eventName].push({\n      node,\n      handler\n    });\n  }\n\n}\n\nEmitter.events = {\n  EDITOR_CHANGE: 'editor-change',\n  SCROLL_BEFORE_UPDATE: 'scroll-before-update',\n  SCROLL_BLOT_MOUNT: 'scroll-blot-mount',\n  SCROLL_BLOT_UNMOUNT: 'scroll-blot-unmount',\n  SCROLL_OPTIMIZE: 'scroll-optimize',\n  SCROLL_UPDATE: 'scroll-update',\n  SELECTION_CHANGE: 'selection-change',\n  TEXT_CHANGE: 'text-change'\n};\nEmitter.sources = {\n  API: 'api',\n  SILENT: 'silent',\n  USER: 'user'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emitter);\n\n//# sourceURL=webpack://Quill/./core/emitter.js?");
	
	/***/ }),
	
	/***/ "./core/instances.js":
	/*!***************************!*\
	  !*** ./core/instances.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new WeakMap());\n\n//# sourceURL=webpack://Quill/./core/instances.js?");
	
	/***/ }),
	
	/***/ "./core/logger.js":
	/*!************************!*\
	  !*** ./core/logger.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nconst levels = ['error', 'warn', 'log', 'info'];\nlet level = 'warn';\n\nfunction debug(method, ...args) {\n  if (levels.indexOf(method) <= levels.indexOf(level)) {\n    console[method](...args); // eslint-disable-line no-console\n  }\n}\n\nfunction namespace(ns) {\n  return levels.reduce((logger, method) => {\n    logger[method] = debug.bind(console, method, ns);\n    return logger;\n  }, {});\n}\n\nnamespace.level = newLevel => {\n  level = newLevel;\n};\n\ndebug.level = namespace.level;\n/* harmony default export */ __webpack_exports__[\"default\"] = (namespace);\n\n//# sourceURL=webpack://Quill/./core/logger.js?");
	
	/***/ }),
	
	/***/ "./core/module.js":
	/*!************************!*\
	  !*** ./core/module.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nclass Module {\n  constructor(quill, options = {}) {\n    this.quill = quill;\n    this.options = options;\n  }\n\n}\n\nModule.DEFAULTS = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Module);\n\n//# sourceURL=webpack://Quill/./core/module.js?");
	
	/***/ }),
	
	/***/ "./core/quill.js":
	/*!***********************!*\
	  !*** ./core/quill.js ***!
	  \***********************/
	/*! exports provided: globalRegistry, expandConfig, overload, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalRegistry\", function() { return globalRegistry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandConfig\", function() { return expandConfig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"overload\", function() { return overload; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Quill; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor */ \"./core/editor.js\");\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module */ \"./core/module.js\");\n/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ \"./core/selection.js\");\n/* harmony import */ var _instances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instances */ \"./core/instances.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme */ \"./core/theme.js\");\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('quill');\nconst globalRegistry = new parchment__WEBPACK_IMPORTED_MODULE_1__[\"Registry\"]();\nparchment__WEBPACK_IMPORTED_MODULE_1__[\"ParentBlot\"].uiClass = 'ql-ui';\n\nclass Quill {\n  static debug(limit) {\n    if (limit === true) {\n      limit = 'log';\n    }\n\n    _logger__WEBPACK_IMPORTED_MODULE_8__[\"default\"].level(limit);\n  }\n\n  static find(node) {\n    return _instances__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(node) || globalRegistry.find(node);\n  }\n\n  static import(name) {\n    if (this.imports[name] == null) {\n      debug.error(\"Cannot import \".concat(name, \". Are you sure it was registered?\"));\n    }\n\n    return this.imports[name];\n  }\n\n  static register(path, target, overwrite = false) {\n    if (typeof path !== 'string') {\n      const name = path.attrName || path.blotName;\n\n      if (typeof name === 'string') {\n        // register(Blot | Attributor, overwrite)\n        this.register(\"formats/\".concat(name), path, target);\n      } else {\n        Object.keys(path).forEach(key => {\n          this.register(key, path[key], target);\n        });\n      }\n    } else {\n      if (this.imports[path] != null && !overwrite) {\n        debug.warn(\"Overwriting \".concat(path, \" with\"), target);\n      }\n\n      this.imports[path] = target;\n\n      if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {\n        globalRegistry.register(target);\n      }\n\n      if (typeof target.register === 'function') {\n        target.register(globalRegistry);\n      }\n    }\n  }\n\n  constructor(container, options = {}) {\n    this.options = expandConfig(container, options);\n    this.container = this.options.container;\n\n    if (this.container == null) {\n      return debug.error('Invalid Quill container', container);\n    }\n\n    if (this.options.debug) {\n      Quill.debug(this.options.debug);\n    }\n\n    const html = this.container.innerHTML.trim();\n    this.container.classList.add('ql-container');\n    this.container.innerHTML = '';\n    _instances__WEBPACK_IMPORTED_MODULE_7__[\"default\"].set(this.container, this);\n    this.root = this.addContainer('ql-editor');\n    this.root.classList.add('ql-blank');\n    this.root.setAttribute('data-gramm', false);\n    this.scrollingContainer = this.options.scrollingContainer || this.root;\n    this.emitter = new _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    const ScrollBlot = this.options.registry.query(parchment__WEBPACK_IMPORTED_MODULE_1__[\"ScrollBlot\"].blotName);\n    this.scroll = new ScrollBlot(this.options.registry, this.root, {\n      emitter: this.emitter\n    });\n    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.scroll);\n    this.selection = new _selection__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.scroll, this.emitter);\n    this.theme = new this.options.theme(this, this.options); // eslint-disable-line new-cap\n\n    this.keyboard = this.theme.addModule('keyboard');\n    this.clipboard = this.theme.addModule('clipboard');\n    this.history = this.theme.addModule('history');\n    this.uploader = this.theme.addModule('uploader');\n    this.theme.init();\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.EDITOR_CHANGE, type => {\n      if (type === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.TEXT_CHANGE) {\n        this.root.classList.toggle('ql-blank', this.editor.isBlank());\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.SCROLL_UPDATE, (source, mutations) => {\n      const oldRange = this.selection.lastRange;\n      const [newRange] = this.selection.getRange();\n      const selectionInfo = oldRange && newRange ? {\n        oldRange,\n        newRange\n      } : undefined;\n      modify.call(this, () => this.editor.update(null, mutations, selectionInfo), source);\n    });\n    const contents = this.clipboard.convert({\n      html: \"\".concat(html, \"<p><br></p>\"),\n      text: '\\n'\n    });\n    this.setContents(contents);\n    this.history.clear();\n\n    if (this.options.placeholder) {\n      this.root.setAttribute('data-placeholder', this.options.placeholder);\n    }\n\n    if (this.options.readOnly) {\n      this.disable();\n    }\n\n    this.allowReadOnlyEdits = false;\n  }\n\n  addContainer(container, refNode = null) {\n    if (typeof container === 'string') {\n      const className = container;\n      container = document.createElement('div');\n      container.classList.add(className);\n    }\n\n    this.container.insertBefore(container, refNode);\n    return container;\n  }\n\n  blur() {\n    this.selection.setRange(null);\n  }\n\n  deleteText(index, length, source) {\n    [index, length,, source] = overload(index, length, source);\n    return modify.call(this, () => {\n      return this.editor.deleteText(index, length);\n    }, source, index, -1 * length);\n  }\n\n  disable() {\n    this.enable(false);\n  }\n\n  editReadOnly(modifier) {\n    this.allowReadOnlyEdits = true;\n    const value = modifier();\n    this.allowReadOnlyEdits = false;\n    return value;\n  }\n\n  enable(enabled = true) {\n    this.scroll.enable(enabled);\n    this.container.classList.toggle('ql-disabled', !enabled);\n  }\n\n  focus() {\n    const {\n      scrollTop\n    } = this.scrollingContainer;\n    this.selection.focus();\n    this.scrollingContainer.scrollTop = scrollTop;\n    this.scrollIntoView();\n  }\n\n  format(name, value, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      const range = this.getSelection(true);\n      let change = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();\n      if (range == null) return change;\n\n      if (this.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].BLOCK)) {\n        change = this.editor.formatLine(range.index, range.length, {\n          [name]: value\n        });\n      } else if (range.length === 0) {\n        this.selection.format(name, value);\n        return change;\n      } else {\n        change = this.editor.formatText(range.index, range.length, {\n          [name]: value\n        });\n      }\n\n      this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n      return change;\n    }, source);\n  }\n\n  formatLine(index, length, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index, length, formats, source] = overload(index, length, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.formatLine(index, length, formats);\n    }, source, index, 0);\n  }\n\n  formatText(index, length, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index, length, formats, source] = overload(index, length, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.formatText(index, length, formats);\n    }, source, index, 0);\n  }\n\n  getBounds(index, length = 0) {\n    let bounds;\n\n    if (typeof index === 'number') {\n      bounds = this.selection.getBounds(index, length);\n    } else {\n      bounds = this.selection.getBounds(index.index, index.length);\n    }\n\n    const containerBounds = this.container.getBoundingClientRect();\n    return {\n      bottom: bounds.bottom - containerBounds.top,\n      height: bounds.height,\n      left: bounds.left - containerBounds.left,\n      right: bounds.right - containerBounds.left,\n      top: bounds.top - containerBounds.top,\n      width: bounds.width\n    };\n  }\n\n  getContents(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getContents(index, length);\n  }\n\n  getFormat(index = this.getSelection(true), length = 0) {\n    if (typeof index === 'number') {\n      return this.editor.getFormat(index, length);\n    }\n\n    return this.editor.getFormat(index.index, index.length);\n  }\n\n  getIndex(blot) {\n    return blot.offset(this.scroll);\n  }\n\n  getLength() {\n    return this.scroll.length();\n  }\n\n  getLeaf(index) {\n    return this.scroll.leaf(index);\n  }\n\n  getLine(index) {\n    return this.scroll.line(index);\n  }\n\n  getLines(index = 0, length = Number.MAX_VALUE) {\n    if (typeof index !== 'number') {\n      return this.scroll.lines(index.index, index.length);\n    }\n\n    return this.scroll.lines(index, length);\n  }\n\n  getModule(name) {\n    return this.theme.modules[name];\n  }\n\n  getSelection(focus = false) {\n    if (focus) this.focus();\n    this.update(); // Make sure we access getRange with editor in consistent state\n\n    return this.selection.getRange()[0];\n  }\n\n  getSemanticHTML(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getHTML(index, length);\n  }\n\n  getText(index = 0, length = this.getLength() - index) {\n    [index, length] = overload(index, length);\n    return this.editor.getText(index, length);\n  }\n\n  hasFocus() {\n    return this.selection.hasFocus();\n  }\n\n  insertEmbed(index, embed, value, source = Quill.sources.API) {\n    return modify.call(this, () => {\n      return this.editor.insertEmbed(index, embed, value);\n    }, source, index);\n  }\n\n  insertText(index, text, name, value, source) {\n    let formats; // eslint-disable-next-line prefer-const\n\n    [index,, formats, source] = overload(index, 0, name, value, source);\n    return modify.call(this, () => {\n      return this.editor.insertText(index, text, formats);\n    }, source, index, text.length);\n  }\n\n  isEnabled() {\n    return this.scroll.isEnabled();\n  }\n\n  off(...args) {\n    return this.emitter.off(...args);\n  }\n\n  on(...args) {\n    return this.emitter.on(...args);\n  }\n\n  once(...args) {\n    return this.emitter.once(...args);\n  }\n\n  removeFormat(index, length, source) {\n    [index, length,, source] = overload(index, length, source);\n    return modify.call(this, () => {\n      return this.editor.removeFormat(index, length);\n    }, source, index);\n  }\n\n  scrollIntoView() {\n    this.selection.scrollIntoView(this.scrollingContainer);\n  }\n\n  setContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);\n      const length = this.getLength();\n      const deleted = this.editor.deleteText(0, length);\n      const applied = this.editor.applyDelta(delta);\n      const lastOp = applied.ops[applied.ops.length - 1];\n\n      if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\\n') {\n        this.editor.deleteText(this.getLength() - 1, 1);\n        applied.delete(1);\n      }\n\n      return deleted.compose(applied);\n    }, source);\n  }\n\n  setSelection(index, length, source) {\n    if (index == null) {\n      this.selection.setRange(null, length || Quill.sources.API);\n    } else {\n      [index, length,, source] = overload(index, length, source);\n      this.selection.setRange(new _selection__WEBPACK_IMPORTED_MODULE_6__[\"Range\"](Math.max(0, index), length), source);\n\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT) {\n        this.selection.scrollIntoView(this.scrollingContainer);\n      }\n    }\n  }\n\n  setText(text, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().insert(text);\n    return this.setContents(delta, source);\n  }\n\n  update(source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER) {\n    const change = this.scroll.update(source); // Will update selection before selection.update() does if text changes\n\n    this.selection.update(source); // TODO this is usually undefined\n\n    return change;\n  }\n\n  updateContents(delta, source = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    return modify.call(this, () => {\n      delta = new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a(delta);\n      return this.editor.applyDelta(delta, source);\n    }, source, true);\n  }\n\n}\n\nQuill.DEFAULTS = {\n  bounds: null,\n  modules: {},\n  placeholder: '',\n  readOnly: false,\n  registry: globalRegistry,\n  scrollingContainer: null,\n  theme: 'default'\n};\nQuill.events = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events;\nQuill.sources = _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources; // eslint-disable-next-line no-undef\n\nQuill.version =  false ? undefined : \"2.0.0-dev.3\";\nQuill.imports = {\n  delta: quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a,\n  parchment: parchment__WEBPACK_IMPORTED_MODULE_1__,\n  'core/module': _module__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'core/theme': _theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n};\n\nfunction expandConfig(container, userConfig) {\n  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {\n    container,\n    modules: {\n      clipboard: true,\n      keyboard: true,\n      history: true,\n      uploader: true\n    }\n  }, userConfig);\n\n  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {\n    userConfig.theme = _theme__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n  } else {\n    userConfig.theme = Quill.import(\"themes/\".concat(userConfig.theme));\n\n    if (userConfig.theme == null) {\n      throw new Error(\"Invalid theme \".concat(userConfig.theme, \". Did you register it?\"));\n    }\n  }\n\n  const themeConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, userConfig.theme.DEFAULTS);\n  [themeConfig, userConfig].forEach(config => {\n    config.modules = config.modules || {};\n    Object.keys(config.modules).forEach(module => {\n      if (config.modules[module] === true) {\n        config.modules[module] = {};\n      }\n    });\n  });\n  const moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));\n  const moduleConfig = moduleNames.reduce((config, name) => {\n    const moduleClass = Quill.import(\"modules/\".concat(name));\n\n    if (moduleClass == null) {\n      debug.error(\"Cannot load \".concat(name, \" module. Are you sure you registered it?\"));\n    } else {\n      config[name] = moduleClass.DEFAULTS || {};\n    }\n\n    return config;\n  }, {}); // Special case toolbar shorthand\n\n  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {\n    userConfig.modules.toolbar = {\n      container: userConfig.modules.toolbar\n    };\n  }\n\n  userConfig = extend__WEBPACK_IMPORTED_MODULE_2___default()(true, {}, Quill.DEFAULTS, {\n    modules: moduleConfig\n  }, themeConfig, userConfig);\n  ['bounds', 'container', 'scrollingContainer'].forEach(key => {\n    if (typeof userConfig[key] === 'string') {\n      userConfig[key] = document.querySelector(userConfig[key]);\n    }\n  });\n  userConfig.modules = Object.keys(userConfig.modules).reduce((config, name) => {\n    if (userConfig.modules[name]) {\n      config[name] = userConfig.modules[name];\n    }\n\n    return config;\n  }, {});\n  return userConfig;\n} // Handle selection preservation and TEXT_CHANGE emission\n// common to modification APIs\n\n\nfunction modify(modifier, source, index, shift) {\n  if (!this.isEnabled() && source === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER && !this.allowReadOnlyEdits) {\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a();\n  }\n\n  let range = index == null ? null : this.getSelection();\n  const oldDelta = this.editor.delta;\n  const change = modifier();\n\n  if (range != null) {\n    if (index === true) {\n      index = range.index; // eslint-disable-line prefer-destructuring\n    }\n\n    if (shift == null) {\n      range = shiftRange(range, change, source);\n    } else if (shift !== 0) {\n      range = shiftRange(range, index, shift, source);\n    }\n\n    this.setSelection(range, _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n  }\n\n  if (change.length() > 0) {\n    const args = [_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.TEXT_CHANGE, change, oldDelta, source];\n    this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].events.EDITOR_CHANGE, ...args);\n\n    if (source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT) {\n      this.emitter.emit(...args);\n    }\n  }\n\n  return change;\n}\n\nfunction overload(index, length, name, value, source) {\n  let formats = {};\n\n  if (typeof index.index === 'number' && typeof index.length === 'number') {\n    // Allow for throwaway end (used by insertText/insertEmbed)\n    if (typeof length !== 'number') {\n      source = value;\n      value = name;\n      name = length;\n      length = index.length; // eslint-disable-line prefer-destructuring\n\n      index = index.index; // eslint-disable-line prefer-destructuring\n    } else {\n      length = index.length; // eslint-disable-line prefer-destructuring\n\n      index = index.index; // eslint-disable-line prefer-destructuring\n    }\n  } else if (typeof length !== 'number') {\n    source = value;\n    value = name;\n    name = length;\n    length = 0;\n  } // Handle format being object, two format name/value strings or excluded\n\n\n  if (typeof name === 'object') {\n    formats = name;\n    source = value;\n  } else if (typeof name === 'string') {\n    if (value != null) {\n      formats[name] = value;\n    } else {\n      source = name;\n    }\n  } // Handle optional source\n\n\n  source = source || _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API;\n  return [index, length, formats, source];\n}\n\nfunction shiftRange(range, index, length, source) {\n  if (range == null) return null;\n  let start;\n  let end;\n\n  if (index instanceof quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a) {\n    [start, end] = [range.index, range.index + range.length].map(pos => index.transformPosition(pos, source !== _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER));\n  } else {\n    [start, end] = [range.index, range.index + range.length].map(pos => {\n      if (pos < index || pos === index && source === _emitter__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER) return pos;\n\n      if (length >= 0) {\n        return pos + length;\n      }\n\n      return Math.max(index, pos + length);\n    });\n  }\n\n  return new _selection__WEBPACK_IMPORTED_MODULE_6__[\"Range\"](start, end - start);\n}\n\n\n\n//# sourceURL=webpack://Quill/./core/quill.js?");
	
	/***/ }),
	
	/***/ "./core/selection.js":
	/*!***************************!*\
	  !*** ./core/selection.js ***!
	  \***************************/
	/*! exports provided: Range, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Range\", function() { return Range; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Selection; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ \"./core/emitter.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger */ \"./core/logger.js\");\n\n\n\n\n\nconst debug = Object(_logger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('quill:selection');\n\nclass Range {\n  constructor(index, length = 0) {\n    this.index = index;\n    this.length = length;\n  }\n\n}\n\nclass Selection {\n  constructor(scroll, emitter) {\n    this.emitter = emitter;\n    this.scroll = scroll;\n    this.composing = false;\n    this.mouseDown = false;\n    this.root = this.scroll.domNode;\n    this.cursor = this.scroll.create('cursor', this); // savedRange is last non-null range\n\n    this.savedRange = new Range(0, 0);\n    this.lastRange = this.savedRange;\n    this.lastNative = null;\n    this.handleComposition();\n    this.handleDragging();\n    this.emitter.listenDOM('selectionchange', document, () => {\n      if (!this.mouseDown && !this.composing) {\n        setTimeout(this.update.bind(this, _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER), 1);\n      }\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BEFORE_UPDATE, () => {\n      if (!this.hasFocus()) return;\n      const native = this.getNativeRange();\n      if (native == null) return;\n      if (native.start.node === this.cursor.textNode) return; // cursor.restore() will handle\n\n      this.emitter.once(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_UPDATE, () => {\n        try {\n          if (this.root.contains(native.start.node) && this.root.contains(native.end.node)) {\n            this.setNativeRange(native.start.node, native.start.offset, native.end.node, native.end.offset);\n          }\n\n          this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n        } catch (ignored) {// ignore\n        }\n      });\n    });\n    this.emitter.on(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, (mutations, context) => {\n      if (context.range) {\n        const {\n          startNode,\n          startOffset,\n          endNode,\n          endOffset\n        } = context.range;\n        this.setNativeRange(startNode, startOffset, endNode, endOffset);\n        this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n      }\n    });\n    this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n  }\n\n  handleComposition() {\n    this.root.addEventListener('compositionstart', () => {\n      this.composing = true;\n      this.scroll.batchStart();\n    });\n    this.root.addEventListener('compositionend', () => {\n      this.scroll.batchEnd();\n      this.composing = false;\n\n      if (this.cursor.parent) {\n        const range = this.cursor.restore();\n        if (!range) return;\n        setTimeout(() => {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }, 1);\n      }\n    });\n  }\n\n  handleDragging() {\n    this.emitter.listenDOM('mousedown', document.body, () => {\n      this.mouseDown = true;\n    });\n    this.emitter.listenDOM('mouseup', document.body, () => {\n      this.mouseDown = false;\n      this.update(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    });\n  }\n\n  focus() {\n    if (this.hasFocus()) return;\n    this.root.focus();\n    this.setRange(this.savedRange);\n  }\n\n  format(format, value) {\n    this.scroll.update();\n    const nativeRange = this.getNativeRange();\n    if (nativeRange == null || !nativeRange.native.collapsed || this.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK)) return;\n\n    if (nativeRange.start.node !== this.cursor.textNode) {\n      const blot = this.scroll.find(nativeRange.start.node, false);\n      if (blot == null) return; // TODO Give blot ability to not split\n\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        const after = blot.split(nativeRange.start.offset);\n        blot.parent.insertBefore(this.cursor, after);\n      } else {\n        blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen\n      }\n\n      this.cursor.attach();\n    }\n\n    this.cursor.format(format, value);\n    this.scroll.optimize();\n    this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length);\n    this.update();\n  }\n\n  getBounds(index, length = 0) {\n    const scrollLength = this.scroll.length();\n    index = Math.min(index, scrollLength - 1);\n    length = Math.min(index + length, scrollLength - 1) - index;\n    let node;\n    let [leaf, offset] = this.scroll.leaf(index);\n    if (leaf == null) return null;\n    [node, offset] = leaf.position(offset, true);\n    const range = document.createRange();\n\n    if (length > 0) {\n      range.setStart(node, offset);\n      [leaf, offset] = this.scroll.leaf(index + length);\n      if (leaf == null) return null;\n      [node, offset] = leaf.position(offset, true);\n      range.setEnd(node, offset);\n      return range.getBoundingClientRect();\n    }\n\n    let side = 'left';\n    let rect;\n\n    if (node instanceof Text) {\n      if (offset < node.data.length) {\n        range.setStart(node, offset);\n        range.setEnd(node, offset + 1);\n      } else {\n        range.setStart(node, offset - 1);\n        range.setEnd(node, offset);\n        side = 'right';\n      }\n\n      rect = range.getBoundingClientRect();\n    } else {\n      rect = leaf.domNode.getBoundingClientRect();\n      if (offset > 0) side = 'right';\n    }\n\n    return {\n      bottom: rect.top + rect.height,\n      height: rect.height,\n      left: rect[side],\n      right: rect[side],\n      top: rect.top,\n      width: 0\n    };\n  }\n\n  getNativeRange() {\n    const selection = document.getSelection();\n    if (selection == null || selection.rangeCount <= 0) return null;\n    const nativeRange = selection.getRangeAt(0);\n    if (nativeRange == null) return null;\n    const range = this.normalizeNative(nativeRange);\n    debug.info('getNativeRange', range);\n    return range;\n  }\n\n  getRange() {\n    const normalized = this.getNativeRange();\n    if (normalized == null) return [null, null];\n    const range = this.normalizedToRange(normalized);\n    return [range, normalized];\n  }\n\n  hasFocus() {\n    return document.activeElement === this.root || contains(this.root, document.activeElement);\n  }\n\n  normalizedToRange(range) {\n    const positions = [[range.start.node, range.start.offset]];\n\n    if (!range.native.collapsed) {\n      positions.push([range.end.node, range.end.offset]);\n    }\n\n    const indexes = positions.map(position => {\n      const [node, offset] = position;\n      const blot = this.scroll.find(node, true);\n      const index = blot.offset(this.scroll);\n\n      if (offset === 0) {\n        return index;\n      }\n\n      if (blot instanceof parchment__WEBPACK_IMPORTED_MODULE_0__[\"LeafBlot\"]) {\n        return index + blot.index(node, offset);\n      }\n\n      return index + blot.length();\n    });\n    const end = Math.min(Math.max(...indexes), this.scroll.length() - 1);\n    const start = Math.min(end, ...indexes);\n    return new Range(start, end - start);\n  }\n\n  normalizeNative(nativeRange) {\n    if (!contains(this.root, nativeRange.startContainer) || !nativeRange.collapsed && !contains(this.root, nativeRange.endContainer)) {\n      return null;\n    }\n\n    const range = {\n      start: {\n        node: nativeRange.startContainer,\n        offset: nativeRange.startOffset\n      },\n      end: {\n        node: nativeRange.endContainer,\n        offset: nativeRange.endOffset\n      },\n      native: nativeRange\n    };\n    [range.start, range.end].forEach(position => {\n      let {\n        node,\n        offset\n      } = position;\n\n      while (!(node instanceof Text) && node.childNodes.length > 0) {\n        if (node.childNodes.length > offset) {\n          node = node.childNodes[offset];\n          offset = 0;\n        } else if (node.childNodes.length === offset) {\n          node = node.lastChild;\n\n          if (node instanceof Text) {\n            offset = node.data.length;\n          } else if (node.childNodes.length > 0) {\n            // Container case\n            offset = node.childNodes.length;\n          } else {\n            // Embed case\n            offset = node.childNodes.length + 1;\n          }\n        } else {\n          break;\n        }\n      }\n\n      position.node = node;\n      position.offset = offset;\n    });\n    return range;\n  }\n\n  rangeToNative(range) {\n    const indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];\n    const args = [];\n    const scrollLength = this.scroll.length();\n    indexes.forEach((index, i) => {\n      index = Math.min(scrollLength - 1, index);\n      const [leaf, leafOffset] = this.scroll.leaf(index);\n      const [node, offset] = leaf.position(leafOffset, i !== 0);\n      args.push(node, offset);\n    });\n\n    if (args.length < 2) {\n      return args.concat(args);\n    }\n\n    return args;\n  }\n\n  scrollIntoView(scrollingContainer) {\n    const range = this.lastRange;\n    if (range == null) return;\n    const bounds = this.getBounds(range.index, range.length);\n    if (bounds == null) return;\n    const limit = this.scroll.length() - 1;\n    const [first] = this.scroll.line(Math.min(range.index, limit));\n    let last = first;\n\n    if (range.length > 0) {\n      [last] = this.scroll.line(Math.min(range.index + range.length, limit));\n    }\n\n    if (first == null || last == null) return;\n    const scrollBounds = scrollingContainer.getBoundingClientRect();\n\n    if (bounds.top < scrollBounds.top) {\n      scrollingContainer.scrollTop -= scrollBounds.top - bounds.top;\n    } else if (bounds.bottom > scrollBounds.bottom) {\n      scrollingContainer.scrollTop += bounds.bottom - scrollBounds.bottom;\n    }\n  }\n\n  setNativeRange(startNode, startOffset, endNode = startNode, endOffset = startOffset, force = false) {\n    debug.info('setNativeRange', startNode, startOffset, endNode, endOffset);\n\n    if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {\n      return;\n    }\n\n    const selection = document.getSelection();\n    if (selection == null) return;\n\n    if (startNode != null) {\n      if (!this.hasFocus()) this.root.focus();\n      const {\n        native\n      } = this.getNativeRange() || {};\n\n      if (native == null || force || startNode !== native.startContainer || startOffset !== native.startOffset || endNode !== native.endContainer || endOffset !== native.endOffset) {\n        if (startNode.tagName === 'BR') {\n          startOffset = Array.from(startNode.parentNode.childNodes).indexOf(startNode);\n          startNode = startNode.parentNode;\n        }\n\n        if (endNode.tagName === 'BR') {\n          endOffset = Array.from(endNode.parentNode.childNodes).indexOf(endNode);\n          endNode = endNode.parentNode;\n        }\n\n        const range = document.createRange();\n        range.setStart(startNode, startOffset);\n        range.setEnd(endNode, endOffset);\n        selection.removeAllRanges();\n        selection.addRange(range);\n      }\n    } else {\n      selection.removeAllRanges();\n      this.root.blur();\n    }\n  }\n\n  setRange(range, force = false, source = _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.API) {\n    if (typeof force === 'string') {\n      source = force;\n      force = false;\n    }\n\n    debug.info('setRange', range);\n\n    if (range != null) {\n      const args = this.rangeToNative(range);\n      this.setNativeRange(...args, force);\n    } else {\n      this.setNativeRange(null);\n    }\n\n    this.update(source);\n  }\n\n  update(source = _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER) {\n    const oldRange = this.lastRange;\n    const [lastRange, nativeRange] = this.getRange();\n    this.lastRange = lastRange;\n    this.lastNative = nativeRange;\n\n    if (this.lastRange != null) {\n      this.savedRange = this.lastRange;\n    }\n\n    if (!deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(oldRange, this.lastRange)) {\n      if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {\n        const range = this.cursor.restore();\n\n        if (range) {\n          this.setNativeRange(range.startNode, range.startOffset, range.endNode, range.endOffset);\n        }\n      }\n\n      const args = [_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SELECTION_CHANGE, clone__WEBPACK_IMPORTED_MODULE_1___default()(this.lastRange), clone__WEBPACK_IMPORTED_MODULE_1___default()(oldRange), source];\n      this.emitter.emit(_emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.EDITOR_CHANGE, ...args);\n\n      if (source !== _emitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT) {\n        this.emitter.emit(...args);\n      }\n    }\n  }\n\n}\n\nfunction contains(parent, descendant) {\n  try {\n    // Firefox inserts inaccessible nodes around video elements\n    descendant.parentNode; // eslint-disable-line no-unused-expressions\n  } catch (e) {\n    return false;\n  }\n\n  return parent.contains(descendant);\n}\n\n\n\n//# sourceURL=webpack://Quill/./core/selection.js?");
	
	/***/ }),
	
	/***/ "./core/theme.js":
	/*!***********************!*\
	  !*** ./core/theme.js ***!
	  \***********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nclass Theme {\n  constructor(quill, options) {\n    this.quill = quill;\n    this.options = options;\n    this.modules = {};\n  }\n\n  init() {\n    Object.keys(this.options.modules).forEach(name => {\n      if (this.modules[name] == null) {\n        this.addModule(name);\n      }\n    });\n  }\n\n  addModule(name) {\n    const ModuleClass = this.quill.constructor.import(\"modules/\".concat(name));\n    this.modules[name] = new ModuleClass(this.quill, this.options.modules[name] || {});\n    return this.modules[name];\n  }\n\n}\n\nTheme.DEFAULTS = {\n  modules: {}\n};\nTheme.themes = {\n  default: Theme\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Theme);\n\n//# sourceURL=webpack://Quill/./core/theme.js?");
	
	/***/ }),
	
	/***/ "./formats/align.js":
	/*!**************************!*\
	  !*** ./formats/align.js ***!
	  \**************************/
	/*! exports provided: AlignAttribute, AlignClass, AlignStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignAttribute\", function() { return AlignAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignClass\", function() { return AlignClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AlignStyle\", function() { return AlignStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['right', 'center', 'justify']\n};\nconst AlignAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('align', 'align', config);\nconst AlignClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('align', 'ql-align', config);\nconst AlignStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('align', 'text-align', config);\n\n\n//# sourceURL=webpack://Quill/./formats/align.js?");
	
	/***/ }),
	
	/***/ "./formats/background.js":
	/*!*******************************!*\
	  !*** ./formats/background.js ***!
	  \*******************************/
	/*! exports provided: BackgroundClass, BackgroundStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundClass\", function() { return BackgroundClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackgroundStyle\", function() { return BackgroundStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ \"./formats/color.js\");\n\n\nconst BackgroundClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('background', 'ql-bg', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst BackgroundStyle = new _color__WEBPACK_IMPORTED_MODULE_1__[\"ColorAttributor\"]('background', 'background-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/background.js?");
	
	/***/ }),
	
	/***/ "./formats/blockquote.js":
	/*!*******************************!*\
	  !*** ./formats/blockquote.js ***!
	  \*******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\n\nclass Blockquote extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nBlockquote.blotName = 'blockquote';\nBlockquote.tagName = 'blockquote';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blockquote);\n\n//# sourceURL=webpack://Quill/./formats/blockquote.js?");
	
	/***/ }),
	
	/***/ "./formats/bold.js":
	/*!*************************!*\
	  !*** ./formats/bold.js ***!
	  \*************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Bold extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create() {\n    return super.create();\n  }\n\n  static formats() {\n    return true;\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.domNode.tagName !== this.statics.tagName[0]) {\n      this.replaceWith(this.statics.blotName);\n    }\n  }\n\n}\n\nBold.blotName = 'bold';\nBold.tagName = ['STRONG', 'B'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bold);\n\n//# sourceURL=webpack://Quill/./formats/bold.js?");
	
	/***/ }),
	
	/***/ "./formats/code.js":
	/*!*************************!*\
	  !*** ./formats/code.js ***!
	  \*************************/
	/*! exports provided: Code, CodeBlockContainer, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Code\", function() { return Code; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlockContainer\", function() { return CodeBlockContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodeBlock; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\n\n\n\n\n\nclass CodeBlockContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n    domNode.setAttribute('spellcheck', false);\n    return domNode;\n  }\n\n  html(index, length) {\n    const text = this.children.map(child => child.domNode.innerText).join('\\n').slice(index, index + length);\n    return \"<pre>\".concat(Object(_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"escapeText\"])(text), \"</pre>\");\n  }\n\n}\n\nclass CodeBlock extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_6__[\"default\"].register(CodeBlockContainer);\n  }\n\n}\n\nclass Code extends _blots_inline__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {}\n\nCode.blotName = 'code';\nCode.tagName = 'CODE';\nCodeBlock.blotName = 'code-block';\nCodeBlock.className = 'ql-code-block';\nCodeBlock.tagName = 'DIV';\nCodeBlockContainer.blotName = 'code-block-container';\nCodeBlockContainer.className = 'ql-code-block-container';\nCodeBlockContainer.tagName = 'DIV';\nCodeBlockContainer.allowedChildren = [CodeBlock];\nCodeBlock.allowedChildren = [_blots_text__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _blots_cursor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nCodeBlock.requiredContainer = CodeBlockContainer;\nCodeBlock.TAB = '  ';\n\n\n//# sourceURL=webpack://Quill/./formats/code.js?");
	
	/***/ }),
	
	/***/ "./formats/color.js":
	/*!**************************!*\
	  !*** ./formats/color.js ***!
	  \**************************/
	/*! exports provided: ColorAttributor, ColorClass, ColorStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorAttributor\", function() { return ColorAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorClass\", function() { return ColorClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorStyle\", function() { return ColorStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass ColorAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(domNode) {\n    let value = super.value(domNode);\n    if (!value.startsWith('rgb(')) return value;\n    value = value.replace(/^[^\\d]+/, '').replace(/[^\\d]+$/, '');\n    const hex = value.split(',').map(component => \"00\".concat(parseInt(component, 10).toString(16)).slice(-2)).join('');\n    return \"#\".concat(hex);\n  }\n\n}\n\nconst ColorClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('color', 'ql-color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\nconst ColorStyle = new ColorAttributor('color', 'color', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE\n});\n\n\n//# sourceURL=webpack://Quill/./formats/color.js?");
	
	/***/ }),
	
	/***/ "./formats/direction.js":
	/*!******************************!*\
	  !*** ./formats/direction.js ***!
	  \******************************/
	/*! exports provided: DirectionAttribute, DirectionClass, DirectionStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionAttribute\", function() { return DirectionAttribute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionClass\", function() { return DirectionClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DirectionStyle\", function() { return DirectionStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: ['rtl']\n};\nconst DirectionAttribute = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"Attributor\"]('direction', 'dir', config);\nconst DirectionClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('direction', 'ql-direction', config);\nconst DirectionStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('direction', 'direction', config);\n\n\n//# sourceURL=webpack://Quill/./formats/direction.js?");
	
	/***/ }),
	
	/***/ "./formats/font.js":
	/*!*************************!*\
	  !*** ./formats/font.js ***!
	  \*************************/
	/*! exports provided: FontStyle, FontClass */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontStyle\", function() { return FontStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FontClass\", function() { return FontClass; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst config = {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['serif', 'monospace']\n};\nconst FontClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('font', 'ql-font', config);\n\nclass FontStyleAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"] {\n  value(node) {\n    return super.value(node).replace(/[\"']/g, '');\n  }\n\n}\n\nconst FontStyle = new FontStyleAttributor('font', 'font-family', config);\n\n\n//# sourceURL=webpack://Quill/./formats/font.js?");
	
	/***/ }),
	
	/***/ "./formats/formula.js":
	/*!****************************!*\
	  !*** ./formats/formula.js ***!
	  \****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/embed */ \"./blots/embed.js\");\n\n\nclass Formula extends _blots_embed__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    if (window.katex == null) {\n      throw new Error('Formula module requires KaTeX.');\n    }\n\n    const node = super.create(value);\n\n    if (typeof value === 'string') {\n      window.katex.render(value, node, {\n        throwOnError: false,\n        errorColor: '#f00'\n      });\n      node.setAttribute('data-value', value);\n    }\n\n    return node;\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('data-value');\n  }\n\n  html() {\n    const {\n      formula\n    } = this.value();\n    return \"<span>\".concat(formula, \"</span>\");\n  }\n\n}\n\nFormula.blotName = 'formula';\nFormula.className = 'ql-formula';\nFormula.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formula);\n\n//# sourceURL=webpack://Quill/./formats/formula.js?");
	
	/***/ }),
	
	/***/ "./formats/header.js":
	/*!***************************!*\
	  !*** ./formats/header.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n\n\nclass Header extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static formats(domNode) {\n    return this.tagName.indexOf(domNode.tagName) + 1;\n  }\n\n}\n\nHeader.blotName = 'header';\nHeader.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack://Quill/./formats/header.js?");
	
	/***/ }),
	
	/***/ "./formats/image.js":
	/*!**************************!*\
	  !*** ./formats/image.js ***!
	  \**************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['alt', 'height', 'width'];\n\nclass Image extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"EmbedBlot\"] {\n  static create(value) {\n    const node = super.create(value);\n\n    if (typeof value === 'string') {\n      node.setAttribute('src', this.sanitize(value));\n    }\n\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n\n      return formats;\n    }, {});\n  }\n\n  static match(url) {\n    return /\\.(jpe?g|gif|png)$/.test(url) || /^data:image\\/.+;base64/.test(url);\n  }\n\n  static register() {\n    if (/Firefox/i.test(navigator.userAgent)) {\n      setTimeout(() => {\n        // Disable image resizing in Firefox\n        document.execCommand('enableObjectResizing', false, false);\n      }, 1);\n    }\n  }\n\n  static sanitize(url) {\n    return Object(_link__WEBPACK_IMPORTED_MODULE_1__[\"sanitize\"])(url, ['http', 'https', 'data']) ? url : '//:0';\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n\n}\n\nImage.blotName = 'image';\nImage.tagName = 'IMG';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack://Quill/./formats/image.js?");
	
	/***/ }),
	
	/***/ "./formats/indent.js":
	/*!***************************!*\
	  !*** ./formats/indent.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\n\nclass IndentAttributor extends parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"] {\n  add(node, value) {\n    if (value === '+1' || value === '-1') {\n      const indent = this.value(node) || 0;\n      value = value === '+1' ? indent + 1 : indent - 1;\n    }\n\n    if (value === 0) {\n      this.remove(node);\n      return true;\n    }\n\n    return super.add(node, value);\n  }\n\n  canAdd(node, value) {\n    return super.canAdd(node, value) || super.canAdd(node, parseInt(value, 10));\n  }\n\n  value(node) {\n    return parseInt(super.value(node), 10) || undefined; // Don't return NaN\n  }\n\n}\n\nconst IndentClass = new IndentAttributor('indent', 'ql-indent', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK,\n  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndentClass);\n\n//# sourceURL=webpack://Quill/./formats/indent.js?");
	
	/***/ }),
	
	/***/ "./formats/italic.js":
	/*!***************************!*\
	  !*** ./formats/italic.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\n\nclass Italic extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nItalic.blotName = 'italic';\nItalic.tagName = ['EM', 'I'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Italic);\n\n//# sourceURL=webpack://Quill/./formats/italic.js?");
	
	/***/ }),
	
	/***/ "./formats/link.js":
	/*!*************************!*\
	  !*** ./formats/link.js ***!
	  \*************************/
	/*! exports provided: default, sanitize */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sanitize\", function() { return sanitize; });\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Link extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('href', this.sanitize(value));\n    node.setAttribute('rel', 'noopener noreferrer');\n    node.setAttribute('target', '_blank');\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('href');\n  }\n\n  static sanitize(url) {\n    return sanitize(url, this.PROTOCOL_WHITELIST) ? url : this.SANITIZED_URL;\n  }\n\n  format(name, value) {\n    if (name !== this.statics.blotName || !value) {\n      super.format(name, value);\n    } else {\n      this.domNode.setAttribute('href', this.constructor.sanitize(value));\n    }\n  }\n\n}\n\nLink.blotName = 'link';\nLink.tagName = 'A';\nLink.SANITIZED_URL = 'about:blank';\nLink.PROTOCOL_WHITELIST = ['http', 'https', 'mailto', 'tel'];\n\nfunction sanitize(url, protocols) {\n  const anchor = document.createElement('a');\n  anchor.href = url;\n  const protocol = anchor.href.slice(0, anchor.href.indexOf(':'));\n  return protocols.indexOf(protocol) > -1;\n}\n\n\n\n//# sourceURL=webpack://Quill/./formats/link.js?");
	
	/***/ }),
	
	/***/ "./formats/list.js":
	/*!*************************!*\
	  !*** ./formats/list.js ***!
	  \*************************/
	/*! exports provided: ListContainer, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListContainer\", function() { return ListContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListItem; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n\n\n\n\nclass ListContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\n\nListContainer.blotName = 'list-container';\nListContainer.tagName = 'OL';\n\nclass ListItem extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create();\n    node.setAttribute('data-list', value);\n    return node;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-list') || undefined;\n  }\n\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].register(ListContainer);\n  }\n\n  constructor(scroll, domNode) {\n    super(scroll, domNode);\n    const ui = domNode.ownerDocument.createElement('span');\n\n    const listEventHandler = e => {\n      if (!scroll.isEnabled()) return;\n      const format = this.statics.formats(domNode, scroll);\n\n      if (format === 'checked') {\n        this.format('list', 'unchecked');\n        e.preventDefault();\n      } else if (format === 'unchecked') {\n        this.format('list', 'checked');\n        e.preventDefault();\n      }\n    };\n\n    ui.addEventListener('mousedown', listEventHandler);\n    ui.addEventListener('touchstart', listEventHandler);\n    this.attachUI(ui);\n  }\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-list', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n}\n\nListItem.blotName = 'list';\nListItem.tagName = 'LI';\nListContainer.allowedChildren = [ListItem];\nListItem.requiredContainer = ListContainer;\n\n\n//# sourceURL=webpack://Quill/./formats/list.js?");
	
	/***/ }),
	
	/***/ "./formats/script.js":
	/*!***************************!*\
	  !*** ./formats/script.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Script extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    if (value === 'super') {\n      return document.createElement('sup');\n    }\n\n    if (value === 'sub') {\n      return document.createElement('sub');\n    }\n\n    return super.create(value);\n  }\n\n  static formats(domNode) {\n    if (domNode.tagName === 'SUB') return 'sub';\n    if (domNode.tagName === 'SUP') return 'super';\n    return undefined;\n  }\n\n}\n\nScript.blotName = 'script';\nScript.tagName = ['SUB', 'SUP'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Script);\n\n//# sourceURL=webpack://Quill/./formats/script.js?");
	
	/***/ }),
	
	/***/ "./formats/size.js":
	/*!*************************!*\
	  !*** ./formats/size.js ***!
	  \*************************/
	/*! exports provided: SizeClass, SizeStyle */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeClass\", function() { return SizeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeStyle\", function() { return SizeStyle; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n\nconst SizeClass = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"ClassAttributor\"]('size', 'ql-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['small', 'large', 'huge']\n});\nconst SizeStyle = new parchment__WEBPACK_IMPORTED_MODULE_0__[\"StyleAttributor\"]('size', 'font-size', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].INLINE,\n  whitelist: ['10px', '18px', '32px']\n});\n\n\n//# sourceURL=webpack://Quill/./formats/size.js?");
	
	/***/ }),
	
	/***/ "./formats/strike.js":
	/*!***************************!*\
	  !*** ./formats/strike.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bold__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bold */ \"./formats/bold.js\");\n\n\nclass Strike extends _bold__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nStrike.blotName = 'strike';\nStrike.tagName = ['S', 'STRIKE'];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Strike);\n\n//# sourceURL=webpack://Quill/./formats/strike.js?");
	
	/***/ }),
	
	/***/ "./formats/table.js":
	/*!**************************!*\
	  !*** ./formats/table.js ***!
	  \**************************/
	/*! exports provided: TableCell, TableRow, TableBody, TableContainer, tableId */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableCell\", function() { return TableCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableRow\", function() { return TableRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableBody\", function() { return TableBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableContainer\", function() { return TableContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tableId\", function() { return tableId; });\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blots/container */ \"./blots/container.js\");\n\n\n\nclass TableCell extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static create(value) {\n    const node = super.create();\n\n    if (value) {\n      node.setAttribute('data-row', value);\n    } else {\n      node.setAttribute('data-row', tableId());\n    }\n\n    return node;\n  }\n\n  static formats(domNode) {\n    if (domNode.hasAttribute('data-row')) {\n      return domNode.getAttribute('data-row');\n    }\n\n    return undefined;\n  }\n\n  cellOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n\n    return -1;\n  }\n\n  format(name, value) {\n    if (name === TableCell.blotName && value) {\n      this.domNode.setAttribute('data-row', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  row() {\n    return this.parent;\n  }\n\n  rowOffset() {\n    if (this.row()) {\n      return this.row().rowOffset();\n    }\n\n    return -1;\n  }\n\n  table() {\n    return this.row() && this.row().table();\n  }\n\n}\n\nTableCell.blotName = 'table';\nTableCell.tagName = 'TD';\n\nclass TableRow extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  checkMerge() {\n    if (super.checkMerge() && this.next.children.head != null) {\n      const thisHead = this.children.head.formats();\n      const thisTail = this.children.tail.formats();\n      const nextHead = this.next.children.head.formats();\n      const nextTail = this.next.children.tail.formats();\n      return thisHead.table === thisTail.table && thisHead.table === nextHead.table && thisHead.table === nextTail.table;\n    }\n\n    return false;\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n    this.children.forEach(child => {\n      if (child.next == null) return;\n      const childFormats = child.formats();\n      const nextFormats = child.next.formats();\n\n      if (childFormats.table !== nextFormats.table) {\n        const next = this.splitAfter(child);\n\n        if (next) {\n          next.optimize();\n        } // We might be able to merge with prev now\n\n\n        if (this.prev) {\n          this.prev.optimize();\n        }\n      }\n    });\n  }\n\n  rowOffset() {\n    if (this.parent) {\n      return this.parent.children.indexOf(this);\n    }\n\n    return -1;\n  }\n\n  table() {\n    return this.parent && this.parent.parent;\n  }\n\n}\n\nTableRow.blotName = 'table-row';\nTableRow.tagName = 'TR';\n\nclass TableBody extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {}\n\nTableBody.blotName = 'table-body';\nTableBody.tagName = 'TBODY';\n\nclass TableContainer extends _blots_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  balanceCells() {\n    const rows = this.descendants(TableRow);\n    const maxColumns = rows.reduce((max, row) => {\n      return Math.max(row.children.length, max);\n    }, 0);\n    rows.forEach(row => {\n      new Array(maxColumns - row.children.length).fill(0).forEach(() => {\n        let value;\n\n        if (row.children.head != null) {\n          value = TableCell.formats(row.children.head.domNode);\n        }\n\n        const blot = this.scroll.create(TableCell.blotName, value);\n        row.appendChild(blot);\n        blot.optimize(); // Add break blot\n      });\n    });\n  }\n\n  cells(column) {\n    return this.rows().map(row => row.children.at(column));\n  }\n\n  deleteColumn(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const cell = row.children.at(index);\n\n      if (cell != null) {\n        cell.remove();\n      }\n    });\n  }\n\n  insertColumn(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    body.children.forEach(row => {\n      const ref = row.children.at(index);\n      const value = TableCell.formats(row.children.head.domNode);\n      const cell = this.scroll.create(TableCell.blotName, value);\n      row.insertBefore(cell, ref);\n    });\n  }\n\n  insertRow(index) {\n    const [body] = this.descendant(TableBody);\n    if (body == null || body.children.head == null) return;\n    const id = tableId();\n    const row = this.scroll.create(TableRow.blotName);\n    body.children.head.children.forEach(() => {\n      const cell = this.scroll.create(TableCell.blotName, id);\n      row.appendChild(cell);\n    });\n    const ref = body.children.at(index);\n    body.insertBefore(row, ref);\n  }\n\n  rows() {\n    const body = this.children.head;\n    if (body == null) return [];\n    return body.children.map(row => row);\n  }\n\n}\n\nTableContainer.blotName = 'table-container';\nTableContainer.tagName = 'TABLE';\nTableContainer.allowedChildren = [TableBody];\nTableBody.requiredContainer = TableContainer;\nTableBody.allowedChildren = [TableRow];\nTableRow.requiredContainer = TableBody;\nTableRow.allowedChildren = [TableCell];\nTableCell.requiredContainer = TableRow;\n\nfunction tableId() {\n  const id = Math.random().toString(36).slice(2, 6);\n  return \"row-\".concat(id);\n}\n\n\n\n//# sourceURL=webpack://Quill/./formats/table.js?");
	
	/***/ }),
	
	/***/ "./formats/underline.js":
	/*!******************************!*\
	  !*** ./formats/underline.js ***!
	  \******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n\n\nclass Underline extends _blots_inline__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {}\n\nUnderline.blotName = 'underline';\nUnderline.tagName = 'U';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Underline);\n\n//# sourceURL=webpack://Quill/./formats/underline.js?");
	
	/***/ }),
	
	/***/ "./formats/video.js":
	/*!**************************!*\
	  !*** ./formats/video.js ***!
	  \**************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ \"./formats/link.js\");\n\n\nconst ATTRIBUTES = ['height', 'width'];\n\nclass Video extends _blots_block__WEBPACK_IMPORTED_MODULE_0__[\"BlockEmbed\"] {\n  static create(value) {\n    const node = super.create(value);\n    node.setAttribute('frameborder', '0');\n    node.setAttribute('allowfullscreen', true);\n    node.setAttribute('src', this.sanitize(value));\n    return node;\n  }\n\n  static formats(domNode) {\n    return ATTRIBUTES.reduce((formats, attribute) => {\n      if (domNode.hasAttribute(attribute)) {\n        formats[attribute] = domNode.getAttribute(attribute);\n      }\n\n      return formats;\n    }, {});\n  }\n\n  static sanitize(url) {\n    return _link__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sanitize(url); // eslint-disable-line import/no-named-as-default-member\n  }\n\n  static value(domNode) {\n    return domNode.getAttribute('src');\n  }\n\n  format(name, value) {\n    if (ATTRIBUTES.indexOf(name) > -1) {\n      if (value) {\n        this.domNode.setAttribute(name, value);\n      } else {\n        this.domNode.removeAttribute(name);\n      }\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  html() {\n    const {\n      video\n    } = this.value();\n    return \"<a href=\\\"\".concat(video, \"\\\">\").concat(video, \"</a>\");\n  }\n\n}\n\nVideo.blotName = 'video';\nVideo.className = 'ql-video';\nVideo.tagName = 'IFRAME';\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\n//# sourceURL=webpack://Quill/./formats/video.js?");
	
	/***/ }),
	
	/***/ "./modules/clipboard.js":
	/*!******************************!*\
	  !*** ./modules/clipboard.js ***!
	  \******************************/
	/*! exports provided: default, matchAttributor, matchBlot, matchNewline, matchText, traverse */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clipboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchAttributor\", function() { return matchAttributor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchBlot\", function() { return matchBlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchNewline\", function() { return matchNewline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchText\", function() { return matchText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"traverse\", function() { return traverse; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../formats/size */ \"./formats/size.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('quill:clipboard');\nconst CLIPBOARD_CONFIG = [[Node.TEXT_NODE, matchText], [Node.TEXT_NODE, matchNewline], ['br', matchBreak], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchAttributor], [Node.ELEMENT_NODE, matchStyles], ['li', matchIndent], ['ol, ul', matchList], ['pre', matchCodeBlock], ['tr', matchTable], ['b', matchAlias.bind(matchAlias, 'bold')], ['i', matchAlias.bind(matchAlias, 'italic')], ['strike', matchAlias.bind(matchAlias, 'strike')], ['style', matchIgnore]];\nconst ATTRIBUTE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__[\"AlignAttribute\"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__[\"DirectionAttribute\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\nconst STYLE_ATTRIBUTORS = [_formats_align__WEBPACK_IMPORTED_MODULE_7__[\"AlignStyle\"], _formats_background__WEBPACK_IMPORTED_MODULE_8__[\"BackgroundStyle\"], _formats_color__WEBPACK_IMPORTED_MODULE_10__[\"ColorStyle\"], _formats_direction__WEBPACK_IMPORTED_MODULE_11__[\"DirectionStyle\"], _formats_font__WEBPACK_IMPORTED_MODULE_12__[\"FontStyle\"], _formats_size__WEBPACK_IMPORTED_MODULE_13__[\"SizeStyle\"]].reduce((memo, attr) => {\n  memo[attr.keyName] = attr;\n  return memo;\n}, {});\n\nclass Clipboard extends _core_module__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.quill.root.addEventListener('copy', e => this.onCaptureCopy(e, false));\n    this.quill.root.addEventListener('cut', e => this.onCaptureCopy(e, true));\n    this.quill.root.addEventListener('paste', this.onCapturePaste.bind(this));\n    this.matchers = [];\n    CLIPBOARD_CONFIG.concat(this.options.matchers).forEach(([selector, matcher]) => {\n      this.addMatcher(selector, matcher);\n    });\n  }\n\n  addMatcher(selector, matcher) {\n    this.matchers.push([selector, matcher]);\n  }\n\n  convert({\n    html,\n    text\n  }, formats = {}) {\n    if (formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text, {\n        [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: formats[_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]\n      });\n    }\n\n    if (!html) {\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(text || '');\n    }\n\n    const doc = new DOMParser().parseFromString(html, 'text/html');\n    const container = doc.body;\n    const nodeMatches = new WeakMap();\n    const [elementMatchers, textMatchers] = this.prepareMatching(container, nodeMatches);\n    const delta = traverse(this.quill.scroll, container, elementMatchers, textMatchers, nodeMatches); // Remove trailing newline\n\n    if (deltaEndsWith(delta, '\\n') && (delta.ops[delta.ops.length - 1].attributes == null || formats.table)) {\n      return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(delta.length() - 1).delete(1));\n    }\n\n    return delta;\n  }\n\n  dangerouslyPasteHTML(index, html, source = _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.API) {\n    if (typeof index === 'string') {\n      const delta = this.convert({\n        html: index,\n        text: ''\n      });\n      this.quill.setContents(delta, html);\n      this.quill.setSelection(0, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    } else {\n      const paste = this.convert({\n        html,\n        text: ''\n      });\n      this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(index).concat(paste), source);\n      this.quill.setSelection(index + paste.length(), _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    }\n  }\n\n  onCaptureCopy(e, isCut = false) {\n    if (e.defaultPrevented) return;\n    e.preventDefault();\n    const [range] = this.quill.selection.getRange();\n    if (range == null) return;\n    const {\n      html,\n      text\n    } = this.onCopy(range, isCut);\n    e.clipboardData.setData('text/plain', text);\n    e.clipboardData.setData('text/html', html);\n\n    if (isCut) {\n      this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER);\n    }\n  }\n\n  onCapturePaste(e) {\n    if (e.defaultPrevented || !this.quill.isEnabled()) return;\n    e.preventDefault();\n    const range = this.quill.getSelection(true);\n    if (range == null) return;\n    const html = e.clipboardData.getData('text/html');\n    const text = e.clipboardData.getData('text/plain');\n    const files = Array.from(e.clipboardData.files || []);\n\n    if (!html && files.length > 0) {\n      this.quill.uploader.upload(range, files);\n    } else {\n      this.onPaste(range, {\n        html,\n        text\n      });\n    }\n  }\n\n  onCopy(range) {\n    const text = this.quill.getText(range);\n    const html = this.quill.getSemanticHTML(range);\n    return {\n      html,\n      text\n    };\n  }\n\n  onPaste(range, {\n    text,\n    html\n  }) {\n    const formats = this.quill.getFormat(range.index);\n    const pastedDelta = this.convert({\n      text,\n      html\n    }, formats);\n    debug.log('onPaste', pastedDelta, {\n      text,\n      html\n    });\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().retain(range.index).delete(range.length).concat(pastedDelta);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.USER); // range.length contributes to delta.length()\n\n    this.quill.setSelection(delta.length() - range.length, _core_quill__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sources.SILENT);\n    this.quill.scrollIntoView();\n  }\n\n  prepareMatching(container, nodeMatches) {\n    const elementMatchers = [];\n    const textMatchers = [];\n    this.matchers.forEach(pair => {\n      const [selector, matcher] = pair;\n\n      switch (selector) {\n        case Node.TEXT_NODE:\n          textMatchers.push(matcher);\n          break;\n\n        case Node.ELEMENT_NODE:\n          elementMatchers.push(matcher);\n          break;\n\n        default:\n          Array.from(container.querySelectorAll(selector)).forEach(node => {\n            if (nodeMatches.has(node)) {\n              const matches = nodeMatches.get(node);\n              matches.push(matcher);\n            } else {\n              nodeMatches.set(node, [matcher]);\n            }\n          });\n          break;\n      }\n    });\n    return [elementMatchers, textMatchers];\n  }\n\n}\n\nClipboard.DEFAULTS = {\n  matchers: []\n};\n\nfunction applyFormat(delta, format, value) {\n  if (typeof format === 'object') {\n    return Object.keys(format).reduce((newDelta, key) => {\n      return applyFormat(newDelta, key, format[key]);\n    }, delta);\n  }\n\n  return delta.reduce((newDelta, op) => {\n    if (op.attributes && op.attributes[format]) {\n      return newDelta.push(op);\n    }\n\n    return newDelta.insert(op.insert, extend__WEBPACK_IMPORTED_MODULE_0___default()({}, {\n      [format]: value\n    }, op.attributes));\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\n\nfunction deltaEndsWith(delta, text) {\n  let endText = '';\n\n  for (let i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i // eslint-disable-line no-plusplus\n  ) {\n    const op = delta.ops[i];\n    if (typeof op.insert !== 'string') break;\n    endText = op.insert + endText;\n  }\n\n  return endText.slice(-1 * text.length) === text;\n}\n\nfunction isLine(node) {\n  if (node.childNodes.length === 0) return false; // Exclude embed blocks\n\n  return ['address', 'article', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'iframe', 'li', 'main', 'nav', 'ol', 'output', 'p', 'pre', 'section', 'table', 'td', 'tr', 'ul', 'video'].includes(node.tagName.toLowerCase());\n}\n\nconst preNodes = new WeakMap();\n\nfunction isPre(node) {\n  if (node == null) return false;\n\n  if (!preNodes.has(node)) {\n    if (node.tagName === 'PRE') {\n      preNodes.set(node, true);\n    } else {\n      preNodes.set(node, isPre(node.parentNode));\n    }\n  }\n\n  return preNodes.get(node);\n}\n\nfunction traverse(scroll, node, elementMatchers, textMatchers, nodeMatches) {\n  // Post-order\n  if (node.nodeType === node.TEXT_NODE) {\n    return textMatchers.reduce((delta, matcher) => {\n      return matcher(node, delta, scroll);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n\n  if (node.nodeType === node.ELEMENT_NODE) {\n    return Array.from(node.childNodes || []).reduce((delta, childNode) => {\n      let childrenDelta = traverse(scroll, childNode, elementMatchers, textMatchers, nodeMatches);\n\n      if (childNode.nodeType === node.ELEMENT_NODE) {\n        childrenDelta = elementMatchers.reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n        childrenDelta = (nodeMatches.get(childNode) || []).reduce((reducedDelta, matcher) => {\n          return matcher(childNode, reducedDelta, scroll);\n        }, childrenDelta);\n      }\n\n      return delta.concat(childrenDelta);\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n  }\n\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\n\nfunction matchAlias(format, node, delta) {\n  return applyFormat(delta, format, true);\n}\n\nfunction matchAttributor(node, delta, scroll) {\n  const attributes = parchment__WEBPACK_IMPORTED_MODULE_2__[\"Attributor\"].keys(node);\n  const classes = parchment__WEBPACK_IMPORTED_MODULE_2__[\"ClassAttributor\"].keys(node);\n  const styles = parchment__WEBPACK_IMPORTED_MODULE_2__[\"StyleAttributor\"].keys(node);\n  const formats = {};\n  attributes.concat(classes).concat(styles).forEach(name => {\n    let attr = scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_2__[\"Scope\"].ATTRIBUTE);\n\n    if (attr != null) {\n      formats[attr.attrName] = attr.value(node);\n      if (formats[attr.attrName]) return;\n    }\n\n    attr = ATTRIBUTE_ATTRIBUTORS[name];\n\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n\n    attr = STYLE_ATTRIBUTORS[name];\n\n    if (attr != null && (attr.attrName === name || attr.keyName === name)) {\n      attr = STYLE_ATTRIBUTORS[name];\n      formats[attr.attrName] = attr.value(node) || undefined;\n    }\n  });\n\n  if (Object.keys(formats).length > 0) {\n    return applyFormat(delta, formats);\n  }\n\n  return delta;\n}\n\nfunction matchBlot(node, delta, scroll) {\n  const match = scroll.query(node);\n  if (match == null) return delta;\n\n  if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__[\"EmbedBlot\"]) {\n    const embed = {};\n    const value = match.value(node);\n\n    if (value != null) {\n      embed[match.blotName] = value;\n      return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert(embed, match.formats(node, scroll));\n    }\n  } else {\n    if (match.prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_2__[\"BlockBlot\"] && !deltaEndsWith(delta, '\\n')) {\n      delta.insert('\\n');\n    }\n\n    if (typeof match.formats === 'function') {\n      return applyFormat(delta, match.blotName, match.formats(node, scroll));\n    }\n  }\n\n  return delta;\n}\n\nfunction matchBreak(node, delta) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    delta.insert('\\n');\n  }\n\n  return delta;\n}\n\nfunction matchCodeBlock(node, delta, scroll) {\n  const match = scroll.query('code-block');\n  const language = match ? match.formats(node, scroll) : true;\n  return applyFormat(delta, 'code-block', language);\n}\n\nfunction matchIgnore() {\n  return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a();\n}\n\nfunction matchIndent(node, delta, scroll) {\n  const match = scroll.query(node);\n\n  if (match == null || match.blotName !== 'list' || !deltaEndsWith(delta, '\\n')) {\n    return delta;\n  }\n\n  let indent = -1;\n  let parent = node.parentNode;\n\n  while (parent != null) {\n    if (['OL', 'UL'].includes(parent.tagName)) {\n      indent += 1;\n    }\n\n    parent = parent.parentNode;\n  }\n\n  if (indent <= 0) return delta;\n  return delta.reduce((composed, op) => {\n    if (op.attributes && op.attributes.list) {\n      return composed.push(op);\n    }\n\n    return composed.insert(op.insert, {\n      indent,\n      ...(op.attributes || {})\n    });\n  }, new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a());\n}\n\nfunction matchList(node, delta) {\n  const list = node.tagName === 'OL' ? 'ordered' : 'bullet';\n  return applyFormat(delta, 'list', list);\n}\n\nfunction matchNewline(node, delta, scroll) {\n  if (!deltaEndsWith(delta, '\\n')) {\n    if (isLine(node)) {\n      return delta.insert('\\n');\n    }\n\n    if (delta.length() > 0 && node.nextSibling) {\n      let {\n        nextSibling\n      } = node;\n\n      while (nextSibling != null) {\n        if (isLine(nextSibling)) {\n          return delta.insert('\\n');\n        }\n\n        const match = scroll.query(nextSibling);\n\n        if (match && match.prototype instanceof _blots_block__WEBPACK_IMPORTED_MODULE_3__[\"BlockEmbed\"]) {\n          return delta.insert('\\n');\n        }\n\n        nextSibling = nextSibling.firstChild;\n      }\n    }\n  }\n\n  return delta;\n}\n\nfunction matchStyles(node, delta) {\n  const formats = {};\n  const style = node.style || {};\n\n  if (style.fontStyle === 'italic') {\n    formats.italic = true;\n  }\n\n  if (style.textDecoration === 'underline') {\n    formats.underline = true;\n  }\n\n  if (style.textDecoration === 'line-through') {\n    formats.strike = true;\n  }\n\n  if (style.fontWeight.startsWith('bold') || parseInt(style.fontWeight, 10) >= 700) {\n    formats.bold = true;\n  }\n\n  if (Object.keys(formats).length > 0) {\n    delta = applyFormat(delta, formats);\n  }\n\n  if (parseFloat(style.textIndent || 0) > 0) {\n    // Could be 0.5in\n    return new quill_delta__WEBPACK_IMPORTED_MODULE_1___default.a().insert('\\t').concat(delta);\n  }\n\n  return delta;\n}\n\nfunction matchTable(node, delta) {\n  const table = node.parentNode.tagName === 'TABLE' ? node.parentNode : node.parentNode.parentNode;\n  const rows = Array.from(table.querySelectorAll('tr'));\n  const row = rows.indexOf(node) + 1;\n  return applyFormat(delta, 'table', row);\n}\n\nfunction matchText(node, delta) {\n  let text = node.data; // Word represents empty line with <o:p>&nbsp;</o:p>\n\n  if (node.parentNode.tagName === 'O:P') {\n    return delta.insert(text.trim());\n  }\n\n  if (text.trim().length === 0 && text.includes('\\n')) {\n    return delta;\n  }\n\n  if (!isPre(node)) {\n    const replacer = (collapse, match) => {\n      const replaced = match.replace(/[^\\u00a0]/g, ''); // \\u00a0 is nbsp;\n\n      return replaced.length < 1 && collapse ? ' ' : replaced;\n    };\n\n    text = text.replace(/\\r\\n/g, ' ').replace(/\\n/g, ' ');\n    text = text.replace(/\\s\\s+/g, replacer.bind(replacer, true)); // collapse whitespace\n\n    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {\n      text = text.replace(/^\\s+/, replacer.bind(replacer, false));\n    }\n\n    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {\n      text = text.replace(/\\s+$/, replacer.bind(replacer, false));\n    }\n  }\n\n  return delta.insert(text);\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/clipboard.js?");
	
	/***/ }),
	
	/***/ "./modules/history.js":
	/*!****************************!*\
	  !*** ./modules/history.js ***!
	  \****************************/
	/*! exports provided: default, getLastChangeIndex */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return History; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLastChangeIndex\", function() { return getLastChangeIndex; });\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\nclass History extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    this.lastRecorded = 0;\n    this.ignoreChange = false;\n    this.clear();\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, (eventName, delta, oldDelta, source) => {\n      if (eventName !== _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.TEXT_CHANGE || this.ignoreChange) return;\n\n      if (!this.options.userOnly || source === _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        this.record(delta, oldDelta);\n      } else {\n        this.transform(delta);\n      }\n    });\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true\n    }, this.undo.bind(this));\n    this.quill.keyboard.addBinding({\n      key: 'z',\n      shortKey: true,\n      shiftKey: true\n    }, this.redo.bind(this));\n\n    if (/Win/i.test(navigator.platform)) {\n      this.quill.keyboard.addBinding({\n        key: 'y',\n        shortKey: true\n      }, this.redo.bind(this));\n    }\n  }\n\n  change(source, dest) {\n    if (this.stack[source].length === 0) return;\n    const delta = this.stack[source].pop();\n    const base = this.quill.getContents();\n    const inverseDelta = delta.invert(base);\n    this.stack[dest].push(inverseDelta);\n    this.lastRecorded = 0;\n    this.ignoreChange = true;\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.ignoreChange = false;\n    const index = getLastChangeIndex(this.quill.scroll, delta);\n    this.quill.setSelection(index);\n  }\n\n  clear() {\n    this.stack = {\n      undo: [],\n      redo: []\n    };\n  }\n\n  cutoff() {\n    this.lastRecorded = 0;\n  }\n\n  record(changeDelta, oldDelta) {\n    if (changeDelta.ops.length === 0) return;\n    this.stack.redo = [];\n    let undoDelta = changeDelta.invert(oldDelta);\n    const timestamp = Date.now();\n\n    if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {\n      const delta = this.stack.undo.pop();\n      undoDelta = undoDelta.compose(delta);\n    } else {\n      this.lastRecorded = timestamp;\n    }\n\n    if (undoDelta.length() === 0) return;\n    this.stack.undo.push(undoDelta);\n\n    if (this.stack.undo.length > this.options.maxStack) {\n      this.stack.undo.shift();\n    }\n  }\n\n  redo() {\n    this.change('redo', 'undo');\n  }\n\n  transform(delta) {\n    transformStack(this.stack.undo, delta);\n    transformStack(this.stack.redo, delta);\n  }\n\n  undo() {\n    this.change('undo', 'redo');\n  }\n\n}\n\nHistory.DEFAULTS = {\n  delay: 1000,\n  maxStack: 100,\n  userOnly: false\n};\n\nfunction transformStack(stack, delta) {\n  let remoteDelta = delta;\n\n  for (let i = stack.length - 1; i >= 0; i -= 1) {\n    const oldDelta = stack[i];\n    stack[i] = remoteDelta.transform(oldDelta, true);\n    remoteDelta = oldDelta.transform(remoteDelta);\n\n    if (stack[i].length() === 0) {\n      stack.splice(i, 1);\n    }\n  }\n}\n\nfunction endsWithNewlineChange(scroll, delta) {\n  const lastOp = delta.ops[delta.ops.length - 1];\n  if (lastOp == null) return false;\n\n  if (lastOp.insert != null) {\n    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\\n');\n  }\n\n  if (lastOp.attributes != null) {\n    return Object.keys(lastOp.attributes).some(attr => {\n      return scroll.query(attr, parchment__WEBPACK_IMPORTED_MODULE_0__[\"Scope\"].BLOCK) != null;\n    });\n  }\n\n  return false;\n}\n\nfunction getLastChangeIndex(scroll, delta) {\n  const deleteLength = delta.reduce((length, op) => {\n    return length + (op.delete || 0);\n  }, 0);\n  let changeIndex = delta.length() - deleteLength;\n\n  if (endsWithNewlineChange(scroll, delta)) {\n    changeIndex -= 1;\n  }\n\n  return changeIndex;\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/history.js?");
	
	/***/ }),
	
	/***/ "./modules/keyboard.js":
	/*!*****************************!*\
	  !*** ./modules/keyboard.js ***!
	  \*****************************/
	/*! exports provided: default, SHORTKEY, normalize */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Keyboard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHORTKEY\", function() { return SHORTKEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalize\", function() { return normalize; });\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ \"./node_modules/clone/clone.js\");\n/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! deep-equal */ \"./node_modules/deep-equal/index.js\");\n/* harmony import */ var deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(deep_equal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('quill:keyboard');\nconst SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';\n\nclass Keyboard extends _core_module__WEBPACK_IMPORTED_MODULE_7__[\"default\"] {\n  static match(evt, binding) {\n    if (['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].some(key => {\n      return !!binding[key] !== evt[key] && binding[key] !== null;\n    })) {\n      return false;\n    }\n\n    return binding.key === evt.key || binding.key === evt.which;\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n    this.bindings = {};\n    Object.keys(this.options.bindings).forEach(name => {\n      if (this.options.bindings[name]) {\n        this.addBinding(this.options.bindings[name]);\n      }\n    });\n    this.addBinding({\n      key: 'Enter',\n      shiftKey: null\n    }, this.handleEnter);\n    this.addBinding({\n      key: 'Enter',\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null\n    }, () => {});\n\n    if (/Firefox/i.test(navigator.userAgent)) {\n      // Need to handle delete and backspace for Firefox in the general case #1171\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true\n      }, this.handleDelete);\n    } else {\n      this.addBinding({\n        key: 'Backspace'\n      }, {\n        collapsed: true,\n        prefix: /^.?$/\n      }, this.handleBackspace);\n      this.addBinding({\n        key: 'Delete'\n      }, {\n        collapsed: true,\n        suffix: /^.?$/\n      }, this.handleDelete);\n    }\n\n    this.addBinding({\n      key: 'Backspace'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Delete'\n    }, {\n      collapsed: false\n    }, this.handleDeleteRange);\n    this.addBinding({\n      key: 'Backspace',\n      altKey: null,\n      ctrlKey: null,\n      metaKey: null,\n      shiftKey: null\n    }, {\n      collapsed: true,\n      offset: 0\n    }, this.handleBackspace);\n    this.listen();\n  }\n\n  addBinding(keyBinding, context = {}, handler = {}) {\n    const binding = normalize(keyBinding);\n\n    if (binding == null) {\n      debug.warn('Attempted to add invalid keyboard binding', binding);\n      return;\n    }\n\n    if (typeof context === 'function') {\n      context = {\n        handler: context\n      };\n    }\n\n    if (typeof handler === 'function') {\n      handler = {\n        handler\n      };\n    }\n\n    const keys = Array.isArray(binding.key) ? binding.key : [binding.key];\n    keys.forEach(key => {\n      const singleBinding = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, binding, {\n        key\n      }, context, handler);\n      this.bindings[singleBinding.key] = this.bindings[singleBinding.key] || [];\n      this.bindings[singleBinding.key].push(singleBinding);\n    });\n  }\n\n  listen() {\n    this.quill.root.addEventListener('keydown', evt => {\n      if (evt.defaultPrevented || evt.isComposing) return;\n      const bindings = (this.bindings[evt.key] || []).concat(this.bindings[evt.which] || []);\n      const matches = bindings.filter(binding => Keyboard.match(evt, binding));\n      if (matches.length === 0) return;\n      const range = this.quill.getSelection();\n      if (range == null || !this.quill.hasFocus()) return;\n      const [line, offset] = this.quill.getLine(range.index);\n      const [leafStart, offsetStart] = this.quill.getLeaf(range.index);\n      const [leafEnd, offsetEnd] = range.length === 0 ? [leafStart, offsetStart] : this.quill.getLeaf(range.index + range.length);\n      const prefixText = leafStart instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"TextBlot\"] ? leafStart.value().slice(0, offsetStart) : '';\n      const suffixText = leafEnd instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"TextBlot\"] ? leafEnd.value().slice(offsetEnd) : '';\n      const curContext = {\n        collapsed: range.length === 0,\n        empty: range.length === 0 && line.length() <= 1,\n        format: this.quill.getFormat(range),\n        line,\n        offset,\n        prefix: prefixText,\n        suffix: suffixText,\n        event: evt\n      };\n      const prevented = matches.some(binding => {\n        if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) {\n          return false;\n        }\n\n        if (binding.empty != null && binding.empty !== curContext.empty) {\n          return false;\n        }\n\n        if (binding.offset != null && binding.offset !== curContext.offset) {\n          return false;\n        }\n\n        if (Array.isArray(binding.format)) {\n          // any format is present\n          if (binding.format.every(name => curContext.format[name] == null)) {\n            return false;\n          }\n        } else if (typeof binding.format === 'object') {\n          // all formats must match\n          if (!Object.keys(binding.format).every(name => {\n            if (binding.format[name] === true) return curContext.format[name] != null;\n            if (binding.format[name] === false) return curContext.format[name] == null;\n            return deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(binding.format[name], curContext.format[name]);\n          })) {\n            return false;\n          }\n        }\n\n        if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) {\n          return false;\n        }\n\n        if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) {\n          return false;\n        }\n\n        return binding.handler.call(this, range, curContext, binding) !== true;\n      });\n\n      if (prevented) {\n        evt.preventDefault();\n      }\n    });\n  }\n\n  handleBackspace(range, context) {\n    // Check for astral symbols\n    const length = /[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]$/.test(context.prefix) ? 2 : 1;\n    if (range.index === 0 || this.quill.getLength() <= 1) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - length).delete(length);\n\n    if (context.offset === 0) {\n      // Always deleting newline here, length always 1\n      const [prev] = this.quill.getLine(range.index - 1);\n\n      if (prev) {\n        const curFormats = line.formats();\n        const prevFormats = this.quill.getFormat(range.index - 1, 1);\n        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(curFormats, prevFormats) || {};\n\n        if (Object.keys(formats).length > 0) {\n          // line.length() - 1 targets \\n in line, another -1 for newline being deleted\n          const formatDelta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - 2).retain(1, formats);\n          delta = delta.compose(formatDelta);\n        }\n      }\n    }\n\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n\n  handleDelete(range, context) {\n    // Check for astral symbols\n    const length = /^[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/.test(context.suffix) ? 2 : 1;\n    if (range.index >= this.quill.getLength() - length) return;\n    let formats = {};\n    const [line] = this.quill.getLine(range.index);\n    let delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(length);\n\n    if (context.offset >= line.length() - 1) {\n      const [next] = this.quill.getLine(range.index + 1);\n\n      if (next) {\n        const curFormats = line.formats();\n        const nextFormats = this.quill.getFormat(range.index, 1);\n        formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(curFormats, nextFormats) || {};\n\n        if (Object.keys(formats).length > 0) {\n          delta = delta.retain(next.length() - 1).retain(1, formats);\n        }\n      }\n    }\n\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.focus();\n  }\n\n  handleDeleteRange(range) {\n    const lines = this.quill.getLines(range);\n    let formats = {};\n\n    if (lines.length > 1) {\n      const firstFormats = lines[0].formats();\n      const lastFormats = lines[lines.length - 1].formats();\n      formats = quill_delta__WEBPACK_IMPORTED_MODULE_3__[\"AttributeMap\"].diff(lastFormats, firstFormats) || {};\n    }\n\n    this.quill.deleteText(range, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n\n    if (Object.keys(formats).length > 0) {\n      this.quill.formatLine(range.index, 1, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    }\n\n    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    this.quill.focus();\n  }\n\n  handleEnter(range, context) {\n    const lineFormats = Object.keys(context.format).reduce((formats, format) => {\n      if (this.quill.scroll.query(format, parchment__WEBPACK_IMPORTED_MODULE_4__[\"Scope\"].BLOCK) && !Array.isArray(context.format[format])) {\n        formats[format] = context.format[format];\n      }\n\n      return formats;\n    }, {});\n    const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\n', lineFormats);\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    this.quill.focus();\n    Object.keys(context.format).forEach(name => {\n      if (lineFormats[name] != null) return;\n      if (Array.isArray(context.format[name])) return;\n      if (name === 'code' || name === 'link') return;\n      this.quill.format(name, context.format[name], _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    });\n  }\n\n}\n\nKeyboard.DEFAULTS = {\n  bindings: {\n    bold: makeFormatHandler('bold'),\n    italic: makeFormatHandler('italic'),\n    underline: makeFormatHandler('underline'),\n    indent: {\n      // highlight tab or tab at beginning of list, indent or blockquote\n      key: 'Tab',\n      format: ['blockquote', 'indent', 'list'],\n\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '+1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        return false;\n      }\n\n    },\n    outdent: {\n      key: 'Tab',\n      shiftKey: true,\n      format: ['blockquote', 'indent', 'list'],\n\n      // highlight tab or tab at beginning of list, indent or blockquote\n      handler(range, context) {\n        if (context.collapsed && context.offset !== 0) return true;\n        this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        return false;\n      }\n\n    },\n    'outdent backspace': {\n      key: 'Backspace',\n      collapsed: true,\n      shiftKey: null,\n      metaKey: null,\n      ctrlKey: null,\n      altKey: null,\n      format: ['indent', 'list'],\n      offset: 0,\n\n      handler(range, context) {\n        if (context.format.indent != null) {\n          this.quill.format('indent', '-1', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else if (context.format.list != null) {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      }\n\n    },\n    'indent code-block': makeCodeBlockHandler(true),\n    'outdent code-block': makeCodeBlockHandler(false),\n    'remove tab': {\n      key: 'Tab',\n      shiftKey: true,\n      collapsed: true,\n      prefix: /\\t$/,\n\n      handler(range) {\n        this.quill.deleteText(range.index - 1, 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    tab: {\n      key: 'Tab',\n\n      handler(range, context) {\n        if (context.format.table) return true;\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).delete(range.length).insert('\\t');\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        return false;\n      }\n\n    },\n    'blockquote empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['blockquote'],\n      empty: true,\n\n      handler() {\n        this.quill.format('blockquote', false, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    'list empty enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['list'],\n      empty: true,\n\n      handler(range, context) {\n        const formats = {\n          list: false\n        };\n\n        if (context.format.indent) {\n          formats.indent = false;\n        }\n\n        this.quill.formatLine(range.index, range.length, formats, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n    },\n    'checklist enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: {\n        list: 'checked'\n      },\n\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const formats = extend__WEBPACK_IMPORTED_MODULE_2___default()({}, line.formats(), {\n          list: 'checked'\n        });\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', formats).retain(line.length() - offset - 1).retain(1, {\n          list: 'unchecked'\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n\n    },\n    'header enter': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['header'],\n      suffix: /^$/,\n\n      handler(range, context) {\n        const [line, offset] = this.quill.getLine(range.index);\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index).insert('\\n', context.format).retain(line.length() - offset - 1).retain(1, {\n          header: null\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.setSelection(range.index + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        this.quill.scrollIntoView();\n      }\n\n    },\n    'table backspace': {\n      key: 'Backspace',\n      format: ['table'],\n      collapsed: true,\n      offset: 0,\n\n      handler() {}\n\n    },\n    'table delete': {\n      key: 'Delete',\n      format: ['table'],\n      collapsed: true,\n      suffix: /^$/,\n\n      handler() {}\n\n    },\n    'table enter': {\n      key: 'Enter',\n      shiftKey: null,\n      format: ['table'],\n\n      handler(range) {\n        const module = this.quill.getModule('table');\n\n        if (module) {\n          const [table, row, cell, offset] = module.getTable(range);\n          const shift = tableSide(table, row, cell, offset);\n          if (shift == null) return;\n          let index = table.offset();\n\n          if (shift < 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index + 1, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n          } else if (shift > 0) {\n            index += table.length();\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(index).insert('\\n');\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(index, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          }\n        }\n      }\n\n    },\n    'table tab': {\n      key: 'Tab',\n      shiftKey: null,\n      format: ['table'],\n\n      handler(range, context) {\n        const {\n          event,\n          line: cell\n        } = context;\n        const offset = cell.offset(this.quill.scroll);\n\n        if (event.shiftKey) {\n          this.quill.setSelection(offset - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(offset + cell.length(), _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      }\n\n    },\n    'list autofill': {\n      key: ' ',\n      shiftKey: null,\n      collapsed: true,\n      format: {\n        list: false,\n        'code-block': false,\n        blockquote: false,\n        header: false,\n        table: false\n      },\n      prefix: /^\\s*?(\\d+\\.|-|\\*|\\[ ?\\]|\\[x\\])$/,\n\n      handler(range, context) {\n        if (this.quill.scroll.query('list') == null) return true;\n        const {\n          length\n        } = context.prefix;\n        const [line, offset] = this.quill.getLine(range.index);\n        if (offset > length) return true;\n        let value;\n\n        switch (context.prefix.trim()) {\n          case '[]':\n          case '[ ]':\n            value = 'unchecked';\n            break;\n\n          case '[x]':\n            value = 'checked';\n            break;\n\n          case '-':\n          case '*':\n            value = 'bullet';\n            break;\n\n          default:\n            value = 'ordered';\n        }\n\n        this.quill.insertText(range.index, ' ', _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index - offset).delete(length + 1).retain(line.length() - 2 - offset).retain(1, {\n          list: value\n        });\n        this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        this.quill.history.cutoff();\n        this.quill.setSelection(range.index - length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n        return false;\n      }\n\n    },\n    'code exit': {\n      key: 'Enter',\n      collapsed: true,\n      format: ['code-block'],\n      prefix: /^$/,\n      suffix: /^\\s*$/,\n\n      handler(range) {\n        const [line, offset] = this.quill.getLine(range.index);\n        let numLines = 2;\n        let cur = line;\n\n        while (cur != null && cur.length() <= 1 && cur.formats()['code-block']) {\n          cur = cur.prev;\n          numLines -= 1; // Requisite prev lines are empty\n\n          if (numLines <= 0) {\n            const delta = new quill_delta__WEBPACK_IMPORTED_MODULE_3___default.a().retain(range.index + line.length() - offset - 2).retain(1, {\n              'code-block': null\n            }).delete(1);\n            this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n            this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n            return false;\n          }\n        }\n\n        return true;\n      }\n\n    },\n    'embed left': makeEmbedArrowHandler('ArrowLeft', false),\n    'embed left shift': makeEmbedArrowHandler('ArrowLeft', true),\n    'embed right': makeEmbedArrowHandler('ArrowRight', false),\n    'embed right shift': makeEmbedArrowHandler('ArrowRight', true),\n    'table down': makeTableArrowHandler(false),\n    'table up': makeTableArrowHandler(true)\n  }\n};\n\nfunction makeCodeBlockHandler(indent) {\n  return {\n    key: 'Tab',\n    shiftKey: !indent,\n    format: {\n      'code-block': true\n    },\n\n    handler(range) {\n      const CodeBlock = this.quill.scroll.query('code-block');\n      const lines = range.length === 0 ? this.quill.getLines(range.index, 1) : this.quill.getLines(range);\n      let {\n        index,\n        length\n      } = range;\n      lines.forEach((line, i) => {\n        if (indent) {\n          line.insertAt(0, CodeBlock.TAB);\n\n          if (i === 0) {\n            index += CodeBlock.TAB.length;\n          } else {\n            length += CodeBlock.TAB.length;\n          }\n        } else if (line.domNode.textContent.startsWith(CodeBlock.TAB)) {\n          line.deleteAt(0, CodeBlock.TAB.length);\n\n          if (i === 0) {\n            index -= CodeBlock.TAB.length;\n          } else {\n            length -= CodeBlock.TAB.length;\n          }\n        }\n      });\n      this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      this.quill.setSelection(index, length, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.SILENT);\n    }\n\n  };\n}\n\nfunction makeEmbedArrowHandler(key, shiftKey) {\n  const where = key === 'ArrowLeft' ? 'prefix' : 'suffix';\n  return {\n    key,\n    shiftKey,\n    altKey: null,\n    [where]: /^$/,\n\n    handler(range) {\n      let {\n        index\n      } = range;\n\n      if (key === 'ArrowRight') {\n        index += range.length + 1;\n      }\n\n      const [leaf] = this.quill.getLeaf(index);\n      if (!(leaf instanceof parchment__WEBPACK_IMPORTED_MODULE_4__[\"EmbedBlot\"])) return true;\n\n      if (key === 'ArrowLeft') {\n        if (shiftKey) {\n          this.quill.setSelection(range.index - 1, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        } else {\n          this.quill.setSelection(range.index - 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      } else if (shiftKey) {\n        this.quill.setSelection(range.index, range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      } else {\n        this.quill.setSelection(range.index + range.length + 1, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n      }\n\n      return false;\n    }\n\n  };\n}\n\nfunction makeFormatHandler(format) {\n  return {\n    key: format[0],\n    shortKey: true,\n\n    handler(range, context) {\n      this.quill.format(format, !context.format[format], _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n    }\n\n  };\n}\n\nfunction makeTableArrowHandler(up) {\n  return {\n    key: up ? 'ArrowUp' : 'ArrowDown',\n    collapsed: true,\n    format: ['table'],\n\n    handler(range, context) {\n      // TODO move to table module\n      const key = up ? 'prev' : 'next';\n      const cell = context.line;\n      const targetRow = cell.parent[key];\n\n      if (targetRow != null) {\n        if (targetRow.statics.blotName === 'table-row') {\n          let targetCell = targetRow.children.head;\n          let cur = cell;\n\n          while (cur.prev != null) {\n            cur = cur.prev;\n            targetCell = targetCell.next;\n          }\n\n          const index = targetCell.offset(this.quill.scroll) + Math.min(context.offset, targetCell.length() - 1);\n          this.quill.setSelection(index, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n        }\n      } else {\n        const targetLine = cell.table()[key];\n\n        if (targetLine != null) {\n          if (up) {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll) + targetLine.length() - 1, 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          } else {\n            this.quill.setSelection(targetLine.offset(this.quill.scroll), 0, _core_quill__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sources.USER);\n          }\n        }\n      }\n\n      return false;\n    }\n\n  };\n}\n\nfunction normalize(binding) {\n  if (typeof binding === 'string' || typeof binding === 'number') {\n    binding = {\n      key: binding\n    };\n  } else if (typeof binding === 'object') {\n    binding = clone__WEBPACK_IMPORTED_MODULE_0___default()(binding, false);\n  } else {\n    return null;\n  }\n\n  if (binding.shortKey) {\n    binding[SHORTKEY] = binding.shortKey;\n    delete binding.shortKey;\n  }\n\n  return binding;\n}\n\nfunction tableSide(table, row, cell, offset) {\n  if (row.prev == null && row.next == null) {\n    if (cell.prev == null && cell.next == null) {\n      return offset === 0 ? -1 : 1;\n    }\n\n    return cell.prev == null ? -1 : 1;\n  }\n\n  if (row.prev == null) {\n    return -1;\n  }\n\n  if (row.next == null) {\n    return 1;\n  }\n\n  return null;\n}\n\n\n\n//# sourceURL=webpack://Quill/./modules/keyboard.js?");
	
	/***/ }),
	
	/***/ "./modules/syntax.js":
	/*!***************************!*\
	  !*** ./modules/syntax.js ***!
	  \***************************/
	/*! exports provided: CodeBlock, CodeToken, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeBlock\", function() { return SyntaxCodeBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodeToken\", function() { return CodeToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Syntax; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _blots_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blots/inline */ \"./blots/inline.js\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _blots_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blots/block */ \"./blots/block.js\");\n/* harmony import */ var _blots_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blots/break */ \"./blots/break.js\");\n/* harmony import */ var _blots_cursor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blots/cursor */ \"./blots/cursor.js\");\n/* harmony import */ var _blots_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blots/text */ \"./blots/text.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../formats/code */ \"./formats/code.js\");\n/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clipboard */ \"./modules/clipboard.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst TokenAttributor = new parchment__WEBPACK_IMPORTED_MODULE_1__[\"ClassAttributor\"]('code-token', 'hljs', {\n  scope: parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE\n});\n\nclass CodeToken extends _blots_inline__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static formats(node, scroll) {\n    while (node != null && node !== scroll.domNode) {\n      if (node.classList && node.classList.contains(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className)) {\n        return super.formats(node, scroll);\n      }\n\n      node = node.parentNode;\n    }\n\n    return undefined;\n  }\n\n  constructor(scroll, domNode, value) {\n    super(scroll, domNode, value);\n    TokenAttributor.add(this.domNode, value);\n  }\n\n  format(format, value) {\n    if (format !== CodeToken.blotName) {\n      super.format(format, value);\n    } else if (value) {\n      TokenAttributor.add(this.domNode, value);\n    } else {\n      TokenAttributor.remove(this.domNode);\n      this.domNode.classList.remove(this.statics.className);\n    }\n  }\n\n  optimize(...args) {\n    super.optimize(...args);\n\n    if (!TokenAttributor.value(this.domNode)) {\n      this.unwrap();\n    }\n  }\n\n}\n\nCodeToken.blotName = 'code-token';\nCodeToken.className = 'ql-token';\n\nclass SyntaxCodeBlock extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"] {\n  static create(value) {\n    const domNode = super.create(value);\n\n    if (typeof value === 'string') {\n      domNode.setAttribute('data-language', value);\n    }\n\n    return domNode;\n  }\n\n  static formats(domNode) {\n    return domNode.getAttribute('data-language') || 'plain';\n  }\n\n  static register() {} // Syntax module will register\n\n\n  format(name, value) {\n    if (name === this.statics.blotName && value) {\n      this.domNode.setAttribute('data-language', value);\n    } else {\n      super.format(name, value);\n    }\n  }\n\n  replaceWith(name, value) {\n    this.formatAt(0, this.length(), CodeToken.blotName, false);\n    return super.replaceWith(name, value);\n  }\n\n}\n\nclass SyntaxCodeBlockContainer extends _formats_code__WEBPACK_IMPORTED_MODULE_9__[\"CodeBlockContainer\"] {\n  attach() {\n    super.attach();\n    this.forceNext = false;\n    this.scroll.emitMount(this);\n  }\n\n  format(name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n      this.children.forEach(child => {\n        child.format(name, value);\n      });\n    }\n  }\n\n  formatAt(index, length, name, value) {\n    if (name === SyntaxCodeBlock.blotName) {\n      this.forceNext = true;\n    }\n\n    super.formatAt(index, length, name, value);\n  }\n\n  highlight(highlight, forced = false) {\n    if (this.children.head == null) return;\n    const nodes = Array.from(this.domNode.childNodes).filter(node => node !== this.uiNode);\n    const text = \"\".concat(nodes.map(node => node.textContent).join('\\n'), \"\\n\");\n    const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n\n    if (forced || this.forceNext || this.cachedText !== text) {\n      if (text.trim().length > 0 || this.cachedText == null) {\n        const oldDelta = this.children.reduce((delta, child) => {\n          return delta.concat(Object(_blots_block__WEBPACK_IMPORTED_MODULE_5__[\"blockDelta\"])(child, false));\n        }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n        const delta = highlight(text, language);\n        oldDelta.diff(delta).reduce((index, {\n          retain,\n          attributes\n        }) => {\n          // Should be all retains\n          if (!retain) return index;\n\n          if (attributes) {\n            Object.keys(attributes).forEach(format => {\n              if ([SyntaxCodeBlock.blotName, CodeToken.blotName].includes(format)) {\n                this.formatAt(index, retain, format, attributes[format]);\n              }\n            });\n          }\n\n          return index + retain;\n        }, 0);\n      }\n\n      this.cachedText = text;\n      this.forceNext = false;\n    }\n  }\n\n  optimize(context) {\n    super.optimize(context);\n\n    if (this.parent != null && this.children.head != null && this.uiNode != null) {\n      const language = SyntaxCodeBlock.formats(this.children.head.domNode);\n\n      if (language !== this.uiNode.value) {\n        this.uiNode.value = language;\n      }\n    }\n  }\n\n}\n\nSyntaxCodeBlockContainer.allowedChildren = [SyntaxCodeBlock];\nSyntaxCodeBlock.requiredContainer = SyntaxCodeBlockContainer;\nSyntaxCodeBlock.allowedChildren = [CodeToken, _blots_cursor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _blots_text__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _blots_break__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n\nclass Syntax extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(CodeToken, true);\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlock, true);\n    _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].register(SyntaxCodeBlockContainer, true);\n  }\n\n  constructor(quill, options) {\n    super(quill, options);\n\n    if (this.options.hljs == null) {\n      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');\n    }\n\n    this.languages = this.options.languages.reduce((memo, {\n      key\n    }) => {\n      memo[key] = true;\n      return memo;\n    }, {});\n    this.highlightBlot = this.highlightBlot.bind(this);\n    this.initListener();\n    this.initTimer();\n  }\n\n  initListener() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_BLOT_MOUNT, blot => {\n      if (!(blot instanceof SyntaxCodeBlockContainer)) return;\n      const select = this.quill.root.ownerDocument.createElement('select');\n      this.options.languages.forEach(({\n        key,\n        label\n      }) => {\n        const option = select.ownerDocument.createElement('option');\n        option.textContent = label;\n        option.setAttribute('value', key);\n        select.appendChild(option);\n      });\n      select.addEventListener('change', () => {\n        blot.format(SyntaxCodeBlock.blotName, select.value);\n        this.quill.root.focus(); // Prevent scrolling\n\n        this.highlight(blot, true);\n      });\n\n      if (blot.uiNode == null) {\n        blot.attachUI(select);\n\n        if (blot.children.head) {\n          select.value = SyntaxCodeBlock.formats(blot.children.head.domNode);\n        }\n      }\n    });\n  }\n\n  initTimer() {\n    let timer = null;\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      clearTimeout(timer);\n      timer = setTimeout(() => {\n        this.highlight();\n        timer = null;\n      }, this.options.interval);\n    });\n  }\n\n  highlight(blot = null, force = false) {\n    if (this.quill.selection.composing) return;\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.USER);\n    const range = this.quill.getSelection();\n    const blots = blot == null ? this.quill.scroll.descendants(SyntaxCodeBlockContainer) : [blot];\n    blots.forEach(container => {\n      container.highlight(this.highlightBlot, force);\n    });\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n\n    if (range != null) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sources.SILENT);\n    }\n  }\n\n  highlightBlot(text, language = 'plain') {\n    language = this.languages[language] ? language : 'plain';\n\n    if (language === 'plain') {\n      return Object(_blots_text__WEBPACK_IMPORTED_MODULE_8__[\"escapeText\"])(text).split('\\n').reduce((delta, line, i) => {\n        if (i !== 0) {\n          delta.insert('\\n', {\n            [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n          });\n        }\n\n        return delta.insert(line);\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a());\n    }\n\n    const container = this.quill.root.ownerDocument.createElement('div');\n    container.classList.add(_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].className);\n    container.innerHTML = this.options.hljs.highlight(language, text).value;\n    return Object(_clipboard__WEBPACK_IMPORTED_MODULE_10__[\"traverse\"])(this.quill.scroll, container, [(node, delta) => {\n      const value = TokenAttributor.value(node);\n\n      if (value) {\n        return delta.compose(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(delta.length(), {\n          [CodeToken.blotName]: value\n        }));\n      }\n\n      return delta;\n    }], [(node, delta) => {\n      return node.data.split('\\n').reduce((memo, nodeText, i) => {\n        if (i !== 0) memo.insert('\\n', {\n          [_formats_code__WEBPACK_IMPORTED_MODULE_9__[\"default\"].blotName]: language\n        });\n        return memo.insert(nodeText);\n      }, delta);\n    }], new WeakMap());\n  }\n\n}\n\nSyntax.DEFAULTS = {\n  hljs: (() => {\n    return window.hljs;\n  })(),\n  interval: 1000,\n  languages: [{\n    key: 'plain',\n    label: 'Plain'\n  }, {\n    key: 'bash',\n    label: 'Bash'\n  }, {\n    key: 'cpp',\n    label: 'C++'\n  }, {\n    key: 'cs',\n    label: 'C#'\n  }, {\n    key: 'css',\n    label: 'CSS'\n  }, {\n    key: 'diff',\n    label: 'Diff'\n  }, {\n    key: 'xml',\n    label: 'HTML/XML'\n  }, {\n    key: 'java',\n    label: 'Java'\n  }, {\n    key: 'javascript',\n    label: 'Javascript'\n  }, {\n    key: 'markdown',\n    label: 'Markdown'\n  }, {\n    key: 'php',\n    label: 'PHP'\n  }, {\n    key: 'python',\n    label: 'Python'\n  }, {\n    key: 'ruby',\n    label: 'Ruby'\n  }, {\n    key: 'sql',\n    label: 'SQL'\n  }]\n};\n\n\n//# sourceURL=webpack://Quill/./modules/syntax.js?");
	
	/***/ }),
	
	/***/ "./modules/table.js":
	/*!**************************!*\
	  !*** ./modules/table.js ***!
	  \**************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n/* harmony import */ var _formats_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/table */ \"./formats/table.js\");\n\n\n\n\n\nclass Table extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  static register() {\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableRow\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableBody\"]);\n    _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]);\n  }\n\n  constructor(...args) {\n    super(...args);\n    this.listenBalanceCells();\n  }\n\n  balanceTables() {\n    this.quill.scroll.descendants(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableContainer\"]).forEach(table => {\n      table.balanceCells();\n    });\n  }\n\n  deleteColumn() {\n    const [table,, cell] = this.getTable();\n    if (cell == null) return;\n    table.deleteColumn(cell.cellOffset());\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n\n  deleteRow() {\n    const [, row] = this.getTable();\n    if (row == null) return;\n    row.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n  }\n\n  deleteTable() {\n    const [table] = this.getTable();\n    if (table == null) return;\n    const offset = table.offset();\n    table.remove();\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(offset, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n\n  getTable(range = this.quill.getSelection()) {\n    if (range == null) return [null, null, null, -1];\n    const [cell, offset] = this.quill.getLine(range.index);\n\n    if (cell == null || cell.statics.blotName !== _formats_table__WEBPACK_IMPORTED_MODULE_3__[\"TableCell\"].blotName) {\n      return [null, null, null, -1];\n    }\n\n    const row = cell.parent;\n    const table = row.parent.parent;\n    return [table, row, cell, offset];\n  }\n\n  insertColumn(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const column = cell.cellOffset();\n    table.insertColumn(column + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    let shift = row.rowOffset();\n\n    if (offset === 0) {\n      shift += 1;\n    }\n\n    this.quill.setSelection(range.index + shift, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n  }\n\n  insertColumnLeft() {\n    this.insertColumn(0);\n  }\n\n  insertColumnRight() {\n    this.insertColumn(1);\n  }\n\n  insertRow(offset) {\n    const range = this.quill.getSelection();\n    const [table, row, cell] = this.getTable(range);\n    if (cell == null) return;\n    const index = row.rowOffset();\n    table.insertRow(index + offset);\n    this.quill.update(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n\n    if (offset > 0) {\n      this.quill.setSelection(range, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    } else {\n      this.quill.setSelection(range.index + row.children.length, range.length, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    }\n  }\n\n  insertRowAbove() {\n    this.insertRow(0);\n  }\n\n  insertRowBelow() {\n    this.insertRow(1);\n  }\n\n  insertTable(rows, columns) {\n    const range = this.quill.getSelection();\n    if (range == null) return;\n    const delta = new Array(rows).fill(0).reduce(memo => {\n      const text = new Array(columns).fill('\\n').join('');\n      return memo.insert(text, {\n        table: Object(_formats_table__WEBPACK_IMPORTED_MODULE_3__[\"tableId\"])()\n      });\n    }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index));\n    this.quill.updateContents(delta, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n    this.quill.setSelection(range.index, _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    this.balanceTables();\n  }\n\n  listenBalanceCells() {\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, mutations => {\n      mutations.some(mutation => {\n        if (['TD', 'TR', 'TBODY', 'TABLE'].includes(mutation.target.tagName)) {\n          this.quill.once(_core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.TEXT_CHANGE, (delta, old, source) => {\n            if (source !== _core_quill__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) return;\n            this.balanceTables();\n          });\n          return true;\n        }\n\n        return false;\n      });\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);\n\n//# sourceURL=webpack://Quill/./modules/table.js?");
	
	/***/ }),
	
	/***/ "./modules/toolbar.js":
	/*!****************************!*\
	  !*** ./modules/toolbar.js ***!
	  \****************************/
	/*! exports provided: default, addControls */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Toolbar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addControls\", function() { return addControls; });\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var parchment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parchment */ \"./node_modules/parchment/src/parchment.ts\");\n/* harmony import */ var _core_quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/quill */ \"./core/quill.js\");\n/* harmony import */ var _core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/logger */ \"./core/logger.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\n\nconst debug = Object(_core_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('quill:toolbar');\n\nclass Toolbar extends _core_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n\n    if (Array.isArray(this.options.container)) {\n      const container = document.createElement('div');\n      addControls(container, this.options.container);\n      quill.container.parentNode.insertBefore(container, quill.container);\n      this.container = container;\n    } else if (typeof this.options.container === 'string') {\n      this.container = document.querySelector(this.options.container);\n    } else {\n      this.container = this.options.container;\n    }\n\n    if (!(this.container instanceof HTMLElement)) {\n      return debug.error('Container required for toolbar', this.options);\n    }\n\n    this.container.classList.add('ql-toolbar');\n    this.controls = [];\n    this.handlers = {};\n    Object.keys(this.options.handlers).forEach(format => {\n      this.addHandler(format, this.options.handlers[format]);\n    });\n    Array.from(this.container.querySelectorAll('button, select')).forEach(input => {\n      this.attach(input);\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.EDITOR_CHANGE, (type, range) => {\n      if (type === _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SELECTION_CHANGE) {\n        this.update(range);\n      }\n    });\n    this.quill.on(_core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      const [range] = this.quill.selection.getRange(); // quill.getSelection triggers update\n\n      this.update(range);\n    });\n  }\n\n  addHandler(format, handler) {\n    this.handlers[format] = handler;\n  }\n\n  attach(input) {\n    let format = Array.from(input.classList).find(className => {\n      return className.indexOf('ql-') === 0;\n    });\n    if (!format) return;\n    format = format.slice('ql-'.length);\n\n    if (input.tagName === 'BUTTON') {\n      input.setAttribute('type', 'button');\n    }\n\n    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {\n      debug.warn('ignoring attaching to nonexistent format', format, input);\n      return;\n    }\n\n    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';\n    input.addEventListener(eventName, e => {\n      let value;\n\n      if (input.tagName === 'SELECT') {\n        if (input.selectedIndex < 0) return;\n        const selected = input.options[input.selectedIndex];\n\n        if (selected.hasAttribute('selected')) {\n          value = false;\n        } else {\n          value = selected.value || false;\n        }\n      } else {\n        if (input.classList.contains('ql-active')) {\n          value = false;\n        } else {\n          value = input.value || !input.hasAttribute('value');\n        }\n\n        e.preventDefault();\n      }\n\n      this.quill.focus();\n      const [range] = this.quill.selection.getRange();\n\n      if (this.handlers[format] != null) {\n        this.handlers[format].call(this, value);\n      } else if (this.quill.scroll.query(format).prototype instanceof parchment__WEBPACK_IMPORTED_MODULE_1__[\"EmbedBlot\"]) {\n        value = prompt(\"Enter \".concat(format)); // eslint-disable-line no-alert\n\n        if (!value) return;\n        this.quill.updateContents(new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length).insert({\n          [format]: value\n        }), _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else {\n        this.quill.format(format, value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n\n      this.update(range);\n    });\n    this.controls.push([format, input]);\n  }\n\n  update(range) {\n    const formats = range == null ? {} : this.quill.getFormat(range);\n    this.controls.forEach(pair => {\n      const [format, input] = pair;\n\n      if (input.tagName === 'SELECT') {\n        let option;\n\n        if (range == null) {\n          option = null;\n        } else if (formats[format] == null) {\n          option = input.querySelector('option[selected]');\n        } else if (!Array.isArray(formats[format])) {\n          let value = formats[format];\n\n          if (typeof value === 'string') {\n            value = value.replace(/\"/g, '\\\\\"');\n          }\n\n          option = input.querySelector(\"option[value=\\\"\".concat(value, \"\\\"]\"));\n        }\n\n        if (option == null) {\n          input.value = ''; // TODO make configurable?\n\n          input.selectedIndex = -1;\n        } else {\n          option.selected = true;\n        }\n      } else if (range == null) {\n        input.classList.remove('ql-active');\n      } else if (input.hasAttribute('value')) {\n        // both being null should match (default values)\n        // '1' should match with 1 (headers)\n        const isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');\n        input.classList.toggle('ql-active', isActive);\n      } else {\n        input.classList.toggle('ql-active', formats[format] != null);\n      }\n    });\n  }\n\n}\n\nToolbar.DEFAULTS = {};\n\nfunction addButton(container, format, value) {\n  const input = document.createElement('button');\n  input.setAttribute('type', 'button');\n  input.classList.add(\"ql-\".concat(format));\n\n  if (value != null) {\n    input.value = value;\n  }\n\n  container.appendChild(input);\n}\n\nfunction addControls(container, groups) {\n  if (!Array.isArray(groups[0])) {\n    groups = [groups];\n  }\n\n  groups.forEach(controls => {\n    const group = document.createElement('span');\n    group.classList.add('ql-formats');\n    controls.forEach(control => {\n      if (typeof control === 'string') {\n        addButton(group, control);\n      } else {\n        const format = Object.keys(control)[0];\n        const value = control[format];\n\n        if (Array.isArray(value)) {\n          addSelect(group, format, value);\n        } else {\n          addButton(group, format, value);\n        }\n      }\n    });\n    container.appendChild(group);\n  });\n}\n\nfunction addSelect(container, format, values) {\n  const input = document.createElement('select');\n  input.classList.add(\"ql-\".concat(format));\n  values.forEach(value => {\n    const option = document.createElement('option');\n\n    if (value !== false) {\n      option.setAttribute('value', value);\n    } else {\n      option.setAttribute('selected', 'selected');\n    }\n\n    input.appendChild(option);\n  });\n  container.appendChild(input);\n}\n\nToolbar.DEFAULTS = {\n  container: null,\n  handlers: {\n    clean() {\n      const range = this.quill.getSelection();\n      if (range == null) return;\n\n      if (range.length === 0) {\n        const formats = this.quill.getFormat();\n        Object.keys(formats).forEach(name => {\n          // Clean functionality in existing apps only clean inline formats\n          if (this.quill.scroll.query(name, parchment__WEBPACK_IMPORTED_MODULE_1__[\"Scope\"].INLINE) != null) {\n            this.quill.format(name, false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n          }\n        });\n      } else {\n        this.quill.removeFormat(range, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n\n    direction(value) {\n      const {\n        align\n      } = this.quill.getFormat();\n\n      if (value === 'rtl' && align == null) {\n        this.quill.format('align', 'right', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      } else if (!value && align === 'right') {\n        this.quill.format('align', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n\n      this.quill.format('direction', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n\n    indent(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n      const indent = parseInt(formats.indent || 0, 10);\n\n      if (value === '+1' || value === '-1') {\n        let modifier = value === '+1' ? 1 : -1;\n        if (formats.direction === 'rtl') modifier *= -1;\n        this.quill.format('indent', indent + modifier, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    },\n\n    link(value) {\n      if (value === true) {\n        value = prompt('Enter link URL:'); // eslint-disable-line no-alert\n      }\n\n      this.quill.format('link', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n    },\n\n    list(value) {\n      const range = this.quill.getSelection();\n      const formats = this.quill.getFormat(range);\n\n      if (value === 'check') {\n        if (formats.list === 'checked' || formats.list === 'unchecked') {\n          this.quill.format('list', false, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        } else {\n          this.quill.format('list', 'unchecked', _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n        }\n      } else {\n        this.quill.format('list', value, _core_quill__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sources.USER);\n      }\n    }\n\n  }\n};\n\n\n//# sourceURL=webpack://Quill/./modules/toolbar.js?");
	
	/***/ }),
	
	/***/ "./modules/uploader.js":
	/*!*****************************!*\
	  !*** ./modules/uploader.js ***!
	  \*****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill-delta */ \"./node_modules/quill-delta/dist/Delta.js\");\n/* harmony import */ var quill_delta__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_delta__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/module */ \"./core/module.js\");\n\n\n\n\nclass Uploader extends _core_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n    quill.root.addEventListener('drop', e => {\n      e.preventDefault();\n      let native;\n\n      if (document.caretRangeFromPoint) {\n        native = document.caretRangeFromPoint(e.clientX, e.clientY);\n      } else if (document.caretPositionFromPoint) {\n        const position = document.caretPositionFromPoint(e.clientX, e.clientY);\n        native = document.createRange();\n        native.setStart(position.offsetNode, position.offset);\n        native.setEnd(position.offsetNode, position.offset);\n      } else {\n        return;\n      }\n\n      const normalized = quill.selection.normalizeNative(native);\n      const range = quill.selection.normalizedToRange(normalized);\n      this.upload(range, e.dataTransfer.files);\n    });\n  }\n\n  upload(range, files) {\n    const uploads = [];\n    Array.from(files).forEach(file => {\n      if (file && this.options.mimetypes.includes(file.type)) {\n        uploads.push(file);\n      }\n    });\n\n    if (uploads.length > 0) {\n      this.options.handler.call(this, range, uploads);\n    }\n  }\n\n}\n\nUploader.DEFAULTS = {\n  mimetypes: ['image/png', 'image/jpeg'],\n\n  handler(range, files) {\n    const promises = files.map(file => {\n      return new Promise(resolve => {\n        const reader = new FileReader();\n\n        reader.onload = e => {\n          resolve(e.target.result);\n        };\n\n        reader.readAsDataURL(file);\n      });\n    });\n    Promise.all(promises).then(images => {\n      const update = images.reduce((delta, image) => {\n        return delta.insert({\n          image\n        });\n      }, new quill_delta__WEBPACK_IMPORTED_MODULE_0___default.a().retain(range.index).delete(range.length));\n      this.quill.updateContents(update, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n      this.quill.setSelection(range.index + images.length, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.SILENT);\n    });\n  }\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploader);\n\n//# sourceURL=webpack://Quill/./modules/uploader.js?");
	
	/***/ }),
	
	/***/ "./node_modules/array-filter/index.js":
	/*!********************************************!*\
	  !*** ./node_modules/array-filter/index.js ***!
	  \********************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("\n/**\n * Array#filter.\n *\n * @param {Array} arr\n * @param {Function} fn\n * @param {Object=} self\n * @return {Array}\n * @throw TypeError\n */\n\nmodule.exports = function (arr, fn, self) {\n  if (arr.filter) return arr.filter(fn, self);\n  if (void 0 === arr || null === arr) throw new TypeError;\n  if ('function' != typeof fn) throw new TypeError;\n  var ret = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (!hasOwn.call(arr, i)) continue;\n    var val = arr[i];\n    if (fn.call(self, val, i, arr)) ret.push(val);\n  }\n  return ret;\n};\n\nvar hasOwn = Object.prototype.hasOwnProperty;\n\n\n//# sourceURL=webpack://Quill/./node_modules/array-filter/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/available-typed-arrays/index.js":
	/*!******************************************************!*\
	  !*** ./node_modules/available-typed-arrays/index.js ***!
	  \******************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar filter = __webpack_require__(/*! array-filter */ \"./node_modules/array-filter/index.js\");\n\nmodule.exports = function availableTypedArrays() {\n\treturn filter([\n\t\t'BigInt64Array',\n\t\t'BigUint64Array',\n\t\t'Float32Array',\n\t\t'Float64Array',\n\t\t'Int16Array',\n\t\t'Int32Array',\n\t\t'Int8Array',\n\t\t'Uint16Array',\n\t\t'Uint32Array',\n\t\t'Uint8Array',\n\t\t'Uint8ClampedArray'\n\t], function (typedArray) {\n\t\treturn typeof global[typedArray] === 'function';\n\t});\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/available-typed-arrays/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/clone/clone.js":
	/*!*************************************!*\
	  !*** ./node_modules/clone/clone.js ***!
	  \*************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("var clone = (function() {\n'use strict';\n\nfunction _instanceof(obj, type) {\n  return type != null && obj instanceof type;\n}\n\nvar nativeMap;\ntry {\n  nativeMap = Map;\n} catch(_) {\n  // maybe a reference error because no `Map`. Give it a dummy value that no\n  // value will ever be an instanceof.\n  nativeMap = function() {};\n}\n\nvar nativeSet;\ntry {\n  nativeSet = Set;\n} catch(_) {\n  nativeSet = function() {};\n}\n\nvar nativePromise;\ntry {\n  nativePromise = Promise;\n} catch(_) {\n  nativePromise = function() {};\n}\n\n/**\n * Clones (copies) an Object using deep copying.\n *\n * This function supports circular references by default, but if you are certain\n * there are no circular references in your object, you can save some CPU time\n * by calling clone(obj, false).\n *\n * Caution: if `circular` is false and `parent` contains circular references,\n * your program may enter an infinite loop and crash.\n *\n * @param `parent` - the object to be cloned\n * @param `circular` - set to true if the object to be cloned may contain\n *    circular references. (optional - true by default)\n * @param `depth` - set to a number if the object is only to be cloned to\n *    a particular depth. (optional - defaults to Infinity)\n * @param `prototype` - sets the prototype to be used when cloning an object.\n *    (optional - defaults to parent prototype).\n * @param `includeNonEnumerable` - set to true if the non-enumerable properties\n *    should be cloned as well. Non-enumerable properties on the prototype\n *    chain will be ignored. (optional - false by default)\n*/\nfunction clone(parent, circular, depth, prototype, includeNonEnumerable) {\n  if (typeof circular === 'object') {\n    depth = circular.depth;\n    prototype = circular.prototype;\n    includeNonEnumerable = circular.includeNonEnumerable;\n    circular = circular.circular;\n  }\n  // maintain two arrays for circular references, where corresponding parents\n  // and children have the same index\n  var allParents = [];\n  var allChildren = [];\n\n  var useBuffer = typeof Buffer != 'undefined';\n\n  if (typeof circular == 'undefined')\n    circular = true;\n\n  if (typeof depth == 'undefined')\n    depth = Infinity;\n\n  // recurse this function so we don't reset allParents and allChildren\n  function _clone(parent, depth) {\n    // cloning null always returns null\n    if (parent === null)\n      return null;\n\n    if (depth === 0)\n      return parent;\n\n    var child;\n    var proto;\n    if (typeof parent != 'object') {\n      return parent;\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      child = new nativeMap();\n    } else if (_instanceof(parent, nativeSet)) {\n      child = new nativeSet();\n    } else if (_instanceof(parent, nativePromise)) {\n      child = new nativePromise(function (resolve, reject) {\n        parent.then(function(value) {\n          resolve(_clone(value, depth - 1));\n        }, function(err) {\n          reject(_clone(err, depth - 1));\n        });\n      });\n    } else if (clone.__isArray(parent)) {\n      child = [];\n    } else if (clone.__isRegExp(parent)) {\n      child = new RegExp(parent.source, __getRegExpFlags(parent));\n      if (parent.lastIndex) child.lastIndex = parent.lastIndex;\n    } else if (clone.__isDate(parent)) {\n      child = new Date(parent.getTime());\n    } else if (useBuffer && Buffer.isBuffer(parent)) {\n      if (Buffer.allocUnsafe) {\n        // Node.js >= 4.5.0\n        child = Buffer.allocUnsafe(parent.length);\n      } else {\n        // Older Node.js versions\n        child = new Buffer(parent.length);\n      }\n      parent.copy(child);\n      return child;\n    } else if (_instanceof(parent, Error)) {\n      child = Object.create(parent);\n    } else {\n      if (typeof prototype == 'undefined') {\n        proto = Object.getPrototypeOf(parent);\n        child = Object.create(proto);\n      }\n      else {\n        child = Object.create(prototype);\n        proto = prototype;\n      }\n    }\n\n    if (circular) {\n      var index = allParents.indexOf(parent);\n\n      if (index != -1) {\n        return allChildren[index];\n      }\n      allParents.push(parent);\n      allChildren.push(child);\n    }\n\n    if (_instanceof(parent, nativeMap)) {\n      parent.forEach(function(value, key) {\n        var keyChild = _clone(key, depth - 1);\n        var valueChild = _clone(value, depth - 1);\n        child.set(keyChild, valueChild);\n      });\n    }\n    if (_instanceof(parent, nativeSet)) {\n      parent.forEach(function(value) {\n        var entryChild = _clone(value, depth - 1);\n        child.add(entryChild);\n      });\n    }\n\n    for (var i in parent) {\n      var attrs;\n      if (proto) {\n        attrs = Object.getOwnPropertyDescriptor(proto, i);\n      }\n\n      if (attrs && attrs.set == null) {\n        continue;\n      }\n      child[i] = _clone(parent[i], depth - 1);\n    }\n\n    if (Object.getOwnPropertySymbols) {\n      var symbols = Object.getOwnPropertySymbols(parent);\n      for (var i = 0; i < symbols.length; i++) {\n        // Don't need to worry about cloning a symbol because it is a primitive,\n        // like a number or string.\n        var symbol = symbols[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);\n        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {\n          continue;\n        }\n        child[symbol] = _clone(parent[symbol], depth - 1);\n        if (!descriptor.enumerable) {\n          Object.defineProperty(child, symbol, {\n            enumerable: false\n          });\n        }\n      }\n    }\n\n    if (includeNonEnumerable) {\n      var allPropertyNames = Object.getOwnPropertyNames(parent);\n      for (var i = 0; i < allPropertyNames.length; i++) {\n        var propertyName = allPropertyNames[i];\n        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);\n        if (descriptor && descriptor.enumerable) {\n          continue;\n        }\n        child[propertyName] = _clone(parent[propertyName], depth - 1);\n        Object.defineProperty(child, propertyName, {\n          enumerable: false\n        });\n      }\n    }\n\n    return child;\n  }\n\n  return _clone(parent, depth);\n}\n\n/**\n * Simple flat clone using prototype, accepts only objects, usefull for property\n * override on FLAT configuration object (no nested props).\n *\n * USE WITH CAUTION! This may not behave as you wish if you do not know how this\n * works.\n */\nclone.clonePrototype = function clonePrototype(parent) {\n  if (parent === null)\n    return null;\n\n  var c = function () {};\n  c.prototype = parent;\n  return new c();\n};\n\n// private utility functions\n\nfunction __objToStr(o) {\n  return Object.prototype.toString.call(o);\n}\nclone.__objToStr = __objToStr;\n\nfunction __isDate(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Date]';\n}\nclone.__isDate = __isDate;\n\nfunction __isArray(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object Array]';\n}\nclone.__isArray = __isArray;\n\nfunction __isRegExp(o) {\n  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';\n}\nclone.__isRegExp = __isRegExp;\n\nfunction __getRegExpFlags(re) {\n  var flags = '';\n  if (re.global) flags += 'g';\n  if (re.ignoreCase) flags += 'i';\n  if (re.multiline) flags += 'm';\n  return flags;\n}\nclone.__getRegExpFlags = __getRegExpFlags;\n\nreturn clone;\n})();\n\nif (typeof module === 'object' && module.exports) {\n  module.exports = clone;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/clone/clone.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/index.js":
	/*!******************************************!*\
	  !*** ./node_modules/deep-equal/index.js ***!
	  \******************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar objectKeys = __webpack_require__(/*! object-keys */ \"./node_modules/deep-equal/node_modules/object-keys/index.js\");\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\nvar is = __webpack_require__(/*! object-is */ \"./node_modules/object-is/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"./node_modules/deep-equal/node_modules/is-regex/index.js\");\nvar flags = __webpack_require__(/*! regexp.prototype.flags */ \"./node_modules/regexp.prototype.flags/index.js\");\nvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/deep-equal/node_modules/isarray/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/deep-equal/node_modules/is-date-object/index.js\");\nvar whichBoxedPrimitive = __webpack_require__(/*! which-boxed-primitive */ \"./node_modules/which-boxed-primitive/index.js\");\nvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js\");\nvar whichCollection = __webpack_require__(/*! which-collection */ \"./node_modules/which-collection/index.js\");\nvar getIterator = __webpack_require__(/*! es-get-iterator */ \"./node_modules/es-get-iterator/index.js\");\nvar getSideChannel = __webpack_require__(/*! side-channel */ \"./node_modules/side-channel/index.js\");\nvar whichTypedArray = __webpack_require__(/*! which-typed-array */ \"./node_modules/which-typed-array/index.js\");\nvar assign = __webpack_require__(/*! object.assign */ \"./node_modules/object.assign/index.js\");\n\nvar $getTime = callBound('Date.prototype.getTime');\nvar gPO = Object.getPrototypeOf;\nvar $objToString = callBound('Object.prototype.toString');\n\nvar $Set = GetIntrinsic('%Set%', true);\nvar $mapHas = callBound('Map.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSize = callBound('Map.prototype.size', true);\nvar $setAdd = callBound('Set.prototype.add', true);\nvar $setDelete = callBound('Set.prototype.delete', true);\nvar $setHas = callBound('Set.prototype.has', true);\nvar $setSize = callBound('Set.prototype.size', true);\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414\nfunction setHasEqualElement(set, val1, opts, channel) {\n  var i = getIterator(set);\n  var result;\n  while ((result = i.next()) && !result.done) {\n    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define\n      // Remove the matching element to make sure we do not check that again.\n      $setDelete(set, result.value);\n      return true;\n    }\n  }\n\n  return false;\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439\nfunction findLooseMatchingPrimitives(prim) {\n  if (typeof prim === 'undefined') {\n    return null;\n  }\n  if (typeof prim === 'object') { // Only pass in null as object!\n    return void 0;\n  }\n  if (typeof prim === 'symbol') {\n    return false;\n  }\n  if (typeof prim === 'string' || typeof prim === 'number') {\n    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.\n    return +prim === +prim; // eslint-disable-line no-implicit-coercion\n  }\n  return true;\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460\nfunction mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {\n  var altValue = findLooseMatchingPrimitives(prim);\n  if (altValue != null) {\n    return altValue;\n  }\n  var curB = $mapGet(b, altValue);\n  var looseOpts = assign({}, opts, { strict: false });\n  if (\n    (typeof curB === 'undefined' && !$mapHas(b, altValue))\n    // eslint-disable-next-line no-use-before-define\n    || !internalDeepEqual(item, curB, looseOpts, channel)\n  ) {\n    return false;\n  }\n  // eslint-disable-next-line no-use-before-define\n  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447\nfunction setMightHaveLoosePrim(a, b, prim) {\n  var altValue = findLooseMatchingPrimitives(prim);\n  if (altValue != null) {\n    return altValue;\n  }\n\n  return $setHas(b, altValue) && !$setHas(a, altValue);\n}\n\n// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533\nfunction mapHasEqualEntry(set, map, key1, item1, opts, channel) {\n  var i = getIterator(set);\n  var result;\n  var key2;\n  while ((result = i.next()) && !result.done) {\n    key2 = result.value;\n    if (\n      // eslint-disable-next-line no-use-before-define\n      internalDeepEqual(key1, key2, opts, channel)\n      // eslint-disable-next-line no-use-before-define\n      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)\n    ) {\n      $setDelete(set, key2);\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction internalDeepEqual(actual, expected, options, channel) {\n  var opts = options || {};\n\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (opts.strict ? is(actual, expected) : actual === expected) {\n    return true;\n  }\n\n  var actualBoxed = whichBoxedPrimitive(actual);\n  var expectedBoxed = whichBoxedPrimitive(expected);\n  if (actualBoxed !== expectedBoxed) {\n    return false;\n  }\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.\n  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {\n    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq\n  }\n\n  /*\n   * 7.4. For all other Object pairs, including Array objects, equivalence is\n   * determined by having the same number of owned properties (as verified\n   * with Object.prototype.hasOwnProperty.call), the same set of keys\n   * (although not necessarily the same order), equivalent values for every\n   * corresponding key, and an identical 'prototype' property. Note: this\n   * accounts for both named and indexed properties on Arrays.\n   */\n  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration\n\n  var hasActual = channel.has(actual);\n  var hasExpected = channel.has(expected);\n  var sentinel;\n  if (hasActual && hasExpected) {\n    if (channel.get(actual) === channel.get(expected)) {\n      return true;\n    }\n  } else {\n    sentinel = {};\n  }\n  if (!hasActual) { channel.set(actual, sentinel); }\n  if (!hasExpected) { channel.set(expected, sentinel); }\n\n  // eslint-disable-next-line no-use-before-define\n  return objEquiv(actual, expected, opts, channel);\n}\n\nfunction isBuffer(x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {\n    return false;\n  }\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') {\n    return false;\n  }\n\n  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));\n}\n\nfunction setEquiv(a, b, opts, channel) {\n  if ($setSize(a) !== $setSize(b)) {\n    return false;\n  }\n  var iA = getIterator(a);\n  var iB = getIterator(b);\n  var resultA;\n  var resultB;\n  var set;\n  while ((resultA = iA.next()) && !resultA.done) {\n    if (resultA.value && typeof resultA.value === 'object') {\n      if (!set) { set = new $Set(); }\n      $setAdd(set, resultA.value);\n    } else if (!$setHas(b, resultA.value)) {\n      if (opts.strict) { return false; }\n      if (!setMightHaveLoosePrim(a, b, resultA.value)) {\n        return false;\n      }\n      if (!set) { set = new $Set(); }\n      $setAdd(set, resultA.value);\n    }\n  }\n  if (set) {\n    while ((resultB = iB.next()) && !resultB.done) {\n      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.\n      if (resultB.value && typeof resultB.value === 'object') {\n        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {\n          return false;\n        }\n      } else if (\n        !opts.strict\n        && !$setHas(a, resultB.value)\n        && !setHasEqualElement(set, resultB.value, opts.strict, channel)\n      ) {\n        return false;\n      }\n    }\n    return $setSize(set) === 0;\n  }\n  return true;\n}\n\nfunction mapEquiv(a, b, opts, channel) {\n  if ($mapSize(a) !== $mapSize(b)) {\n    return false;\n  }\n  var iA = getIterator(a);\n  var iB = getIterator(b);\n  var resultA;\n  var resultB;\n  var set;\n  var key;\n  var item1;\n  var item2;\n  while ((resultA = iA.next()) && !resultA.done) {\n    key = resultA.value[0];\n    item1 = resultA.value[1];\n    if (key && typeof key === 'object') {\n      if (!set) { set = new $Set(); }\n      $setAdd(set, key);\n    } else {\n      item2 = $mapGet(b, key);\n      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {\n        if (opts.strict) {\n          return false;\n        }\n        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {\n          return false;\n        }\n        if (!set) { set = new $Set(); }\n        $setAdd(set, key);\n      }\n    }\n  }\n\n  if (set) {\n    while ((resultB = iB.next()) && !resultB.done) {\n      key = resultB.value[0];\n      item2 = resultB.value[1];\n      if (key && typeof key === 'object') {\n        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {\n          return false;\n        }\n      } else if (\n        !opts.strict\n        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))\n        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)\n      ) {\n        return false;\n      }\n    }\n    return $setSize(set) === 0;\n  }\n  return true;\n}\n\nfunction objEquiv(a, b, opts, channel) {\n  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */\n  var i, key;\n\n  if (typeof a !== typeof b) { return false; }\n  if (a == null || b == null) { return false; }\n\n  if ($objToString(a) !== $objToString(b)) { return false; }\n\n  if (isArguments(a) !== isArguments(b)) { return false; }\n\n  var aIsArray = isArray(a);\n  var bIsArray = isArray(b);\n  if (aIsArray !== bIsArray) { return false; }\n\n  // TODO: replace when a cross-realm brand check is available\n  var aIsError = a instanceof Error;\n  var bIsError = b instanceof Error;\n  if (aIsError !== bIsError) { return false; }\n  if (aIsError || bIsError) {\n    if (a.name !== b.name || a.message !== b.message) { return false; }\n  }\n\n  var aIsRegex = isRegex(a);\n  var bIsRegex = isRegex(b);\n  if (aIsRegex !== bIsRegex) { return false; }\n  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {\n    return false;\n  }\n\n  var aIsDate = isDate(a);\n  var bIsDate = isDate(b);\n  if (aIsDate !== bIsDate) { return false; }\n  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here\n    if ($getTime(a) !== $getTime(b)) { return false; }\n  }\n  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }\n\n  if (whichTypedArray(a) !== whichTypedArray(b)) {\n    return false;\n  }\n\n  var aIsBuffer = isBuffer(a);\n  var bIsBuffer = isBuffer(b);\n  if (aIsBuffer !== bIsBuffer) { return false; }\n  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here\n    if (a.length !== b.length) { return false; }\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) { return false; }\n    }\n    return true;\n  }\n\n  if (typeof a !== typeof b) { return false; }\n\n  var ka = objectKeys(a);\n  var kb = objectKeys(b);\n  // having the same number of owned properties (keys incorporates hasOwnProperty)\n  if (ka.length !== kb.length) { return false; }\n\n  // the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  // ~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq\n  }\n\n  // equivalent values for every corresponding key, and ~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }\n  }\n\n  var aCollection = whichCollection(a);\n  var bCollection = whichCollection(b);\n  if (aCollection !== bCollection) {\n    return false;\n  }\n  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection\n    return setEquiv(a, b, opts, channel);\n  }\n  if (aCollection === 'Map') { // aCollection === bCollection\n    return mapEquiv(a, b, opts, channel);\n  }\n\n  return true;\n}\n\nmodule.exports = function deepEqual(a, b, opts) {\n  return internalDeepEqual(a, b, opts, getSideChannel());\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js":
	/*!**************************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js ***!
	  \**************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js":
	/*!******************************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js ***!
	  \******************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js":
	/*!*******************************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js ***!
	  \*******************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/deep-equal/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/deep-equal/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/es-abstract/helpers/callBound.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/is-date-object/index.js":
	/*!**********************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/is-date-object/index.js ***!
	  \**********************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateGetDayCall(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-date-object/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/is-regex/index.js":
	/*!****************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/is-regex/index.js ***!
	  \****************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar regexExec = RegExp.prototype.exec;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar tryRegexExecCall = function tryRegexExec(value) {\n\ttry {\n\t\tvar lastIndex = value.lastIndex;\n\t\tvalue.lastIndex = 0; // eslint-disable-line no-param-reassign\n\n\t\tregexExec.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t} finally {\n\t\tvalue.lastIndex = lastIndex; // eslint-disable-line no-param-reassign\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar regexClass = '[object RegExp]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isRegex(value) {\n\tif (!value || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\tif (!hasToStringTag) {\n\t\treturn toStr.call(value) === regexClass;\n\t}\n\n\tvar descriptor = gOPD(value, 'lastIndex');\n\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\tif (!hasLastIndexDataProperty) {\n\t\treturn false;\n\t}\n\n\treturn tryRegexExecCall(value);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/is-regex/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/isarray/index.js":
	/*!***************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/isarray/index.js ***!
	  \***************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/isarray/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/object-keys/implementation.js":
	/*!****************************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/object-keys/implementation.js ***!
	  \****************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/deep-equal/node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/implementation.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/object-keys/index.js":
	/*!*******************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/object-keys/index.js ***!
	  \*******************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/deep-equal/node_modules/object-keys/isArguments.js\");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ \"./node_modules/deep-equal/node_modules/object-keys/implementation.js\");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/deep-equal/node_modules/object-keys/isArguments.js":
	/*!*************************************************************************!*\
	  !*** ./node_modules/deep-equal/node_modules/object-keys/isArguments.js ***!
	  \*************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/deep-equal/node_modules/object-keys/isArguments.js?");
	
	/***/ }),
	
	/***/ "./node_modules/define-properties/index.js":
	/*!*************************************************!*\
	  !*** ./node_modules/define-properties/index.js ***!
	  \*************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';\n\nvar toStr = Object.prototype.toString;\nvar concat = Array.prototype.concat;\nvar origDefineProperty = Object.defineProperty;\n\nvar isFunction = function (fn) {\n\treturn typeof fn === 'function' && toStr.call(fn) === '[object Function]';\n};\n\nvar arePropertyDescriptorsSupported = function () {\n\tvar obj = {};\n\ttry {\n\t\torigDefineProperty(obj, 'x', { enumerable: false, value: obj });\n\t\t// eslint-disable-next-line no-unused-vars, no-restricted-syntax\n\t\tfor (var _ in obj) { // jscs:ignore disallowUnusedVariables\n\t\t\treturn false;\n\t\t}\n\t\treturn obj.x === obj;\n\t} catch (e) { /* this is IE 8. */\n\t\treturn false;\n\t}\n};\nvar supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();\n\nvar defineProperty = function (object, name, value, predicate) {\n\tif (name in object && (!isFunction(predicate) || !predicate())) {\n\t\treturn;\n\t}\n\tif (supportsDescriptors) {\n\t\torigDefineProperty(object, name, {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tvalue: value,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\tobject[name] = value;\n\t}\n};\n\nvar defineProperties = function (object, map) {\n\tvar predicates = arguments.length > 2 ? arguments[2] : {};\n\tvar props = keys(map);\n\tif (hasSymbols) {\n\t\tprops = concat.call(props, Object.getOwnPropertySymbols(map));\n\t}\n\tfor (var i = 0; i < props.length; i += 1) {\n\t\tdefineProperty(object, props[i], map[props[i]], predicates[props[i]]);\n\t}\n};\n\ndefineProperties.supportsDescriptors = !!supportsDescriptors;\n\nmodule.exports = defineProperties;\n\n\n//# sourceURL=webpack://Quill/./node_modules/define-properties/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/es-get-iterator/index.js":
	/*!***********************************************!*\
	  !*** ./node_modules/es-get-iterator/index.js ***!
	  \***********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n/* eslint global-require: 0 */\n// the code is structured this way so that bundlers can\n// alias out `has-symbols` to `() => true` or `() => false` if your target\n// environments' Symbol capabilities are known, and then use\n// dead code elimination on the rest of this module.\n//\n// Similarly, `isarray` can be aliased to `Array.isArray` if\n// available in all target environments.\n\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\n\nif (__webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")() || __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")()) {\n\tvar $iterator = Symbol.iterator;\n\t// Symbol is available natively or shammed\n\t// natively:\n\t//  - Chrome >= 38\n\t//  - Edge 12-14?, Edge >= 15 for sure\n\t//  - FF >= 36\n\t//  - Safari >= 9\n\t//  - node >= 0.12\n\tmodule.exports = function getIterator(iterable) {\n\t\t// alternatively, `iterable[$iterator]?.()`\n\t\tif (iterable != null && typeof iterable[$iterator] !== 'undefined') {\n\t\t\treturn iterable[$iterator]();\n\t\t}\n\t\tif (isArguments(iterable)) {\n\t\t\t// arguments objects lack Symbol.iterator\n\t\t\t// - node 0.12\n\t\t\treturn Array.prototype[$iterator].call(iterable);\n\t\t}\n\t};\n} else {\n\t// Symbol is not available, native or shammed\n\tvar isArray = __webpack_require__(/*! isarray */ \"./node_modules/es-get-iterator/node_modules/isarray/index.js\");\n\tvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\n\tvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\tvar $Map = GetIntrinsic('%Map%', true);\n\tvar $Set = GetIntrinsic('%Set%', true);\n\tvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js\");\n\tvar $arrayPush = callBound('Array.prototype.push');\n\tvar $charCodeAt = callBound('String.prototype.charCodeAt');\n\tvar $stringSlice = callBound('String.prototype.slice');\n\n\tvar advanceStringIndex = function advanceStringIndex(S, index) {\n\t\tvar length = S.length;\n\t\tif ((index + 1) >= length) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar first = $charCodeAt(S, index);\n\t\tif (first < 0xD800 || first > 0xDBFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\tvar second = $charCodeAt(S, index + 1);\n\t\tif (second < 0xDC00 || second > 0xDFFF) {\n\t\t\treturn index + 1;\n\t\t}\n\n\t\treturn index + 2;\n\t};\n\n\tvar getArrayIterator = function getArrayIterator(arraylike) {\n\t\tvar i = 0;\n\t\treturn {\n\t\t\tnext: function next() {\n\t\t\t\tvar done = i >= arraylike.length;\n\t\t\t\tvar value;\n\t\t\t\tif (!done) {\n\t\t\t\t\tvalue = arraylike[i];\n\t\t\t\t\ti += 1;\n\t\t\t\t}\n\t\t\t\treturn {\n\t\t\t\t\tdone: done,\n\t\t\t\t\tvalue: value\n\t\t\t\t};\n\t\t\t}\n\t\t};\n\t};\n\n\tvar getNonCollectionIterator = function getNonCollectionIterator(iterable) {\n\t\tif (isArray(iterable) || isArguments(iterable)) {\n\t\t\treturn getArrayIterator(iterable);\n\t\t}\n\t\tif (isString(iterable)) {\n\t\t\tvar i = 0;\n\t\t\treturn {\n\t\t\t\tnext: function next() {\n\t\t\t\t\tvar nextIndex = advanceStringIndex(iterable, i);\n\t\t\t\t\tvar value = $stringSlice(iterable, i, nextIndex);\n\t\t\t\t\ti = nextIndex;\n\t\t\t\t\treturn {\n\t\t\t\t\t\tdone: nextIndex > iterable.length,\n\t\t\t\t\t\tvalue: value\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t};\n\n\tif (!$Map && !$Set) {\n\t\t// the only language iterables are Array, String, arguments\n\t\t// - Safari <= 6.0\n\t\t// - Chrome < 38\n\t\t// - node < 0.12\n\t\t// - FF < 13\n\t\t// - IE < 11\n\t\t// - Edge < 11\n\n\t\tmodule.exports = getNonCollectionIterator;\n\t} else {\n\t\t// either Map or Set are available, but Symbol is not\n\t\t// - es6-shim on an ES5 browser\n\t\t// - Safari 6.2 (maybe 6.1?)\n\t\t// - FF v[13, 36)\n\t\t// - IE 11\n\t\t// - Edge 11\n\t\t// - Safari v[6, 9)\n\n\t\tvar isMap = __webpack_require__(/*! is-map */ \"./node_modules/is-map/index.js\");\n\t\tvar isSet = __webpack_require__(/*! is-set */ \"./node_modules/is-set/index.js\");\n\n\t\t// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach\n\t\tvar $mapForEach = callBound('Map.prototype.forEach', true);\n\t\tvar $setForEach = callBound('Set.prototype.forEach', true);\n\t\tif (typeof process === 'undefined' || !process.versions || !process.versions.node) { // \"if is not node\"\n\n\t\t\t// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either\n\t\t\t// returns a value, or throws a StopIteration object. These browsers\n\t\t\t// do not have any other mechanism for iteration.\n\t\t\tvar $mapIterator = callBound('Map.prototype.iterator', true);\n\t\t\tvar $setIterator = callBound('Set.prototype.iterator', true);\n\t\t\tvar getStopIterationIterator = function (iterator) {\n\t\t\t\tvar done = false;\n\t\t\t\treturn {\n\t\t\t\t\tnext: function next() {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tdone: done,\n\t\t\t\t\t\t\t\tvalue: done ? undefined : iterator.next()\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\t\tdone = true;\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tdone: true,\n\t\t\t\t\t\t\t\tvalue: undefined\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t};\n\t\t}\n\t\t// Firefox 27-35, and some older es6-shim versions, use a string \"@@iterator\" property\n\t\t// this returns a proper iterator object, so we should use it instead of forEach.\n\t\t// newer es6-shim versions use a string \"_es6-shim iterator_\" property.\n\t\tvar $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);\n\t\tvar $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);\n\n\t\tvar getCollectionIterator = function getCollectionIterator(iterable) {\n\t\t\tif (isMap(iterable)) {\n\t\t\t\tif ($mapIterator) {\n\t\t\t\t\treturn getStopIterationIterator($mapIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($mapAtAtIterator) {\n\t\t\t\t\treturn $mapAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($mapForEach) {\n\t\t\t\t\tvar entries = [];\n\t\t\t\t\t$mapForEach(iterable, function (v, k) {\n\t\t\t\t\t\t$arrayPush(entries, [k, v]);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(entries);\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (isSet(iterable)) {\n\t\t\t\tif ($setIterator) {\n\t\t\t\t\treturn getStopIterationIterator($setIterator(iterable));\n\t\t\t\t}\n\t\t\t\tif ($setAtAtIterator) {\n\t\t\t\t\treturn $setAtAtIterator(iterable);\n\t\t\t\t}\n\t\t\t\tif ($setForEach) {\n\t\t\t\t\tvar values = [];\n\t\t\t\t\t$setForEach(iterable, function (v) {\n\t\t\t\t\t\t$arrayPush(values, v);\n\t\t\t\t\t});\n\t\t\t\t\treturn getArrayIterator(values);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tmodule.exports = function getIterator(iterable) {\n\t\t\treturn getCollectionIterator(iterable) || getNonCollectionIterator(iterable);\n\t\t};\n\t}\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js":
	/*!*******************************************************************************!*\
	  !*** ./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js ***!
	  \*******************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js?");
	
	/***/ }),
	
	/***/ "./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js":
	/*!***********************************************************************************!*\
	  !*** ./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js ***!
	  \***********************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js?");
	
	/***/ }),
	
	/***/ "./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js":
	/*!************************************************************************************!*\
	  !*** ./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js ***!
	  \************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/es-get-iterator/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/es-abstract/helpers/callBound.js?");
	
	/***/ }),
	
	/***/ "./node_modules/es-get-iterator/node_modules/isarray/index.js":
	/*!********************************************************************!*\
	  !*** ./node_modules/es-get-iterator/node_modules/isarray/index.js ***!
	  \********************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/es-get-iterator/node_modules/isarray/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/eventemitter3/index.js":
	/*!*********************************************!*\
	  !*** ./node_modules/eventemitter3/index.js ***!
	  \*********************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("'use strict';\n\nvar has = Object.prototype.hasOwnProperty\n  , prefix = '~';\n\n/**\n * Constructor to create a storage for our `EE` objects.\n * An `Events` instance is a plain object whose properties are event names.\n *\n * @constructor\n * @private\n */\nfunction Events() {}\n\n//\n// We try to not inherit from `Object.prototype`. In some engines creating an\n// instance in this way is faster than calling `Object.create(null)` directly.\n// If `Object.create(null)` is not supported we prefix the event names with a\n// character to make sure that the built-in object properties are not\n// overridden or used as an attack vector.\n//\nif (Object.create) {\n  Events.prototype = Object.create(null);\n\n  //\n  // This hack is needed because the `__proto__` property is still inherited in\n  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.\n  //\n  if (!new Events().__proto__) prefix = false;\n}\n\n/**\n * Representation of a single event listener.\n *\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} [once=false] Specify if the listener is a one-time listener.\n * @constructor\n * @private\n */\nfunction EE(fn, context, once) {\n  this.fn = fn;\n  this.context = context;\n  this.once = once || false;\n}\n\n/**\n * Add a listener for a given event.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} context The context to invoke the listener with.\n * @param {Boolean} once Specify if the listener is a one-time listener.\n * @returns {EventEmitter}\n * @private\n */\nfunction addListener(emitter, event, fn, context, once) {\n  if (typeof fn !== 'function') {\n    throw new TypeError('The listener must be a function');\n  }\n\n  var listener = new EE(fn, context || emitter, once)\n    , evt = prefix ? prefix + event : event;\n\n  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;\n  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);\n  else emitter._events[evt] = [emitter._events[evt], listener];\n\n  return emitter;\n}\n\n/**\n * Clear event by name.\n *\n * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.\n * @param {(String|Symbol)} evt The Event name.\n * @private\n */\nfunction clearEvent(emitter, evt) {\n  if (--emitter._eventsCount === 0) emitter._events = new Events();\n  else delete emitter._events[evt];\n}\n\n/**\n * Minimal `EventEmitter` interface that is molded against the Node.js\n * `EventEmitter` interface.\n *\n * @constructor\n * @public\n */\nfunction EventEmitter() {\n  this._events = new Events();\n  this._eventsCount = 0;\n}\n\n/**\n * Return an array listing the events for which the emitter has registered\n * listeners.\n *\n * @returns {Array}\n * @public\n */\nEventEmitter.prototype.eventNames = function eventNames() {\n  var names = []\n    , events\n    , name;\n\n  if (this._eventsCount === 0) return names;\n\n  for (name in (events = this._events)) {\n    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);\n  }\n\n  if (Object.getOwnPropertySymbols) {\n    return names.concat(Object.getOwnPropertySymbols(events));\n  }\n\n  return names;\n};\n\n/**\n * Return the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Array} The registered listeners.\n * @public\n */\nEventEmitter.prototype.listeners = function listeners(event) {\n  var evt = prefix ? prefix + event : event\n    , handlers = this._events[evt];\n\n  if (!handlers) return [];\n  if (handlers.fn) return [handlers.fn];\n\n  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {\n    ee[i] = handlers[i].fn;\n  }\n\n  return ee;\n};\n\n/**\n * Return the number of listeners listening to a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Number} The number of listeners.\n * @public\n */\nEventEmitter.prototype.listenerCount = function listenerCount(event) {\n  var evt = prefix ? prefix + event : event\n    , listeners = this._events[evt];\n\n  if (!listeners) return 0;\n  if (listeners.fn) return 1;\n  return listeners.length;\n};\n\n/**\n * Calls each of the listeners registered for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @returns {Boolean} `true` if the event had listeners, else `false`.\n * @public\n */\nEventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return false;\n\n  var listeners = this._events[evt]\n    , len = arguments.length\n    , args\n    , i;\n\n  if (listeners.fn) {\n    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);\n\n    switch (len) {\n      case 1: return listeners.fn.call(listeners.context), true;\n      case 2: return listeners.fn.call(listeners.context, a1), true;\n      case 3: return listeners.fn.call(listeners.context, a1, a2), true;\n      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;\n      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;\n      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;\n    }\n\n    for (i = 1, args = new Array(len -1); i < len; i++) {\n      args[i - 1] = arguments[i];\n    }\n\n    listeners.fn.apply(listeners.context, args);\n  } else {\n    var length = listeners.length\n      , j;\n\n    for (i = 0; i < length; i++) {\n      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);\n\n      switch (len) {\n        case 1: listeners[i].fn.call(listeners[i].context); break;\n        case 2: listeners[i].fn.call(listeners[i].context, a1); break;\n        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;\n        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;\n        default:\n          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {\n            args[j - 1] = arguments[j];\n          }\n\n          listeners[i].fn.apply(listeners[i].context, args);\n      }\n    }\n  }\n\n  return true;\n};\n\n/**\n * Add a listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.on = function on(event, fn, context) {\n  return addListener(this, event, fn, context, false);\n};\n\n/**\n * Add a one-time listener for a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn The listener function.\n * @param {*} [context=this] The context to invoke the listener with.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.once = function once(event, fn, context) {\n  return addListener(this, event, fn, context, true);\n};\n\n/**\n * Remove the listeners of a given event.\n *\n * @param {(String|Symbol)} event The event name.\n * @param {Function} fn Only remove the listeners that match this function.\n * @param {*} context Only remove the listeners that have this context.\n * @param {Boolean} once Only remove one-time listeners.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {\n  var evt = prefix ? prefix + event : event;\n\n  if (!this._events[evt]) return this;\n  if (!fn) {\n    clearEvent(this, evt);\n    return this;\n  }\n\n  var listeners = this._events[evt];\n\n  if (listeners.fn) {\n    if (\n      listeners.fn === fn &&\n      (!once || listeners.once) &&\n      (!context || listeners.context === context)\n    ) {\n      clearEvent(this, evt);\n    }\n  } else {\n    for (var i = 0, events = [], length = listeners.length; i < length; i++) {\n      if (\n        listeners[i].fn !== fn ||\n        (once && !listeners[i].once) ||\n        (context && listeners[i].context !== context)\n      ) {\n        events.push(listeners[i]);\n      }\n    }\n\n    //\n    // Reset the array, or remove it completely if we have no more listeners.\n    //\n    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;\n    else clearEvent(this, evt);\n  }\n\n  return this;\n};\n\n/**\n * Remove all listeners, or those of the specified event.\n *\n * @param {(String|Symbol)} [event] The event name.\n * @returns {EventEmitter} `this`.\n * @public\n */\nEventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {\n  var evt;\n\n  if (event) {\n    evt = prefix ? prefix + event : event;\n    if (this._events[evt]) clearEvent(this, evt);\n  } else {\n    this._events = new Events();\n    this._eventsCount = 0;\n  }\n\n  return this;\n};\n\n//\n// Alias methods names because people roll like that.\n//\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\nEventEmitter.prototype.addListener = EventEmitter.prototype.on;\n\n//\n// Expose the prefix.\n//\nEventEmitter.prefixed = prefix;\n\n//\n// Allow `EventEmitter` to be imported as module namespace.\n//\nEventEmitter.EventEmitter = EventEmitter;\n\n//\n// Expose the module.\n//\nif ('undefined' !== typeof module) {\n  module.exports = EventEmitter;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/eventemitter3/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/extend/index.js":
	/*!**************************************!*\
	  !*** ./node_modules/extend/index.js ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("'use strict';\n\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar defineProperty = Object.defineProperty;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar isArray = function isArray(arr) {\n\tif (typeof Array.isArray === 'function') {\n\t\treturn Array.isArray(arr);\n\t}\n\n\treturn toStr.call(arr) === '[object Array]';\n};\n\nvar isPlainObject = function isPlainObject(obj) {\n\tif (!obj || toStr.call(obj) !== '[object Object]') {\n\t\treturn false;\n\t}\n\n\tvar hasOwnConstructor = hasOwn.call(obj, 'constructor');\n\tvar hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');\n\t// Not own constructor property must be Object\n\tif (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {\n\t\treturn false;\n\t}\n\n\t// Own properties are enumerated firstly, so to speed up,\n\t// if last one is own, then all properties are own.\n\tvar key;\n\tfor (key in obj) { /**/ }\n\n\treturn typeof key === 'undefined' || hasOwn.call(obj, key);\n};\n\n// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target\nvar setProperty = function setProperty(target, options) {\n\tif (defineProperty && options.name === '__proto__') {\n\t\tdefineProperty(target, options.name, {\n\t\t\tenumerable: true,\n\t\t\tconfigurable: true,\n\t\t\tvalue: options.newValue,\n\t\t\twritable: true\n\t\t});\n\t} else {\n\t\ttarget[options.name] = options.newValue;\n\t}\n};\n\n// Return undefined instead of __proto__ if '__proto__' is not an own property\nvar getProperty = function getProperty(obj, name) {\n\tif (name === '__proto__') {\n\t\tif (!hasOwn.call(obj, name)) {\n\t\t\treturn void 0;\n\t\t} else if (gOPD) {\n\t\t\t// In early versions of node, obj['__proto__'] is buggy when obj has\n\t\t\t// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.\n\t\t\treturn gOPD(obj, name).value;\n\t\t}\n\t}\n\n\treturn obj[name];\n};\n\nmodule.exports = function extend() {\n\tvar options, name, src, copy, copyIsArray, clone;\n\tvar target = arguments[0];\n\tvar i = 1;\n\tvar length = arguments.length;\n\tvar deep = false;\n\n\t// Handle a deep copy situation\n\tif (typeof target === 'boolean') {\n\t\tdeep = target;\n\t\ttarget = arguments[1] || {};\n\t\t// skip the boolean and the target\n\t\ti = 2;\n\t}\n\tif (target == null || (typeof target !== 'object' && typeof target !== 'function')) {\n\t\ttarget = {};\n\t}\n\n\tfor (; i < length; ++i) {\n\t\toptions = arguments[i];\n\t\t// Only deal with non-null/undefined values\n\t\tif (options != null) {\n\t\t\t// Extend the base object\n\t\t\tfor (name in options) {\n\t\t\t\tsrc = getProperty(target, name);\n\t\t\t\tcopy = getProperty(options, name);\n\n\t\t\t\t// Prevent never-ending loop\n\t\t\t\tif (target !== copy) {\n\t\t\t\t\t// Recurse if we're merging plain objects or arrays\n\t\t\t\t\tif (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {\n\t\t\t\t\t\tif (copyIsArray) {\n\t\t\t\t\t\t\tcopyIsArray = false;\n\t\t\t\t\t\t\tclone = src && isArray(src) ? src : [];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tclone = src && isPlainObject(src) ? src : {};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Never move original objects, clone them\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: extend(deep, clone, copy) });\n\n\t\t\t\t\t// Don't bring in undefined values\n\t\t\t\t\t} else if (typeof copy !== 'undefined') {\n\t\t\t\t\t\tsetProperty(target, { name: name, newValue: copy });\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t// Return the modified object\n\treturn target;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/extend/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/fast-diff/diff.js":
	/*!****************************************!*\
	  !*** ./node_modules/fast-diff/diff.js ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("/**\n * This library modifies the diff-patch-match library by Neil Fraser\n * by removing the patch and match functionality and certain advanced\n * options in the diff function. The original license is as follows:\n *\n * ===\n *\n * Diff Match and Patch\n *\n * Copyright 2006 Google Inc.\n * http://code.google.com/p/google-diff-match-patch/\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n/**\n * The data structure representing a diff is an array of tuples:\n * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]\n * which means: delete 'Hello', add 'Goodbye' and keep ' world.'\n */\nvar DIFF_DELETE = -1;\nvar DIFF_INSERT = 1;\nvar DIFF_EQUAL = 0;\n\n\n/**\n * Find the differences between two texts.  Simplifies the problem by stripping\n * any common prefix or suffix off the texts before diffing.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {Int|Object} [cursor_pos] Edit position in text1 or object with more info\n * @return {Array} Array of diff tuples.\n */\nfunction diff_main(text1, text2, cursor_pos, _fix_unicode) {\n  // Check for equality\n  if (text1 === text2) {\n    if (text1) {\n      return [[DIFF_EQUAL, text1]];\n    }\n    return [];\n  }\n\n  if (cursor_pos != null) {\n    var editdiff = find_cursor_edit_diff(text1, text2, cursor_pos);\n    if (editdiff) {\n      return editdiff;\n    }\n  }\n\n  // Trim off common prefix (speedup).\n  var commonlength = diff_commonPrefix(text1, text2);\n  var commonprefix = text1.substring(0, commonlength);\n  text1 = text1.substring(commonlength);\n  text2 = text2.substring(commonlength);\n\n  // Trim off common suffix (speedup).\n  commonlength = diff_commonSuffix(text1, text2);\n  var commonsuffix = text1.substring(text1.length - commonlength);\n  text1 = text1.substring(0, text1.length - commonlength);\n  text2 = text2.substring(0, text2.length - commonlength);\n\n  // Compute the diff on the middle block.\n  var diffs = diff_compute_(text1, text2);\n\n  // Restore the prefix and suffix.\n  if (commonprefix) {\n    diffs.unshift([DIFF_EQUAL, commonprefix]);\n  }\n  if (commonsuffix) {\n    diffs.push([DIFF_EQUAL, commonsuffix]);\n  }\n  diff_cleanupMerge(diffs, _fix_unicode);\n  return diffs;\n};\n\n\n/**\n * Find the differences between two texts.  Assumes that the texts do not\n * have any common prefix or suffix.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_compute_(text1, text2) {\n  var diffs;\n\n  if (!text1) {\n    // Just add some text (speedup).\n    return [[DIFF_INSERT, text2]];\n  }\n\n  if (!text2) {\n    // Just delete some text (speedup).\n    return [[DIFF_DELETE, text1]];\n  }\n\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  var i = longtext.indexOf(shorttext);\n  if (i !== -1) {\n    // Shorter text is inside the longer text (speedup).\n    diffs = [\n      [DIFF_INSERT, longtext.substring(0, i)],\n      [DIFF_EQUAL, shorttext],\n      [DIFF_INSERT, longtext.substring(i + shorttext.length)]\n    ];\n    // Swap insertions for deletions if diff is reversed.\n    if (text1.length > text2.length) {\n      diffs[0][0] = diffs[2][0] = DIFF_DELETE;\n    }\n    return diffs;\n  }\n\n  if (shorttext.length === 1) {\n    // Single character string.\n    // After the previous speedup, the character can't be an equality.\n    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n  }\n\n  // Check to see if the problem can be split in two.\n  var hm = diff_halfMatch_(text1, text2);\n  if (hm) {\n    // A half-match was found, sort out the return data.\n    var text1_a = hm[0];\n    var text1_b = hm[1];\n    var text2_a = hm[2];\n    var text2_b = hm[3];\n    var mid_common = hm[4];\n    // Send both pairs off for separate processing.\n    var diffs_a = diff_main(text1_a, text2_a);\n    var diffs_b = diff_main(text1_b, text2_b);\n    // Merge the results.\n    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);\n  }\n\n  return diff_bisect_(text1, text2);\n};\n\n\n/**\n * Find the 'middle snake' of a diff, split the problem in two\n * and return the recursively constructed diff.\n * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @return {Array} Array of diff tuples.\n * @private\n */\nfunction diff_bisect_(text1, text2) {\n  // Cache the text lengths to prevent multiple calls.\n  var text1_length = text1.length;\n  var text2_length = text2.length;\n  var max_d = Math.ceil((text1_length + text2_length) / 2);\n  var v_offset = max_d;\n  var v_length = 2 * max_d;\n  var v1 = new Array(v_length);\n  var v2 = new Array(v_length);\n  // Setting all elements to -1 is faster in Chrome & Firefox than mixing\n  // integers and undefined.\n  for (var x = 0; x < v_length; x++) {\n    v1[x] = -1;\n    v2[x] = -1;\n  }\n  v1[v_offset + 1] = 0;\n  v2[v_offset + 1] = 0;\n  var delta = text1_length - text2_length;\n  // If the total number of characters is odd, then the front path will collide\n  // with the reverse path.\n  var front = (delta % 2 !== 0);\n  // Offsets for start and end of k loop.\n  // Prevents mapping of space beyond the grid.\n  var k1start = 0;\n  var k1end = 0;\n  var k2start = 0;\n  var k2end = 0;\n  for (var d = 0; d < max_d; d++) {\n    // Walk the front path one step.\n    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {\n      var k1_offset = v_offset + k1;\n      var x1;\n      if (k1 === -d || (k1 !== d && v1[k1_offset - 1] < v1[k1_offset + 1])) {\n        x1 = v1[k1_offset + 1];\n      } else {\n        x1 = v1[k1_offset - 1] + 1;\n      }\n      var y1 = x1 - k1;\n      while (\n        x1 < text1_length && y1 < text2_length &&\n        text1.charAt(x1) === text2.charAt(y1)\n      ) {\n        x1++;\n        y1++;\n      }\n      v1[k1_offset] = x1;\n      if (x1 > text1_length) {\n        // Ran off the right of the graph.\n        k1end += 2;\n      } else if (y1 > text2_length) {\n        // Ran off the bottom of the graph.\n        k1start += 2;\n      } else if (front) {\n        var k2_offset = v_offset + delta - k1;\n        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] !== -1) {\n          // Mirror x2 onto top-left coordinate system.\n          var x2 = text1_length - v2[k2_offset];\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n\n    // Walk the reverse path one step.\n    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {\n      var k2_offset = v_offset + k2;\n      var x2;\n      if (k2 === -d || (k2 !== d && v2[k2_offset - 1] < v2[k2_offset + 1])) {\n        x2 = v2[k2_offset + 1];\n      } else {\n        x2 = v2[k2_offset - 1] + 1;\n      }\n      var y2 = x2 - k2;\n      while (\n        x2 < text1_length && y2 < text2_length &&\n        text1.charAt(text1_length - x2 - 1) === text2.charAt(text2_length - y2 - 1)\n      ) {\n        x2++;\n        y2++;\n      }\n      v2[k2_offset] = x2;\n      if (x2 > text1_length) {\n        // Ran off the left of the graph.\n        k2end += 2;\n      } else if (y2 > text2_length) {\n        // Ran off the top of the graph.\n        k2start += 2;\n      } else if (!front) {\n        var k1_offset = v_offset + delta - k2;\n        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] !== -1) {\n          var x1 = v1[k1_offset];\n          var y1 = v_offset + x1 - k1_offset;\n          // Mirror x2 onto top-left coordinate system.\n          x2 = text1_length - x2;\n          if (x1 >= x2) {\n            // Overlap detected.\n            return diff_bisectSplit_(text1, text2, x1, y1);\n          }\n        }\n      }\n    }\n  }\n  // Diff took too long and hit the deadline or\n  // number of diffs equals number of characters, no commonality at all.\n  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];\n};\n\n\n/**\n * Given the location of the 'middle snake', split the diff in two parts\n * and recurse.\n * @param {string} text1 Old string to be diffed.\n * @param {string} text2 New string to be diffed.\n * @param {number} x Index of split point in text1.\n * @param {number} y Index of split point in text2.\n * @return {Array} Array of diff tuples.\n */\nfunction diff_bisectSplit_(text1, text2, x, y) {\n  var text1a = text1.substring(0, x);\n  var text2a = text2.substring(0, y);\n  var text1b = text1.substring(x);\n  var text2b = text2.substring(y);\n\n  // Compute both diffs serially.\n  var diffs = diff_main(text1a, text2a);\n  var diffsb = diff_main(text1b, text2b);\n\n  return diffs.concat(diffsb);\n};\n\n\n/**\n * Determine the common prefix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the start of each\n *     string.\n */\nfunction diff_commonPrefix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerstart = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(pointerstart, pointermid) ==\n      text2.substring(pointerstart, pointermid)\n    ) {\n      pointermin = pointermid;\n      pointerstart = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_start(text1.charCodeAt(pointermid - 1))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Determine the common suffix of two strings.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {number} The number of characters common to the end of each string.\n */\nfunction diff_commonSuffix(text1, text2) {\n  // Quick check for common null cases.\n  if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {\n    return 0;\n  }\n  // Binary search.\n  // Performance analysis: http://neil.fraser.name/news/2007/10/09/\n  var pointermin = 0;\n  var pointermax = Math.min(text1.length, text2.length);\n  var pointermid = pointermax;\n  var pointerend = 0;\n  while (pointermin < pointermid) {\n    if (\n      text1.substring(text1.length - pointermid, text1.length - pointerend) ==\n      text2.substring(text2.length - pointermid, text2.length - pointerend)\n    ) {\n      pointermin = pointermid;\n      pointerend = pointermin;\n    } else {\n      pointermax = pointermid;\n    }\n    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);\n  }\n\n  if (is_surrogate_pair_end(text1.charCodeAt(text1.length - pointermid))) {\n    pointermid--;\n  }\n\n  return pointermid;\n};\n\n\n/**\n * Do the two texts share a substring which is at least half the length of the\n * longer text?\n * This speedup can produce non-minimal diffs.\n * @param {string} text1 First string.\n * @param {string} text2 Second string.\n * @return {Array.<string>} Five element Array, containing the prefix of\n *     text1, the suffix of text1, the prefix of text2, the suffix of\n *     text2 and the common middle.  Or null if there was no match.\n */\nfunction diff_halfMatch_(text1, text2) {\n  var longtext = text1.length > text2.length ? text1 : text2;\n  var shorttext = text1.length > text2.length ? text2 : text1;\n  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {\n    return null;  // Pointless.\n  }\n\n  /**\n   * Does a substring of shorttext exist within longtext such that the substring\n   * is at least half the length of longtext?\n   * Closure, but does not reference any external variables.\n   * @param {string} longtext Longer string.\n   * @param {string} shorttext Shorter string.\n   * @param {number} i Start index of quarter length substring within longtext.\n   * @return {Array.<string>} Five element Array, containing the prefix of\n   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix\n   *     of shorttext and the common middle.  Or null if there was no match.\n   * @private\n   */\n  function diff_halfMatchI_(longtext, shorttext, i) {\n    // Start with a 1/4 length substring at position i as a seed.\n    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));\n    var j = -1;\n    var best_common = '';\n    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;\n    while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {\n      var prefixLength = diff_commonPrefix(\n        longtext.substring(i), shorttext.substring(j));\n      var suffixLength = diff_commonSuffix(\n        longtext.substring(0, i), shorttext.substring(0, j));\n      if (best_common.length < suffixLength + prefixLength) {\n        best_common = shorttext.substring(\n          j - suffixLength, j) + shorttext.substring(j, j + prefixLength);\n        best_longtext_a = longtext.substring(0, i - suffixLength);\n        best_longtext_b = longtext.substring(i + prefixLength);\n        best_shorttext_a = shorttext.substring(0, j - suffixLength);\n        best_shorttext_b = shorttext.substring(j + prefixLength);\n      }\n    }\n    if (best_common.length * 2 >= longtext.length) {\n      return [\n        best_longtext_a, best_longtext_b,\n        best_shorttext_a, best_shorttext_b, best_common\n      ];\n    } else {\n      return null;\n    }\n  }\n\n  // First check if the second quarter is the seed for a half-match.\n  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));\n  // Check again based on the third quarter.\n  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));\n  var hm;\n  if (!hm1 && !hm2) {\n    return null;\n  } else if (!hm2) {\n    hm = hm1;\n  } else if (!hm1) {\n    hm = hm2;\n  } else {\n    // Both matched.  Select the longest.\n    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;\n  }\n\n  // A half-match was found, sort out the return data.\n  var text1_a, text1_b, text2_a, text2_b;\n  if (text1.length > text2.length) {\n    text1_a = hm[0];\n    text1_b = hm[1];\n    text2_a = hm[2];\n    text2_b = hm[3];\n  } else {\n    text2_a = hm[0];\n    text2_b = hm[1];\n    text1_a = hm[2];\n    text1_b = hm[3];\n  }\n  var mid_common = hm[4];\n  return [text1_a, text1_b, text2_a, text2_b, mid_common];\n};\n\n\n/**\n * Reorder and merge like edit sections.  Merge equalities.\n * Any edit section can move as long as it doesn't cross an equality.\n * @param {Array} diffs Array of diff tuples.\n * @param {boolean} fix_unicode Whether to normalize to a unicode-correct diff\n */\nfunction diff_cleanupMerge(diffs, fix_unicode) {\n  diffs.push([DIFF_EQUAL, '']);  // Add a dummy entry at the end.\n  var pointer = 0;\n  var count_delete = 0;\n  var count_insert = 0;\n  var text_delete = '';\n  var text_insert = '';\n  var commonlength;\n  while (pointer < diffs.length) {\n    if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n      diffs.splice(pointer, 1);\n      continue;\n    }\n    switch (diffs[pointer][0]) {\n      case DIFF_INSERT:\n\n        count_insert++;\n        text_insert += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_DELETE:\n        count_delete++;\n        text_delete += diffs[pointer][1];\n        pointer++;\n        break;\n      case DIFF_EQUAL:\n        var previous_equality = pointer - count_insert - count_delete - 1;\n        if (fix_unicode) {\n          // prevent splitting of unicode surrogate pairs.  when fix_unicode is true,\n          // we assume that the old and new text in the diff are complete and correct\n          // unicode-encoded JS strings, but the tuple boundaries may fall between\n          // surrogate pairs.  we fix this by shaving off stray surrogates from the end\n          // of the previous equality and the beginning of this equality.  this may create\n          // empty equalities or a common prefix or suffix.  for example, if AB and AC are\n          // emojis, `[[0, 'A'], [-1, 'BA'], [0, 'C']]` would turn into deleting 'ABAC' and\n          // inserting 'AC', and then the common suffix 'AC' will be eliminated.  in this\n          // particular case, both equalities go away, we absorb any previous inequalities,\n          // and we keep scanning for the next equality before rewriting the tuples.\n          if (previous_equality >= 0 && ends_with_pair_start(diffs[previous_equality][1])) {\n            var stray = diffs[previous_equality][1].slice(-1);\n            diffs[previous_equality][1] = diffs[previous_equality][1].slice(0, -1);\n            text_delete = stray + text_delete;\n            text_insert = stray + text_insert;\n            if (!diffs[previous_equality][1]) {\n              // emptied out previous equality, so delete it and include previous delete/insert\n              diffs.splice(previous_equality, 1);\n              pointer--;\n              var k = previous_equality - 1;\n              if (diffs[k] && diffs[k][0] === DIFF_INSERT) {\n                count_insert++;\n                text_insert = diffs[k][1] + text_insert;\n                k--;\n              }\n              if (diffs[k] && diffs[k][0] === DIFF_DELETE) {\n                count_delete++;\n                text_delete = diffs[k][1] + text_delete;\n                k--;\n              }\n              previous_equality = k;\n            }\n          }\n          if (starts_with_pair_end(diffs[pointer][1])) {\n            var stray = diffs[pointer][1].charAt(0);\n            diffs[pointer][1] = diffs[pointer][1].slice(1);\n            text_delete += stray;\n            text_insert += stray;\n          }\n        }\n        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {\n          // for empty equality not at end, wait for next equality\n          diffs.splice(pointer, 1);\n          break;\n        }\n        if (text_delete.length > 0 || text_insert.length > 0) {\n          // note that diff_commonPrefix and diff_commonSuffix are unicode-aware\n          if (text_delete.length > 0 && text_insert.length > 0) {\n            // Factor out any common prefixes.\n            commonlength = diff_commonPrefix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              if (previous_equality >= 0) {\n                diffs[previous_equality][1] += text_insert.substring(0, commonlength);\n              } else {\n                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);\n                pointer++;\n              }\n              text_insert = text_insert.substring(commonlength);\n              text_delete = text_delete.substring(commonlength);\n            }\n            // Factor out any common suffixes.\n            commonlength = diff_commonSuffix(text_insert, text_delete);\n            if (commonlength !== 0) {\n              diffs[pointer][1] =\n                text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];\n              text_insert = text_insert.substring(0, text_insert.length - commonlength);\n              text_delete = text_delete.substring(0, text_delete.length - commonlength);\n            }\n          }\n          // Delete the offending records and add the merged ones.\n          var n = count_insert + count_delete;\n          if (text_delete.length === 0 && text_insert.length === 0) {\n            diffs.splice(pointer - n, n);\n            pointer = pointer - n;\n          } else if (text_delete.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 1;\n          } else if (text_insert.length === 0) {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete]);\n            pointer = pointer - n + 1;\n          } else {\n            diffs.splice(pointer - n, n, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);\n            pointer = pointer - n + 2;\n          }\n        }\n        if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {\n          // Merge this equality with the previous one.\n          diffs[pointer - 1][1] += diffs[pointer][1];\n          diffs.splice(pointer, 1);\n        } else {\n          pointer++;\n        }\n        count_insert = 0;\n        count_delete = 0;\n        text_delete = '';\n        text_insert = '';\n        break;\n    }\n  }\n  if (diffs[diffs.length - 1][1] === '') {\n    diffs.pop();  // Remove the dummy entry at the end.\n  }\n\n  // Second pass: look for single edits surrounded on both sides by equalities\n  // which can be shifted sideways to eliminate an equality.\n  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC\n  var changes = false;\n  pointer = 1;\n  // Intentionally ignore the first and last element (don't need checking).\n  while (pointer < diffs.length - 1) {\n    if (diffs[pointer - 1][0] === DIFF_EQUAL &&\n      diffs[pointer + 1][0] === DIFF_EQUAL) {\n      // This is a single edit surrounded by equalities.\n      if (diffs[pointer][1].substring(diffs[pointer][1].length -\n        diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {\n        // Shift the edit over the previous equality.\n        diffs[pointer][1] = diffs[pointer - 1][1] +\n          diffs[pointer][1].substring(0, diffs[pointer][1].length -\n            diffs[pointer - 1][1].length);\n        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];\n        diffs.splice(pointer - 1, 1);\n        changes = true;\n      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) ==\n        diffs[pointer + 1][1]) {\n        // Shift the edit over the next equality.\n        diffs[pointer - 1][1] += diffs[pointer + 1][1];\n        diffs[pointer][1] =\n          diffs[pointer][1].substring(diffs[pointer + 1][1].length) +\n          diffs[pointer + 1][1];\n        diffs.splice(pointer + 1, 1);\n        changes = true;\n      }\n    }\n    pointer++;\n  }\n  // If shifts were made, the diff needs reordering and another shift sweep.\n  if (changes) {\n    diff_cleanupMerge(diffs, fix_unicode);\n  }\n};\n\nfunction is_surrogate_pair_start(charCode) {\n  return charCode >= 0xD800 && charCode <= 0xDBFF;\n}\n\nfunction is_surrogate_pair_end(charCode) {\n  return charCode >= 0xDC00 && charCode <= 0xDFFF;\n}\n\nfunction starts_with_pair_end(str) {\n  return is_surrogate_pair_end(str.charCodeAt(0));\n}\n\nfunction ends_with_pair_start(str) {\n  return is_surrogate_pair_start(str.charCodeAt(str.length - 1));\n}\n\nfunction remove_empty_tuples(tuples) {\n  var ret = [];\n  for (var i = 0; i < tuples.length; i++) {\n    if (tuples[i][1].length > 0) {\n      ret.push(tuples[i]);\n    }\n  }\n  return ret;\n}\n\nfunction make_edit_splice(before, oldMiddle, newMiddle, after) {\n  if (ends_with_pair_start(before) || starts_with_pair_end(after)) {\n    return null;\n  }\n  return remove_empty_tuples([\n    [DIFF_EQUAL, before],\n    [DIFF_DELETE, oldMiddle],\n    [DIFF_INSERT, newMiddle],\n    [DIFF_EQUAL, after]\n  ]);\n}\n\nfunction find_cursor_edit_diff(oldText, newText, cursor_pos) {\n  // note: this runs after equality check has ruled out exact equality\n  var oldRange = typeof cursor_pos === 'number' ?\n    { index: cursor_pos, length: 0 } : cursor_pos.oldRange;\n  var newRange = typeof cursor_pos === 'number' ?\n    null : cursor_pos.newRange;\n  // take into account the old and new selection to generate the best diff\n  // possible for a text edit.  for example, a text change from \"xxx\" to \"xx\"\n  // could be a delete or forwards-delete of any one of the x's, or the\n  // result of selecting two of the x's and typing \"x\".\n  var oldLength = oldText.length;\n  var newLength = newText.length;\n  if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {\n    // see if we have an insert or delete before or after cursor\n    var oldCursor = oldRange.index;\n    var oldBefore = oldText.slice(0, oldCursor);\n    var oldAfter = oldText.slice(oldCursor);\n    var maybeNewCursor = newRange ? newRange.index : null;\n    editBefore: {\n      // is this an insert or delete right before oldCursor?\n      var newCursor = oldCursor + newLength - oldLength;\n      if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {\n        break editBefore;\n      }\n      if (newCursor < 0 || newCursor > newLength) {\n        break editBefore;\n      }\n      var newBefore = newText.slice(0, newCursor);\n      var newAfter = newText.slice(newCursor);\n      if (newAfter !== oldAfter) {\n        break editBefore;\n      }\n      var prefixLength = Math.min(oldCursor, newCursor);\n      var oldPrefix = oldBefore.slice(0, prefixLength);\n      var newPrefix = newBefore.slice(0, prefixLength);\n      if (oldPrefix !== newPrefix) {\n        break editBefore;\n      }\n      var oldMiddle = oldBefore.slice(prefixLength);\n      var newMiddle = newBefore.slice(prefixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldAfter);\n    }\n    editAfter: {\n      // is this an insert or delete right after oldCursor?\n      if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {\n        break editAfter;\n      }\n      var cursor = oldCursor;\n      var newBefore = newText.slice(0, cursor);\n      var newAfter = newText.slice(cursor);\n      if (newBefore !== oldBefore) {\n        break editAfter;\n      }\n      var suffixLength = Math.min(oldLength - cursor, newLength - cursor);\n      var oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);\n      var newSuffix = newAfter.slice(newAfter.length - suffixLength);\n      if (oldSuffix !== newSuffix) {\n        break editAfter;\n      }\n      var oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);\n      var newMiddle = newAfter.slice(0, newAfter.length - suffixLength);\n      return make_edit_splice(oldBefore, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n  if (oldRange.length > 0 && newRange && newRange.length === 0) {\n    replaceRange: {\n      // see if diff could be a splice of the old selection range\n      var oldPrefix = oldText.slice(0, oldRange.index);\n      var oldSuffix = oldText.slice(oldRange.index + oldRange.length);\n      var prefixLength = oldPrefix.length;\n      var suffixLength = oldSuffix.length;\n      if (newLength < prefixLength + suffixLength) {\n        break replaceRange;\n      }\n      var newPrefix = newText.slice(0, prefixLength);\n      var newSuffix = newText.slice(newLength - suffixLength);\n      if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {\n        break replaceRange;\n      }\n      var oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);\n      var newMiddle = newText.slice(prefixLength, newLength - suffixLength);\n      return make_edit_splice(oldPrefix, oldMiddle, newMiddle, oldSuffix);\n    }\n  }\n\n  return null;\n}\n\nfunction diff(text1, text2, cursor_pos) {\n  // only pass fix_unicode=true at the top level, not when diff_main is\n  // recursively invoked\n  return diff_main(text1, text2, cursor_pos, true);\n}\n\ndiff.INSERT = DIFF_INSERT;\ndiff.DELETE = DIFF_DELETE;\ndiff.EQUAL = DIFF_EQUAL;\n\nmodule.exports = diff;\n\n\n//# sourceURL=webpack://Quill/./node_modules/fast-diff/diff.js?");
	
	/***/ }),
	
	/***/ "./node_modules/foreach/index.js":
	/*!***************************************!*\
	  !*** ./node_modules/foreach/index.js ***!
	  \***************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("\nvar hasOwn = Object.prototype.hasOwnProperty;\nvar toString = Object.prototype.toString;\n\nmodule.exports = function forEach (obj, fn, ctx) {\n    if (toString.call(fn) !== '[object Function]') {\n        throw new TypeError('iterator must be a function');\n    }\n    var l = obj.length;\n    if (l === +l) {\n        for (var i = 0; i < l; i++) {\n            fn.call(ctx, obj[i], i, obj);\n        }\n    } else {\n        for (var k in obj) {\n            if (hasOwn.call(obj, k)) {\n                fn.call(ctx, obj[k], k, obj);\n            }\n        }\n    }\n};\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/foreach/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/function-bind/implementation.js":
	/*!******************************************************!*\
	  !*** ./node_modules/function-bind/implementation.js ***!
	  \******************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* eslint no-invalid-this: 1 */\n\nvar ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';\nvar slice = Array.prototype.slice;\nvar toStr = Object.prototype.toString;\nvar funcType = '[object Function]';\n\nmodule.exports = function bind(that) {\n    var target = this;\n    if (typeof target !== 'function' || toStr.call(target) !== funcType) {\n        throw new TypeError(ERROR_MESSAGE + target);\n    }\n    var args = slice.call(arguments, 1);\n\n    var bound;\n    var binder = function () {\n        if (this instanceof bound) {\n            var result = target.apply(\n                this,\n                args.concat(slice.call(arguments))\n            );\n            if (Object(result) === result) {\n                return result;\n            }\n            return this;\n        } else {\n            return target.apply(\n                that,\n                args.concat(slice.call(arguments))\n            );\n        }\n    };\n\n    var boundLength = Math.max(0, target.length - args.length);\n    var boundArgs = [];\n    for (var i = 0; i < boundLength; i++) {\n        boundArgs.push('$' + i);\n    }\n\n    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);\n\n    if (target.prototype) {\n        var Empty = function Empty() {};\n        Empty.prototype = target.prototype;\n        bound.prototype = new Empty();\n        Empty.prototype = null;\n    }\n\n    return bound;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/function-bind/implementation.js?");
	
	/***/ }),
	
	/***/ "./node_modules/function-bind/index.js":
	/*!*********************************************!*\
	  !*** ./node_modules/function-bind/index.js ***!
	  \*********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/function-bind/implementation.js\");\n\nmodule.exports = Function.prototype.bind || implementation;\n\n\n//# sourceURL=webpack://Quill/./node_modules/function-bind/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/has-symbols/index.js":
	/*!*******************************************!*\
	  !*** ./node_modules/has-symbols/index.js ***!
	  \*******************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar origSymbol = global.Symbol;\nvar hasSymbolSham = __webpack_require__(/*! ./shams */ \"./node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasNativeSymbols() {\n\tif (typeof origSymbol !== 'function') { return false; }\n\tif (typeof Symbol !== 'function') { return false; }\n\tif (typeof origSymbol('foo') !== 'symbol') { return false; }\n\tif (typeof Symbol('bar') !== 'symbol') { return false; }\n\n\treturn hasSymbolSham();\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/has-symbols/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/has-symbols/shams.js":
	/*!*******************************************!*\
	  !*** ./node_modules/has-symbols/shams.js ***!
	  \*******************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* eslint complexity: [2, 18], max-statements: [2, 33] */\nmodule.exports = function hasSymbols() {\n\tif (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }\n\tif (typeof Symbol.iterator === 'symbol') { return true; }\n\n\tvar obj = {};\n\tvar sym = Symbol('test');\n\tvar symObj = Object(sym);\n\tif (typeof sym === 'string') { return false; }\n\n\tif (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }\n\tif (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }\n\n\t// temp disabled per https://github.com/ljharb/object.assign/issues/17\n\t// if (sym instanceof Symbol) { return false; }\n\t// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4\n\t// if (!(symObj instanceof Symbol)) { return false; }\n\n\t// if (typeof Symbol.prototype.toString !== 'function') { return false; }\n\t// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }\n\n\tvar symVal = 42;\n\tobj[sym] = symVal;\n\tfor (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax\n\tif (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }\n\n\tif (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }\n\n\tvar syms = Object.getOwnPropertySymbols(obj);\n\tif (syms.length !== 1 || syms[0] !== sym) { return false; }\n\n\tif (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }\n\n\tif (typeof Object.getOwnPropertyDescriptor === 'function') {\n\t\tvar descriptor = Object.getOwnPropertyDescriptor(obj, sym);\n\t\tif (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/has-symbols/shams.js?");
	
	/***/ }),
	
	/***/ "./node_modules/has/src/index.js":
	/*!***************************************!*\
	  !*** ./node_modules/has/src/index.js ***!
	  \***************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nmodule.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);\n\n\n//# sourceURL=webpack://Quill/./node_modules/has/src/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-arguments/index.js":
	/*!********************************************!*\
	  !*** ./node_modules/is-arguments/index.js ***!
	  \********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\nvar toStr = Object.prototype.toString;\n\nvar isStandardArguments = function isArguments(value) {\n\tif (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {\n\t\treturn false;\n\t}\n\treturn toStr.call(value) === '[object Arguments]';\n};\n\nvar isLegacyArguments = function isArguments(value) {\n\tif (isStandardArguments(value)) {\n\t\treturn true;\n\t}\n\treturn value !== null &&\n\t\ttypeof value === 'object' &&\n\t\ttypeof value.length === 'number' &&\n\t\tvalue.length >= 0 &&\n\t\ttoStr.call(value) !== '[object Array]' &&\n\t\ttoStr.call(value.callee) === '[object Function]';\n};\n\nvar supportsStandardArguments = (function () {\n\treturn isStandardArguments(arguments);\n}());\n\nisStandardArguments.isLegacyArguments = isLegacyArguments; // for tests\n\nmodule.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-arguments/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-bigint/index.js":
	/*!*****************************************!*\
	  !*** ./node_modules/is-bigint/index.js ***!
	  \*****************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nif (typeof BigInt === 'function') {\n\tvar bigIntValueOf = BigInt.prototype.valueOf;\n\tvar tryBigInt = function tryBigIntObject(value) {\n\t\ttry {\n\t\t\tbigIntValueOf.call(value);\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t}\n\t\treturn false;\n\t};\n\n\tmodule.exports = function isBigInt(value) {\n\t\tif (\n\t\t\tvalue === null\n\t\t\t|| typeof value === 'undefined'\n\t\t\t|| typeof value === 'boolean'\n\t\t\t|| typeof value === 'string'\n\t\t\t|| typeof value === 'number'\n\t\t\t|| typeof value === 'symbol'\n\t\t\t|| typeof value === 'function'\n\t\t) {\n\t\t\treturn false;\n\t\t}\n\t\tif (typeof value === 'bigint') { // eslint-disable-line valid-typeof\n\t\t\treturn true;\n\t\t}\n\n\t\treturn tryBigInt(value);\n\t};\n} else {\n\tmodule.exports = function isBigInt(value) {\n\t\treturn  false && false;\n\t};\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-bigint/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-boolean-object/index.js":
	/*!*************************************************!*\
	  !*** ./node_modules/is-boolean-object/index.js ***!
	  \*************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar boolToStr = Boolean.prototype.toString;\n\nvar tryBooleanObject = function booleanBrandCheck(value) {\n\ttry {\n\t\tboolToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar boolClass = '[object Boolean]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isBoolean(value) {\n\tif (typeof value === 'boolean') {\n\t\treturn true;\n\t}\n\tif (value === null || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr.call(value) === boolClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-boolean-object/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-date-object/index.js":
	/*!**********************************************!*\
	  !*** ./node_modules/is-date-object/index.js ***!
	  \**********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateObject(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) { return false; }\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-date-object/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-map/index.js":
	/*!**************************************!*\
	  !*** ./node_modules/is-map/index.js ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Map) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$mapHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isMap(x) {\n\t\t// `Map` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isMap(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$mapHas.call(x);\n\t\tif ($setHas) {\n\t\t\ttry {\n\t\t\t\t$setHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $Map; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-map/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-number-object/index.js":
	/*!************************************************!*\
	  !*** ./node_modules/is-number-object/index.js ***!
	  \************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar numToStr = Number.prototype.toString;\nvar tryNumberObject = function tryNumberObject(value) {\n\ttry {\n\t\tnumToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar numClass = '[object Number]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isNumberObject(value) {\n\tif (typeof value === 'number') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-number-object/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-regex/index.js":
	/*!****************************************!*\
	  !*** ./node_modules/is-regex/index.js ***!
	  \****************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar regexExec = RegExp.prototype.exec;\nvar gOPD = Object.getOwnPropertyDescriptor;\n\nvar tryRegexExecCall = function tryRegexExec(value) {\n\ttry {\n\t\tvar lastIndex = value.lastIndex;\n\t\tvalue.lastIndex = 0;\n\n\t\tregexExec.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t} finally {\n\t\tvalue.lastIndex = lastIndex;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar regexClass = '[object RegExp]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isRegex(value) {\n\tif (!value || typeof value !== 'object') {\n\t\treturn false;\n\t}\n\tif (!hasToStringTag) {\n\t\treturn toStr.call(value) === regexClass;\n\t}\n\n\tvar descriptor = gOPD(value, 'lastIndex');\n\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\tif (!hasLastIndexDataProperty) {\n\t\treturn false;\n\t}\n\n\treturn tryRegexExecCall(value);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-regex/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-set/index.js":
	/*!**************************************!*\
	  !*** ./node_modules/is-set/index.js ***!
	  \**************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar $Map = typeof Map === 'function' && Map.prototype ? Map : null;\nvar $Set = typeof Set === 'function' && Set.prototype ? Set : null;\n\nvar exported;\n\nif (!$Set) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $Map ? Map.prototype.has : null;\nvar $setHas = $Set ? Set.prototype.has : null;\nif (!exported && !$setHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isSet(x) {\n\t\t// `Set` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $Set; // core-js workaround, pre-v2.5.0\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-set/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-string/index.js":
	/*!*****************************************!*\
	  !*** ./node_modules/is-string/index.js ***!
	  \*****************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar strValue = String.prototype.valueOf;\nvar tryStringObject = function tryStringObject(value) {\n\ttry {\n\t\tstrValue.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar strClass = '[object String]';\nvar hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';\n\nmodule.exports = function isString(value) {\n\tif (typeof value === 'string') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-string/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-typed-array/index.js":
	/*!**********************************************!*\
	  !*** ./node_modules/is-typed-array/index.js ***!
	  \**********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar forEach = __webpack_require__(/*! foreach */ \"./node_modules/foreach/index.js\");\nvar availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ \"./node_modules/available-typed-arrays/index.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';\n\nvar typedArrays = availableTypedArrays();\n\nvar $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {\n\tfor (var i = 0; i < array.length; i += 1) {\n\t\tif (array[i] === value) {\n\t\t\treturn i;\n\t\t}\n\t}\n\treturn -1;\n};\nvar $slice = callBound('String.prototype.slice');\nvar toStrTags = {};\nvar gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js\");\nvar getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');\nif (hasToStringTag && gOPD && getPrototypeOf) {\n\tforEach(typedArrays, function (typedArray) {\n\t\tvar arr = new global[typedArray]();\n\t\tif (!(Symbol.toStringTag in arr)) {\n\t\t\tthrow new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');\n\t\t}\n\t\tvar proto = getPrototypeOf(arr);\n\t\tvar descriptor = gOPD(proto, Symbol.toStringTag);\n\t\tif (!descriptor) {\n\t\t\tvar superProto = getPrototypeOf(proto);\n\t\t\tdescriptor = gOPD(superProto, Symbol.toStringTag);\n\t\t}\n\t\ttoStrTags[typedArray] = descriptor.get;\n\t});\n}\n\nvar tryTypedArrays = function tryAllTypedArrays(value) {\n\tvar anyTrue = false;\n\tforEach(toStrTags, function (getter, typedArray) {\n\t\tif (!anyTrue) {\n\t\t\ttry {\n\t\t\t\tanyTrue = getter.call(value) === typedArray;\n\t\t\t} catch (e) { /**/ }\n\t\t}\n\t});\n\treturn anyTrue;\n};\n\nmodule.exports = function isTypedArray(value) {\n\tif (!value || typeof value !== 'object') { return false; }\n\tif (!hasToStringTag) {\n\t\tvar tag = $slice($toString(value), 8, -1);\n\t\treturn $indexOf(typedArrays, tag) > -1;\n\t}\n\tif (!gOPD) { return false; }\n\treturn tryTypedArrays(value);\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js":
	/*!******************************************************************************!*\
	  !*** ./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js ***!
	  \******************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js":
	/*!**********************************************************************************!*\
	  !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js ***!
	  \**********************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js":
	/*!***********************************************************************************!*\
	  !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js ***!
	  \***********************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/callBound.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":
	/*!**************************************************************************************************!*\
	  !*** ./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
	  \**************************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/is-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-weakmap/index.js":
	/*!******************************************!*\
	  !*** ./node_modules/is-weakmap/index.js ***!
	  \******************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;\nvar $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;\n\nvar exported;\n\nif (!$WeakMap) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakMap(x) {\n\t\t// `WeakMap` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $WeakMap ? $WeakMap.prototype.has : null;\nvar $setHas = $WeakSet ? $WeakSet.prototype.has : null;\nif (!exported && !$mapHas) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakMap(x) {\n\t\t// `WeakMap` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isWeakMap(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$mapHas.call(x, $mapHas);\n\t\tif ($setHas) {\n\t\t\ttry {\n\t\t\t\t$setHas.call(x, $setHas);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $WeakMap; // core-js workaround, pre-v3\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-weakmap/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/is-weakset/index.js":
	/*!******************************************!*\
	  !*** ./node_modules/is-weakset/index.js ***!
	  \******************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;\nvar $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;\n\nvar exported;\n\nif (!$WeakMap) {\n\t// eslint-disable-next-line no-unused-vars\n\texported = function isWeakSet(x) {\n\t\t// `WeakSet` is not present in this environment.\n\t\treturn false;\n\t};\n}\n\nvar $mapHas = $WeakMap ? $WeakMap.prototype.has : null;\nvar $setHas = $WeakSet ? $WeakSet.prototype.has : null;\nif (!exported && !$setHas) {\n\t// eslint-disable-next-line no-unused-vars\n\tmodule.exports = function isWeakSet(x) {\n\t\t// `WeakSet` does not have a `has` method\n\t\treturn false;\n\t};\n}\n\nmodule.exports = exported || function isWeakSet(x) {\n\tif (!x || typeof x !== 'object') {\n\t\treturn false;\n\t}\n\ttry {\n\t\t$setHas.call(x, $setHas);\n\t\tif ($mapHas) {\n\t\t\ttry {\n\t\t\t\t$mapHas.call(x, $mapHas);\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn x instanceof $WeakSet; // core-js workaround, pre-v3\n\t} catch (e) {}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/is-weakset/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object-inspect/index.js":
	/*!**********************************************!*\
	  !*** ./node_modules/object-inspect/index.js ***!
	  \**********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("var hasMap = typeof Map === 'function' && Map.prototype;\nvar mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;\nvar mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;\nvar mapForEach = hasMap && Map.prototype.forEach;\nvar hasSet = typeof Set === 'function' && Set.prototype;\nvar setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;\nvar setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;\nvar setForEach = hasSet && Set.prototype.forEach;\nvar hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;\nvar weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;\nvar hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;\nvar weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;\nvar booleanValueOf = Boolean.prototype.valueOf;\nvar objectToString = Object.prototype.toString;\nvar match = String.prototype.match;\nvar bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;\n\nvar inspectCustom = __webpack_require__(/*! ./util.inspect */ 1).custom;\nvar inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;\n\nmodule.exports = function inspect_(obj, options, depth, seen) {\n    var opts = options || {};\n\n    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {\n        throw new TypeError('option \"quoteStyle\" must be \"single\" or \"double\"');\n    }\n\n    if (typeof obj === 'undefined') {\n        return 'undefined';\n    }\n    if (obj === null) {\n        return 'null';\n    }\n    if (typeof obj === 'boolean') {\n        return obj ? 'true' : 'false';\n    }\n\n    if (typeof obj === 'string') {\n        return inspectString(obj, opts);\n    }\n    if (typeof obj === 'number') {\n        if (obj === 0) {\n            return Infinity / obj > 0 ? '0' : '-0';\n        }\n        return String(obj);\n    }\n    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof\n        return String(obj) + 'n';\n    }\n\n    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;\n    if (typeof depth === 'undefined') { depth = 0; }\n    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {\n        return '[Object]';\n    }\n\n    if (typeof seen === 'undefined') {\n        seen = [];\n    } else if (indexOf(seen, obj) >= 0) {\n        return '[Circular]';\n    }\n\n    function inspect(value, from) {\n        if (from) {\n            seen = seen.slice();\n            seen.push(from);\n        }\n        return inspect_(value, opts, depth + 1, seen);\n    }\n\n    if (typeof obj === 'function') {\n        var name = nameOf(obj);\n        return '[Function' + (name ? ': ' + name : '') + ']';\n    }\n    if (isSymbol(obj)) {\n        var symString = Symbol.prototype.toString.call(obj);\n        return typeof obj === 'object' ? markBoxed(symString) : symString;\n    }\n    if (isElement(obj)) {\n        var s = '<' + String(obj.nodeName).toLowerCase();\n        var attrs = obj.attributes || [];\n        for (var i = 0; i < attrs.length; i++) {\n            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);\n        }\n        s += '>';\n        if (obj.childNodes && obj.childNodes.length) { s += '...'; }\n        s += '</' + String(obj.nodeName).toLowerCase() + '>';\n        return s;\n    }\n    if (isArray(obj)) {\n        if (obj.length === 0) { return '[]'; }\n        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';\n    }\n    if (isError(obj)) {\n        var parts = arrObjKeys(obj, inspect);\n        if (parts.length === 0) { return '[' + String(obj) + ']'; }\n        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';\n    }\n    if (typeof obj === 'object') {\n        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {\n            return obj[inspectSymbol]();\n        } else if (typeof obj.inspect === 'function') {\n            return obj.inspect();\n        }\n    }\n    if (isMap(obj)) {\n        var mapParts = [];\n        mapForEach.call(obj, function (value, key) {\n            mapParts.push(inspect(key, obj) + ' => ' + inspect(value, obj));\n        });\n        return collectionOf('Map', mapSize.call(obj), mapParts);\n    }\n    if (isSet(obj)) {\n        var setParts = [];\n        setForEach.call(obj, function (value) {\n            setParts.push(inspect(value, obj));\n        });\n        return collectionOf('Set', setSize.call(obj), setParts);\n    }\n    if (isWeakMap(obj)) {\n        return weakCollectionOf('WeakMap');\n    }\n    if (isWeakSet(obj)) {\n        return weakCollectionOf('WeakSet');\n    }\n    if (isNumber(obj)) {\n        return markBoxed(inspect(Number(obj)));\n    }\n    if (isBigInt(obj)) {\n        return markBoxed(inspect(bigIntValueOf.call(obj)));\n    }\n    if (isBoolean(obj)) {\n        return markBoxed(booleanValueOf.call(obj));\n    }\n    if (isString(obj)) {\n        return markBoxed(inspect(String(obj)));\n    }\n    if (!isDate(obj) && !isRegExp(obj)) {\n        var xs = arrObjKeys(obj, inspect);\n        if (xs.length === 0) { return '{}'; }\n        return '{ ' + xs.join(', ') + ' }';\n    }\n    return String(obj);\n};\n\nfunction wrapQuotes(s, defaultStyle, opts) {\n    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '\"' : \"'\";\n    return quoteChar + s + quoteChar;\n}\n\nfunction quote(s) {\n    return String(s).replace(/\"/g, '&quot;');\n}\n\nfunction isArray(obj) { return toStr(obj) === '[object Array]'; }\nfunction isDate(obj) { return toStr(obj) === '[object Date]'; }\nfunction isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }\nfunction isError(obj) { return toStr(obj) === '[object Error]'; }\nfunction isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }\nfunction isString(obj) { return toStr(obj) === '[object String]'; }\nfunction isNumber(obj) { return toStr(obj) === '[object Number]'; }\nfunction isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }\nfunction isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }\n\nvar hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };\nfunction has(obj, key) {\n    return hasOwn.call(obj, key);\n}\n\nfunction toStr(obj) {\n    return objectToString.call(obj);\n}\n\nfunction nameOf(f) {\n    if (f.name) { return f.name; }\n    var m = match.call(f, /^function\\s*([\\w$]+)/);\n    if (m) { return m[1]; }\n    return null;\n}\n\nfunction indexOf(xs, x) {\n    if (xs.indexOf) { return xs.indexOf(x); }\n    for (var i = 0, l = xs.length; i < l; i++) {\n        if (xs[i] === x) { return i; }\n    }\n    return -1;\n}\n\nfunction isMap(x) {\n    if (!mapSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        mapSize.call(x);\n        try {\n            setSize.call(x);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof Map; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakMap(x) {\n    if (!weakMapHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakMapHas.call(x, weakMapHas);\n        try {\n            weakSetHas.call(x, weakSetHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isSet(x) {\n    if (!setSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        setSize.call(x);\n        try {\n            mapSize.call(x);\n        } catch (m) {\n            return true;\n        }\n        return x instanceof Set; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakSet(x) {\n    if (!weakSetHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakSetHas.call(x, weakSetHas);\n        try {\n            weakMapHas.call(x, weakMapHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isElement(x) {\n    if (!x || typeof x !== 'object') { return false; }\n    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {\n        return true;\n    }\n    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';\n}\n\nfunction inspectString(str, opts) {\n    // eslint-disable-next-line no-control-regex\n    var s = str.replace(/(['\\\\])/g, '\\\\$1').replace(/[\\x00-\\x1f]/g, lowbyte);\n    return wrapQuotes(s, 'single', opts);\n}\n\nfunction lowbyte(c) {\n    var n = c.charCodeAt(0);\n    var x = {\n        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'\n    }[n];\n    if (x) { return '\\\\' + x; }\n    return '\\\\x' + (n < 0x10 ? '0' : '') + n.toString(16);\n}\n\nfunction markBoxed(str) {\n    return 'Object(' + str + ')';\n}\n\nfunction weakCollectionOf(type) {\n    return type + ' { ? }';\n}\n\nfunction collectionOf(type, size, entries) {\n    return type + ' (' + size + ') {' + entries.join(', ') + '}';\n}\n\nfunction arrObjKeys(obj, inspect) {\n    var isArr = isArray(obj);\n    var xs = [];\n    if (isArr) {\n        xs.length = obj.length;\n        for (var i = 0; i < obj.length; i++) {\n            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';\n        }\n    }\n    for (var key in obj) { // eslint-disable-line no-restricted-syntax\n        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if ((/[^\\w$]/).test(key)) {\n            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));\n        } else {\n            xs.push(key + ': ' + inspect(obj[key], obj));\n        }\n    }\n    return xs;\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-inspect/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object-is/index.js":
	/*!*****************************************!*\
	  !*** ./node_modules/object-is/index.js ***!
	  \*****************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n// http://www.ecma-international.org/ecma-262/6.0/#sec-object.is\n\nvar numberIsNaN = function (value) {\n\treturn value !== value;\n};\n\nmodule.exports = function is(a, b) {\n\tif (a === 0 && b === 0) {\n\t\treturn 1 / a === 1 / b;\n\t}\n\tif (a === b) {\n\t\treturn true;\n\t}\n\tif (numberIsNaN(a) && numberIsNaN(b)) {\n\t\treturn true;\n\t}\n\treturn false;\n};\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-is/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object-keys/index.js":
	/*!*******************************************!*\
	  !*** ./node_modules/object-keys/index.js ***!
	  \*******************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n// modified from https://github.com/es-shims/es5-shim\nvar has = Object.prototype.hasOwnProperty;\nvar toStr = Object.prototype.toString;\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/object-keys/isArguments.js\");\nvar isEnumerable = Object.prototype.propertyIsEnumerable;\nvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\nvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\nvar dontEnums = [\n\t'toString',\n\t'toLocaleString',\n\t'valueOf',\n\t'hasOwnProperty',\n\t'isPrototypeOf',\n\t'propertyIsEnumerable',\n\t'constructor'\n];\nvar equalsConstructorPrototype = function (o) {\n\tvar ctor = o.constructor;\n\treturn ctor && ctor.prototype === o;\n};\nvar excludedKeys = {\n\t$applicationCache: true,\n\t$console: true,\n\t$external: true,\n\t$frame: true,\n\t$frameElement: true,\n\t$frames: true,\n\t$innerHeight: true,\n\t$innerWidth: true,\n\t$outerHeight: true,\n\t$outerWidth: true,\n\t$pageXOffset: true,\n\t$pageYOffset: true,\n\t$parent: true,\n\t$scrollLeft: true,\n\t$scrollTop: true,\n\t$scrollX: true,\n\t$scrollY: true,\n\t$self: true,\n\t$webkitIndexedDB: true,\n\t$webkitStorageInfo: true,\n\t$window: true\n};\nvar hasAutomationEqualityBug = (function () {\n\t/* global window */\n\tif (typeof window === 'undefined') { return false; }\n\tfor (var k in window) {\n\t\ttry {\n\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\ttry {\n\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t} catch (e) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t} catch (e) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n}());\nvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t/* global window */\n\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\treturn equalsConstructorPrototype(o);\n\t}\n\ttry {\n\t\treturn equalsConstructorPrototype(o);\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar keysShim = function keys(object) {\n\tvar isObject = object !== null && typeof object === 'object';\n\tvar isFunction = toStr.call(object) === '[object Function]';\n\tvar isArguments = isArgs(object);\n\tvar isString = isObject && toStr.call(object) === '[object String]';\n\tvar theKeys = [];\n\n\tif (!isObject && !isFunction && !isArguments) {\n\t\tthrow new TypeError('Object.keys called on a non-object');\n\t}\n\n\tvar skipProto = hasProtoEnumBug && isFunction;\n\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\ttheKeys.push(String(i));\n\t\t}\n\t}\n\n\tif (isArguments && object.length > 0) {\n\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\ttheKeys.push(String(j));\n\t\t}\n\t} else {\n\t\tfor (var name in object) {\n\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\ttheKeys.push(String(name));\n\t\t\t}\n\t\t}\n\t}\n\n\tif (hasDontEnumBug) {\n\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t}\n\t\t}\n\t}\n\treturn theKeys;\n};\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\treturn (Object.keys(arguments) || '').length === 2;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tvar originalKeys = Object.keys;\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t} else {\n\t\t\t\t\treturn originalKeys(object);\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-keys/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object-keys/isArguments.js":
	/*!*************************************************!*\
	  !*** ./node_modules/object-keys/isArguments.js ***!
	  \*************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object-keys/isArguments.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object.assign/implementation.js":
	/*!******************************************************!*\
	  !*** ./node_modules/object.assign/implementation.js ***!
	  \******************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n// modified from https://github.com/es-shims/es6-shim\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar canBeObject = function (obj) {\n\treturn typeof obj !== 'undefined' && obj !== null;\n};\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")();\nvar toObject = Object;\nvar push = bind.call(Function.call, Array.prototype.push);\nvar propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);\nvar originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;\n\nmodule.exports = function assign(target, source1) {\n\tif (!canBeObject(target)) { throw new TypeError('target must be an object'); }\n\tvar objTarget = toObject(target);\n\tvar s, source, i, props, syms, value, key;\n\tfor (s = 1; s < arguments.length; ++s) {\n\t\tsource = toObject(arguments[s]);\n\t\tprops = keys(source);\n\t\tvar getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);\n\t\tif (getSymbols) {\n\t\t\tsyms = getSymbols(source);\n\t\t\tfor (i = 0; i < syms.length; ++i) {\n\t\t\t\tkey = syms[i];\n\t\t\t\tif (propIsEnumerable(source, key)) {\n\t\t\t\t\tpush(props, key);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tfor (i = 0; i < props.length; ++i) {\n\t\t\tkey = props[i];\n\t\t\tvalue = source[key];\n\t\t\tif (propIsEnumerable(source, key)) {\n\t\t\t\tobjTarget[key] = value;\n\t\t\t}\n\t\t}\n\t}\n\treturn objTarget;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/implementation.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object.assign/index.js":
	/*!*********************************************!*\
	  !*** ./node_modules/object.assign/index.js ***!
	  \*********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar defineProperties = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.assign/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.assign/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/object.assign/shim.js\");\n\nvar polyfill = getPolyfill();\n\ndefineProperties(polyfill, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = polyfill;\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object.assign/polyfill.js":
	/*!************************************************!*\
	  !*** ./node_modules/object.assign/polyfill.js ***!
	  \************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.assign/implementation.js\");\n\nvar lacksProperEnumerationOrder = function () {\n\tif (!Object.assign) {\n\t\treturn false;\n\t}\n\t// v8, specifically in node 4.x, has a bug with incorrect property enumeration order\n\t// note: this does not detect the bug unless there's 20 characters\n\tvar str = 'abcdefghijklmnopqrst';\n\tvar letters = str.split('');\n\tvar map = {};\n\tfor (var i = 0; i < letters.length; ++i) {\n\t\tmap[letters[i]] = letters[i];\n\t}\n\tvar obj = Object.assign({}, map);\n\tvar actual = '';\n\tfor (var k in obj) {\n\t\tactual += k;\n\t}\n\treturn str !== actual;\n};\n\nvar assignHasPendingExceptions = function () {\n\tif (!Object.assign || !Object.preventExtensions) {\n\t\treturn false;\n\t}\n\t// Firefox 37 still has \"pending exception\" logic in its Object.assign implementation,\n\t// which is 72% slower than our shim, and Firefox 40's native implementation.\n\tvar thrower = Object.preventExtensions({ 1: 2 });\n\ttry {\n\t\tObject.assign(thrower, 'xy');\n\t} catch (e) {\n\t\treturn thrower[1] === 'y';\n\t}\n\treturn false;\n};\n\nmodule.exports = function getPolyfill() {\n\tif (!Object.assign) {\n\t\treturn implementation;\n\t}\n\tif (lacksProperEnumerationOrder()) {\n\t\treturn implementation;\n\t}\n\tif (assignHasPendingExceptions()) {\n\t\treturn implementation;\n\t}\n\treturn Object.assign;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/polyfill.js?");
	
	/***/ }),
	
	/***/ "./node_modules/object.assign/shim.js":
	/*!********************************************!*\
	  !*** ./node_modules/object.assign/shim.js ***!
	  \********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.assign/polyfill.js\");\n\nmodule.exports = function shimAssign() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tObject,\n\t\t{ assign: polyfill },\n\t\t{ assign: function () { return Object.assign !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/object.assign/shim.js?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/attributor/attributor.ts":
	/*!*************************************************************!*\
	  !*** ./node_modules/parchment/src/attributor/attributor.ts ***!
	  \*************************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Attributor; });\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n\nclass Attributor {\n    constructor(attrName, keyName, options = {}) {\n        this.attrName = attrName;\n        this.keyName = keyName;\n        const attributeBit = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TYPE & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        this.scope =\n            options.scope != null\n                ? // Ignore type bits, force attribute bit\n                    (options.scope & _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].LEVEL) | attributeBit\n                : _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ATTRIBUTE;\n        if (options.whitelist != null) {\n            this.whitelist = options.whitelist;\n        }\n    }\n    static keys(node) {\n        return Array.from(node.attributes).map((item) => item.name);\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        node.setAttribute(this.keyName, value);\n        return true;\n    }\n    canAdd(_node, value) {\n        if (this.whitelist == null) {\n            return true;\n        }\n        if (typeof value === 'string') {\n            return this.whitelist.indexOf(value.replace(/[\"']/g, '')) > -1;\n        }\n        else {\n            return this.whitelist.indexOf(value) > -1;\n        }\n    }\n    remove(node) {\n        node.removeAttribute(this.keyName);\n    }\n    value(node) {\n        const value = node.getAttribute(this.keyName);\n        if (this.canAdd(node, value) && value) {\n            return value;\n        }\n        return '';\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/attributor.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/attributor/class.ts":
	/*!********************************************************!*\
	  !*** ./node_modules/parchment/src/attributor/class.ts ***!
	  \********************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction match(node, prefix) {\n    const className = node.getAttribute('class') || '';\n    return className\n        .split(/\\s+/)\n        .filter((name) => name.indexOf(`${prefix}-`) === 0);\n}\nclass ClassAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('class') || '')\n            .split(/\\s+/)\n            .map((name) => name.split('-').slice(0, -1).join('-'));\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        this.remove(node);\n        node.classList.add(`${this.keyName}-${value}`);\n        return true;\n    }\n    remove(node) {\n        const matches = match(node, this.keyName);\n        matches.forEach((name) => {\n            node.classList.remove(name);\n        });\n        if (node.classList.length === 0) {\n            node.removeAttribute('class');\n        }\n    }\n    value(node) {\n        const result = match(node, this.keyName)[0] || '';\n        const value = result.slice(this.keyName.length + 1); // +1 for hyphen\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/class.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/attributor/store.ts":
	/*!********************************************************!*\
	  !*** ./node_modules/parchment/src/attributor/store.ts ***!
	  \********************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./node_modules/parchment/src/attributor/style.ts\");\n\n\n\n\n\nclass AttributorStore {\n    constructor(domNode) {\n        this.attributes = {};\n        this.domNode = domNode;\n        this.build();\n    }\n    attribute(attribute, value) {\n        // verb\n        if (value) {\n            if (attribute.add(this.domNode, value)) {\n                if (attribute.value(this.domNode) != null) {\n                    this.attributes[attribute.attrName] = attribute;\n                }\n                else {\n                    delete this.attributes[attribute.attrName];\n                }\n            }\n        }\n        else {\n            attribute.remove(this.domNode);\n            delete this.attributes[attribute.attrName];\n        }\n    }\n    build() {\n        this.attributes = {};\n        const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(this.domNode);\n        if (blot == null) {\n            return;\n        }\n        const attributes = _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"].keys(this.domNode);\n        const classes = _class__WEBPACK_IMPORTED_MODULE_3__[\"default\"].keys(this.domNode);\n        const styles = _style__WEBPACK_IMPORTED_MODULE_4__[\"default\"].keys(this.domNode);\n        attributes\n            .concat(classes)\n            .concat(styles)\n            .forEach((name) => {\n            const attr = blot.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ATTRIBUTE);\n            if (attr instanceof _attributor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n                this.attributes[attr.attrName] = attr;\n            }\n        });\n    }\n    copy(target) {\n        Object.keys(this.attributes).forEach((key) => {\n            const value = this.attributes[key].value(this.domNode);\n            target.format(key, value);\n        });\n    }\n    move(target) {\n        this.copy(target);\n        Object.keys(this.attributes).forEach((key) => {\n            this.attributes[key].remove(this.domNode);\n        });\n        this.attributes = {};\n    }\n    values() {\n        return Object.keys(this.attributes).reduce((attributes, name) => {\n            attributes[name] = this.attributes[name].value(this.domNode);\n            return attributes;\n        }, {});\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AttributorStore);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/store.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/attributor/style.ts":
	/*!********************************************************!*\
	  !*** ./node_modules/parchment/src/attributor/style.ts ***!
	  \********************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n\nfunction camelize(name) {\n    const parts = name.split('-');\n    const rest = parts\n        .slice(1)\n        .map((part) => part[0].toUpperCase() + part.slice(1))\n        .join('');\n    return parts[0] + rest;\n}\nclass StyleAttributor extends _attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static keys(node) {\n        return (node.getAttribute('style') || '').split(';').map((value) => {\n            const arr = value.split(':');\n            return arr[0].trim();\n        });\n    }\n    add(node, value) {\n        if (!this.canAdd(node, value)) {\n            return false;\n        }\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = value;\n        return true;\n    }\n    remove(node) {\n        // @ts-ignore\n        node.style[camelize(this.keyName)] = '';\n        if (!node.getAttribute('style')) {\n            node.removeAttribute('style');\n        }\n    }\n    value(node) {\n        // @ts-ignore\n        const value = node.style[camelize(this.keyName)];\n        return this.canAdd(node, value) ? value : '';\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyleAttributor);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/attributor/style.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/abstract/container.ts":
	/*!***************************************************************!*\
	  !*** ./node_modules/parchment/src/blot/abstract/container.ts ***!
	  \***************************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\nclass ContainerBlot extends _parent__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    checkMerge() {\n        return (this.next !== null && this.next.statics.blotName === this.statics.blotName);\n    }\n    deleteAt(index, length) {\n        super.deleteAt(index, length);\n        this.enforceAllowedChildren();\n    }\n    formatAt(index, length, name, value) {\n        super.formatAt(index, length, name, value);\n        this.enforceAllowedChildren();\n    }\n    insertAt(index, value, def) {\n        super.insertAt(index, value, def);\n        this.enforceAllowedChildren();\n    }\n    optimize(context) {\n        super.optimize(context);\n        if (this.children.length > 0 && this.next != null && this.checkMerge()) {\n            this.next.moveChildren(this);\n            this.next.remove();\n        }\n    }\n}\nContainerBlot.blotName = 'container';\nContainerBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BLOCK_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/container.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/abstract/leaf.ts":
	/*!**********************************************************!*\
	  !*** ./node_modules/parchment/src/blot/abstract/leaf.ts ***!
	  \**********************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\nclass LeafBlot extends _shadow__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    static value(_domNode) {\n        return true;\n    }\n    index(node, offset) {\n        if (this.domNode === node ||\n            this.domNode.compareDocumentPosition(node) &\n                Node.DOCUMENT_POSITION_CONTAINED_BY) {\n            return Math.min(offset, 1);\n        }\n        return -1;\n    }\n    position(index, _inclusive) {\n        const childNodes = Array.from(this.parent.domNode.childNodes);\n        let offset = childNodes.indexOf(this.domNode);\n        if (index > 0) {\n            offset += 1;\n        }\n        return [this.parent.domNode, offset];\n    }\n    value() {\n        return {\n            [this.statics.blotName]: this.statics.value(this.domNode) || true,\n        };\n    }\n}\nLeafBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeafBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/leaf.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/abstract/parent.ts":
	/*!************************************************************!*\
	  !*** ./node_modules/parchment/src/blot/abstract/parent.ts ***!
	  \************************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../collection/linked-list */ \"./node_modules/parchment/src/collection/linked-list.ts\");\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shadow */ \"./node_modules/parchment/src/blot/abstract/shadow.ts\");\n\n\n\n\nfunction makeAttachedBlot(node, scroll) {\n    let blot = scroll.find(node);\n    if (blot == null) {\n        try {\n            blot = scroll.create(node);\n        }\n        catch (e) {\n            blot = scroll.create(_scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            Array.from(node.childNodes).forEach((child) => {\n                // @ts-ignore\n                blot.domNode.appendChild(child);\n            });\n            if (node.parentNode) {\n                node.parentNode.replaceChild(blot.domNode, node);\n            }\n            blot.attach();\n        }\n    }\n    return blot;\n}\nclass ParentBlot extends _shadow__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.uiNode = null;\n        this.build();\n    }\n    appendChild(other) {\n        this.insertBefore(other);\n    }\n    attach() {\n        super.attach();\n        this.children.forEach((child) => {\n            child.attach();\n        });\n    }\n    attachUI(node) {\n        if (this.uiNode != null) {\n            this.uiNode.remove();\n        }\n        this.uiNode = node;\n        if (ParentBlot.uiClass) {\n            this.uiNode.classList.add(ParentBlot.uiClass);\n        }\n        this.uiNode.setAttribute('contenteditable', 'false');\n        this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n    }\n    build() {\n        this.children = new _collection_linked_list__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        // Need to be reversed for if DOM nodes already in order\n        Array.from(this.domNode.childNodes)\n            .filter((node) => node !== this.uiNode)\n            .reverse()\n            .forEach((node) => {\n            try {\n                const child = makeAttachedBlot(node, this.scroll);\n                this.insertBefore(child, this.children.head || undefined);\n            }\n            catch (err) {\n                if (err instanceof _error__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n                    return;\n                }\n                else {\n                    throw err;\n                }\n            }\n        });\n    }\n    deleteAt(index, length) {\n        if (index === 0 && length === this.length()) {\n            return this.remove();\n        }\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.deleteAt(offset, childLength);\n        });\n    }\n    descendant(criteria, index = 0) {\n        const [child, offset] = this.children.find(index);\n        if ((criteria.blotName == null && criteria(child)) ||\n            (criteria.blotName != null && child instanceof criteria)) {\n            return [child, offset];\n        }\n        else if (child instanceof ParentBlot) {\n            return child.descendant(criteria, offset);\n        }\n        else {\n            return [null, -1];\n        }\n    }\n    descendants(criteria, index = 0, length = Number.MAX_VALUE) {\n        let descendants = [];\n        let lengthLeft = length;\n        this.children.forEachAt(index, length, (child, childIndex, childLength) => {\n            if ((criteria.blotName == null && criteria(child)) ||\n                (criteria.blotName != null && child instanceof criteria)) {\n                descendants.push(child);\n            }\n            if (child instanceof ParentBlot) {\n                descendants = descendants.concat(child.descendants(criteria, childIndex, lengthLeft));\n            }\n            lengthLeft -= childLength;\n        });\n        return descendants;\n    }\n    detach() {\n        this.children.forEach((child) => {\n            child.detach();\n        });\n        super.detach();\n    }\n    enforceAllowedChildren() {\n        let done = false;\n        this.children.forEach((child) => {\n            if (done) {\n                return;\n            }\n            const allowed = this.statics.allowedChildren.some((def) => child instanceof def);\n            if (allowed) {\n                return;\n            }\n            if (child.statics.scope === _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT) {\n                if (child.next != null) {\n                    this.splitAfter(child);\n                }\n                if (child.prev != null) {\n                    this.splitAfter(child.prev);\n                }\n                child.parent.unwrap();\n                done = true;\n            }\n            else if (child instanceof ParentBlot) {\n                child.unwrap();\n            }\n            else {\n                child.remove();\n            }\n        });\n    }\n    formatAt(index, length, name, value) {\n        this.children.forEachAt(index, length, (child, offset, childLength) => {\n            child.formatAt(offset, childLength, name, value);\n        });\n    }\n    insertAt(index, value, def) {\n        const [child, offset] = this.children.find(index);\n        if (child) {\n            child.insertAt(offset, value, def);\n        }\n        else {\n            const blot = def == null\n                ? this.scroll.create('text', value)\n                : this.scroll.create(value, def);\n            this.appendChild(blot);\n        }\n    }\n    insertBefore(childBlot, refBlot) {\n        if (childBlot.parent != null) {\n            childBlot.parent.children.remove(childBlot);\n        }\n        let refDomNode = null;\n        this.children.insertBefore(childBlot, refBlot || null);\n        childBlot.parent = this;\n        if (refBlot != null) {\n            refDomNode = refBlot.domNode;\n        }\n        if (this.domNode.parentNode !== childBlot.domNode ||\n            this.domNode.nextSibling !== refDomNode) {\n            this.domNode.insertBefore(childBlot.domNode, refDomNode);\n        }\n        childBlot.attach();\n    }\n    length() {\n        return this.children.reduce((memo, child) => {\n            return memo + child.length();\n        }, 0);\n    }\n    moveChildren(targetParent, refNode) {\n        this.children.forEach((child) => {\n            targetParent.insertBefore(child, refNode);\n        });\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.enforceAllowedChildren();\n        if (this.uiNode != null && this.uiNode !== this.domNode.firstChild) {\n            this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);\n        }\n        if (this.children.length === 0) {\n            if (this.statics.defaultChild != null) {\n                const child = this.scroll.create(this.statics.defaultChild.blotName);\n                this.appendChild(child);\n                // TODO double check if necessary\n                // child.optimize(context);\n            }\n            else {\n                this.remove();\n            }\n        }\n    }\n    path(index, inclusive = false) {\n        const [child, offset] = this.children.find(index, inclusive);\n        const position = [[this, index]];\n        if (child instanceof ParentBlot) {\n            return position.concat(child.path(offset, inclusive));\n        }\n        else if (child != null) {\n            position.push([child, offset]);\n        }\n        return position;\n    }\n    removeChild(child) {\n        this.children.remove(child);\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (replacement instanceof ParentBlot) {\n            this.moveChildren(replacement);\n        }\n        return super.replaceWith(replacement);\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.clone();\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        this.children.forEachAt(index, this.length(), (child, offset, _length) => {\n            const split = child.split(offset, force);\n            if (split != null) {\n                after.appendChild(split);\n            }\n        });\n        return after;\n    }\n    splitAfter(child) {\n        const after = this.clone();\n        while (child.next != null) {\n            after.appendChild(child.next);\n        }\n        if (this.parent) {\n            this.parent.insertBefore(after, this.next || undefined);\n        }\n        return after;\n    }\n    unwrap() {\n        if (this.parent) {\n            this.moveChildren(this.parent, this.next || undefined);\n        }\n        this.remove();\n    }\n    update(mutations, _context) {\n        const addedNodes = [];\n        const removedNodes = [];\n        mutations.forEach((mutation) => {\n            if (mutation.target === this.domNode && mutation.type === 'childList') {\n                addedNodes.push(...mutation.addedNodes);\n                removedNodes.push(...mutation.removedNodes);\n            }\n        });\n        removedNodes.forEach((node) => {\n            // Check node has actually been removed\n            // One exception is Chrome does not immediately remove IFRAMEs\n            // from DOM but MutationRecord is correct in its reported removal\n            if (node.parentNode != null &&\n                // @ts-ignore\n                node.tagName !== 'IFRAME' &&\n                document.body.compareDocumentPosition(node) &\n                    Node.DOCUMENT_POSITION_CONTAINED_BY) {\n                return;\n            }\n            const blot = this.scroll.find(node);\n            if (blot == null) {\n                return;\n            }\n            if (blot.domNode.parentNode == null ||\n                blot.domNode.parentNode === this.domNode) {\n                blot.detach();\n            }\n        });\n        addedNodes\n            .filter((node) => {\n            return node.parentNode === this.domNode || node === this.uiNode;\n        })\n            .sort((a, b) => {\n            if (a === b) {\n                return 0;\n            }\n            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {\n                return 1;\n            }\n            return -1;\n        })\n            .forEach((node) => {\n            let refBlot = null;\n            if (node.nextSibling != null) {\n                refBlot = this.scroll.find(node.nextSibling);\n            }\n            const blot = makeAttachedBlot(node, this.scroll);\n            if (blot.next !== refBlot || blot.next == null) {\n                if (blot.parent != null) {\n                    blot.parent.removeChild(this);\n                }\n                this.insertBefore(blot, refBlot || undefined);\n            }\n        });\n        this.enforceAllowedChildren();\n    }\n}\nParentBlot.uiClass = '';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParentBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/parent.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/abstract/shadow.ts":
	/*!************************************************************!*\
	  !*** ./node_modules/parchment/src/blot/abstract/shadow.ts ***!
	  \************************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\n\nclass ShadowBlot {\n    constructor(scroll, domNode) {\n        this.scroll = scroll;\n        this.domNode = domNode;\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.set(domNode, this);\n        this.prev = null;\n        this.next = null;\n    }\n    static create(value) {\n        if (this.tagName == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Blot definition missing tagName');\n        }\n        let node;\n        if (Array.isArray(this.tagName)) {\n            if (typeof value === 'string') {\n                value = value.toUpperCase();\n                if (parseInt(value, 10).toString() === value) {\n                    value = parseInt(value, 10);\n                }\n            }\n            if (typeof value === 'number') {\n                node = document.createElement(this.tagName[value - 1]);\n            }\n            else if (this.tagName.indexOf(value) > -1) {\n                node = document.createElement(value);\n            }\n            else {\n                node = document.createElement(this.tagName[0]);\n            }\n        }\n        else {\n            node = document.createElement(this.tagName);\n        }\n        if (this.className) {\n            node.classList.add(this.className);\n        }\n        return node;\n    }\n    // Hack for accessing inherited static methods\n    get statics() {\n        return this.constructor;\n    }\n    attach() {\n        // Nothing to do\n    }\n    clone() {\n        const domNode = this.domNode.cloneNode(false);\n        return this.scroll.create(domNode);\n    }\n    detach() {\n        if (this.parent != null) {\n            this.parent.removeChild(this);\n        }\n        _registry__WEBPACK_IMPORTED_MODULE_1__[\"default\"].blots.delete(this.domNode);\n    }\n    deleteAt(index, length) {\n        const blot = this.isolate(index, length);\n        blot.remove();\n    }\n    formatAt(index, length, name, value) {\n        const blot = this.isolate(index, length);\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOT) != null && value) {\n            blot.wrap(name, value);\n        }\n        else if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE) != null) {\n            const parent = this.scroll.create(this.statics.scope);\n            blot.wrap(parent);\n            parent.format(name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        const blot = def == null\n            ? this.scroll.create('text', value)\n            : this.scroll.create(value, def);\n        const ref = this.split(index);\n        this.parent.insertBefore(blot, ref || undefined);\n    }\n    isolate(index, length) {\n        const target = this.split(index);\n        if (target == null) {\n            throw new Error('Attempt to isolate at end');\n        }\n        target.split(length);\n        return target;\n    }\n    length() {\n        return 1;\n    }\n    offset(root = this.parent) {\n        if (this.parent == null || this === root) {\n            return 0;\n        }\n        return this.parent.children.offset(this) + this.parent.offset(root);\n    }\n    optimize(_context) {\n        if (this.statics.requiredContainer &&\n            !(this.parent instanceof this.statics.requiredContainer)) {\n            this.wrap(this.statics.requiredContainer.blotName);\n        }\n    }\n    remove() {\n        if (this.domNode.parentNode != null) {\n            this.domNode.parentNode.removeChild(this.domNode);\n        }\n        this.detach();\n    }\n    replaceWith(name, value) {\n        const replacement = typeof name === 'string' ? this.scroll.create(name, value) : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(replacement, this.next || undefined);\n            this.remove();\n        }\n        return replacement;\n    }\n    split(index, _force) {\n        return index === 0 ? this : this.next;\n    }\n    update(_mutations, _context) {\n        // Nothing to do by default\n    }\n    wrap(name, value) {\n        const wrapper = typeof name === 'string'\n            ? this.scroll.create(name, value)\n            : name;\n        if (this.parent != null) {\n            this.parent.insertBefore(wrapper, this.next || undefined);\n        }\n        if (typeof wrapper.appendChild !== 'function') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Cannot wrap ${name}`);\n        }\n        wrapper.appendChild(this);\n        return wrapper;\n    }\n}\nShadowBlot.blotName = 'abstract';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShadowBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/abstract/shadow.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/block.ts":
	/*!**************************************************!*\
	  !*** ./node_modules/parchment/src/blot/block.ts ***!
	  \**************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n\n\n\n\n\n\nclass BlockBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(BlockBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n    }\n    format(name, value) {\n        const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK);\n        if (format == null) {\n            return;\n        }\n        else if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.attributes.attribute(format, value);\n        }\n        else if (name === this.statics.blotName && !value) {\n            this.replaceWith(BlockBlot.blotName);\n        }\n        else if (value &&\n            (name !== this.statics.blotName || this.formats()[name] !== value)) {\n            this.replaceWith(name, value);\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK) != null) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    insertAt(index, value, def) {\n        if (def == null || this.scroll.query(value, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE) != null) {\n            // Insert text or inline\n            super.insertAt(index, value, def);\n        }\n        else {\n            const after = this.split(index);\n            if (after != null) {\n                const blot = this.scroll.create(value, def);\n                after.parent.insertBefore(blot, after);\n            }\n            else {\n                throw new Error('Attempt to insertAt after block boundaries');\n            }\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n}\nBlockBlot.blotName = 'block';\nBlockBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].BLOCK_BLOT;\nBlockBlot.tagName = 'P';\nBlockBlot.allowedChildren = [\n    _inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    BlockBlot,\n    _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/block.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/embed.ts":
	/*!**************************************************!*\
	  !*** ./node_modules/parchment/src/blot/embed.ts ***!
	  \**************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\nclass EmbedBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static formats(_domNode, _scroll) {\n        return undefined;\n    }\n    format(name, value) {\n        // super.formatAt wraps, which is what we want in general,\n        // but this allows subclasses to overwrite for formats\n        // that just apply to particular embeds\n        super.formatAt(0, this.length(), name, value);\n    }\n    formatAt(index, length, name, value) {\n        if (index === 0 && length === this.length()) {\n            this.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    formats() {\n        return this.statics.formats(this.domNode, this.scroll);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmbedBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/embed.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/inline.ts":
	/*!***************************************************!*\
	  !*** ./node_modules/parchment/src/blot/inline.ts ***!
	  \***************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n\n\n\n\n\n// Shallow object comparison\nfunction isEqual(obj1, obj2) {\n    if (Object.keys(obj1).length !== Object.keys(obj2).length) {\n        return false;\n    }\n    // @ts-ignore\n    for (const prop in obj1) {\n        // @ts-ignore\n        if (obj1[prop] !== obj2[prop]) {\n            return false;\n        }\n    }\n    return true;\n}\nclass InlineBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_4__[\"default\"] {\n    constructor(scroll, domNode) {\n        super(scroll, domNode);\n        this.attributes = new _attributor_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.domNode);\n    }\n    static formats(domNode, scroll) {\n        const match = scroll.query(InlineBlot.blotName);\n        if (match != null &&\n            domNode.tagName === match.tagName) {\n            return undefined;\n        }\n        else if (typeof this.tagName === 'string') {\n            return true;\n        }\n        else if (Array.isArray(this.tagName)) {\n            return domNode.tagName.toLowerCase();\n        }\n        return undefined;\n    }\n    format(name, value) {\n        if (name === this.statics.blotName && !value) {\n            this.children.forEach((child) => {\n                if (!(child instanceof InlineBlot)) {\n                    child = child.wrap(InlineBlot.blotName, true);\n                }\n                this.attributes.copy(child);\n            });\n            this.unwrap();\n        }\n        else {\n            const format = this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE);\n            if (format == null) {\n                return;\n            }\n            if (format instanceof _attributor_attributor__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n                this.attributes.attribute(format, value);\n            }\n            else if (value &&\n                (name !== this.statics.blotName || this.formats()[name] !== value)) {\n                this.replaceWith(name, value);\n            }\n        }\n    }\n    formats() {\n        const formats = this.attributes.values();\n        const format = this.statics.formats(this.domNode, this.scroll);\n        if (format != null) {\n            formats[this.statics.blotName] = format;\n        }\n        return formats;\n    }\n    formatAt(index, length, name, value) {\n        if (this.formats()[name] != null ||\n            this.scroll.query(name, _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ATTRIBUTE)) {\n            const blot = this.isolate(index, length);\n            blot.format(name, value);\n        }\n        else {\n            super.formatAt(index, length, name, value);\n        }\n    }\n    optimize(context) {\n        super.optimize(context);\n        const formats = this.formats();\n        if (Object.keys(formats).length === 0) {\n            return this.unwrap(); // unformatted span\n        }\n        const next = this.next;\n        if (next instanceof InlineBlot &&\n            next.prev === this &&\n            isEqual(formats, next.formats())) {\n            next.moveChildren(this);\n            next.remove();\n        }\n    }\n    replaceWith(name, value) {\n        const replacement = super.replaceWith(name, value);\n        this.attributes.copy(replacement);\n        return replacement;\n    }\n    update(mutations, context) {\n        super.update(mutations, context);\n        const attributeChanged = mutations.some((mutation) => mutation.target === this.domNode && mutation.type === 'attributes');\n        if (attributeChanged) {\n            this.attributes.build();\n        }\n    }\n    wrap(name, value) {\n        const wrapper = super.wrap(name, value);\n        if (wrapper instanceof InlineBlot) {\n            this.attributes.move(wrapper);\n        }\n        return wrapper;\n    }\n}\nInlineBlot.allowedChildren = [InlineBlot, _abstract_leaf__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\nInlineBlot.blotName = 'inline';\nInlineBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_2__[\"default\"].INLINE_BLOT;\nInlineBlot.tagName = 'SPAN';\n/* harmony default export */ __webpack_exports__[\"default\"] = (InlineBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/inline.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/scroll.ts":
	/*!***************************************************!*\
	  !*** ./node_modules/parchment/src/blot/scroll.ts ***!
	  \***************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony import */ var _abstract_parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ \"./node_modules/parchment/src/blot/block.ts\");\n\n\n\n\n\nconst OBSERVER_CONFIG = {\n    attributes: true,\n    characterData: true,\n    characterDataOldValue: true,\n    childList: true,\n    subtree: true,\n};\nconst MAX_OPTIMIZE_ITERATIONS = 100;\nclass ScrollBlot extends _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n    constructor(registry, node) {\n        // @ts-ignore\n        super(null, node);\n        this.registry = registry;\n        this.scroll = this;\n        this.build();\n        this.observer = new MutationObserver((mutations) => {\n            this.update(mutations);\n        });\n        this.observer.observe(this.domNode, OBSERVER_CONFIG);\n        this.attach();\n    }\n    create(input, value) {\n        return this.registry.create(this, input, value);\n    }\n    find(node, bubble = false) {\n        return this.registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        return this.registry.query(query, scope);\n    }\n    register(...definitions) {\n        return this.registry.register(...definitions);\n    }\n    build() {\n        if (this.scroll == null) {\n            return;\n        }\n        super.build();\n    }\n    detach() {\n        super.detach();\n        this.observer.disconnect();\n    }\n    deleteAt(index, length) {\n        this.update();\n        if (index === 0 && length === this.length()) {\n            this.children.forEach((child) => {\n                child.remove();\n            });\n        }\n        else {\n            super.deleteAt(index, length);\n        }\n    }\n    formatAt(index, length, name, value) {\n        this.update();\n        super.formatAt(index, length, name, value);\n    }\n    insertAt(index, value, def) {\n        this.update();\n        super.insertAt(index, value, def);\n    }\n    optimize(mutations = [], context = {}) {\n        super.optimize(context);\n        const mutationsMap = context.mutationsMap || new WeakMap();\n        // We must modify mutations directly, cannot make copy and then modify\n        let records = Array.from(this.observer.takeRecords());\n        // Array.push currently seems to be implemented by a non-tail recursive function\n        // so we cannot just mutations.push.apply(mutations, this.observer.takeRecords());\n        while (records.length > 0) {\n            mutations.push(records.pop());\n        }\n        const mark = (blot, markParent = true) => {\n            if (blot == null || blot === this) {\n                return;\n            }\n            if (blot.domNode.parentNode == null) {\n                return;\n            }\n            if (!mutationsMap.has(blot.domNode)) {\n                mutationsMap.set(blot.domNode, []);\n            }\n            if (markParent) {\n                mark(blot.parent);\n            }\n        };\n        const optimize = (blot) => {\n            // Post-order traversal\n            if (!mutationsMap.has(blot.domNode)) {\n                return;\n            }\n            if (blot instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                blot.children.forEach(optimize);\n            }\n            mutationsMap.delete(blot.domNode);\n            blot.optimize(context);\n        };\n        let remaining = mutations;\n        for (let i = 0; remaining.length > 0; i += 1) {\n            if (i >= MAX_OPTIMIZE_ITERATIONS) {\n                throw new Error('[Parchment] Maximum optimize iterations reached');\n            }\n            remaining.forEach((mutation) => {\n                const blot = this.find(mutation.target, true);\n                if (blot == null) {\n                    return;\n                }\n                if (blot.domNode === mutation.target) {\n                    if (mutation.type === 'childList') {\n                        mark(this.find(mutation.previousSibling, false));\n                        Array.from(mutation.addedNodes).forEach((node) => {\n                            const child = this.find(node, false);\n                            mark(child, false);\n                            if (child instanceof _abstract_parent__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n                                child.children.forEach((grandChild) => {\n                                    mark(grandChild, false);\n                                });\n                            }\n                        });\n                    }\n                    else if (mutation.type === 'attributes') {\n                        mark(blot.prev);\n                    }\n                }\n                mark(blot);\n            });\n            this.children.forEach(optimize);\n            remaining = Array.from(this.observer.takeRecords());\n            records = remaining.slice();\n            while (records.length > 0) {\n                mutations.push(records.pop());\n            }\n        }\n    }\n    update(mutations, context = {}) {\n        mutations = mutations || this.observer.takeRecords();\n        const mutationsMap = new WeakMap();\n        mutations\n            .map((mutation) => {\n            const blot = _registry__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(mutation.target, true);\n            if (blot == null) {\n                return null;\n            }\n            if (mutationsMap.has(blot.domNode)) {\n                mutationsMap.get(blot.domNode).push(mutation);\n                return null;\n            }\n            else {\n                mutationsMap.set(blot.domNode, [mutation]);\n                return blot;\n            }\n        })\n            .forEach((blot) => {\n            if (blot != null && blot !== this && mutationsMap.has(blot.domNode)) {\n                blot.update(mutationsMap.get(blot.domNode) || [], context);\n            }\n        });\n        context.mutationsMap = mutationsMap;\n        if (mutationsMap.has(this.domNode)) {\n            super.update(mutationsMap.get(this.domNode), context);\n        }\n        this.optimize(mutations, context);\n    }\n}\nScrollBlot.blotName = 'scroll';\nScrollBlot.defaultChild = _block__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nScrollBlot.allowedChildren = [_block__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _abstract_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nScrollBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK_BLOT;\nScrollBlot.tagName = 'DIV';\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/scroll.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/blot/text.ts":
	/*!*************************************************!*\
	  !*** ./node_modules/parchment/src/blot/text.ts ***!
	  \*************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony import */ var _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n\n\nclass TextBlot extends _abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor(scroll, node) {\n        super(scroll, node);\n        this.text = this.statics.value(this.domNode);\n    }\n    static create(value) {\n        return document.createTextNode(value);\n    }\n    static value(domNode) {\n        return domNode.data;\n    }\n    deleteAt(index, length) {\n        this.domNode.data = this.text =\n            this.text.slice(0, index) + this.text.slice(index + length);\n    }\n    index(node, offset) {\n        if (this.domNode === node) {\n            return offset;\n        }\n        return -1;\n    }\n    insertAt(index, value, def) {\n        if (def == null) {\n            this.text = this.text.slice(0, index) + value + this.text.slice(index);\n            this.domNode.data = this.text;\n        }\n        else {\n            super.insertAt(index, value, def);\n        }\n    }\n    length() {\n        return this.text.length;\n    }\n    optimize(context) {\n        super.optimize(context);\n        this.text = this.statics.value(this.domNode);\n        if (this.text.length === 0) {\n            this.remove();\n        }\n        else if (this.next instanceof TextBlot && this.next.prev === this) {\n            this.insertAt(this.length(), this.next.value());\n            this.next.remove();\n        }\n    }\n    position(index, _inclusive = false) {\n        return [this.domNode, index];\n    }\n    split(index, force = false) {\n        if (!force) {\n            if (index === 0) {\n                return this;\n            }\n            if (index === this.length()) {\n                return this.next;\n            }\n        }\n        const after = this.scroll.create(this.domNode.splitText(index));\n        this.parent.insertBefore(after, this.next || undefined);\n        this.text = this.statics.value(this.domNode);\n        return after;\n    }\n    update(mutations, _context) {\n        if (mutations.some((mutation) => {\n            return (mutation.type === 'characterData' && mutation.target === this.domNode);\n        })) {\n            this.text = this.statics.value(this.domNode);\n        }\n    }\n    value() {\n        return this.text;\n    }\n}\nTextBlot.blotName = 'text';\nTextBlot.scope = _scope__WEBPACK_IMPORTED_MODULE_0__[\"default\"].INLINE_BLOT;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextBlot);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/blot/text.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/collection/linked-list.ts":
	/*!**************************************************************!*\
	  !*** ./node_modules/parchment/src/collection/linked-list.ts ***!
	  \**************************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nclass LinkedList {\n    constructor() {\n        this.head = null;\n        this.tail = null;\n        this.length = 0;\n    }\n    append(...nodes) {\n        this.insertBefore(nodes[0], null);\n        if (nodes.length > 1) {\n            const rest = nodes.slice(1);\n            this.append(...rest);\n        }\n    }\n    at(index) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur && index > 0) {\n            index -= 1;\n            cur = next();\n        }\n        return cur;\n    }\n    contains(node) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            if (cur === node) {\n                return true;\n            }\n            cur = next();\n        }\n        return false;\n    }\n    indexOf(node) {\n        const next = this.iterator();\n        let cur = next();\n        let index = 0;\n        while (cur) {\n            if (cur === node) {\n                return index;\n            }\n            index += 1;\n            cur = next();\n        }\n        return -1;\n    }\n    insertBefore(node, refNode) {\n        if (node == null) {\n            return;\n        }\n        this.remove(node);\n        node.next = refNode;\n        if (refNode != null) {\n            node.prev = refNode.prev;\n            if (refNode.prev != null) {\n                refNode.prev.next = node;\n            }\n            refNode.prev = node;\n            if (refNode === this.head) {\n                this.head = node;\n            }\n        }\n        else if (this.tail != null) {\n            this.tail.next = node;\n            node.prev = this.tail;\n            this.tail = node;\n        }\n        else {\n            node.prev = null;\n            this.head = this.tail = node;\n        }\n        this.length += 1;\n    }\n    offset(target) {\n        let index = 0;\n        let cur = this.head;\n        while (cur != null) {\n            if (cur === target) {\n                return index;\n            }\n            index += cur.length();\n            cur = cur.next;\n        }\n        return -1;\n    }\n    remove(node) {\n        if (!this.contains(node)) {\n            return;\n        }\n        if (node.prev != null) {\n            node.prev.next = node.next;\n        }\n        if (node.next != null) {\n            node.next.prev = node.prev;\n        }\n        if (node === this.head) {\n            this.head = node.next;\n        }\n        if (node === this.tail) {\n            this.tail = node.prev;\n        }\n        this.length -= 1;\n    }\n    iterator(curNode = this.head) {\n        // TODO use yield when we can\n        return () => {\n            const ret = curNode;\n            if (curNode != null) {\n                curNode = curNode.next;\n            }\n            return ret;\n        };\n    }\n    find(index, inclusive = false) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            const length = cur.length();\n            if (index < length ||\n                (inclusive &&\n                    index === length &&\n                    (cur.next == null || cur.next.length() !== 0))) {\n                return [cur, index];\n            }\n            index -= length;\n            cur = next();\n        }\n        return [null, 0];\n    }\n    forEach(callback) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            callback(cur);\n            cur = next();\n        }\n    }\n    forEachAt(index, length, callback) {\n        if (length <= 0) {\n            return;\n        }\n        const [startNode, offset] = this.find(index);\n        let curIndex = index - offset;\n        const next = this.iterator(startNode);\n        let cur = next();\n        while (cur && curIndex < index + length) {\n            const curLength = cur.length();\n            if (index > curIndex) {\n                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));\n            }\n            else {\n                callback(cur, 0, Math.min(curLength, index + length - curIndex));\n            }\n            curIndex += curLength;\n            cur = next();\n        }\n    }\n    map(callback) {\n        return this.reduce((memo, cur) => {\n            memo.push(callback(cur));\n            return memo;\n        }, []);\n    }\n    reduce(callback, memo) {\n        const next = this.iterator();\n        let cur = next();\n        while (cur) {\n            memo = callback(memo, cur);\n            cur = next();\n        }\n        return memo;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkedList);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/collection/linked-list.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/error.ts":
	/*!*********************************************!*\
	  !*** ./node_modules/parchment/src/error.ts ***!
	  \*********************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParchmentError; });\nclass ParchmentError extends Error {\n    constructor(message) {\n        message = '[Parchment] ' + message;\n        super(message);\n        this.message = message;\n        this.name = this.constructor.name;\n    }\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/error.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/parchment.ts":
	/*!*************************************************!*\
	  !*** ./node_modules/parchment/src/parchment.ts ***!
	  \*************************************************/
	/*! exports provided: ParentBlot, ContainerBlot, LeafBlot, EmbedBlot, ScrollBlot, BlockBlot, InlineBlot, TextBlot, Attributor, ClassAttributor, StyleAttributor, AttributorStore, Registry, Scope */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blot/abstract/container */ \"./node_modules/parchment/src/blot/abstract/container.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ContainerBlot\", function() { return _blot_abstract_container__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blot/abstract/leaf */ \"./node_modules/parchment/src/blot/abstract/leaf.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LeafBlot\", function() { return _blot_abstract_leaf__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blot/abstract/parent */ \"./node_modules/parchment/src/blot/abstract/parent.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ParentBlot\", function() { return _blot_abstract_parent__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _blot_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blot/block */ \"./node_modules/parchment/src/blot/block.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"BlockBlot\", function() { return _blot_block__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _blot_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blot/embed */ \"./node_modules/parchment/src/blot/embed.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EmbedBlot\", function() { return _blot_embed__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _blot_inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blot/inline */ \"./node_modules/parchment/src/blot/inline.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InlineBlot\", function() { return _blot_inline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _blot_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blot/scroll */ \"./node_modules/parchment/src/blot/scroll.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ScrollBlot\", function() { return _blot_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _blot_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blot/text */ \"./node_modules/parchment/src/blot/text.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TextBlot\", function() { return _blot_text__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributor/attributor */ \"./node_modules/parchment/src/attributor/attributor.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Attributor\", function() { return _attributor_attributor__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _attributor_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributor/class */ \"./node_modules/parchment/src/attributor/class.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ClassAttributor\", function() { return _attributor_class__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _attributor_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attributor/store */ \"./node_modules/parchment/src/attributor/store.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AttributorStore\", function() { return _attributor_store__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _attributor_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributor/style */ \"./node_modules/parchment/src/attributor/style.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StyleAttributor\", function() { return _attributor_style__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./registry */ \"./node_modules/parchment/src/registry.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Registry\", function() { return _registry__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Scope\", function() { return _scope__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/parchment.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/registry.ts":
	/*!************************************************!*\
	  !*** ./node_modules/parchment/src/registry.ts ***!
	  \************************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Registry; });\n/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ \"./node_modules/parchment/src/error.ts\");\n/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scope */ \"./node_modules/parchment/src/scope.ts\");\n\n\nclass Registry {\n    constructor() {\n        this.attributes = {};\n        this.classes = {};\n        this.tags = {};\n        this.types = {};\n    }\n    static find(node, bubble = false) {\n        if (node == null) {\n            return null;\n        }\n        if (this.blots.has(node)) {\n            return this.blots.get(node) || null;\n        }\n        if (bubble) {\n            return this.find(node.parentNode, bubble);\n        }\n        return null;\n    }\n    create(scroll, input, value) {\n        const match = this.query(input);\n        if (match == null) {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`Unable to create ${input} blot`);\n        }\n        const blotClass = match;\n        const node = \n        // @ts-ignore\n        input instanceof Node || input.nodeType === Node.TEXT_NODE\n            ? input\n            : blotClass.create(value);\n        const blot = new blotClass(scroll, node, value);\n        Registry.blots.set(blot.domNode, blot);\n        return blot;\n    }\n    find(node, bubble = false) {\n        return Registry.find(node, bubble);\n    }\n    query(query, scope = _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ANY) {\n        let match;\n        if (typeof query === 'string') {\n            match = this.types[query] || this.attributes[query];\n            // @ts-ignore\n        }\n        else if (query instanceof Text || query.nodeType === Node.TEXT_NODE) {\n            match = this.types.text;\n        }\n        else if (typeof query === 'number') {\n            if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BLOCK) {\n                match = this.types.block;\n            }\n            else if (query & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].INLINE) {\n                match = this.types.inline;\n            }\n        }\n        else if (query instanceof HTMLElement) {\n            const names = (query.getAttribute('class') || '').split(/\\s+/);\n            names.some((name) => {\n                match = this.classes[name];\n                if (match) {\n                    return true;\n                }\n                return false;\n            });\n            match = match || this.tags[query.tagName];\n        }\n        if (match == null) {\n            return null;\n        }\n        // @ts-ignore\n        if (scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].LEVEL & match.scope && scope & _scope__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TYPE & match.scope) {\n            return match;\n        }\n        return null;\n    }\n    register(...definitions) {\n        if (definitions.length > 1) {\n            return definitions.map((d) => {\n                return this.register(d);\n            });\n        }\n        const definition = definitions[0];\n        if (typeof definition.blotName !== 'string' &&\n            typeof definition.attrName !== 'string') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Invalid definition');\n        }\n        else if (definition.blotName === 'abstract') {\n            throw new _error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Cannot register abstract class');\n        }\n        this.types[definition.blotName || definition.attrName] = definition;\n        if (typeof definition.keyName === 'string') {\n            this.attributes[definition.keyName] = definition;\n        }\n        else {\n            if (definition.className != null) {\n                this.classes[definition.className] = definition;\n            }\n            if (definition.tagName != null) {\n                if (Array.isArray(definition.tagName)) {\n                    definition.tagName = definition.tagName.map((tagName) => {\n                        return tagName.toUpperCase();\n                    });\n                }\n                else {\n                    definition.tagName = definition.tagName.toUpperCase();\n                }\n                const tagNames = Array.isArray(definition.tagName)\n                    ? definition.tagName\n                    : [definition.tagName];\n                tagNames.forEach((tag) => {\n                    if (this.tags[tag] == null || definition.className == null) {\n                        this.tags[tag] = definition;\n                    }\n                });\n            }\n        }\n        return definition;\n    }\n}\nRegistry.blots = new WeakMap();\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/registry.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/parchment/src/scope.ts":
	/*!*********************************************!*\
	  !*** ./node_modules/parchment/src/scope.ts ***!
	  \*********************************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nvar Scope;\n(function (Scope) {\n    Scope[Scope[\"TYPE\"] = 3] = \"TYPE\";\n    Scope[Scope[\"LEVEL\"] = 12] = \"LEVEL\";\n    Scope[Scope[\"ATTRIBUTE\"] = 13] = \"ATTRIBUTE\";\n    Scope[Scope[\"BLOT\"] = 14] = \"BLOT\";\n    Scope[Scope[\"INLINE\"] = 7] = \"INLINE\";\n    Scope[Scope[\"BLOCK\"] = 11] = \"BLOCK\";\n    Scope[Scope[\"BLOCK_BLOT\"] = 10] = \"BLOCK_BLOT\";\n    Scope[Scope[\"INLINE_BLOT\"] = 6] = \"INLINE_BLOT\";\n    Scope[Scope[\"BLOCK_ATTRIBUTE\"] = 9] = \"BLOCK_ATTRIBUTE\";\n    Scope[Scope[\"INLINE_ATTRIBUTE\"] = 5] = \"INLINE_ATTRIBUTE\";\n    Scope[Scope[\"ANY\"] = 15] = \"ANY\";\n})(Scope || (Scope = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scope);\n\n\n//# sourceURL=webpack://Quill/./node_modules/parchment/src/scope.ts?");
	
	/***/ }),
	
	/***/ "./node_modules/process/browser.js":
	/*!*****************************************!*\
	  !*** ./node_modules/process/browser.js ***!
	  \*****************************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack://Quill/./node_modules/process/browser.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/AttributeMap.js":
	/*!*******************************************************!*\
	  !*** ./node_modules/quill-delta/dist/AttributeMap.js ***!
	  \*******************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/quill-delta/node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar AttributeMap;\n(function (AttributeMap) {\n    function compose(a, b, keepNull) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = extend_1.default(true, {}, b);\n        if (!keepNull) {\n            attributes = Object.keys(attributes).reduce(function (copy, key) {\n                if (attributes[key] != null) {\n                    copy[key] = attributes[key];\n                }\n                return copy;\n            }, {});\n        }\n        for (var key in a) {\n            if (a[key] !== undefined && b[key] === undefined) {\n                attributes[key] = a[key];\n            }\n        }\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.compose = compose;\n    function diff(a, b) {\n        if (a === void 0) { a = {}; }\n        if (b === void 0) { b = {}; }\n        if (typeof a !== 'object') {\n            a = {};\n        }\n        if (typeof b !== 'object') {\n            b = {};\n        }\n        var attributes = Object.keys(a)\n            .concat(Object.keys(b))\n            .reduce(function (attrs, key) {\n            if (!deep_equal_1.default(a[key], b[key])) {\n                attrs[key] = b[key] === undefined ? null : b[key];\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.diff = diff;\n    function invert(attr, base) {\n        if (attr === void 0) { attr = {}; }\n        if (base === void 0) { base = {}; }\n        attr = attr || {};\n        var baseInverted = Object.keys(base).reduce(function (memo, key) {\n            if (base[key] !== attr[key] && attr[key] !== undefined) {\n                memo[key] = base[key];\n            }\n            return memo;\n        }, {});\n        return Object.keys(attr).reduce(function (memo, key) {\n            if (attr[key] !== base[key] && base[key] === undefined) {\n                memo[key] = null;\n            }\n            return memo;\n        }, baseInverted);\n    }\n    AttributeMap.invert = invert;\n    function transform(a, b, priority) {\n        if (priority === void 0) { priority = false; }\n        if (typeof a !== 'object') {\n            return b;\n        }\n        if (typeof b !== 'object') {\n            return undefined;\n        }\n        if (!priority) {\n            return b; // b simply overwrites us without priority\n        }\n        var attributes = Object.keys(b).reduce(function (attrs, key) {\n            if (a[key] === undefined) {\n                attrs[key] = b[key]; // null is a valid value\n            }\n            return attrs;\n        }, {});\n        return Object.keys(attributes).length > 0 ? attributes : undefined;\n    }\n    AttributeMap.transform = transform;\n})(AttributeMap || (AttributeMap = {}));\nexports.default = AttributeMap;\n//# sourceMappingURL=AttributeMap.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/AttributeMap.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/Delta.js":
	/*!************************************************!*\
	  !*** ./node_modules/quill-delta/dist/Delta.js ***!
	  \************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar deep_equal_1 = __importDefault(__webpack_require__(/*! deep-equal */ \"./node_modules/quill-delta/node_modules/deep-equal/index.js\"));\nvar extend_1 = __importDefault(__webpack_require__(/*! extend */ \"./node_modules/extend/index.js\"));\nvar fast_diff_1 = __importDefault(__webpack_require__(/*! fast-diff */ \"./node_modules/fast-diff/diff.js\"));\nvar AttributeMap_1 = __importDefault(__webpack_require__(/*! ./AttributeMap */ \"./node_modules/quill-delta/dist/AttributeMap.js\"));\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()\nvar Delta = /** @class */ (function () {\n    function Delta(ops) {\n        // Assume we are given a well formed ops\n        if (Array.isArray(ops)) {\n            this.ops = ops;\n        }\n        else if (ops != null && Array.isArray(ops.ops)) {\n            this.ops = ops.ops;\n        }\n        else {\n            this.ops = [];\n        }\n    }\n    Delta.prototype.insert = function (arg, attributes) {\n        var newOp = {};\n        if (typeof arg === 'string' && arg.length === 0) {\n            return this;\n        }\n        newOp.insert = arg;\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.delete = function (length) {\n        if (length <= 0) {\n            return this;\n        }\n        return this.push({ delete: length });\n    };\n    Delta.prototype.retain = function (length, attributes) {\n        if (length <= 0) {\n            return this;\n        }\n        var newOp = { retain: length };\n        if (attributes != null &&\n            typeof attributes === 'object' &&\n            Object.keys(attributes).length > 0) {\n            newOp.attributes = attributes;\n        }\n        return this.push(newOp);\n    };\n    Delta.prototype.push = function (newOp) {\n        var index = this.ops.length;\n        var lastOp = this.ops[index - 1];\n        newOp = extend_1.default(true, {}, newOp);\n        if (typeof lastOp === 'object') {\n            if (typeof newOp.delete === 'number' &&\n                typeof lastOp.delete === 'number') {\n                this.ops[index - 1] = { delete: lastOp.delete + newOp.delete };\n                return this;\n            }\n            // Since it does not matter if we insert before or after deleting at the same index,\n            // always prefer to insert first\n            if (typeof lastOp.delete === 'number' && newOp.insert != null) {\n                index -= 1;\n                lastOp = this.ops[index - 1];\n                if (typeof lastOp !== 'object') {\n                    this.ops.unshift(newOp);\n                    return this;\n                }\n            }\n            if (deep_equal_1.default(newOp.attributes, lastOp.attributes)) {\n                if (typeof newOp.insert === 'string' &&\n                    typeof lastOp.insert === 'string') {\n                    this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n                else if (typeof newOp.retain === 'number' &&\n                    typeof lastOp.retain === 'number') {\n                    this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };\n                    if (typeof newOp.attributes === 'object') {\n                        this.ops[index - 1].attributes = newOp.attributes;\n                    }\n                    return this;\n                }\n            }\n        }\n        if (index === this.ops.length) {\n            this.ops.push(newOp);\n        }\n        else {\n            this.ops.splice(index, 0, newOp);\n        }\n        return this;\n    };\n    Delta.prototype.chop = function () {\n        var lastOp = this.ops[this.ops.length - 1];\n        if (lastOp && lastOp.retain && !lastOp.attributes) {\n            this.ops.pop();\n        }\n        return this;\n    };\n    Delta.prototype.filter = function (predicate) {\n        return this.ops.filter(predicate);\n    };\n    Delta.prototype.forEach = function (predicate) {\n        this.ops.forEach(predicate);\n    };\n    Delta.prototype.map = function (predicate) {\n        return this.ops.map(predicate);\n    };\n    Delta.prototype.partition = function (predicate) {\n        var passed = [];\n        var failed = [];\n        this.forEach(function (op) {\n            var target = predicate(op) ? passed : failed;\n            target.push(op);\n        });\n        return [passed, failed];\n    };\n    Delta.prototype.reduce = function (predicate, initialValue) {\n        return this.ops.reduce(predicate, initialValue);\n    };\n    Delta.prototype.changeLength = function () {\n        return this.reduce(function (length, elem) {\n            if (elem.insert) {\n                return length + Op_1.default.length(elem);\n            }\n            else if (elem.delete) {\n                return length - elem.delete;\n            }\n            return length;\n        }, 0);\n    };\n    Delta.prototype.length = function () {\n        return this.reduce(function (length, elem) {\n            return length + Op_1.default.length(elem);\n        }, 0);\n    };\n    Delta.prototype.slice = function (start, end) {\n        if (start === void 0) { start = 0; }\n        if (end === void 0) { end = Infinity; }\n        var ops = [];\n        var iter = Op_1.default.iterator(this.ops);\n        var index = 0;\n        while (index < end && iter.hasNext()) {\n            var nextOp = void 0;\n            if (index < start) {\n                nextOp = iter.next(start - index);\n            }\n            else {\n                nextOp = iter.next(end - index);\n                ops.push(nextOp);\n            }\n            index += Op_1.default.length(nextOp);\n        }\n        return new Delta(ops);\n    };\n    Delta.prototype.compose = function (other) {\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var ops = [];\n        var firstOther = otherIter.peek();\n        if (firstOther != null &&\n            typeof firstOther.retain === 'number' &&\n            firstOther.attributes == null) {\n            var firstLeft = firstOther.retain;\n            while (thisIter.peekType() === 'insert' &&\n                thisIter.peekLength() <= firstLeft) {\n                firstLeft -= thisIter.peekLength();\n                ops.push(thisIter.next());\n            }\n            if (firstOther.retain - firstLeft > 0) {\n                otherIter.next(firstOther.retain - firstLeft);\n            }\n        }\n        var delta = new Delta(ops);\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else if (thisIter.peekType() === 'delete') {\n                delta.push(thisIter.next());\n            }\n            else {\n                var length_1 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_1);\n                var otherOp = otherIter.next(length_1);\n                if (typeof otherOp.retain === 'number') {\n                    var newOp = {};\n                    if (typeof thisOp.retain === 'number') {\n                        newOp.retain = length_1;\n                    }\n                    else {\n                        newOp.insert = thisOp.insert;\n                    }\n                    // Preserve null when composing with a retain, otherwise remove it for inserts\n                    var attributes = AttributeMap_1.default.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');\n                    if (attributes) {\n                        newOp.attributes = attributes;\n                    }\n                    delta.push(newOp);\n                    // Optimization if rest of other is just retain\n                    if (!otherIter.hasNext() &&\n                        deep_equal_1.default(delta.ops[delta.ops.length - 1], newOp)) {\n                        var rest = new Delta(thisIter.rest());\n                        return delta.concat(rest).chop();\n                    }\n                    // Other op should be delete, we could be an insert or retain\n                    // Insert + delete cancels out\n                }\n                else if (typeof otherOp.delete === 'number' &&\n                    typeof thisOp.retain === 'number') {\n                    delta.push(otherOp);\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.concat = function (other) {\n        var delta = new Delta(this.ops.slice());\n        if (other.ops.length > 0) {\n            delta.push(other.ops[0]);\n            delta.ops = delta.ops.concat(other.ops.slice(1));\n        }\n        return delta;\n    };\n    Delta.prototype.diff = function (other, cursor) {\n        if (this.ops === other.ops) {\n            return new Delta();\n        }\n        var strings = [this, other].map(function (delta) {\n            return delta\n                .map(function (op) {\n                if (op.insert != null) {\n                    return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;\n                }\n                var prep = delta === other ? 'on' : 'with';\n                throw new Error('diff() called ' + prep + ' non-document');\n            })\n                .join('');\n        });\n        var retDelta = new Delta();\n        var diffResult = fast_diff_1.default(strings[0], strings[1], cursor);\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        diffResult.forEach(function (component) {\n            var length = component[1].length;\n            while (length > 0) {\n                var opLength = 0;\n                switch (component[0]) {\n                    case fast_diff_1.default.INSERT:\n                        opLength = Math.min(otherIter.peekLength(), length);\n                        retDelta.push(otherIter.next(opLength));\n                        break;\n                    case fast_diff_1.default.DELETE:\n                        opLength = Math.min(length, thisIter.peekLength());\n                        thisIter.next(opLength);\n                        retDelta.delete(opLength);\n                        break;\n                    case fast_diff_1.default.EQUAL:\n                        opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);\n                        var thisOp = thisIter.next(opLength);\n                        var otherOp = otherIter.next(opLength);\n                        if (deep_equal_1.default(thisOp.insert, otherOp.insert)) {\n                            retDelta.retain(opLength, AttributeMap_1.default.diff(thisOp.attributes, otherOp.attributes));\n                        }\n                        else {\n                            retDelta.push(otherOp).delete(opLength);\n                        }\n                        break;\n                }\n                length -= opLength;\n            }\n        });\n        return retDelta.chop();\n    };\n    Delta.prototype.eachLine = function (predicate, newline) {\n        if (newline === void 0) { newline = '\\n'; }\n        var iter = Op_1.default.iterator(this.ops);\n        var line = new Delta();\n        var i = 0;\n        while (iter.hasNext()) {\n            if (iter.peekType() !== 'insert') {\n                return;\n            }\n            var thisOp = iter.peek();\n            var start = Op_1.default.length(thisOp) - iter.peekLength();\n            var index = typeof thisOp.insert === 'string'\n                ? thisOp.insert.indexOf(newline, start) - start\n                : -1;\n            if (index < 0) {\n                line.push(iter.next());\n            }\n            else if (index > 0) {\n                line.push(iter.next(index));\n            }\n            else {\n                if (predicate(line, iter.next(1).attributes || {}, i) === false) {\n                    return;\n                }\n                i += 1;\n                line = new Delta();\n            }\n        }\n        if (line.length() > 0) {\n            predicate(line, {}, i);\n        }\n    };\n    Delta.prototype.invert = function (base) {\n        var inverted = new Delta();\n        this.reduce(function (baseIndex, op) {\n            if (op.insert) {\n                inverted.delete(Op_1.default.length(op));\n            }\n            else if (op.retain && op.attributes == null) {\n                inverted.retain(op.retain);\n                return baseIndex + op.retain;\n            }\n            else if (op.delete || (op.retain && op.attributes)) {\n                var length_2 = (op.delete || op.retain);\n                var slice = base.slice(baseIndex, baseIndex + length_2);\n                slice.forEach(function (baseOp) {\n                    if (op.delete) {\n                        inverted.push(baseOp);\n                    }\n                    else if (op.retain && op.attributes) {\n                        inverted.retain(Op_1.default.length(baseOp), AttributeMap_1.default.invert(op.attributes, baseOp.attributes));\n                    }\n                });\n                return baseIndex + length_2;\n            }\n            return baseIndex;\n        }, 0);\n        return inverted.chop();\n    };\n    Delta.prototype.transform = function (arg, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        if (typeof arg === 'number') {\n            return this.transformPosition(arg, priority);\n        }\n        var other = arg;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var otherIter = Op_1.default.iterator(other.ops);\n        var delta = new Delta();\n        while (thisIter.hasNext() || otherIter.hasNext()) {\n            if (thisIter.peekType() === 'insert' &&\n                (priority || otherIter.peekType() !== 'insert')) {\n                delta.retain(Op_1.default.length(thisIter.next()));\n            }\n            else if (otherIter.peekType() === 'insert') {\n                delta.push(otherIter.next());\n            }\n            else {\n                var length_3 = Math.min(thisIter.peekLength(), otherIter.peekLength());\n                var thisOp = thisIter.next(length_3);\n                var otherOp = otherIter.next(length_3);\n                if (thisOp.delete) {\n                    // Our delete either makes their delete redundant or removes their retain\n                    continue;\n                }\n                else if (otherOp.delete) {\n                    delta.push(otherOp);\n                }\n                else {\n                    // We retain either their retain or insert\n                    delta.retain(length_3, AttributeMap_1.default.transform(thisOp.attributes, otherOp.attributes, priority));\n                }\n            }\n        }\n        return delta.chop();\n    };\n    Delta.prototype.transformPosition = function (index, priority) {\n        if (priority === void 0) { priority = false; }\n        priority = !!priority;\n        var thisIter = Op_1.default.iterator(this.ops);\n        var offset = 0;\n        while (thisIter.hasNext() && offset <= index) {\n            var length_4 = thisIter.peekLength();\n            var nextType = thisIter.peekType();\n            thisIter.next();\n            if (nextType === 'delete') {\n                index -= Math.min(length_4, index - offset);\n                continue;\n            }\n            else if (nextType === 'insert' && (offset < index || !priority)) {\n                index += length_4;\n            }\n            offset += length_4;\n        }\n        return index;\n    };\n    Delta.Op = Op_1.default;\n    Delta.AttributeMap = AttributeMap_1.default;\n    return Delta;\n}());\nmodule.exports = Delta;\n//# sourceMappingURL=Delta.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Delta.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/Iterator.js":
	/*!***************************************************!*\
	  !*** ./node_modules/quill-delta/dist/Iterator.js ***!
	  \***************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Op_1 = __importDefault(__webpack_require__(/*! ./Op */ \"./node_modules/quill-delta/dist/Op.js\"));\nvar Iterator = /** @class */ (function () {\n    function Iterator(ops) {\n        this.ops = ops;\n        this.index = 0;\n        this.offset = 0;\n    }\n    Iterator.prototype.hasNext = function () {\n        return this.peekLength() < Infinity;\n    };\n    Iterator.prototype.next = function (length) {\n        if (!length) {\n            length = Infinity;\n        }\n        var nextOp = this.ops[this.index];\n        if (nextOp) {\n            var offset = this.offset;\n            var opLength = Op_1.default.length(nextOp);\n            if (length >= opLength - offset) {\n                length = opLength - offset;\n                this.index += 1;\n                this.offset = 0;\n            }\n            else {\n                this.offset += length;\n            }\n            if (typeof nextOp.delete === 'number') {\n                return { delete: length };\n            }\n            else {\n                var retOp = {};\n                if (nextOp.attributes) {\n                    retOp.attributes = nextOp.attributes;\n                }\n                if (typeof nextOp.retain === 'number') {\n                    retOp.retain = length;\n                }\n                else if (typeof nextOp.insert === 'string') {\n                    retOp.insert = nextOp.insert.substr(offset, length);\n                }\n                else {\n                    // offset should === 0, length should === 1\n                    retOp.insert = nextOp.insert;\n                }\n                return retOp;\n            }\n        }\n        else {\n            return { retain: Infinity };\n        }\n    };\n    Iterator.prototype.peek = function () {\n        return this.ops[this.index];\n    };\n    Iterator.prototype.peekLength = function () {\n        if (this.ops[this.index]) {\n            // Should never return 0 if our index is being managed correctly\n            return Op_1.default.length(this.ops[this.index]) - this.offset;\n        }\n        else {\n            return Infinity;\n        }\n    };\n    Iterator.prototype.peekType = function () {\n        if (this.ops[this.index]) {\n            if (typeof this.ops[this.index].delete === 'number') {\n                return 'delete';\n            }\n            else if (typeof this.ops[this.index].retain === 'number') {\n                return 'retain';\n            }\n            else {\n                return 'insert';\n            }\n        }\n        return 'retain';\n    };\n    Iterator.prototype.rest = function () {\n        if (!this.hasNext()) {\n            return [];\n        }\n        else if (this.offset === 0) {\n            return this.ops.slice(this.index);\n        }\n        else {\n            var offset = this.offset;\n            var index = this.index;\n            var next = this.next();\n            var rest = this.ops.slice(this.index);\n            this.offset = offset;\n            this.index = index;\n            return [next].concat(rest);\n        }\n    };\n    return Iterator;\n}());\nexports.default = Iterator;\n//# sourceMappingURL=Iterator.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Iterator.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/dist/Op.js":
	/*!*********************************************!*\
	  !*** ./node_modules/quill-delta/dist/Op.js ***!
	  \*********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Iterator_1 = __importDefault(__webpack_require__(/*! ./Iterator */ \"./node_modules/quill-delta/dist/Iterator.js\"));\nvar Op;\n(function (Op) {\n    function iterator(ops) {\n        return new Iterator_1.default(ops);\n    }\n    Op.iterator = iterator;\n    function length(op) {\n        if (typeof op.delete === 'number') {\n            return op.delete;\n        }\n        else if (typeof op.retain === 'number') {\n            return op.retain;\n        }\n        else {\n            return typeof op.insert === 'string' ? op.insert.length : 1;\n        }\n    }\n    Op.length = length;\n})(Op || (Op = {}));\nexports.default = Op;\n//# sourceMappingURL=Op.js.map\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/dist/Op.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/node_modules/deep-equal/index.js":
	/*!*******************************************************************!*\
	  !*** ./node_modules/quill-delta/node_modules/deep-equal/index.js ***!
	  \*******************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("var objectKeys = __webpack_require__(/*! object-keys */ \"./node_modules/quill-delta/node_modules/object-keys/index.js\");\nvar isArguments = __webpack_require__(/*! is-arguments */ \"./node_modules/is-arguments/index.js\");\nvar is = __webpack_require__(/*! object-is */ \"./node_modules/object-is/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"./node_modules/is-regex/index.js\");\nvar flags = __webpack_require__(/*! regexp.prototype.flags */ \"./node_modules/regexp.prototype.flags/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/is-date-object/index.js\");\n\nvar getTime = Date.prototype.getTime;\n\nfunction deepEqual(actual, expected, options) {\n  var opts = options || {};\n\n  // 7.1. All identical values are equivalent, as determined by ===.\n  if (opts.strict ? is(actual, expected) : actual === expected) {\n    return true;\n  }\n\n  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.\n  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {\n    return opts.strict ? is(actual, expected) : actual == expected;\n  }\n\n  /*\n   * 7.4. For all other Object pairs, including Array objects, equivalence is\n   * determined by having the same number of owned properties (as verified\n   * with Object.prototype.hasOwnProperty.call), the same set of keys\n   * (although not necessarily the same order), equivalent values for every\n   * corresponding key, and an identical 'prototype' property. Note: this\n   * accounts for both named and indexed properties on Arrays.\n   */\n  // eslint-disable-next-line no-use-before-define\n  return objEquiv(actual, expected, opts);\n}\n\nfunction isUndefinedOrNull(value) {\n  return value === null || value === undefined;\n}\n\nfunction isBuffer(x) {\n  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {\n    return false;\n  }\n  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {\n    return false;\n  }\n  if (x.length > 0 && typeof x[0] !== 'number') {\n    return false;\n  }\n  return true;\n}\n\nfunction objEquiv(a, b, opts) {\n  /* eslint max-statements: [2, 50] */\n  var i, key;\n  if (typeof a !== typeof b) { return false; }\n  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }\n\n  // an identical 'prototype' property.\n  if (a.prototype !== b.prototype) { return false; }\n\n  if (isArguments(a) !== isArguments(b)) { return false; }\n\n  var aIsRegex = isRegex(a);\n  var bIsRegex = isRegex(b);\n  if (aIsRegex !== bIsRegex) { return false; }\n  if (aIsRegex || bIsRegex) {\n    return a.source === b.source && flags(a) === flags(b);\n  }\n\n  if (isDate(a) && isDate(b)) {\n    return getTime.call(a) === getTime.call(b);\n  }\n\n  var aIsBuffer = isBuffer(a);\n  var bIsBuffer = isBuffer(b);\n  if (aIsBuffer !== bIsBuffer) { return false; }\n  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here\n    if (a.length !== b.length) { return false; }\n    for (i = 0; i < a.length; i++) {\n      if (a[i] !== b[i]) { return false; }\n    }\n    return true;\n  }\n\n  if (typeof a !== typeof b) { return false; }\n\n  try {\n    var ka = objectKeys(a);\n    var kb = objectKeys(b);\n  } catch (e) { // happens when one is a string literal and the other isn't\n    return false;\n  }\n  // having the same number of owned properties (keys incorporates hasOwnProperty)\n  if (ka.length !== kb.length) { return false; }\n\n  // the same set of keys (although not necessarily the same order),\n  ka.sort();\n  kb.sort();\n  // ~~~cheap key test\n  for (i = ka.length - 1; i >= 0; i--) {\n    if (ka[i] != kb[i]) { return false; }\n  }\n  // equivalent values for every corresponding key, and ~~~possibly expensive deep test\n  for (i = ka.length - 1; i >= 0; i--) {\n    key = ka[i];\n    if (!deepEqual(a[key], b[key], opts)) { return false; }\n  }\n\n  return true;\n}\n\nmodule.exports = deepEqual;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/deep-equal/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/node_modules/object-keys/implementation.js":
	/*!*****************************************************************************!*\
	  !*** ./node_modules/quill-delta/node_modules/object-keys/implementation.js ***!
	  \*****************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/quill-delta/node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/implementation.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/node_modules/object-keys/index.js":
	/*!********************************************************************!*\
	  !*** ./node_modules/quill-delta/node_modules/object-keys/index.js ***!
	  \********************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/quill-delta/node_modules/object-keys/isArguments.js\");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ \"./node_modules/quill-delta/node_modules/object-keys/implementation.js\");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/quill-delta/node_modules/object-keys/isArguments.js":
	/*!**************************************************************************!*\
	  !*** ./node_modules/quill-delta/node_modules/object-keys/isArguments.js ***!
	  \**************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/quill-delta/node_modules/object-keys/isArguments.js?");
	
	/***/ }),
	
	/***/ "./node_modules/regexp.prototype.flags/implementation.js":
	/*!***************************************************************!*\
	  !*** ./node_modules/regexp.prototype.flags/implementation.js ***!
	  \***************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar $Object = Object;\nvar $TypeError = TypeError;\n\nmodule.exports = function flags() {\n\tif (this != null && this !== $Object(this)) {\n\t\tthrow new $TypeError('RegExp.prototype.flags getter called on non-object');\n\t}\n\tvar result = '';\n\tif (this.global) {\n\t\tresult += 'g';\n\t}\n\tif (this.ignoreCase) {\n\t\tresult += 'i';\n\t}\n\tif (this.multiline) {\n\t\tresult += 'm';\n\t}\n\tif (this.dotAll) {\n\t\tresult += 's';\n\t}\n\tif (this.unicode) {\n\t\tresult += 'u';\n\t}\n\tif (this.sticky) {\n\t\tresult += 'y';\n\t}\n\treturn result;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/implementation.js?");
	
	/***/ }),
	
	/***/ "./node_modules/regexp.prototype.flags/index.js":
	/*!******************************************************!*\
	  !*** ./node_modules/regexp.prototype.flags/index.js ***!
	  \******************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ \"./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/regexp.prototype.flags/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/regexp.prototype.flags/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/regexp.prototype.flags/shim.js\");\n\nvar flagsBound = callBind(implementation);\n\ndefine(flagsBound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = flagsBound;\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js":
	/*!**************************************************************************************!*\
	  !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js ***!
	  \**************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js?");
	
	/***/ }),
	
	/***/ "./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js":
	/*!******************************************************************************************!*\
	  !*** ./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js ***!
	  \******************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/regexp.prototype.flags/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/node_modules/es-abstract/helpers/callBind.js?");
	
	/***/ }),
	
	/***/ "./node_modules/regexp.prototype.flags/polyfill.js":
	/*!*********************************************************!*\
	  !*** ./node_modules/regexp.prototype.flags/polyfill.js ***!
	  \*********************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/regexp.prototype.flags/implementation.js\");\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors;\nvar $gOPD = Object.getOwnPropertyDescriptor;\nvar $TypeError = TypeError;\n\nmodule.exports = function getPolyfill() {\n\tif (!supportsDescriptors) {\n\t\tthrow new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tif ((/a/mig).flags === 'gim') {\n\t\tvar descriptor = $gOPD(RegExp.prototype, 'flags');\n\t\tif (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {\n\t\t\treturn descriptor.get;\n\t\t}\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/polyfill.js?");
	
	/***/ }),
	
	/***/ "./node_modules/regexp.prototype.flags/shim.js":
	/*!*****************************************************!*\
	  !*** ./node_modules/regexp.prototype.flags/shim.js ***!
	  \*****************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar supportsDescriptors = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\").supportsDescriptors;\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/regexp.prototype.flags/polyfill.js\");\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar defineProperty = Object.defineProperty;\nvar TypeErr = TypeError;\nvar getProto = Object.getPrototypeOf;\nvar regex = /a/;\n\nmodule.exports = function shimFlags() {\n\tif (!supportsDescriptors || !getProto) {\n\t\tthrow new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');\n\t}\n\tvar polyfill = getPolyfill();\n\tvar proto = getProto(regex);\n\tvar descriptor = gOPD(proto, 'flags');\n\tif (!descriptor || descriptor.get !== polyfill) {\n\t\tdefineProperty(proto, 'flags', {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\tget: polyfill\n\t\t});\n\t}\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/regexp.prototype.flags/shim.js?");
	
	/***/ }),
	
	/***/ "./node_modules/side-channel/index.js":
	/*!********************************************!*\
	  !*** ./node_modules/side-channel/index.js ***!
	  \********************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! es-abstract/GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js\");\nvar inspect = __webpack_require__(/*! object-inspect */ \"./node_modules/object-inspect/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $WeakMap = GetIntrinsic('%WeakMap%', true);\nvar $Map = GetIntrinsic('%Map%', true);\nvar $push = callBound('Array.prototype.push');\n\nvar $weakMapGet = callBound('WeakMap.prototype.get', true);\nvar $weakMapSet = callBound('WeakMap.prototype.set', true);\nvar $weakMapHas = callBound('WeakMap.prototype.has', true);\nvar $mapGet = callBound('Map.prototype.get', true);\nvar $mapSet = callBound('Map.prototype.set', true);\nvar $mapHas = callBound('Map.prototype.has', true);\nvar objectGet = function (objects, key) { // eslint-disable-line consistent-return\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\treturn objects[i].value;\n\t\t}\n\t}\n};\nvar objectSet = function (objects, key, value) {\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\tobjects[i].value = value; // eslint-disable-line no-param-reassign\n\t\t\treturn;\n\t\t}\n\t}\n\t$push(objects, {\n\t\tkey: key,\n\t\tvalue: value\n\t});\n};\nvar objectHas = function (objects, key) {\n\tfor (var i = 0; i < objects.length; i += 1) {\n\t\tif (objects[i].key === key) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n};\n\nmodule.exports = function getSideChannel() {\n\tvar $wm;\n\tvar $m;\n\tvar $o;\n\tvar channel = {\n\t\tassert: function (key) {\n\t\t\tif (!channel.has(key)) {\n\t\t\t\tthrow new $TypeError('Side channel does not contain ' + inspect(key));\n\t\t\t}\n\t\t},\n\t\tget: function (key) { // eslint-disable-line consistent-return\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapGet($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapGet($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn objectGet($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t},\n\t\thas: function (key) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif ($wm) {\n\t\t\t\t\treturn $weakMapHas($wm, key);\n\t\t\t\t}\n\t\t\t} else if ($Map) {\n\t\t\t\tif ($m) {\n\t\t\t\t\treturn $mapHas($m, key);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tif ($o) { // eslint-disable-line no-lonely-if\n\t\t\t\t\treturn objectHas($o, key);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t},\n\t\tset: function (key, value) {\n\t\t\tif ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {\n\t\t\t\tif (!$wm) {\n\t\t\t\t\t$wm = new $WeakMap();\n\t\t\t\t}\n\t\t\t\t$weakMapSet($wm, key, value);\n\t\t\t} else if ($Map) {\n\t\t\t\tif (!$m) {\n\t\t\t\t\t$m = new $Map();\n\t\t\t\t}\n\t\t\t\t$mapSet($m, key, value);\n\t\t\t} else {\n\t\t\t\tif (!$o) {\n\t\t\t\t\t$o = [];\n\t\t\t\t}\n\t\t\t\tobjectSet($o, key, value);\n\t\t\t}\n\t\t}\n\t};\n\treturn channel;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js":
	/*!****************************************************************************!*\
	  !*** ./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js ***!
	  \****************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js?");
	
	/***/ }),
	
	/***/ "./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js":
	/*!********************************************************************************!*\
	  !*** ./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js ***!
	  \********************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js?");
	
	/***/ }),
	
	/***/ "./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js":
	/*!*********************************************************************************!*\
	  !*** ./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js ***!
	  \*********************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/side-channel/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/side-channel/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/side-channel/node_modules/es-abstract/helpers/callBound.js?");
	
	/***/ }),
	
	/***/ "./node_modules/webpack/buildin/global.js":
	/*!***********************************!*\
	  !*** (webpack)/buildin/global.js ***!
	  \***********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://Quill/(webpack)/buildin/global.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-boxed-primitive/index.js":
	/*!*****************************************************!*\
	  !*** ./node_modules/which-boxed-primitive/index.js ***!
	  \*****************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\nvar isNumber = __webpack_require__(/*! is-number-object */ \"./node_modules/is-number-object/index.js\");\nvar isBoolean = __webpack_require__(/*! is-boolean-object */ \"./node_modules/is-boolean-object/index.js\");\nvar isSymbol = __webpack_require__(/*! is-symbol */ \"./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js\");\nvar isBigInt = __webpack_require__(/*! is-bigint */ \"./node_modules/is-bigint/index.js\");\n\n// eslint-disable-next-line consistent-return\nmodule.exports = function whichBoxedPrimitive(value) {\n\t// eslint-disable-next-line eqeqeq\n\tif (value == null || (typeof value !== 'object' && typeof value !== 'function')) {\n\t\treturn null;\n\t}\n\tif (isString(value)) {\n\t\treturn 'String';\n\t}\n\tif (isNumber(value)) {\n\t\treturn 'Number';\n\t}\n\tif (isBoolean(value)) {\n\t\treturn 'Boolean';\n\t}\n\tif (isSymbol(value)) {\n\t\treturn 'Symbol';\n\t}\n\tif (isBigInt(value)) {\n\t\treturn 'BigInt';\n\t}\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js":
	/*!****************************************************************************!*\
	  !*** ./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js ***!
	  \****************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar toStr = Object.prototype.toString;\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nif (hasSymbols) {\n\tvar symToStr = Symbol.prototype.toString;\n\tvar symStringRegex = /^Symbol\\(.*\\)$/;\n\tvar isSymbolObject = function isRealSymbolObject(value) {\n\t\tif (typeof value.valueOf() !== 'symbol') {\n\t\t\treturn false;\n\t\t}\n\t\treturn symStringRegex.test(symToStr.call(value));\n\t};\n\n\tmodule.exports = function isSymbol(value) {\n\t\tif (typeof value === 'symbol') {\n\t\t\treturn true;\n\t\t}\n\t\tif (toStr.call(value) !== '[object Symbol]') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\treturn isSymbolObject(value);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n} else {\n\n\tmodule.exports = function isSymbol(value) {\n\t\t// this environment does not support Symbols.\n\t\treturn  false && false;\n\t};\n}\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-boxed-primitive/node_modules/is-symbol/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-collection/index.js":
	/*!************************************************!*\
	  !*** ./node_modules/which-collection/index.js ***!
	  \************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar isMap = __webpack_require__(/*! is-map */ \"./node_modules/is-map/index.js\");\nvar isSet = __webpack_require__(/*! is-set */ \"./node_modules/is-set/index.js\");\nvar isWeakMap = __webpack_require__(/*! is-weakmap */ \"./node_modules/is-weakmap/index.js\");\nvar isWeakSet = __webpack_require__(/*! is-weakset */ \"./node_modules/is-weakset/index.js\");\n\nmodule.exports = function whichCollection(value) {\n\tif (value && typeof value === 'object') {\n\t\tif (isMap(value)) {\n\t\t\treturn 'Map';\n\t\t}\n\t\tif (isSet(value)) {\n\t\t\treturn 'Set';\n\t\t}\n\t\tif (isWeakMap(value)) {\n\t\t\treturn 'WeakMap';\n\t\t}\n\t\tif (isWeakSet(value)) {\n\t\t\treturn 'WeakSet';\n\t\t}\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-collection/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-typed-array/index.js":
	/*!*************************************************!*\
	  !*** ./node_modules/which-typed-array/index.js ***!
	  \*************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar forEach = __webpack_require__(/*! foreach */ \"./node_modules/foreach/index.js\");\nvar availableTypedArrays = __webpack_require__(/*! available-typed-arrays */ \"./node_modules/available-typed-arrays/index.js\");\nvar callBound = __webpack_require__(/*! es-abstract/helpers/callBound */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js\");\n\nvar $toString = callBound('Object.prototype.toString');\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';\n\nvar typedArrays = availableTypedArrays();\n\nvar $slice = callBound('String.prototype.slice');\nvar toStrTags = {};\nvar gOPD = __webpack_require__(/*! es-abstract/helpers/getOwnPropertyDescriptor */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js\");\nvar getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');\nif (hasToStringTag && gOPD && getPrototypeOf) {\n\tforEach(typedArrays, function (typedArray) {\n\t\tif (typeof global[typedArray] === 'function') {\n\t\t\tvar arr = new global[typedArray]();\n\t\t\tif (!(Symbol.toStringTag in arr)) {\n\t\t\t\tthrow new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');\n\t\t\t}\n\t\t\tvar proto = getPrototypeOf(arr);\n\t\t\tvar descriptor = gOPD(proto, Symbol.toStringTag);\n\t\t\tif (!descriptor) {\n\t\t\t\tvar superProto = getPrototypeOf(proto);\n\t\t\t\tdescriptor = gOPD(superProto, Symbol.toStringTag);\n\t\t\t}\n\t\t\ttoStrTags[typedArray] = descriptor.get;\n\t\t}\n\t});\n}\n\nvar tryTypedArrays = function tryAllTypedArrays(value) {\n\tvar foundName = false;\n\tforEach(toStrTags, function (getter, typedArray) {\n\t\tif (!foundName) {\n\t\t\ttry {\n\t\t\t\tvar name = getter.call(value);\n\t\t\t\tif (name === typedArray) {\n\t\t\t\t\tfoundName = name;\n\t\t\t\t}\n\t\t\t} catch (e) {}\n\t\t}\n\t});\n\treturn foundName;\n};\n\nvar isTypedArray = __webpack_require__(/*! is-typed-array */ \"./node_modules/is-typed-array/index.js\");\n\nmodule.exports = function whichTypedArray(value) {\n\tif (!isTypedArray(value)) { return false; }\n\tif (!hasToStringTag) { return $slice($toString(value), 8, -1); }\n\treturn tryTypedArrays(value);\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/index.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js":
	/*!*********************************************************************************!*\
	  !*** ./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js ***!
	  \*********************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\n/* globals\n\tAtomics,\n\tSharedArrayBuffer,\n*/\n\nvar undefined;\n\nvar $TypeError = TypeError;\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () { throw new $TypeError(); };\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nvar getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto\n\nvar generator; // = function * () {};\nvar generatorFunction = generator ? getProto(generator) : undefined;\nvar asyncFn; // async function() {};\nvar asyncFunction = asyncFn ? asyncFn.constructor : undefined;\nvar asyncGen; // async function * () {};\nvar asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;\nvar asyncGenIterator = asyncGen ? asyncGen() : undefined;\n\nvar TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,\n\t'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,\n\t'%ArrayPrototype%': Array.prototype,\n\t'%ArrayProto_entries%': Array.prototype.entries,\n\t'%ArrayProto_forEach%': Array.prototype.forEach,\n\t'%ArrayProto_keys%': Array.prototype.keys,\n\t'%ArrayProto_values%': Array.prototype.values,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': asyncFunction,\n\t'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,\n\t'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,\n\t'%AsyncGeneratorFunction%': asyncGenFunction,\n\t'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,\n\t'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%Boolean%': Boolean,\n\t'%BooleanPrototype%': Boolean.prototype,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,\n\t'%Date%': Date,\n\t'%DatePrototype%': Date.prototype,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%ErrorPrototype%': Error.prototype,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%EvalErrorPrototype%': EvalError.prototype,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,\n\t'%Function%': Function,\n\t'%FunctionPrototype%': Function.prototype,\n\t'%Generator%': generator ? getProto(generator()) : undefined,\n\t'%GeneratorFunction%': generatorFunction,\n\t'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%NumberPrototype%': Number.prototype,\n\t'%Object%': Object,\n\t'%ObjectPrototype%': Object.prototype,\n\t'%ObjProto_toString%': Object.prototype.toString,\n\t'%ObjProto_valueOf%': Object.prototype.valueOf,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,\n\t'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,\n\t'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,\n\t'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,\n\t'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%RangeErrorPrototype%': RangeError.prototype,\n\t'%ReferenceError%': ReferenceError,\n\t'%ReferenceErrorPrototype%': ReferenceError.prototype,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%RegExpPrototype%': RegExp.prototype,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%StringPrototype%': String.prototype,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,\n\t'%SyntaxError%': SyntaxError,\n\t'%SyntaxErrorPrototype%': SyntaxError.prototype,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,\n\t'%TypeError%': $TypeError,\n\t'%TypeErrorPrototype%': $TypeError.prototype,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,\n\t'%URIError%': URIError,\n\t'%URIErrorPrototype%': URIError.prototype,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,\n\t'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar $replace = bind.call(Function.call, String.prototype.replace);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tif (!(name in INTRINSICS)) {\n\t\tthrow new SyntaxError('intrinsic ' + name + ' does not exist!');\n\t}\n\n\t// istanbul ignore if // hopefully this is impossible to test :-)\n\tif (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {\n\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t}\n\n\treturn INTRINSICS[name];\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tvar parts = stringToPath(name);\n\n\tvar value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);\n\tfor (var i = 1; i < parts.length; i += 1) {\n\t\tif (value != null) {\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, parts[i]);\n\t\t\t\tif (!allowMissing && !(parts[i] in value)) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\tvalue = desc ? (desc.get || desc.value) : value[parts[i]];\n\t\t\t} else {\n\t\t\t\tvalue = value[parts[i]];\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js":
	/*!*************************************************************************************!*\
	  !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js ***!
	  \*************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $Function = GetIntrinsic('%Function%');\nvar $apply = $Function.apply;\nvar $call = $Function.call;\n\nmodule.exports = function callBind() {\n\treturn bind.apply($call, arguments);\n};\n\nmodule.exports.apply = function applyBind() {\n\treturn bind.apply($apply, arguments);\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js":
	/*!**************************************************************************************!*\
	  !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js ***!
	  \**************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar callBind = __webpack_require__(/*! ./callBind */ \"./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBind.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/callBound.js?");
	
	/***/ }),
	
	/***/ "./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js":
	/*!*****************************************************************************************************!*\
	  !*** ./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js ***!
	  \*****************************************************************************************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	eval("\n\nvar GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ \"./node_modules/which-typed-array/node_modules/es-abstract/GetIntrinsic.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://Quill/./node_modules/which-typed-array/node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js?");
	
	/***/ }),
	
	/***/ "./quill.js":
	/*!******************!*\
	  !*** ./quill.js ***!
	  \******************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./core.js\");\n/* harmony import */ var _formats_align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats/align */ \"./formats/align.js\");\n/* harmony import */ var _formats_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats/direction */ \"./formats/direction.js\");\n/* harmony import */ var _formats_indent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formats/indent */ \"./formats/indent.js\");\n/* harmony import */ var _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formats/blockquote */ \"./formats/blockquote.js\");\n/* harmony import */ var _formats_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formats/header */ \"./formats/header.js\");\n/* harmony import */ var _formats_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formats/list */ \"./formats/list.js\");\n/* harmony import */ var _formats_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/background */ \"./formats/background.js\");\n/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formats/color */ \"./formats/color.js\");\n/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formats/font */ \"./formats/font.js\");\n/* harmony import */ var _formats_size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formats/size */ \"./formats/size.js\");\n/* harmony import */ var _formats_bold__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formats/bold */ \"./formats/bold.js\");\n/* harmony import */ var _formats_italic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./formats/italic */ \"./formats/italic.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./formats/link */ \"./formats/link.js\");\n/* harmony import */ var _formats_script__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formats/script */ \"./formats/script.js\");\n/* harmony import */ var _formats_strike__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./formats/strike */ \"./formats/strike.js\");\n/* harmony import */ var _formats_underline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./formats/underline */ \"./formats/underline.js\");\n/* harmony import */ var _formats_formula__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./formats/formula */ \"./formats/formula.js\");\n/* harmony import */ var _formats_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./formats/image */ \"./formats/image.js\");\n/* harmony import */ var _formats_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./formats/video */ \"./formats/video.js\");\n/* harmony import */ var _formats_code__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./formats/code */ \"./formats/code.js\");\n/* harmony import */ var _modules_syntax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/syntax */ \"./modules/syntax.js\");\n/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/table */ \"./modules/table.js\");\n/* harmony import */ var _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/toolbar */ \"./modules/toolbar.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/icons */ \"./ui/icons.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ui/tooltip */ \"./ui/tooltip.js\");\n/* harmony import */ var _themes_bubble__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./themes/bubble */ \"./themes/bubble.js\");\n/* harmony import */ var _themes_snow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./themes/snow */ \"./themes/snow.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'attributors/attribute/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionAttribute\"],\n  'attributors/class/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n  'attributors/class/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundClass\"],\n  'attributors/class/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorClass\"],\n  'attributors/class/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n  'attributors/class/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n  'attributors/class/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n  'attributors/style/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignStyle\"],\n  'attributors/style/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n  'attributors/style/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n  'attributors/style/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionStyle\"],\n  'attributors/style/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontStyle\"],\n  'attributors/style/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeStyle\"]\n}, true);\n_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].register({\n  'formats/align': _formats_align__WEBPACK_IMPORTED_MODULE_1__[\"AlignClass\"],\n  'formats/direction': _formats_direction__WEBPACK_IMPORTED_MODULE_2__[\"DirectionClass\"],\n  'formats/indent': _formats_indent__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'formats/background': _formats_background__WEBPACK_IMPORTED_MODULE_7__[\"BackgroundStyle\"],\n  'formats/color': _formats_color__WEBPACK_IMPORTED_MODULE_8__[\"ColorStyle\"],\n  'formats/font': _formats_font__WEBPACK_IMPORTED_MODULE_9__[\"FontClass\"],\n  'formats/size': _formats_size__WEBPACK_IMPORTED_MODULE_10__[\"SizeClass\"],\n  'formats/blockquote': _formats_blockquote__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  'formats/code-block': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  'formats/header': _formats_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  'formats/list': _formats_list__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  'formats/bold': _formats_bold__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  'formats/code': _formats_code__WEBPACK_IMPORTED_MODULE_20__[\"Code\"],\n  'formats/italic': _formats_italic__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  'formats/link': _formats_link__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  'formats/script': _formats_script__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  'formats/strike': _formats_strike__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  'formats/underline': _formats_underline__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  'formats/formula': _formats_formula__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  'formats/image': _formats_image__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  'formats/video': _formats_video__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  'modules/syntax': _modules_syntax__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  'modules/table': _modules_table__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  'modules/toolbar': _modules_toolbar__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  'themes/bubble': _themes_bubble__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  'themes/snow': _themes_snow__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n  'ui/icons': _ui_icons__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  'ui/picker': _ui_picker__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  'ui/icon-picker': _ui_icon_picker__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  'ui/color-picker': _ui_color_picker__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  'ui/tooltip': _ui_tooltip__WEBPACK_IMPORTED_MODULE_28__[\"default\"]\n}, true);\n/* harmony default export */ __webpack_exports__[\"default\"] = (_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Quill/./quill.js?");
	
	/***/ }),
	
	/***/ "./themes/base.js":
	/*!************************!*\
	  !*** ./themes/base.js ***!
	  \************************/
	/*! exports provided: BaseTooltip, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BaseTooltip\", function() { return BaseTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseTheme; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _core_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/theme */ \"./core/theme.js\");\n/* harmony import */ var _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/color-picker */ \"./ui/color-picker.js\");\n/* harmony import */ var _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icon-picker */ \"./ui/icon-picker.js\");\n/* harmony import */ var _ui_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/picker */ \"./ui/picker.js\");\n/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/tooltip */ \"./ui/tooltip.js\");\n\n\n\n\n\n\n\nconst ALIGNS = [false, 'center', 'right', 'justify'];\nconst COLORS = ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'];\nconst FONTS = [false, 'serif', 'monospace'];\nconst HEADERS = ['1', '2', '3', false];\nconst SIZES = ['small', false, 'large', 'huge'];\n\nclass BaseTheme extends _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    super(quill, options);\n\n    const listener = e => {\n      if (!document.body.contains(quill.root)) {\n        document.body.removeEventListener('click', listener);\n        return;\n      }\n\n      if (this.tooltip != null && !this.tooltip.root.contains(e.target) && document.activeElement !== this.tooltip.textbox && !this.quill.hasFocus()) {\n        this.tooltip.hide();\n      }\n\n      if (this.pickers != null) {\n        this.pickers.forEach(picker => {\n          if (!picker.container.contains(e.target)) {\n            picker.close();\n          }\n        });\n      }\n    };\n\n    quill.emitter.listenDOM('click', document.body, listener);\n  }\n\n  addModule(name) {\n    const module = super.addModule(name);\n\n    if (name === 'toolbar') {\n      this.extendToolbar(module);\n    }\n\n    return module;\n  }\n\n  buildButtons(buttons, icons) {\n    Array.from(buttons).forEach(button => {\n      const className = button.getAttribute('class') || '';\n      className.split(/\\s+/).forEach(name => {\n        if (!name.startsWith('ql-')) return;\n        name = name.slice('ql-'.length);\n        if (icons[name] == null) return;\n\n        if (name === 'direction') {\n          button.innerHTML = icons[name][''] + icons[name].rtl;\n        } else if (typeof icons[name] === 'string') {\n          button.innerHTML = icons[name];\n        } else {\n          const value = button.value || '';\n\n          if (value != null && icons[name][value]) {\n            button.innerHTML = icons[name][value];\n          }\n        }\n      });\n    });\n  }\n\n  buildPickers(selects, icons) {\n    this.pickers = Array.from(selects).map(select => {\n      if (select.classList.contains('ql-align')) {\n        if (select.querySelector('option') == null) {\n          fillSelect(select, ALIGNS);\n        }\n\n        return new _ui_icon_picker__WEBPACK_IMPORTED_MODULE_4__[\"default\"](select, icons.align);\n      }\n\n      if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {\n        const format = select.classList.contains('ql-background') ? 'background' : 'color';\n\n        if (select.querySelector('option') == null) {\n          fillSelect(select, COLORS, format === 'background' ? '#ffffff' : '#000000');\n        }\n\n        return new _ui_color_picker__WEBPACK_IMPORTED_MODULE_3__[\"default\"](select, icons[format]);\n      }\n\n      if (select.querySelector('option') == null) {\n        if (select.classList.contains('ql-font')) {\n          fillSelect(select, FONTS);\n        } else if (select.classList.contains('ql-header')) {\n          fillSelect(select, HEADERS);\n        } else if (select.classList.contains('ql-size')) {\n          fillSelect(select, SIZES);\n        }\n      }\n\n      return new _ui_picker__WEBPACK_IMPORTED_MODULE_5__[\"default\"](select);\n    });\n\n    const update = () => {\n      this.pickers.forEach(picker => {\n        picker.update();\n      });\n    };\n\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, update);\n  }\n\n}\n\nBaseTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _core_theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        formula() {\n          this.quill.theme.tooltip.edit('formula');\n        },\n\n        image() {\n          let fileInput = this.container.querySelector('input.ql-image[type=file]');\n\n          if (fileInput == null) {\n            fileInput = document.createElement('input');\n            fileInput.setAttribute('type', 'file');\n            fileInput.setAttribute('accept', this.quill.uploader.options.mimetypes.join(', '));\n            fileInput.classList.add('ql-image');\n            fileInput.addEventListener('change', () => {\n              const range = this.quill.getSelection(true);\n              this.quill.uploader.upload(range, fileInput.files);\n              fileInput.value = '';\n            });\n            this.container.appendChild(fileInput);\n          }\n\n          fileInput.click();\n        },\n\n        video() {\n          this.quill.theme.tooltip.edit('video');\n        }\n\n      }\n    }\n  }\n});\n\nclass BaseTooltip extends _ui_tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"] {\n  constructor(quill, boundsContainer) {\n    super(quill, boundsContainer);\n    this.textbox = this.root.querySelector('input[type=\"text\"]');\n    this.listen();\n  }\n\n  listen() {\n    this.textbox.addEventListener('keydown', event => {\n      if (event.key === 'Enter') {\n        this.save();\n        event.preventDefault();\n      } else if (event.key === 'Escape') {\n        this.cancel();\n        event.preventDefault();\n      }\n    });\n  }\n\n  cancel() {\n    this.hide();\n  }\n\n  edit(mode = 'link', preview = null) {\n    this.root.classList.remove('ql-hidden');\n    this.root.classList.add('ql-editing');\n\n    if (preview != null) {\n      this.textbox.value = preview;\n    } else if (mode !== this.root.getAttribute('data-mode')) {\n      this.textbox.value = '';\n    }\n\n    this.position(this.quill.getBounds(this.quill.selection.savedRange));\n    this.textbox.select();\n    this.textbox.setAttribute('placeholder', this.textbox.getAttribute(\"data-\".concat(mode)) || '');\n    this.root.setAttribute('data-mode', mode);\n  }\n\n  restoreFocus() {\n    const {\n      scrollTop\n    } = this.quill.scrollingContainer;\n    this.quill.focus();\n    this.quill.scrollingContainer.scrollTop = scrollTop;\n  }\n\n  save() {\n    let {\n      value\n    } = this.textbox;\n\n    switch (this.root.getAttribute('data-mode')) {\n      case 'link':\n        {\n          const {\n            scrollTop\n          } = this.quill.root;\n\n          if (this.linkRange) {\n            this.quill.formatText(this.linkRange, 'link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            delete this.linkRange;\n          } else {\n            this.restoreFocus();\n            this.quill.format('link', value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n\n          this.quill.root.scrollTop = scrollTop;\n          break;\n        }\n\n      case 'video':\n        {\n          value = extractVideoUrl(value);\n        }\n      // eslint-disable-next-line no-fallthrough\n\n      case 'formula':\n        {\n          if (!value) break;\n          const range = this.quill.getSelection(true);\n\n          if (range != null) {\n            const index = range.index + range.length;\n            this.quill.insertEmbed(index, this.root.getAttribute('data-mode'), value, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n\n            if (this.root.getAttribute('data-mode') === 'formula') {\n              this.quill.insertText(index + 1, ' ', _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n            }\n\n            this.quill.setSelection(index + 2, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n          }\n\n          break;\n        }\n\n      default:\n    }\n\n    this.textbox.value = '';\n    this.hide();\n  }\n\n}\n\nfunction extractVideoUrl(url) {\n  let match = url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtube\\.com\\/watch.*v=([a-zA-Z0-9_-]+)/) || url.match(/^(?:(https?):\\/\\/)?(?:(?:www|m)\\.)?youtu\\.be\\/([a-zA-Z0-9_-]+)/);\n\n  if (match) {\n    return \"\".concat(match[1] || 'https', \"://www.youtube.com/embed/\").concat(match[2], \"?showinfo=0\");\n  } // eslint-disable-next-line no-cond-assign\n\n\n  if (match = url.match(/^(?:(https?):\\/\\/)?(?:www\\.)?vimeo\\.com\\/(\\d+)/)) {\n    return \"\".concat(match[1] || 'https', \"://player.vimeo.com/video/\").concat(match[2], \"/\");\n  }\n\n  return url;\n}\n\nfunction fillSelect(select, values, defaultValue = false) {\n  values.forEach(value => {\n    const option = document.createElement('option');\n\n    if (value === defaultValue) {\n      option.setAttribute('selected', 'selected');\n    } else {\n      option.setAttribute('value', value);\n    }\n\n    select.appendChild(option);\n  });\n}\n\n\n\n//# sourceURL=webpack://Quill/./themes/base.js?");
	
	/***/ }),
	
	/***/ "./themes/bubble.js":
	/*!**************************!*\
	  !*** ./themes/bubble.js ***!
	  \**************************/
	/*! exports provided: BubbleTooltip, default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BubbleTooltip\", function() { return BubbleTooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BubbleTheme; });\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\nconst TOOLBAR_CONFIG = [['bold', 'italic', 'link'], [{\n  header: 1\n}, {\n  header: 2\n}, 'blockquote']];\n\nclass BubbleTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.EDITOR_CHANGE, (type, range, oldRange, source) => {\n      if (type !== _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE) return;\n\n      if (range != null && range.length > 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        this.show(); // Lock our width so we will expand beyond our offsetParent boundaries\n\n        this.root.style.left = '0px';\n        this.root.style.width = '';\n        this.root.style.width = \"\".concat(this.root.offsetWidth, \"px\");\n        const lines = this.quill.getLines(range.index, range.length);\n\n        if (lines.length === 1) {\n          this.position(this.quill.getBounds(range));\n        } else {\n          const lastLine = lines[lines.length - 1];\n          const index = this.quill.getIndex(lastLine);\n          const length = Math.min(lastLine.length() - 1, range.index + range.length - index);\n          const indexBounds = this.quill.getBounds(new _core_selection__WEBPACK_IMPORTED_MODULE_3__[\"Range\"](index, length));\n          this.position(indexBounds);\n        }\n      } else if (document.activeElement !== this.textbox && this.quill.hasFocus()) {\n        this.hide();\n      }\n    });\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('.ql-close').addEventListener('click', () => {\n      this.root.classList.remove('ql-editing');\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SCROLL_OPTIMIZE, () => {\n      // Let selection be restored by toolbar handlers before repositioning\n      setTimeout(() => {\n        if (this.root.classList.contains('ql-hidden')) return;\n        const range = this.quill.getSelection();\n\n        if (range != null) {\n          this.position(this.quill.getBounds(range));\n        }\n      }, 1);\n    });\n  }\n\n  cancel() {\n    this.show();\n  }\n\n  position(reference) {\n    const shift = super.position(reference);\n    const arrow = this.root.querySelector('.ql-tooltip-arrow');\n    arrow.style.marginLeft = '';\n\n    if (shift !== 0) {\n      arrow.style.marginLeft = \"\".concat(-1 * shift - arrow.offsetWidth / 2, \"px\");\n    }\n\n    return shift;\n  }\n\n}\n\nBubbleTooltip.TEMPLATE = ['<span class=\"ql-tooltip-arrow\"></span>', '<div class=\"ql-tooltip-editor\">', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-close\"></a>', '</div>'].join('');\n\nclass BubbleTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n\n    super(quill, options);\n    this.quill.container.classList.add('ql-bubble');\n  }\n\n  extendToolbar(toolbar) {\n    this.tooltip = new BubbleTooltip(this.quill, this.options.bounds);\n    this.tooltip.root.appendChild(toolbar.container);\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  }\n\n}\n\nBubbleTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (!value) {\n            this.quill.format('link', false);\n          } else {\n            this.quill.theme.tooltip.edit();\n          }\n        }\n\n      }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://Quill/./themes/bubble.js?");
	
	/***/ }),
	
	/***/ "./themes/snow.js":
	/*!************************!*\
	  !*** ./themes/snow.js ***!
	  \************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! extend */ \"./node_modules/extend/index.js\");\n/* harmony import */ var extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(extend__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/emitter */ \"./core/emitter.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ \"./themes/base.js\");\n/* harmony import */ var _formats_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formats/link */ \"./formats/link.js\");\n/* harmony import */ var _core_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/selection */ \"./core/selection.js\");\n/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/icons */ \"./ui/icons.js\");\n\n\n\n\n\n\nconst TOOLBAR_CONFIG = [[{\n  header: ['1', '2', '3', false]\n}], ['bold', 'italic', 'underline', 'link'], [{\n  list: 'ordered'\n}, {\n  list: 'bullet'\n}], ['clean']];\n\nclass SnowTooltip extends _base__WEBPACK_IMPORTED_MODULE_2__[\"BaseTooltip\"] {\n  constructor(quill, bounds) {\n    super(quill, bounds);\n    this.preview = this.root.querySelector('a.ql-preview');\n  }\n\n  listen() {\n    super.listen();\n    this.root.querySelector('a.ql-action').addEventListener('click', event => {\n      if (this.root.classList.contains('ql-editing')) {\n        this.save();\n      } else {\n        this.edit('link', this.preview.textContent);\n      }\n\n      event.preventDefault();\n    });\n    this.root.querySelector('a.ql-remove').addEventListener('click', event => {\n      if (this.linkRange != null) {\n        const range = this.linkRange;\n        this.restoreFocus();\n        this.quill.formatText(range, 'link', false, _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER);\n        delete this.linkRange;\n      }\n\n      event.preventDefault();\n      this.hide();\n    });\n    this.quill.on(_core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].events.SELECTION_CHANGE, (range, oldRange, source) => {\n      if (range == null) return;\n\n      if (range.length === 0 && source === _core_emitter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sources.USER) {\n        const [link, offset] = this.quill.scroll.descendant(_formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], range.index);\n\n        if (link != null) {\n          this.linkRange = new _core_selection__WEBPACK_IMPORTED_MODULE_4__[\"Range\"](range.index - offset, link.length());\n          const preview = _formats_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"].formats(link.domNode);\n          this.preview.textContent = preview;\n          this.preview.setAttribute('href', preview);\n          this.show();\n          this.position(this.quill.getBounds(this.linkRange));\n          return;\n        }\n      } else {\n        delete this.linkRange;\n      }\n\n      this.hide();\n    });\n  }\n\n  show() {\n    super.show();\n    this.root.removeAttribute('data-mode');\n  }\n\n}\n\nSnowTooltip.TEMPLATE = ['<a class=\"ql-preview\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"about:blank\"></a>', '<input type=\"text\" data-formula=\"e=mc^2\" data-link=\"https://quilljs.com\" data-video=\"Embed URL\">', '<a class=\"ql-action\"></a>', '<a class=\"ql-remove\"></a>'].join('');\n\nclass SnowTheme extends _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(quill, options) {\n    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {\n      options.modules.toolbar.container = TOOLBAR_CONFIG;\n    }\n\n    super(quill, options);\n    this.quill.container.classList.add('ql-snow');\n  }\n\n  extendToolbar(toolbar) {\n    toolbar.container.classList.add('ql-snow');\n    this.buildButtons(toolbar.container.querySelectorAll('button'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.buildPickers(toolbar.container.querySelectorAll('select'), _ui_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    this.tooltip = new SnowTooltip(this.quill, this.options.bounds);\n\n    if (toolbar.container.querySelector('.ql-link')) {\n      this.quill.keyboard.addBinding({\n        key: 'k',\n        shortKey: true\n      }, (range, context) => {\n        toolbar.handlers.link.call(toolbar, !context.format.link);\n      });\n    }\n  }\n\n}\n\nSnowTheme.DEFAULTS = extend__WEBPACK_IMPORTED_MODULE_0___default()(true, {}, _base__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DEFAULTS, {\n  modules: {\n    toolbar: {\n      handlers: {\n        link(value) {\n          if (value) {\n            const range = this.quill.getSelection();\n            if (range == null || range.length === 0) return;\n            let preview = this.quill.getText(range);\n\n            if (/^\\S+@\\S+\\.\\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {\n              preview = \"mailto:\".concat(preview);\n            }\n\n            const {\n              tooltip\n            } = this.quill.theme;\n            tooltip.edit('link', preview);\n          } else {\n            this.quill.format('link', false);\n          }\n        }\n\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (SnowTheme);\n\n//# sourceURL=webpack://Quill/./themes/snow.js?");
	
	/***/ }),
	
	/***/ "./ui/color-picker.js":
	/*!****************************!*\
	  !*** ./ui/color-picker.js ***!
	  \****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\n\nclass ColorPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, label) {\n    super(select);\n    this.label.innerHTML = label;\n    this.container.classList.add('ql-color-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).slice(0, 7).forEach(item => {\n      item.classList.add('ql-primary');\n    });\n  }\n\n  buildItem(option) {\n    const item = super.buildItem(option);\n    item.style.backgroundColor = option.getAttribute('value') || '';\n    return item;\n  }\n\n  selectItem(item, trigger) {\n    super.selectItem(item, trigger);\n    const colorLabel = this.label.querySelector('.ql-color-label');\n    const value = item ? item.getAttribute('data-value') || '' : '';\n\n    if (colorLabel) {\n      if (colorLabel.tagName === 'line') {\n        colorLabel.style.stroke = value;\n      } else {\n        colorLabel.style.fill = value;\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPicker);\n\n//# sourceURL=webpack://Quill/./ui/color-picker.js?");
	
	/***/ }),
	
	/***/ "./ui/icon-picker.js":
	/*!***************************!*\
	  !*** ./ui/icon-picker.js ***!
	  \***************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./picker */ \"./ui/picker.js\");\n\n\nclass IconPicker extends _picker__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(select, icons) {\n    super(select);\n    this.container.classList.add('ql-icon-picker');\n    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(item => {\n      item.innerHTML = icons[item.getAttribute('data-value') || ''];\n    });\n    this.defaultItem = this.container.querySelector('.ql-selected');\n    this.selectItem(this.defaultItem);\n  }\n\n  selectItem(target, trigger) {\n    super.selectItem(target, trigger);\n    const item = target || this.defaultItem;\n    if (this.label.innerHTML === item.innerHTML) return;\n    this.label.innerHTML = item.innerHTML;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconPicker);\n\n//# sourceURL=webpack://Quill/./ui/icon-picker.js?");
	
	/***/ }),
	
	/***/ "./ui/icons.js":
	/*!*********************!*\
	  !*** ./ui/icons.js ***!
	  \*********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/align-left.svg */ \"./assets/icons/align-left.svg\");\n/* harmony import */ var _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/align-center.svg */ \"./assets/icons/align-center.svg\");\n/* harmony import */ var _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/align-right.svg */ \"./assets/icons/align-right.svg\");\n/* harmony import */ var _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/align-justify.svg */ \"./assets/icons/align-justify.svg\");\n/* harmony import */ var _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/background.svg */ \"./assets/icons/background.svg\");\n/* harmony import */ var _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/blockquote.svg */ \"./assets/icons/blockquote.svg\");\n/* harmony import */ var _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/bold.svg */ \"./assets/icons/bold.svg\");\n/* harmony import */ var _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/clean.svg */ \"./assets/icons/clean.svg\");\n/* harmony import */ var _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/code.svg */ \"./assets/icons/code.svg\");\n/* harmony import */ var _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/color.svg */ \"./assets/icons/color.svg\");\n/* harmony import */ var _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/direction-ltr.svg */ \"./assets/icons/direction-ltr.svg\");\n/* harmony import */ var _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/direction-rtl.svg */ \"./assets/icons/direction-rtl.svg\");\n/* harmony import */ var _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/formula.svg */ \"./assets/icons/formula.svg\");\n/* harmony import */ var _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/icons/header.svg */ \"./assets/icons/header.svg\");\n/* harmony import */ var _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/icons/header-2.svg */ \"./assets/icons/header-2.svg\");\n/* harmony import */ var _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/icons/italic.svg */ \"./assets/icons/italic.svg\");\n/* harmony import */ var _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/icons/image.svg */ \"./assets/icons/image.svg\");\n/* harmony import */ var _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/icons/indent.svg */ \"./assets/icons/indent.svg\");\n/* harmony import */ var _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/icons/outdent.svg */ \"./assets/icons/outdent.svg\");\n/* harmony import */ var _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../assets/icons/link.svg */ \"./assets/icons/link.svg\");\n/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/list-bullet.svg */ \"./assets/icons/list-bullet.svg\");\n/* harmony import */ var _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/list-check.svg */ \"./assets/icons/list-check.svg\");\n/* harmony import */ var _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/icons/list-ordered.svg */ \"./assets/icons/list-ordered.svg\");\n/* harmony import */ var _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/icons/subscript.svg */ \"./assets/icons/subscript.svg\");\n/* harmony import */ var _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/icons/superscript.svg */ \"./assets/icons/superscript.svg\");\n/* harmony import */ var _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../assets/icons/strike.svg */ \"./assets/icons/strike.svg\");\n/* harmony import */ var _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../assets/icons/table.svg */ \"./assets/icons/table.svg\");\n/* harmony import */ var _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../assets/icons/underline.svg */ \"./assets/icons/underline.svg\");\n/* harmony import */ var _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../assets/icons/video.svg */ \"./assets/icons/video.svg\");\n/* harmony import */ var _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  align: {\n    '': _assets_icons_align_left_svg__WEBPACK_IMPORTED_MODULE_0___default.a,\n    center: _assets_icons_align_center_svg__WEBPACK_IMPORTED_MODULE_1___default.a,\n    right: _assets_icons_align_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n    justify: _assets_icons_align_justify_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n  },\n  background: _assets_icons_background_svg__WEBPACK_IMPORTED_MODULE_4___default.a,\n  blockquote: _assets_icons_blockquote_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n  bold: _assets_icons_bold_svg__WEBPACK_IMPORTED_MODULE_6___default.a,\n  clean: _assets_icons_clean_svg__WEBPACK_IMPORTED_MODULE_7___default.a,\n  code: _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  'code-block': _assets_icons_code_svg__WEBPACK_IMPORTED_MODULE_8___default.a,\n  color: _assets_icons_color_svg__WEBPACK_IMPORTED_MODULE_9___default.a,\n  direction: {\n    '': _assets_icons_direction_ltr_svg__WEBPACK_IMPORTED_MODULE_10___default.a,\n    rtl: _assets_icons_direction_rtl_svg__WEBPACK_IMPORTED_MODULE_11___default.a\n  },\n  formula: _assets_icons_formula_svg__WEBPACK_IMPORTED_MODULE_12___default.a,\n  header: {\n    '1': _assets_icons_header_svg__WEBPACK_IMPORTED_MODULE_13___default.a,\n    '2': _assets_icons_header_2_svg__WEBPACK_IMPORTED_MODULE_14___default.a\n  },\n  italic: _assets_icons_italic_svg__WEBPACK_IMPORTED_MODULE_15___default.a,\n  image: _assets_icons_image_svg__WEBPACK_IMPORTED_MODULE_16___default.a,\n  indent: {\n    '+1': _assets_icons_indent_svg__WEBPACK_IMPORTED_MODULE_17___default.a,\n    '-1': _assets_icons_outdent_svg__WEBPACK_IMPORTED_MODULE_18___default.a\n  },\n  link: _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_19___default.a,\n  list: {\n    bullet: _assets_icons_list_bullet_svg__WEBPACK_IMPORTED_MODULE_20___default.a,\n    check: _assets_icons_list_check_svg__WEBPACK_IMPORTED_MODULE_21___default.a,\n    ordered: _assets_icons_list_ordered_svg__WEBPACK_IMPORTED_MODULE_22___default.a\n  },\n  script: {\n    sub: _assets_icons_subscript_svg__WEBPACK_IMPORTED_MODULE_23___default.a,\n    super: _assets_icons_superscript_svg__WEBPACK_IMPORTED_MODULE_24___default.a\n  },\n  strike: _assets_icons_strike_svg__WEBPACK_IMPORTED_MODULE_25___default.a,\n  table: _assets_icons_table_svg__WEBPACK_IMPORTED_MODULE_26___default.a,\n  underline: _assets_icons_underline_svg__WEBPACK_IMPORTED_MODULE_27___default.a,\n  video: _assets_icons_video_svg__WEBPACK_IMPORTED_MODULE_28___default.a\n});\n\n//# sourceURL=webpack://Quill/./ui/icons.js?");
	
	/***/ }),
	
	/***/ "./ui/picker.js":
	/*!**********************!*\
	  !*** ./ui/picker.js ***!
	  \**********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/dropdown.svg */ \"./assets/icons/dropdown.svg\");\n/* harmony import */ var _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nlet optionsCounter = 0;\n\nfunction toggleAriaAttribute(element, attribute) {\n  element.setAttribute(attribute, !(element.getAttribute(attribute) === 'true'));\n}\n\nclass Picker {\n  constructor(select) {\n    this.select = select;\n    this.container = document.createElement('span');\n    this.buildPicker();\n    this.select.style.display = 'none';\n    this.select.parentNode.insertBefore(this.container, this.select);\n    this.label.addEventListener('mousedown', () => {\n      this.togglePicker();\n    });\n    this.label.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.togglePicker();\n          break;\n\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n\n        default:\n      }\n    });\n    this.select.addEventListener('change', this.update.bind(this));\n  }\n\n  togglePicker() {\n    this.container.classList.toggle('ql-expanded'); // Toggle aria-expanded and aria-hidden to make the picker accessible\n\n    toggleAriaAttribute(this.label, 'aria-expanded');\n    toggleAriaAttribute(this.options, 'aria-hidden');\n  }\n\n  buildItem(option) {\n    const item = document.createElement('span');\n    item.tabIndex = '0';\n    item.setAttribute('role', 'button');\n    item.classList.add('ql-picker-item');\n\n    if (option.hasAttribute('value')) {\n      item.setAttribute('data-value', option.getAttribute('value'));\n    }\n\n    if (option.textContent) {\n      item.setAttribute('data-label', option.textContent);\n    }\n\n    item.addEventListener('click', () => {\n      this.selectItem(item, true);\n    });\n    item.addEventListener('keydown', event => {\n      switch (event.key) {\n        case 'Enter':\n          this.selectItem(item, true);\n          event.preventDefault();\n          break;\n\n        case 'Escape':\n          this.escape();\n          event.preventDefault();\n          break;\n\n        default:\n      }\n    });\n    return item;\n  }\n\n  buildLabel() {\n    const label = document.createElement('span');\n    label.classList.add('ql-picker-label');\n    label.innerHTML = _assets_icons_dropdown_svg__WEBPACK_IMPORTED_MODULE_0___default.a;\n    label.tabIndex = '0';\n    label.setAttribute('role', 'button');\n    label.setAttribute('aria-expanded', 'false');\n    this.container.appendChild(label);\n    return label;\n  }\n\n  buildOptions() {\n    const options = document.createElement('span');\n    options.classList.add('ql-picker-options'); // Don't want screen readers to read this until options are visible\n\n    options.setAttribute('aria-hidden', 'true');\n    options.tabIndex = '-1'; // Need a unique id for aria-controls\n\n    options.id = \"ql-picker-options-\".concat(optionsCounter);\n    optionsCounter += 1;\n    this.label.setAttribute('aria-controls', options.id);\n    this.options = options;\n    Array.from(this.select.options).forEach(option => {\n      const item = this.buildItem(option);\n      options.appendChild(item);\n\n      if (option.selected === true) {\n        this.selectItem(item);\n      }\n    });\n    this.container.appendChild(options);\n  }\n\n  buildPicker() {\n    Array.from(this.select.attributes).forEach(item => {\n      this.container.setAttribute(item.name, item.value);\n    });\n    this.container.classList.add('ql-picker');\n    this.label = this.buildLabel();\n    this.buildOptions();\n  }\n\n  escape() {\n    // Close menu and return focus to trigger label\n    this.close(); // Need setTimeout for accessibility to ensure that the browser executes\n    // focus on the next process thread and after any DOM content changes\n\n    setTimeout(() => this.label.focus(), 1);\n  }\n\n  close() {\n    this.container.classList.remove('ql-expanded');\n    this.label.setAttribute('aria-expanded', 'false');\n    this.options.setAttribute('aria-hidden', 'true');\n  }\n\n  selectItem(item, trigger = false) {\n    const selected = this.container.querySelector('.ql-selected');\n    if (item === selected) return;\n\n    if (selected != null) {\n      selected.classList.remove('ql-selected');\n    }\n\n    if (item == null) return;\n    item.classList.add('ql-selected');\n    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(item);\n\n    if (item.hasAttribute('data-value')) {\n      this.label.setAttribute('data-value', item.getAttribute('data-value'));\n    } else {\n      this.label.removeAttribute('data-value');\n    }\n\n    if (item.hasAttribute('data-label')) {\n      this.label.setAttribute('data-label', item.getAttribute('data-label'));\n    } else {\n      this.label.removeAttribute('data-label');\n    }\n\n    if (trigger) {\n      this.select.dispatchEvent(new Event('change'));\n      this.close();\n    }\n  }\n\n  update() {\n    let option;\n\n    if (this.select.selectedIndex > -1) {\n      const item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];\n      option = this.select.options[this.select.selectedIndex];\n      this.selectItem(item);\n    } else {\n      this.selectItem(null);\n    }\n\n    const isActive = option != null && option !== this.select.querySelector('option[selected]');\n    this.label.classList.toggle('ql-active', isActive);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Picker);\n\n//# sourceURL=webpack://Quill/./ui/picker.js?");
	
	/***/ }),
	
	/***/ "./ui/tooltip.js":
	/*!***********************!*\
	  !*** ./ui/tooltip.js ***!
	  \***********************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nclass Tooltip {\n  constructor(quill, boundsContainer) {\n    this.quill = quill;\n    this.boundsContainer = boundsContainer || document.body;\n    this.root = quill.addContainer('ql-tooltip');\n    this.root.innerHTML = this.constructor.TEMPLATE;\n\n    if (this.quill.root === this.quill.scrollingContainer) {\n      this.quill.root.addEventListener('scroll', () => {\n        this.root.style.marginTop = \"\".concat(-1 * this.quill.root.scrollTop, \"px\");\n      });\n    }\n\n    this.hide();\n  }\n\n  hide() {\n    this.root.classList.add('ql-hidden');\n  }\n\n  position(reference) {\n    const left = reference.left + reference.width / 2 - this.root.offsetWidth / 2; // root.scrollTop should be 0 if scrollContainer !== root\n\n    const top = reference.bottom + this.quill.root.scrollTop;\n    this.root.style.left = \"\".concat(left, \"px\");\n    this.root.style.top = \"\".concat(top, \"px\");\n    this.root.classList.remove('ql-flip');\n    const containerBounds = this.boundsContainer.getBoundingClientRect();\n    const rootBounds = this.root.getBoundingClientRect();\n    let shift = 0;\n\n    if (rootBounds.right > containerBounds.right) {\n      shift = containerBounds.right - rootBounds.right;\n      this.root.style.left = \"\".concat(left + shift, \"px\");\n    }\n\n    if (rootBounds.left < containerBounds.left) {\n      shift = containerBounds.left - rootBounds.left;\n      this.root.style.left = \"\".concat(left + shift, \"px\");\n    }\n\n    if (rootBounds.bottom > containerBounds.bottom) {\n      const height = rootBounds.bottom - rootBounds.top;\n      const verticalShift = reference.bottom - reference.top + height;\n      this.root.style.top = \"\".concat(top - verticalShift, \"px\");\n      this.root.classList.add('ql-flip');\n    }\n\n    return shift;\n  }\n\n  show() {\n    this.root.classList.remove('ql-editing');\n    this.root.classList.remove('ql-hidden');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tooltip);\n\n//# sourceURL=webpack://Quill/./ui/tooltip.js?");
	
	/***/ }),
	
	/***/ 0:
	/*!************************!*\
	  !*** multi ./quill.js ***!
	  \************************/
	/*! no static exports found */
	/***/ (function(module, exports, __webpack_require__) {
	
	eval("module.exports = __webpack_require__(/*! ./quill.js */\"./quill.js\");\n\n\n//# sourceURL=webpack://Quill/multi_./quill.js?");
	
	/***/ }),
	
	/***/ 1:
	/*!********************************!*\
	  !*** ./util.inspect (ignored) ***!
	  \********************************/
	/*! no static exports found */
	/***/ (function(module, exports) {
	
	eval("/* (ignored) */\n\n//# sourceURL=webpack://Quill/./util.inspect_(ignored)?");
	
	/***/ })
	
	/******/ })["default"];
	});

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 3);
	var ReactDOM = __webpack_require__(/*! react-dom */ 4);
	var createClass = __webpack_require__(/*! create-react-class */ 5);
	var QuillMixin = __webpack_require__(/*! ./mixin */ 9);
	var find = __webpack_require__(/*! lodash/find */ 10);
	var some = __webpack_require__(/*! lodash/some */ 134);
	var isEqual = __webpack_require__(/*! lodash/isEqual */ 142);
	var T = __webpack_require__(/*! prop-types */ 143);
	var DOM = __webpack_require__(/*! react-dom-factories */ 144);
	
	var QuillComponent = createClass({
	
		displayName: 'Quill',
	
		mixins: [ QuillMixin ],
	
		propTypes: {
			id: T.string,
			className: T.string,
			theme: T.string,
			style: T.object,
			readOnly: T.bool,
			value: T.oneOfType([T.string, T.shape({ops: T.array})]),
			defaultValue: T.oneOfType([T.string, T.shape({ops: T.array})]),
			placeholder: T.string,
			tabIndex: T.number,
			bounds: T.oneOfType([T.string, T.element]),
			onChange: T.func,
			onChangeSelection: T.func,
			onFocus: T.func,
			onBlur: T.func,
			onKeyPress: T.func,
			onKeyDown: T.func,
			onKeyUp: T.func,
			preserveWhitespace: T.bool,
	
			modules: function(props) {
				var isNotObject = T.object.apply(this, arguments);
				if (isNotObject) return isNotObject;
	
				if (
					props.modules && 
					props.modules.toolbar &&
					props.modules.toolbar[0] &&
					props.modules.toolbar[0].type
				) return new Error(
					'Since v1.0.0, React Quill will not create a custom toolbar for you ' +
					'anymore. Create a toolbar explictly, or let Quill create one. ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100'
				);
			},
	
			toolbar: function(props) {
				if ('toolbar' in props) return new Error(
					'The `toolbar` prop has been deprecated. Use `modules.toolbar` instead. ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100'
				);
			},
	
			formats: function(props) {
				var isNotArrayOfString = T.arrayOf(T.string).apply(this, arguments);
	
				if (isNotArrayOfString) return new Error(
					'You cannot specify custom `formats` anymore. Use Parchment instead.  ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
				);
			},
	
			styles: function(props) {
				if ('styles' in props) return new Error(
					'The `styles` prop has been deprecated. Use custom stylesheets instead. ' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
				);
			},
	
			pollInterval: function(props) {
				if ('pollInterval' in props) return new Error(
					'The `pollInterval` property does not have any effect anymore. ' +
					'You can safely remove it from your props.' +
					'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
				);
			},
	
			children: function(props) {
				// Validate that the editor has only one child element and it is not a <textarea>
				var isNotASingleElement = T.element.apply(this, arguments);
				if (isNotASingleElement) return new Error(
					'The Quill editing area can only be composed of a single React element.'
				);
	
				if (React.Children.count(props.children)) {
					var child = React.Children.only(props.children);
					if (child.type === 'textarea') return new Error(
						'Quill does not support editing on a <textarea>. Use a <div> instead.'
					);
				}
			}
		},
			
		/*
		Changing one of these props should cause a full re-render.
		*/
		dirtyProps: [
			'modules',
			'formats',
			'bounds',
			'theme',
			'children',
		],
	
		/*
		Changing one of these props should cause a regular update.
		*/
		cleanProps: [
			'id',
			'className',
			'style',
			'placeholder',
			'tabIndex',
			'onChange',
			'onChangeSelection',
			'onFocus',
			'onBlur',
			'onKeyPress',
			'onKeyDown',
			'onKeyUp',
		],
	
		getDefaultProps: function() {
			return {
				theme: 'snow',
				modules: {},
			};
		},
	
		/*
		We consider the component to be controlled if `value` is being sent in props.
		*/
		isControlled: function() {
			return 'value' in this.props;
		},
	
		getInitialState: function() {
			return {
				generation: 0,
				value: this.isControlled()
					? this.props.value
					: this.props.defaultValue
			};
		},
	
		componentWillReceiveProps: function(nextProps, nextState) {
			var editor = this.editor;
	
			// If the component is unmounted and mounted too quickly
			// an error is thrown in setEditorContents since editor is
			// still undefined. Must check if editor is undefined
			// before performing this call.
			if (!editor) return;
			
			// Update only if we've been passed a new `value`.
			// This leaves components using `defaultValue` alone.
			if ('value' in nextProps) {
				var currentContents = this.getEditorContents();
				var nextContents = nextProps.value;
	
				if (nextContents === this.lastDeltaChangeSet) throw new Error(
					'You are passing the `delta` object from the `onChange` event back ' +
					'as `value`. You most probably want `editor.getContents()` instead. ' +
					'See: https://github.com/zenoamaro/react-quill#using-deltas'
				);
	
				// NOTE: Seeing that Quill is missing a way to prevent
				//       edits, we have to settle for a hybrid between
				//       controlled and uncontrolled mode. We can't prevent
				//       the change, but we'll still override content
				//       whenever `value` differs from current state.
				// NOTE: Comparing an HTML string and a Quill Delta will always trigger 
				//       a change, regardless of whether they represent the same document.
				if (!this.isEqualValue(nextContents, currentContents)) {
					this.setEditorContents(editor, nextContents);
				}
			}
			
			// We can update readOnly state in-place.
			if ('readOnly' in nextProps) {
				if (nextProps.readOnly !== this.props.readOnly) {
					this.setEditorReadOnly(editor, nextProps.readOnly);
				}
			}
	
			// If we need to regenerate the component, we can avoid a detailed
			// in-place update step, and just let everything rerender.
			if (this.shouldComponentRegenerate(nextProps, nextState)) {
				return this.regenerate();
			}
		},
	
		componentDidMount: function() {
			this.editor = this.createEditor(
				this.getEditingArea(),
				this.getEditorConfig()
			);
			// Restore editor from Quill's native formats in regeneration scenario
			if (this.quillDelta) {
				this.editor.setContents(this.quillDelta);
				this.editor.setSelection(this.quillSelection);		
				this.editor.focus();
				this.quillDelta = this.quillSelection = null;
				return;
			}
			if (this.state.value) {
				this.setEditorContents(this.editor, this.state.value);
				return;
			}
		},
	
		componentWillUnmount: function() {
			var editor; if ((editor = this.getEditor())) {
				this.unhookEditor(editor);
				this.editor = null;
			}
		},
	
		shouldComponentUpdate: function(nextProps, nextState) {
			var self = this;
	
			// If the component has been regenerated, we already know we should update.
			if (this.state.generation !== nextState.generation) {
				return true;
			}
			
			// Compare props that require React updating the DOM.
			return some(this.cleanProps, function(prop) {
				// Note that `isEqual` compares deeply, making it safe to perform
				// non-immutable updates, at the cost of performance.
				return !isEqual(nextProps[prop], self.props[prop]);
			});
		},
	
		shouldComponentRegenerate: function(nextProps, nextState) {
			var self = this;
			// Whenever a `dirtyProp` changes, the editor needs reinstantiation.
			return some(this.dirtyProps, function(prop) {
				// Note that `isEqual` compares deeply, making it safe to perform
				// non-immutable updates, at the cost of performance.
				return !isEqual(nextProps[prop], self.props[prop]);
			});
		},
	
		/*
		If we could not update settings from the new props in-place, we have to tear
		down everything and re-render from scratch.
		*/
		componentWillUpdate: function(nextProps, nextState) {
			if (this.state.generation !== nextState.generation) {
				this.componentWillUnmount();
			}
		},
	
		componentDidUpdate: function(prevProps, prevState) {
			if (this.state.generation !== prevState.generation) {
				this.componentDidMount();
			}
		},
	
		getEditorConfig: function() {
			return {
				bounds:       this.props.bounds,
				formats:      this.props.formats,
				modules:      this.props.modules,
				placeholder:  this.props.placeholder,
				readOnly:     this.props.readOnly,
	      			scrollingContainer: this.props.scrollingContainer,
				tabIndex:     this.props.tabIndex,
				theme:        this.props.theme,
			};
		},
	
		getEditor: function() {
			return this.editor;
		},
	
		getEditingArea: function () {
			return ReactDOM.findDOMNode(this.editingArea);
		},
	
		getEditorContents: function() {
			return this.state.value;
		},
	
		getEditorSelection: function() {
			return this.state.selection;
		},
	
		/*
		True if the value is a Delta instance or a Delta look-alike.
		*/
		isDelta: function(value) {
			return value && value.ops;
		},
	
		/*
		Special comparison function that knows how to compare Deltas.
		*/
		isEqualValue: function(value, nextValue) {
			if (this.isDelta(value) && this.isDelta(nextValue)) {
				return isEqual(value.ops, nextValue.ops);
			} else {
				return isEqual(value, nextValue);
			}
		},
	
		/*
		Regenerating the editor will cause the whole tree, including the container,
		to be cleaned up and re-rendered from scratch.
		*/
		regenerate: function() {
			// Cache selection and contents in Quill's native format to be restored later
			this.quillDelta = this.editor.getContents();
			this.quillSelection = this.editor.getSelection();
			this.setState({
				generation: this.state.generation + 1,
			});
		},
	
		/*
		Renders an editor area, unless it has been provided one to clone.
		*/
		renderEditingArea: function() {
			var self = this;
			var children = this.props.children;
			var preserveWhitespace = this.props.preserveWhitespace;
	
			var properties = {
				key: this.state.generation,
				tabIndex: this.props.tabIndex,
				ref: function(element) { self.editingArea = element },
			};
	
			var customElement = React.Children.count(children)
				? React.Children.only(children)
				: null;
			var defaultElement = preserveWhitespace ? DOM.pre : DOM.div;
			var editingArea = customElement
				? React.cloneElement(customElement, properties)
				: defaultElement(properties);
	
			return editingArea;
		},
	
		render: function() {
			return DOM.div({
				id: this.props.id,
				style: this.props.style,
				key: this.state.generation,
				className: ['quill'].concat(this.props.className).join(' '),
				onKeyPress: this.props.onKeyPress,
				onKeyDown: this.props.onKeyDown,
				onKeyUp: this.props.onKeyUp },
				this.renderEditingArea()
			);
		},
	
		onEditorChangeText: function(value, delta, source, editor) {
			var currentContents = this.getEditorContents();
	
			// We keep storing the same type of value as what the user gives us,
			// so that value comparisons will be more stable and predictable.
			var nextContents = this.isDelta(currentContents)
				? editor.getContents()
				: editor.getHTML();
			
			if (!this.isEqualValue(nextContents, currentContents)) {
				// Taint this `delta` object, so we can recognize whether the user
				// is trying to send it back as `value`, preventing a likely loop.
				this.lastDeltaChangeSet = delta;
	
				this.setState({ value: nextContents });
	
				if (this.props.onChange) {
					this.props.onChange(value, delta, source, editor);
				}
			}
		},
	
		onEditorChangeSelection: function(nextSelection, source, editor) {
			var currentSelection = this.getEditorSelection();
			var hasGainedFocus = !currentSelection && nextSelection;
			var hasLostFocus = currentSelection && !nextSelection;
	
			if (isEqual(nextSelection, currentSelection)) {
				return;
			}
			
			this.setState({ selection: nextSelection });
			
			if (this.props.onChangeSelection) {
				this.props.onChangeSelection(nextSelection, source, editor);
			}
	
			if (hasGainedFocus && this.props.onFocus) {
				this.props.onFocus(nextSelection, source, editor);
			} else if (hasLostFocus && this.props.onBlur) {
				this.props.onBlur(currentSelection, source, editor);
			}
		},
	
		focus: function() {
			this.editor.focus();
		},
	
		blur: function() {
			this.setEditorSelection(this.editor, null);
		}
	
	});
	
	module.exports = QuillComponent;


/***/ }),
/* 3 */
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/*!*****************************************************************************************************!*\
  !*** external {"commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom","root":"ReactDOM"} ***!
  \*****************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/*!***************************************!*\
  !*** ./~/create-react-class/index.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 3);
	var factory = __webpack_require__(/*! ./factory */ 6);
	
	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}
	
	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;
	
	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./~/create-react-class/factory.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(/*! object-assign */ 8);
	
	// -- Inlined from fbjs --
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	var validateFormat = function validateFormat(format) {};
	
	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function _invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	var warning = function(){};
	
	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	
	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }
	
	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}
	
	// /-- Inlined from fbjs --
	
	var MIXINS_KEY = 'mixins';
	
	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}
	
	var ReactPropTypeLocationNames;
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}
	
	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */
	
	  var injectedMixins = [];
	
	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',
	
	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',
	
	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',
	
	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',
	
	    // ==== Definition methods ====
	
	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',
	
	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',
	
	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',
	
	    // ==== Delegate methods ====
	
	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',
	
	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',
	
	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',
	
	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillMount`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillMount: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillReceiveProps`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',
	
	    /**
	     * Replacement for (deprecated) `componentWillUpdate`.
	     *
	     * @optional
	     */
	    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
	
	    // ==== Advanced methods ====
	
	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };
	
	  /**
	   * Similar to ReactClassInterface but for static methods.
	   */
	  var ReactClassStaticInterface = {
	    /**
	     * This method is invoked after a component is instantiated and when it
	     * receives new props. Return an object to update state in response to
	     * prop changes. Return null to indicate no change to state.
	     *
	     * If an object is returned, its keys will be merged into the existing state.
	     *
	     * @return {object || null}
	     * @optional
	     */
	    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
	  };
	
	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (process.env.NODE_ENV !== 'production') {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };
	
	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }
	
	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;
	
	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }
	
	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }
	
	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (process.env.NODE_ENV !== 'production') {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;
	
	        if (process.env.NODE_ENV !== 'production') {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }
	
	      return;
	    }
	
	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );
	
	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;
	
	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }
	
	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }
	
	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }
	
	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);
	
	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;
	
	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];
	
	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );
	
	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (process.env.NODE_ENV !== 'production') {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	
	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }
	
	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );
	
	      var isAlreadyDefined = name in Constructor;
	      if (isAlreadyDefined) {
	        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
	          ? ReactClassStaticInterface[name]
	          : null;
	
	        _invariant(
	          specPolicy === 'DEFINE_MANY_MERGED',
	          'ReactClass: You are attempting to define ' +
	            '`%s` on your component more than once. This conflict may be ' +
	            'due to a mixin.',
	          name
	        );
	
	        Constructor[name] = createMergedResultFunction(Constructor[name], property);
	
	        return;
	      }
	
	      Constructor[name] = property;
	    }
	  }
	
	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );
	
	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }
	
	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }
	
	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }
	
	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (process.env.NODE_ENV !== 'production') {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (process.env.NODE_ENV !== 'production') {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }
	
	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	
	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };
	
	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };
	
	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },
	
	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };
	
	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );
	
	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );
	
	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );
	
	    if (process.env.NODE_ENV !== 'production') {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
	        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
	          'Did you mean UNSAFE_componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  }
	
	  return createClass;
	}
	
	module.exports = factory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../process/browser.js */ 7)))

/***/ }),
/* 7 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./~/object-assign/index.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 9 */
/*!**********************!*\
  !*** ./src/mixin.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Quill = __webpack_require__(/*! quill */ 1);
	
	var QuillMixin = {
	
		/**
		Creates an editor on the given element. The editor will
		be passed the configuration, have its events bound,
		*/
		createEditor: function($el, config) {
			var editor = new Quill($el, config);
			if (config.tabIndex !== undefined) {
				this.setEditorTabIndex(editor, config.tabIndex);
			}
			this.hookEditor(editor);
			return editor;
		},
	
		hookEditor: function(editor) {
			// Expose the editor on change events via a weaker,
			// unprivileged proxy object that does not allow
			// accidentally modifying editor state.
			var unprivilegedEditor = this.makeUnprivilegedEditor(editor);
	
			this.handleTextChange = function(delta, oldDelta, source) {
				if (this.onEditorChangeText) {
					this.onEditorChangeText(
						editor.root.innerHTML, delta, source,
						unprivilegedEditor
					);
					this.onEditorChangeSelection(
						editor.getSelection(), source,
						unprivilegedEditor
					);
				}
			}.bind(this);
	
			this.handleSelectionChange = function(range, oldRange, source) {
				if (this.onEditorChangeSelection) {
					this.onEditorChangeSelection(
						range, source,
						unprivilegedEditor
					);
				}
			}.bind(this);
	
			editor.on('editor-change', function(eventType, rangeOrDelta, oldRangeOrOldDelta, source) {
				if (eventType === Quill.events.SELECTION_CHANGE) {
					this.handleSelectionChange(rangeOrDelta, oldRangeOrOldDelta, source);
				}
				
				if (eventType === Quill.events.TEXT_CHANGE) {
					this.handleTextChange(rangeOrDelta, oldRangeOrOldDelta, source);
				}
			}.bind(this));
		},
	
		unhookEditor: function(editor) {
			editor.off('selection-change');
			editor.off('text-change');
		},
	
		setEditorReadOnly: function(editor, value) {
			value? editor.disable()
			     : editor.enable();
		},
	
		/*
		Replace the contents of the editor, but keep
		the previous selection hanging around so that
		the cursor won't move.
		*/
		setEditorContents: function(editor, value) {
			var sel = editor.getSelection();
	
			if (typeof value === 'string') {
				editor.setContents(editor.clipboard.convert(value));
			} else {
				editor.setContents(value);
			}
	
			if (sel && editor.hasFocus()) this.setEditorSelection(editor, sel);
		},
	
		setEditorSelection: function(editor, range) {
			if (range) {
				// Validate bounds before applying.
				var length = editor.getLength();
				range.index = Math.max(0, Math.min(range.index, length-1));
				range.length = Math.max(0, Math.min(range.length, (length-1) - range.index));
			}
			editor.setSelection(range);
		},
	
		setEditorTabIndex: function(editor, tabIndex) {
			if (editor.editor && editor.editor.scroll && editor.editor.scroll.domNode) {
				editor.editor.scroll.domNode.tabIndex = tabIndex;
			}
		},
	
		/*
		Returns an weaker, unprivileged proxy object that only
		exposes read-only accessors found on the editor instance,
		without any state-modificating methods.
		*/
		makeUnprivilegedEditor: function(editor) {
			var e = editor;
			return {
				getLength:    function(){ return e.getLength.apply(e, arguments); },
				getText:      function(){ return e.getText.apply(e, arguments); },
				getHTML:      function(){ return e.root.innerHTML },
				getContents:  function(){ return e.getContents.apply(e, arguments); },
				getSelection: function(){ return e.getSelection.apply(e, arguments); },
				getBounds:    function(){ return e.getBounds.apply(e, arguments); },
			};
		}
	
	};
	
	module.exports = QuillMixin;


/***/ }),
/* 10 */
/*!**************************!*\
  !*** ./~/lodash/find.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(/*! ./_createFind */ 11),
	    findIndex = __webpack_require__(/*! ./findIndex */ 127);
	
	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);
	
	module.exports = find;


/***/ }),
/* 11 */
/*!*********************************!*\
  !*** ./~/lodash/_createFind.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 12),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 98),
	    keys = __webpack_require__(/*! ./keys */ 79);
	
	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}
	
	module.exports = createFind;


/***/ }),
/* 12 */
/*!***********************************!*\
  !*** ./~/lodash/_baseIteratee.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(/*! ./_baseMatches */ 13),
	    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ 107),
	    identity = __webpack_require__(/*! ./identity */ 123),
	    isArray = __webpack_require__(/*! ./isArray */ 75),
	    property = __webpack_require__(/*! ./property */ 124);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ }),
/* 13 */
/*!**********************************!*\
  !*** ./~/lodash/_baseMatches.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ 14),
	    getMatchData = __webpack_require__(/*! ./_getMatchData */ 104),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 106);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ }),
/* 14 */
/*!**********************************!*\
  !*** ./~/lodash/_baseIsMatch.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 15),
	    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 59);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ }),
/* 15 */
/*!****************************!*\
  !*** ./~/lodash/_Stack.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 16),
	    stackClear = __webpack_require__(/*! ./_stackClear */ 24),
	    stackDelete = __webpack_require__(/*! ./_stackDelete */ 25),
	    stackGet = __webpack_require__(/*! ./_stackGet */ 26),
	    stackHas = __webpack_require__(/*! ./_stackHas */ 27),
	    stackSet = __webpack_require__(/*! ./_stackSet */ 28);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ }),
/* 16 */
/*!********************************!*\
  !*** ./~/lodash/_ListCache.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ 17),
	    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ 18),
	    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ 21),
	    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ 22),
	    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ 23);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 17 */
/*!*************************************!*\
  !*** ./~/lodash/_listCacheClear.js ***!
  \*************************************/
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 18 */
/*!**************************************!*\
  !*** ./~/lodash/_listCacheDelete.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 19);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 19 */
/*!***********************************!*\
  !*** ./~/lodash/_assocIndexOf.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(/*! ./eq */ 20);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 20 */
/*!************************!*\
  !*** ./~/lodash/eq.js ***!
  \************************/
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 21 */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheGet.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 19);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 22 */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheHas.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 19);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 23 */
/*!***********************************!*\
  !*** ./~/lodash/_listCacheSet.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ 19);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 24 */
/*!*********************************!*\
  !*** ./~/lodash/_stackClear.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 16);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ }),
/* 25 */
/*!**********************************!*\
  !*** ./~/lodash/_stackDelete.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ }),
/* 26 */
/*!*******************************!*\
  !*** ./~/lodash/_stackGet.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ }),
/* 27 */
/*!*******************************!*\
  !*** ./~/lodash/_stackHas.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ }),
/* 28 */
/*!*******************************!*\
  !*** ./~/lodash/_stackSet.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(/*! ./_ListCache */ 16),
	    Map = __webpack_require__(/*! ./_Map */ 29),
	    MapCache = __webpack_require__(/*! ./_MapCache */ 44);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ }),
/* 29 */
/*!**************************!*\
  !*** ./~/lodash/_Map.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 30),
	    root = __webpack_require__(/*! ./_root */ 35);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 30 */
/*!********************************!*\
  !*** ./~/lodash/_getNative.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ 31),
	    getValue = __webpack_require__(/*! ./_getValue */ 43);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 31 */
/*!***********************************!*\
  !*** ./~/lodash/_baseIsNative.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(/*! ./isFunction */ 32),
	    isMasked = __webpack_require__(/*! ./_isMasked */ 40),
	    isObject = __webpack_require__(/*! ./isObject */ 39),
	    toSource = __webpack_require__(/*! ./_toSource */ 42);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 32 */
/*!********************************!*\
  !*** ./~/lodash/isFunction.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 33),
	    isObject = __webpack_require__(/*! ./isObject */ 39);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 33 */
/*!*********************************!*\
  !*** ./~/lodash/_baseGetTag.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 34),
	    getRawTag = __webpack_require__(/*! ./_getRawTag */ 37),
	    objectToString = __webpack_require__(/*! ./_objectToString */ 38);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 34 */
/*!*****************************!*\
  !*** ./~/lodash/_Symbol.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 35);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 35 */
/*!***************************!*\
  !*** ./~/lodash/_root.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 36);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 36 */
/*!*********************************!*\
  !*** ./~/lodash/_freeGlobal.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 37 */
/*!********************************!*\
  !*** ./~/lodash/_getRawTag.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 34);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 38 */
/*!*************************************!*\
  !*** ./~/lodash/_objectToString.js ***!
  \*************************************/
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 39 */
/*!******************************!*\
  !*** ./~/lodash/isObject.js ***!
  \******************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 40 */
/*!*******************************!*\
  !*** ./~/lodash/_isMasked.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(/*! ./_coreJsData */ 41);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 41 */
/*!*********************************!*\
  !*** ./~/lodash/_coreJsData.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 35);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 42 */
/*!*******************************!*\
  !*** ./~/lodash/_toSource.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 43 */
/*!*******************************!*\
  !*** ./~/lodash/_getValue.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 44 */
/*!*******************************!*\
  !*** ./~/lodash/_MapCache.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ 45),
	    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ 53),
	    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ 56),
	    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ 57),
	    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ 58);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 45 */
/*!************************************!*\
  !*** ./~/lodash/_mapCacheClear.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(/*! ./_Hash */ 46),
	    ListCache = __webpack_require__(/*! ./_ListCache */ 16),
	    Map = __webpack_require__(/*! ./_Map */ 29);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 46 */
/*!***************************!*\
  !*** ./~/lodash/_Hash.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(/*! ./_hashClear */ 47),
	    hashDelete = __webpack_require__(/*! ./_hashDelete */ 49),
	    hashGet = __webpack_require__(/*! ./_hashGet */ 50),
	    hashHas = __webpack_require__(/*! ./_hashHas */ 51),
	    hashSet = __webpack_require__(/*! ./_hashSet */ 52);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 47 */
/*!********************************!*\
  !*** ./~/lodash/_hashClear.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 48);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 48 */
/*!***********************************!*\
  !*** ./~/lodash/_nativeCreate.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 30);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 49 */
/*!*********************************!*\
  !*** ./~/lodash/_hashDelete.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 50 */
/*!******************************!*\
  !*** ./~/lodash/_hashGet.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 48);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 51 */
/*!******************************!*\
  !*** ./~/lodash/_hashHas.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 48);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 52 */
/*!******************************!*\
  !*** ./~/lodash/_hashSet.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ 48);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 53 */
/*!*************************************!*\
  !*** ./~/lodash/_mapCacheDelete.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 54);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 54 */
/*!*********************************!*\
  !*** ./~/lodash/_getMapData.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(/*! ./_isKeyable */ 55);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 55 */
/*!********************************!*\
  !*** ./~/lodash/_isKeyable.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 56 */
/*!**********************************!*\
  !*** ./~/lodash/_mapCacheGet.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 54);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 57 */
/*!**********************************!*\
  !*** ./~/lodash/_mapCacheHas.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 54);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 58 */
/*!**********************************!*\
  !*** ./~/lodash/_mapCacheSet.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(/*! ./_getMapData */ 54);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 59 */
/*!**********************************!*\
  !*** ./~/lodash/_baseIsEqual.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ 60),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 84);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ }),
/* 60 */
/*!**************************************!*\
  !*** ./~/lodash/_baseIsEqualDeep.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(/*! ./_Stack */ 15),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 61),
	    equalByTag = __webpack_require__(/*! ./_equalByTag */ 67),
	    equalObjects = __webpack_require__(/*! ./_equalObjects */ 71),
	    getTag = __webpack_require__(/*! ./_getTag */ 99),
	    isArray = __webpack_require__(/*! ./isArray */ 75),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 85),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 89);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ }),
/* 61 */
/*!**********************************!*\
  !*** ./~/lodash/_equalArrays.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(/*! ./_SetCache */ 62),
	    arraySome = __webpack_require__(/*! ./_arraySome */ 65),
	    cacheHas = __webpack_require__(/*! ./_cacheHas */ 66);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Check that cyclic values are equal.
	  var arrStacked = stack.get(array);
	  var othStacked = stack.get(other);
	  if (arrStacked && othStacked) {
	    return arrStacked == other && othStacked == array;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ }),
/* 62 */
/*!*******************************!*\
  !*** ./~/lodash/_SetCache.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(/*! ./_MapCache */ 44),
	    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ 63),
	    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ 64);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ }),
/* 63 */
/*!**********************************!*\
  !*** ./~/lodash/_setCacheAdd.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ }),
/* 64 */
/*!**********************************!*\
  !*** ./~/lodash/_setCacheHas.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ }),
/* 65 */
/*!********************************!*\
  !*** ./~/lodash/_arraySome.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }),
/* 66 */
/*!*******************************!*\
  !*** ./~/lodash/_cacheHas.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ }),
/* 67 */
/*!*********************************!*\
  !*** ./~/lodash/_equalByTag.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 34),
	    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ 68),
	    eq = __webpack_require__(/*! ./eq */ 20),
	    equalArrays = __webpack_require__(/*! ./_equalArrays */ 61),
	    mapToArray = __webpack_require__(/*! ./_mapToArray */ 69),
	    setToArray = __webpack_require__(/*! ./_setToArray */ 70);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ }),
/* 68 */
/*!*********************************!*\
  !*** ./~/lodash/_Uint8Array.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(/*! ./_root */ 35);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ }),
/* 69 */
/*!*********************************!*\
  !*** ./~/lodash/_mapToArray.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ }),
/* 70 */
/*!*********************************!*\
  !*** ./~/lodash/_setToArray.js ***!
  \*********************************/
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ }),
/* 71 */
/*!***********************************!*\
  !*** ./~/lodash/_equalObjects.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ 72);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Check that cyclic values are equal.
	  var objStacked = stack.get(object);
	  var othStacked = stack.get(other);
	  if (objStacked && othStacked) {
	    return objStacked == other && othStacked == object;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ }),
/* 72 */
/*!*********************************!*\
  !*** ./~/lodash/_getAllKeys.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ 73),
	    getSymbols = __webpack_require__(/*! ./_getSymbols */ 76),
	    keys = __webpack_require__(/*! ./keys */ 79);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ }),
/* 73 */
/*!*************************************!*\
  !*** ./~/lodash/_baseGetAllKeys.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(/*! ./_arrayPush */ 74),
	    isArray = __webpack_require__(/*! ./isArray */ 75);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ }),
/* 74 */
/*!********************************!*\
  !*** ./~/lodash/_arrayPush.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 75 */
/*!*****************************!*\
  !*** ./~/lodash/isArray.js ***!
  \*****************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 76 */
/*!*********************************!*\
  !*** ./~/lodash/_getSymbols.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ 77),
	    stubArray = __webpack_require__(/*! ./stubArray */ 78);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ }),
/* 77 */
/*!**********************************!*\
  !*** ./~/lodash/_arrayFilter.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ }),
/* 78 */
/*!*******************************!*\
  !*** ./~/lodash/stubArray.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ }),
/* 79 */
/*!**************************!*\
  !*** ./~/lodash/keys.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ 80),
	    baseKeys = __webpack_require__(/*! ./_baseKeys */ 94),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 98);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 80 */
/*!************************************!*\
  !*** ./~/lodash/_arrayLikeKeys.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(/*! ./_baseTimes */ 81),
	    isArguments = __webpack_require__(/*! ./isArguments */ 82),
	    isArray = __webpack_require__(/*! ./isArray */ 75),
	    isBuffer = __webpack_require__(/*! ./isBuffer */ 85),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 88),
	    isTypedArray = __webpack_require__(/*! ./isTypedArray */ 89);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 81 */
/*!********************************!*\
  !*** ./~/lodash/_baseTimes.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 82 */
/*!*********************************!*\
  !*** ./~/lodash/isArguments.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ 83),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 84);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 83 */
/*!**************************************!*\
  !*** ./~/lodash/_baseIsArguments.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 33),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 84);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 84 */
/*!**********************************!*\
  !*** ./~/lodash/isObjectLike.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 85 */
/*!******************************!*\
  !*** ./~/lodash/isBuffer.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ 35),
	    stubFalse = __webpack_require__(/*! ./stubFalse */ 87);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 86)(module)))

/***/ }),
/* 86 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 87 */
/*!*******************************!*\
  !*** ./~/lodash/stubFalse.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ }),
/* 88 */
/*!******************************!*\
  !*** ./~/lodash/_isIndex.js ***!
  \******************************/
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 89 */
/*!**********************************!*\
  !*** ./~/lodash/isTypedArray.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ 90),
	    baseUnary = __webpack_require__(/*! ./_baseUnary */ 92),
	    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ 93);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 90 */
/*!***************************************!*\
  !*** ./~/lodash/_baseIsTypedArray.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 33),
	    isLength = __webpack_require__(/*! ./isLength */ 91),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 84);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 91 */
/*!******************************!*\
  !*** ./~/lodash/isLength.js ***!
  \******************************/
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 92 */
/*!********************************!*\
  !*** ./~/lodash/_baseUnary.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 93 */
/*!*******************************!*\
  !*** ./~/lodash/_nodeUtil.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ 36);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	
	    if (types) {
	      return types;
	    }
	
	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/module.js */ 86)(module)))

/***/ }),
/* 94 */
/*!*******************************!*\
  !*** ./~/lodash/_baseKeys.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(/*! ./_isPrototype */ 95),
	    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ 96);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 95 */
/*!**********************************!*\
  !*** ./~/lodash/_isPrototype.js ***!
  \**********************************/
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ }),
/* 96 */
/*!*********************************!*\
  !*** ./~/lodash/_nativeKeys.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(/*! ./_overArg */ 97);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 97 */
/*!******************************!*\
  !*** ./~/lodash/_overArg.js ***!
  \******************************/
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 98 */
/*!*********************************!*\
  !*** ./~/lodash/isArrayLike.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(/*! ./isFunction */ 32),
	    isLength = __webpack_require__(/*! ./isLength */ 91);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ }),
/* 99 */
/*!*****************************!*\
  !*** ./~/lodash/_getTag.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(/*! ./_DataView */ 100),
	    Map = __webpack_require__(/*! ./_Map */ 29),
	    Promise = __webpack_require__(/*! ./_Promise */ 101),
	    Set = __webpack_require__(/*! ./_Set */ 102),
	    WeakMap = __webpack_require__(/*! ./_WeakMap */ 103),
	    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 33),
	    toSource = __webpack_require__(/*! ./_toSource */ 42);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ }),
/* 100 */
/*!*******************************!*\
  !*** ./~/lodash/_DataView.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 30),
	    root = __webpack_require__(/*! ./_root */ 35);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 101 */
/*!******************************!*\
  !*** ./~/lodash/_Promise.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 30),
	    root = __webpack_require__(/*! ./_root */ 35);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 102 */
/*!**************************!*\
  !*** ./~/lodash/_Set.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 30),
	    root = __webpack_require__(/*! ./_root */ 35);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 103 */
/*!******************************!*\
  !*** ./~/lodash/_WeakMap.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(/*! ./_getNative */ 30),
	    root = __webpack_require__(/*! ./_root */ 35);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 104 */
/*!***********************************!*\
  !*** ./~/lodash/_getMatchData.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 105),
	    keys = __webpack_require__(/*! ./keys */ 79);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ }),
/* 105 */
/*!*****************************************!*\
  !*** ./~/lodash/_isStrictComparable.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./isObject */ 39);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ }),
/* 106 */
/*!**********************************************!*\
  !*** ./~/lodash/_matchesStrictComparable.js ***!
  \**********************************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ }),
/* 107 */
/*!******************************************!*\
  !*** ./~/lodash/_baseMatchesProperty.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 59),
	    get = __webpack_require__(/*! ./get */ 108),
	    hasIn = __webpack_require__(/*! ./hasIn */ 120),
	    isKey = __webpack_require__(/*! ./_isKey */ 111),
	    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ 105),
	    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ 106),
	    toKey = __webpack_require__(/*! ./_toKey */ 119);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ }),
/* 108 */
/*!*************************!*\
  !*** ./~/lodash/get.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 109);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),
/* 109 */
/*!******************************!*\
  !*** ./~/lodash/_baseGet.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 110),
	    toKey = __webpack_require__(/*! ./_toKey */ 119);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 110 */
/*!*******************************!*\
  !*** ./~/lodash/_castPath.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 75),
	    isKey = __webpack_require__(/*! ./_isKey */ 111),
	    stringToPath = __webpack_require__(/*! ./_stringToPath */ 113),
	    toString = __webpack_require__(/*! ./toString */ 116);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),
/* 111 */
/*!****************************!*\
  !*** ./~/lodash/_isKey.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(/*! ./isArray */ 75),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 112);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 112 */
/*!******************************!*\
  !*** ./~/lodash/isSymbol.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ 33),
	    isObjectLike = __webpack_require__(/*! ./isObjectLike */ 84);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 113 */
/*!***********************************!*\
  !*** ./~/lodash/_stringToPath.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ 114);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 114 */
/*!************************************!*\
  !*** ./~/lodash/_memoizeCapped.js ***!
  \************************************/
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(/*! ./memoize */ 115);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),
/* 115 */
/*!*****************************!*\
  !*** ./~/lodash/memoize.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(/*! ./_MapCache */ 44);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 116 */
/*!******************************!*\
  !*** ./~/lodash/toString.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(/*! ./_baseToString */ 117);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 117 */
/*!***********************************!*\
  !*** ./~/lodash/_baseToString.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(/*! ./_Symbol */ 34),
	    arrayMap = __webpack_require__(/*! ./_arrayMap */ 118),
	    isArray = __webpack_require__(/*! ./isArray */ 75),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 112);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 118 */
/*!*******************************!*\
  !*** ./~/lodash/_arrayMap.js ***!
  \*******************************/
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 119 */
/*!****************************!*\
  !*** ./~/lodash/_toKey.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(/*! ./isSymbol */ 112);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 120 */
/*!***************************!*\
  !*** ./~/lodash/hasIn.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ 121),
	    hasPath = __webpack_require__(/*! ./_hasPath */ 122);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ }),
/* 121 */
/*!********************************!*\
  !*** ./~/lodash/_baseHasIn.js ***!
  \********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ }),
/* 122 */
/*!******************************!*\
  !*** ./~/lodash/_hasPath.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(/*! ./_castPath */ 110),
	    isArguments = __webpack_require__(/*! ./isArguments */ 82),
	    isArray = __webpack_require__(/*! ./isArray */ 75),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 88),
	    isLength = __webpack_require__(/*! ./isLength */ 91),
	    toKey = __webpack_require__(/*! ./_toKey */ 119);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ }),
/* 123 */
/*!******************************!*\
  !*** ./~/lodash/identity.js ***!
  \******************************/
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 124 */
/*!******************************!*\
  !*** ./~/lodash/property.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(/*! ./_baseProperty */ 125),
	    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ 126),
	    isKey = __webpack_require__(/*! ./_isKey */ 111),
	    toKey = __webpack_require__(/*! ./_toKey */ 119);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ }),
/* 125 */
/*!***********************************!*\
  !*** ./~/lodash/_baseProperty.js ***!
  \***********************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ }),
/* 126 */
/*!***************************************!*\
  !*** ./~/lodash/_basePropertyDeep.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(/*! ./_baseGet */ 109);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ }),
/* 127 */
/*!*******************************!*\
  !*** ./~/lodash/findIndex.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ 128),
	    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 12),
	    toInteger = __webpack_require__(/*! ./toInteger */ 129);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array == null ? 0 : array.length;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}
	
	module.exports = findIndex;


/***/ }),
/* 128 */
/*!************************************!*\
  !*** ./~/lodash/_baseFindIndex.js ***!
  \************************************/
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseFindIndex;


/***/ }),
/* 129 */
/*!*******************************!*\
  !*** ./~/lodash/toInteger.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(/*! ./toFinite */ 130);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	module.exports = toInteger;


/***/ }),
/* 130 */
/*!******************************!*\
  !*** ./~/lodash/toFinite.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(/*! ./toNumber */ 131);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;


/***/ }),
/* 131 */
/*!******************************!*\
  !*** ./~/lodash/toNumber.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseTrim = __webpack_require__(/*! ./_baseTrim */ 132),
	    isObject = __webpack_require__(/*! ./isObject */ 39),
	    isSymbol = __webpack_require__(/*! ./isSymbol */ 112);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = baseTrim(value);
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),
/* 132 */
/*!*******************************!*\
  !*** ./~/lodash/_baseTrim.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ 133);
	
	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;
	
	/**
	 * The base implementation of `_.trim`.
	 *
	 * @private
	 * @param {string} string The string to trim.
	 * @returns {string} Returns the trimmed string.
	 */
	function baseTrim(string) {
	  return string
	    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	    : string;
	}
	
	module.exports = baseTrim;


/***/ }),
/* 133 */
/*!**************************************!*\
  !*** ./~/lodash/_trimmedEndIndex.js ***!
  \**************************************/
/***/ (function(module, exports) {

	/** Used to match a single whitespace character. */
	var reWhitespace = /\s/;
	
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	 * character of `string`.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {number} Returns the index of the last non-whitespace character.
	 */
	function trimmedEndIndex(string) {
	  var index = string.length;
	
	  while (index-- && reWhitespace.test(string.charAt(index))) {}
	  return index;
	}
	
	module.exports = trimmedEndIndex;


/***/ }),
/* 134 */
/*!**************************!*\
  !*** ./~/lodash/some.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(/*! ./_arraySome */ 65),
	    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ 12),
	    baseSome = __webpack_require__(/*! ./_baseSome */ 135),
	    isArray = __webpack_require__(/*! ./isArray */ 75),
	    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ 141);
	
	/**
	 * Checks if `predicate` returns truthy for **any** element of `collection`.
	 * Iteration is stopped once `predicate` returns truthy. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.some([null, 0, 'yes', false], Boolean);
	 * // => true
	 *
	 * var users = [
	 *   { 'user': 'barney', 'active': true },
	 *   { 'user': 'fred',   'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.some(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.some(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.some(users, 'active');
	 * // => true
	 */
	function some(collection, predicate, guard) {
	  var func = isArray(collection) ? arraySome : baseSome;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}
	
	module.exports = some;


/***/ }),
/* 135 */
/*!*******************************!*\
  !*** ./~/lodash/_baseSome.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(/*! ./_baseEach */ 136);
	
	/**
	 * The base implementation of `_.some` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function baseSome(collection, predicate) {
	  var result;
	
	  baseEach(collection, function(value, index, collection) {
	    result = predicate(value, index, collection);
	    return !result;
	  });
	  return !!result;
	}
	
	module.exports = baseSome;


/***/ }),
/* 136 */
/*!*******************************!*\
  !*** ./~/lodash/_baseEach.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ 137),
	    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ 140);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ }),
/* 137 */
/*!*********************************!*\
  !*** ./~/lodash/_baseForOwn.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(/*! ./_baseFor */ 138),
	    keys = __webpack_require__(/*! ./keys */ 79);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ }),
/* 138 */
/*!******************************!*\
  !*** ./~/lodash/_baseFor.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ 139);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ }),
/* 139 */
/*!************************************!*\
  !*** ./~/lodash/_createBaseFor.js ***!
  \************************************/
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ }),
/* 140 */
/*!*************************************!*\
  !*** ./~/lodash/_createBaseEach.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(/*! ./isArrayLike */ 98);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ }),
/* 141 */
/*!*************************************!*\
  !*** ./~/lodash/_isIterateeCall.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(/*! ./eq */ 20),
	    isArrayLike = __webpack_require__(/*! ./isArrayLike */ 98),
	    isIndex = __webpack_require__(/*! ./_isIndex */ 88),
	    isObject = __webpack_require__(/*! ./isObject */ 39);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ }),
/* 142 */
/*!*****************************!*\
  !*** ./~/lodash/isEqual.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ 59);
	
	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are compared by strict equality, i.e. `===`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}
	
	module.exports = isEqual;


/***/ }),
/* 143 */
/*!*********************************************************************************************************!*\
  !*** external {"commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types","root":"PropTypes"} ***!
  \*********************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_143__;

/***/ }),
/* 144 */
/*!****************************************!*\
  !*** ./~/react-dom-factories/index.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	(function(f) {
	  if (true) {
	    module.exports = f(__webpack_require__(/*! react */ 3));
	    /* global define */
	  } else if (typeof define === 'function' && define.amd) {
	    define(['react'], f);
	  } else {
	    var g;
	    if (typeof window !== 'undefined') {
	      g = window;
	    } else if (typeof global !== 'undefined') {
	      g = global;
	    } else if (typeof self !== 'undefined') {
	      g = self;
	    } else {
	      g = this;
	    }
	
	    if (typeof g.React === 'undefined') {
	      throw Error('React module should be required before ReactDOMFactories');
	    }
	
	    g.ReactDOMFactories = f(g.React);
	  }
	})(function(React) {
	  /**
	   * Create a factory that creates HTML tag elements.
	   */
	  function createDOMFactory(type) {
	    var factory = React.createElement.bind(null, type);
	    // Expose the type on the factory and the prototype so that it can be
	    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	    // This should not be named `constructor` since this may not be the function
	    // that created the element, and it may not even be a constructor.
	    factory.type = type;
	    return factory;
	  };
	
	  /**
	   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	   */
	  var ReactDOMFactories = {
	    a: createDOMFactory('a'),
	    abbr: createDOMFactory('abbr'),
	    address: createDOMFactory('address'),
	    area: createDOMFactory('area'),
	    article: createDOMFactory('article'),
	    aside: createDOMFactory('aside'),
	    audio: createDOMFactory('audio'),
	    b: createDOMFactory('b'),
	    base: createDOMFactory('base'),
	    bdi: createDOMFactory('bdi'),
	    bdo: createDOMFactory('bdo'),
	    big: createDOMFactory('big'),
	    blockquote: createDOMFactory('blockquote'),
	    body: createDOMFactory('body'),
	    br: createDOMFactory('br'),
	    button: createDOMFactory('button'),
	    canvas: createDOMFactory('canvas'),
	    caption: createDOMFactory('caption'),
	    cite: createDOMFactory('cite'),
	    code: createDOMFactory('code'),
	    col: createDOMFactory('col'),
	    colgroup: createDOMFactory('colgroup'),
	    data: createDOMFactory('data'),
	    datalist: createDOMFactory('datalist'),
	    dd: createDOMFactory('dd'),
	    del: createDOMFactory('del'),
	    details: createDOMFactory('details'),
	    dfn: createDOMFactory('dfn'),
	    dialog: createDOMFactory('dialog'),
	    div: createDOMFactory('div'),
	    dl: createDOMFactory('dl'),
	    dt: createDOMFactory('dt'),
	    em: createDOMFactory('em'),
	    embed: createDOMFactory('embed'),
	    fieldset: createDOMFactory('fieldset'),
	    figcaption: createDOMFactory('figcaption'),
	    figure: createDOMFactory('figure'),
	    footer: createDOMFactory('footer'),
	    form: createDOMFactory('form'),
	    h1: createDOMFactory('h1'),
	    h2: createDOMFactory('h2'),
	    h3: createDOMFactory('h3'),
	    h4: createDOMFactory('h4'),
	    h5: createDOMFactory('h5'),
	    h6: createDOMFactory('h6'),
	    head: createDOMFactory('head'),
	    header: createDOMFactory('header'),
	    hgroup: createDOMFactory('hgroup'),
	    hr: createDOMFactory('hr'),
	    html: createDOMFactory('html'),
	    i: createDOMFactory('i'),
	    iframe: createDOMFactory('iframe'),
	    img: createDOMFactory('img'),
	    input: createDOMFactory('input'),
	    ins: createDOMFactory('ins'),
	    kbd: createDOMFactory('kbd'),
	    keygen: createDOMFactory('keygen'),
	    label: createDOMFactory('label'),
	    legend: createDOMFactory('legend'),
	    li: createDOMFactory('li'),
	    link: createDOMFactory('link'),
	    main: createDOMFactory('main'),
	    map: createDOMFactory('map'),
	    mark: createDOMFactory('mark'),
	    menu: createDOMFactory('menu'),
	    menuitem: createDOMFactory('menuitem'),
	    meta: createDOMFactory('meta'),
	    meter: createDOMFactory('meter'),
	    nav: createDOMFactory('nav'),
	    noscript: createDOMFactory('noscript'),
	    object: createDOMFactory('object'),
	    ol: createDOMFactory('ol'),
	    optgroup: createDOMFactory('optgroup'),
	    option: createDOMFactory('option'),
	    output: createDOMFactory('output'),
	    p: createDOMFactory('p'),
	    param: createDOMFactory('param'),
	    picture: createDOMFactory('picture'),
	    pre: createDOMFactory('pre'),
	    progress: createDOMFactory('progress'),
	    q: createDOMFactory('q'),
	    rp: createDOMFactory('rp'),
	    rt: createDOMFactory('rt'),
	    ruby: createDOMFactory('ruby'),
	    s: createDOMFactory('s'),
	    samp: createDOMFactory('samp'),
	    script: createDOMFactory('script'),
	    section: createDOMFactory('section'),
	    select: createDOMFactory('select'),
	    small: createDOMFactory('small'),
	    source: createDOMFactory('source'),
	    span: createDOMFactory('span'),
	    strong: createDOMFactory('strong'),
	    style: createDOMFactory('style'),
	    sub: createDOMFactory('sub'),
	    summary: createDOMFactory('summary'),
	    sup: createDOMFactory('sup'),
	    table: createDOMFactory('table'),
	    tbody: createDOMFactory('tbody'),
	    td: createDOMFactory('td'),
	    textarea: createDOMFactory('textarea'),
	    tfoot: createDOMFactory('tfoot'),
	    th: createDOMFactory('th'),
	    thead: createDOMFactory('thead'),
	    time: createDOMFactory('time'),
	    title: createDOMFactory('title'),
	    tr: createDOMFactory('tr'),
	    track: createDOMFactory('track'),
	    u: createDOMFactory('u'),
	    ul: createDOMFactory('ul'),
	    var: createDOMFactory('var'),
	    video: createDOMFactory('video'),
	    wbr: createDOMFactory('wbr'),
	
	    // SVG
	    circle: createDOMFactory('circle'),
	    clipPath: createDOMFactory('clipPath'),
	    defs: createDOMFactory('defs'),
	    ellipse: createDOMFactory('ellipse'),
	    g: createDOMFactory('g'),
	    image: createDOMFactory('image'),
	    line: createDOMFactory('line'),
	    linearGradient: createDOMFactory('linearGradient'),
	    mask: createDOMFactory('mask'),
	    path: createDOMFactory('path'),
	    pattern: createDOMFactory('pattern'),
	    polygon: createDOMFactory('polygon'),
	    polyline: createDOMFactory('polyline'),
	    radialGradient: createDOMFactory('radialGradient'),
	    rect: createDOMFactory('rect'),
	    stop: createDOMFactory('stop'),
	    svg: createDOMFactory('svg'),
	    text: createDOMFactory('text'),
	    tspan: createDOMFactory('tspan'),
	  };
	
	  // due to wrapper and conditionals at the top, this will either become
	  // `module.exports ReactDOMFactories` if that is available,
	  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
	  // if that is available,
	  // otherwise it will be defined as global variable.
	  return ReactDOMFactories;
	});
	


/***/ }),
/* 145 */
/*!************************!*\
  !*** ./src/toolbar.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	/*
	QuillToolbar is deprecated. Consider switching to the official Quill
	toolbar format, or providing your own toolbar instead. 
	See https://quilljs.com/docs/modules/toolbar
	*/
	
	'use strict';
	
	var React = __webpack_require__(/*! react */ 3);
	var ReactDOMServer = __webpack_require__(/*! react-dom/server */ 146);
	var createClass = __webpack_require__(/*! create-react-class */ 5);
	var find = __webpack_require__(/*! lodash/find */ 10);
	var isEqual = __webpack_require__(/*! lodash/isEqual */ 142);
	var T = __webpack_require__(/*! prop-types */ 143);
	var DOM = __webpack_require__(/*! react-dom-factories */ 144);
	
	var defaultColors = [
		'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
		'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
		'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
		'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
		'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
		'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
		'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
		'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
		'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
		'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
		'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
		'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
	].map(function(color){ return { value: color } });
	
	var defaultItems = [
	
		{ label:'Formats', type:'group', items: [
			{ label:'Font', type:'font', items: [
				{ label:'Sans Serif',  value:'sans-serif', selected:true },
				{ label:'Serif',       value:'serif' },
				{ label:'Monospace',   value:'monospace' }
			]},
			{ label:'Size', type:'size', items: [
				{ label:'Small',  value:'10px' },
				{ label:'Normal', value:'13px', selected:true },
				{ label:'Large',  value:'18px' },
				{ label:'Huge',   value:'32px' }
			]},
			{ label:'Alignment', type:'align', items: [
				{ label:'', value:'', selected:true },
				{ label:'', value:'center' },
				{ label:'', value:'right' },
				{ label:'', value:'justify' }
			]}
		]},
	
		{ label:'Text', type:'group', items: [
			{ type:'bold', label:'Bold' },
			{ type:'italic', label:'Italic' },
			{ type:'strike', label:'Strike' },
			{ type:'underline', label:'Underline' },
			{ type:'color', label:'Color', items:defaultColors },
			{ type:'background', label:'Background color', items:defaultColors },
			{ type:'link', label:'Link' }
		]},
	
		{ label:'Blocks', type:'group', items: [
			{ type:'list', value:'bullet' },
			{ type:'list', value:'ordered' }
		]},
	
		{ label:'Blocks', type:'group', items: [
			{ type:'image', label:'Image' }
		]}
	
	];
	
	var QuillToolbar = createClass({
	
		displayName: 'Quill Toolbar',
	
		propTypes: {
			id:        T.string,
			className: T.string,
			style:     T.object,
			items:     T.array
		},
	
		getDefaultProps: function() {
			return {
				items: defaultItems
			};
		},
	
		componentDidMount: function() {
			console.warn(
				'QuillToolbar is deprecated. Consider switching to the official Quill ' +
				'toolbar format, or providing your own toolbar instead. ' +
				'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v1-0-0'
			);
		},
	
		shouldComponentUpdate: function(nextProps, nextState) {
			return !isEqual(nextProps, this.props);
		},
	
		renderGroup: function(item, key) {
			return DOM.span({
				key: item.label || key,
				className:'ql-formats' },
				item.items.map(this.renderItem)
			);
		},
	
		renderChoiceItem: function(item, key) {
			return DOM.option({
				key: item.label || item.value || key,
				value: item.value },
				item.label
			);
		},
	
		renderChoices: function(item, key) {
			var choiceItems = item.items.map(this.renderChoiceItem);
			var selectedItem = find(item.items, function(item){ return item.selected });
			var attrs = {
				key: item.label || key,
				title: item.label,
				className: 'ql-'+item.type,
				value: selectedItem.value,
			};
			return DOM.select(attrs, choiceItems);
		},
	
		renderButton: function(item, key) {
			return DOM.button({
				type: 'button',
				key: item.label || item.value || key,
				value: item.value,
				className: 'ql-'+item.type,
				title: item.label },
				item.children
			);
		},
	
		renderAction: function(item, key) {
			return DOM.button({
				key: item.label || item.value || key,
				className: 'ql-'+item.type,
				title: item.label },
				item.children
			);
		},
	
		/* jshint maxcomplexity: false */
		renderItem: function(item, key) {
			switch (item.type) {
				case 'group':
					return this.renderGroup(item, key);
				case 'font':
				case 'header':
				case 'align':
				case 'size':
				case 'color':
				case 'background':
					return this.renderChoices(item, key);
				case 'bold':
				case 'italic':
				case 'underline':
				case 'strike':
				case 'link':
				case 'list':
				case 'bullet':
				case 'ordered':
				case 'indent':
				case 'image':
				case 'video':
					return this.renderButton(item, key);
				default:
					return this.renderAction(item, key);
			}
		},
	
		getClassName: function() {
			return 'quill-toolbar ' + (this.props.className||'');
		},
	
		render: function() {
			var children = this.props.items.map(this.renderItem);
			var html = children.map(ReactDOMServer.renderToStaticMarkup).join('');
			return DOM.div({
				id: this.props.id,
				className: this.getClassName(),
				style: this.props.style,
				dangerouslySetInnerHTML: { __html:html }
			});
		},
	
	});
	
	module.exports = QuillToolbar;
	QuillToolbar.defaultItems = defaultItems;
	QuillToolbar.defaultColors = defaultColors;


/***/ }),
/* 146 */
/*!********************************************************************************************************************************!*\
  !*** external {"commonjs":"react-dom/server","commonjs2":"react-dom/server","amd":"react-dom/server","root":"ReactDOMServer"} ***!
  \********************************************************************************************************************************/
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_146__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=react-quill.js.map