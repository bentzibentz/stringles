/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utiles */ "./src/lib/utils/utiles.ts");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Stringles = /*#__PURE__*/_createClass(function Stringles() {
  var _this = this;

  _classCallCheck(this, Stringles);

  _defineProperty(this, "lowerCase", function (str) {
    return str.toLowerCase();
  });

  _defineProperty(this, "upperCase", function (str) {
    return str.toUpperCase();
  });

  _defineProperty(this, "camelCase", function (str) {
    str = _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].replaceAccents(str);
    str = _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].removeNonWord(str).replace(/-/g, " ") //convert all hyphens to spaces
    .replace(/\s[a-z]/g, _this.upperCase) //convert first char of each word to UPPERCASE
    .replace(/\s+/g, "") //remove spaces
    .replace(/^[A-Z]/g, _this.lowerCase); //convert first char to lowercase

    return str;
  });

  _defineProperty(this, "unCamelCase", function (str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
    str = str.toLowerCase(); //add space between camelCase text

    return str;
  });

  _defineProperty(this, "properCase", function (str) {
    return _this.lowerCase(str).replace(/^\w|\s\w/g, _this.upperCase);
  });

  _defineProperty(this, "pascalCase", function (str) {
    return _this.camelCase(str).replace(/^[a-z]/, _this.upperCase);
  });

  _defineProperty(this, "sentenceCase", function (str) {
    // Replace first char of each sentence (new line or after '.\s+') to
    // UPPERCASE
    return _this.lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, _this.upperCase);
  });

  _defineProperty(this, "slugify", function (str, delimeter) {
    if (delimeter == null) {
      delimeter = "-";
    }

    str = _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].replaceAccents(str);
    str = _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].removeNonWord(str);
    str = _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].trim(str) //should come after removeNonWord
    .replace(/ +/g, delimeter) //replace spaces with delimeter
    .toLowerCase();
    return str;
  });

  _defineProperty(this, "hyphenate", function (str) {
    str = _this.unCamelCase(str);
    return _this.slugify(str, "-");
  });

  _defineProperty(this, "unhyphenate", function (str) {
    return str.replace(/(\w)(-)(\w)/g, "$1 $3");
  });

  _defineProperty(this, "underscore", function (str) {
    str = _this.unCamelCase(str);
    return _this.slugify(str, "_");
  });

  _defineProperty(this, "removeNonWord", function (str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF -]/g, "");
  });

  _defineProperty(this, "normalizeLineBreaks", function (str, lineEnd) {
    lineEnd = lineEnd || "\n";
    return str.replace(/\r\n/g, lineEnd) // DOS
    .replace(/\r/g, lineEnd) // Mac
    .replace(/\n/g, lineEnd); // Unix
  });

  _defineProperty(this, "contains", function (str, substring, fromIndex) {
    return str.indexOf(substring, fromIndex) !== -1;
  });

  _defineProperty(this, "crop", function (str, maxChars, append) {
    return _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].truncate(str, maxChars, append, true);
  });

  _defineProperty(this, "escapeRegExp", function (str) {
    var ESCAPE_CHARS = /[\\.+*?^$[\](){}/'#]/g;
    return str.replace(ESCAPE_CHARS, "\\$&");
  });

  _defineProperty(this, "escapeHtml", function (str) {
    str = str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    return str;
  });

  _defineProperty(this, "unescapeHtml", function (str) {
    str = str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
    return str;
  });

  _defineProperty(this, "escapeUnicode", function (str, shouldEscapePrintable) {
    return str.replace(/[\s\S]/g, function (ch) {
      // skip printable ASCII chars if we should not escape them
      if (!shouldEscapePrintable && /[\x20-\x7E]/.test(ch)) {
        return ch;
      } // we use "000" and slice(-4) for brevity, need to pad zeros,
      // unicode escape always have 4 chars after "\u"


      return "\\u" + ("000" + ch.charCodeAt(0).toString(16)).slice(-4);
    });
  });

  _defineProperty(this, "stripHtmlTags", function (str) {
    return str.replace(/<[^>]*>/g, "");
  });

  _defineProperty(this, "removeNonASCII", function (str) {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return str.replace(/[^\x20-\x7E]/g, "");
  });

  _defineProperty(this, "interpolate", function (template, replacements, syntax) {
    var stache = /\{\{(\w+)\}\}/g; //mustache-like

    var replaceFn = function replaceFn(match, prop) {
      return prop in replacements ? replacements[prop] : "";
    };

    return template.replace(syntax || stache, replaceFn);
  });

  _defineProperty(this, "rpad", function (str, minLen, ch) {
    ch = ch || " ";
    return str.length < minLen ? str + _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].repeat(ch, minLen - str.length) : str;
  });

  _defineProperty(this, "lpad", function (str, minLen, ch) {
    ch = ch || " ";
    return str.length < minLen ? _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].repeat(ch, minLen - str.length) + str : str;
  });

  _defineProperty(this, "truncate", function (str, maxChars, append, onlyFullWords) {
    append = append || "...";
    maxChars = onlyFullWords ? maxChars + 1 : maxChars;
    str = _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].trim(str);

    if (str.length <= maxChars) {
      return str;
    }

    str = str.substr(0, maxChars - append.length); //crop at last space or remove trailing whitespace

    str = onlyFullWords ? str.substr(0, str.lastIndexOf(" ")) : _utils_utiles__WEBPACK_IMPORTED_MODULE_0__["default"].trim(str);
    return str + append;
  });

  _defineProperty(this, "abbreviate", function (str) {
    return str.match(/\b([A-Z])/g).join("");
  });
}
/**
 * "Safer" String.toLowerCase()
 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stringles);

/***/ }),

