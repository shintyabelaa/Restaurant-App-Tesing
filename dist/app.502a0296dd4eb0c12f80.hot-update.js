"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/views/pages/detail.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/pages/detail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/restaurant-source */ "./src/scripts/data/restaurant-source.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes/url-parser */ "./src/scripts/routes/url-parser.js");



const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithoutCombiner();
    const restaurant = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].detailRestaurants(url.id);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e838b0452075ce0a5827")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjUwMmEwMjk2ZGQ0ZWIwYzEyZjgwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1o7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0Isd0ZBQXVDO0FBQ3ZELDZCQUE2QixpRkFBa0M7QUFDL0QsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7OztVQ2hCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tIFwiLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZVwiO1xyXG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gXCIuLi8uLi9yb3V0ZXMvdXJsLXBhcnNlclwiO1xyXG5cclxuY29uc3QgRGV0YWlsID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgaWQ9XCJyZXN0YXVyYW50XCIgY2xhc3M9XCJyZXN0YXVyYW50XCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gVXJsUGFyc2VyLnBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCk7XHJcbiAgICBjb25zdCByZXN0YXVyYW50ID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5kZXRhaWxSZXN0YXVyYW50cyh1cmwuaWQpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWw7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU4MzhiMDQ1MjA3NWNlMGE1ODI3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9