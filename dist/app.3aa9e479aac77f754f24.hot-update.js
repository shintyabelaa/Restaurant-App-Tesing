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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./src/styles/responsive.css");
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/app */ "./src/scripts/views/app.js");
 /* for async await transpile */




const app = new _views_app__WEBPACK_IMPORTED_MODULE_3__["default"]({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.drawer-list'),
  content: document.querySelector('body'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

fetch('DATA.json')
  .then((response) => {
    console.log('Response:', response);
    return response.json();
  })
  // response.json())
  .then((data) => {
    console.log('Data:', data);
    const restaurantsList = document.getElementById('restaurants-list');

    data.restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('div');
      restaurantItem.classList.add('restaurant-item');

      const restaurantPlace = document.createElement('h1');
      restaurantPlace.innerText = restaurant.city;
      restaurantItem.appendChild(restaurantPlace);

      const restaurantImage = document.createElement('img');
      restaurantImage.setAttribute('src', restaurant.pictureId);
      restaurantImage.setAttribute('alt', restaurant.name);
      restaurantItem.appendChild(restaurantImage);

      const restaurantRatings = document.createElement('h2');
      restaurantRatings.innerText = `Rating: ${restaurant.rating}`;
      restaurantItem.appendChild(restaurantRatings);

      const restaurantName = document.createElement('h3');
      restaurantName.innerText = restaurant.name;
      restaurantItem.appendChild(restaurantName);

      const restaurantDescription = document.createElement('p');
      restaurantDescription.innerText = restaurant.description;
      restaurantItem.appendChild(restaurantDescription);

      restaurantsList.appendChild(restaurantItem);
    });
  })
  .catch((error) => console.error(error));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eaa68fcf1500e32448fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNhYTllNDc5YWFjNzdmNzU0ZjI0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCLENBQUM7QUFDRDtBQUNLO0FBQ0o7O0FBRTlCLGdCQUFnQixrREFBRztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8qIGZvciBhc3luYyBhd2FpdCB0cmFuc3BpbGUgKi9cbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9yZXNwb25zaXZlLmNzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4vdmlld3MvYXBwJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCh7XG4gIGJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhbWJ1cmdlcicpLFxuICBkcmF3ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmF3ZXItbGlzdCcpLFxuICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gIGFwcC5yZW5kZXJQYWdlKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGFwcC5yZW5kZXJQYWdlKCk7XG59KTtcblxuZmV0Y2goJ0RBVEEuanNvbicpXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTonLCByZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLy8gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdEYXRhOicsIGRhdGEpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50cy1saXN0Jyk7XG5cbiAgICBkYXRhLnJlc3RhdXJhbnRzLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN0YXVyYW50SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWl0ZW0nKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudFBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgIHJlc3RhdXJhbnRQbGFjZS5pbm5lclRleHQgPSByZXN0YXVyYW50LmNpdHk7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50UGxhY2UpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHJlc3RhdXJhbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJlc3RhdXJhbnQucGljdHVyZUlkKTtcbiAgICAgIHJlc3RhdXJhbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHJlc3RhdXJhbnQubmFtZSk7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50UmF0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICByZXN0YXVyYW50UmF0aW5ncy5pbm5lclRleHQgPSBgUmF0aW5nOiAke3Jlc3RhdXJhbnQucmF0aW5nfWA7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50UmF0aW5ncyk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQubmFtZTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQuZGVzY3JpcHRpb247XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuXG4gICAgICByZXN0YXVyYW50c0xpc3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEl0ZW0pO1xuICAgIH0pO1xuICB9KVxuICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlYWE2OGZjZjE1MDBlMzI0NDhmYVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==