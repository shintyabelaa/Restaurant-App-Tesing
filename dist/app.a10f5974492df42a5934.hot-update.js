"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/images/heros/hero-image_1.jpg */ "./src/public/images/heros/hero-image_1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n}\n\n/* navbar */\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #5CB969;\n  white-space: nowrap;\n}\n\n.drawer-list{\n  display: flex;\n  width: 100%;\n  margin: 0;\n  display: flex;\n}\n\n.nav__list {\n  width: 100%;\n  margin: 0;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  /* padding: 1.3em; */\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.nav a:hover {\n  text-decoration:wavy;\n  color: #2c9330;\n  font-weight: bolder;\n}\n\nimg.logo{\n  width: 20%;\n  height: 20%;\n  padding-left: 30px;\n}\n\n#hamburger{\n  display: none;\n}\n\n/* hero */\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-position: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero__title {\n  color: #5CB969;\n  font-weight: bold;\n  font-size: 45px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  display: flex;\n  text-align: center;\n}\n\nbutton.headline__button{\n  display: inline-block;\n  text-transform: uppercase;\n  margin-top: 24px;\n  cursor: pointer;\n  padding: 8px 16px;\n  color: #2c9330;\n  border: none;\n  border-radius: 5px;\n  transition: all .15s ease-in;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.headline__button:hover {\n  color: #5CB969;\n  border: 2px solid #ffffff;\n  background-color: transparent;\n}\n\n/* content */\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.explore__label {\n  font-size: 32px;\n  font-weight: lighter;\n  color: #5CB969;\n  margin-top: 5%;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\nsection{\n  display: flex;\n}\n\n.content{\n  padding: 32px;\n}\n\narticle{\n  display:flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n#headline__content{\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  align-items: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin: 10px 0 20px 10px;\n  padding: 15px;\n  background-color: #5CB969;\n  color: #ffffff;\n}\n\n#headline__content h1{\n    font-size: 20px;\n}\n\n#headline__content h2{\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n#headline__content p{\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n#headline__img{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 32px;\n  position: absolute;\n  right: 0;\n}\n\n#restaurants-list{\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.restaurant-item{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  gap: 20px;\n  margin: 10px 0 20px 10px;\n  background-color: #5CB969;\n  z-index: -1;\n  color: #ffffff;\n  position: relative;\n}\n\n.restaurant-item img{\n  width: 100%;\n  height: 20vw;\n  object-fit: cover;\n  position: relative;\n  z-index: -1;\n}\n\n.restaurant-item h2, h3, p{\n  padding: 10px 32px 0 32px;\n  font-size: 16px;\n  text-align: justify;\n}\n\n.restaurant-item h3{\n  font-size: 20px;\n}\n\n.restaurant-item h2{\n  color: #dde414;\n}\n\n.restaurant-item p{\n  padding-bottom: 32px;\n}\n\n.restaurant-item h1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #5CB969;\n  background-color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px;\n  margin: 0;\n  border-bottom-right-radius: 10px;\n}\n\n/* footer */\nfooter{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 2em;\n  font-size: 16px;\n  color: white;\n  background-color: #5CB969;\n}\n\nfooter p{\n  white-space: nowrap;\n}\n\n\n/* minimal layar ukuran sedang */\n@media screen and (min-width: 600px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n\n  img.logo{\n    width:25%;\n    height: 25%;\n  }\n\n  .hero__title{\n    font-size: 35px;\n  }\n\n  .hero__tagline{\n    font-size: 18px;\n  }\n\n  .content{\n    flex-direction: column;\n  }\n\n  article{\n    display:flex;\n    justify-content: center;\n    position: relative;\n  } \n\n  #headline__content{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    margin: 10px 0 20px 10px;\n    padding: 15px;\n    background-color: #5CB969;\n    color: #ffffff;\n  }\n\n  #headline__img{\n    right:auto;\n    margin-top: 40%;\n  }\n\n  .explore__label {\n    \n  }\n  \n  .restaurant-item p{\n    font-size: 18px;\n  }\n\n  .restaurant-item h3{\n    font-size: 22px;\n  }\n\n\n}\n\n/* minimal layar ukuran besar */\n@media screen and (min-width: 1200px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 32px;\n  } \n\n  img.logo{\n    width: 20%;\n    height: 20%;\n  }\n\n  .hero{\n    min-width: 1000px;\n  }\n}\n\n\n/*maksimal layar ukuran kecil*/\n@media screen and (max-width: 700px){\n  .navbar-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #5CB969;\n    margin: 0;\n  }\n\n  #drawer{\n    text-align: center;\n    display: flex;\n  }\n\n  .drawer-list{\n    position: fixed;\n    top: 0;\n    padding: 10px 0 0 0;\n    width: 250px;\n    height: 25%;\n    transform: translate(-350px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#ffffff;\n  }\n  \n  .drawer-list.open{\n    transform: translate(0,0);\n  }\n\n  img.logo{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    height: 50%;\n    padding: 0;\n    margin: auto;\n  }\n\n  #hamburger{\n    display: block;\n    font-size: 32px;\n    text-decoration: none;\n    color: rgb(255, 255, 255);\n    margin: 0 0 0 20px; \n    position: absolute;\n    z-index: 1;\n    left: 0;\n  }\n  \n  .nav__list {\n    list-style-type: none;\n    padding: 0 16px;\n    display: flex;\n    gap: 0px;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content:center;\n    height: 100%;\n  }\n\n  .nav__item{\n    padding: 5px 0px;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 16px;\n    width: 100%;\n  }\n  \n .nav__item a {\n  color: #333;\n  text-decoration: none;\n  }\n\n  .hero__title{\n    font-size: 20px;\n  }\n\n  .hero__tagline{\n    font-size: 14px;\n  }\n\n  .restaurant-item img{\n    width: 100%;\n    height: 50vw;\n  }\n\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n}\n\n/* navbar */\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #5CB969;\n  white-space: nowrap;\n}\n\n.drawer-list{\n  display: flex;\n  width: 100%;\n  margin: 0;\n  display: flex;\n}\n\n.nav__list {\n  width: 100%;\n  margin: 0;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  /* padding: 1.3em; */\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.nav a:hover {\n  text-decoration:wavy;\n  color: #2c9330;\n  font-weight: bolder;\n}\n\nimg.logo{\n  width: 20%;\n  height: 20%;\n  padding-left: 30px;\n}\n\n#hamburger{\n  display: none;\n}\n\n/* hero */\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-position: center;\n  background-image: url('../public/images/heros/hero-image_1.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero__title {\n  color: #5CB969;\n  font-weight: bold;\n  font-size: 45px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  display: flex;\n  text-align: center;\n}\n\nbutton.headline__button{\n  display: inline-block;\n  text-transform: uppercase;\n  margin-top: 24px;\n  cursor: pointer;\n  padding: 8px 16px;\n  color: #2c9330;\n  border: none;\n  border-radius: 5px;\n  transition: all .15s ease-in;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.headline__button:hover {\n  color: #5CB969;\n  border: 2px solid #ffffff;\n  background-color: transparent;\n}\n\n/* content */\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.explore__label {\n  font-size: 32px;\n  font-weight: lighter;\n  color: #5CB969;\n  margin-top: 5%;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\nsection{\n  display: flex;\n}\n\n.content{\n  padding: 32px;\n}\n\narticle{\n  display:flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n#headline__content{\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  align-items: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin: 10px 0 20px 10px;\n  padding: 15px;\n  background-color: #5CB969;\n  color: #ffffff;\n}\n\n#headline__content h1{\n    font-size: 20px;\n}\n\n#headline__content h2{\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n#headline__content p{\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n#headline__img{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 32px;\n  position: absolute;\n  right: 0;\n}\n\n#restaurants-list{\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.restaurant-item{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  gap: 20px;\n  margin: 10px 0 20px 10px;\n  background-color: #5CB969;\n  z-index: -1;\n  color: #ffffff;\n  position: relative;\n}\n\n.restaurant-item img{\n  width: 100%;\n  height: 20vw;\n  object-fit: cover;\n  position: relative;\n  z-index: -1;\n}\n\n.restaurant-item h2, h3, p{\n  padding: 10px 32px 0 32px;\n  font-size: 16px;\n  text-align: justify;\n}\n\n.restaurant-item h3{\n  font-size: 20px;\n}\n\n.restaurant-item h2{\n  color: #dde414;\n}\n\n.restaurant-item p{\n  padding-bottom: 32px;\n}\n\n.restaurant-item h1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #5CB969;\n  background-color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px;\n  margin: 0;\n  border-bottom-right-radius: 10px;\n}\n\n/* footer */\nfooter{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 2em;\n  font-size: 16px;\n  color: white;\n  background-color: #5CB969;\n}\n\nfooter p{\n  white-space: nowrap;\n}\n\n\n/* minimal layar ukuran sedang */\n@media screen and (min-width: 600px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n\n  img.logo{\n    width:25%;\n    height: 25%;\n  }\n\n  .hero__title{\n    font-size: 35px;\n  }\n\n  .hero__tagline{\n    font-size: 18px;\n  }\n\n  .content{\n    flex-direction: column;\n  }\n\n  article{\n    display:flex;\n    justify-content: center;\n    position: relative;\n  } \n\n  #headline__content{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    margin: 10px 0 20px 10px;\n    padding: 15px;\n    background-color: #5CB969;\n    color: #ffffff;\n  }\n\n  #headline__img{\n    right:auto;\n    margin-top: 40%;\n  }\n\n  .explore__label {\n    \n  }\n  \n  .restaurant-item p{\n    font-size: 18px;\n  }\n\n  .restaurant-item h3{\n    font-size: 22px;\n  }\n\n\n}\n\n/* minimal layar ukuran besar */\n@media screen and (min-width: 1200px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 32px;\n  } \n\n  img.logo{\n    width: 20%;\n    height: 20%;\n  }\n\n  .hero{\n    min-width: 1000px;\n  }\n}\n\n\n/*maksimal layar ukuran kecil*/\n@media screen and (max-width: 700px){\n  .navbar-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #5CB969;\n    margin: 0;\n  }\n\n  #drawer{\n    text-align: center;\n    display: flex;\n  }\n\n  .drawer-list{\n    position: fixed;\n    top: 0;\n    padding: 10px 0 0 0;\n    width: 250px;\n    height: 25%;\n    transform: translate(-350px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#ffffff;\n  }\n  \n  .drawer-list.open{\n    transform: translate(0,0);\n  }\n\n  img.logo{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    height: 50%;\n    padding: 0;\n    margin: auto;\n  }\n\n  #hamburger{\n    display: block;\n    font-size: 32px;\n    text-decoration: none;\n    color: rgb(255, 255, 255);\n    margin: 0 0 0 20px; \n    position: absolute;\n    z-index: 1;\n    left: 0;\n  }\n  \n  .nav__list {\n    list-style-type: none;\n    padding: 0 16px;\n    display: flex;\n    gap: 0px;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content:center;\n    height: 100%;\n  }\n\n  .nav__item{\n    padding: 5px 0px;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 16px;\n    width: 100%;\n  }\n  \n .nav__item a {\n  color: #333;\n  text-decoration: none;\n  }\n\n  .hero__title{\n    font-size: 20px;\n  }\n\n  .hero__tagline{\n    font-size: 14px;\n  }\n\n  .restaurant-item img{\n    width: 100%;\n    height: 50vw;\n  }\n\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/public/images/heros/hero-image_1.jpg":
/*!**************************************************!*\
  !*** ./src/public/images/heros/hero-image_1.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91bf5c4a50c73e706c25.jpg";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("97762e736e5d414839c1")
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	__webpack_require__.b = document.baseURI || self.location.href;
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 		"app": 0
/******/ 	};
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	var currentUpdatedModulesList;
/******/ 	var waitingUpdateResolves = {};
/******/ 	function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 		currentUpdatedModulesList = updatedModulesList;
/******/ 		return new Promise((resolve, reject) => {
/******/ 			waitingUpdateResolves[chunkId] = resolve;
/******/ 			// start update chunk loading
/******/ 			var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 			// create error before stack unwound to get useful stacktrace later
/******/ 			var error = new Error();
/******/ 			var loadingEnded = (event) => {
/******/ 				if(waitingUpdateResolves[chunkId]) {
/******/ 					waitingUpdateResolves[chunkId] = undefined
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realSrc = event && event.target && event.target.src;
/******/ 					error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 					error.name = 'ChunkLoadError';
/******/ 					error.type = errorType;
/******/ 					error.request = realSrc;
/******/ 					reject(error);
/******/ 				}
/******/ 			};
/******/ 			__webpack_require__.l(url, loadingEnded);
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	self["webpackHotUpdaterestaurant_apps"] = (chunkId, moreModules, runtime) => {
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 				currentUpdate[moduleId] = moreModules[moduleId];
/******/ 				if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 			}
/******/ 		}
/******/ 		if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		if(waitingUpdateResolves[chunkId]) {
/******/ 			waitingUpdateResolves[chunkId]();
/******/ 			waitingUpdateResolves[chunkId] = undefined;
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	var currentUpdateChunks;
/******/ 	var currentUpdate;
/******/ 	var currentUpdateRemovedChunks;
/******/ 	var currentUpdateRuntime;
/******/ 	function applyHandler(options) {
/******/ 		if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 		currentUpdateChunks = undefined;
/******/ 		function getAffectedModuleEffects(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.map(function (id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				var module = __webpack_require__.c[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = __webpack_require__.c[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 			);
/******/ 		};
/******/ 	
/******/ 		for (var moduleId in currentUpdate) {
/******/ 			if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				var newModuleFactory = currentUpdate[moduleId];
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (newModuleFactory) {
/******/ 					result = getAffectedModuleEffects(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					return {
/******/ 						error: abortError
/******/ 					};
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = newModuleFactory;
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		currentUpdate = undefined;
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (var j = 0; j < outdatedModules.length; j++) {
/******/ 			var outdatedModuleId = outdatedModules[j];
/******/ 			var module = __webpack_require__.c[outdatedModuleId];
/******/ 			if (
/******/ 				module &&
/******/ 				(module.hot._selfAccepted || module.hot._main) &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!module.hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: outdatedModuleId,
/******/ 					require: module.hot._requireSelf,
/******/ 					errorHandler: module.hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		var moduleOutdatedDependencies;
/******/ 	
/******/ 		return {
/******/ 			dispose: function () {
/******/ 				currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 					delete installedChunks[chunkId];
/******/ 				});
/******/ 				currentUpdateRemovedChunks = undefined;
/******/ 	
/******/ 				var idx;
/******/ 				var queue = outdatedModules.slice();
/******/ 				while (queue.length > 0) {
/******/ 					var moduleId = queue.pop();
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (!module) continue;
/******/ 	
/******/ 					var data = {};
/******/ 	
/******/ 					// Call dispose handlers
/******/ 					var disposeHandlers = module.hot._disposeHandlers;
/******/ 					for (j = 0; j < disposeHandlers.length; j++) {
/******/ 						disposeHandlers[j].call(null, data);
/******/ 					}
/******/ 					__webpack_require__.hmrD[moduleId] = data;
/******/ 	
/******/ 					// disable module (this disables requires from this module)
/******/ 					module.hot.active = false;
/******/ 	
/******/ 					// remove module from cache
/******/ 					delete __webpack_require__.c[moduleId];
/******/ 	
/******/ 					// when disposing there is no need to call dispose handler
/******/ 					delete outdatedDependencies[moduleId];
/******/ 	
/******/ 					// remove "parents" references from all children
/******/ 					for (j = 0; j < module.children.length; j++) {
/******/ 						var child = __webpack_require__.c[module.children[j]];
/******/ 						if (!child) continue;
/******/ 						idx = child.parents.indexOf(moduleId);
/******/ 						if (idx >= 0) {
/******/ 							child.parents.splice(idx, 1);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// remove outdated dependency from module children
/******/ 				var dependency;
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								dependency = moduleOutdatedDependencies[j];
/******/ 								idx = module.children.indexOf(dependency);
/******/ 								if (idx >= 0) module.children.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			},
/******/ 			apply: function (reportError) {
/******/ 				// insert new code
/******/ 				for (var updateModuleId in appliedUpdate) {
/******/ 					if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 						__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// run new runtime modules
/******/ 				for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 					currentUpdateRuntime[i](__webpack_require__);
/******/ 				}
/******/ 	
/******/ 				// call accept handlers
/******/ 				for (var outdatedModuleId in outdatedDependencies) {
/******/ 					if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 						var module = __webpack_require__.c[outdatedModuleId];
/******/ 						if (module) {
/******/ 							moduleOutdatedDependencies =
/******/ 								outdatedDependencies[outdatedModuleId];
/******/ 							var callbacks = [];
/******/ 							var errorHandlers = [];
/******/ 							var dependenciesForCallbacks = [];
/******/ 							for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 								var dependency = moduleOutdatedDependencies[j];
/******/ 								var acceptCallback =
/******/ 									module.hot._acceptedDependencies[dependency];
/******/ 								var errorHandler =
/******/ 									module.hot._acceptedErrorHandlers[dependency];
/******/ 								if (acceptCallback) {
/******/ 									if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 									callbacks.push(acceptCallback);
/******/ 									errorHandlers.push(errorHandler);
/******/ 									dependenciesForCallbacks.push(dependency);
/******/ 								}
/******/ 							}
/******/ 							for (var k = 0; k < callbacks.length; k++) {
/******/ 								try {
/******/ 									callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 								} catch (err) {
/******/ 									if (typeof errorHandlers[k] === "function") {
/******/ 										try {
/******/ 											errorHandlers[k](err, {
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k]
/******/ 											});
/******/ 										} catch (err2) {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-error-handler-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err2,
/******/ 													originalError: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err2);
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									} else {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				// Load self accepted modules
/******/ 				for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 					var item = outdatedSelfAcceptedModules[o];
/******/ 					var moduleId = item.module;
/******/ 					try {
/******/ 						item.require(moduleId);
/******/ 					} catch (err) {
/******/ 						if (typeof item.errorHandler === "function") {
/******/ 							try {
/******/ 								item.errorHandler(err, {
/******/ 									moduleId: moduleId,
/******/ 									module: __webpack_require__.c[moduleId]
/******/ 								});
/******/ 							} catch (err2) {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-error-handler-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err2,
/******/ 										originalError: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err2);
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						} else {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "self-accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								reportError(err);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 	
/******/ 				return outdatedModules;
/******/ 			}
/******/ 		};
/******/ 	}
/******/ 	__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 		if (!currentUpdate) {
/******/ 			currentUpdate = {};
/******/ 			currentUpdateRuntime = [];
/******/ 			currentUpdateRemovedChunks = [];
/******/ 			applyHandlers.push(applyHandler);
/******/ 		}
/******/ 		if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 			currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		}
/******/ 	};
/******/ 	__webpack_require__.hmrC.jsonp = function (
/******/ 		chunkIds,
/******/ 		removedChunks,
/******/ 		removedModules,
/******/ 		promises,
/******/ 		applyHandlers,
/******/ 		updatedModulesList
/******/ 	) {
/******/ 		applyHandlers.push(applyHandler);
/******/ 		currentUpdateChunks = {};
/******/ 		currentUpdateRemovedChunks = removedChunks;
/******/ 		currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 			obj[key] = false;
/******/ 			return obj;
/******/ 		}, {});
/******/ 		currentUpdateRuntime = [];
/******/ 		chunkIds.forEach(function (chunkId) {
/******/ 			if (
/******/ 				__webpack_require__.o(installedChunks, chunkId) &&
/******/ 				installedChunks[chunkId] !== undefined
/******/ 			) {
/******/ 				promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 				currentUpdateChunks[chunkId] = true;
/******/ 			} else {
/******/ 				currentUpdateChunks[chunkId] = false;
/******/ 			}
/******/ 		});
/******/ 		if (__webpack_require__.f) {
/******/ 			__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 				if (
/******/ 					currentUpdateChunks &&
/******/ 					__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 					!currentUpdateChunks[chunkId]
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.hmrM = () => {
/******/ 		if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 		return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 			if(response.status === 404) return; // no update available
/******/ 			if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 			return response.json();
/******/ 		});
/******/ 	};
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// no jsonp function
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmExMGY1OTc0NDkyZGY0MmE1OTM0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDBKQUEwRDtBQUN0Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw2Q0FBNkMsZUFBZSxjQUFjLDJCQUEyQixHQUFHLGdCQUFnQixjQUFjLGVBQWUsZ0JBQWdCLGlCQUFpQixHQUFHLFVBQVUsd0NBQXdDLG9CQUFvQixHQUFHLHVCQUF1QixrQkFBa0Isd0JBQXdCLG1DQUFtQyxnQkFBZ0IsOEJBQThCLHdCQUF3QixHQUFHLGlCQUFpQixrQkFBa0IsZ0JBQWdCLGNBQWMsa0JBQWtCLEdBQUcsZ0JBQWdCLGdCQUFnQixjQUFjLGtCQUFrQix5QkFBeUIsd0JBQXdCLEdBQUcsZ0JBQWdCLDJCQUEyQiwwQkFBMEIsZUFBZSx1QkFBdUIsc0JBQXNCLG9CQUFvQiw4QkFBOEIsR0FBRyxZQUFZLDBCQUEwQix1QkFBdUIsNEJBQTRCLG1CQUFtQixHQUFHLGtCQUFrQix5QkFBeUIsbUJBQW1CLHdCQUF3QixHQUFHLGFBQWEsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLGdCQUFnQix1QkFBdUIsZ0NBQWdDLHNFQUFzRSxpQ0FBaUMsMkJBQTJCLEdBQUcsa0JBQWtCLG1CQUFtQixxQkFBcUIsMkJBQTJCLDRCQUE0QixHQUFHLGtCQUFrQixtQkFBbUIsc0JBQXNCLG9CQUFvQixHQUFHLG9CQUFvQixnQkFBZ0IscUJBQXFCLG9CQUFvQixxQkFBcUIsa0JBQWtCLHVCQUF1QixHQUFHLDRCQUE0QiwwQkFBMEIsOEJBQThCLHFCQUFxQixvQkFBb0Isc0JBQXNCLG1CQUFtQixpQkFBaUIsdUJBQXVCLGlDQUFpQyxvQkFBb0IscUJBQXFCLEdBQUcsNkJBQTZCLG1CQUFtQiw4QkFBOEIsa0NBQWtDLEdBQUcsNkJBQTZCLGdCQUFnQixzQkFBc0IsdUJBQXVCLEdBQUcscUJBQXFCLG9CQUFvQix5QkFBeUIsbUJBQW1CLG1CQUFtQixHQUFHLDRCQUE0QixnQkFBZ0IscUJBQXFCLG1CQUFtQixxQ0FBcUMsR0FBRyxZQUFZLGtCQUFrQixHQUFHLGFBQWEsa0JBQWtCLEdBQUcsWUFBWSxpQkFBaUIsbUNBQW1DLHVCQUF1QixHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLGVBQWUsaUJBQWlCLHdCQUF3QiwrQ0FBK0MsdUJBQXVCLDZCQUE2QixrQkFBa0IsOEJBQThCLG1CQUFtQixHQUFHLDBCQUEwQixzQkFBc0IsR0FBRywwQkFBMEIsb0JBQW9CLHFCQUFxQixHQUFHLHlCQUF5QixvQkFBb0IscUJBQXFCLEdBQUcsbUJBQW1CLGtCQUFrQiwwQ0FBMEMsY0FBYyx1QkFBdUIsYUFBYSxHQUFHLHNCQUFzQiwyQkFBMkIscUJBQXFCLEdBQUcscUJBQXFCLCtDQUErQyx3QkFBd0IsY0FBYyw2QkFBNkIsOEJBQThCLGdCQUFnQixtQkFBbUIsdUJBQXVCLEdBQUcseUJBQXlCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHVCQUF1QixnQkFBZ0IsR0FBRywrQkFBK0IsOEJBQThCLG9CQUFvQix3QkFBd0IsR0FBRyx3QkFBd0Isb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQixHQUFHLHVCQUF1Qix5QkFBeUIsR0FBRyx5QkFBeUIsdUJBQXVCLFdBQVcsWUFBWSxtQkFBbUIsMkJBQTJCLG9CQUFvQixzQkFBc0Isa0JBQWtCLGNBQWMscUNBQXFDLEdBQUcseUJBQXlCLHVCQUF1QixrQkFBa0IsNEJBQTRCLGdCQUFnQixpQkFBaUIsb0JBQW9CLGlCQUFpQiw4QkFBOEIsR0FBRyxhQUFhLHdCQUF3QixHQUFHLDhFQUE4RSxzQkFBc0Isb0JBQW9CLDRDQUE0QyxnQkFBZ0IsS0FBSyxlQUFlLGdCQUFnQixrQkFBa0IsS0FBSyxtQkFBbUIsc0JBQXNCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLGVBQWUsNkJBQTZCLEtBQUssY0FBYyxtQkFBbUIsOEJBQThCLHlCQUF5QixNQUFNLHlCQUF5QixvQkFBb0IsNkJBQTZCLGtCQUFrQixtQkFBbUIsMEJBQTBCLGlEQUFpRCx5QkFBeUIsK0JBQStCLG9CQUFvQixnQ0FBZ0MscUJBQXFCLEtBQUsscUJBQXFCLGlCQUFpQixzQkFBc0IsS0FBSyx1QkFBdUIsV0FBVywyQkFBMkIsc0JBQXNCLEtBQUssMEJBQTBCLHNCQUFzQixLQUFLLE9BQU8sNEVBQTRFLHNCQUFzQixvQkFBb0IsNENBQTRDLGdCQUFnQixNQUFNLGVBQWUsaUJBQWlCLGtCQUFrQixLQUFLLFlBQVksd0JBQXdCLEtBQUssR0FBRyw0RUFBNEUsc0JBQXNCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdDQUFnQyxnQkFBZ0IsS0FBSyxjQUFjLHlCQUF5QixvQkFBb0IsS0FBSyxtQkFBbUIsc0JBQXNCLGFBQWEsMEJBQTBCLG1CQUFtQixrQkFBa0Isc0NBQXNDLDZDQUE2QywrQkFBK0IsS0FBSywwQkFBMEIsZ0NBQWdDLEtBQUssZUFBZSx5QkFBeUIsb0JBQW9CLDhCQUE4QixpQkFBaUIsa0JBQWtCLGlCQUFpQixtQkFBbUIsS0FBSyxpQkFBaUIscUJBQXFCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLDBCQUEwQix5QkFBeUIsaUJBQWlCLGNBQWMsS0FBSyxvQkFBb0IsNEJBQTRCLHNCQUFzQixvQkFBb0IsZUFBZSw2QkFBNkIsMEJBQTBCLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLEtBQUssaUJBQWlCLHVCQUF1QixvQ0FBb0MsMEJBQTBCLGtCQUFrQixLQUFLLHFCQUFxQixnQkFBZ0IsMEJBQTBCLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLHFCQUFxQixzQkFBc0IsS0FBSywyQkFBMkIsa0JBQWtCLG1CQUFtQixLQUFLLEtBQUssT0FBTyxzRkFBc0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLDRC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Q0g7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsbUJBQW1CLDJCQUEyQjtVQUM5QztVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsS0FBSztVQUNMO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQSxrQkFBa0IsY0FBYztVQUNoQztVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0EsY0FBYyxNQUFNO1VBQ3BCO1VBQ0E7VUFDQTtVQUNBLEtBQUs7VUFDTDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsY0FBYyxhQUFhO1VBQzNCO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0EsaUJBQWlCLDRCQUE0QjtVQUM3QztVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsSUFBSTtVQUNKO1VBQ0E7O1VBRUE7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSxJQUFJO1VBQ0o7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBOztVQUVBO1VBQ0E7VUFDQSxnQkFBZ0IsNEJBQTRCO1VBQzVDO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBLGdCQUFnQiw0QkFBNEI7VUFDNUM7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0Esa0JBQWtCLHVDQUF1QztVQUN6RDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLEdBQUc7VUFDSDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBLG1CQUFtQixpQ0FBaUM7VUFDcEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHNCQUFzQix1Q0FBdUM7VUFDN0Q7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0Esc0JBQXNCLHNCQUFzQjtVQUM1QztVQUNBO1VBQ0EsU0FBUztVQUNUO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxXQUFXO1VBQ1gsV0FBVztVQUNYO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsWUFBWTtVQUNaO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLFVBQVU7VUFDVjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxXQUFXO1VBQ1g7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQSxtQkFBbUIsd0NBQXdDO1VBQzNEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsTUFBTTtVQUNOO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxRQUFRO1VBQ1IsUUFBUTtVQUNSO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLFNBQVM7VUFDVDtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxPQUFPO1VBQ1A7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLFFBQVE7VUFDUjtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRSxJQUFJO1VBQ047VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLElBQUk7VUFDSjtVQUNBO1VBQ0EsRUFBRTtVQUNGO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBLHNDQUFzQztVQUN0QztVQUNBO1VBQ0EsRUFBRTtVQUNGOztVQUVBOztVQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3B1YmxpYy9pbWFnZXMvaGVyb3MvaGVyby1pbWFnZV8xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLyogbmF2YmFyICovXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmRyYXdlci1saXN0e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm5hdl9fbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXZfX2l0ZW0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5uYXYgYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAvKiBwYWRkaW5nOiAxLjNlbTsgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ubmF2IGE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOndhdnk7XFxuICBjb2xvcjogIzJjOTMzMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmltZy5sb2dve1xcbiAgd2lkdGg6IDIwJTtcXG4gIGhlaWdodDogMjAlO1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4jaGFtYnVyZ2Vye1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogaGVybyAqL1xcbi5oZXJvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAzODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uaGVyb19faW5uZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVyb19fdGl0bGUge1xcbiAgY29sb3I6ICM1Q0I5Njk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG59XFxuXFxuLmhlcm9fX3RhZ2xpbmUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbi5oZWFkbGluZV9fYnV0dG9ue1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGNvbG9yOiAjMmM5MzMwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIC4xNXMgZWFzZS1pbjtcXG4gIG1pbi13aWR0aDogNDRweDtcXG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XFxufVxcblxcbi5oZWFkbGluZV9fYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBjb250ZW50ICovXFxuLmV4cGxvcmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDYwcHggYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmV4cGxvcmVfX2xhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgY29sb3I6ICM1Q0I5Njk7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG59XFxuXFxuLmV4cGxvcmVfX2xhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xcbn1cXG5cXG5zZWN0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICBwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG5hcnRpY2xle1xcbiAgZGlzcGxheTpmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jaGVhZGxpbmVfX2NvbnRlbnR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDAgMjBweCAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuI2hlYWRsaW5lX19jb250ZW50IGgxe1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNoZWFkbGluZV9fY29udGVudCBoMntcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNoZWFkbGluZV9fY29udGVudCBwe1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI2hlYWRsaW5lX19pbWd7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogMzJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jcmVzdGF1cmFudHMtbGlzdHtcXG4gIG1hcmdpbjogMzJweCBhdXRvIGF1dG87XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVte1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbjogMTBweCAwIDIwcHggMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxuICB6LWluZGV4OiAtMTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGltZ3tcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMHZ3O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBoMiwgaDMsIHB7XFxuICBwYWRkaW5nOiAxMHB4IDMycHggMCAzMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBoM3tcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBoMntcXG4gIGNvbG9yOiAjZGRlNDE0O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIHB7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBoMSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgY29sb3I6ICM1Q0I5Njk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlcntcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG59XFxuXFxuZm9vdGVyIHB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5cXG4vKiBtaW5pbWFsIGxheWFyIHVrdXJhbiBzZWRhbmcgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XFxuICAjcmVzdGF1cmFudHMtbGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgfVxcblxcbiAgaW1nLmxvZ297XFxuICAgIHdpZHRoOjI1JTtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICB9XFxuXFxuICAuaGVyb19fdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gIH1cXG5cXG4gIC5oZXJvX190YWdsaW5le1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAuY29udGVudHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGFydGljbGV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH0gXFxuXFxuICAjaGVhZGxpbmVfX2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgfVxcblxcbiAgI2hlYWRsaW5lX19pbWd7XFxuICAgIHJpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi10b3A6IDQwJTtcXG4gIH1cXG5cXG4gIC5leHBsb3JlX19sYWJlbCB7XFxuICAgIFxcbiAgfVxcbiAgXFxuICAucmVzdGF1cmFudC1pdGVtIHB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gIC5yZXN0YXVyYW50LWl0ZW0gaDN7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG5cXG5cXG59XFxuXFxuLyogbWluaW1hbCBsYXlhciB1a3VyYW4gYmVzYXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xcbiAgI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMzJweDtcXG4gIH0gXFxuXFxuICBpbWcubG9nb3tcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICB9XFxuXFxuICAuaGVyb3tcXG4gICAgbWluLXdpZHRoOiAxMDAwcHg7XFxuICB9XFxufVxcblxcblxcbi8qbWFrc2ltYWwgbGF5YXIgdWt1cmFuIGtlY2lsKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XFxuICAubmF2YmFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNkcmF3ZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5kcmF3ZXItbGlzdHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNSU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XFxuICB9XFxuICBcXG4gIC5kcmF3ZXItbGlzdC5vcGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgaW1nLmxvZ297XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAjaGFtYnVyZ2Vye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIG1hcmdpbjogMCAwIDAgMjBweDsgXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG4gIFxcbiAgLm5hdl9fbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAubmF2X19pdGVte1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gLm5hdl9faXRlbSBhIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcblxcbiAgLmhlcm9fX3RpdGxle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAuaGVyb19fdGFnbGluZXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcblxcbiAgLnJlc3RhdXJhbnQtaXRlbSBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwdnc7XFxuICB9XFxuXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpQkFB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LGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE9BQU87RUFDVDs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztDQUVEO0VBQ0MsV0FBVztFQUNYLHFCQUFxQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIG5hdmJhciAqL1xcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5kcmF3ZXItbGlzdHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5uYXZfX2xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2X19pdGVtIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubmF2IGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLyogcGFkZGluZzogMS4zZW07ICovXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm5hdiBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjp3YXZ5O1xcbiAgY29sb3I6ICMyYzkzMzA7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5pbWcubG9nb3tcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuI2hhbWJ1cmdlcntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGhlcm8gKi9cXG4uaGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMzgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL2ltYWdlcy9oZXJvcy9oZXJvLWltYWdlXzEuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlcm9fX2lubmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhlcm9fX3RpdGxlIHtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDQ1cHg7XFxufVxcblxcbi5oZXJvX190YWdsaW5lIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b24uaGVhZGxpbmVfX2J1dHRvbntcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBjb2xvcjogIzJjOTMzMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW47XFxuICBtaW4td2lkdGg6IDQ0cHg7XFxuICBtaW4taGVpZ2h0OiA0NHB4O1xcbn1cXG5cXG4uaGVhZGxpbmVfX2J1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzVDQjk2OTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogY29udGVudCAqL1xcbi5leHBsb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA2MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHBsb3JlX19sYWJlbCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbiAgbWFyZ2luLXRvcDogNSU7XFxufVxcblxcbi5leHBsb3JlX19sYWJlbDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcXG59XFxuXFxuc2VjdGlvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250ZW50e1xcbiAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuYXJ0aWNsZXtcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2hlYWRsaW5lX19jb250ZW50e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMTBweCAwIDIwcHggMTBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbiNoZWFkbGluZV9fY29udGVudCBoMXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jaGVhZGxpbmVfX2NvbnRlbnQgaDJ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jaGVhZGxpbmVfX2NvbnRlbnQgcHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiNoZWFkbGluZV9faW1ne1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDMycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG59XFxuXFxuI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICBtYXJnaW46IDMycHggYXV0byBhdXRvO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbXtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IDEwcHggMCAyMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbiAgei1pbmRleDogLTE7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBpbWd7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjB2dztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDIsIGgzLCBwe1xcbiAgcGFkZGluZzogMTBweCAzMnB4IDAgMzJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDN7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDJ7XFxuICBjb2xvcjogI2RkZTQxNDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBwe1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxufVxcblxcbmZvb3RlciBwe1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuXFxuLyogbWluaW1hbCBsYXlhciB1a3VyYW4gc2VkYW5nICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpe1xcbiAgI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMzJweDtcXG4gIH1cXG5cXG4gIGltZy5sb2dve1xcbiAgICB3aWR0aDoyNSU7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgfVxcblxcbiAgLmhlcm9fX3RpdGxle1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICB9XFxuXFxuICAuaGVyb19fdGFnbGluZXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLmNvbnRlbnR7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBhcnRpY2xle1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9IFxcblxcbiAgI2hlYWRsaW5lX19jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMjBweCAxMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gIH1cXG5cXG4gICNoZWFkbGluZV9faW1ne1xcbiAgICByaWdodDphdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA0MCU7XFxuICB9XFxuXFxuICAuZXhwbG9yZV9fbGFiZWwge1xcbiAgICBcXG4gIH1cXG4gIFxcbiAgLnJlc3RhdXJhbnQtaXRlbSBwe1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICB9XFxuXFxuICAucmVzdGF1cmFudC1pdGVtIGgze1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICB9XFxuXFxuXFxufVxcblxcbi8qIG1pbmltYWwgbGF5YXIgdWt1cmFuIGJlc2FyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcXG4gICNyZXN0YXVyYW50cy1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDMycHg7XFxuICB9IFxcblxcbiAgaW1nLmxvZ297XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgfVxcblxcbiAgLmhlcm97XFxuICAgIG1pbi13aWR0aDogMTAwMHB4O1xcbiAgfVxcbn1cXG5cXG5cXG4vKm1ha3NpbWFsIGxheWFyIHVrdXJhbiBrZWNpbCovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xcbiAgLm5hdmJhci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAjZHJhd2Vye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICB9XFxuXFxuICAuZHJhd2VyLWxpc3R7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzUwcHgsIDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xcbiAgfVxcbiAgXFxuICAuZHJhd2VyLWxpc3Qub3BlbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcXG4gIH1cXG5cXG4gIGltZy5sb2dve1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgI2hhbWJ1cmdlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBtYXJnaW46IDAgMCAwIDIwcHg7IFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuICBcXG4gIC5uYXZfX2xpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLm5hdl9faXRlbXtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuIC5uYXZfX2l0ZW0gYSB7XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gIC5oZXJvX190aXRsZXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcblxcbiAgLmhlcm9fX3RhZ2xpbmV7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH1cXG5cXG4gIC5yZXN0YXVyYW50LWl0ZW0gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHZ3O1xcbiAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5Nzc2MmU3MzZlNWQ0MTQ4MzljMVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcImFwcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlcmVzdGF1cmFudF9hcHBzXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuXHRcdFx0dmFyIHJlc3VsdDtcblx0XHRcdGlmIChuZXdNb2R1bGVGYWN0b3J5KSB7XG5cdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgPSB7XG5cdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==