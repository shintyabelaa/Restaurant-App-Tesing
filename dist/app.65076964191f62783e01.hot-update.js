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
  '/': _views_pages_explore_restaurants__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/home': _views_pages_explore_restaurants__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/favorites': _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


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
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes_url_parser__WEBPACK_IMPORTED_MODULE_1__);
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
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1___default().parseActiveUrlWithCombiner();
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
/******/ 	__webpack_require__.h = () => ("93eaec09db5afe490b84")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjY1MDc2OTY0MTkxZjYyNzgzZTAxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFvRTtBQUNyQjtBQUNKO0FBQzNDO0FBQ0E7QUFDQSxPQUFPLHdFQUFrQjtBQUN6QixXQUFXLHdFQUFrQjtBQUM3QixnQkFBZ0IsNkRBQVE7QUFDeEIsaUJBQWlCLDJEQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYa0M7QUFDWDtBQUNQO0FBQ3RDO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9GQUFvQztBQUNwRCxpQkFBaUIsc0RBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNadEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNabEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7O1VDWnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZGV0YWlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2V4cGxvcmUtcmVzdGF1cmFudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhwbG9yZVJlc3RhdXJhbnRzIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2V4cGxvcmUtcmVzdGF1cmFudHMnO1xyXG5pbXBvcnQgRmF2b3JpdGUgZnJvbSAnLi4vdmlld3MvcGFnZXMvZmF2b3JpdGUnO1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2RldGFpbCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgJy8nOiBFeHBsb3JlUmVzdGF1cmFudHMsXHJcbiAgJy9ob21lJzogRXhwbG9yZVJlc3RhdXJhbnRzLFxyXG4gICcvZmF2b3JpdGVzJzogRmF2b3JpdGUsXHJcbiAgJy9kZXRhaWwvOmlkJzogRGV0YWlsLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xyXG4iLCJpbXBvcnQgRHJhd2VySW5pdGlhdG9yIGZyb20gJy4uL3V0aWxzL2RyYXdlci1pbml0aWF0b3InO1xyXG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMvcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoeyBidXR0b24sIGRyYXdlciwgY29udGVudCB9KSB7XHJcbiAgICB0aGlzLl9idXR0b24gPSBidXR0b247XHJcbiAgICB0aGlzLl9kcmF3ZXIgPSBkcmF3ZXI7XHJcbiAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsQXBwU2hlbGwoKTtcclxuICB9XHJcblxyXG4gIF9pbml0aWFsQXBwU2hlbGwoKSB7XHJcbiAgICBEcmF3ZXJJbml0aWF0b3IuaW5pdCh7XHJcbiAgICAgIGJ1dHRvbjogdGhpcy5fYnV0dG9uLFxyXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcclxuICAgICAgY29udGVudDogdGhpcy5fY29udGVudCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcclxuICAgIGNvbnN0IHVybCA9IFVybFBhcnNlci5wYXJzZUFjdGl2ZVVybFdpdGhDb21iaW5lcigpO1xyXG4gICAgY29uc3QgcGFnZSA9IHJvdXRlc1t1cmxdO1xyXG4gICAgdGhpcy5fY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xyXG4gICAgYXdhaXQgcGFnZS5hZnRlclJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJjb25zdCBEZXRhaWwgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8aDI+RGV0YWlsIFBhZ2U8L2gyPlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIC8vIEZ1bmdzaSBpbmkgYWthbiBkaXBhbmdnaWwgc2V0ZWxhaCByZW5kZXIoKVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcbiIsImNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgPGgyPkV4cGxvcmU8L2gyPiBcclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICAvLyBGdW5nc2kgaW5pIGFrYW4gZGlwYW5nZ2lsIHNldGVsYWggcmVuZGVyKClcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG4iLCJjb25zdCBGYXZvcml0ZSA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxoMj5GYXZvcml0ZTwvaDI+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgLy8gRnVuZ3NpIGluaSBha2FuIGRpcGFuZ2dpbCBzZXRlbGFoIHJlbmRlcigpXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5M2VhZWMwOWRiNWFmZTQ5MGI4NFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==