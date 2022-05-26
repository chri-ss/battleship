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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n}\n.header .title {\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: 3rem;\n}\n.header .start-game {\n  width: 10rem;\n  border: none;\n  border-radius: 10px;\n}\n\n.ship-area {\n  background-color: #749395;\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n}\n.board-area .board-title {\n  grid-row: 1/2;\n  align-self: end;\n  font-size: 32px;\n  font-weight: 700;\n}\n.board-area .new-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: 1px solid #324452;\n  height: 80%;\n  aspect-ratio: 1/1;\n  grid-row: 2/3;\n}\n.board-area .grid-tile {\n  border: 1px solid #324452;\n  background-size: cover;\n}\n.board-area .overlay {\n  height: 100%;\n  width: 100%;\n  background: limegreen;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,YAAA;EACA,sBAAA;AACF;;AAEA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EAEA,+BAAA;AAAF;;AAGA;EACE,aAAA;EAEA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,WAAA;AADF;AAGE;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;AADJ;AAIE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;AAFJ;;AAMA;EAGE,yBAAA;AALF;;AAQA;EACE,aAAA;EACA,8BAAA;EACA,4BAAA;EACA,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gCAAA;AALF;AAOE;EACE,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AALJ;AAQE;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,yBAAA;EACA,WAAA;EACA,iBAAA;EACA,aAAA;AANJ;AASE;EACE,yBAAA;EACA,sBAAA;AAPJ;AAUE;EACE,YAAA;EACA,WAAA;EACA,qBAAA;AARJ","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  // grid-template-columns: 1fr 2fr;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  // grid-column: 1/3;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n\n  .title {\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: 3rem;\n  }\n\n  .start-game {\n    width: 10rem;\n    border: none;\n    border-radius: 10px;\n  }\n}\n\n.ship-area {\n  // display: grid;\n  // grid-template-rows: 1fr 1fr;\n  background-color: #749395;\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n\n  .board-title {\n    grid-row: 1/2;\n    align-self: end;\n    font-size: 32px;\n    font-weight: 700;\n  }\n\n  .new-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid #324452;\n    height: 80%;\n    aspect-ratio: 1/1;\n    grid-row: 2/3;\n  }\n\n  .grid-tile {\n    border: 1px solid #324452;\n    background-size: cover;\n  }\n\n  .overlay {\n    height: 100%;\n    width: 100%;\n    background: limegreen;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "colorHit": () => (/* binding */ colorHit),
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "makeBoard": () => (/* binding */ makeBoard),
/* harmony export */   "makeUI": () => (/* binding */ makeUI),
/* harmony export */   "updateBoard": () => (/* binding */ updateBoard)
/* harmony export */ });
/* harmony import */ var _images_tile048_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tile048.png */ "./src/images/tile048.png");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



const content = document.getElementById("content");
const boardArea = document.createElement("div");

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

const colorHit = (gridTile, plyr, coords) => {
  if (plyr.brd.board[coords[0]][coords[1] - 1] === "x") {
    gridTile.style.background = "red";
  } else {
    gridTile.style.background = "blue";
  }
};

const displayWinner = (otherPlyr) => {
  const modal = document.createElement("div");
  modal.classList.add(".modal");
  if (otherPlyr) modal.textContent = `${otherPlyr.name} wins!`;
  content.appendChild(modal);
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
/* harmony export */   "newGameListener": () => (/* binding */ newGameListener)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships */ "./src/ships.js");




const populateBoard = (plyr) => {
  const carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(5);
  const battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(4);
  const cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3);
  const submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3);
  const destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(2);
  plyr.brd.placeShip(carrier, "horizontal", "A", 2);
  plyr.brd.placeShip(battleship, "vertical", "C", 8);
  plyr.brd.placeShip(cruiser, "vertical", "D", 2);
  plyr.brd.placeShip(submarine, "vertical", "E", 5);
  plyr.brd.placeShip(destroyer, "horizontal", "H", 1);
};

const testForWinner = (plyr, otherPlyr) => {
  if (plyr.brd.allShipsSunk()) {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayWinner)(otherPlyr);
  }
};

