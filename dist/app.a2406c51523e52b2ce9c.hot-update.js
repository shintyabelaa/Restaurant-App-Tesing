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
/******/ 	__webpack_require__.h = () => ("5ec3d5bd260582b0bea7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmEyNDA2YzUxNTIzZTUyYjJjZTljLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QixDQUFDO0FBQ0Y7OztBQUc1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7O1VDN0JBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnOyAvKiBmb3IgYXN5bmMgYXdhaXQgdHJhbnNwaWxlICovXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XG5cblxuZmV0Y2goJ0RBVEEuanNvbicpXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pXG4gIC8vIHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSk7XG4gICAgY29uc3QgcmVzdGF1cmFudHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnRzLWxpc3QnKTtcblxuICAgIGRhdGEucmVzdGF1cmFudHMuZm9yRWFjaChyZXN0YXVyYW50ID0+IHtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN0YXVyYW50SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWl0ZW0nKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgcmVzdGF1cmFudE5hbWUuaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5uYW1lO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5kZXNjcmlwdGlvbjtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbik7XG5cbiAgICAgIHJlc3RhdXJhbnRzTGlzdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SXRlbSk7XG4gICAgfSk7XG4gIH0pXG4uY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVlYzNkNWJkMjYwNTgyYjBiZWE3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9