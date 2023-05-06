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
    <div class="content">
      <div class="explore">
        <h1 class="explore__label">Explore Restaurants</h1>
      </div>
      <div id="restaurants-list">
      </div>
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
/******/ 	__webpack_require__.h = () => ("bbed079ba3243b6d48ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmMwOGQwZGRkY2VkNzY4ODExMjE3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsOEJBQThCLGtGQUFtQztBQUNqRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUVBQWUsa0JBQWtCLEVBQUM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx5QkFBeUIscUJBQXFCLFNBQVMsZ0JBQWdCO0FBQ3ZFO0FBQ0EsOEJBQThCLGFBQWEsY0FBYyxFQUFFLElBQUksZ0JBQWdCO0FBQy9FLDRCQUE0QixrQkFBa0I7QUFDOUMsb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7OztVQ3JEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2V4cGxvcmUtcmVzdGF1cmFudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuXHJcbmNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuICBhc3luYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImV4cGxvcmVcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJleHBsb3JlX19sYWJlbFwiPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cInJlc3RhdXJhbnRzLWxpc3RcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdGF1cmFudHMpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcblxyXG4vLyBpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuXHJcbi8vIGNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuLy8gICBhc3luYyByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gYFxyXG4vLyAgICAgICA8aDI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50cy1jb250YWluZXJcIj48L2Rpdj5cclxuLy8gICAgIGA7XHJcbi8vICAgfSxcclxuXHJcbi8vICAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbi8vICAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZXhwbG9yZVJlc3RhdXJhbnRzKCk7XHJcbi8vICAgICBjb25zdCByZXN0YXVyYW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50cy1jb250YWluZXInKTtcclxuXHJcbi8vICAgICBpZiAocmVzdGF1cmFudHMgPT09IHVuZGVmaW5lZCB8fCByZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcclxuLy8gICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkRhdGEgbm90IGZvdW5kPC9wPic7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSByZXN0YXVyYW50cy5tYXAoKHJlc3RhdXJhbnQpID0+IGBcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzdGF1cmFudC5waWN0dXJlSWR9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCIgLz5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWl0ZW1fX2NvbnRlbnRcIj5cclxuLy8gICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIke2AvIy9kZXRhaWwvJHtyZXN0YXVyYW50LmlkfWB9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbi8vICAgICAgICAgICAgIDxwPlJhdGluZzogJHtyZXN0YXVyYW50LnJhdGluZ308L3A+XHJcbi8vICAgICAgICAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgYCkuam9pbignJyk7XHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEV4cGxvcmVSZXN0YXVyYW50cztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmJlZDA3OWJhMzI0M2I2ZDQ4Y2FcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=