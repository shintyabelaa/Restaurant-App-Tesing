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
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _data_restaurant_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/restaurant-source */ "./src/scripts/data/restaurant-source.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");




const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseActiveUrlWithoutCombiner();
    const restaurant = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_1__["default"].detailRestaurants(url.id);
    console.log(restaurant);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b58ba19eb7e23c6f7d21")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjZiMDkzYzlhOTg5ZjcyMGRkODY4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNZO0FBQ21CO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLHdGQUF1QztBQUN2RCw2QkFBNkIsaUZBQWtDO0FBQy9EO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7OztVQ2xCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXJsUGFyc2VyIGZyb20gXCIuLi8uLi9yb3V0ZXMvdXJsLXBhcnNlclwiO1xyXG5pbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tIFwiLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XHJcblxyXG5jb25zdCBEZXRhaWwgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBpZD1cInJlc3RhdXJhbnRcIiBjbGFzcz1cInJlc3RhdXJhbnRcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRob3V0Q29tYmluZXIoKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmRldGFpbFJlc3RhdXJhbnRzKHVybC5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0YXVyYW50KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNThiYTE5ZWI3ZTIzYzZmN2QyMVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==