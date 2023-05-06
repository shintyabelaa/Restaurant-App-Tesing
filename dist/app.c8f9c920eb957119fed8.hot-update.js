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
/******/ 	__webpack_require__.h = () => ("c2a4cf670dd174802df6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmM4ZjljOTIwZWI5NTcxMTlmZWQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsMEJBQTBCLFNBQVMsZ0JBQWdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RSxrQkFBa0IsdUJBQXVCLHNFQUFxQiwyRUFBMkU7QUFDekk7QUFDQSxxRUFBcUUsa0JBQWtCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjLElBQUksZ0JBQWdCO0FBQ2pFLFdBQVcsR0FBRyxzQ0FBc0MsS0FBSztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUN3RTs7Ozs7Ozs7O1VDeEN4RSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZyc7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUgPSAocmVzdGF1cmFudCkgPT4gYFxyXG4gICAgPGgyIGNsYXNzPVwicmVzdGF1cmFudF9uYW1lXCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9oMj5cclxuICAgIDxpbWcgY2xhc3M9XCJyZXN0YXVyYW50X19pbWFnZVwiIHNyYz1cIiR7Q09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5wb3N0ZXJfcGF0aH1cIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIiAvPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRfX2luZm9cIj5cclxuICAgICAgPGgzPkluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgPGg0PkFsYW1hdDwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5hZGRyZXNzfTwvcD5cclxuICAgICAgPGg0PktvdGE8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuY2l0eX0gbWludXRlczwvcD5cclxuICAgICAgPGg0Pk1lbnUgTWFrYW5hbjwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5mb29kc308L3A+XHJcbiAgICAgIDxoND5NZW51IE1pbnVtYW48L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZHJpbmtzfTwvcD5cclxuICAgICAgPGg0PkNvc3R1bWVyIFJldmlld3M8L2g0PlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuY3VzdG9tZXJSZXZpZXdzfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRfZGVzY3JpcHRpb25cIj5cclxuICAgICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuY29uc3QgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgPGRpdiBpZD1cInJlc3RhdXJhbnQtaXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJfX2ltYWdlXCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCJcclxuICAgICAgICAgICBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkID8gQ09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5waWN0dXJlSWQgOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY2Ni84MDAvNDUwP2dyYXlzY2FsZSd9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2hlYWRlcl9fcmF0aW5nXCI+XHJcbiAgICAgICAgPGgyPuKtkO+4jzxzcGFuIGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19oZWFkZXJfX3JhdGluZ19fc2NvcmVcIj4ke3Jlc3RhdXJhbnQucmF0aW5nfTwvc3Bhbj48L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9fY29udGVudFwiPlxyXG4gICAgICA8aDM+PGEgaHJlZj1cIi8jL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbiAgICAgIDxwPiR7YCR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbi5zbGljZSgwLCAyNTApfSAuLi5gfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSwgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlIH07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyYTRjZjY3MGRkMTc0ODAyZGY2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9