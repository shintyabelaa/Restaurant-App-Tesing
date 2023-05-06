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


const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].detailRestaurants(url.id);
    console.log(restaurant);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5b67d7ef40b6b475e7a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjhlMDAyMTU1MTRjMDMyOWQwNmQ0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpRkFBa0M7QUFDL0Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7O1VDaEJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2RldGFpbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gXCIuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlXCI7XHJcblxyXG5jb25zdCBEZXRhaWwgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBpZD1cInJlc3RhdXJhbnRcIiBjbGFzcz1cInJlc3RhdXJhbnRcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRob3V0Q29tYmluZXIoKTtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmRldGFpbFJlc3RhdXJhbnRzKHVybC5pZCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0YXVyYW50KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNWI2N2Q3ZWY0MGI2YjQ3NWU3YVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==