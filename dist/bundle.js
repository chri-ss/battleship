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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/HoltwoodOneSC-Regular.ttf */ "./src/fonts/HoltwoodOneSC-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"holtwood\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-family: \"holtwood\", sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n}\n.header .title {\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: 3rem;\n  font-family: \"holtwood\", sans-serif;\n}\n.header .start-game {\n  width: 10rem;\n  border: none;\n  border-radius: 10px;\n  background-color: #afbcc0;\n  font-size: 18px;\n}\n.header .start-game:hover {\n  background-color: #324452;\n  color: #fff;\n  border: 2px solid #fff;\n}\n.header .start-game:active {\n  background-color: #749395;\n  color: #324452;\n}\n.header .start-game:disabled {\n  background-color: #afbcc0;\n  color: #6f808d;\n  border: none;\n}\n\n.ship-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  background-color: #749395;\n  justify-items: center;\n  align-items: center;\n}\n.ship-area img {\n  width: 6rem;\n}\n.ship-area .ship-wrapper,\n.ship-area .attack-wrapper {\n  width: 50%;\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n  align-items: center;\n  font-size: 32px;\n  text-align: center;\n}\n.ship-area .ship-wrapper {\n  grid-column: 1/2;\n}\n.ship-area .attack-wrapper {\n  grid-column: 2/3;\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n}\n.board-area .board-title {\n  grid-row: 1/2;\n  align-self: end;\n  font-size: 32px;\n  font-weight: 700;\n}\n.board-area .new-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 80%;\n  aspect-ratio: 1/1;\n  grid-row: 2/3;\n}\n.board-area .grid-tile {\n  height: 100%;\n  width: 100%;\n  border: 2px solid #324452;\n  background-size: cover;\n}\n.board-area .shadow {\n  background: rgb(50, 68, 82) !important;\n}\n.board-area .shadow-red {\n  background: rgb(204, 56, 56) !important;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #afbcc0;\n  color: #324452;\n  padding: 3rem;\n  grid-column: 1/3;\n  width: 30%;\n  height: 50%;\n  border: 2px solid #324452;\n  border-radius: 10px;\n  font-size: 32px;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;AACF;AAEA;EACE,aAAA;EACA,YAAA;EACA,sBAAA;EACA,mCAAA;AAAF;;AAGA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,+BAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,WAAA;AAAF;AAEE;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,mCAAA;AAAJ;AAGE;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;AADJ;AAIE;EACE,yBAAA;EACA,WAAA;EACA,sBAAA;AAFJ;AAKE;EACE,yBAAA;EACA,cAAA;AAHJ;AAME;EACE,yBAAA;EACA,cAAA;EACA,YAAA;AAJJ;;AAQA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;AALF;AAOE;EACE,WAAA;AALJ;AAQE;;EAEE,UAAA;EACA,aAAA;EACA,SAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AANJ;AASE;EACE,gBAAA;AAPJ;AAUE;EACE,gBAAA;AARJ;;AAYA;EACE,aAAA;EACA,8BAAA;EACA,4BAAA;EACA,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gCAAA;AATF;AAWE;EACE,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AATJ;AAYE;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EAEA,WAAA;EACA,iBAAA;EACA,aAAA;AAXJ;AAcE;EACE,YAAA;EACA,WAAA;EACA,yBAAA;EACA,sBAAA;AAZJ;AAeE;EACE,sCAAA;AAbJ;AAgBE;EACE,uCAAA;AAdJ;;AAkBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,gBAAA;EACA,UAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;AAfF","sourcesContent":["@font-face {\n  font-family: \"holtwood\";\n  src: url(\"./fonts/HoltwoodOneSC-Regular.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-family: \"holtwood\", sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n\n  .title {\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: 3rem;\n    font-family: \"holtwood\", sans-serif;\n  }\n\n  .start-game {\n    width: 10rem;\n    border: none;\n    border-radius: 10px;\n    background-color: #afbcc0;\n    font-size: 18px;\n  }\n\n  .start-game:hover {\n    background-color: #324452;\n    color: #fff;\n    border: 2px solid #fff;\n  }\n\n  .start-game:active {\n    background-color: #749395;\n    color: #324452;\n  }\n\n  .start-game:disabled {\n    background-color: #afbcc0;\n    color: #6f808d;\n    border: none;\n  }\n}\n\n.ship-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  background-color: #749395;\n  justify-items: center;\n  align-items: center;\n\n  img {\n    width: 6rem;\n  }\n\n  .ship-wrapper,\n  .attack-wrapper {\n    width: 50%;\n    display: grid;\n    gap: 1rem;\n    justify-items: center;\n    align-items: center;\n    font-size: 32px;\n    text-align: center;\n  }\n\n  .ship-wrapper {\n    grid-column: 1/2;\n  }\n\n  .attack-wrapper {\n    grid-column: 2/3;\n  }\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n\n  .board-title {\n    grid-row: 1/2;\n    align-self: end;\n    font-size: 32px;\n    font-weight: 700;\n  }\n\n  .new-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    // border: 1px solid #324452;\n    height: 80%;\n    aspect-ratio: 1/1;\n    grid-row: 2/3;\n  }\n\n  .grid-tile {\n    height: 100%;\n    width: 100%;\n    border: 2px solid #324452;\n    background-size: cover;\n  }\n\n  .shadow {\n    background: rgba(50, 68, 82, 1) !important;\n  }\n\n  .shadow-red {\n    background: rgb(204, 56, 56, 1) !important;\n  }\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #afbcc0;\n  color: #324452;\n  padding: 3rem;\n  grid-column: 1/3;\n  width: 30%;\n  height: 50%;\n  border: 2px solid #324452;\n  border-radius: 10px;\n  font-size: 32px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony export */   "clearShipArea": () => (/* binding */ clearShipArea),
/* harmony export */   "colorHit": () => (/* binding */ colorHit),
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner),
/* harmony export */   "makeAttackPrompt": () => (/* binding */ makeAttackPrompt),
/* harmony export */   "makeBoard": () => (/* binding */ makeBoard),
/* harmony export */   "makeShipPlacePrompt": () => (/* binding */ makeShipPlacePrompt),
/* harmony export */   "makeUI": () => (/* binding */ makeUI),
/* harmony export */   "orientation": () => (/* binding */ orientation),
/* harmony export */   "removeResidualRed": () => (/* binding */ removeResidualRed),
/* harmony export */   "shipPlaceHover": () => (/* binding */ shipPlaceHover),
/* harmony export */   "toggleShipShadow": () => (/* binding */ toggleShipShadow),
/* harmony export */   "updateBoard": () => (/* binding */ updateBoard),
/* harmony export */   "updateShipPrompt": () => (/* binding */ updateShipPrompt)
/* harmony export */ });
/* harmony import */ var _images_tile048_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/tile048.png */ "./src/images/tile048.png");
/* harmony import */ var _images_arrow_up_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/arrow-up-circle.svg */ "./src/images/arrow-up-circle.svg");



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

