webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/Users/mts/Documents/Full Stack/React/Pluralsight/React-Hooks/hello-next/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var InputElement = function InputElement() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      inputText = _useState[0],
      setInputText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      historyList = _useState2[0],
      setHistoryList = _useState2[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("input", {
    name: "email",
    onChange: function onChange(e) {
      setInputText(e.target.value);
      setHistoryList([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(historyList), [e.target.value]));
    },
    placeholder: "hi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), " ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), inputText);
};

/* harmony default export */ __webpack_exports__["default"] = (InputElement);

/***/ })

})
//# sourceMappingURL=index.js.3e341e21ad43102b2789.hot-update.js.map