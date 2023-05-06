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
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAILid);
    return response.json();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RestaurantSource);


/***/ }),

/***/ "./src/scripts/globals/api-endpoint.js":
/*!*********************************************!*\
  !*** ./src/scripts/globals/api-endpoint.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/scripts/globals/config.js");


const API_ENDPOINT = {
  EXPLORE_RESTAURANTS: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/list`,
  ADD_REVIEW: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/review`,
  SEARCH_RESTAURANT: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/search?q=<query>`,
  DETAIL: (id) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/detail/${id}`,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_ENDPOINT);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0e3da70dbc49b5f61449")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjdjM2VkNmY3ODlhNmZjNTgxYzQwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNFQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkY7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQix3REFBZSxDQUFDO0FBQzFDLGlCQUFpQix3REFBZSxDQUFDO0FBQ2pDLHdCQUF3Qix3REFBZSxDQUFDO0FBQ3hDLHFCQUFxQix3REFBZSxDQUFDLFVBQVUsR0FBRztBQUNsRDtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7VUNUNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9kYXRhL3Jlc3RhdXJhbnQtc291cmNlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2dsb2JhbHMvYXBpLWVuZHBvaW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFQSV9FTkRQT0lOVCBmcm9tICcuLi9nbG9iYWxzL2FwaS1lbmRwb2ludCc7XHJcblxyXG5jbGFzcyBSZXN0YXVyYW50U291cmNlIHtcclxuICBzdGF0aWMgYXN5bmMgZXhwbG9yZVJlc3RhdXJhbnRzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuRVhQTE9SRV9SRVNUQVVSQU5UUyk7XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uLnJlc3RhdXJhbnRzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGRldGFpbFJlc3RhdXJhbnRzKGlkKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5ERVRBSUxpZCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudFNvdXJjZTtcclxuIiwiaW1wb3J0IENPTkZJRyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jb25zdCBBUElfRU5EUE9JTlQgPSB7XHJcbiAgRVhQTE9SRV9SRVNUQVVSQU5UUzogYCR7Q09ORklHLkJBU0VfVVJMfS9saXN0YCxcclxuICBBRERfUkVWSUVXOiBgJHtDT05GSUcuQkFTRV9VUkx9L3Jldmlld2AsXHJcbiAgU0VBUkNIX1JFU1RBVVJBTlQ6IGAke0NPTkZJRy5CQVNFX1VSTH0vc2VhcmNoP3E9PHF1ZXJ5PmAsXHJcbiAgREVUQUlMOiAoaWQpID0+IGAke0NPTkZJRy5CQVNFX1VSTH0vZGV0YWlsLyR7aWR9YCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSV9FTkRQT0lOVDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGUzZGE3MGRiYzQ5YjVmNjE0NDlcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=