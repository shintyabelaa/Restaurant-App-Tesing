"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

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
       <div class="restaurants-container"></div>
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
/******/ 	__webpack_require__.h = () => ("14039076e9f508ad4c17")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjVjNzcxMDM0OWRmMDAzOWNkNzY0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDhCQUE4QixrRkFBbUM7QUFDakU7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGtCQUFrQixFQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQixTQUFTLGdCQUFnQjtBQUN2RTtBQUNBLDhCQUE4QixhQUFhLGNBQWMsRUFBRSxJQUFJLGdCQUFnQjtBQUMvRSw0QkFBNEIsa0JBQWtCO0FBQzlDLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7VUNqREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9leHBsb3JlLXJlc3RhdXJhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSAnLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZSc7XHJcblxyXG5jb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgIDxoMj5FeHBsb3JlIFJlc3RhdXJhbnRzPC9oMj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50cy1jb250YWluZXJcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZXhwbG9yZVJlc3RhdXJhbnRzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN0YXVyYW50cyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVSZXN0YXVyYW50cztcclxuXHJcbi8vIGltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UnO1xyXG5cclxuLy8gY29uc3QgRXhwbG9yZVJlc3RhdXJhbnRzID0ge1xyXG4vLyAgIGFzeW5jIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiBgXHJcbi8vICAgICAgIDxoMj5FeHBsb3JlIFJlc3RhdXJhbnRzPC9oMj5cclxuLy8gICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRzLWNvbnRhaW5lclwiPjwvZGl2PlxyXG4vLyAgICAgYDtcclxuLy8gICB9LFxyXG5cclxuLy8gICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5leHBsb3JlUmVzdGF1cmFudHMoKTtcclxuLy8gICAgIGNvbnN0IHJlc3RhdXJhbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnRzLWNvbnRhaW5lcicpO1xyXG5cclxuLy8gICAgIGlmIChyZXN0YXVyYW50cyA9PT0gdW5kZWZpbmVkIHx8IHJlc3RhdXJhbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+RGF0YSBub3QgZm91bmQ8L3A+JztcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHJlc3RhdXJhbnRzQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3RhdXJhbnRzLm1hcCgocmVzdGF1cmFudCkgPT4gYFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWl0ZW1cIj5cclxuLy8gICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXN0YXVyYW50LnBpY3R1cmVJZH1cIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIiAvPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbV9fY29udGVudFwiPlxyXG4vLyAgICAgICAgICAgICA8aDM+PGEgaHJlZj1cIiR7YC8jL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9YH1cIj4ke3Jlc3RhdXJhbnQubmFtZX08L2E+PC9oMz5cclxuLy8gICAgICAgICAgICAgPHA+UmF0aW5nOiAke3Jlc3RhdXJhbnQucmF0aW5nfTwvcD5cclxuLy8gICAgICAgICAgICAgPHA+JHtyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICBgKS5qb2luKCcnKTtcclxuLy8gICAgIH1cclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNDAzOTA3NmU5ZjUwOGFkNGMxN1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==