const attackListener = (p1, p2) => {
  const boardArea = document.querySelector(".board-area");
  boardArea.addEventListener("click", (e) => {
    if (p1.getTurn() && e.target.hasAttribute("truedata-coords")) {
      const coordsToAttack = e.target.getAttribute("truedata-coords");
      p1.attackBoard(p2, coordsToAttack[0], coordsToAttack[1]);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.colorHit)(e.target, p2, coordsToAttack);
      testForWinner(p2, p1);
    } else if (p2.getTurn() && e.target.hasAttribute("falsedata-coords")) {
      const coordsToAttack = e.target.getAttribute("falsedata-coords");
      p2.attackBoard(p1, coordsToAttack[0], coordsToAttack[1]);
      (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.colorHit)(e.target, p1, coordsToAttack);
      testForWinner(p1, p2);
    }
  });
};

const runGame = (p1, p2) => {
  populateBoard(p1);
  populateBoard(p2);
  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(p1);
  // updateBoard(p2);
  attackListener(p1, p2);
};

const newGameListener = () => {
  const newGameButton = document.querySelector(".start-game");
  newGameButton.addEventListener("click", () => {
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
  });
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
      if (board[startRow][i] === "o" || i > 10) {
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
        startRow.charCodeAt(0) + i >= 74
      ) {
        throw new Error("Ship out of bounds");
      }
    }
  };

  const placeHorizontal = (shipType, startRow, startColumn) => {
    ships.push(shipType);
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
    ships.push(shipType);
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
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ships */ "./src/ships.js");



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

  const checkFiredOnLocations = (row, column) => {
    firedOnLocations.forEach((location) => {
      if (location[0] === row && location[1] === column) {
        return true;
      }
    });
    return false;
  };

  const attackBoard = (plyr, row, column) => {
    if (turn && checkFiredOnLocations(row, column) === false) {
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
    if (computer) {
      attackBoard(plyr, row, column);
      return true;
    }
    return false;
  };

  return {
    getTurn,
    setTurn,
    getComp,
    setComp,
    brd,
    attackBoard,
    computerAttack,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNDO0FBQ21COztBQUVWOztBQUUvQiw0Q0FBTTtBQUNOLHNEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciA1ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NDUyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogM3JlbTtcXG59XFxuLmhlYWRlciAuc3RhcnQtZ2FtZSB7XFxuICB3aWR0aDogMTByZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc2hpcC1hcmVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDkzOTU7XFxufVxcblxcbi5ib2FyZC1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmNjMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMyNDQ1MjtcXG59XFxuLmJvYXJkLWFyZWEgLmJvYXJkLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYm9hcmQtYXJlYSAubmV3LWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMyNDQ1MjtcXG4gIGhlaWdodDogODAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG4uYm9hcmQtYXJlYSAuZ3JpZC10aWxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjQ0NTI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uYm9hcmQtYXJlYSAub3ZlcmxheSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSwrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUVBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUZKOztBQU1BO0VBR0UseUJBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFMRjtBQU9FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQVFFO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFOSjtBQVNFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQVBKO0FBVUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBUkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyIDVmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLy8gZ3JpZC1jb2x1bW46IDEvMztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NDUyO1xcbiAgY29sb3I6ICNmZmY7XFxuXFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcmVtO1xcbiAgfVxcblxcbiAgLnN0YXJ0LWdhbWUge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG59XFxuXFxuLnNoaXAtYXJlYSB7XFxuICAvLyBkaXNwbGF5OiBncmlkO1xcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0OTM5NTtcXG59XFxuXFxuLmJvYXJkLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzI0NDUyO1xcblxcbiAgLmJvYXJkLXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuICAubmV3LWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzI0NDUyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuXFxuICAuZ3JpZC10aWxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMyNDQ1MjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG5cXG4gIC5vdmVybGF5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0aWxlIGZyb20gXCIuL2ltYWdlcy90aWxlMDQ4LnBuZ1wiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGJvYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IG1ha2VIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgY29uc3Qgc3RhcnRHYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3RhcnRHYW1lLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1nYW1lXCIpO1xuICBzdGFydEdhbWUudGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHN0YXJ0R2FtZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmNvbnN0IG1ha2VTaGlwQXJlYSA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaGlwQXJlYS5jbGFzc0xpc3QuYWRkKFwic2hpcC1hcmVhXCIpO1xuICBjb25zdCBzaGlwQXJlYU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBBcmVhT25lLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWEtb25lXCIpO1xuICBjb25zdCBzaGlwQXJlYVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBBcmVhVHdvLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWEtdHdvXCIpO1xuICBzaGlwQXJlYS5hcHBlbmRDaGlsZChzaGlwQXJlYU9uZSk7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKHNoaXBBcmVhVHdvKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzaGlwQXJlYSk7XG59O1xuXG5jb25zdCBtYWtlQm9hcmRUaXRsZSA9IChwbHlyKSA9PiB7XG4gIGNvbnN0IGJvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aXRsZVwiKTtcbiAgaWYgKHBseXIuZ2V0Q29tcCgpID09PSB0cnVlKSB7XG4gICAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIncyBCb2FyZFwiO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgfVxuICBib2FyZEFyZWEuYXBwZW5kQ2hpbGQoYm9hcmRUaXRsZSk7XG59O1xuXG5jb25zdCBtYWtlQm9hcmQgPSAocGx5cikgPT4ge1xuICBtYWtlQm9hcmRUaXRsZShwbHlyKTtcbiAgY29uc3QgbmV3Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdCb2FyZC5jbGFzc0xpc3QuYWRkKFwibmV3LWJvYXJkXCIsIGAke3BseXIuZ2V0Q29tcCgpfWApO1xuICBPYmplY3QuZW50cmllcyhwbHlyLmJyZC5ib2FyZCkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBsZXQgY29sdW1uID0gMTtcbiAgICBlbnRyeVsxXS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBjb25zdCBncmlkVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncmlkVGlsZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC10aWxlXCIpO1xuICAgICAgZ3JpZFRpbGUuc2V0QXR0cmlidXRlKGAke3BseXIuZ2V0Q29tcCgpfWRhdGEtY29vcmRzYCwgZW50cnlbMF0gKyBjb2x1bW4pO1xuICAgICAgY29sdW1uKys7XG4gICAgICBuZXdCb2FyZC5hcHBlbmRDaGlsZChncmlkVGlsZSk7XG4gICAgICBncmlkVGlsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGlsZX0pYDtcbiAgICB9KTtcbiAgfSk7XG4gIGJvYXJkQXJlYS5hcHBlbmRDaGlsZChuZXdCb2FyZCk7XG59O1xuXG5jb25zdCB1cGRhdGVCb2FyZCA9IChwbHlyKSA9PiB7XG4gIE9iamVjdC5lbnRyaWVzKHBseXIuYnJkLmJvYXJkKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGxldCBjb2x1bW4gPSAxO1xuICAgIGVudHJ5WzFdLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGlmIChpID09PSBcIm9cIikge1xuICAgICAgICBjb25zdCBncmlkVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFske3BseXIuZ2V0Q29tcCgpfWRhdGEtY29vcmRzPVwiJHtlbnRyeVswXSArIGNvbHVtbn1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGdyaWRUaWxlLnN0eWxlLmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgICB9XG4gICAgICBjb2x1bW4rKztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBtYWtlQm9hcmRBcmVhID0gKCkgPT4ge1xuICBib2FyZEFyZWEuY2xhc3NMaXN0LmFkZChcImJvYXJkLWFyZWFcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRBcmVhKTtcbn07XG5cbmNvbnN0IGNvbG9ySGl0ID0gKGdyaWRUaWxlLCBwbHlyLCBjb29yZHMpID0+IHtcbiAgaWYgKHBseXIuYnJkLmJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzWzFdIC0gMV0gPT09IFwieFwiKSB7XG4gICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gIH0gZWxzZSB7XG4gICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmx1ZVwiO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKG90aGVyUGx5cikgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCIubW9kYWxcIik7XG4gIGlmIChvdGhlclBseXIpIG1vZGFsLnRleHRDb250ZW50ID0gYCR7b3RoZXJQbHlyLm5hbWV9IHdpbnMhYDtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtb2RhbCk7XG59O1xuXG5jb25zdCBtYWtlVUkgPSAoKSA9PiB7XG4gIG1ha2VIZWFkZXIoKTtcbiAgbWFrZUJvYXJkQXJlYSgpO1xuICBtYWtlU2hpcEFyZWEoKTtcbn07XG5cbmV4cG9ydCB7IG1ha2VVSSwgbWFrZUJvYXJkLCB1cGRhdGVCb2FyZCwgY29sb3JIaXQsIGRpc3BsYXlXaW5uZXIgfTtcbiIsImltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBtYWtlQm9hcmQsIHVwZGF0ZUJvYXJkLCBjb2xvckhpdCwgZGlzcGxheVdpbm5lciB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmNvbnN0IHBvcHVsYXRlQm9hcmQgPSAocGx5cikgPT4ge1xuICBjb25zdCBjYXJyaWVyID0gc2hpcCg1KTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXAoNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBzaGlwKDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKDMpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKDIpO1xuICBwbHlyLmJyZC5wbGFjZVNoaXAoY2FycmllciwgXCJob3Jpem9udGFsXCIsIFwiQVwiLCAyKTtcbiAgcGx5ci5icmQucGxhY2VTaGlwKGJhdHRsZXNoaXAsIFwidmVydGljYWxcIiwgXCJDXCIsIDgpO1xuICBwbHlyLmJyZC5wbGFjZVNoaXAoY3J1aXNlciwgXCJ2ZXJ0aWNhbFwiLCBcIkRcIiwgMik7XG4gIHBseXIuYnJkLnBsYWNlU2hpcChzdWJtYXJpbmUsIFwidmVydGljYWxcIiwgXCJFXCIsIDUpO1xuICBwbHlyLmJyZC5wbGFjZVNoaXAoZGVzdHJveWVyLCBcImhvcml6b250YWxcIiwgXCJIXCIsIDEpO1xufTtcblxuY29uc3QgdGVzdEZvcldpbm5lciA9IChwbHlyLCBvdGhlclBseXIpID0+IHtcbiAgaWYgKHBseXIuYnJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgZGlzcGxheVdpbm5lcihvdGhlclBseXIpO1xuICB9XG59O1xuXG5jb25zdCBhdHRhY2tMaXN0ZW5lciA9IChwMSwgcDIpID0+IHtcbiAgY29uc3QgYm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hcmVhXCIpO1xuICBib2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKHAxLmdldFR1cm4oKSAmJiBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJ0cnVlZGF0YS1jb29yZHNcIikpIHtcbiAgICAgIGNvbnN0IGNvb3Jkc1RvQXR0YWNrID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJ1ZWRhdGEtY29vcmRzXCIpO1xuICAgICAgcDEuYXR0YWNrQm9hcmQocDIsIGNvb3Jkc1RvQXR0YWNrWzBdLCBjb29yZHNUb0F0dGFja1sxXSk7XG4gICAgICBjb2xvckhpdChlLnRhcmdldCwgcDIsIGNvb3Jkc1RvQXR0YWNrKTtcbiAgICAgIHRlc3RGb3JXaW5uZXIocDIsIHAxKTtcbiAgICB9IGVsc2UgaWYgKHAyLmdldFR1cm4oKSAmJiBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJmYWxzZWRhdGEtY29vcmRzXCIpKSB7XG4gICAgICBjb25zdCBjb29yZHNUb0F0dGFjayA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImZhbHNlZGF0YS1jb29yZHNcIik7XG4gICAgICBwMi5hdHRhY2tCb2FyZChwMSwgY29vcmRzVG9BdHRhY2tbMF0sIGNvb3Jkc1RvQXR0YWNrWzFdKTtcbiAgICAgIGNvbG9ySGl0KGUudGFyZ2V0LCBwMSwgY29vcmRzVG9BdHRhY2spO1xuICAgICAgdGVzdEZvcldpbm5lcihwMSwgcDIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBydW5HYW1lID0gKHAxLCBwMikgPT4ge1xuICBwb3B1bGF0ZUJvYXJkKHAxKTtcbiAgcG9wdWxhdGVCb2FyZChwMik7XG4gIHVwZGF0ZUJvYXJkKHAxKTtcbiAgLy8gdXBkYXRlQm9hcmQocDIpO1xuICBhdHRhY2tMaXN0ZW5lcihwMSwgcDIpO1xufTtcblxuY29uc3QgbmV3R2FtZUxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lXCIpO1xuICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcDEgPSBwbGF5ZXIoKTtcbiAgICBjb25zdCBwMiA9IHBsYXllcigpO1xuICAgIHAxLm5hbWUgPSBcInAxXCI7XG4gICAgcDIubmFtZSA9IFwicDJcIjtcbiAgICBwMS5zZXRUdXJuKHRydWUpO1xuICAgIHAyLnNldENvbXAodHJ1ZSk7XG4gICAgbWFrZUJvYXJkKHAxKTtcbiAgICBtYWtlQm9hcmQocDIpO1xuICAgIG5ld0dhbWVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJ1bkdhbWUocDEsIHAyKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBuZXdHYW1lTGlzdGVuZXIgfTtcbiIsImltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBtYWtlQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJkID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICBicmRbU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGJyZFtTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSldLnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBicmQ7XG4gIH07XG5cbiAgY29uc3QgYm9hcmQgPSBtYWtlQm9hcmQoKTtcblxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGNoZWNrRm9ySW52YWxpZFNwYWNlc0hvcml6b250YWwgPSAoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSBzdGFydENvbHVtbiAtIDE7IGkgPCBzdGFydENvbHVtbiAtIDEgKyBzaGlwVHlwZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGJvYXJkW3N0YXJ0Um93XVtpXSA9PT0gXCJvXCIgfHwgaSA+IDEwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tGb3JJbnZhbGlkU3BhY2VzVmVydGljYWwgPSAoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFR5cGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChcbiAgICAgICAgYm9hcmRbU3RyaW5nLmZyb21DaGFyQ29kZShzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSldW1xuICAgICAgICAgIHN0YXJ0Q29sdW1uIC0gMVxuICAgICAgICBdID09PSBcIm9cIiB8fFxuICAgICAgICBzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSA+PSA3NFxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VIb3Jpem9udGFsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBzaGlwcy5wdXNoKHNoaXBUeXBlKTtcbiAgICBzaGlwVHlwZS5wbGFjZW1lbnRBcnJheSA9IFtdO1xuICAgIGNoZWNrRm9ySW52YWxpZFNwYWNlc0hvcml6b250YWwoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbik7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29sdW1uIC0gMTsgaSA8IHN0YXJ0Q29sdW1uIC0gMSArIHNoaXBUeXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoaSA+PSAwICYmIGkgPCAxMCkge1xuICAgICAgICBib2FyZFtzdGFydFJvd11baV0gPSBzaGlwVHlwZS5oaXRBcnJheVtpIC0gc3RhcnRDb2x1bW4gKyAxXTtcbiAgICAgICAgc2hpcFR5cGUucGxhY2VtZW50QXJyYXkucHVzaChbc3RhcnRSb3csIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VWZXJ0aWNhbCA9IChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSA9PiB7XG4gICAgc2hpcHMucHVzaChzaGlwVHlwZSk7XG4gICAgc2hpcFR5cGUucGxhY2VtZW50QXJyYXkgPSBbXTtcbiAgICBjaGVja0ZvckludmFsaWRTcGFjZXNWZXJ0aWNhbChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBUeXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHN0YXJ0Um93LmNoYXJDb2RlQXQoMCkgKyBpID49IDY1ICYmXG4gICAgICAgIHN0YXJ0Um93LmNoYXJDb2RlQXQoMCkgKyBpIDw9IDc0XG4gICAgICApIHtcbiAgICAgICAgYm9hcmRbU3RyaW5nLmZyb21DaGFyQ29kZShzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSldW1xuICAgICAgICAgIHN0YXJ0Q29sdW1uIC0gMVxuICAgICAgICBdID0gc2hpcFR5cGUuaGl0QXJyYXlbaV07XG4gICAgICAgIHNoaXBUeXBlLnBsYWNlbWVudEFycmF5LnB1c2goW1xuICAgICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkpLFxuICAgICAgICAgIHN0YXJ0Q29sdW1uIC0gMSxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwVHlwZSwgZGlyZWN0aW9uLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgcGxhY2VIb3Jpem9udGFsKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIHBsYWNlVmVydGljYWwoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbik7XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHJvdywgY29sdW1uKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sdW1uIC0gMV0gPT09IFwib1wiKSB7XG4gICAgICBib2FyZFtyb3ddW2NvbHVtbiAtIDFdID0gXCJ4XCI7XG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwcCkgPT4ge1xuICAgICAgICBzaGlwcC5wbGFjZW1lbnRBcnJheS5mb3JFYWNoKChjb29yZHMpID0+IHtcbiAgICAgICAgICBpZiAoY29vcmRzWzBdID09PSByb3cgJiYgY29vcmRzWzFdID09PSBjb2x1bW4gLSAxKSB7XG4gICAgICAgICAgICBzaGlwcC5oaXQoc2hpcHAucGxhY2VtZW50QXJyYXkuaW5kZXhPZihjb29yZHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGJvYXJkW3Jvd11bY29sdW1uIC0gMV0gPT09IFwieFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGJvYXJkW3Jvd11bY29sdW1uIC0gMV0gPSBcIm1cIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1bmtBcnJheSA9IFtdO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBwKSA9PiB7XG4gICAgICBzdW5rQXJyYXkucHVzaChzaGlwcC5pc1N1bmsoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgZXF1YWxzVHJ1ZSA9IChjdXJyKSA9PiBjdXJyID09PSB0cnVlO1xuXG4gICAgcmV0dXJuIHN1bmtBcnJheS5ldmVyeShlcXVhbHNUcnVlKTtcbiAgfTtcblxuXG4gIHJldHVybiB7IGJvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHNoaXBzLCBhbGxTaGlwc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcHNcIjtcblxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xuICBsZXQgdHVybiA9IGZhbHNlO1xuICBsZXQgY29tcHV0ZXIgPSBmYWxzZTtcbiAgY29uc3QgYnJkID0gZ2FtZWJvYXJkKCk7XG4gIGNvbnN0IGZpcmVkT25Mb2NhdGlvbnMgPSBbXTtcblxuICBjb25zdCBnZXRUdXJuID0gKCkgPT4gdHVybjtcbiAgY29uc3Qgc2V0VHVybiA9ICh2YWx1ZSkgPT4gKHR1cm4gPSB2YWx1ZSk7XG5cbiAgY29uc3QgZ2V0Q29tcCA9ICgpID0+IGNvbXB1dGVyO1xuICBjb25zdCBzZXRDb21wID0gKHZhbHVlKSA9PiAoY29tcHV0ZXIgPSB2YWx1ZSk7XG5cbiAgY29uc3QgZ2V0UmFuZG9tQ29sdW1uID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pbiA9IDE7XG4gICAgY29uc3QgbWF4ID0gMTE7XG5cbiAgICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21Sb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgbWluID0gNjU7IC8vIFwiQVwiXG4gICAgY29uc3QgbWF4ID0gNzU7IC8vIFwiSlwiXG4gICAgY29uc3Qgcm93ID0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuICAgICk7XG4gICAgcmV0dXJuIHJvdztcbiAgfTtcblxuICBjb25zdCBjaGVja0ZpcmVkT25Mb2NhdGlvbnMgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgICBmaXJlZE9uTG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgICBpZiAobG9jYXRpb25bMF0gPT09IHJvdyAmJiBsb2NhdGlvblsxXSA9PT0gY29sdW1uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tCb2FyZCA9IChwbHlyLCByb3csIGNvbHVtbikgPT4ge1xuICAgIGlmICh0dXJuICYmIGNoZWNrRmlyZWRPbkxvY2F0aW9ucyhyb3csIGNvbHVtbikgPT09IGZhbHNlKSB7XG4gICAgICBwbHlyLmJyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uKTtcbiAgICAgIGZpcmVkT25Mb2NhdGlvbnMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICAgIHNldFR1cm4oZmFsc2UpO1xuICAgICAgcGx5ci5zZXRUdXJuKHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlyZWRPbkxvY2F0aW9ucztcbiAgfTtcblxuICBjb25zdCBjb21wdXRlckF0dGFjayA9IChwbHlyKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gZ2V0UmFuZG9tUm93KCk7XG4gICAgY29uc3QgY29sdW1uID0gZ2V0UmFuZG9tQ29sdW1uKCk7XG4gICAgaWYgKGNvbXB1dGVyKSB7XG4gICAgICBhdHRhY2tCb2FyZChwbHlyLCByb3csIGNvbHVtbik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VHVybixcbiAgICBzZXRUdXJuLFxuICAgIGdldENvbXAsXG4gICAgc2V0Q29tcCxcbiAgICBicmQsXG4gICAgYXR0YWNrQm9hcmQsXG4gICAgY29tcHV0ZXJBdHRhY2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXI7XG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBoaXRBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaGl0QXJyYXlbaV0gPSBcIm9cIjtcbiAgfVxuXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICBoaXRBcnJheVtudW1dID0gXCJ4XCI7XG4gICAgcmV0dXJuIGhpdEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVucmVhY2hhYmxlLWxvb3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdEFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoaGl0QXJyYXlbaV0gIT09IFwieFwiKSB7XG4gICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXRBcnJheSwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgbmV3R2FtZUxpc3RlbmVyIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5pbXBvcnQgeyBtYWtlVUkgfSBmcm9tIFwiLi9ET01cIjtcblxubWFrZVVJKCk7XG5uZXdHYW1lTGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==