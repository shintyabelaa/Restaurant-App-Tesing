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
    <img class="restaurant__image" src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.poster_path}" alt="${restaurant.name}" />
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
    <div class="restarant-list__header">
      <img class="restarant-list__header__image" alt="${restaurant.name}"
           src="${restaurant.pictureId ? _globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-list__header__rating">
        <p>⭐️<span class="restaurant-list__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-list__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6845230958193cd2ebeb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjc4ZGQ2M2I1NDZhYzc0N2FkZTUwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsMEJBQTBCLFNBQVMsZ0JBQWdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEUsa0JBQWtCLHVCQUF1QixzRUFBcUIsMkVBQTJFO0FBQ3pJO0FBQ0Esb0VBQW9FLGtCQUFrQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYyxJQUFJLGdCQUFnQjtBQUNqRSxXQUFXLHVCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUN3RTs7Ozs7Ozs7O1VDdkN4RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZyc7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUgPSAocmVzdGF1cmFudCkgPT4gYFxyXG4gICAgPGgyIGNsYXNzPVwicmVzdGF1cmFudF9uYW1lXCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9oMj5cclxuICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50X19pbWFnZVwiIHNyYz1cIiR7Q09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5wb3N0ZXJfcGF0aH1cIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIiAvPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRfX2luZm9cIj5cclxuICAgICAgPGgzPkluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgPGg0PkFsYW1hdDwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5hZGRyZXNzfTwvcD5cclxuICAgICAgPGg0PktvdGE8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuY2l0eX0gbWludXRlczwvcD5cclxuICAgICAgPGg0Pk1lbnUgTWFrYW5hbjwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5mb29kc308L3A+XHJcbiAgICAgIDxoND5NZW51IE1pbnVtYW48L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZHJpbmtzfTwvcD5cclxuICAgICAgPGg0PkNvc3R1bWVyIFJldmlld3M8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuY3VzdG9tZXJSZXZpZXdzfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRfZGVzY3JpcHRpb25cIj5cclxuICAgICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGFyYW50LWxpc3RfX2hlYWRlclwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVzdGFyYW50LWxpc3RfX2hlYWRlcl9faW1hZ2VcIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIlxyXG4gICAgICAgICAgIHNyYz1cIiR7cmVzdGF1cmFudC5waWN0dXJlSWQgPyBDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBpY3R1cmVJZCA6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvNjY2LzgwMC80NTA/Z3JheXNjYWxlJ31cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9faGVhZGVyX19yYXRpbmdcIj5cclxuICAgICAgICA8cD7irZDvuI88c3BhbiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9faGVhZGVyX19yYXRpbmdfX3Njb3JlXCI+JHtyZXN0YXVyYW50LnJhdGluZ308L3NwYW4+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9fY29udGVudFwiPlxyXG4gICAgICA8aDM+PGEgaHJlZj1cIi8jL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUsIGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSB9O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ODQ1MjMwOTU4MTkzY2QyZWJlYlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==