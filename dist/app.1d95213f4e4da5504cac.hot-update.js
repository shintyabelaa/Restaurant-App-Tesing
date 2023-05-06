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
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAIL(id));
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


/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_explore_restaurants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/explore-restaurants */ "./src/scripts/views/pages/explore-restaurants.js");
/* harmony import */ var _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/favorite */ "./src/scripts/views/pages/favorite.js");
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/detail */ "./src/scripts/views/pages/detail.js");




const routes = {
  '/': _views_pages_explore_restaurants__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/home': _views_pages_explore_restaurants__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/favorite': _views_pages_favorite__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_2__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ "./src/scripts/views/pages/detail.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/pages/detail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _data_restaurant_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/restaurant-source */ "./src/scripts/data/restaurant-source.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");




const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
    `;
  },

  async afterRender() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseActiveUrlWithoutCombiner();
    const restaurant = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_1__["default"].detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_2__.createRestaurantDetailTemplate)(restaurant);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


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
/* harmony import */ var _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/restaurant-source */ "./src/scripts/data/restaurant-source.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");



const ExploreRestaurants = {
  async render() {
    return `
    <div class="content">
      <div class="explore">
        <h1 class="explore__label">Explore Restaurants</h1>
      </div>
      <div id="restaurants">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].exploreRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      const restaurantListTemplate = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createRestaurantListTemplate)(restaurant);
      restaurantsContainer.innerHTML += restaurantListTemplate;
    });

    const linkDetails = document.querySelectorAll('.restaurant-list__content a');
    linkDetails.forEach((link) => {
      link.addEventListener('click', (event) => {
        const restaurantId = event.target.getAttribute('href').substr(1);
        const url = `/detail/${restaurantId}`;
        window.location.href = url;
      });
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreRestaurants);


/***/ }),

/***/ "./src/scripts/views/pages/favorite.js":
/*!*********************************************!*\
  !*** ./src/scripts/views/pages/favorite.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Favorite = {
  async render() {
    return `
        <h2>Favorite</h2>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favorite);


/***/ }),

/***/ "./src/scripts/views/templates/template-creator.js":
/*!*********************************************************!*\
  !*** ./src/scripts/views/templates/template-creator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRestaurantDetailTemplate": () => (/* binding */ createRestaurantDetailTemplate),
/* harmony export */   "createRestaurantListTemplate": () => (/* binding */ createRestaurantListTemplate)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/config */ "./src/scripts/globals/config.js");


const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_name">${restaurant.name}</h2>
    <img class="restaurant__image" src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
      <h4>Kota</h4>
      <p>${restaurant.city} minutes</p>
      <h4>Menu Makanan</h4>
      <p>${restaurant.foods}</p>
      <h4>Menu Minuman</h4>
      <p>${restaurant.drinks}</p>
      <h4>Costumer Reviews</h4>
      <p>${restaurant.customerReviews}</p>
    </div>
    <div class="restaurant_description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
`;

const createRestaurantListTemplate = (restaurant) => `
  <div id="restaurant-item">
    <div class="restarant-list__header">
      <img class="restarant-list__header__image" alt="${restaurant.name}"
           src="${restaurant.pictureId ? _globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-list__header__rating">
        <h2>⭐️<span class="restaurant-list__header__rating__score">${restaurant.rating}</span></h2>
      </div>
    </div>
    <div class="restaurant-list__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${`${restaurant.description.slice(0, 250)} ...`}</p>
    </div>
  </div>
