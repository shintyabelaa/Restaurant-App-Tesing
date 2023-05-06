"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

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
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/large/',
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c7710349df0039cd764")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI3NTg4MGI2OWE3OTNmYjczZWMzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQix3REFBZSxDQUFDO0FBQzFDLGlCQUFpQix3REFBZSxDQUFDO0FBQ2pDLHdCQUF3Qix3REFBZSxDQUFDO0FBQ3hDLHFCQUFxQix3REFBZSxDQUFDLFVBQVUsR0FBRztBQUNsRDtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDakJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvZ2xvYmFscy9hcGktZW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvZ2xvYmFscy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IEFQSV9FTkRQT0lOVCA9IHtcclxuICBFWFBMT1JFX1JFU1RBVVJBTlRTOiBgJHtDT05GSUcuQkFTRV9VUkx9L2xpc3RgLFxyXG4gIEFERF9SRVZJRVc6IGAke0NPTkZJRy5CQVNFX1VSTH0vcmV2aWV3YCxcclxuICBTRUFSQ0hfUkVTVEFVUkFOVDogYCR7Q09ORklHLkJBU0VfVVJMfS9zZWFyY2g/cT08cXVlcnk+YCxcclxuICBERVRBSUw6IChpZCkgPT4gYCR7Q09ORklHLkJBU0VfVVJMfS9kZXRhaWwvJHtpZH1gLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQVBJX0VORFBPSU5UO1xyXG4iLCJjb25zdCBDT05GSUcgPSB7XHJcbiAgQkFTRV9VUkw6ICdodHRwczovL3Jlc3RhdXJhbnQtYXBpLmRpY29kaW5nLmRldi8nLFxyXG4gIEJBU0VfSU1BR0VfVVJMOiAnaHR0cHM6Ly9yZXN0YXVyYW50LWFwaS5kaWNvZGluZy5kZXYvaW1hZ2VzL2xhcmdlLycsXHJcbiAgREVGQVVMVF9MQU5HVUFHRTogJ2VuLXVzJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENPTkZJRztcclxuLy8gYXN5bmMgZnVuY3Rpb24gcmVzdGF1cmFudHNMaXN0KCkge1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3RhdXJhbnQtYXBpLmRpY29kaW5nLmRldi9saXN0Jyk7XHJcbi8vICAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpzb24pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyByZXN0YXVyYW50c0xpc3QoKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWM3NzEwMzQ5ZGYwMDM5Y2Q3NjRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=