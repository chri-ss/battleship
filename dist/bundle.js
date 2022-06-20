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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"holtwood\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\nbody {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-family: \"holtwood\", sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n}\n.header .title {\n  font-size: 36px;\n  font-weight: 700;\n  letter-spacing: 3rem;\n  font-family: \"holtwood\", sans-serif;\n}\n\n.ship-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  background-color: #749395;\n  justify-items: center;\n  align-items: center;\n}\n.ship-area img {\n  width: 6rem;\n}\n.ship-area .ship-wrapper,\n.ship-area .attack-wrapper {\n  width: 50%;\n  display: grid;\n  gap: 1rem;\n  justify-items: center;\n  align-items: center;\n  font-size: 32px;\n  text-align: center;\n}\n.ship-area .ship-wrapper {\n  grid-column: 1/2;\n}\n.ship-area .attack-wrapper {\n  grid-column: 2/3;\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n}\n.board-area .board-title {\n  grid-row: 1/2;\n  align-self: end;\n  font-size: 32px;\n  font-weight: 700;\n}\n.board-area .new-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  height: 80%;\n  aspect-ratio: 1/1;\n  grid-row: 2/3;\n}\n.board-area .grid-tile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  border: 2px solid #324452;\n  background-size: cover;\n  color: rgb(0, 0, 0);\n}\n.board-area .shadow {\n  background: rgb(50, 68, 82) !important;\n}\n.board-area .shadow-red {\n  background: rgb(204, 56, 56) !important;\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #afbcc0;\n  color: #324452;\n  padding: 3rem;\n  grid-column: 1/3;\n  width: 30%;\n  height: 50%;\n  border: 2px solid #324452;\n  border-radius: 10px;\n  font-size: 32px;\n  gap: 2rem;\n}\n\nbutton {\n  width: 10rem;\n  border: none;\n  border-radius: 10px;\n  background-color: #afbcc0;\n  font-size: 18px;\n  border: 2px solid transparent;\n}\n\nbutton:hover {\n  background-color: #324452;\n  color: #fff;\n  border: 2px solid #fff;\n}\n\nbutton:active {\n  background-color: #749395;\n  color: #324452;\n}\n\nbutton:disabled {\n  background-color: #afbcc0;\n  color: #6f808d;\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,+DAAA;EACA,gBAAA;EACA,kBAAA;AACF;AAEA;EACE,aAAA;EACA,YAAA;EACA,sBAAA;EACA,mCAAA;AAAF;;AAGA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,+BAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,qBAAA;EACA,yBAAA;EACA,WAAA;AAAF;AAEE;EACE,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,mCAAA;AAAJ;;AAIA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;AADF;AAGE;EACE,WAAA;AADJ;AAIE;;EAEE,UAAA;EACA,aAAA;EACA,SAAA;EACA,qBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AAFJ;AAKE;EACE,gBAAA;AAHJ;AAME;EACE,gBAAA;AAJJ;;AAQA;EACE,aAAA;EACA,2DAAA;EACA,4BAAA;EACA,yBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gCAAA;AALF;AAOE;EACE,aAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;AALJ;AAQE;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EAEA,WAAA;EACA,iBAAA;EACA,aAAA;AAPJ;AAUE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;EACA,sBAAA;EACA,mBAAA;AARJ;AAWE;EACE,sCAAA;AATJ;AAYE;EACE,uCAAA;AAVJ;;AAcA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,gBAAA;EACA,UAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;AAXF;;AAcA;EACE,YAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;EACA,6BAAA;AAXF;;AAcA;EACE,yBAAA;EACA,WAAA;EACA,sBAAA;AAXF;;AAcA;EACE,yBAAA;EACA,cAAA;AAXF;;AAcA;EACE,yBAAA;EACA,cAAA;AAXF","sourcesContent":["@font-face {\n  font-family: \"holtwood\";\n  src: url(\"./fonts/HoltwoodOneSC-Regular.ttf\") format(\"truetype\");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  box-sizing: border-box;\n  font-family: \"holtwood\", sans-serif;\n}\n\n#content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: 2fr 8fr 5fr;\n}\n\n.header {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #324452;\n  color: #fff;\n\n  .title {\n    font-size: 36px;\n    font-weight: 700;\n    letter-spacing: 3rem;\n    font-family: \"holtwood\", sans-serif;\n  }\n}\n\n.ship-area {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  background-color: #749395;\n  justify-items: center;\n  align-items: center;\n\n  img {\n    width: 6rem;\n  }\n\n  .ship-wrapper,\n  .attack-wrapper {\n    width: 50%;\n    display: grid;\n    gap: 1rem;\n    justify-items: center;\n    align-items: center;\n    font-size: 32px;\n    text-align: center;\n  }\n\n  .ship-wrapper {\n    grid-column: 1/2;\n  }\n\n  .attack-wrapper {\n    grid-column: 2/3;\n  }\n}\n\n.board-area {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-template-rows: 1fr 10fr;\n  background-color: #afbcc0;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 2px solid #324452;\n\n  .board-title {\n    grid-row: 1/2;\n    align-self: end;\n    font-size: 32px;\n    font-weight: 700;\n  }\n\n  .new-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    // border: 1px solid #324452;\n    height: 80%;\n    aspect-ratio: 1/1;\n    grid-row: 2/3;\n  }\n\n  .grid-tile {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border: 2px solid #324452;\n    background-size: cover;\n    color: rgba(0, 0, 0, 1);\n  }\n\n  .shadow {\n    background: rgba(50, 68, 82, 1) !important;\n  }\n\n  .shadow-red {\n    background: rgb(204, 56, 56, 1) !important;\n  }\n}\n\n.modal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #afbcc0;\n  color: #324452;\n  padding: 3rem;\n  grid-column: 1/3;\n  width: 30%;\n  height: 50%;\n  border: 2px solid #324452;\n  border-radius: 10px;\n  font-size: 32px;\n  gap: 2rem;\n}\n\nbutton {\n  width: 10rem;\n  border: none;\n  border-radius: 10px;\n  background-color: #afbcc0;\n  font-size: 18px;\n  border: 2px solid transparent;\n}\n\nbutton:hover {\n  background-color: #324452;\n  color: #fff;\n  border: 2px solid #fff;\n}\n\nbutton:active {\n  background-color: #749395;\n  color: #324452;\n}\n\nbutton:disabled {\n  background-color: #afbcc0;\n  color: #6f808d;\n}\n"],"sourceRoot":""}]);
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
  if (otherPlyr) modal.textContent = `${otherPlyr.name} win!`;
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
  document.body.addEventListener("keydown", orientationHandler);
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
  if (plyr.name === "you") {
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
  p1.name = "you";
  p2.name = "computer";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCcUI7QUFDQztBQUNtQjs7QUFFVjs7QUFFL0IsNENBQU07QUFDTixzREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ib2x0d29vZE9uZVNDLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImhvbHR3b29kXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob2x0d29vZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciA1ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NDUyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5oZWFkZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaG9sdHdvb2RcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2hpcC1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5Mzk1O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNoaXAtYXJlYSBpbWcge1xcbiAgd2lkdGg6IDZyZW07XFxufVxcbi5zaGlwLWFyZWEgLnNoaXAtd3JhcHBlcixcXG4uc2hpcC1hcmVhIC5hdHRhY2std3JhcHBlciB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMXJlbTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zaGlwLWFyZWEgLnNoaXAtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4uc2hpcC1hcmVhIC5hdHRhY2std3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uYm9hcmQtYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MDBweCwgMWZyKSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmNjMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMyNDQ1MjtcXG59XFxuLmJvYXJkLWFyZWEgLmJvYXJkLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uYm9hcmQtYXJlYSAubmV3LWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGdyaWQtcm93OiAyLzM7XFxufVxcbi5ib2FyZC1hcmVhIC5ncmlkLXRpbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzMyNDQ1MjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG4uYm9hcmQtYXJlYSAuc2hhZG93IHtcXG4gIGJhY2tncm91bmQ6IHJnYig1MCwgNjgsIDgyKSAhaW1wb3J0YW50O1xcbn1cXG4uYm9hcmQtYXJlYSAuc2hhZG93LXJlZCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCA1NiwgNTYpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNhZmJjYzA7XFxuICBjb2xvcjogIzMyNDQ1MjtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzMyNDQ1MjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMTByZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmNjMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNDQ1MjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ5Mzk1O1xcbiAgY29sb3I6ICMzMjQ0NTI7XFxufVxcblxcbmJ1dHRvbjpkaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgY29sb3I6ICM2ZjgwOGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQUE7RUFDQSwrREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFBRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFJRTs7RUFFRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBTEY7QUFPRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEo7QUFRRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQVBKO0FBVUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUko7QUFXRTtFQUNFLHNDQUFBO0FBVEo7QUFZRTtFQUNFLHVDQUFBO0FBVko7O0FBY0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFYRjs7QUFjQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQVhGOztBQWNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFYRjs7QUFjQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQVhGOztBQWNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBWEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImhvbHR3b29kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL0hvbHR3b29kT25lU0MtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJob2x0d29vZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmciA1ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0NDUyO1xcbiAgY29sb3I6ICNmZmY7XFxuXFxuICAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAzcmVtO1xcbiAgICBmb250LWZhbWlseTogXFxcImhvbHR3b29kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIH1cXG59XFxuXFxuLnNoaXAtYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0OTM5NTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBpbWcge1xcbiAgICB3aWR0aDogNnJlbTtcXG4gIH1cXG5cXG4gIC5zaGlwLXdyYXBwZXIsXFxuICAuYXR0YWNrLXdyYXBwZXIge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc2hpcC13cmFwcGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIH1cXG5cXG4gIC5hdHRhY2std3JhcHBlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICB9XFxufVxcblxcbi5ib2FyZC1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZiY2MwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzI0NDUyO1xcblxcbiAgLmJvYXJkLXRpdGxlIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuICAubmV3LWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMzI0NDUyO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICB9XFxuXFxuICAuZ3JpZC10aWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ0NTI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xcbiAgfVxcblxcbiAgLnNoYWRvdyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDY4LCA4MiwgMSkgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5zaGFkb3ctcmVkIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIwNCwgNTYsIDU2LCAxKSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjYWZiY2MwO1xcbiAgY29sb3I6ICMzMjQ0NTI7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzMjQ0NTI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmJjYzA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjQ0NTI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0OTM5NTtcXG4gIGNvbG9yOiAjMzI0NDUyO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmNjMDtcXG4gIGNvbG9yOiAjNmY4MDhkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHRpbGUgZnJvbSBcIi4vaW1hZ2VzL3RpbGUwNDgucG5nXCI7XG5pbXBvcnQgdXBBcnJvdyBmcm9tIFwiLi9pbWFnZXMvYXJyb3ctdXAtY2lyY2xlLnN2Z1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgYm9hcmRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3Qgb3JpZW50YXRpb24gPSB7XG4gIGN1cnJlbnQ6IFwiaG9yaXpvbnRhbFwiLFxuICBwcmV2aW91czogXCJ2ZXJ0aWNhbFwiLFxuICBzd2FwKCkge1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wcmV2aW91cztcbiAgICB0aGlzLnByZXZpb3VzID0gdGVtcDtcbiAgfSxcbn07XG5sZXQgb3JpZ2luO1xubGV0IGN1cnJlbnRTaGlwO1xuXG5jb25zdCBtYWtlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwXCI7XG4gIGNvbnN0IHN0YXJ0R2FtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0R2FtZS5jbGFzc0xpc3QuYWRkKFwic3RhcnQtZ2FtZVwiKTtcbiAgc3RhcnRHYW1lLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChzdGFydEdhbWUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5jb25zdCBtYWtlU2hpcEFyZWEgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hpcEFyZWEuY2xhc3NMaXN0LmFkZChcInNoaXAtYXJlYVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzaGlwQXJlYSk7XG59O1xuXG5jb25zdCBtYWtlQm9hcmRUaXRsZSA9IChwbHlyKSA9PiB7XG4gIGNvbnN0IGJvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZC10aXRsZVwiKTtcbiAgaWYgKHBseXIuZ2V0Q29tcCgpID09PSB0cnVlKSB7XG4gICAgYm9hcmRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29tcHV0ZXIncyBCb2FyZFwiO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSBcIllvdXIgQm9hcmRcIjtcbiAgfVxuICBib2FyZEFyZWEuYXBwZW5kQ2hpbGQoYm9hcmRUaXRsZSk7XG59O1xuXG5jb25zdCBtYWtlQm9hcmQgPSAocGx5cikgPT4ge1xuICBtYWtlQm9hcmRUaXRsZShwbHlyKTtcbiAgY29uc3QgbmV3Qm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdCb2FyZC5jbGFzc0xpc3QuYWRkKFwibmV3LWJvYXJkXCIsIGAke3BseXIuZ2V0Q29tcCgpfWApO1xuICBPYmplY3QuZW50cmllcyhwbHlyLmJyZC5ib2FyZCkuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBsZXQgY29sdW1uID0gMTtcbiAgICBlbnRyeVsxXS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICBjb25zdCBncmlkVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncmlkVGlsZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC10aWxlXCIpO1xuICAgICAgZ3JpZFRpbGUuc2V0QXR0cmlidXRlKGAke3BseXIuZ2V0Q29tcCgpfWRhdGEtY29vcmRzYCwgZW50cnlbMF0gKyBjb2x1bW4pO1xuICAgICAgY29sdW1uKys7XG4gICAgICBuZXdCb2FyZC5hcHBlbmRDaGlsZChncmlkVGlsZSk7XG4gICAgICBncmlkVGlsZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGlsZX0pYDtcbiAgICB9KTtcbiAgfSk7XG4gIGJvYXJkQXJlYS5hcHBlbmRDaGlsZChuZXdCb2FyZCk7XG59O1xuXG5jb25zdCB1cGRhdGVCb2FyZCA9IChwbHlyKSA9PiB7XG4gIE9iamVjdC5lbnRyaWVzKHBseXIuYnJkLmJvYXJkKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGxldCBjb2x1bW4gPSAxO1xuICAgIGVudHJ5WzFdLmZvckVhY2goKGkpID0+IHtcbiAgICAgIGlmIChpID09PSBcIm9cIikge1xuICAgICAgICBjb25zdCBncmlkVGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFske3BseXIuZ2V0Q29tcCgpfWRhdGEtY29vcmRzPVwiJHtlbnRyeVswXSArIGNvbHVtbn1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGdyaWRUaWxlLnN0eWxlLmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgICB9XG4gICAgICBjb2x1bW4rKztcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBtYWtlQm9hcmRBcmVhID0gKCkgPT4ge1xuICBib2FyZEFyZWEuY2xhc3NMaXN0LmFkZChcImJvYXJkLWFyZWFcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRBcmVhKTtcbn07XG5cbmNvbnN0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gIHdoaWxlIChib2FyZEFyZWEuZmlyc3RDaGlsZCkge1xuICAgIGJvYXJkQXJlYS5yZW1vdmVDaGlsZChib2FyZEFyZWEubGFzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJTaGlwQXJlYSA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtYXJlYVwiKTtcbiAgd2hpbGUgKHNoaXBBcmVhLmZpcnN0Q2hpbGQpIHtcbiAgICBzaGlwQXJlYS5yZW1vdmVDaGlsZChzaGlwQXJlYS5sYXN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhck1vZGFsID0gKCkgPT4ge1xuICBjb250ZW50LnJlbW92ZUNoaWxkKG1vZGFsKTtcbn07XG5cbmNvbnN0IGNvbG9ySGl0ID0gKGdyaWRUaWxlLCBwbHlyLCBjb29yZHMpID0+IHtcbiAgaWYgKHBseXIuYnJkLmJvYXJkW2Nvb3Jkc1swXV1bY29vcmRzLnNsaWNlKDEpIC0gMV0gPT09IFwieFwiKSB7XG4gICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gIH0gZWxzZSB7XG4gICAgZ3JpZFRpbGUuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmx1ZVwiO1xuICB9XG59O1xuXG5jb25zdCBtYWtlUmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2V0LWJ1dHRvblwiKTtcbiAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW4/XCI7XG4gIG1vZGFsLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXaW5uZXIgPSAob3RoZXJQbHlyKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWFyZWFcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgaWYgKG90aGVyUGx5cikgbW9kYWwudGV4dENvbnRlbnQgPSBgJHtvdGhlclBseXIubmFtZX0gd2luIWA7XG4gIGNsZWFyU2hpcEFyZWEoKTtcbiAgc2hpcEFyZWEuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICBtYWtlUmVzZXRCdXR0b24oKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVNoaXBTaGFkb3cgPSAobywgYWN0aW9uLCBDU1NjbGFzcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbHVtbiA9IG9yaWdpbi5nZXRBdHRyaWJ1dGUoXCJmYWxzZWRhdGEtY29vcmRzXCIpLnNsaWNlKDEpO1xuICAgIGNvbnN0IHJvdyA9IG9yaWdpbi5nZXRBdHRyaWJ1dGUoXCJmYWxzZWRhdGEtY29vcmRzXCIpWzBdO1xuICAgIGlmIChvID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IHBhcnNlSW50KGNvbHVtbikgKyBjdXJyZW50U2hpcC5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCBkaXZUb01hcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZmFsc2VkYXRhLWNvb3Jkcz1cIiR7cm93ICsgaX1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiYWRkXCIpIHtcbiAgICAgICAgICBkaXZUb01hcmsuY2xhc3NMaXN0LmFkZChDU1NjbGFzcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJlbW92ZVwiKSB7XG4gICAgICAgICAgZGl2VG9NYXJrLmNsYXNzTGlzdC5yZW1vdmUoQ1NTY2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gcm93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGkgPCByb3cuY2hhckNvZGVBdCgwKSArIGN1cnJlbnRTaGlwLmxlbmd0aDtcbiAgICAgICAgKytpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGl2VG9NYXJrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2ZhbHNlZGF0YS1jb29yZHM9XCIke1N0cmluZy5mcm9tQ2hhckNvZGUoaSkgKyBjb2x1bW59XCJdYFxuICAgICAgICApO1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImFkZFwiKSB7XG4gICAgICAgICAgZGl2VG9NYXJrLmNsYXNzTGlzdC5hZGQoQ1NTY2xhc3MpO1xuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgICAgIGRpdlRvTWFyay5jbGFzc0xpc3QucmVtb3ZlKENTU2NsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBvcmllbnRhdGlvbkhhbmRsZXIgPSAoZSkgPT4ge1xuICBpZiAoZS5jb2RlID09PSBcIktleVRcIikge1xuICAgIHRvZ2dsZVNoaXBTaGFkb3cob3JpZW50YXRpb24uY3VycmVudCwgXCJyZW1vdmVcIiwgXCJzaGFkb3dcIik7XG4gICAgb3JpZW50YXRpb24uc3dhcCgpO1xuICAgIHRvZ2dsZVNoaXBTaGFkb3cob3JpZW50YXRpb24uY3VycmVudCwgXCJhZGRcIiwgXCJzaGFkb3dcIik7XG4gIH1cbn07XG5cbmNvbnN0IG9yaWVudGF0aW9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb3JpZW50YXRpb25IYW5kbGVyKTtcbn07XG5cbmNvbnN0IHNoaXBQbGFjZUhvdmVyID0gKHNoaXBzKSA9PiB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgYm9hcmRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKSkge1xuICAgICAgaWYgKHNoaXBzW2NvdW50ZXJdLnBsYWNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgICBvcmlnaW4gPSBlLnRhcmdldDtcbiAgICAgIGN1cnJlbnRTaGlwID0gc2hpcHNbY291bnRlcl07XG4gICAgICB0b2dnbGVTaGlwU2hhZG93KG9yaWVudGF0aW9uLmN1cnJlbnQsIFwiYWRkXCIsIFwic2hhZG93XCIpO1xuICAgIH1cbiAgfSk7XG4gIGJvYXJkQXJlYS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKSkge1xuICAgICAgdG9nZ2xlU2hpcFNoYWRvdyhvcmllbnRhdGlvbi5jdXJyZW50LCBcInJlbW92ZVwiLCBcInNoYWRvd1wiKTtcbiAgICB9XG4gIH0pO1xuICBvcmllbnRhdGlvbkxpc3RlbmVyKCk7XG59O1xuXG5jb25zdCByZW1vdmVSZXNpZHVhbFJlZCA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2ZhbHNlZGF0YS1jb29yZHNdXCIpO1xuICBhbGxUaWxlcy5mb3JFYWNoKCh0bCkgPT4ge1xuICAgIGlmICh0bC5jbGFzc0xpc3RbMV0gPT09IFwic2hhZG93LXJlZFwiKSB7XG4gICAgICB0bC5jbGFzc0xpc3QucmVtb3ZlKFwic2hhZG93LXJlZFwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWFrZVNoaXBQbGFjZVByb21wdCA9IChzaGlwKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWFyZWFcIik7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXdyYXBwZXJcIik7XG4gIGNvbnN0IHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgdXAuc3JjID0gdXBBcnJvdztcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgU2hpcHMgaGVyZVxcbiBQcmVzcyAndCcgdG8gcm90YXRlXCI7XG4gIGNvbnN0IHBsYWNpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjaW5nLmNsYXNzTGlzdC5hZGQoXCJwbGFjaW5nXCIpO1xuICBwbGFjaW5nLnRleHRDb250ZW50ID0gYFBsYWNpbmc6ICR7c2hpcH1gO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHVwKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChwbGFjaW5nKTtcbiAgc2hpcEFyZWEuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59O1xuXG5jb25zdCB1cGRhdGVTaGlwUHJvbXB0ID0gKHNoaXApID0+IHtcbiAgY29uc3QgcGxhY2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2luZ1wiKTtcbiAgcGxhY2luZy50ZXh0Q29udGVudCA9IGBQbGFjaW5nOiAke3NoaXB9YDtcbn07XG5cbmNvbnN0IG1ha2VBdHRhY2tQcm9tcHQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLWFyZWFcIik7XG4gIGNvbnN0IGF0dGFja1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhdHRhY2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhdHRhY2std3JhcHBlclwiKTtcbiAgY29uc3QgdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB1cC5zcmMgPSB1cEFycm93O1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQXR0YWNrIHlvdXIgb3Bwb25lbnQgaGVyZSFcIjtcbiAgYXR0YWNrV3JhcHBlci5hcHBlbmRDaGlsZCh1cCk7XG4gIGF0dGFja1dyYXBwZXIuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gIHNoaXBBcmVhLmFwcGVuZENoaWxkKGF0dGFja1dyYXBwZXIpO1xufTtcblxuY29uc3QgbWFrZVVJID0gKCkgPT4ge1xuICBtYWtlSGVhZGVyKCk7XG4gIG1ha2VCb2FyZEFyZWEoKTtcbiAgbWFrZVNoaXBBcmVhKCk7XG59O1xuXG5leHBvcnQge1xuICBtYWtlVUksXG4gIG1ha2VCb2FyZCxcbiAgdXBkYXRlQm9hcmQsXG4gIGNsZWFyQm9hcmQsXG4gIGNsZWFyTW9kYWwsXG4gIGNvbG9ySGl0LFxuICBkaXNwbGF5V2lubmVyLFxuICBzaGlwUGxhY2VIb3ZlcixcbiAgdG9nZ2xlU2hpcFNoYWRvdyxcbiAgb3JpZW50YXRpb24sXG4gIHJlbW92ZVJlc2lkdWFsUmVkLFxuICBtYWtlU2hpcFBsYWNlUHJvbXB0LFxuICB1cGRhdGVTaGlwUHJvbXB0LFxuICBtYWtlQXR0YWNrUHJvbXB0LFxuICBjbGVhclNoaXBBcmVhLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHtcbiAgbWFrZUJvYXJkLFxuICB1cGRhdGVCb2FyZCxcbiAgY29sb3JIaXQsXG4gIGNsZWFyQm9hcmQsXG4gIGRpc3BsYXlXaW5uZXIsXG4gIGNsZWFyTW9kYWwsXG4gIHNoaXBQbGFjZUhvdmVyLFxuICB0b2dnbGVTaGlwU2hhZG93LFxuICBvcmllbnRhdGlvbixcbiAgcmVtb3ZlUmVzaWR1YWxSZWQsXG4gIG1ha2VTaGlwUGxhY2VQcm9tcHQsXG4gIHVwZGF0ZVNoaXBQcm9tcHQsXG4gIGNsZWFyU2hpcEFyZWEsXG4gIG1ha2VBdHRhY2tQcm9tcHQsXG59IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXBzXCI7XG5cbmxldCBwMTtcbmxldCBwMjtcblxuY29uc3QgcGxhY2VTaGlwTGlzdGVuZXIgPSAoc2hpcHMsIHBseXIsIG90aGVyUGx5cikgPT4ge1xuICBzaGlwUGxhY2VIb3ZlcihzaGlwcywgb3JpZW50YXRpb24pO1xuICBjb25zdCBib2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFyZWFcIik7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgbWFrZVNoaXBQbGFjZVByb21wdChzaGlwc1tjb3VudGVyXS5uYW1lKTtcbiAgYm9hcmRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZS50YXJnZXQuaGFzQXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKSAmJiBjb3VudGVyIDwgNSkge1xuICAgICAgICBsZXQgY29vcmRzID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZmFsc2VkYXRhLWNvb3Jkc1wiKTtcbiAgICAgICAgY29vcmRzID0gW2Nvb3Jkc1swXSwgY29vcmRzLnNsaWNlKDEpXTtcbiAgICAgICAgcGx5ci5icmQucGxhY2VTaGlwKFxuICAgICAgICAgIHNoaXBzW2NvdW50ZXJdLFxuICAgICAgICAgIG9yaWVudGF0aW9uLmN1cnJlbnQsXG4gICAgICAgICAgY29vcmRzWzBdLFxuICAgICAgICAgIGNvb3Jkc1sxXVxuICAgICAgICApO1xuICAgICAgICBzaGlwc1tjb3VudGVyXS5wbGFjZWQgPSB0cnVlO1xuICAgICAgICB1cGRhdGVCb2FyZChwbHlyKTtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgICBpZiAoY291bnRlciA+PSA1KSB7XG4gICAgICAgICAgY2xlYXJTaGlwQXJlYSgpO1xuICAgICAgICAgIGFkZEF0dGFja0xpc3RlbmVyKHBseXIsIG90aGVyUGx5cik7XG4gICAgICAgICAgbWFrZUF0dGFja1Byb21wdCgpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZVNoaXBQcm9tcHQoc2hpcHNbY291bnRlcl0ubmFtZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zb2xlLmxvZyhcImFhXCIpO1xuICAgICAgdG9nZ2xlU2hpcFNoYWRvdyhvcmllbnRhdGlvbi5jdXJyZW50LCBcImFkZFwiLCBcInNoYWRvdy1yZWRcIik7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICB0b2dnbGVTaGlwU2hhZG93LFxuICAgICAgICAxMDAsXG4gICAgICAgIG9yaWVudGF0aW9uLmN1cnJlbnQsXG4gICAgICAgIFwicmVtb3ZlXCIsXG4gICAgICAgIFwic2hhZG93LXJlZFwiXG4gICAgICApO1xuICAgICAgc2V0VGltZW91dChyZW1vdmVSZXNpZHVhbFJlZCwgMTAwKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcmVzZXRHYW1lTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldC1idXR0b25cIik7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJCb2FyZCgpO1xuICAgIGNsZWFyU2hpcEFyZWEoKTtcbiAgICByZW1vdmVBdHRhY2tMaXN0ZW5lcigpO1xuICAgIGluaXRpYWxpemVHYW1lKCk7XG4gICAgY2xlYXJNb2RhbCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IHRlc3RGb3JXaW5uZXIgPSAocGx5ciwgb3RoZXJQbHlyKSA9PiB7XG4gIGlmIChwbHlyLmJyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGRpc3BsYXlXaW5uZXIob3RoZXJQbHlyKTtcbiAgICByZXNldEdhbWVMaXN0ZW5lcigpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhdHRhY2tMaXN0ZW5lcihlKSB7XG4gIGNvbnN0IGNvb3Jkc1RvQXR0YWNrID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJ1ZWRhdGEtY29vcmRzXCIpO1xuICBpZiAoXG4gICAgcDEuZ2V0VHVybigpICYmXG4gICAgZS50YXJnZXQuaGFzQXR0cmlidXRlKFwidHJ1ZWRhdGEtY29vcmRzXCIpICYmXG4gICAgcDEuY2hlY2tGaXJlZE9uTG9jYXRpb25zKGNvb3Jkc1RvQXR0YWNrWzBdLCBjb29yZHNUb0F0dGFjay5zbGljZSgxKSkgPT09XG4gICAgICBmYWxzZVxuICApIHtcbiAgICBwMS5hdHRhY2tCb2FyZChwMiwgY29vcmRzVG9BdHRhY2tbMF0sIGNvb3Jkc1RvQXR0YWNrLnNsaWNlKDEpKTtcbiAgICBjb2xvckhpdChlLnRhcmdldCwgcDIsIGNvb3Jkc1RvQXR0YWNrKTtcbiAgICB0ZXN0Rm9yV2lubmVyKHAyLCBwMSk7XG4gICAgcDIuY29tcHV0ZXJBdHRhY2socDEpO1xuICAgIHRlc3RGb3JXaW5uZXIocDEsIHAyKTtcbiAgfVxufVxuXG5jb25zdCBhZGRBdHRhY2tMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1hcmVhXCIpO1xuICBib2FyZEFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja0xpc3RlbmVyKTtcbn07XG5cbmNvbnN0IHJlbW92ZUF0dGFja0xpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBib2FyZEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWFyZWFcIik7XG4gIGJvYXJkQXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrTGlzdGVuZXIpO1xufTtcblxuY29uc3QgcG9wdWxhdGVCb2FyZCA9IChwbHlyLCBvdGhlclBseXIpID0+IHtcbiAgY29uc3QgY2FycmllciA9IHNoaXAoNSk7XG4gIGNhcnJpZXIubmFtZSA9IFwiY2FycmllclwiO1xuICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcCg0KTtcbiAgYmF0dGxlc2hpcC5uYW1lID0gXCJiYXR0bGVzaGlwXCI7XG4gIGNvbnN0IGNydWlzZXIgPSBzaGlwKDMpO1xuICBjcnVpc2VyLm5hbWUgPSBcImNydWlzZXJcIjtcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgzKTtcbiAgc3VibWFyaW5lLm5hbWUgPSBcInN1Ym1hcmluZVwiO1xuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKDIpO1xuICBkZXN0cm95ZXIubmFtZSA9IFwiZGVzdHJveWVyXCI7XG4gIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcbiAgaWYgKHBseXIubmFtZSA9PT0gXCJ5b3VcIikge1xuICAgIHBsYWNlU2hpcExpc3RlbmVyKHNoaXBzLCBwbHlyLCBvdGhlclBseXIpO1xuICB9IGVsc2Uge1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXBwKSA9PiB7XG4gICAgICBwbHlyLmNvbXB1dGVyU2hpcFBsYWNlKHNoaXBwKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgcnVuR2FtZSA9ICgpID0+IHtcbiAgcG9wdWxhdGVCb2FyZChwMSwgcDIpO1xuICBwb3B1bGF0ZUJvYXJkKHAyLCBwMSk7XG59O1xuXG5jb25zdCBpbml0aWFsaXplR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZ2FtZVwiKTtcbiAgcDEgPSBwbGF5ZXIoKTtcbiAgcDIgPSBwbGF5ZXIoKTtcbiAgcDEubmFtZSA9IFwieW91XCI7XG4gIHAyLm5hbWUgPSBcImNvbXB1dGVyXCI7XG4gIHAxLnNldFR1cm4odHJ1ZSk7XG4gIHAyLnNldENvbXAodHJ1ZSk7XG4gIG1ha2VCb2FyZChwMSk7XG4gIG1ha2VCb2FyZChwMik7XG4gIG5ld0dhbWVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBydW5HYW1lKHAxLCBwMik7XG59O1xuXG5jb25zdCBuZXdHYW1lTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWdhbWVcIik7XG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRpYWxpemVHYW1lKTtcbn07XG5cbmV4cG9ydCB7IG5ld0dhbWVMaXN0ZW5lciwgb3JpZW50YXRpb24gfTtcbiIsImltcG9ydCB7IHNoaXAgfSBmcm9tIFwiLi9zaGlwc1wiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBtYWtlQm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYnJkID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICBicmRbU3RyaW5nLmZyb21DaGFyQ29kZShpICsgNjUpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgKytqKSB7XG4gICAgICAgIGJyZFtTdHJpbmcuZnJvbUNoYXJDb2RlKGkgKyA2NSldLnB1c2goXCJcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBicmQ7XG4gIH07XG5cbiAgY29uc3QgYm9hcmQgPSBtYWtlQm9hcmQoKTtcblxuICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGNoZWNrRm9ySW52YWxpZFNwYWNlc0hvcml6b250YWwgPSAoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbikgPT4ge1xuICAgIGZvciAobGV0IGkgPSBzdGFydENvbHVtbiAtIDE7IGkgPCBzdGFydENvbHVtbiAtIDEgKyBzaGlwVHlwZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGJvYXJkW3N0YXJ0Um93XVtpXSA9PT0gXCJvXCIgfHwgaSA+PSAxMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIG91dCBvZiBib3VuZHNcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9ySW52YWxpZFNwYWNlc1ZlcnRpY2FsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBUeXBlLmxlbmd0aDsgKytpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGJvYXJkW1N0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkpXVtcbiAgICAgICAgICBzdGFydENvbHVtbiAtIDFcbiAgICAgICAgXSA9PT0gXCJvXCIgfHxcbiAgICAgICAgc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkgPiA3NFxuICAgICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgb3V0IG9mIGJvdW5kc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxhY2VIb3Jpem9udGFsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBpZiAoIXNoaXBzLmluY2x1ZGVzKHNoaXBUeXBlKSkge1xuICAgICAgc2hpcHMucHVzaChzaGlwVHlwZSk7XG4gICAgfVxuICAgIHNoaXBUeXBlLnBsYWNlbWVudEFycmF5ID0gW107XG4gICAgY2hlY2tGb3JJbnZhbGlkU3BhY2VzSG9yaXpvbnRhbChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKTtcbiAgICBmb3IgKGxldCBpID0gc3RhcnRDb2x1bW4gLSAxOyBpIDwgc3RhcnRDb2x1bW4gLSAxICsgc2hpcFR5cGUubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChpID49IDAgJiYgaSA8IDEwKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0Um93XVtpXSA9IHNoaXBUeXBlLmhpdEFycmF5W2kgLSBzdGFydENvbHVtbiArIDFdO1xuICAgICAgICBzaGlwVHlwZS5wbGFjZW1lbnRBcnJheS5wdXNoKFtzdGFydFJvdywgaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVZlcnRpY2FsID0gKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pID0+IHtcbiAgICBpZiAoIXNoaXBzLmluY2x1ZGVzKHNoaXBUeXBlKSkge1xuICAgICAgc2hpcHMucHVzaChzaGlwVHlwZSk7XG4gICAgfVxuICAgIHNoaXBUeXBlLnBsYWNlbWVudEFycmF5ID0gW107XG4gICAgY2hlY2tGb3JJbnZhbGlkU3BhY2VzVmVydGljYWwoc2hpcFR5cGUsIHN0YXJ0Um93LCBzdGFydENvbHVtbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwVHlwZS5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKFxuICAgICAgICBzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSA+PSA2NSAmJlxuICAgICAgICBzdGFydFJvdy5jaGFyQ29kZUF0KDApICsgaSA8PSA3NFxuICAgICAgKSB7XG4gICAgICAgIGJvYXJkW1N0cmluZy5mcm9tQ2hhckNvZGUoc3RhcnRSb3cuY2hhckNvZGVBdCgwKSArIGkpXVtcbiAgICAgICAgICBzdGFydENvbHVtbiAtIDFcbiAgICAgICAgXSA9IHNoaXBUeXBlLmhpdEFycmF5W2ldO1xuICAgICAgICBzaGlwVHlwZS5wbGFjZW1lbnRBcnJheS5wdXNoKFtcbiAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKHN0YXJ0Um93LmNoYXJDb2RlQXQoMCkgKyBpKSxcbiAgICAgICAgICBzdGFydENvbHVtbiAtIDEsXG4gICAgICAgIF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcFR5cGUsIGRpcmVjdGlvbiwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHBsYWNlSG9yaXpvbnRhbChzaGlwVHlwZSwgc3RhcnRSb3csIHN0YXJ0Q29sdW1uKTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBwbGFjZVZlcnRpY2FsKHNoaXBUeXBlLCBzdGFydFJvdywgc3RhcnRDb2x1bW4pO1xuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChyb3csIGNvbHVtbikgPT4ge1xuICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbiAtIDFdID09PSBcIm9cIikge1xuICAgICAgYm9hcmRbcm93XVtjb2x1bW4gLSAxXSA9IFwieFwiO1xuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcHApID0+IHtcbiAgICAgICAgc2hpcHAucGxhY2VtZW50QXJyYXkuZm9yRWFjaCgoY29vcmRzKSA9PiB7XG4gICAgICAgICAgaWYgKGNvb3Jkc1swXSA9PT0gcm93ICYmIGNvb3Jkc1sxXSA9PT0gY29sdW1uIC0gMSkge1xuICAgICAgICAgICAgc2hpcHAuaGl0KHNoaXBwLnBsYWNlbWVudEFycmF5LmluZGV4T2YoY29vcmRzKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChib2FyZFtyb3ddW2NvbHVtbiAtIDFdID09PSBcInhcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBib2FyZFtyb3ddW2NvbHVtbiAtIDFdID0gXCJtXCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzdW5rQXJyYXkgPSBbXTtcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwcCkgPT4ge1xuICAgICAgc3Vua0FycmF5LnB1c2goc2hpcHAuaXNTdW5rKCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGVxdWFsc1RydWUgPSAoY3VycikgPT4gY3VyciA9PT0gdHJ1ZTtcblxuICAgIHJldHVybiBzdW5rQXJyYXkuZXZlcnkoZXF1YWxzVHJ1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYm9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgc2hpcHMsIGFsbFNoaXBzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGNvbG9ySGl0IH0gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgbGV0IHR1cm4gPSBmYWxzZTtcbiAgbGV0IGNvbXB1dGVyID0gZmFsc2U7XG4gIGNvbnN0IGJyZCA9IGdhbWVib2FyZCgpO1xuICBjb25zdCBmaXJlZE9uTG9jYXRpb25zID0gW107XG5cbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHR1cm47XG4gIGNvbnN0IHNldFR1cm4gPSAodmFsdWUpID0+ICh0dXJuID0gdmFsdWUpO1xuXG4gIGNvbnN0IGdldENvbXAgPSAoKSA9PiBjb21wdXRlcjtcbiAgY29uc3Qgc2V0Q29tcCA9ICh2YWx1ZSkgPT4gKGNvbXB1dGVyID0gdmFsdWUpO1xuXG4gIGNvbnN0IGdldFJhbmRvbUNvbHVtbiA9ICgpID0+IHtcbiAgICBjb25zdCBtaW4gPSAxO1xuICAgIGNvbnN0IG1heCA9IDExO1xuXG4gICAgY29uc3QgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tUm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1pbiA9IDY1OyAvLyBcIkFcIlxuICAgIGNvbnN0IG1heCA9IDc1OyAvLyBcIkpcIlxuICAgIGNvbnN0IHJvdyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbilcbiAgICApO1xuICAgIHJldHVybiByb3c7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZG9tT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IG9yaWVudGF0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcbiAgICByZXR1cm4gb3JpZW50YXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9yaWVudGF0aW9ucy5sZW5ndGgpXTtcbiAgfTtcblxuICBjb25zdCBjaGVja0ZpcmVkT25Mb2NhdGlvbnMgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgICBpZiAoXG4gICAgICBKU09OLnN0cmluZ2lmeShmaXJlZE9uTG9jYXRpb25zKS5pbmNsdWRlcyhKU09OLnN0cmluZ2lmeShbcm93LCBjb2x1bW5dKSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrQm9hcmQgPSAocGx5ciwgcm93LCBjb2x1bW4pID0+IHtcbiAgICBpZiAodHVybikge1xuICAgICAgcGx5ci5icmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbik7XG4gICAgICBmaXJlZE9uTG9jYXRpb25zLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICBzZXRUdXJuKGZhbHNlKTtcbiAgICAgIHBseXIuc2V0VHVybih0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpcmVkT25Mb2NhdGlvbnM7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAocGx5cikgPT4ge1xuICAgIGNvbnN0IHJvdyA9IGdldFJhbmRvbVJvdygpO1xuICAgIGNvbnN0IGNvbHVtbiA9IGdldFJhbmRvbUNvbHVtbigpO1xuICAgIGlmIChjb21wdXRlciAmJiBjaGVja0ZpcmVkT25Mb2NhdGlvbnMocm93LCBjb2x1bW4pID09PSBmYWxzZSkge1xuICAgICAgYXR0YWNrQm9hcmQocGx5ciwgcm93LCBjb2x1bW4pO1xuICAgICAgY29sb3JIaXQoXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtmYWxzZWRhdGEtY29vcmRzPSR7cm93ICsgY29sdW1ufV1gKSxcbiAgICAgICAgcGx5cixcbiAgICAgICAgYCR7cm93ICsgY29sdW1ufWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXB1dGVyQXR0YWNrKHBseXIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJTaGlwUGxhY2UgPSAoc2hpcCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBicmQucGxhY2VTaGlwKFxuICAgICAgICBzaGlwLFxuICAgICAgICBnZXRSYW5kb21PcmllbnRhdGlvbigpLFxuICAgICAgICBnZXRSYW5kb21Sb3coKSxcbiAgICAgICAgZ2V0UmFuZG9tQ29sdW1uKClcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb21wdXRlclNoaXBQbGFjZShzaGlwKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUdXJuLFxuICAgIHNldFR1cm4sXG4gICAgZ2V0Q29tcCxcbiAgICBzZXRDb21wLFxuXG4gICAgZmlyZWRPbkxvY2F0aW9ucyxcbiAgICBicmQsXG4gICAgYXR0YWNrQm9hcmQsXG4gICAgY29tcHV0ZXJBdHRhY2ssXG4gICAgY2hlY2tGaXJlZE9uTG9jYXRpb25zLFxuICAgIGNvbXB1dGVyU2hpcFBsYWNlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGhpdEFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBoaXRBcnJheVtpXSA9IFwib1wiO1xuICB9XG5cbiAgY29uc3QgaGl0ID0gKG51bSkgPT4ge1xuICAgIGhpdEFycmF5W251bV0gPSBcInhcIjtcbiAgICByZXR1cm4gaGl0QXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5yZWFjaGFibGUtbG9vcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0QXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChoaXRBcnJheVtpXSAhPT0gXCJ4XCIpIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICByZXR1cm4geyBsZW5ndGgsIGhpdEFycmF5LCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHsgc2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3Jlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgeyBuZXdHYW1lTGlzdGVuZXIgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmltcG9ydCB7IG1ha2VVSSB9IGZyb20gXCIuL0RPTVwiO1xuXG5tYWtlVUkoKTtcbm5ld0dhbWVMaXN0ZW5lcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9