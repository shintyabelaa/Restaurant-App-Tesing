"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
 /* for async await transpile */


fetch('DATA.json')
  .then(response => {
    console.log('Response:', response);
    return response.json();
  })
  // response.json())
  .then(data => {
    console.log('Data:', data);
    const restaurantsList = document.getElementById('restaurants-list');

    data.restaurants.forEach(restaurant => {
      const restaurantItem = document.createElement('div');
      restaurantItem.classList.add('restaurant-item');

      const restaurantImage = document.createElement('img');
      restaurantImage.setAttribute('src', restaurant.pictureId);
      restaurantItem.appendChild(restaurantImage);

      const restaurantRatings = document.createElement('h1');
      restaurantRatings.innerText = 'Rating: ' + restaurant.rating;
      restaurantItem.appendChild(restaurantRatings);

      const restaurantName = document.createElement('h2');
      restaurantName.innerText = restaurant.name;
      restaurantItem.appendChild(restaurantName);

      const restaurantDescription = document.createElement('p');
      restaurantDescription.innerText = restaurant.description;
      restaurantItem.appendChild(restaurantDescription);

      restaurantsList.appendChild(restaurantItem);
    });
  })
.catch(error => console.error(error));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("47adc421bc1e86e2230b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNjNzVhMGZmZjI2NjQ0Yzc1NWQyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QixDQUFDO0FBQ0Y7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7OztVQ3BDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLyogZm9yIGFzeW5jIGF3YWl0IHRyYW5zcGlsZSAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG5mZXRjaCgnREFUQS5qc29uJylcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTonLCByZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLy8gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZygnRGF0YTonLCBkYXRhKTtcbiAgICBjb25zdCByZXN0YXVyYW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudHMtbGlzdCcpO1xuXG4gICAgZGF0YS5yZXN0YXVyYW50cy5mb3JFYWNoKHJlc3RhdXJhbnQgPT4ge1xuICAgICAgY29uc3QgcmVzdGF1cmFudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtaXRlbScpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHJlc3RhdXJhbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJlc3RhdXJhbnQucGljdHVyZUlkKTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRSYXRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgIHJlc3RhdXJhbnRSYXRpbmdzLmlubmVyVGV4dCA9ICdSYXRpbmc6ICcgKyByZXN0YXVyYW50LnJhdGluZztcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRSYXRpbmdzKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgcmVzdGF1cmFudE5hbWUuaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5uYW1lO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5kZXNjcmlwdGlvbjtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbik7XG5cbiAgICAgIHJlc3RhdXJhbnRzTGlzdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SXRlbSk7XG4gICAgfSk7XG4gIH0pXG4uY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ3YWRjNDIxYmMxZTg2ZTIyMzBiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9