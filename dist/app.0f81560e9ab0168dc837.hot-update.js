"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/data/restaurant-source.js":
/*!***********************************************!*\
  !*** ./src/scripts/data/restaurant-source.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/api-endpoint */ "./src/scripts/globals/api-endpoint.js");


class RestaurantSource {
  static async exploreRestaurants() {
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].EXPLORE_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    console.log(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAIL(id));
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAIL(id));
    console.log(response.json()); 
    return response.json();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestaurantSource);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("154c52755b5e2c9629b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjBmODE1NjBlOWFiMDE2OGRjODM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9FQUFtQjtBQUNuQyxpQ0FBaUMsb0VBQW1CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7O1VDakJoQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJX0VORFBPSU5UIGZyb20gJy4uL2dsb2JhbHMvYXBpLWVuZHBvaW50JztcclxuXHJcbmNsYXNzIFJlc3RhdXJhbnRTb3VyY2Uge1xyXG4gIHN0YXRpYyBhc3luYyBleHBsb3JlUmVzdGF1cmFudHMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5FWFBMT1JFX1JFU1RBVVJBTlRTKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNwb25zZUpzb24ucmVzdGF1cmFudHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZGV0YWlsUmVzdGF1cmFudHMoaWQpIHtcclxuICAgIGNvbnNvbGUubG9nKEFQSV9FTkRQT0lOVC5ERVRBSUwoaWQpKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5ULkRFVEFJTChpZCkpO1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTsgXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudFNvdXJjZTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTU0YzUyNzU1YjVlMmM5NjI5YjFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=