const clearShipArea = () => {
  const shipArea = document.querySelector(".ship-area");
  while (shipArea.firstChild) {
    shipArea.removeChild(shipArea.lastChild);
  }
};

const clearModal = () => {
  content.removeChild(modal);
};

const colorHit = (gridTile, plyr, coords) => {
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
  const shipArea = document.querySelector(".ship-area");
  modal.classList.add("modal");
  if (otherPlyr) modal.textContent = `${otherPlyr.name} wins!`;
  clearShipArea();
  shipArea.appendChild(modal);
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

const makeShipPlacePrompt = (ship) => {
  const shipArea = document.querySelector(".ship-area");
  const wrapper = document.createElement("div");
  wrapper.classList.add("ship-wrapper");
  const up = document.createElement("img");
  up.src = _images_arrow_up_circle_svg__WEBPACK_IMPORTED_MODULE_1__;
  const message = document.createElement("div");
  message.textContent = "Place your Ships here\n Press 't' to rotate";
  const placing = document.createElement("div");
  placing.classList.add("placing");
  placing.textContent = `Placing: ${ship}`;
  wrapper.appendChild(up);
  wrapper.appendChild(message);
  wrapper.appendChild(placing);
  shipArea.appendChild(wrapper);
};

const updateShipPrompt = (ship) => {
  const placing = document.querySelector(".placing");
  placing.textContent = `Placing: ${ship}`;
};

const makeAttackPrompt = () => {
  const shipArea = document.querySelector(".ship-area");
  const attackWrapper = document.createElement("div");
  attackWrapper.classList.add("attack-wrapper");
  const up = document.createElement("img");
  up.src = _images_arrow_up_circle_svg__WEBPACK_IMPORTED_MODULE_1__;
  const message = document.createElement("div");
  message.textContent = "Attack your opponent here!";
  attackWrapper.appendChild(up);
  attackWrapper.appendChild(message);
  shipArea.appendChild(attackWrapper);
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
/* eslint-disable no-plusplus */




let p1;
let p2;

const placeShipListener = (ships, plyr, otherPlyr) => {
  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.shipPlaceHover)(ships, _DOM__WEBPACK_IMPORTED_MODULE_1__.orientation);
  const boardArea = document.querySelector(".board-area");
  let counter = 0;
  (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.makeShipPlacePrompt)(ships[counter].name);
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
        if (counter >= 5) {
          (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearShipArea)();
          addAttackListener(plyr, otherPlyr);
          (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.makeAttackPrompt)();
        }
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateShipPrompt)(ships[counter].name);
      }
    } catch {
      console.log("aa");
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

const testForWinner = (plyr, otherPlyr) => {
  if (plyr.brd.allShipsSunk()) {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayWinner)(otherPlyr);
    resetGameListener();
  }
};

function attackListener(e) {
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
    testForWinner(p1, p2);
  }
}

const addAttackListener = () => {
  const boardArea = document.querySelector(".board-area");
  boardArea.addEventListener("click", attackListener);
};

const removeAttackListener = () => {
  const boardArea = document.querySelector(".board-area");
  boardArea.removeEventListener("click", attackListener);
};

const resetGameListener = () => {
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", () => {
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearBoard)();
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearShipArea)();
    removeAttackListener();
    initializeGame();
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.clearModal)();
  });
};

const populateBoard = (plyr, otherPlyr) => {
  const carrier = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(5);
  carrier.name = "carrier";
  const battleship = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(4);
  battleship.name = "battleship";
  const cruiser = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3);
  cruiser.name = "cruiser";
  const submarine = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(3);
  submarine.name = "submarine";
  const destroyer = (0,_ships__WEBPACK_IMPORTED_MODULE_2__.ship)(2);
  destroyer.name = "destroyer";
  const ships = [carrier, battleship, cruiser, submarine, destroyer];
  if (plyr.name === "p1") {
    placeShipListener(ships, plyr, otherPlyr);
  } else {
    ships.forEach((shipp) => {
      plyr.computerShipPlace(shipp);
    });
  }
};

const runGame = () => {
  populateBoard(p1, p2);
  populateBoard(p2, p1);
};

const initializeGame = () => {
  const newGameButton = document.querySelector(".start-game");
  p1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
  p2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
/* eslint-disable no-plusplus */
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

/***/ "./src/fonts/HoltwoodOneSC-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/HoltwoodOneSC-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ee7f2d0f13e4770accd.ttf";

/***/ }),

