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
      restaurantsContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createRestaurantListTemplate)(restaurant);
    
    
    });
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
/******/ 	__webpack_require__.h = () => ("75a9c4a8a65c0d4356e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjZhOWZhNWM4MDk0NzI2NDlkZTBiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ2lCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsOEJBQThCLGtGQUFtQztBQUNqRTtBQUNBO0FBQ0Esd0NBQXdDLHlGQUE0QjtBQUNwRTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCLFNBQVMsZ0JBQWdCO0FBQ3ZFO0FBQ0EsOEJBQThCLGFBQWEsY0FBYyxFQUFFLElBQUksZ0JBQWdCO0FBQy9FLDRCQUE0QixrQkFBa0I7QUFDOUMsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7OztVQzVEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2V4cGxvcmUtcmVzdGF1cmFudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuaW1wb3J0IHsgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcclxuXHJcbmNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImV4cGxvcmVcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJleHBsb3JlX19sYWJlbFwiPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInJlc3RhdXJhbnRzXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudHMnKTtcclxuICAgIHJlc3RhdXJhbnRzLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcclxuICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MICs9IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUocmVzdGF1cmFudCk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGxvcmVSZXN0YXVyYW50cztcclxuXHJcbi8vIGltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UnO1xyXG5cclxuLy8gY29uc3QgRXhwbG9yZVJlc3RhdXJhbnRzID0ge1xyXG4vLyAgIGFzeW5jIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiBgXHJcbi8vICAgICAgIDxoMj5FeHBsb3JlIFJlc3RhdXJhbnRzPC9oMj5cclxuLy8gICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRzLWNvbnRhaW5lclwiPjwvZGl2PlxyXG4vLyAgICAgYDtcclxuLy8gICB9LFxyXG5cclxuLy8gICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5leHBsb3JlUmVzdGF1cmFudHMoKTtcclxuLy8gICAgIGNvbnN0IHJlc3RhdXJhbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnRzLWNvbnRhaW5lcicpO1xyXG5cclxuLy8gICAgIGlmIChyZXN0YXVyYW50cyA9PT0gdW5kZWZpbmVkIHx8IHJlc3RhdXJhbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4vLyAgICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnPHA+RGF0YSBub3QgZm91bmQ8L3A+JztcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHJlc3RhdXJhbnRzQ29udGFpbmVyLmlubmVySFRNTCA9IHJlc3RhdXJhbnRzLm1hcCgocmVzdGF1cmFudCkgPT4gYFxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWl0ZW1cIj5cclxuLy8gICAgICAgICAgIDxpbWcgc3JjPVwiJHtyZXN0YXVyYW50LnBpY3R1cmVJZH1cIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIiAvPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbV9fY29udGVudFwiPlxyXG4vLyAgICAgICAgICAgICA8aDM+PGEgaHJlZj1cIiR7YC8jL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9YH1cIj4ke3Jlc3RhdXJhbnQubmFtZX08L2E+PC9oMz5cclxuLy8gICAgICAgICAgICAgPHA+UmF0aW5nOiAke3Jlc3RhdXJhbnQucmF0aW5nfTwvcD5cclxuLy8gICAgICAgICAgICAgPHA+JHtyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvcD5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICBgKS5qb2luKCcnKTtcclxuLy8gICAgIH1cclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NWE5YzRhOGE2NWMwZDQzNTZlMVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==