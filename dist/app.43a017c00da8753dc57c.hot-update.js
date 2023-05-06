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
/******/ 	__webpack_require__.h = () => ("b0b8c8bfbbd30cbd4aa5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQzYTAxN2MwMGRhODc1M2RjNTdjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUM0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsOEJBQThCLGtGQUFtQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQixTQUFTLGdCQUFnQjtBQUNwRTtBQUNBLDJCQUEyQixhQUFhLGNBQWMsRUFBRSxJQUFJLGdCQUFnQjtBQUM1RSx5QkFBeUIsa0JBQWtCO0FBQzNDLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGtCQUFrQixFQUFDOzs7Ozs7Ozs7VUNoRGxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZXhwbG9yZS1yZXN0YXVyYW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UnO1xyXG5cclxuLy8gY29uc3QgRXhwbG9yZVJlc3RhdXJhbnRzID0ge1xyXG4vLyAgIGFzeW5jIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiBgXHJcbi8vICAgICAgICA8aDI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDI+IFxyXG4vLyAgICAgYDtcclxuLy8gICB9LFxyXG5cclxuLy8gICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuLy8gICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5leHBsb3JlUmVzdGF1cmFudHMoKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHJlc3RhdXJhbnRzKTtcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG5cclxuaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSAnLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZSc7XHJcblxyXG5jb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGgyPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudHMtY29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gIH0sXHJcblxyXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4gICAgY29uc3QgcmVzdGF1cmFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudHMtY29udGFpbmVyJyk7XHJcblxyXG4gICAgaWYgKHJlc3RhdXJhbnRzID09PSB1bmRlZmluZWQgfHwgcmVzdGF1cmFudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJlc3RhdXJhbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5EYXRhIG5vdCBmb3VuZDwvcD4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gcmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkfVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMz48YSBocmVmPVwiJHtgLyMvZGV0YWlsLyR7cmVzdGF1cmFudC5pZH1gfVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4gICAgICAgICAgICA8cD5SYXRpbmc6ICR7cmVzdGF1cmFudC5yYXRpbmd9PC9wPlxyXG4gICAgICAgICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGApLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIwYjhjOGJmYmJkMzBjYmQ0YWE1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9