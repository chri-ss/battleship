/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n}\n.header .title {\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: 3rem;\n}\n.header .start-game {\n  width: 10rem;\n  border: none;\n  border-radius: 10px;\n}\n\n.ship-area {\n  background-color: #749395;\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n}\n.board-area .board-title {\n  grid-row: 1/2;\n  align-self: end;\n  font-size: 32px;\n  font-weight: 700;\n}\n.board-area .new-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 80%;\n  aspect-ratio: 1/1;\n  grid-row: 2/3;\n}\n.board-area .grid-tile {\n  height: 100%;\n  width: 100%;\n  border: 2px solid #324452;\n  background-size: cover;\n}\n.board-area .shadow {\n  background: rgb(50, 68, 82) !important;\n}\n.board-area .shadow-red {\n  background: rgb(204, 56, 56) !important;\n}\n.board-area .message {\n  position: absolute;\n  z-index: 999;\n}\n\n.modal {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 50%;\n  right: 50%;\n  background: lime;\n  padding: 3rem;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,YAAA;EACA,sBAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,+BAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,WAAA;AACF;AACE;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;AACJ;AAEE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AAAJ;;AAIA;EACE,yBAAA;AADF;;AAIA;EACE,aAAA;EACA,8BAAA;EACA,4BAAA;EACA,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gCAAA;AADF;AAGE;EACE,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AADJ;AAIE;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EAEA,WAAA;EACA,iBAAA;EACA,aAAA;AAHJ;AAME;EACE,YAAA;EACA,WAAA;EACA,yBAAA;EACA,sBAAA;AAJJ;AAOE;EACE,sCAAA;AALJ;AAQE;EACE,uCAAA;AANJ;AASE;EACE,kBAAA;EACA,YAAA;AAPJ;;AAWA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,QAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;AARF","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n\n  .title {\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: 3rem;\n  }\n\n  .start-game {\n    width: 10rem;\n    border: none;\n    border-radius: 10px;\n  }\n}\n\n.ship-area {\n  background-color: #749395;\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n\n  .board-title {\n    grid-row: 1/2;\n    align-self: end;\n    font-size: 32px;\n    font-weight: 700;\n  }\n\n  .new-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    // border: 1px solid #324452;\n    height: 80%;\n    aspect-ratio: 1/1;\n    grid-row: 2/3;\n  }\n\n  .grid-tile {\n    height: 100%;\n    width: 100%;\n    border: 2px solid #324452;\n    background-size: cover;\n  }\n\n  .shadow {\n    background: rgba(50, 68, 82, 1) !important;\n  }\n\n  .shadow-red {\n    background: rgb(204, 56, 56, 1) !important;\n  }\n\n  .message {\n    position: absolute;\n    z-index: 999;\n  }\n}\n\n.modal {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 50%;\n  right: 50%;\n  background: lime;\n  padding: 3rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBoard": () => (/* binding */ clearBoard),
/* harmony export */   "clearModal": () => (/* binding */ clearModal),
/* harmony export */   "colorHit": () => (/* binding */ colorHit),
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "makeBoard": () => (/* binding */ makeBoard),
/* harmony export */   "makeUI": () => (/* binding */ makeUI),
/* harmony export */   "orientation": () => (/* binding */ orientation),
/* harmony export */   "removeResidualRed": () => (/* binding */ removeResidualRed),
/* harmony export */   "shipPlaceHover": () => (/* binding */ shipPlaceHover),
/* harmony export */   "toggleShipShadow": () => (/* binding */ toggleShipShadow),
/* harmony export */   "updateBoard": () => (/* binding */ updateBoard)
/* harmony export */ });
/* harmony import */ var _images_tile048_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tile048.png */ "./src/images/tile048.png");


const content = document.getElementById("content");
const boardArea = document.createElement("div");
const modal = document.createElement("div");

const orientation = {
  current: "horizontal",
  previous: "vertical",
  swap() {
    const temp = this.current;
    this.current = this.previous;
    this.previous = temp;
  },
};
let origin;
let currentShip;

const makeHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Battleship";
  const startGame = document.createElement("button");
  startGame.classList.add("start-game");
  startGame.textContent = "Start Game";
  header.appendChild(title);
  header.appendChild(startGame);
  content.appendChild(header);
};

const makeShipArea = () => {
  const shipArea = document.createElement("div");
  shipArea.classList.add("ship-area");
  const shipAreaOne = document.createElement("div");
  shipAreaOne.classList.add("ship-area-one");
  const shipAreaTwo = document.createElement("div");
  shipAreaTwo.classList.add("ship-area-two");
  shipArea.appendChild(shipAreaOne);
  shipArea.appendChild(shipAreaTwo);
  content.appendChild(shipArea);
};

const makeBoardTitle = (plyr) => {
  const boardTitle = document.createElement("div");
  boardTitle.classList.add("board-title");
  if (plyr.getComp() === true) {
    boardTitle.textContent = "Computer's Board";
  } else {
    boardTitle.textContent = "Your Board";
  }
  boardArea.appendChild(boardTitle);
};

const makeBoard = (plyr) => {
  makeBoardTitle(plyr);
  const newBoard = document.createElement("div");
  newBoard.classList.add("new-board", `${plyr.getComp()}`);
  Object.entries(plyr.brd.board).forEach((entry) => {
    let column = 1;
    entry[1].forEach((i) => {
      const gridTile = document.createElement("div");
      gridTile.classList.add("grid-tile");
      gridTile.setAttribute(`${plyr.getComp()}data-coords`, entry[0] + column);
      column++;
      newBoard.appendChild(gridTile);
      gridTile.style.backgroundImage = `url(${_images_tile048_png__WEBPACK_IMPORTED_MODULE_0__})`;
    });
  });
  boardArea.appendChild(newBoard);
};

const updateBoard = (plyr) => {
  Object.entries(plyr.brd.board).forEach((entry) => {
    let column = 1;
    entry[1].forEach((i) => {
      if (i === "o") {
        const gridTile = document.querySelector(
          `[${plyr.getComp()}data-coords="${entry[0] + column}"]`
        );
        gridTile.style.background = "black";
      }
      column++;
    });
  });
};

const makeBoardArea = () => {
  boardArea.classList.add("board-area");
  content.appendChild(boardArea);
};

