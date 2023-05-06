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
    
      const restaurantLink = document.querySelector(`a[href="#/detail/${restaurant.id}"]`);
      restaurantLink.addEventListener('click', async (event) => {
        const restaurantId = event.target.getAttribute('href').substr(10);
        const restaurantDetail = await _data_restaurant_source__WEBPACK_IMPORTED_MODULE_0__["default"].detailRestaurants(restaurantId);
        const detailContainer = document.querySelector('#restaurant');
        detailContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);
        window.history.pushState(null, null, event.target.getAttribute('href'));
      });
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
/******/ 	__webpack_require__.h = () => ("6a9fa5c809472649de0b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjRkNWY4ZjI1ZDVkMTYwOGE4ODMxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ2lCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsOEJBQThCLGtGQUFtQztBQUNqRTtBQUNBO0FBQ0Esd0NBQXdDLHlGQUE0QjtBQUNwRTtBQUNBLHdFQUF3RSxjQUFjO0FBQ3RGO0FBQ0E7QUFDQSx1Q0FBdUMsaUZBQWtDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUIsU0FBUyxnQkFBZ0I7QUFDdkU7QUFDQSw4QkFBOEIsYUFBYSxjQUFjLEVBQUUsSUFBSSxnQkFBZ0I7QUFDL0UsNEJBQTRCLGtCQUFrQjtBQUM5QyxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbkVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZXhwbG9yZS1yZXN0YXVyYW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3InO1xyXG5cclxuY29uc3QgRXhwbG9yZVJlc3RhdXJhbnRzID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhwbG9yZVwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cImV4cGxvcmVfX2xhYmVsXCI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudHNcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZXhwbG9yZVJlc3RhdXJhbnRzKCk7XHJcbiAgICBjb25zdCByZXN0YXVyYW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50cycpO1xyXG4gICAgcmVzdGF1cmFudHMuZm9yRWFjaCgocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZShyZXN0YXVyYW50KTtcclxuICAgIFxyXG4gICAgICBjb25zdCByZXN0YXVyYW50TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGFbaHJlZj1cIiMvZGV0YWlsLyR7cmVzdGF1cmFudC5pZH1cIl1gKTtcclxuICAgICAgcmVzdGF1cmFudExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50SWQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEwKTtcclxuICAgICAgICBjb25zdCByZXN0YXVyYW50RGV0YWlsID0gYXdhaXQgUmVzdGF1cmFudFNvdXJjZS5kZXRhaWxSZXN0YXVyYW50cyhyZXN0YXVyYW50SWQpO1xyXG4gICAgICAgIGNvbnN0IGRldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50Jyk7XHJcbiAgICAgICAgZGV0YWlsQ29udGFpbmVyLmlubmVySFRNTCA9IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZShyZXN0YXVyYW50RGV0YWlsKTtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwbG9yZVJlc3RhdXJhbnRzO1xyXG5cclxuLy8gaW1wb3J0IFJlc3RhdXJhbnRTb3VyY2UgZnJvbSAnLi4vLi4vZGF0YS9yZXN0YXVyYW50LXNvdXJjZSc7XHJcblxyXG4vLyBjb25zdCBFeHBsb3JlUmVzdGF1cmFudHMgPSB7XHJcbi8vICAgYXN5bmMgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIGBcclxuLy8gICAgICAgPGgyPkV4cGxvcmUgUmVzdGF1cmFudHM8L2gyPlxyXG4vLyAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudHMtY29udGFpbmVyXCI+PC9kaXY+XHJcbi8vICAgICBgO1xyXG4vLyAgIH0sXHJcblxyXG4vLyAgIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmV4cGxvcmVSZXN0YXVyYW50cygpO1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdGF1cmFudHMtY29udGFpbmVyJyk7XHJcblxyXG4vLyAgICAgaWYgKHJlc3RhdXJhbnRzID09PSB1bmRlZmluZWQgfHwgcmVzdGF1cmFudHMubGVuZ3RoID09PSAwKSB7XHJcbi8vICAgICAgIHJlc3RhdXJhbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5EYXRhIG5vdCBmb3VuZDwvcD4nO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gcmVzdGF1cmFudHMubWFwKChyZXN0YXVyYW50KSA9PiBgXHJcbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbVwiPlxyXG4vLyAgICAgICAgICAgPGltZyBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkfVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtX19jb250ZW50XCI+XHJcbi8vICAgICAgICAgICAgIDxoMz48YSBocmVmPVwiJHtgLyMvZGV0YWlsLyR7cmVzdGF1cmFudC5pZH1gfVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4vLyAgICAgICAgICAgICA8cD5SYXRpbmc6ICR7cmVzdGF1cmFudC5yYXRpbmd9PC9wPlxyXG4vLyAgICAgICAgICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIGApLmpvaW4oJycpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0sXHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZhOWZhNWM4MDk0NzI2NDlkZTBiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9