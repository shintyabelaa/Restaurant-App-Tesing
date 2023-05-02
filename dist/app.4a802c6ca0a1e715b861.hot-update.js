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
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");
 /* for async await transpile */





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

const app = new _views_app__WEBPACK_IMPORTED_MODULE_3__["default"]({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.drawer-list'),
  content: document.querySelector('body'),
});

_utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_4__["default"].init({
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d4b79f88c5c35c96d7bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjRhODAyYzZjYTBhMWU3MTViODYxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QixDQUFDO0FBQ0Q7QUFDSztBQUNKO0FBQ3lCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGtCQUFrQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxnQkFBZ0Isa0RBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvRUFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7O1VDaEVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnOyAvKiBmb3IgYXN5bmMgYXdhaXQgdHJhbnNwaWxlICovXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XG5pbXBvcnQgRHJhd2VySW5pdGlhdG9yIGZyb20gJy4vdXRpbHMvZHJhd2VyLWluaXRpYXRvcic7XG5cbmZldGNoKCdEQVRBLmpzb24nKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pXG4gIC8vIHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRGF0YTonLCBkYXRhKTtcbiAgICBjb25zdCByZXN0YXVyYW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudHMtbGlzdCcpO1xuXG4gICAgZGF0YS5yZXN0YXVyYW50cy5mb3JFYWNoKChyZXN0YXVyYW50KSA9PiB7XG4gICAgICBjb25zdCByZXN0YXVyYW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1pdGVtJyk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICByZXN0YXVyYW50UGxhY2UuaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5jaXR5O1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFBsYWNlKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN0YXVyYW50LnBpY3R1cmVJZCk7XG4gICAgICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCByZXN0YXVyYW50Lm5hbWUpO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudFJhdGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgcmVzdGF1cmFudFJhdGluZ3MuaW5uZXJUZXh0ID0gYFJhdGluZzogJHtyZXN0YXVyYW50LnJhdGluZ31gO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFJhdGluZ3MpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSByZXN0YXVyYW50Lm5hbWU7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5pbm5lclRleHQgPSByZXN0YXVyYW50LmRlc2NyaXB0aW9uO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcblxuICAgICAgcmVzdGF1cmFudHNMaXN0LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJdGVtKTtcbiAgICB9KTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcbiAgYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyJyksXG4gIGRyYXdlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYXdlci1saXN0JyksXG4gIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbn0pO1xuXG5EcmF3ZXJJbml0aWF0b3IuaW5pdCh7XG4gIGJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hhbWJ1cmdlcicpLFxuICBkcmF3ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmF3ZXItbGlzdCcpLFxuICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG4gIGFwcC5yZW5kZXJQYWdlKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGFwcC5yZW5kZXJQYWdlKCk7XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ0Yjc5Zjg4YzVjMzVjOTZkN2JkXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9