const clearBoard = () => {
  while (boardArea.firstChild) {
    boardArea.removeChild(boardArea.lastChild);
  }
};

const clearModal = () => {
  content.removeChild(modal);
};

const colorHit = (gridTile, plyr, coords) => {
  console.log(coords.slice(1));
  if (plyr.brd.board[coords[0]][coords.slice(1) - 1] === "x") {
    gridTile.style.background = "red";
  } else {
    gridTile.style.background = "blue";
  }
};

const makeResetButton = () => {
  const resetButton = document.createElement("button");
  resetButton.classList.add("reset-button");
  resetButton.textContent = "Play Again?";
  modal.appendChild(resetButton);
};

const displayWinner = (otherPlyr) => {
  modal.classList.add("modal");
  if (otherPlyr) modal.textContent = `${otherPlyr.name} wins!`;
  content.appendChild(modal);
  makeResetButton();
};

const toggleShipShadow = (o, action, CSSclass) => {
  try {
    const column = origin.getAttribute("falsedata-coords").slice(1);
    const row = origin.getAttribute("falsedata-coords")[0];
    if (o === "horizontal") {
      for (let i = column; i < parseInt(column) + currentShip.length; ++i) {
        const divToMark = document.querySelector(
          `[falsedata-coords="${row + i}"]`
        );
        if (action === "add") {
          divToMark.classList.add(CSSclass);
        } else if (action === "remove") {
          divToMark.classList.remove(CSSclass);
        }
      }
    } else if (o === "vertical") {
      for (
        let i = row.charCodeAt(0);
        i < row.charCodeAt(0) + currentShip.length;
        ++i
      ) {
        const divToMark = document.querySelector(
          `[falsedata-coords="${String.fromCharCode(i) + column}"]`
        );
        if (action === "add") {
          divToMark.classList.add(CSSclass);
        } else if (action === "remove") {
          divToMark.classList.remove(CSSclass);
        }
      }
    }
  } catch {
    return false;
  }
};

const orientationHandler = (e) => {
  if (e.code === "KeyT") {
    toggleShipShadow(orientation.current, "remove", "shadow");
    orientation.swap();
    toggleShipShadow(orientation.current, "add", "shadow");
  }
};

const orientationListener = () => {
  document.addEventListener("keydown", orientationHandler);
};

const shipPlaceHover = (ships) => {
  let counter = 0;
  boardArea.addEventListener("mouseover", (e) => {
    if (e.target.hasAttribute("falsedata-coords")) {
      if (ships[counter].placed === true) {
        counter++;
      }
      origin = e.target;
      currentShip = ships[counter];
      toggleShipShadow(orientation.current, "add", "shadow");
    }
  });
  boardArea.addEventListener("mouseout", (e) => {
    if (e.target.hasAttribute("falsedata-coords")) {
      toggleShipShadow(orientation.current, "remove", "shadow");
    }
  });
  orientationListener();
};

const removeResidualRed = () => {
  const allTiles = document.querySelectorAll("[falsedata-coords]");
  allTiles.forEach((tl) => {
    if (tl.classList[1] === "shadow-red") {
      tl.classList.remove("shadow-red");
    }
  });
};

const makeUI = () => {
  makeHeader();
  makeBoardArea();
  makeShipArea();
};




/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newGameListener": () => (/* binding */ newGameListener),
/* harmony export */   "orientation": () => (/* reexport safe */ _DOM__WEBPACK_IMPORTED_MODULE_1__.orientation)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships */ "./src/ships.js");




const placeShipListener = (ships, plyr, otherPlyr) => {
  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.shipPlaceHover)(ships, _DOM__WEBPACK_IMPORTED_MODULE_1__.orientation);
  const boardArea = document.querySelector(".board-area");
  let counter = 0;
  boardArea.addEventListener("click", (e) => {
    try {
      if (e.target.hasAttribute("falsedata-coords") && counter < 5) {
        let coords = e.target.getAttribute("falsedata-coords");
        coords = [coords[0], coords.slice(1)];
        plyr.brd.placeShip(
          ships[counter],
          _DOM__WEBPACK_IMPORTED_MODULE_1__.orientation.current,
          coords[0],
          coords[1]
        );
        ships[counter].placed = true;
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(plyr);
        counter++;
      }
      if (counter >= 5) {
        addAttackListener(plyr, otherPlyr);
      }
    } catch {
      (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.toggleShipShadow)(_DOM__WEBPACK_IMPORTED_MODULE_1__.orientation.current, "add", "shadow-red");
      setTimeout(
        _DOM__WEBPACK_IMPORTED_MODULE_1__.toggleShipShadow,
        100,
        _DOM__WEBPACK_IMPORTED_MODULE_1__.orientation.current,
        "remove",
        "shadow-red"
      );
      setTimeout(_DOM__WEBPACK_IMPORTED_MODULE_1__.removeResidualRed, 100);
    }
  });
};

const resetGameListener = () => {
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearBoard)();
    initializeGame();
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearModal)();
    removeAttackListener();
  });
};

const testForWinner = (plyr, otherPlyr) => {
  if (plyr.brd.allShipsSunk()) {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayWinner)(otherPlyr);
    resetGameListener();
  }
};

function attackListener(e, p1, p2) {
  const coordsToAttack = e.target.getAttribute("truedata-coords");
  if (
    p1.getTurn() &&
    e.target.hasAttribute("truedata-coords") &&
    p1.checkFiredOnLocations(coordsToAttack[0], coordsToAttack.slice(1)) ===
      false
  ) {
    p1.attackBoard(p2, coordsToAttack[0], coordsToAttack.slice(1));
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.colorHit)(e.target, p2, coordsToAttack);
    testForWinner(p2, p1);
    p2.computerAttack(p1);

    console.log(p1, p2, coordsToAttack[0], coordsToAttack.slice(1));
    testForWinner(p1, p2);
  }
}

const addAttackListener = (p1, p2) => {
  const boardArea = document.querySelector(".board-area");
  boardArea.addEventListener("click", (e) => attackListener(e, p1, p2));
};

const removeAttackListener = () => {
  const boardArea = document.querySelector(".board-area");
  boardArea.removeEventListener("click", attackListener);
};

