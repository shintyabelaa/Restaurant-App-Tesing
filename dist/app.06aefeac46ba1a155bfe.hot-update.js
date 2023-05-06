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
    <div class="explore">
      <h1 class="explore__label" tabindex="0">Explore Restaurants</h1>
    </div>
<div id="restaurants-list" tabindex="0"></div>
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
/******/ 	__webpack_require__.h = () => ("620619846148afa40e50")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjA2YWVmZWFjNDZiYTFhMTU1YmZlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw4QkFBOEIsa0ZBQW1DO0FBQ2pFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUIsU0FBUyxnQkFBZ0I7QUFDdkU7QUFDQSw4QkFBOEIsYUFBYSxjQUFjLEVBQUUsSUFBSSxnQkFBZ0I7QUFDL0UsNEJBQTRCLGtCQUFrQjtBQUM5QyxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbkRBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZXhwbG9yZS1yZXN0YXVyYW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UnO1xyXG5cclxuY29uc3QgRXhwbG9yZVJlc3RhdXJhbnRzID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhwbG9yZVwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJleHBsb3JlX19sYWJlbFwiIHRhYmluZGV4PVwiMFwiPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gxPlxyXG4gICAgPC9kaXY+XHJcbjxkaXYgaWQ9XCJyZXN0YXVyYW50cy1saXN0XCIgdGFiaW5kZXg9XCIwXCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4gICAgY29uc29sZS5sb2cocmVzdGF1cmFudHMpO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcblxyXG4vLyBpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuXHJcbi8vIGNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuLy8gICBhc3luYyByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gYFxyXG4vLyAgICAgICA8aDI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50cy1jb250YWluZXJcIj48L2Rpdj5cclxuLy8gICAgIGA7XHJcbi8vICAgfSxcclxuXHJcbi8vICAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbi8vICAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZXhwbG9yZVJlc3RhdXJhbnRzKCk7XHJcbi8vICAgICBjb25zdCByZXN0YXVyYW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50cy1jb250YWluZXInKTtcclxuXHJcbi8vICAgICBpZiAocmVzdGF1cmFudHMgPT09IHVuZGVmaW5lZCB8fCByZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcclxuLy8gICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkRhdGEgbm90IGZvdW5kPC9wPic7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSByZXN0YXVyYW50cy5tYXAoKHJlc3RhdXJhbnQpID0+IGBcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzdGF1cmFudC5waWN0dXJlSWR9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCIgLz5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWl0ZW1fX2NvbnRlbnRcIj5cclxuLy8gICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIke2AvIy9kZXRhaWwvJHtyZXN0YXVyYW50LmlkfWB9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbi8vICAgICAgICAgICAgIDxwPlJhdGluZzogJHtyZXN0YXVyYW50LnJhdGluZ308L3A+XHJcbi8vICAgICAgICAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgYCkuam9pbignJyk7XHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEV4cGxvcmVSZXN0YXVyYW50cztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjIwNjE5ODQ2MTQ4YWZhNDBlNTBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=