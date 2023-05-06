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
    return responseJson.result;
  }

  static async detailRestaurants() {
    const response = await fetch(_globals_api_endpoint__WEBPACK_IMPORTED_MODULE_0__["default"].DETAIL);
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
// import RestaurantSource from '../../data/restaurant-source';

// const ExploreRestaurants = {
//   async render() {
//     return `
//        <h2>Explore Restaurants</h2> 
//     `;
//   },

//   async afterRender() {
//     const restaurants = await RestaurantSource.exploreRestaurants();
//     console.log(restaurants);
//   },
// };

// export default ExploreRestaurants;



const ExploreRestaurants = {
  async render() {
    return `
      <h2>Explore Restaurants</h2>
      <div class="restaurants-container"></div>
    `;
  },

  async afterRender() {
    const restaurants = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].exploreRestaurants();
    const restaurantsContainer = document.querySelector('.restaurants-container');

    if (restaurants === undefined || restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p>Data not found</p>';
    } else {
      restaurantsContainer.innerHTML = restaurants.map((restaurant) => `
        <div class="restaurant-item">
          <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
          <div class="restaurant-item__content">
            <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
            <p>Rating: ${restaurant.rating}</p>
            <p>${restaurant.description}</p>
          </div>
        </div>
      `).join('');
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreRestaurants);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("43a017c00da8753dc57c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmFlMDkyMzk5YjA3ODcxOGU4YmZlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9FQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkY7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQix3REFBZSxDQUFDO0FBQzFDLHFCQUFxQix3REFBZSxDQUFDLFVBQVUsR0FBRztBQUNsRDtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNQNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJvRTtBQUNyQjtBQUNKO0FBQzNDO0FBQ0E7QUFDQSxPQUFPLHdFQUFrQjtBQUN6QixXQUFXLHdFQUFrQjtBQUM3QixlQUFlLDZEQUFRO0FBQ3ZCLGlCQUFpQiwyREFBTTtBQUN2QjtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQzREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw4QkFBOEIsa0ZBQW1DO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCLFNBQVMsZ0JBQWdCO0FBQ3BFO0FBQ0EsMkJBQTJCLGFBQWEsY0FBYyxFQUFFLElBQUksZ0JBQWdCO0FBQzVFLHlCQUF5QixrQkFBa0I7QUFDM0MsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7QUFDbEM7Ozs7Ozs7OztVQ2pEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvZ2xvYmFscy9hcGktZW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvZ2xvYmFscy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9leHBsb3JlLXJlc3RhdXJhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFQSV9FTkRQT0lOVCBmcm9tICcuLi9nbG9iYWxzL2FwaS1lbmRwb2ludCc7XHJcblxyXG5jbGFzcyBSZXN0YXVyYW50U291cmNlIHtcclxuICBzdGF0aWMgYXN5bmMgZXhwbG9yZVJlc3RhdXJhbnRzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuRVhQTE9SRV9SRVNUQVVSQU5UUyk7XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uLnJlc3VsdDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBkZXRhaWxSZXN0YXVyYW50cygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQVBJX0VORFBPSU5ULkRFVEFJTCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRTb3VyY2U7XHJcbiIsImltcG9ydCBDT05GSUcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuY29uc3QgQVBJX0VORFBPSU5UID0ge1xyXG4gIEVYUExPUkVfUkVTVEFVUkFOVFM6IGAke0NPTkZJRy5CQVNFX1VSTH0vbGlzdGAsXHJcbiAgREVUQUlMOiAoaWQpID0+IGAke0NPTkZJRy5CQVNFX1VSTH0vZGV0YWlsLyR7aWR9YCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSV9FTkRQT0lOVDtcclxuIiwiY29uc3QgQ09ORklHID0ge1xyXG4gIEJBU0VfVVJMOiAnaHR0cHM6Ly9yZXN0YXVyYW50LWFwaS5kaWNvZGluZy5kZXYvJyxcclxuICBCQVNFX0lNQUdFX1VSTDogJ2h0dHBzOi8vcmVzdGF1cmFudC1hcGkuZGljb2RpbmcuZGV2L2ltYWdlcy9sYXJnZS8nLFxyXG4gIERFRkFVTFRfTEFOR1VBR0U6ICdlbi11cycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XHJcbi8vIGFzeW5jIGZ1bmN0aW9uIHJlc3RhdXJhbnRzTGlzdCgpIHtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yZXN0YXVyYW50LWFwaS5kaWNvZGluZy5kZXYvbGlzdCcpO1xyXG4vLyAgICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKc29uKTtcclxuLy8gICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gcmVzdGF1cmFudHNMaXN0KCk7XHJcbiIsImltcG9ydCBFeHBsb3JlUmVzdGF1cmFudHMgZnJvbSAnLi4vdmlld3MvcGFnZXMvZXhwbG9yZS1yZXN0YXVyYW50cyc7XHJcbmltcG9ydCBGYXZvcml0ZSBmcm9tICcuLi92aWV3cy9wYWdlcy9mYXZvcml0ZSc7XHJcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi4vdmlld3MvcGFnZXMvZGV0YWlsJztcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAnLyc6IEV4cGxvcmVSZXN0YXVyYW50cyxcclxuICAnL2hvbWUnOiBFeHBsb3JlUmVzdGF1cmFudHMsXHJcbiAgJy9mYXZvcml0ZSc6IEZhdm9yaXRlLFxyXG4gICcvZGV0YWlsLzppZCc6IERldGFpbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIiwiLy8gaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSAnLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZSc7XHJcblxyXG4vLyBjb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbi8vICAgYXN5bmMgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgIDxoMj5FeHBsb3JlIFJlc3RhdXJhbnRzPC9oMj4gXHJcbi8vICAgICBgO1xyXG4vLyAgIH0sXHJcblxyXG4vLyAgIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzdGF1cmFudHMpO1xyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcblxyXG5pbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuXHJcbmNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICA8aDI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50cy1jb250YWluZXJcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZXhwbG9yZVJlc3RhdXJhbnRzKCk7XHJcbiAgICBjb25zdCByZXN0YXVyYW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50cy1jb250YWluZXInKTtcclxuXHJcbiAgICBpZiAocmVzdGF1cmFudHMgPT09IHVuZGVmaW5lZCB8fCByZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkRhdGEgbm90IGZvdW5kPC9wPic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSByZXN0YXVyYW50cy5tYXAoKHJlc3RhdXJhbnQpID0+IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzdGF1cmFudC5waWN0dXJlSWR9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCIgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWl0ZW1fX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIke2AvIy9kZXRhaWwvJHtyZXN0YXVyYW50LmlkfWB9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbiAgICAgICAgICAgIDxwPlJhdGluZzogJHtyZXN0YXVyYW50LnJhdGluZ308L3A+XHJcbiAgICAgICAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYCkuam9pbignJyk7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVSZXN0YXVyYW50cztcclxuXHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQzYTAxN2MwMGRhODc1M2RjNTdjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9