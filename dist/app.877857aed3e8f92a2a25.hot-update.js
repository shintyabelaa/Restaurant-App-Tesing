"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/routes/url-parser.js":
/*!******************************************!*\
  !*** ./src/scripts/routes/url-parser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);


/***/ }),

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/scripts/routes/url-parser.js");


class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("74b617710da1379f46b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjg3Nzg1N2FlZDNlOGY5MmEyYTI1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0NBQXNDLG9CQUFvQjtBQUMxRDtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0MsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrQjtBQUNYO0FBQzdDO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7O1VDcEJuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3JvdXRlcy91cmwtcGFyc2VyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVybFBhcnNlciA9IHtcclxuICBwYXJzZUFjdGl2ZVVybFdpdGhDb21iaW5lcigpIHtcclxuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBzcGxpdGVkVXJsID0gdGhpcy5fdXJsU3BsaXR0ZXIodXJsKTtcclxuICAgIHJldHVybiB0aGlzLl91cmxDb21iaW5lcihzcGxpdGVkVXJsKTtcclxuICB9LFxyXG5cclxuICBwYXJzZUFjdGl2ZVVybFdpdGhvdXRDb21iaW5lcigpIHtcclxuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fdXJsU3BsaXR0ZXIodXJsKTtcclxuICB9LFxyXG5cclxuICBfdXJsU3BsaXR0ZXIodXJsKSB7XHJcbiAgICBjb25zdCB1cmxzU3BsaXRzID0gdXJsLnNwbGl0KCcvJyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNvdXJjZTogdXJsc1NwbGl0c1sxXSB8fCBudWxsLFxyXG4gICAgICBpZDogdXJsc1NwbGl0c1syXSB8fCBudWxsLFxyXG4gICAgICB2ZXJiOiB1cmxzU3BsaXRzWzNdIHx8IG51bGwsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIF91cmxDb21iaW5lcihzcGxpdGVkVXJsKSB7XHJcbiAgICByZXR1cm4gKHNwbGl0ZWRVcmwucmVzb3VyY2UgPyBgLyR7c3BsaXRlZFVybC5yZXNvdXJjZX1gIDogJy8nKVxyXG4gICAgICArIChzcGxpdGVkVXJsLmlkID8gJy86aWQnIDogJycpXHJcbiAgICAgICsgKHNwbGl0ZWRVcmwudmVyYiA/IGAvJHtzcGxpdGVkVXJsLnZlcmJ9YCA6ICcnKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXJsUGFyc2VyO1xyXG4iLCJpbXBvcnQgRHJhd2VySW5pdGlhdG9yIGZyb20gJy4uL3V0aWxzL2RyYXdlci1pbml0aWF0b3InO1xyXG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcih7IGJ1dHRvbiwgZHJhd2VyLCBjb250ZW50IH0pIHtcclxuICAgIHRoaXMuX2J1dHRvbiA9IGJ1dHRvbjtcclxuICAgIHRoaXMuX2RyYXdlciA9IGRyYXdlcjtcclxuICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxBcHBTaGVsbCgpO1xyXG4gIH1cclxuXHJcbiAgX2luaXRpYWxBcHBTaGVsbCgpIHtcclxuICAgIERyYXdlckluaXRpYXRvci5pbml0KHtcclxuICAgICAgYnV0dG9uOiB0aGlzLl9idXR0b24sXHJcbiAgICAgIGRyYXdlcjogdGhpcy5fZHJhd2VyLFxyXG4gICAgICBjb250ZW50OiB0aGlzLl9jb250ZW50LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc0YjYxNzcxMGRhMTM3OWY0NmIzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9