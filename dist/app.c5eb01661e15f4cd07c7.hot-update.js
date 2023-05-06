"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_explore_restaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/explore-restaurants */ "./src/scripts/views/pages/explore-restaurants.js");
/* harmony import */ var _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/favorite */ "./src/scripts/views/pages/favorite.js");
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/detail */ "./src/scripts/views/pages/detail.js");




const routes = {
  '/': _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/home': _views_pages_explore_restaurants__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/favorites': _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

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
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ "./src/scripts/routes/routes.js");




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

  async renderPage() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/scripts/views/pages/detail.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/pages/detail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ }),

/***/ "./src/scripts/views/pages/explore-restaurants.js":
/*!********************************************************!*\
  !*** ./src/scripts/views/pages/explore-restaurants.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ExploreRestaurants = {
  async render() {
    return `
       <h2>Explore</h2> 
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreRestaurants);


/***/ }),

/***/ "./src/scripts/views/pages/favorite.js":
/*!*********************************************!*\
  !*** ./src/scripts/views/pages/favorite.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Favorite = {
  async render() {
    return `
        <h2>Favorite</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorite);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("39aed181690056a66ad5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmM1ZWIwMTY2MWUxNWY0Y2QwN2M3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRTtBQUNyQjtBQUNKO0FBQzNDO0FBQ0E7QUFDQSxPQUFPLDZEQUFRO0FBQ2YsV0FBVyx3RUFBa0I7QUFDN0IsZ0JBQWdCLDZEQUFRO0FBQ3hCLGlCQUFpQiwyREFBTTtBQUN2QjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNYdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQ0FBc0Msb0JBQW9CO0FBQzFEO0FBQ0EsK0JBQStCLGdCQUFnQjtBQUMvQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUIrQjtBQUNYO0FBQ1A7QUFDdEM7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQW9DO0FBQ3BELGlCQUFpQixzREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Qm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1p0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1psQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7VUNaeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9yb3V0ZXMvcm91dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3JvdXRlcy91cmwtcGFyc2VyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZXhwbG9yZS1yZXN0YXVyYW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9mYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHBsb3JlUmVzdGF1cmFudHMgZnJvbSAnLi4vdmlld3MvcGFnZXMvZXhwbG9yZS1yZXN0YXVyYW50cyc7XHJcbmltcG9ydCBGYXZvcml0ZSBmcm9tICcuLi92aWV3cy9wYWdlcy9mYXZvcml0ZSc7XHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi4vdmlld3MvcGFnZXMvZGV0YWlsJztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAnLyc6IEZhdm9yaXRlLFxyXG4gICcvaG9tZSc6IEV4cGxvcmVSZXN0YXVyYW50cyxcclxuICAnL2Zhdm9yaXRlcyc6IEZhdm9yaXRlLFxyXG4gICcvZGV0YWlsLzppZCc6IERldGFpbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiY29uc3QgVXJsUGFyc2VyID0ge1xyXG4gIHBhcnNlQWN0aXZlVXJsV2l0aENvbWJpbmVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IHNwbGl0ZWRVcmwgPSB0aGlzLl91cmxTcGxpdHRlcih1cmwpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3VybENvbWJpbmVyKHNwbGl0ZWRVcmwpO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiB0aGlzLl91cmxTcGxpdHRlcih1cmwpO1xyXG4gIH0sXHJcblxyXG4gIF91cmxTcGxpdHRlcih1cmwpIHtcclxuICAgIGNvbnN0IHVybHNTcGxpdHMgPSB1cmwuc3BsaXQoJy8nKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc291cmNlOiB1cmxzU3BsaXRzWzFdIHx8IG51bGwsXHJcbiAgICAgIGlkOiB1cmxzU3BsaXRzWzJdIHx8IG51bGwsXHJcbiAgICAgIHZlcmI6IHVybHNTcGxpdHNbM10gfHwgbnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgX3VybENvbWJpbmVyKHNwbGl0ZWRVcmwpIHtcclxuICAgIHJldHVybiAoc3BsaXRlZFVybC5yZXNvdXJjZSA/IGAvJHtzcGxpdGVkVXJsLnJlc291cmNlfWAgOiAnLycpXHJcbiAgICAgICsgKHNwbGl0ZWRVcmwuaWQgPyAnLzppZCcgOiAnJylcclxuICAgICAgKyAoc3BsaXRlZFVybC52ZXJiID8gYC8ke3NwbGl0ZWRVcmwudmVyYn1gIDogJycpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcmxQYXJzZXI7XHJcbiIsImltcG9ydCBEcmF3ZXJJbml0aWF0b3IgZnJvbSAnLi4vdXRpbHMvZHJhd2VyLWluaXRpYXRvcic7XHJcbmltcG9ydCBVcmxQYXJzZXIgZnJvbSAnLi4vcm91dGVzL3VybC1wYXJzZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcy9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3Rvcih7IGJ1dHRvbiwgZHJhd2VyLCBjb250ZW50IH0pIHtcclxuICAgIHRoaXMuX2J1dHRvbiA9IGJ1dHRvbjtcclxuICAgIHRoaXMuX2RyYXdlciA9IGRyYXdlcjtcclxuICAgIHRoaXMuX2NvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuICAgIHRoaXMuX2luaXRpYWxBcHBTaGVsbCgpO1xyXG4gIH1cclxuXHJcbiAgX2luaXRpYWxBcHBTaGVsbCgpIHtcclxuICAgIERyYXdlckluaXRpYXRvci5pbml0KHtcclxuICAgICAgYnV0dG9uOiB0aGlzLl9idXR0b24sXHJcbiAgICAgIGRyYXdlcjogdGhpcy5fZHJhd2VyLFxyXG4gICAgICBjb250ZW50OiB0aGlzLl9jb250ZW50LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZW5kZXJQYWdlKCkge1xyXG4gICAgY29uc3QgdXJsID0gVXJsUGFyc2VyLnBhcnNlQWN0aXZlVXJsV2l0aENvbWJpbmVyKCk7XHJcbiAgICBjb25zdCBwYWdlID0gcm91dGVzW3VybF07XHJcbiAgICB0aGlzLl9jb250ZW50LmlubmVySFRNTCA9IGF3YWl0IHBhZ2UucmVuZGVyKCk7XHJcbiAgICBhd2FpdCBwYWdlLmFmdGVyUmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImNvbnN0IERldGFpbCA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxoMj5EZXRhaWwgUGFnZTwvaDI+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgLy8gRnVuZ3NpIGluaSBha2FuIGRpcGFuZ2dpbCBzZXRlbGFoIHJlbmRlcigpXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIiwiY29uc3QgRXhwbG9yZVJlc3RhdXJhbnRzID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICA8aDI+RXhwbG9yZTwvaDI+IFxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIC8vIEZ1bmdzaSBpbmkgYWthbiBkaXBhbmdnaWwgc2V0ZWxhaCByZW5kZXIoKVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcbiIsImNvbnN0IEZhdm9yaXRlID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGgyPkZhdm9yaXRlPC9oMj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICAvLyBGdW5nc2kgaW5pIGFrYW4gZGlwYW5nZ2lsIHNldGVsYWggcmVuZGVyKClcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGU7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM5YWVkMTgxNjkwMDU2YTY2YWQ1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9