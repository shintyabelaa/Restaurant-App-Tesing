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
    <<
    <div class="explore">
      <h1 class="explore__label">Explore Restaurants</h1>
    </div>
    <div id="restaurants-list"></div>
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
/******/ 	__webpack_require__.h = () => ("a12325f0e1c79303db2c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjFmN2Q3Mjc1NTJhMGM2NzQ3YjM5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDhCQUE4QixrRkFBbUM7QUFDakU7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLGtCQUFrQixFQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EseUJBQXlCLHFCQUFxQixTQUFTLGdCQUFnQjtBQUN2RTtBQUNBLDhCQUE4QixhQUFhLGNBQWMsRUFBRSxJQUFJLGdCQUFnQjtBQUMvRSw0QkFBNEIsa0JBQWtCO0FBQzlDLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7VUNwREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9leHBsb3JlLXJlc3RhdXJhbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSAnLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZSc7XHJcblxyXG5jb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDw8XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXhwbG9yZVwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJleHBsb3JlX19sYWJlbFwiPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwicmVzdGF1cmFudHMtbGlzdFwiPjwvZGl2PlxyXG4gICAgYDtcclxuICB9LFxyXG5cclxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRzID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5leHBsb3JlUmVzdGF1cmFudHMoKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3RhdXJhbnRzKTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG5cclxuLy8gaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSAnLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZSc7XHJcblxyXG4vLyBjb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbi8vICAgYXN5bmMgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgPGgyPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gyPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudHMtY29udGFpbmVyXCI+PC9kaXY+XHJcbi8vICAgICBgO1xyXG4vLyAgIH0sXHJcblxyXG4vLyAgIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudHMtY29udGFpbmVyJyk7XHJcblxyXG4vLyAgICAgaWYgKHJlc3RhdXJhbnRzID09PSB1bmRlZmluZWQgfHwgcmVzdGF1cmFudHMubGVuZ3RoID09PSAwKSB7XHJcbi8vICAgICAgIHJlc3RhdXJhbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5EYXRhIG5vdCBmb3VuZDwvcD4nO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gcmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiBgXHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbVwiPlxyXG4vLyAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkfVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtX19jb250ZW50XCI+XHJcbi8vICAgICAgICAgICAgIDxoMz48YSBocmVmPVwiJHtgLyMvZGV0YWlsLyR7cmVzdGF1cmFudC5pZH1gfVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4vLyAgICAgICAgICAgICA8cD5SYXRpbmc6ICR7cmVzdGF1cmFudC5yYXRpbmd9PC9wPlxyXG4vLyAgICAgICAgICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIGApLmpvaW4oJycpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExMjMyNWYwZTFjNzkzMDNkYjJjXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9