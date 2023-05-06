"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/views/templates/template-creator.js":
/*!*********************************************************!*\
  !*** ./src/scripts/views/templates/template-creator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRestaurantDetailTemplate": () => (/* binding */ createRestaurantDetailTemplate),
/* harmony export */   "createRestaurantListTemplate": () => (/* binding */ createRestaurantListTemplate)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/config */ "./src/scripts/globals/config.js");


const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_name">${restaurant.name}</h2>
    <img class="restaurant__image" src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pict}" alt="${restaurant.name}" />${restaurant.pictureId ? _globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
      <h4>Kota</h4>
      <p>${restaurant.city} minutes</p>
      <h4>Menu Makanan</h4>
      <p>${restaurant.foods}</p>
      <h4>Menu Minuman</h4>
      <p>${restaurant.drinks}</p>
      <h4>Costumer Reviews</h4>
      <p>${restaurant.customerReviews}</p>
    </div>
    <div class="restaurant_description">
      <h3>Description</h3>
      <p>${restaurant.description}</p>
    </div>
`;

const createRestaurantListTemplate = (restaurant) => `
  <div id="restaurant-item">
    <div class="restarant-list__header">
      <img class="restarant-list__header__image" alt="${restaurant.name}"
           src="${restaurant.pictureId ? _globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-list__header__rating">
        <h2>⭐️<span class="restaurant-list__header__rating__score">${restaurant.rating}</span></h2>
      </div>
    </div>
    <div class="restaurant-list__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${`${restaurant.description.slice(0, 250)} ...`}</p>
    </div>
  </div>
`;




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("68797f20eeef98ac359c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmFiNGE1Njg3ZDcyODg0NmMwZTM2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsbUJBQW1CLFNBQVMsZ0JBQWdCLE1BQU0sdUJBQXVCLHNFQUFxQiwyRUFBMkU7QUFDeE87QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0I7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxXQUFXLHVCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZ0JBQWdCO0FBQ3hFLGtCQUFrQix1QkFBdUIsc0VBQXFCLDJFQUEyRTtBQUN6STtBQUNBLHFFQUFxRSxrQkFBa0I7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGNBQWMsSUFBSSxnQkFBZ0I7QUFDakUsV0FBVyxHQUFHLHNDQUFzQyxLQUFLO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ3dFOzs7Ozs7Ozs7VUN4Q3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnJztcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgICA8aDIgY2xhc3M9XCJyZXN0YXVyYW50X25hbWVcIj4ke3Jlc3RhdXJhbnQubmFtZX08L2gyPlxyXG4gICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnRfX2ltYWdlXCIgc3JjPVwiJHtDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBpY3R9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCIgLz4ke3Jlc3RhdXJhbnQucGljdHVyZUlkID8gQ09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5waWN0dXJlSWQgOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY2Ni84MDAvNDUwP2dyYXlzY2FsZSd9XCJcclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X19pbmZvXCI+XHJcbiAgICAgIDxoMz5JbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgIDxoND5BbGFtYXQ8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuYWRkcmVzc308L3A+XHJcbiAgICAgIDxoND5Lb3RhPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmNpdHl9IG1pbnV0ZXM8L3A+XHJcbiAgICAgIDxoND5NZW51IE1ha2FuYW48L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZm9vZHN9PC9wPlxyXG4gICAgICA8aDQ+TWVudSBNaW51bWFuPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmRyaW5rc308L3A+XHJcbiAgICAgIDxoND5Db3N0dW1lciBSZXZpZXdzPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmN1c3RvbWVyUmV2aWV3c308L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUgPSAocmVzdGF1cmFudCkgPT4gYFxyXG4gIDxkaXYgaWQ9XCJyZXN0YXVyYW50LWl0ZW1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXJhbnQtbGlzdF9faGVhZGVyXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXJhbnQtbGlzdF9faGVhZGVyX19pbWFnZVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiXHJcbiAgICAgICAgICAgc3JjPVwiJHtyZXN0YXVyYW50LnBpY3R1cmVJZCA/IENPTkZJRy5CQVNFX0lNQUdFX1VSTCArIHJlc3RhdXJhbnQucGljdHVyZUlkIDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC82NjYvODAwLzQ1MD9ncmF5c2NhbGUnfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19oZWFkZXJfX3JhdGluZ1wiPlxyXG4gICAgICAgIDxoMj7irZDvuI88c3BhbiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9faGVhZGVyX19yYXRpbmdfX3Njb3JlXCI+JHtyZXN0YXVyYW50LnJhdGluZ308L3NwYW4+PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2NvbnRlbnRcIj5cclxuICAgICAgPGgzPjxhIGhyZWY9XCIvIy9kZXRhaWwvJHtyZXN0YXVyYW50LmlkfVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4gICAgICA8cD4ke2Ake3Jlc3RhdXJhbnQuZGVzY3JpcHRpb24uc2xpY2UoMCwgMjUwKX0gLi4uYH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUsIGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSB9O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ODc5N2YyMGVlZWY5OGFjMzU5Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==