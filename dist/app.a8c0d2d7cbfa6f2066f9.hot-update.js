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
/******/ 	__webpack_require__.h = () => ("4d5f8f25d5d1608a8831")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmE4YzBkMmQ3Y2JmYTZmMjA2NmY5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ2lCO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsOEJBQThCLGtGQUFtQztBQUNqRTtBQUNBO0FBQ0Esd0NBQXdDLHlGQUE0QjtBQUNwRTtBQUNBLHNFQUFzRSxjQUFjO0FBQ3BGO0FBQ0E7QUFDQSx1Q0FBdUMsaUZBQWtDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0IsRUFBQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHlCQUF5QixxQkFBcUIsU0FBUyxnQkFBZ0I7QUFDdkU7QUFDQSw4QkFBOEIsYUFBYSxjQUFjLEVBQUUsSUFBSSxnQkFBZ0I7QUFDL0UsNEJBQTRCLGtCQUFrQjtBQUM5QyxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDbkVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZXhwbG9yZS1yZXN0YXVyYW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0YXVyYW50U291cmNlIGZyb20gJy4uLy4uL2RhdGEvcmVzdGF1cmFudC1zb3VyY2UnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlIH0gZnJvbSAnLi4vdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3InO1xyXG5cclxuY29uc3QgRXhwbG9yZVJlc3RhdXJhbnRzID0ge1xyXG4gIGFzeW5jIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXhwbG9yZVwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cImV4cGxvcmVfX2xhYmVsXCI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudHNcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbiAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZXhwbG9yZVJlc3RhdXJhbnRzKCk7XHJcbiAgICBjb25zdCByZXN0YXVyYW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50cycpO1xyXG4gICAgcmVzdGF1cmFudHMuZm9yRWFjaCgocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgKz0gY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZShyZXN0YXVyYW50KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdGF1cmFudExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhW2hyZWY9XCIjL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9XCJdYCk7XHJcbiAgICByZXN0YXVyYW50TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRJZCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMTApO1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnREZXRhaWwgPSBhd2FpdCBSZXN0YXVyYW50U291cmNlLmRldGFpbFJlc3RhdXJhbnRzKHJlc3RhdXJhbnRJZCk7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhdXJhbnQnKTtcclxuICAgICAgICBkZXRhaWxDb250YWluZXIuaW5uZXJIVE1MID0gY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlKHJlc3RhdXJhbnREZXRhaWwpO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlUmVzdGF1cmFudHM7XHJcblxyXG4vLyBpbXBvcnQgUmVzdGF1cmFudFNvdXJjZSBmcm9tICcuLi8uLi9kYXRhL3Jlc3RhdXJhbnQtc291cmNlJztcclxuXHJcbi8vIGNvbnN0IEV4cGxvcmVSZXN0YXVyYW50cyA9IHtcclxuLy8gICBhc3luYyByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gYFxyXG4vLyAgICAgICA8aDI+RXhwbG9yZSBSZXN0YXVyYW50czwvaDI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50cy1jb250YWluZXJcIj48L2Rpdj5cclxuLy8gICAgIGA7XHJcbi8vICAgfSxcclxuXHJcbi8vICAgYXN5bmMgYWZ0ZXJSZW5kZXIoKSB7XHJcbi8vICAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IFJlc3RhdXJhbnRTb3VyY2UuZXhwbG9yZVJlc3RhdXJhbnRzKCk7XHJcbi8vICAgICBjb25zdCByZXN0YXVyYW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50cy1jb250YWluZXInKTtcclxuXHJcbi8vICAgICBpZiAocmVzdGF1cmFudHMgPT09IHVuZGVmaW5lZCB8fCByZXN0YXVyYW50cy5sZW5ndGggPT09IDApIHtcclxuLy8gICAgICAgcmVzdGF1cmFudHNDb250YWluZXIuaW5uZXJIVE1MID0gJzxwPkRhdGEgbm90IGZvdW5kPC9wPic7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICByZXN0YXVyYW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSByZXN0YXVyYW50cy5tYXAoKHJlc3RhdXJhbnQpID0+IGBcclxuLy8gICAgICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8aW1nIHNyYz1cIiR7cmVzdGF1cmFudC5waWN0dXJlSWR9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCIgLz5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWl0ZW1fX2NvbnRlbnRcIj5cclxuLy8gICAgICAgICAgICAgPGgzPjxhIGhyZWY9XCIke2AvIy9kZXRhaWwvJHtyZXN0YXVyYW50LmlkfWB9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbi8vICAgICAgICAgICAgIDxwPlJhdGluZzogJHtyZXN0YXVyYW50LnJhdGluZ308L3A+XHJcbi8vICAgICAgICAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgYCkuam9pbignJyk7XHJcbi8vICAgICB9XHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEV4cGxvcmVSZXN0YXVyYW50cztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGQ1ZjhmMjVkNWQxNjA4YTg4MzFcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=