const populateBoard = (plyr, otherPlyr) => {
  const carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(5);
  const battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(4);
  const cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3);
  const submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3);
  const destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(2);
  const ships = [carrier, battleship, cruiser, submarine, destroyer];
  if (plyr.name === "p1") {
    placeShipListener(ships, plyr, otherPlyr);
  } else {
    ships.forEach((shipp) => {
      plyr.computerShipPlace(shipp);
    });
  }
};

const runGame = (p1, p2) => {
  populateBoard(p1, p2);
  populateBoard(p2, p1);
};

const initializeGame = () => {
  const newGameButton = document.querySelector(".start-game");
  const p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  p1.name = "p1";
  p2.name = "p2";
  p1.setTurn(true);
  p2.setComp(true);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.makeBoard)(p1);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.makeBoard)(p2);
  newGameButton.disabled = true;
  runGame(p1, p2);
};

const newGameListener = () => {
  const newGameButton = document.querySelector(".start-game");
  newGameButton.addEventListener("click", initializeGame);
};




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


/* eslint-disable no-plusplus */
const gameboard = () => {
  const makeBoard = () => {
    const brd = {};
    for (let i = 0; i < 10; ++i) {
      brd[String.fromCharCode(i + 65)] = [];
      for (let j = 0; j < 10; ++j) {
        brd[String.fromCharCode(i + 65)].push("");
      }
    }
    return brd;
  };

  const board = makeBoard();

  const ships = [];

  const checkForInvalidSpacesHorizontal = (shipType, startRow, startColumn) => {
    for (let i = startColumn - 1; i < startColumn - 1 + shipType.length; ++i) {
      if (board[startRow][i] === "o" || i >= 10) {
        throw new Error("Ship out of bounds");
      }
    }
  };

  const checkForInvalidSpacesVertical = (shipType, startRow, startColumn) => {
    for (let i = 0; i < shipType.length; ++i) {
      if (
        board[String.fromCharCode(startRow.charCodeAt(0) + i)][
          startColumn - 1
        ] === "o" ||
        startRow.charCodeAt(0) + i > 74
      ) {
        throw new Error("Ship out of bounds");
      }
    }
  };

  const placeHorizontal = (shipType, startRow, startColumn) => {
    if (!ships.includes(shipType)) {
      ships.push(shipType);
    }
    shipType.placementArray = [];
    checkForInvalidSpacesHorizontal(shipType, startRow, startColumn);
    for (let i = startColumn - 1; i < startColumn - 1 + shipType.length; ++i) {
      if (i >= 0 && i < 10) {
        board[startRow][i] = shipType.hitArray[i - startColumn + 1];
        shipType.placementArray.push([startRow, i]);
      }
    }
  };

  const placeVertical = (shipType, startRow, startColumn) => {
    if (!ships.includes(shipType)) {
      ships.push(shipType);
    }
    shipType.placementArray = [];
    checkForInvalidSpacesVertical(shipType, startRow, startColumn);
    for (let i = 0; i < shipType.length; ++i) {
      if (
        startRow.charCodeAt(0) + i >= 65 &&
        startRow.charCodeAt(0) + i <= 74
      ) {
        board[String.fromCharCode(startRow.charCodeAt(0) + i)][
          startColumn - 1
        ] = shipType.hitArray[i];
        shipType.placementArray.push([
          String.fromCharCode(startRow.charCodeAt(0) + i),
          startColumn - 1,
        ]);
      }
    }
  };

  const placeShip = (shipType, direction, startRow, startColumn) => {
    if (direction === "horizontal") {
      placeHorizontal(shipType, startRow, startColumn);
    } else if (direction === "vertical") {
      placeVertical(shipType, startRow, startColumn);
    }
    return board;
  };

  const receiveAttack = (row, column) => {
    if (board[row][column - 1] === "o") {
      board[row][column - 1] = "x";
      ships.forEach((shipp) => {
        shipp.placementArray.forEach((coords) => {
          if (coords[0] === row && coords[1] === column - 1) {
            shipp.hit(shipp.placementArray.indexOf(coords));
          }
        });
      });
      return true;
    }
    if (board[row][column - 1] === "x") {
      return false;
    }
    board[row][column - 1] = "m";
    return false;
  };

  const allShipsSunk = () => {
    const sunkArray = [];
    ships.forEach((shipp) => {
      sunkArray.push(shipp.isSunk());
    });
    const equalsTrue = (curr) => curr === true;

    return sunkArray.every(equalsTrue);
  };

  return { board, placeShip, receiveAttack, ships, allShipsSunk };
};




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



const player = () => {
  let turn = false;
  let computer = false;
  const brd = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.gameboard)();
  const firedOnLocations = [];

  const getTurn = () => turn;
  const setTurn = (value) => (turn = value);

  const getComp = () => computer;
  const setComp = (value) => (computer = value);

  const getRandomColumn = () => {
    const min = 1;
    const max = 11;

    const column = Math.floor(Math.random() * (max - min) + min);
    return column;
  };

  const getRandomRow = () => {
    const min = 65; // "A"
    const max = 75; // "J"
    const row = String.fromCharCode(
      Math.floor(Math.random() * (max - min) + min)
    );
    return row;
  };

  const getRandomOrientation = () => {
    let orientations = ["horizontal", "vertical"];
    return orientations[Math.floor(Math.random() * orientations.length)];
  };

  const checkFiredOnLocations = (row, column) => {
    if (
      JSON.stringify(firedOnLocations).includes(JSON.stringify([row, column]))
    ) {
      return true;
    }
    return false;
  };

  const attackBoard = (plyr, row, column) => {
    if (turn) {
      plyr.brd.receiveAttack(row, column);
      firedOnLocations.push([row, column]);
      setTurn(false);
      plyr.setTurn(true);
    }
    return firedOnLocations;
  };

  const computerAttack = (plyr) => {
    const row = getRandomRow();
    const column = getRandomColumn();
    if (computer && checkFiredOnLocations(row, column) === false) {
      attackBoard(plyr, row, column);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.colorHit)(
        document.querySelector(`[falsedata-coords=${row + column}]`),
        plyr,
        `${row + column}`
      );
    } else {
      computerAttack(plyr);
    }
    return false;
  };

  const computerShipPlace = (ship) => {
    try {
      brd.placeShip(
        ship,
        getRandomOrientation(),
        getRandomRow(),
        getRandomColumn()
      );
    } catch {
      computerShipPlace(ship);
    } finally {
      console.log(brd);
    }
  };

  return {
    getTurn,
    setTurn,
    getComp,
    setComp,
    firedOnLocations,
    brd,
    attackBoard,
    computerAttack,
    checkFiredOnLocations,
    computerShipPlace,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
const ship = (length) => {
  const hitArray = [];
  for (let i = 0; i < length; ++i) {
    hitArray[i] = "o";
  }

  const hit = (num) => {
    hitArray[num] = "x";
    return hitArray;
  };

  const isSunk = () => {
    let sunk = true;
    // eslint-disable-next-line no-unreachable-loop
    for (let i = 0; i < hitArray.length; ++i) {
      if (hitArray[i] !== "x") {
        sunk = false;
      }
    }
    return sunk;
  };

  return { length, hitArray, hit, isSunk };
};




/***/ }),