`;




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8a68d774fd3202b118e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjFkOTUyMTNmNGU0ZGE1NTA0Y2FjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9FQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkY7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQix3REFBZSxDQUFDO0FBQzFDLGlCQUFpQix3REFBZSxDQUFDO0FBQ2pDLHdCQUF3Qix3REFBZSxDQUFDO0FBQ3hDLHFCQUFxQix3REFBZSxDQUFDLFVBQVUsR0FBRztBQUNsRDtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDckI7QUFDSjtBQUMzQztBQUNBO0FBQ0EsT0FBTyx3RUFBa0I7QUFDekIsV0FBVyx3RUFBa0I7QUFDN0IsZUFBZSw2REFBUTtBQUN2QixpQkFBaUIsMkRBQU07QUFDdkI7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWDBCO0FBQ1k7QUFDbUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0Isd0ZBQXVDO0FBQ3ZELDZCQUE2QixpRkFBa0M7QUFDL0Q7QUFDQSxvQ0FBb0MsMkZBQThCO0FBQ2xFLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0M7QUFDaUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw4QkFBOEIsa0ZBQW1DO0FBQ2pFO0FBQ0E7QUFDQSxxQ0FBcUMseUZBQTRCO0FBQ2pFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1prQjtBQUMxQztBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCwwQ0FBMEMsc0VBQXFCLHdCQUF3QixTQUFTLGdCQUFnQjtBQUNoSDtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEUsa0JBQWtCLHVCQUF1QixzRUFBcUIsMkVBQTJFO0FBQ3pJO0FBQ0EscUVBQXFFLGtCQUFrQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYyxJQUFJLGdCQUFnQjtBQUNqRSxXQUFXLEdBQUcsc0NBQXNDLEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDd0U7Ozs7Ozs7OztVQ3hDeEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9kYXRhL3Jlc3RhdXJhbnQtc291cmNlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2dsb2JhbHMvYXBpLWVuZHBvaW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2dsb2JhbHMvY29uZmlnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3JvdXRlcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZGV0YWlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2V4cGxvcmUtcmVzdGF1cmFudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJX0VORFBPSU5UIGZyb20gJy4uL2dsb2JhbHMvYXBpLWVuZHBvaW50JztcclxuXHJcbmNsYXNzIFJlc3RhdXJhbnRTb3VyY2Uge1xyXG4gIHN0YXRpYyBhc3luYyBleHBsb3JlUmVzdGF1cmFudHMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5FWFBMT1JFX1JFU1RBVVJBTlRTKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXNwb25zZUpzb24ucmVzdGF1cmFudHM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgZGV0YWlsUmVzdGF1cmFudHMoaWQpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5ULkRFVEFJTChpZCkpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRTb3VyY2U7XHJcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuY29uc3QgQVBJX0VORFBPSU5UID0ge1xyXG4gIEVYUExPUkVfUkVTVEFVUkFOVFM6IGAke0NPTkZJRy5CQVNFX1VSTH0vbGlzdGAsXHJcbiAgQUREX1JFVklFVzogYCR7Q09ORklHLkJBU0VfVVJMfS9yZXZpZXdgLFxyXG4gIFNFQVJDSF9SRVNUQVVSQU5UOiBgJHtDT05GSUcuQkFTRV9VUkx9L3NlYXJjaD9xPTxxdWVyeT5gLFxyXG4gIERFVEFJTDogKGlkKSA9PiBgJHtDT05GSUcuQkFTRV9VUkx9L2RldGFpbC8ke2lkfWAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUElfRU5EUE9JTlQ7XHJcbiIsImNvbnN0IENPTkZJRyA9IHtcclxuICBCQVNFX1VSTDogJ2h0dHBzOi8vcmVzdGF1cmFudC1hcGkuZGljb2RpbmcuZGV2LycsXHJcbiAgQkFTRV9JTUFHRV9VUkw6ICdodHRwczovL3Jlc3RhdXJhbnQtYXBpLmRpY29kaW5nLmRldi9pbWFnZXMvbGFyZ2UvJyxcclxuICBERUZBVUxUX0xBTkdVQUdFOiAnZW4tdXMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ09ORklHO1xyXG4iLCJpbXBvcnQgRXhwbG9yZVJlc3RhdXJhbnRzIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2V4cGxvcmUtcmVzdGF1cmFudHMnO1xyXG5pbXBvcnQgRmF2b3JpdGUgZnJvbSAnLi4vdmlld3MvcGFnZXMvZmF2b3JpdGUnO1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4uL3ZpZXdzL3BhZ2VzL2RldGFpbCc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgJy8nOiBFeHBsb3JlUmVzdGF1cmFudHMsXHJcbiAgJy9ob21lJzogRXhwbG9yZVJlc3RhdXJhbnRzLFxyXG4gICcvZmF2b3JpdGUnOiBGYXZvcml0ZSxcclxuICAnL2RldGFpbC86aWQnOiBEZXRhaWwsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcbiIsImltcG9ydCBVcmxQYXJzZXIgZnJvbSAnLi4vLi4vcm91dGVzL3VybC1wYXJzZXInO1xyXG5pbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuaW1wb3J0IHsgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3InO1xyXG5cclxuY29uc3QgRGV0YWlsID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgIDxkaXYgaWQ9XCJyZXN0YXVyYW50XCIgY2xhc3M9XCJyZXN0YXVyYW50XCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXJsID0gVXJsUGFyc2VyLnBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCk7XHJcbiAgICBjb25zdCByZXN0YXVyYW50ID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5kZXRhaWxSZXN0YXVyYW50cyh1cmwuaWQpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50Jyk7XHJcbiAgICByZXN0YXVyYW50Q29udGFpbmVyLmlubmVySFRNTCA9IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZShyZXN0YXVyYW50KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xyXG4iLCJpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuaW1wb3J0IHsgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcclxuXHJcbmNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImV4cGxvcmVcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJleHBsb3JlX19sYWJlbFwiPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInJlc3RhdXJhbnRzXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudHMnKTtcclxuICAgIHJlc3RhdXJhbnRzLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcclxuICAgICAgY29uc3QgcmVzdGF1cmFudExpc3RUZW1wbGF0ZSA9IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUocmVzdGF1cmFudCk7XHJcbiAgICAgIHJlc3RhdXJhbnRzQ29udGFpbmVyLmlubmVySFRNTCArPSByZXN0YXVyYW50TGlzdFRlbXBsYXRlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbGlua0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudC1saXN0X19jb250ZW50IGEnKTtcclxuICAgIGxpbmtEZXRhaWxzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYC9kZXRhaWwvJHtyZXN0YXVyYW50SWR9YDtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG4iLCJjb25zdCBGYXZvcml0ZSA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxoMj5GYXZvcml0ZTwvaDI+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgLy8gRnVuZ3NpIGluaSBha2FuIGRpcGFuZ2dpbCBzZXRlbGFoIHJlbmRlcigpXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlO1xyXG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnJztcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgICA8aDIgY2xhc3M9XCJyZXN0YXVyYW50X25hbWVcIj4ke3Jlc3RhdXJhbnQubmFtZX08L2gyPlxyXG4gICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnRfX2ltYWdlXCIgc3JjPVwiJHtDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBpY3R1cmVJZH1cIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIiAvPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRfX2luZm9cIj5cclxuICAgICAgPGgzPkluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgPGg0PkFsYW1hdDwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5hZGRyZXNzfTwvcD5cclxuICAgICAgPGg0PktvdGE8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuY2l0eX0gbWludXRlczwvcD5cclxuICAgICAgPGg0Pk1lbnUgTWFrYW5hbjwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5mb29kc308L3A+XHJcbiAgICAgIDxoND5NZW51IE1pbnVtYW48L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZHJpbmtzfTwvcD5cclxuICAgICAgPGg0PkNvc3R1bWVyIFJldmlld3M8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuY3VzdG9tZXJSZXZpZXdzfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRfZGVzY3JpcHRpb25cIj5cclxuICAgICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgPGRpdiBpZD1cInJlc3RhdXJhbnQtaXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJfX2ltYWdlXCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCJcclxuICAgICAgICAgICBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkID8gQ09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5waWN0dXJlSWQgOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY2Ni84MDAvNDUwP2dyYXlzY2FsZSd9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2hlYWRlcl9fcmF0aW5nXCI+XHJcbiAgICAgICAgPGgyPuKtkO+4jzxzcGFuIGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19oZWFkZXJfX3JhdGluZ19fc2NvcmVcIj4ke3Jlc3RhdXJhbnQucmF0aW5nfTwvc3Bhbj48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9fY29udGVudFwiPlxyXG4gICAgICA8aDM+PGEgaHJlZj1cIi8jL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbiAgICAgIDxwPiR7YCR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbi5zbGljZSgwLCAyNTApfSAuLi5gfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSwgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlIH07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE4YTY4ZDc3NGZkMzIwMmIxMThlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9