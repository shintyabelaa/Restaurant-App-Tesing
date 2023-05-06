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
/******/ 	__webpack_require__.h = () => ("58aea2fedc6a551aeda1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjcxMDRiYTg1N2U0MjMxYzdlODdhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNZO0FBQ21CO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLHdGQUF1QztBQUN2RCw2QkFBNkIsaUZBQWtDO0FBQy9EO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7OztVQ2xCdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9kZXRhaWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uLy4uL3JvdXRlcy91cmwtcGFyc2VyJztcclxuaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSBcIi4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2VcIjtcclxuaW1wb3J0IHsgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3InO1xyXG5cclxuY29uc3QgRGV0YWlsID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgaWQ9XCJyZXN0YXVyYW50XCIgY2xhc3M9XCJyZXN0YXVyYW50XCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gVXJsUGFyc2VyLnBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCk7XHJcbiAgICBjb25zdCByZXN0YXVyYW50ID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5kZXRhaWxSZXN0YXVyYW50cyh1cmwuaWQpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdGF1cmFudCk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNThhZWEyZmVkYzZhNTUxYWVkYTFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=