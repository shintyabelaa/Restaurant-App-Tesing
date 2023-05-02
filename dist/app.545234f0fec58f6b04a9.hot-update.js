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

      const restaurantPlace = document.createElement('p');
      restaurantPlace.innerText = restaurantPlace + restaurant.rating;
      restaurantItem.appendChild(restaurantPlace);

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
/******/ 	__webpack_require__.h = () => ("c22fc009bb6a8e069482")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjU0NTIzNGYwZmVjNThmNmIwNGE5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QixDQUFDO0FBQ0Y7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7Ozs7Ozs7VUN4Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8qIGZvciBhc3luYyBhd2FpdCB0cmFuc3BpbGUgKi9cbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcblxuZmV0Y2goJ0RBVEEuanNvbicpXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pXG4gIC8vIHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oZGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSk7XG4gICAgY29uc3QgcmVzdGF1cmFudHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnRzLWxpc3QnKTtcblxuICAgIGRhdGEucmVzdGF1cmFudHMuZm9yRWFjaChyZXN0YXVyYW50ID0+IHtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN0YXVyYW50SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWl0ZW0nKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudFBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcmVzdGF1cmFudFBsYWNlLmlubmVyVGV4dCA9IHJlc3RhdXJhbnRQbGFjZSArIHJlc3RhdXJhbnQucmF0aW5nO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFBsYWNlKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN0YXVyYW50LnBpY3R1cmVJZCk7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50UmF0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICByZXN0YXVyYW50UmF0aW5ncy5pbm5lclRleHQgPSAnUmF0aW5nOiAnICsgcmVzdGF1cmFudC5yYXRpbmc7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50UmF0aW5ncyk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQubmFtZTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQuZGVzY3JpcHRpb247XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuXG4gICAgICByZXN0YXVyYW50c0xpc3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEl0ZW0pO1xuICAgIH0pO1xuICB9KVxuLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMjJmYzAwOWJiNmE4ZTA2OTQ4MlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==