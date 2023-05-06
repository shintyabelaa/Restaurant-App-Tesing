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


const ExploreRestaurants = {
  async render() {
    return `
       <h2>Explore Restaurants</h2>
    `;
  },

  async afterRender() {
    const restaurants = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].exploreRestaurants();
    console.log(restaurants);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreRestaurants);

// import RestaurantSource from '../../data/restaurant-source';

// const ExploreRestaurants = {
//   async render() {
//     return `
//       <h2>Explore Restaurants</h2>
//       <div class="restaurants-container"></div>
//     `;
//   },

//   async afterRender() {
//     const restaurants = await RestaurantSource.exploreRestaurants();
//     const restaurantsContainer = document.querySelector('.restaurants-container');

//     if (restaurants === undefined || restaurants.length === 0) {
//       restaurantsContainer.innerHTML = '<p>Data not found</p>';
//     } else {
//       restaurantsContainer.innerHTML = restaurants.map((restaurant) => `
//         <div class="restaurant-item">
//           <img src="${restaurant.pictureId}" alt="${restaurant.name}" />
//           <div class="restaurant-item__content">
//             <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
//             <p>Rating: ${restaurant.rating}</p>
//             <p>${restaurant.description}</p>
//           </div>
//         </div>
//       `).join('');
//     }
//   },
// };

// export default ExploreRestaurants;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("25e5806a2d0a205a15bc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjZkNGM4ODkzYmEwZWVhMmQyZjI1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlGQUFnQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9FQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkY7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQix3REFBZSxDQUFDO0FBQzFDLHFCQUFxQix3REFBZSxDQUFDLFVBQVUsR0FBRztBQUNsRDtBQUNBO0FBQ0EsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNQNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw4QkFBOEIsa0ZBQW1DO0FBQ2pFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUIsU0FBUyxnQkFBZ0I7QUFDdkU7QUFDQSw4QkFBOEIsYUFBYSxjQUFjLEVBQUUsSUFBSSxnQkFBZ0I7QUFDL0UsNEJBQTRCLGtCQUFrQjtBQUM5QyxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDaERBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvZGF0YS9yZXN0YXVyYW50LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9nbG9iYWxzL2FwaS1lbmRwb2ludC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9nbG9iYWxzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9leHBsb3JlLXJlc3RhdXJhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFQSV9FTkRQT0lOVCBmcm9tICcuLi9nbG9iYWxzL2FwaS1lbmRwb2ludCc7XHJcblxyXG5jbGFzcyBSZXN0YXVyYW50U291cmNlIHtcclxuICBzdGF0aWMgYXN5bmMgZXhwbG9yZVJlc3RhdXJhbnRzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfRU5EUE9JTlQuRVhQTE9SRV9SRVNUQVVSQU5UUyk7XHJcbiAgICBjb25zdCByZXNwb25zZUpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uLnJlc3RhdXJhbnRzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGRldGFpbFJlc3RhdXJhbnRzKGlkKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9FTkRQT0lOVC5ERVRBSUwoaWQpKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50U291cmNlO1xyXG4iLCJpbXBvcnQgQ09ORklHIGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IEFQSV9FTkRQT0lOVCA9IHtcclxuICBFWFBMT1JFX1JFU1RBVVJBTlRTOiBgJHtDT05GSUcuQkFTRV9VUkx9L2xpc3RgLFxyXG4gIERFVEFJTDogKGlkKSA9PiBgJHtDT05GSUcuQkFTRV9VUkx9L2RldGFpbC8ke2lkfWAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUElfRU5EUE9JTlQ7XHJcbiIsImNvbnN0IENPTkZJRyA9IHtcclxuICBCQVNFX1VSTDogJ2h0dHBzOi8vcmVzdGF1cmFudC1hcGkuZGljb2RpbmcuZGV2LycsXHJcbiAgQkFTRV9JTUFHRV9VUkw6ICdodHRwczovL3Jlc3RhdXJhbnQtYXBpLmRpY29kaW5nLmRldi9pbWFnZXMvbGFyZ2UvJyxcclxuICBERUZBVUxUX0xBTkdVQUdFOiAnZW4tdXMnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ09ORklHO1xyXG4vLyBhc3luYyBmdW5jdGlvbiByZXN0YXVyYW50c0xpc3QoKSB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmVzdGF1cmFudC1hcGkuZGljb2RpbmcuZGV2L2xpc3QnKTtcclxuLy8gICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSnNvbik7XHJcbi8vICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIHJlc3RhdXJhbnRzTGlzdCgpO1xyXG4iLCJpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuXHJcbmNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgPGgyPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gyPlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5leHBsb3JlUmVzdGF1cmFudHMoKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3RhdXJhbnRzKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG5cclxuLy8gaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSAnLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZSc7XHJcblxyXG4vLyBjb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbi8vICAgYXN5bmMgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgPGgyPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gyPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudHMtY29udGFpbmVyXCI+PC9kaXY+XHJcbi8vICAgICBgO1xyXG4vLyAgIH0sXHJcblxyXG4vLyAgIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudHMtY29udGFpbmVyJyk7XHJcblxyXG4vLyAgICAgaWYgKHJlc3RhdXJhbnRzID09PSB1bmRlZmluZWQgfHwgcmVzdGF1cmFudHMubGVuZ3RoID09PSAwKSB7XHJcbi8vICAgICAgIHJlc3RhdXJhbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5EYXRhIG5vdCBmb3VuZDwvcD4nO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gcmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiBgXHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbVwiPlxyXG4vLyAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkfVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtX19jb250ZW50XCI+XHJcbi8vICAgICAgICAgICAgIDxoMz48YSBocmVmPVwiJHtgLyMvZGV0YWlsLyR7cmVzdGF1cmFudC5pZH1gfVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4vLyAgICAgICAgICAgICA8cD5SYXRpbmc6ICR7cmVzdGF1cmFudC5yYXRpbmd9PC9wPlxyXG4vLyAgICAgICAgICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIGApLmpvaW4oJycpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI1ZTU4MDZhMmQwYTIwNWExNWJjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9