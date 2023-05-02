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

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});


/***/ }),

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ "./src/scripts/routes/routes.js");




class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("17daf0b1d485c4c9f163")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmY3NmMzMjFhYzAwNjdhMWJhNGUzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCLENBQUM7QUFDRDtBQUNLO0FBQ0o7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGdCQUFnQixrREFBRztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RHVEO0FBQ1g7QUFDUDtBQUN0QztBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvRUFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRkFBb0M7QUFDcEQsaUJBQWlCLHNEQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7OztVQzdCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnOyAvKiBmb3IgYXN5bmMgYXdhaXQgdHJhbnNwaWxlICovXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvcmVzcG9uc2l2ZS5jc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXdzL2FwcCc7XG5cbmZldGNoKCdEQVRBLmpzb24nKVxuICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pXG4gIC8vIHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRGF0YTonLCBkYXRhKTtcbiAgICBjb25zdCByZXN0YXVyYW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudHMtbGlzdCcpO1xuXG4gICAgZGF0YS5yZXN0YXVyYW50cy5mb3JFYWNoKChyZXN0YXVyYW50KSA9PiB7XG4gICAgICBjb25zdCByZXN0YXVyYW50SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1pdGVtJyk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRQbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICByZXN0YXVyYW50UGxhY2UuaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5jaXR5O1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFBsYWNlKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN0YXVyYW50LnBpY3R1cmVJZCk7XG4gICAgICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCByZXN0YXVyYW50Lm5hbWUpO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudFJhdGluZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgcmVzdGF1cmFudFJhdGluZ3MuaW5uZXJUZXh0ID0gYFJhdGluZzogJHtyZXN0YXVyYW50LnJhdGluZ31gO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFJhdGluZ3MpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICByZXN0YXVyYW50TmFtZS5pbm5lclRleHQgPSByZXN0YXVyYW50Lm5hbWU7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHJlc3RhdXJhbnREZXNjcmlwdGlvbi5pbm5lclRleHQgPSByZXN0YXVyYW50LmRlc2NyaXB0aW9uO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudERlc2NyaXB0aW9uKTtcblxuICAgICAgcmVzdGF1cmFudHNMaXN0LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJdGVtKTtcbiAgICB9KTtcbiAgfSlcbiAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKHtcbiAgYnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyJyksXG4gIGRyYXdlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYXdlci1saXN0JyksXG4gIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbn0pO1xuIiwiaW1wb3J0IERyYXdlckluaXRpYXRvciBmcm9tICcuLi91dGlscy9kcmF3ZXItaW5pdGlhdG9yJztcclxuaW1wb3J0IFVybFBhcnNlciBmcm9tICcuLi9yb3V0ZXMvdXJsLXBhcnNlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQgfSkge1xyXG4gICAgdGhpcy5fYnV0dG9uID0gYnV0dG9uO1xyXG4gICAgdGhpcy5fZHJhd2VyID0gZHJhd2VyO1xyXG4gICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5faW5pdGlhbEFwcFNoZWxsKCk7XHJcbiAgfVxyXG5cclxuICBfaW5pdGlhbEFwcFNoZWxsKCkge1xyXG4gICAgRHJhd2VySW5pdGlhdG9yLmluaXQoe1xyXG4gICAgICBidXR0b246IHRoaXMuX2J1dHRvbixcclxuICAgICAgZHJhd2VyOiB0aGlzLl9kcmF3ZXIsXHJcbiAgICAgIGNvbnRlbnQ6IHRoaXMuX2NvbnRlbnQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbmRlclBhZ2UoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRoQ29tYmluZXIoKTtcclxuICAgIGNvbnN0IHBhZ2UgPSByb3V0ZXNbdXJsXTtcclxuICAgIHRoaXMuX2NvbnRlbnQuaW5uZXJIVE1MID0gYXdhaXQgcGFnZS5yZW5kZXIoKTtcclxuICAgIGF3YWl0IHBhZ2UuYWZ0ZXJSZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTdkYWYwYjFkNDg1YzRjOWYxNjNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=