/***/ "./src/images/tile048.png":
/*!********************************!*\
  !*** ./src/images/tile048.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c7706300f72b3f25636.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");






(0,_DOM__WEBPACK_IMPORTED_MODULE_3__.makeUI)();
(0,_game__WEBPACK_IMPORTED_MODULE_2__.newGameListener)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyR3RCO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ0M7QUFDbUI7O0FBRVY7O0FBRS9CLDRDQUFNO0FBQ04sc0RBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyIDVmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ0NTI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmhlYWRlciAudGl0bGUge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAzcmVtO1xcbn1cXG4uaGVhZGVyIC5zdGFydC1nYW1lIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zaGlwLWFyZWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0OTM5NTtcXG59XFxuXFxuLmJvYXJkLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzI0NDUyO1xcbn1cXG4uYm9hcmQtYXJlYSAuYm9hcmQtdGl0bGUge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5ib2FyZC1hcmVhIC5uZXctYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuLmJvYXJkLWFyZWEgLmdyaWQtdGlsZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ0NTI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uYm9hcmQtYXJlYSAuc2hhZG93IHtcXG4gIGJhY2tncm91bmQ6IHJnYig1MCwgNjgsIDgyKSAhaW1wb3J0YW50O1xcbn1cXG4uYm9hcmQtYXJlYSAuc2hhZG93LXJlZCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCA1NiwgNTYpICFpbXBvcnRhbnQ7XFxufVxcbi5ib2FyZC1hcmVhIC5tZXNzYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiA1MCU7XFxuICByaWdodDogNTAlO1xcbiAgYmFja2dyb3VuZDogbGltZTtcXG4gIHBhZGRpbmc6IDNyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFJRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9FO0VBQ0Usc0NBQUE7QUFMSjtBQVFFO0VBQ0UsdUNBQUE7QUFOSjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBUEo7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBUkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyIDVmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ0NTI7XFxuICBjb2xvcjogI2ZmZjtcXG5cXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNyZW07XFxuICB9XFxuXFxuICAuc3RhcnQtZ2FtZSB7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG4uc2hpcC1hcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDkzOTU7XFxufVxcblxcbi5ib2FyZC1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmNjMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMyNDQ1MjtcXG5cXG4gIC5ib2FyZC10aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcblxcbiAgLm5ldy1ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzMyNDQ1MjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgfVxcblxcbiAgLmdyaWQtdGlsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ0NTI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB9XFxuXFxuICAuc2hhZG93IHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MCwgNjgsIDgyLCAxKSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLnNoYWRvdy1yZWQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCA1NiwgNTYsIDEpICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAubWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiA1MCU7XFxuICBiYWNrZ3JvdW5kOiBsaW1lO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdGlsZSBmcm9tIFwiLi9pbWFnZXMvdGlsZTA0OC5wbmdcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGJvYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0ge1xuICBjdXJyZW50OiBcImhvcml6b250YWxcIixcbiAgcHJldmlvdXM6IFwidmVydGljYWxcIixcbiAgc3dhcCgpIHtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgdGhpcy5wcmV2aW91cyA9IHRlbXA7XG4gIH0sXG59O1xubGV0IG9yaWdpbjtcbmxldCBjdXJyZW50U2hpcDtcblxuY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWVcIik7XG4gIHN0YXJ0R2FtZS50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuY29uc3QgbWFrZVNoaXBBcmVhID0gKCkgPT4ge1xuICBjb25zdCBzaGlwQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBBcmVhLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFcIik7XG4gIGNvbnN0IHNoaXBBcmVhT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hpcEFyZWFPbmUuY2xhc3NMaXN0LmFkZChcInNoaXAtYXJlYS1vbmVcIik7XG4gIGNvbnN0IHNoaXBBcmVhVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hpcEFyZWFUd28uY2xhc3NMaXN0LmFkZChcInNoaXAtYXJlYS10d29cIik7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKHNoaXBBcmVhT25lKTtcbiAgc2hpcEFyZWEuYXBwZW5kQ2hpbGQoc2hpcEFyZWFUd28pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHNoaXBBcmVhKTtcbn07XG5cbmNvbnN0IG1ha2VCb2FyZFRpdGxlID0gKHBseXIpID0+IHtcbiAgY29uc3QgYm9hcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImJvYXJkLXRpdGxlXCIpO1xuICBpZiAocGx5ci5nZXRDb21wKCkgPT09IHRydWUpIHtcbiAgICBib2FyZFRpdGxlLnRleHRDb250ZW50ID0gXCJDb21wdXRlcidzIEJvYXJkXCI7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IFwiWW91ciBCb2FyZFwiO1xuICB9XG4gIGJvYXJkQXJlYS5hcHBlbmRDaGlsZChib2FyZFRpdGxlKTtcbn07XG5cbmNvbnN0IG1ha2VCb2FyZCA9IChwbHlyKSA9PiB7XG4gIG1ha2VCb2FyZFRpdGxlKHBseXIpO1xuICBjb25zdCBuZXdCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0JvYXJkLmNsYXNzTGlzdC5hZGQoXCJuZXctYm9hcmRcIiwgYCR7cGx5ci5nZXRDb21wKCl9YCk7XG4gIE9iamVjdC5lbnRyaWVzKHBseXIuYnJkLmJvYXJkKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGxldCBjb2x1bW4gPSAxO1xuICAgIGVudHJ5WzFdLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGNvbnN0IGdyaWRUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRUaWxlLmNsYXNzTGlzdC5hZGQoXCJncmlkLXRpbGVcIik7XG4gICAgICBncmlkVGlsZS5zZXRBdHRyaWJ1dGUoYCR7cGx5ci5nZXRDb21wKCl9ZGF0YS1jb29yZHNgLCBlbnRyeVswXSArIGNvbHVtbik7XG4gICAgICBjb2x1bW4rKztcbiAgICAgIG5ld0JvYXJkLmFwcGVuZENoaWxkKGdyaWRUaWxlKTtcbiAgICAgIGdyaWRUaWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aWxlfSlgO1xuICAgIH0pO1xuICB9KTtcbiAgYm9hcmRBcmVhLmFwcGVuZENoaWxkKG5ld0JvYXJkKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKHBseXIpID0+IHtcbiAgT2JqZWN0LmVudHJpZXMocGx5ci5icmQuYm9hcmQpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgbGV0IGNvbHVtbiA9IDE7XG4gICAgZW50cnlbMV0uZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IFwib1wiKSB7XG4gICAgICAgIGNvbnN0IGdyaWRUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgWyR7cGx5ci5nZXRDb21wKCl9ZGF0YS1jb29yZHM9XCIke2VudHJ5WzBdICsgY29sdW1ufVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICAgIH1cbiAgICAgIGNvbHVtbisrO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IG1ha2VCb2FyZEFyZWEgPSAoKSA9PiB7XG4gIGJvYXJkQXJlYS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtYXJlYVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChib2FyZEFyZWEpO1xufTtcblxuY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgd2hpbGUgKGJvYXJkQXJlYS5maXJzdENoaWxkKSB7XG4gICAgYm9hcmRBcmVhLnJlbW92ZUNoaWxkKGJvYXJkQXJlYS5sYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhck1vZGFsID0gKCkgPT4ge1xuICBjb250ZW50LnJlbW92ZUNoaWxkKG1vZGFsKTtcbn07XG5cbmNvbnN0IGNvbG9ySGl0ID0gKGdyaWRUaWxlLCBwbHlyLCBjb29yZHMpID0+IHtcbiAgY29uc29sZS5sb2coY29vcmRzLnNsaWNlKDEpKTtcbiAgaWYgKHBseXIuYnJkLmJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzLnNsaWNlKDEpIC0gMV0gPT09IFwieFwiKSB7XG4gICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gIH0gZWxzZSB7XG4gICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmx1ZVwiO1xuICB9XG59O1xuXG5jb25zdCBtYWtlUmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2V0LWJ1dHRvblwiKTtcbiAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW4/XCI7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXaW5uZXIgPSAob3RoZXJQbHlyKSA9PiB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgaWYgKG90aGVyUGx5cikgbW9kYWwudGV4dENvbnRlbnQgPSBgJHtvdGhlclBseXIubmFtZX0gd2lucyFgO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgbWFrZVJlc2V0QnV0dG9uKCk7XG59O1xuXG5jb25zdCB0b2dnbGVTaGlwU2hhZG93ID0gKG8sIGFjdGlvbiwgQ1NTY2xhc3MpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb2x1bW4gPSBvcmlnaW4uZ2V0QXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKS5zbGljZSgxKTtcbiAgICBjb25zdCByb3cgPSBvcmlnaW4uZ2V0QXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKVswXTtcbiAgICBpZiAobyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPCBwYXJzZUludChjb2x1bW4pICsgY3VycmVudFNoaXAubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgZGl2VG9NYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2ZhbHNlZGF0YS1jb29yZHM9XCIke3JvdyArIGl9XCJdYFxuICAgICAgICApO1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImFkZFwiKSB7XG4gICAgICAgICAgZGl2VG9NYXJrLmNsYXNzTGlzdC5hZGQoQ1NTY2xhc3MpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgICAgIGRpdlRvTWFyay5jbGFzc0xpc3QucmVtb3ZlKENTU2NsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IHJvdy5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpIDwgcm93LmNoYXJDb2RlQXQoMCkgKyBjdXJyZW50U2hpcC5sZW5ndGg7XG4gICAgICAgICsraVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRpdlRvTWFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtmYWxzZWRhdGEtY29vcmRzPVwiJHtTdHJpbmcuZnJvbUNoYXJDb2RlKGkpICsgY29sdW1ufVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJhZGRcIikge1xuICAgICAgICAgIGRpdlRvTWFyay5jbGFzc0xpc3QuYWRkKENTU2NsYXNzKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgICBkaXZUb01hcmsuY2xhc3NMaXN0LnJlbW92ZShDU1NjbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3Qgb3JpZW50YXRpb25IYW5kbGVyID0gKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gXCJLZXlUXCIpIHtcbiAgICB0b2dnbGVTaGlwU2hhZG93KG9yaWVudGF0aW9uLmN1cnJlbnQsIFwicmVtb3ZlXCIsIFwic2hhZG93XCIpO1xuICAgIG9yaWVudGF0aW9uLnN3YXAoKTtcbiAgICB0b2dnbGVTaGlwU2hhZG93KG9yaWVudGF0aW9uLmN1cnJlbnQsIFwiYWRkXCIsIFwic2hhZG93XCIpO1xuICB9XG59O1xuXG5jb25zdCBvcmllbnRhdGlvbkxpc3RlbmVyID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvcmllbnRhdGlvbkhhbmRsZXIpO1xufTtcblxuY29uc3Qgc2hpcFBsYWNlSG92ZXIgPSAoc2hpcHMpID0+IHtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBib2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJmYWxzZWRhdGEtY29vcmRzXCIpKSB7XG4gICAgICBpZiAoc2hpcHNbY291bnRlcl0ucGxhY2VkID09PSB0cnVlKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH1cbiAgICAgIG9yaWdpbiA9IGUudGFyZ2V0O1xuICAgICAgY3VycmVudFNoaXAgPSBzaGlwc1tjb3VudGVyXTtcbiAgICAgIHRvZ2dsZVNoaXBTaGFkb3cob3JpZW50YXRpb24uY3VycmVudCwgXCJhZGRcIiwgXCJzaGFkb3dcIik7XG4gICAgfVxuICB9KTtcbiAgYm9hcmRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJmYWxzZWRhdGEtY29vcmRzXCIpKSB7XG4gICAgICB0b2dnbGVTaGlwU2hhZG93KG9yaWVudGF0aW9uLmN1cnJlbnQsIFwicmVtb3ZlXCIsIFwic2hhZG93XCIpO1xuICAgIH1cbiAgfSk7XG4gIG9yaWVudGF0aW9uTGlzdGVuZXIoKTtcbn07XG5cbmNvbnN0IHJlbW92ZVJlc2lkdWFsUmVkID0gKCkgPT4ge1xuICBjb25zdCBhbGxUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZmFsc2VkYXRhLWNvb3Jkc11cIik7XG4gIGFsbFRpbGVzLmZvckVhY2goKHRsKSA9PiB7XG4gICAgaWYgKHRsLmNsYXNzTGlzdFsxXSA9PT0gXCJzaGFkb3ctcmVkXCIpIHtcbiAgICAgIHRsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFkb3ctcmVkXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBtYWtlVUkgPSAoKSA9PiB7XG4gIG1ha2VIZWFkZXIoKTtcbiAgbWFrZUJvYXJkQXJlYSgpO1xuICBtYWtlU2hpcEFyZWEoKTtcbn07XG5cbmV4cG9ydCB7XG4gIG1ha2VVSSxcbiAgbWFrZUJvYXJkLFxuICB1cGRhdGVCb2FyZCxcbiAgY2xlYXJCb2FyZCxcbiAgY2xlYXJNb2RhbCxcbiAgY29sb3JIaXQsXG4gIGRpc3BsYXlXaW5uZXIsXG4gIHNoaXBQbGFjZUhvdmVyLFxuICB0b2dnbGVTaGlwU2hhZG93LFxuICBvcmllbnRhdGlvbixcbiAgcmVtb3ZlUmVzaWR1YWxSZWQsXG59O1xuIiwiaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7XG4gIG1ha2VCb2FyZCxcbiAgdXBkYXRlQm9hcmQsXG4gIGNvbG9ySGl0LFxuICBjbGVhckJvYXJkLFxuICBkaXNwbGF5V2lubmVyLFxuICBjbGVhck1vZGFsLFxuICBzaGlwUGxhY2VIb3ZlcixcbiAgdG9nZ2xlU2hpcFNoYWRvdyxcbiAgb3JpZW50YXRpb24sXG4gIHJlbW92ZVJlc2lkdWFsUmVkLFxufSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG5jb25zdCBwbGFjZVNoaXBMaXN0ZW5lciA9IChzaGlwcywgcGx5ciwgb3RoZXJQbHlyKSA9PiB7XG4gIHNoaXBQbGFjZUhvdmVyKHNoaXBzLCBvcmllbnRhdGlvbik7XG4gIGNvbnN0IGJvYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYXJlYVwiKTtcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBib2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJmYWxzZWRhdGEtY29vcmRzXCIpICYmIGNvdW50ZXIgPCA1KSB7XG4gICAgICAgIGxldCBjb29yZHMgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmYWxzZWRhdGEtY29vcmRzXCIpO1xuICAgICAgICBjb29yZHMgPSBbY29vcmRzWzBdLCBjb29yZHMuc2xpY2UoMSldO1xuICAgICAgICBwbHlyLmJyZC5wbGFjZVNoaXAoXG4gICAgICAgICAgc2hpcHNbY291bnRlcl0sXG4gICAgICAgICAgb3JpZW50YXRpb24uY3VycmVudCxcbiAgICAgICAgICBjb29yZHNbMF0sXG4gICAgICAgICAgY29vcmRzWzFdXG4gICAgICAgICk7XG4gICAgICAgIHNoaXBzW2NvdW50ZXJdLnBsYWNlZCA9IHRydWU7XG4gICAgICAgIHVwZGF0ZUJvYXJkKHBseXIpO1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgICBpZiAoY291bnRlciA+PSA1KSB7XG4gICAgICAgIGFkZEF0dGFja0xpc3RlbmVyKHBseXIsIG90aGVyUGx5cik7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICB0b2dnbGVTaGlwU2hhZG93KG9yaWVudGF0aW9uLmN1cnJlbnQsIFwiYWRkXCIsIFwic2hhZG93LXJlZFwiKTtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgIHRvZ2dsZVNoaXBTaGFkb3csXG4gICAgICAgIDEwMCxcbiAgICAgICAgb3JpZW50YXRpb24uY3VycmVudCxcbiAgICAgICAgXCJyZW1vdmVcIixcbiAgICAgICAgXCJzaGFkb3ctcmVkXCJcbiAgICAgICk7XG4gICAgICBzZXRUaW1lb3V0KHJlbW92ZVJlc2lkdWFsUmVkLCAxMDApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZXNldEdhbWVMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ1dHRvblwiKTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckJvYXJkKCk7XG4gICAgaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICBjbGVhck1vZGFsKCk7XG4gICAgcmVtb3ZlQXR0YWNrTGlzdGVuZXIoKTtcbiAgfSk7XG59O1xuXG5jb25zdCB0ZXN0Rm9yV2lubmVyID0gKHBseXIsIG90aGVyUGx5cikgPT4ge1xuICBpZiAocGx5ci5icmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBkaXNwbGF5V2lubmVyKG90aGVyUGx5cik7XG4gICAgcmVzZXRHYW1lTGlzdGVuZXIoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXR0YWNrTGlzdGVuZXIoZSwgcDEsIHAyKSB7XG4gIGNvbnN0IGNvb3Jkc1RvQXR0YWNrID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJ1ZWRhdGEtY29vcmRzXCIpO1xuICBpZiAoXG4gICAgcDEuZ2V0VHVybigpICYmXG4gICAgZS50YXJnZXQuaGFzQXR0cmlidXRlKFwidHJ1ZWRhdGEtY29vcmRzXCIpICYmXG4gICAgcDEuY2hlY2tGaXJlZE9uTG9jYXRpb25zKGNvb3Jkc1RvQXR0YWNrWzBdLCBjb29yZHNUb0F0dGFjay5zbGljZSgxKSkgPT09XG4gICAgICBmYWxzZVxuICApIHtcbiAgICBwMS5hdHRhY2tCb2FyZChwMiwgY29vcmRzVG9BdHRhY2tbMF0sIGNvb3Jkc1RvQXR0YWNrLnNsaWNlKDEpKTtcbiAgICBjb2xvckhpdChlLnRhcmdldCwgcDIsIGNvb3Jkc1RvQXR0YWNrKTtcbiAgICB0ZXN0Rm9yV2lubmVyKHAyLCBwMSk7XG4gICAgcDIuY29tcHV0ZXJBdHRhY2socDEpO1xuXG4gICAgY29uc29sZS5sb2cocDEsIHAyLCBjb29yZHNUb0F0dGFja1swXSwgY29vcmRzVG9BdHRhY2suc2xpY2UoMSkpO1xuICAgIHRlc3RGb3JXaW5uZXIocDEsIHAyKTtcbiAgfVxufVxuXG5jb25zdCBhZGRBdHRhY2tMaXN0ZW5lciA9IChwMSwgcDIpID0+IHtcbiAgY29uc3QgYm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hcmVhXCIpO1xuICBib2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBhdHRhY2tMaXN0ZW5lcihlLCBwMSwgcDIpKTtcbn07XG5cbmNvbnN0IHJlbW92ZUF0dGFja0xpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBib2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFyZWFcIik7XG4gIGJvYXJkQXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrTGlzdGVuZXIpO1xufTtcblxuY29uc3QgcG9wdWxhdGVCb2FyZCA9IChwbHlyLCBvdGhlclBseXIpID0+IHtcbiAgY29uc3QgY2FycmllciA9IHNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwKDQpO1xuICBjb25zdCBjcnVpc2VyID0gc2hpcCgzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgzKTtcbiAgY29uc3QgZGVzdHJveWVyID0gc2hpcCgyKTtcbiAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuICBpZiAocGx5ci5uYW1lID09PSBcInAxXCIpIHtcbiAgICBwbGFjZVNoaXBMaXN0ZW5lcihzaGlwcywgcGx5ciwgb3RoZXJQbHlyKTtcbiAgfSBlbHNlIHtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwcCkgPT4ge1xuICAgICAgcGx5ci5jb21wdXRlclNoaXBQbGFjZShzaGlwcCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHJ1bkdhbWUgPSAocDEsIHAyKSA9PiB7XG4gIHBvcHVsYXRlQm9hcmQocDEsIHAyKTtcbiAgcG9wdWxhdGVCb2FyZChwMiwgcDEpO1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZUdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIik7XG4gIGNvbnN0IHAxID0gcGxheWVyKCk7XG4gIGNvbnN0IHAyID0gcGxheWVyKCk7XG4gIHAxLm5hbWUgPSBcInAxXCI7XG4gIHAyLm5hbWUgPSBcInAyXCI7XG4gIHAxLnNldFR1cm4odHJ1ZSk7XG4gIHAyLnNldENvbXAodHJ1ZSk7XG4gIG1ha2VCb2FyZChwMSk7XG4gIG1ha2VCb2FyZChwMik7XG4gIG5ld0dhbWVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBydW5HYW1lKHAxLCBwMik7XG59O1xuXG5jb25zdCBuZXdHYW1lTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIik7XG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRpYWxpemVHYW1lKTtcbn07XG5cbmV4cG9ydCB7IG5ld0dhbWVMaXN0ZW5lciwgb3JpZW50YXRpb24gfTtcbiIsImltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBtYWtlQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJkID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICBicmRbU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGJyZFtTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSldLnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBicmQ7XG4gIH07XG5cbiAgY29uc3QgYm9hcmQgPSBtYWtlQm9hcmQoKTtcblxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGNoZWNrRm9ySW52YWxpZFNwYWNlc0hvcml6b250YWwgPSAoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSBzdGFydENvbHVtbiAtIDE7IGkgPCBzdGFydENvbHVtbiAtIDEgKyBzaGlwVHlwZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGJvYXJkW3N0YXJ0Um93XVtpXSA9PT0gXCJvXCIgfHwgaSA+PSAxMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIG91dCBvZiBib3VuZHNcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9ySW52YWxpZFNwYWNlc1ZlcnRpY2FsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBUeXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkW1N0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkpXVtcbiAgICAgICAgICBzdGFydENvbHVtbiAtIDFcbiAgICAgICAgXSA9PT0gXCJvXCIgfHxcbiAgICAgICAgc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkgPiA3NFxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VIb3Jpem9udGFsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBpZiAoIXNoaXBzLmluY2x1ZGVzKHNoaXBUeXBlKSkge1xuICAgICAgc2hpcHMucHVzaChzaGlwVHlwZSk7XG4gICAgfVxuICAgIHNoaXBUeXBlLnBsYWNlbWVudEFycmF5ID0gW107XG4gICAgY2hlY2tGb3JJbnZhbGlkU3BhY2VzSG9yaXpvbnRhbChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRDb2x1bW4gLSAxOyBpIDwgc3RhcnRDb2x1bW4gLSAxICsgc2hpcFR5cGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChpID49IDAgJiYgaSA8IDEwKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0Um93XVtpXSA9IHNoaXBUeXBlLmhpdEFycmF5W2kgLSBzdGFydENvbHVtbiArIDFdO1xuICAgICAgICBzaGlwVHlwZS5wbGFjZW1lbnRBcnJheS5wdXNoKFtzdGFydFJvdywgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVZlcnRpY2FsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBpZiAoIXNoaXBzLmluY2x1ZGVzKHNoaXBUeXBlKSkge1xuICAgICAgc2hpcHMucHVzaChzaGlwVHlwZSk7XG4gICAgfVxuICAgIHNoaXBUeXBlLnBsYWNlbWVudEFycmF5ID0gW107XG4gICAgY2hlY2tGb3JJbnZhbGlkU3BhY2VzVmVydGljYWwoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwVHlwZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKFxuICAgICAgICBzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSA+PSA2NSAmJlxuICAgICAgICBzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSA8PSA3NFxuICAgICAgKSB7XG4gICAgICAgIGJvYXJkW1N0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkpXVtcbiAgICAgICAgICBzdGFydENvbHVtbiAtIDFcbiAgICAgICAgXSA9IHNoaXBUeXBlLmhpdEFycmF5W2ldO1xuICAgICAgICBzaGlwVHlwZS5wbGFjZW1lbnRBcnJheS5wdXNoKFtcbiAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0Um93LmNoYXJDb2RlQXQoMCkgKyBpKSxcbiAgICAgICAgICBzdGFydENvbHVtbiAtIDEsXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcFR5cGUsIGRpcmVjdGlvbiwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHBsYWNlSG9yaXpvbnRhbChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBwbGFjZVZlcnRpY2FsKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChyb3csIGNvbHVtbikgPT4ge1xuICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9cIikge1xuICAgICAgYm9hcmRbcm93XVtjb2x1bW4gLSAxXSA9IFwieFwiO1xuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcHApID0+IHtcbiAgICAgICAgc2hpcHAucGxhY2VtZW50QXJyYXkuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICAgICAgaWYgKGNvb3Jkc1swXSA9PT0gcm93ICYmIGNvb3Jkc1sxXSA9PT0gY29sdW1uIC0gMSkge1xuICAgICAgICAgICAgc2hpcHAuaGl0KHNoaXBwLnBsYWNlbWVudEFycmF5LmluZGV4T2YoY29vcmRzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbiAtIDFdID09PSBcInhcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBib2FyZFtyb3ddW2NvbHVtbiAtIDFdID0gXCJtXCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rQXJyYXkgPSBbXTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwcCkgPT4ge1xuICAgICAgc3Vua0FycmF5LnB1c2goc2hpcHAuaXNTdW5rKCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVxdWFsc1RydWUgPSAoY3VycikgPT4gY3VyciA9PT0gdHJ1ZTtcblxuICAgIHJldHVybiBzdW5rQXJyYXkuZXZlcnkoZXF1YWxzVHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYm9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgc2hpcHMsIGFsbFNoaXBzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGNvbG9ySGl0IH0gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgbGV0IGNvbXB1dGVyID0gZmFsc2U7XG4gIGNvbnN0IGJyZCA9IGdhbWVib2FyZCgpO1xuICBjb25zdCBmaXJlZE9uTG9jYXRpb25zID0gW107XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHR1cm47XG4gIGNvbnN0IHNldFR1cm4gPSAodmFsdWUpID0+ICh0dXJuID0gdmFsdWUpO1xuXG4gIGNvbnN0IGdldENvbXAgPSAoKSA9PiBjb21wdXRlcjtcbiAgY29uc3Qgc2V0Q29tcCA9ICh2YWx1ZSkgPT4gKGNvbXB1dGVyID0gdmFsdWUpO1xuXG4gIGNvbnN0IGdldFJhbmRvbUNvbHVtbiA9ICgpID0+IHtcbiAgICBjb25zdCBtaW4gPSAxO1xuICAgIGNvbnN0IG1heCA9IDExO1xuXG4gICAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tUm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pbiA9IDY1OyAvLyBcIkFcIlxuICAgIGNvbnN0IG1heCA9IDc1OyAvLyBcIkpcIlxuICAgIGNvbnN0IHJvdyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbilcbiAgICApO1xuICAgIHJldHVybiByb3c7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IG9yaWVudGF0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICByZXR1cm4gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9ucy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBjaGVja0ZpcmVkT25Mb2NhdGlvbnMgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgICBpZiAoXG4gICAgICBKU09OLnN0cmluZ2lmeShmaXJlZE9uTG9jYXRpb25zKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbcm93LCBjb2x1bW5dKSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hcmQgPSAocGx5ciwgcm93LCBjb2x1bW4pID0+IHtcbiAgICBpZiAodHVybikge1xuICAgICAgcGx5ci5icmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgICBmaXJlZE9uTG9jYXRpb25zLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICBzZXRUdXJuKGZhbHNlKTtcbiAgICAgIHBseXIuc2V0VHVybih0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcmVkT25Mb2NhdGlvbnM7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAocGx5cikgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGdldFJhbmRvbVJvdygpO1xuICAgIGNvbnN0IGNvbHVtbiA9IGdldFJhbmRvbUNvbHVtbigpO1xuICAgIGlmIChjb21wdXRlciAmJiBjaGVja0ZpcmVkT25Mb2NhdGlvbnMocm93LCBjb2x1bW4pID09PSBmYWxzZSkge1xuICAgICAgYXR0YWNrQm9hcmQocGx5ciwgcm93LCBjb2x1bW4pO1xuICAgICAgY29sb3JIaXQoXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtmYWxzZWRhdGEtY29vcmRzPSR7cm93ICsgY29sdW1ufV1gKSxcbiAgICAgICAgcGx5cixcbiAgICAgICAgYCR7cm93ICsgY29sdW1ufWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXB1dGVyQXR0YWNrKHBseXIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJTaGlwUGxhY2UgPSAoc2hpcCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBicmQucGxhY2VTaGlwKFxuICAgICAgICBzaGlwLFxuICAgICAgICBnZXRSYW5kb21PcmllbnRhdGlvbigpLFxuICAgICAgICBnZXRSYW5kb21Sb3coKSxcbiAgICAgICAgZ2V0UmFuZG9tQ29sdW1uKClcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb21wdXRlclNoaXBQbGFjZShzaGlwKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgY29uc29sZS5sb2coYnJkKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUdXJuLFxuICAgIHNldFR1cm4sXG4gICAgZ2V0Q29tcCxcbiAgICBzZXRDb21wLFxuICAgIGZpcmVkT25Mb2NhdGlvbnMsXG4gICAgYnJkLFxuICAgIGF0dGFja0JvYXJkLFxuICAgIGNvbXB1dGVyQXR0YWNrLFxuICAgIGNoZWNrRmlyZWRPbkxvY2F0aW9ucyxcbiAgICBjb21wdXRlclNoaXBQbGFjZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGhpdEFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBoaXRBcnJheVtpXSA9IFwib1wiO1xuICB9XG5cbiAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgIGhpdEFycmF5W251bV0gPSBcInhcIjtcbiAgICByZXR1cm4gaGl0QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5yZWFjaGFibGUtbG9vcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0QXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChoaXRBcnJheVtpXSAhPT0gXCJ4XCIpIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICByZXR1cm4geyBsZW5ndGgsIGhpdEFycmF5LCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgc2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBuZXdHYW1lTGlzdGVuZXIgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmltcG9ydCB7IG1ha2VVSSB9IGZyb20gXCIuL0RPTVwiO1xuXG5tYWtlVUkoKTtcbm5ld0dhbWVMaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9