/***/ "./src/lib/utils/utiles.ts":
/*!*********************************!*\
  !*** ./src/lib/utils/utiles.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Utility Service
 */
var Utilities = /*#__PURE__*/function () {
  function Utilities() {
    _classCallCheck(this, Utilities);
  }

  _createClass(Utilities, null, [{
    key: "replaceAccents",
    value:
    /**
     * Replaces all accented chars with regular ones
     */
    function replaceAccents(str) {
      // verifies if the String has accents and replace them
      if (str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, "A").replace(/\xC6/g, "AE").replace(/\xC7/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/\xD0/g, "D").replace(/\xD1/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/\xDD/g, "Y").replace(/\xDE/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/\xE6/g, "ae").replace(/\xE7/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/\xF1/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/\xFE/g, "p").replace(/[\xFD\xFF]/g, "y");
      }

      return str;
    }
    /**
     * Remove non-word chars.
     */

  }, {
    key: "removeNonWord",
    value: function removeNonWord(str) {
      return str.replace(/[^0-9a-zA-Z\xC0-\xFF -]/g, "");
    }
    /**
     * Remove chars from beginning of string.
     */

  }, {
    key: "ltrim",
    value: function ltrim(str, chars) {
      chars = chars || this.WHITE_SPACES;
      var start = 0;
      var len = str.length;
      var charLen = chars.length;
      var found = true;
      var i;
      var c;

      while (found && start < len) {
        found = false;
        i = -1;
        c = str.charAt(start);

        while (++i < charLen) {
          if (c === chars[i]) {
            found = true;
            start++;
            break;
          }
        }
      }

      return start >= len ? "" : str.substr(start, len);
    }
    /**
     * Remove chars from end of string.
     */

  }, {
    key: "rtrim",
    value: function rtrim(str, chars) {
      chars = chars || this.WHITE_SPACES;
      var end = str.length - 1;
      var charLen = chars.length;
      var found = true;
      var i;
      var c;

      while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen) {
          if (c === chars[i]) {
            found = true;
            end--;
            break;
          }
        }
      }

      return end >= 0 ? str.substring(0, end + 1) : "";
    }
    /**
     * Remove white-spaces from beginning and end of string.
     */

  }, {
    key: "trim",
    value: function trim(str, chars) {
      chars = chars || this.WHITE_SPACES;
      return this.ltrim(this.rtrim(str, chars), chars);
    }
    /**
     * Limit number of chars.
     */

  }, {
    key: "truncate",
    value: function truncate(str, maxChars, append, onlyFullWords) {
      append = append || "...";
      maxChars = onlyFullWords ? maxChars + 1 : maxChars;
      str = this.trim(str);

      if (str.length <= maxChars) {
        return str;
      }

      str = str.substr(0, maxChars - append.length); //crop at last space or remove trailing whitespace

      str = onlyFullWords ? str.substr(0, str.lastIndexOf(" ")) : this.trim(str);
      return str + append;
    }
    /**
     * Repeat string n times
     */

  }, {
    key: "repeat",
    value: function repeat(str, n) {
      return new Array(n + 1).join(str);
    }
  }]);

  return Utilities;
}();

_defineProperty(Utilities, "WHITE_SPACES", [" ", "\n", "\r", "\t", "\f", "\v", "\xA0", "\u1680", "\u180E", "\u2000", "\u2001", "\u2002", "\u2003", "\u2004", "\u2005", "\u2006", "\u2007", "\u2008", "\u2009", "\u200A", "\u2028", "\u2029", "\u202F", "\u205F", "\u3000"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utilities);

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/demo/index.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./src/lib/index.ts");

var stringles = new _lib__WEBPACK_IMPORTED_MODULE_0__["default"]();
var demo1 = stringles.upperCase("Hello World");
var demo2 = stringles.lowerCase("Hello World");
var demo3 = stringles.camelCase("hello world");
var demo4 = stringles.unCamelCase("helloWorld");
var demo5 = stringles.properCase("hello world");
var demo6 = stringles.pascalCase("hello world see you later");
var demo7 = stringles.sentenceCase("hello world see you later. maybe tomorrow");
console.log(demo1);
console.log(demo2);
console.log(demo3);
console.log(demo4);
console.log(demo5);
console.log(demo6);
console.log(demo7);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map