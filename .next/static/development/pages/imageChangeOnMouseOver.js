(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/imageChangeOnMouseOver.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fmts%2FDocuments%2FFull%20Stack%2FReact%2FPluralsight%2FReact-Hooks%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js&hotRouterUpdates=true!./":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fmts%2FDocuments%2FFull%20Stack%2FReact%2FPluralsight%2FReact-Hooks%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js&hotRouterUpdates=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/imageChangeOnMouseOver",
      function () {
        var mod = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js");
        if (true) {
          module.hot.accept(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js", function () {
            if (!next.router.components["/imageChangeOnMouseOver"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/imageChangeOnMouseOver.js */ "./pages/imageChangeOnMouseOver.js");
            next.router.update("/imageChangeOnMouseOver", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/imageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/imageChangeOnMouseOver.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");
var _this = undefined,
    _jsxFileName = "/Users/mts/Documents/Full Stack/React/Pluralsight/React-Hooks/hello-next/pages/imageChangeOnMouseOver.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChangeOnMouseOver = function ImageChangeOnMouseOver() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    secondaryImg: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), "\xA0", __jsx(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
    secondaryImg: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/mts/Documents/Full Stack/React/Pluralsight/React-Hooks/hello-next/src/ImageToggleOnMouseOver.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageToggleOnMouseOver = function ImageToggleOnMouseOver(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    onMouseOver: function onMouseOver() {
      console.log(imageRef);
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ }),

/***/ 2:
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fmts%2FDocuments%2FFull%20Stack%2FReact%2FPluralsight%2FReact-Hooks%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js&hotRouterUpdates=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fmts%2FDocuments%2FFull%20Stack%2FReact%2FPluralsight%2FReact-Hooks%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FimageChangeOnMouseOver&absolutePagePath=%2FUsers%2Fmts%2FDocuments%2FFull%20Stack%2FReact%2FPluralsight%2FReact-Hooks%2Fhello-next%2Fpages%2FimageChangeOnMouseOver.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=imageChangeOnMouseOver.js.map