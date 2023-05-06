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
    <img class="restaurant__image" src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
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
      <a href="/#/detail/${restaurant.id}"><${restaurant.name}</a></h3>
      <p>${`${restaurant.description.slice(0, 250)} ...`}</p>
    </div>
  </div>
`;




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("26b7d40db8d552b5d981")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjg4Y2U0MzU2NDAzNmVmNDRlNWJiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsd0JBQXdCLFNBQVMsZ0JBQWdCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RSxrQkFBa0IsdUJBQXVCLHNFQUFxQiwyRUFBMkU7QUFDekk7QUFDQSxxRUFBcUUsa0JBQWtCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjLEtBQUssZ0JBQWdCO0FBQzlELFdBQVcsR0FBRyxzQ0FBc0MsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUN3RTs7Ozs7Ozs7O1VDeEN4RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZyc7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUgPSAocmVzdGF1cmFudCkgPT4gYFxyXG4gICAgPGgyIGNsYXNzPVwicmVzdGF1cmFudF9uYW1lXCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9oMj5cclxuICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50X19pbWFnZVwiIHNyYz1cIiR7Q09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5waWN0dXJlSWR9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCIgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X19pbmZvXCI+XHJcbiAgICAgIDxoMz5JbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgIDxoND5BbGFtYXQ8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuYWRkcmVzc308L3A+XHJcbiAgICAgIDxoND5Lb3RhPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmNpdHl9IG1pbnV0ZXM8L3A+XHJcbiAgICAgIDxoND5NZW51IE1ha2FuYW48L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZm9vZHN9PC9wPlxyXG4gICAgICA8aDQ+TWVudSBNaW51bWFuPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmRyaW5rc308L3A+XHJcbiAgICAgIDxoND5Db3N0dW1lciBSZXZpZXdzPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmN1c3RvbWVyUmV2aWV3c308L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUgPSAocmVzdGF1cmFudCkgPT4gYFxyXG4gIDxkaXYgaWQ9XCJyZXN0YXVyYW50LWl0ZW1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXJhbnQtbGlzdF9faGVhZGVyXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXJhbnQtbGlzdF9faGVhZGVyX19pbWFnZVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiXHJcbiAgICAgICAgICAgc3JjPVwiJHtyZXN0YXVyYW50LnBpY3R1cmVJZCA/IENPTkZJRy5CQVNFX0lNQUdFX1VSTCArIHJlc3RhdXJhbnQucGljdHVyZUlkIDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC82NjYvODAwLzQ1MD9ncmF5c2NhbGUnfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19oZWFkZXJfX3JhdGluZ1wiPlxyXG4gICAgICAgIDxoMj7irZDvuI88c3BhbiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9faGVhZGVyX19yYXRpbmdfX3Njb3JlXCI+JHtyZXN0YXVyYW50LnJhdGluZ308L3NwYW4+PC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2NvbnRlbnRcIj5cclxuICAgICAgPGEgaHJlZj1cIi8jL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9XCI+PCR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4gICAgICA8cD4ke2Ake3Jlc3RhdXJhbnQuZGVzY3JpcHRpb24uc2xpY2UoMCwgMjUwKX0gLi4uYH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUsIGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSB9O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNmI3ZDQwZGI4ZDU1MmI1ZDk4MVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==