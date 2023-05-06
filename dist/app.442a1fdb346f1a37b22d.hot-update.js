"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/data/restaurat-source.js":
/*!**********************************************!*\
  !*** ./src/scripts/data/restaurat-source.js ***!
  \**********************************************/
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
    return responseJson.result;
  }

  static async detailRestaurants() {
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAIL(id));
    return response.json;
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
  FAVORITE: `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}movie/upcoming?api_key=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].KEY}&language=${_config__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_URL}/detail/${id}`,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_ENDPOINT);


/***/ }),

/***/ "./src/scripts/globals/config.js":
/*!***************************************!*\
  !*** ./src/scripts/globals/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONFIG = {
  BASE_URL: 'https://books-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/large/<pictureId>',
  DEFAULT_LANGUAGE: 'en-us',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);
// async function restaurantsList() {
//   try {
//     const response = await fetch('https://restaurant-api.dicoding.dev/list');
//     const responseJson = await response.json();
//     console.log(responseJson);
//   } catch (error) {
//     console.log(error);
//   }
// }

// restaurantsList();


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
/* harmony import */ var _data_restaurat_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/restaurat-source */ "./src/scripts/data/restaurat-source.js");


const ExploreRestaurants = {
  async render() {
    return `
       <h2>Explore Restaurants</h2> 
    `;
  },

  async afterRender() {
    const restaurants = await _data_restaurat_source__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreRestaurants);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed2c88e74fd127a797f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQ0MmExZmRiMzQ2ZjFhMzdiMjJkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9FQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkY7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQix3REFBZSxDQUFDO0FBQzFDLGVBQWUsd0RBQWUsQ0FBQyx5QkFBeUIsbURBQVUsQ0FBQyxZQUFZLGdFQUF1QixDQUFDO0FBQ3ZHLHFCQUFxQix3REFBZSxDQUFDLFVBQVUsR0FBRztBQUNsRDtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw4QkFBOEIsOERBQWdCO0FBQzlDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7Ozs7Ozs7OztVQ2RsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2RhdGEvcmVzdGF1cmF0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9nbG9iYWxzL2FwaS1lbmRwb2ludC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9nbG9iYWxzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9leHBsb3JlLXJlc3RhdXJhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFQSV9FTkRQT0lOVCBmcm9tICcuLi9nbG9iYWxzL2FwaS1lbmRwb2ludCc7XHJcblxyXG5jbGFzcyBSZXN0YXVyYW50U291cmNlIHtcclxuICBzdGF0aWMgYXN5bmMgZXhwbG9yZVJlc3RhdXJhbnRzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuRVhQTE9SRV9SRVNUQVVSQU5UUyk7XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uLnJlc3VsdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBkZXRhaWxSZXN0YXVyYW50cygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5ULkRFVEFJTChpZCkpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb247XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50U291cmNlO1xyXG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IEFQSV9FTkRQT0lOVCA9IHtcclxuICBFWFBMT1JFX1JFU1RBVVJBTlRTOiBgJHtDT05GSUcuQkFTRV9VUkx9L2xpc3RgLFxyXG4gIEZBVk9SSVRFOiBgJHtDT05GSUcuQkFTRV9VUkx9bW92aWUvdXBjb21pbmc/YXBpX2tleT0ke0NPTkZJRy5LRVl9Jmxhbmd1YWdlPSR7Q09ORklHLkRFRkFVTFRfTEFOR1VBR0V9JnBhZ2U9MWAsXHJcbiAgREVUQUlMOiAoaWQpID0+IGAke0NPTkZJRy5CQVNFX1VSTH0vZGV0YWlsLyR7aWR9YCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSV9FTkRQT0lOVDtcclxuIiwiY29uc3QgQ09ORklHID0ge1xyXG4gIEJBU0VfVVJMOiAnaHR0cHM6Ly9ib29rcy1hcGkuZGljb2RpbmcuZGV2LycsXHJcbiAgQkFTRV9JTUFHRV9VUkw6ICdodHRwczovL3Jlc3RhdXJhbnQtYXBpLmRpY29kaW5nLmRldi9pbWFnZXMvbGFyZ2UvPHBpY3R1cmVJZD4nLFxyXG4gIERFRkFVTFRfTEFOR1VBR0U6ICdlbi11cycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XHJcbi8vIGFzeW5jIGZ1bmN0aW9uIHJlc3RhdXJhbnRzTGlzdCgpIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yZXN0YXVyYW50LWFwaS5kaWNvZGluZy5kZXYvbGlzdCcpO1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gcmVzdGF1cmFudHNMaXN0KCk7XHJcbiIsImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmF0LXNvdXJjZSc7XHJcblxyXG5jb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgIDxoMj5FeHBsb3JlIFJlc3RhdXJhbnRzPC9oMj4gXHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVSZXN0YXVyYW50cztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWQyYzg4ZTc0ZmQxMjdhNzk3ZjZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=