/***/ "./src/images/arrow-up-circle.svg":
/*!****************************************!*\
  !*** ./src/images/arrow-up-circle.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aadb9e345ff69adcbf8f.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDQztBQUNtQjs7QUFFVjs7QUFFL0IsNENBQU07QUFDTixzREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ib2x0d29vZE9uZVNDLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImhvbHR3b29kXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob2x0d29vZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciA1ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NDUyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9sdHdvb2RcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uaGVhZGVyIC5zdGFydC1nYW1lIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uaGVhZGVyIC5zdGFydC1nYW1lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ0NTI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi5oZWFkZXIgLnN0YXJ0LWdhbWU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDkzOTU7XFxuICBjb2xvcjogIzMyNDQ1MjtcXG59XFxuLmhlYWRlciAuc3RhcnQtZ2FtZTpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgY29sb3I6ICM2ZjgwOGQ7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaGlwLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDkzOTU7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2hpcC1hcmVhIGltZyB7XFxuICB3aWR0aDogNnJlbTtcXG59XFxuLnNoaXAtYXJlYSAuc2hpcC13cmFwcGVyLFxcbi5zaGlwLWFyZWEgLmF0dGFjay13cmFwcGVyIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnNoaXAtYXJlYSAuc2hpcC13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi5zaGlwLWFyZWEgLmF0dGFjay13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5ib2FyZC1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmNjMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMyNDQ1MjtcXG59XFxuLmJvYXJkLWFyZWEgLmJvYXJkLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYm9hcmQtYXJlYSAubmV3LWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcbi5ib2FyZC1hcmVhIC5ncmlkLXRpbGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzI0NDUyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmJvYXJkLWFyZWEgLnNoYWRvdyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTAsIDY4LCA4MikgIWltcG9ydGFudDtcXG59XFxuLmJvYXJkLWFyZWEgLnNoYWRvdy1yZWQge1xcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgNTYsIDU2KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjYWZiY2MwO1xcbiAgY29sb3I6ICMzMjQ0NTI7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ0NTI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsK0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7QUFBSjtBQUdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUZKO0FBS0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFISjtBQU1FO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUxGO0FBT0U7RUFDRSxXQUFBO0FBTEo7QUFRRTs7RUFFRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTko7QUFTRTtFQUNFLGdCQUFBO0FBUEo7QUFVRTtFQUNFLGdCQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBVEY7QUFXRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQVhKO0FBY0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFaSjtBQWVFO0VBQ0Usc0NBQUE7QUFiSjtBQWdCRTtFQUNFLHVDQUFBO0FBZEo7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFmRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9sdHdvb2RcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvSG9sdHdvb2RPbmVTQy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcImhvbHR3b29kXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyIDVmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ0NTI7XFxuICBjb2xvcjogI2ZmZjtcXG5cXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiaG9sdHdvb2RcXFwiLCBzYW5zLXNlcmlmO1xcbiAgfVxcblxcbiAgLnN0YXJ0LWdhbWUge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmNjMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLnN0YXJ0LWdhbWU6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NDUyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gIH1cXG5cXG4gIC5zdGFydC1nYW1lOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NDkzOTU7XFxuICAgIGNvbG9yOiAjMzI0NDUyO1xcbiAgfVxcblxcbiAgLnN0YXJ0LWdhbWU6ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgICBjb2xvcjogIzZmODA4ZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uc2hpcC1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5Mzk1O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGltZyB7XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgfVxcblxcbiAgLnNoaXAtd3JhcHBlcixcXG4gIC5hdHRhY2std3JhcHBlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zaGlwLXdyYXBwZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgfVxcblxcbiAgLmF0dGFjay13cmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIH1cXG59XFxuXFxuLmJvYXJkLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzI0NDUyO1xcblxcbiAgLmJvYXJkLXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuICAubmV3LWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMzI0NDUyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuXFxuICAuZ3JpZC10aWxlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMyNDQ1MjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIH1cXG5cXG4gIC5zaGFkb3cge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA2OCwgODIsIDEpICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuc2hhZG93LXJlZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMDQsIDU2LCA1NiwgMSkgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2FmYmNjMDtcXG4gIGNvbG9yOiAjMzI0NDUyO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzI0NDUyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0aWxlIGZyb20gXCIuL2ltYWdlcy90aWxlMDQ4LnBuZ1wiO1xuaW1wb3J0IHVwQXJyb3cgZnJvbSBcIi4vaW1hZ2VzL2Fycm93LXVwLWNpcmNsZS5zdmdcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGJvYXJkQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IG9yaWVudGF0aW9uID0ge1xuICBjdXJyZW50OiBcImhvcml6b250YWxcIixcbiAgcHJldmlvdXM6IFwidmVydGljYWxcIixcbiAgc3dhcCgpIHtcbiAgICBjb25zdCB0ZW1wID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMucHJldmlvdXM7XG4gICAgdGhpcy5wcmV2aW91cyA9IHRlbXA7XG4gIH0sXG59O1xubGV0IG9yaWdpbjtcbmxldCBjdXJyZW50U2hpcDtcblxuY29uc3QgbWFrZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEdhbWUuY2xhc3NMaXN0LmFkZChcInN0YXJ0LWdhbWVcIik7XG4gIHN0YXJ0R2FtZS50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuY29uc3QgbWFrZVNoaXBBcmVhID0gKCkgPT4ge1xuICBjb25zdCBzaGlwQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBBcmVhLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWFyZWFcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcEFyZWEpO1xufTtcblxuY29uc3QgbWFrZUJvYXJkVGl0bGUgPSAocGx5cikgPT4ge1xuICBjb25zdCBib2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtdGl0bGVcIik7XG4gIGlmIChwbHlyLmdldENvbXAoKSA9PT0gdHJ1ZSkge1xuICAgIGJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbXB1dGVyJ3MgQm9hcmRcIjtcbiAgfSBlbHNlIHtcbiAgICBib2FyZFRpdGxlLnRleHRDb250ZW50ID0gXCJZb3VyIEJvYXJkXCI7XG4gIH1cbiAgYm9hcmRBcmVhLmFwcGVuZENoaWxkKGJvYXJkVGl0bGUpO1xufTtcblxuY29uc3QgbWFrZUJvYXJkID0gKHBseXIpID0+IHtcbiAgbWFrZUJvYXJkVGl0bGUocGx5cik7XG4gIGNvbnN0IG5ld0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3Qm9hcmQuY2xhc3NMaXN0LmFkZChcIm5ldy1ib2FyZFwiLCBgJHtwbHlyLmdldENvbXAoKX1gKTtcbiAgT2JqZWN0LmVudHJpZXMocGx5ci5icmQuYm9hcmQpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgbGV0IGNvbHVtbiA9IDE7XG4gICAgZW50cnlbMV0uZm9yRWFjaCgoaSkgPT4ge1xuICAgICAgY29uc3QgZ3JpZFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZFRpbGUuY2xhc3NMaXN0LmFkZChcImdyaWQtdGlsZVwiKTtcbiAgICAgIGdyaWRUaWxlLnNldEF0dHJpYnV0ZShgJHtwbHlyLmdldENvbXAoKX1kYXRhLWNvb3Jkc2AsIGVudHJ5WzBdICsgY29sdW1uKTtcbiAgICAgIGNvbHVtbisrO1xuICAgICAgbmV3Qm9hcmQuYXBwZW5kQ2hpbGQoZ3JpZFRpbGUpO1xuICAgICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RpbGV9KWA7XG4gICAgfSk7XG4gIH0pO1xuICBib2FyZEFyZWEuYXBwZW5kQ2hpbGQobmV3Qm9hcmQpO1xufTtcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAocGx5cikgPT4ge1xuICBPYmplY3QuZW50cmllcyhwbHlyLmJyZC5ib2FyZCkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBsZXQgY29sdW1uID0gMTtcbiAgICBlbnRyeVsxXS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gXCJvXCIpIHtcbiAgICAgICAgY29uc3QgZ3JpZFRpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbJHtwbHlyLmdldENvbXAoKX1kYXRhLWNvb3Jkcz1cIiR7ZW50cnlbMF0gKyBjb2x1bW59XCJdYFxuICAgICAgICApO1xuICAgICAgICBncmlkVGlsZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgICAgfVxuICAgICAgY29sdW1uKys7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgbWFrZUJvYXJkQXJlYSA9ICgpID0+IHtcbiAgYm9hcmRBcmVhLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1hcmVhXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJvYXJkQXJlYSk7XG59O1xuXG5jb25zdCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICB3aGlsZSAoYm9hcmRBcmVhLmZpcnN0Q2hpbGQpIHtcbiAgICBib2FyZEFyZWEucmVtb3ZlQ2hpbGQoYm9hcmRBcmVhLmxhc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyU2hpcEFyZWEgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWFyZWFcIik7XG4gIHdoaWxlIChzaGlwQXJlYS5maXJzdENoaWxkKSB7XG4gICAgc2hpcEFyZWEucmVtb3ZlQ2hpbGQoc2hpcEFyZWEubGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJNb2RhbCA9ICgpID0+IHtcbiAgY29udGVudC5yZW1vdmVDaGlsZChtb2RhbCk7XG59O1xuXG5jb25zdCBjb2xvckhpdCA9IChncmlkVGlsZSwgcGx5ciwgY29vcmRzKSA9PiB7XG4gIGlmIChwbHlyLmJyZC5ib2FyZFtjb29yZHNbMF1dW2Nvb3Jkcy5zbGljZSgxKSAtIDFdID09PSBcInhcIikge1xuICAgIGdyaWRUaWxlLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICB9IGVsc2Uge1xuICAgIGdyaWRUaWxlLnN0eWxlLmJhY2tncm91bmQgPSBcImJsdWVcIjtcbiAgfVxufTtcblxuY29uc3QgbWFrZVJlc2V0QnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZXNldC1idXR0b25cIik7XG4gIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJQbGF5IEFnYWluP1wiO1xuICBtb2RhbC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG59O1xuXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKG90aGVyUGx5cikgPT4ge1xuICBjb25zdCBzaGlwQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1hcmVhXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIGlmIChvdGhlclBseXIpIG1vZGFsLnRleHRDb250ZW50ID0gYCR7b3RoZXJQbHlyLm5hbWV9IHdpbnMhYDtcbiAgY2xlYXJTaGlwQXJlYSgpO1xuICBzaGlwQXJlYS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIG1ha2VSZXNldEJ1dHRvbigpO1xufTtcblxuY29uc3QgdG9nZ2xlU2hpcFNoYWRvdyA9IChvLCBhY3Rpb24sIENTU2NsYXNzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29sdW1uID0gb3JpZ2luLmdldEF0dHJpYnV0ZShcImZhbHNlZGF0YS1jb29yZHNcIikuc2xpY2UoMSk7XG4gICAgY29uc3Qgcm93ID0gb3JpZ2luLmdldEF0dHJpYnV0ZShcImZhbHNlZGF0YS1jb29yZHNcIilbMF07XG4gICAgaWYgKG8gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpIDwgcGFyc2VJbnQoY29sdW1uKSArIGN1cnJlbnRTaGlwLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGRpdlRvTWFyayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtmYWxzZWRhdGEtY29vcmRzPVwiJHtyb3cgKyBpfVwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJhZGRcIikge1xuICAgICAgICAgIGRpdlRvTWFyay5jbGFzc0xpc3QuYWRkKENTU2NsYXNzKTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgICBkaXZUb01hcmsuY2xhc3NMaXN0LnJlbW92ZShDU1NjbGFzcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG8gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGkgPSByb3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaSA8IHJvdy5jaGFyQ29kZUF0KDApICsgY3VycmVudFNoaXAubGVuZ3RoO1xuICAgICAgICArK2lcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkaXZUb01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZmFsc2VkYXRhLWNvb3Jkcz1cIiR7U3RyaW5nLmZyb21DaGFyQ29kZShpKSArIGNvbHVtbn1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiYWRkXCIpIHtcbiAgICAgICAgICBkaXZUb01hcmsuY2xhc3NMaXN0LmFkZChDU1NjbGFzcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJlbW92ZVwiKSB7XG4gICAgICAgICAgZGl2VG9NYXJrLmNsYXNzTGlzdC5yZW1vdmUoQ1NTY2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IG9yaWVudGF0aW9uSGFuZGxlciA9IChlKSA9PiB7XG4gIGlmIChlLmNvZGUgPT09IFwiS2V5VFwiKSB7XG4gICAgdG9nZ2xlU2hpcFNoYWRvdyhvcmllbnRhdGlvbi5jdXJyZW50LCBcInJlbW92ZVwiLCBcInNoYWRvd1wiKTtcbiAgICBvcmllbnRhdGlvbi5zd2FwKCk7XG4gICAgdG9nZ2xlU2hpcFNoYWRvdyhvcmllbnRhdGlvbi5jdXJyZW50LCBcImFkZFwiLCBcInNoYWRvd1wiKTtcbiAgfVxufTtcblxuY29uc3Qgb3JpZW50YXRpb25MaXN0ZW5lciA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb3JpZW50YXRpb25IYW5kbGVyKTtcbn07XG5cbmNvbnN0IHNoaXBQbGFjZUhvdmVyID0gKHNoaXBzKSA9PiB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgYm9hcmRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKSkge1xuICAgICAgaWYgKHNoaXBzW2NvdW50ZXJdLnBsYWNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgICBvcmlnaW4gPSBlLnRhcmdldDtcbiAgICAgIGN1cnJlbnRTaGlwID0gc2hpcHNbY291bnRlcl07XG4gICAgICB0b2dnbGVTaGlwU2hhZG93KG9yaWVudGF0aW9uLmN1cnJlbnQsIFwiYWRkXCIsIFwic2hhZG93XCIpO1xuICAgIH1cbiAgfSk7XG4gIGJvYXJkQXJlYS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKSkge1xuICAgICAgdG9nZ2xlU2hpcFNoYWRvdyhvcmllbnRhdGlvbi5jdXJyZW50LCBcInJlbW92ZVwiLCBcInNoYWRvd1wiKTtcbiAgICB9XG4gIH0pO1xuICBvcmllbnRhdGlvbkxpc3RlbmVyKCk7XG59O1xuXG5jb25zdCByZW1vdmVSZXNpZHVhbFJlZCA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2ZhbHNlZGF0YS1jb29yZHNdXCIpO1xuICBhbGxUaWxlcy5mb3JFYWNoKCh0bCkgPT4ge1xuICAgIGlmICh0bC5jbGFzc0xpc3RbMV0gPT09IFwic2hhZG93LXJlZFwiKSB7XG4gICAgICB0bC5jbGFzc0xpc3QucmVtb3ZlKFwic2hhZG93LXJlZFwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWFrZVNoaXBQbGFjZVByb21wdCA9IChzaGlwKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWFyZWFcIik7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXdyYXBwZXJcIik7XG4gIGNvbnN0IHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdXAuc3JjID0gdXBBcnJvdztcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgU2hpcHMgaGVyZVxcbiBQcmVzcyAndCcgdG8gcm90YXRlXCI7XG4gIGNvbnN0IHBsYWNpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjaW5nLmNsYXNzTGlzdC5hZGQoXCJwbGFjaW5nXCIpO1xuICBwbGFjaW5nLnRleHRDb250ZW50ID0gYFBsYWNpbmc6ICR7c2hpcH1gO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHVwKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChwbGFjaW5nKTtcbiAgc2hpcEFyZWEuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59O1xuXG5jb25zdCB1cGRhdGVTaGlwUHJvbXB0ID0gKHNoaXApID0+IHtcbiAgY29uc3QgcGxhY2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2luZ1wiKTtcbiAgcGxhY2luZy50ZXh0Q29udGVudCA9IGBQbGFjaW5nOiAke3NoaXB9YDtcbn07XG5cbmNvbnN0IG1ha2VBdHRhY2tQcm9tcHQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWFyZWFcIik7XG4gIGNvbnN0IGF0dGFja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhdHRhY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2std3JhcHBlclwiKTtcbiAgY29uc3QgdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB1cC5zcmMgPSB1cEFycm93O1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQXR0YWNrIHlvdXIgb3Bwb25lbnQgaGVyZSFcIjtcbiAgYXR0YWNrV3JhcHBlci5hcHBlbmRDaGlsZCh1cCk7XG4gIGF0dGFja1dyYXBwZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKGF0dGFja1dyYXBwZXIpO1xufTtcblxuY29uc3QgbWFrZVVJID0gKCkgPT4ge1xuICBtYWtlSGVhZGVyKCk7XG4gIG1ha2VCb2FyZEFyZWEoKTtcbiAgbWFrZVNoaXBBcmVhKCk7XG59O1xuXG5leHBvcnQge1xuICBtYWtlVUksXG4gIG1ha2VCb2FyZCxcbiAgdXBkYXRlQm9hcmQsXG4gIGNsZWFyQm9hcmQsXG4gIGNsZWFyTW9kYWwsXG4gIGNvbG9ySGl0LFxuICBkaXNwbGF5V2lubmVyLFxuICBzaGlwUGxhY2VIb3ZlcixcbiAgdG9nZ2xlU2hpcFNoYWRvdyxcbiAgb3JpZW50YXRpb24sXG4gIHJlbW92ZVJlc2lkdWFsUmVkLFxuICBtYWtlU2hpcFBsYWNlUHJvbXB0LFxuICB1cGRhdGVTaGlwUHJvbXB0LFxuICBtYWtlQXR0YWNrUHJvbXB0LFxuICBjbGVhclNoaXBBcmVhLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHtcbiAgbWFrZUJvYXJkLFxuICB1cGRhdGVCb2FyZCxcbiAgY29sb3JIaXQsXG4gIGNsZWFyQm9hcmQsXG4gIGRpc3BsYXlXaW5uZXIsXG4gIGNsZWFyTW9kYWwsXG4gIHNoaXBQbGFjZUhvdmVyLFxuICB0b2dnbGVTaGlwU2hhZG93LFxuICBvcmllbnRhdGlvbixcbiAgcmVtb3ZlUmVzaWR1YWxSZWQsXG4gIG1ha2VTaGlwUGxhY2VQcm9tcHQsXG4gIHVwZGF0ZVNoaXBQcm9tcHQsXG4gIGNsZWFyU2hpcEFyZWEsXG4gIG1ha2VBdHRhY2tQcm9tcHQsXG59IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmxldCBwMTtcbmxldCBwMjtcblxuY29uc3QgcGxhY2VTaGlwTGlzdGVuZXIgPSAoc2hpcHMsIHBseXIsIG90aGVyUGx5cikgPT4ge1xuICBzaGlwUGxhY2VIb3ZlcihzaGlwcywgb3JpZW50YXRpb24pO1xuICBjb25zdCBib2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFyZWFcIik7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgbWFrZVNoaXBQbGFjZVByb21wdChzaGlwc1tjb3VudGVyXS5uYW1lKTtcbiAgYm9hcmRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKSAmJiBjb3VudGVyIDwgNSkge1xuICAgICAgICBsZXQgY29vcmRzID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKTtcbiAgICAgICAgY29vcmRzID0gW2Nvb3Jkc1swXSwgY29vcmRzLnNsaWNlKDEpXTtcbiAgICAgICAgcGx5ci5icmQucGxhY2VTaGlwKFxuICAgICAgICAgIHNoaXBzW2NvdW50ZXJdLFxuICAgICAgICAgIG9yaWVudGF0aW9uLmN1cnJlbnQsXG4gICAgICAgICAgY29vcmRzWzBdLFxuICAgICAgICAgIGNvb3Jkc1sxXVxuICAgICAgICApO1xuICAgICAgICBzaGlwc1tjb3VudGVyXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB1cGRhdGVCb2FyZChwbHlyKTtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBpZiAoY291bnRlciA+PSA1KSB7XG4gICAgICAgICAgY2xlYXJTaGlwQXJlYSgpO1xuICAgICAgICAgIGFkZEF0dGFja0xpc3RlbmVyKHBseXIsIG90aGVyUGx5cik7XG4gICAgICAgICAgbWFrZUF0dGFja1Byb21wdCgpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVNoaXBQcm9tcHQoc2hpcHNbY291bnRlcl0ubmFtZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zb2xlLmxvZyhcImFhXCIpO1xuICAgICAgdG9nZ2xlU2hpcFNoYWRvdyhvcmllbnRhdGlvbi5jdXJyZW50LCBcImFkZFwiLCBcInNoYWRvdy1yZWRcIik7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICB0b2dnbGVTaGlwU2hhZG93LFxuICAgICAgICAxMDAsXG4gICAgICAgIG9yaWVudGF0aW9uLmN1cnJlbnQsXG4gICAgICAgIFwicmVtb3ZlXCIsXG4gICAgICAgIFwic2hhZG93LXJlZFwiXG4gICAgICApO1xuICAgICAgc2V0VGltZW91dChyZW1vdmVSZXNpZHVhbFJlZCwgMTAwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdGVzdEZvcldpbm5lciA9IChwbHlyLCBvdGhlclBseXIpID0+IHtcbiAgaWYgKHBseXIuYnJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgZGlzcGxheVdpbm5lcihvdGhlclBseXIpO1xuICAgIHJlc2V0R2FtZUxpc3RlbmVyKCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGF0dGFja0xpc3RlbmVyKGUpIHtcbiAgY29uc3QgY29vcmRzVG9BdHRhY2sgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cnVlZGF0YS1jb29yZHNcIik7XG4gIGlmIChcbiAgICBwMS5nZXRUdXJuKCkgJiZcbiAgICBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJ0cnVlZGF0YS1jb29yZHNcIikgJiZcbiAgICBwMS5jaGVja0ZpcmVkT25Mb2NhdGlvbnMoY29vcmRzVG9BdHRhY2tbMF0sIGNvb3Jkc1RvQXR0YWNrLnNsaWNlKDEpKSA9PT1cbiAgICAgIGZhbHNlXG4gICkge1xuICAgIHAxLmF0dGFja0JvYXJkKHAyLCBjb29yZHNUb0F0dGFja1swXSwgY29vcmRzVG9BdHRhY2suc2xpY2UoMSkpO1xuICAgIGNvbG9ySGl0KGUudGFyZ2V0LCBwMiwgY29vcmRzVG9BdHRhY2spO1xuICAgIHRlc3RGb3JXaW5uZXIocDIsIHAxKTtcbiAgICBwMi5jb21wdXRlckF0dGFjayhwMSk7XG4gICAgdGVzdEZvcldpbm5lcihwMSwgcDIpO1xuICB9XG59XG5cbmNvbnN0IGFkZEF0dGFja0xpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBib2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFyZWFcIik7XG4gIGJvYXJkQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrTGlzdGVuZXIpO1xufTtcblxuY29uc3QgcmVtb3ZlQXR0YWNrTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9hcmQtYXJlYVwiKTtcbiAgYm9hcmRBcmVhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tMaXN0ZW5lcik7XG59O1xuXG5jb25zdCByZXNldEdhbWVMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ1dHRvblwiKTtcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhckJvYXJkKCk7XG4gICAgY2xlYXJTaGlwQXJlYSgpO1xuICAgIHJlbW92ZUF0dGFja0xpc3RlbmVyKCk7XG4gICAgaW5pdGlhbGl6ZUdhbWUoKTtcbiAgICBjbGVhck1vZGFsKCk7XG4gIH0pO1xufTtcblxuY29uc3QgcG9wdWxhdGVCb2FyZCA9IChwbHlyLCBvdGhlclBseXIpID0+IHtcbiAgY29uc3QgY2FycmllciA9IHNoaXAoNSk7XG4gIGNhcnJpZXIubmFtZSA9IFwiY2FycmllclwiO1xuICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcCg0KTtcbiAgYmF0dGxlc2hpcC5uYW1lID0gXCJiYXR0bGVzaGlwXCI7XG4gIGNvbnN0IGNydWlzZXIgPSBzaGlwKDMpO1xuICBjcnVpc2VyLm5hbWUgPSBcImNydWlzZXJcIjtcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgzKTtcbiAgc3VibWFyaW5lLm5hbWUgPSBcInN1Ym1hcmluZVwiO1xuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKDIpO1xuICBkZXN0cm95ZXIubmFtZSA9IFwiZGVzdHJveWVyXCI7XG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgaWYgKHBseXIubmFtZSA9PT0gXCJwMVwiKSB7XG4gICAgcGxhY2VTaGlwTGlzdGVuZXIoc2hpcHMsIHBseXIsIG90aGVyUGx5cik7XG4gIH0gZWxzZSB7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcHApID0+IHtcbiAgICAgIHBseXIuY29tcHV0ZXJTaGlwUGxhY2Uoc2hpcHApO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBydW5HYW1lID0gKCkgPT4ge1xuICBwb3B1bGF0ZUJvYXJkKHAxLCBwMik7XG4gIHBvcHVsYXRlQm9hcmQocDIsIHAxKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVHYW1lID0gKCkgPT4ge1xuICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lXCIpO1xuICBwMSA9IHBsYXllcigpO1xuICBwMiA9IHBsYXllcigpO1xuICBwMS5uYW1lID0gXCJwMVwiO1xuICBwMi5uYW1lID0gXCJwMlwiO1xuICBwMS5zZXRUdXJuKHRydWUpO1xuICBwMi5zZXRDb21wKHRydWUpO1xuICBtYWtlQm9hcmQocDEpO1xuICBtYWtlQm9hcmQocDIpO1xuICBuZXdHYW1lQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgcnVuR2FtZShwMSwgcDIpO1xufTtcblxuY29uc3QgbmV3R2FtZUxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1nYW1lXCIpO1xuICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0aWFsaXplR2FtZSk7XG59O1xuXG5leHBvcnQgeyBuZXdHYW1lTGlzdGVuZXIsIG9yaWVudGF0aW9uIH07XG4iLCJpbXBvcnQgeyBzaGlwIH0gZnJvbSBcIi4vc2hpcHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgbWFrZUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJyZCA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7ICsraSkge1xuICAgICAgYnJkW1N0cmluZy5mcm9tQ2hhckNvZGUoaSArIDY1KV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7ICsraikge1xuICAgICAgICBicmRbU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpXS5wdXNoKFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYnJkO1xuICB9O1xuXG4gIGNvbnN0IGJvYXJkID0gbWFrZUJvYXJkKCk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBjb25zdCBjaGVja0ZvckludmFsaWRTcGFjZXNIb3Jpem9udGFsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRDb2x1bW4gLSAxOyBpIDwgc3RhcnRDb2x1bW4gLSAxICsgc2hpcFR5cGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChib2FyZFtzdGFydFJvd11baV0gPT09IFwib1wiIHx8IGkgPj0gMTApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBvdXQgb2YgYm91bmRzXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja0ZvckludmFsaWRTcGFjZXNWZXJ0aWNhbCA9IChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwVHlwZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKFxuICAgICAgICBib2FyZFtTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0Um93LmNoYXJDb2RlQXQoMCkgKyBpKV1bXG4gICAgICAgICAgc3RhcnRDb2x1bW4gLSAxXG4gICAgICAgIF0gPT09IFwib1wiIHx8XG4gICAgICAgIHN0YXJ0Um93LmNoYXJDb2RlQXQoMCkgKyBpID4gNzRcbiAgICAgICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIG91dCBvZiBib3VuZHNcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlSG9yaXpvbnRhbCA9IChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSA9PiB7XG4gICAgaWYgKCFzaGlwcy5pbmNsdWRlcyhzaGlwVHlwZSkpIHtcbiAgICAgIHNoaXBzLnB1c2goc2hpcFR5cGUpO1xuICAgIH1cbiAgICBzaGlwVHlwZS5wbGFjZW1lbnRBcnJheSA9IFtdO1xuICAgIGNoZWNrRm9ySW52YWxpZFNwYWNlc0hvcml6b250YWwoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbik7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0Q29sdW1uIC0gMTsgaSA8IHN0YXJ0Q29sdW1uIC0gMSArIHNoaXBUeXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoaSA+PSAwICYmIGkgPCAxMCkge1xuICAgICAgICBib2FyZFtzdGFydFJvd11baV0gPSBzaGlwVHlwZS5oaXRBcnJheVtpIC0gc3RhcnRDb2x1bW4gKyAxXTtcbiAgICAgICAgc2hpcFR5cGUucGxhY2VtZW50QXJyYXkucHVzaChbc3RhcnRSb3csIGldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VWZXJ0aWNhbCA9IChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSA9PiB7XG4gICAgaWYgKCFzaGlwcy5pbmNsdWRlcyhzaGlwVHlwZSkpIHtcbiAgICAgIHNoaXBzLnB1c2goc2hpcFR5cGUpO1xuICAgIH1cbiAgICBzaGlwVHlwZS5wbGFjZW1lbnRBcnJheSA9IFtdO1xuICAgIGNoZWNrRm9ySW52YWxpZFNwYWNlc1ZlcnRpY2FsKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFR5cGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkgPj0gNjUgJiZcbiAgICAgICAgc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkgPD0gNzRcbiAgICAgICkge1xuICAgICAgICBib2FyZFtTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0Um93LmNoYXJDb2RlQXQoMCkgKyBpKV1bXG4gICAgICAgICAgc3RhcnRDb2x1bW4gLSAxXG4gICAgICAgIF0gPSBzaGlwVHlwZS5oaXRBcnJheVtpXTtcbiAgICAgICAgc2hpcFR5cGUucGxhY2VtZW50QXJyYXkucHVzaChbXG4gICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSksXG4gICAgICAgICAgc3RhcnRDb2x1bW4gLSAxLFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBUeXBlLCBkaXJlY3Rpb24sIHN0YXJ0Um93LCBzdGFydENvbHVtbikgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBwbGFjZUhvcml6b250YWwoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbik7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgcGxhY2VWZXJ0aWNhbChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJvXCIpIHtcbiAgICAgIGJvYXJkW3Jvd11bY29sdW1uIC0gMV0gPSBcInhcIjtcbiAgICAgIHNoaXBzLmZvckVhY2goKHNoaXBwKSA9PiB7XG4gICAgICAgIHNoaXBwLnBsYWNlbWVudEFycmF5LmZvckVhY2goKGNvb3JkcykgPT4ge1xuICAgICAgICAgIGlmIChjb29yZHNbMF0gPT09IHJvdyAmJiBjb29yZHNbMV0gPT09IGNvbHVtbiAtIDEpIHtcbiAgICAgICAgICAgIHNoaXBwLmhpdChzaGlwcC5wbGFjZW1lbnRBcnJheS5pbmRleE9mKGNvb3JkcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoYm9hcmRbcm93XVtjb2x1bW4gLSAxXSA9PT0gXCJ4XCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYm9hcmRbcm93XVtjb2x1bW4gLSAxXSA9IFwibVwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3Vua0FycmF5ID0gW107XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcHApID0+IHtcbiAgICAgIHN1bmtBcnJheS5wdXNoKHNoaXBwLmlzU3VuaygpKTtcbiAgICB9KTtcbiAgICBjb25zdCBlcXVhbHNUcnVlID0gKGN1cnIpID0+IGN1cnIgPT09IHRydWU7XG5cbiAgICByZXR1cm4gc3Vua0FycmF5LmV2ZXJ5KGVxdWFsc1RydWUpO1xuICB9O1xuXG4gIHJldHVybiB7IGJvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHNoaXBzLCBhbGxTaGlwc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IGdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBjb2xvckhpdCB9IGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCB0dXJuID0gZmFsc2U7XG4gIGxldCBjb21wdXRlciA9IGZhbHNlO1xuICBjb25zdCBicmQgPSBnYW1lYm9hcmQoKTtcbiAgY29uc3QgZmlyZWRPbkxvY2F0aW9ucyA9IFtdO1xuXG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBzZXRUdXJuID0gKHZhbHVlKSA9PiAodHVybiA9IHZhbHVlKTtcblxuICBjb25zdCBnZXRDb21wID0gKCkgPT4gY29tcHV0ZXI7XG4gIGNvbnN0IHNldENvbXAgPSAodmFsdWUpID0+IChjb21wdXRlciA9IHZhbHVlKTtcblxuICBjb25zdCBnZXRSYW5kb21Db2x1bW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbWluID0gMTtcbiAgICBjb25zdCBtYXggPSAxMTtcblxuICAgIGNvbnN0IGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbiAgICByZXR1cm4gY29sdW1uO1xuICB9O1xuXG4gIGNvbnN0IGdldFJhbmRvbVJvdyA9ICgpID0+IHtcbiAgICBjb25zdCBtaW4gPSA2NTsgLy8gXCJBXCJcbiAgICBjb25zdCBtYXggPSA3NTsgLy8gXCJKXCJcbiAgICBjb25zdCByb3cgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pXG4gICAgKTtcbiAgICByZXR1cm4gcm93O1xuICB9O1xuXG4gIGNvbnN0IGdldFJhbmRvbU9yaWVudGF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBvcmllbnRhdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcmllbnRhdGlvbnMubGVuZ3RoKV07XG4gIH07XG5cbiAgY29uc3QgY2hlY2tGaXJlZE9uTG9jYXRpb25zID0gKHJvdywgY29sdW1uKSA9PiB7XG4gICAgaWYgKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoZmlyZWRPbkxvY2F0aW9ucykuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW3JvdywgY29sdW1uXSkpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0JvYXJkID0gKHBseXIsIHJvdywgY29sdW1uKSA9PiB7XG4gICAgaWYgKHR1cm4pIHtcbiAgICAgIHBseXIuYnJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuICAgICAgZmlyZWRPbkxvY2F0aW9ucy5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICAgICAgc2V0VHVybihmYWxzZSk7XG4gICAgICBwbHlyLnNldFR1cm4odHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmaXJlZE9uTG9jYXRpb25zO1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKHBseXIpID0+IHtcbiAgICBjb25zdCByb3cgPSBnZXRSYW5kb21Sb3coKTtcbiAgICBjb25zdCBjb2x1bW4gPSBnZXRSYW5kb21Db2x1bW4oKTtcbiAgICBpZiAoY29tcHV0ZXIgJiYgY2hlY2tGaXJlZE9uTG9jYXRpb25zKHJvdywgY29sdW1uKSA9PT0gZmFsc2UpIHtcbiAgICAgIGF0dGFja0JvYXJkKHBseXIsIHJvdywgY29sdW1uKTtcbiAgICAgIGNvbG9ySGl0KFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZmFsc2VkYXRhLWNvb3Jkcz0ke3JvdyArIGNvbHVtbn1dYCksXG4gICAgICAgIHBseXIsXG4gICAgICAgIGAke3JvdyArIGNvbHVtbn1gXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wdXRlckF0dGFjayhwbHlyKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyU2hpcFBsYWNlID0gKHNoaXApID0+IHtcbiAgICB0cnkge1xuICAgICAgYnJkLnBsYWNlU2hpcChcbiAgICAgICAgc2hpcCxcbiAgICAgICAgZ2V0UmFuZG9tT3JpZW50YXRpb24oKSxcbiAgICAgICAgZ2V0UmFuZG9tUm93KCksXG4gICAgICAgIGdldFJhbmRvbUNvbHVtbigpXG4gICAgICApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgY29tcHV0ZXJTaGlwUGxhY2Uoc2hpcCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0VHVybixcbiAgICBzZXRUdXJuLFxuICAgIGdldENvbXAsXG4gICAgc2V0Q29tcCxcblxuICAgIGZpcmVkT25Mb2NhdGlvbnMsXG4gICAgYnJkLFxuICAgIGF0dGFja0JvYXJkLFxuICAgIGNvbXB1dGVyQXR0YWNrLFxuICAgIGNoZWNrRmlyZWRPbkxvY2F0aW9ucyxcbiAgICBjb21wdXRlclNoaXBQbGFjZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5jb25zdCBzaGlwID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBoaXRBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaGl0QXJyYXlbaV0gPSBcIm9cIjtcbiAgfVxuXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcbiAgICBoaXRBcnJheVtudW1dID0gXCJ4XCI7XG4gICAgcmV0dXJuIGhpdEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVucmVhY2hhYmxlLWxvb3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpdEFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoaGl0QXJyYXlbaV0gIT09IFwieFwiKSB7XG4gICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgcmV0dXJuIHsgbGVuZ3RoLCBoaXRBcnJheSwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IHsgbmV3R2FtZUxpc3RlbmVyIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5pbXBvcnQgeyBtYWtlVUkgfSBmcm9tIFwiLi9ET01cIjtcblxubWFrZVVJKCk7XG5uZXdHYW1lTGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==