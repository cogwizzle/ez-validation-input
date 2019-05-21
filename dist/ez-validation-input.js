(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ez-validation-input", [], factory);
	else if(typeof exports === 'object')
		exports["ez-validation-input"] = factory();
	else
		root["ez-validation-input"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ez-validation-input.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ez-validation-input.js":
/*!************************************!*\
  !*** ./src/ez-validation-input.js ***!
  \************************************/
/*! exports provided: EzValidationInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EzValidationInput\", function() { return EzValidationInput; });\nclass EzValidationInput extends HTMLInputElement {\n  constructor() {\n    super();\n    this._isRequired = false;\n    this._regex = null;\n  }\n\n  static get observedAttributes() {\n    return ['value', 'regex'];\n  }\n\n  _checkIsRequiredAndPopulated(value) {\n    return this._isRequired ? !!value : true;\n  }\n\n  _checkIfRegexMatches(value) {\n    return this._regex ? value.match(this._regex) !== null : true;\n  }\n\n  _updateRequired(value) {\n    if (this.hasAttribute('required')) this._isRequired = value !== 'false' || this.getAttribute('required') !== 'false';\n  }\n\n  _updateRegex(value) {\n    if (this.hasAttribute('regex')) this._regex = value || this.getAttribute('regex');\n  }\n\n  _triggerEvent() {\n    this.dispatchEvent(this.hasAttribute('valid') ? new CustomEvent('valid') : new CustomEvent('invalid'));\n  }\n\n  connectedCallback() {\n    this._updateRequired();\n\n    this._updateRegex();\n\n    this.addEventListener('keyup', event => {\n      const {\n        value\n      } = event.target;\n\n      const requirementCheck = this._checkIsRequiredAndPopulated(value);\n\n      const regexCheck = this._checkIfRegexMatches(value);\n\n      if (requirementCheck && regexCheck) {\n        this.setAttribute('valid', '');\n      } else {\n        this.removeAttribute('valid');\n      }\n\n      this._triggerEvent();\n    });\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    if (oldValue !== newValue) {\n      switch (name) {\n        case 'regex':\n          this._updateRegex(newValue);\n\n          break;\n\n        case 'required':\n          this._updateRequired(newValue);\n\n          break;\n\n        default:\n          console.log('Unknown updated attribute.');\n        // Shouldn't reach here.\n      }\n    }\n  }\n\n}\ncustomElements.define('ez-validation-input', EzValidationInput, {\n  extends: 'input'\n});\n\n//# sourceURL=webpack://ez-validation-input/./src/ez-validation-input.js?");

/***/ })

/******/ });
});