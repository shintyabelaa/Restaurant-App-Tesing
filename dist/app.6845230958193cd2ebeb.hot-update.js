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
`;




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c5265c360710c12ba9d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjY4NDUyMzA5NTgxOTNjZDJlYmViLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsMEJBQTBCLFNBQVMsZ0JBQWdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEUsa0JBQWtCLHVCQUF1QixzRUFBcUIsMkVBQTJFO0FBQ3pJO0FBQ0Esb0VBQW9FLGtCQUFrQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYyxJQUFJLGdCQUFnQjtBQUNqRSxXQUFXLHVCQUF1QjtBQUNsQztBQUNBO0FBQ0E7QUFDd0U7Ozs7Ozs7OztVQ3RDeEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vZ2xvYmFscy9jb25maWcnO1xyXG5cclxuY29uc3QgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlID0gKHJlc3RhdXJhbnQpID0+IGBcclxuICAgIDxoMiBjbGFzcz1cInJlc3RhdXJhbnRfbmFtZVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvaDI+XHJcbiAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudF9faW1hZ2VcIiBzcmM9XCIke0NPTkZJRy5CQVNFX0lNQUdFX1VSTCArIHJlc3RhdXJhbnQucG9zdGVyX3BhdGh9XCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCIgLz5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X19pbmZvXCI+XHJcbiAgICAgIDxoMz5JbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgIDxoND5BbGFtYXQ8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuYWRkcmVzc308L3A+XHJcbiAgICAgIDxoND5Lb3RhPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmNpdHl9IG1pbnV0ZXM8L3A+XHJcbiAgICAgIDxoND5NZW51IE1ha2FuYW48L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZm9vZHN9PC9wPlxyXG4gICAgICA8aDQ+TWVudSBNaW51bWFuPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmRyaW5rc308L3A+XHJcbiAgICAgIDxoND5Db3N0dW1lciBSZXZpZXdzPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmN1c3RvbWVyUmV2aWV3c308L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuYDtcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUgPSAocmVzdGF1cmFudCkgPT4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJfX2ltYWdlXCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCJcclxuICAgICAgICAgICBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkID8gQ09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5waWN0dXJlSWQgOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY2Ni84MDAvNDUwP2dyYXlzY2FsZSd9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2hlYWRlcl9fcmF0aW5nXCI+XHJcbiAgICAgICAgPHA+4q2Q77iPPHNwYW4gY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2hlYWRlcl9fcmF0aW5nX19zY29yZVwiPiR7cmVzdGF1cmFudC5yYXRpbmd9PC9zcGFuPjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2NvbnRlbnRcIj5cclxuICAgICAgPGgzPjxhIGhyZWY9XCIvIy9kZXRhaWwvJHtyZXN0YXVyYW50LmlkfVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlLCBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUgfTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWM1MjY1YzM2MDcxMGMxMmJhOWRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=