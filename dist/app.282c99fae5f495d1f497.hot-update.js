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
  <div id="restarant-item">
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
/******/ 	__webpack_require__.h = () => ("7298034f1af55288a8f4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI4MmM5OWZhZTVmNDk1ZDFmNDk3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsMEJBQTBCLFNBQVMsZ0JBQWdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RSxrQkFBa0IsdUJBQXVCLHNFQUFxQiwyRUFBMkU7QUFDekk7QUFDQSxvRUFBb0Usa0JBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjLElBQUksZ0JBQWdCO0FBQ2pFLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ3dFOzs7Ozs7Ozs7VUN4Q3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnJztcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgICA8aDIgY2xhc3M9XCJyZXN0YXVyYW50X25hbWVcIj4ke3Jlc3RhdXJhbnQubmFtZX08L2gyPlxyXG4gICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnRfX2ltYWdlXCIgc3JjPVwiJHtDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBvc3Rlcl9wYXRofVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9faW5mb1wiPlxyXG4gICAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG4gICAgICA8aDQ+QWxhbWF0PC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmFkZHJlc3N9PC9wPlxyXG4gICAgICA8aDQ+S290YTwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jaXR5fSBtaW51dGVzPC9wPlxyXG4gICAgICA8aDQ+TWVudSBNYWthbmFuPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmZvb2RzfTwvcD5cclxuICAgICAgPGg0Pk1lbnUgTWludW1hbjwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kcmlua3N9PC9wPlxyXG4gICAgICA8aDQ+Q29zdHVtZXIgUmV2aWV3czwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jdXN0b21lclJldmlld3N9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9kZXNjcmlwdGlvblwiPlxyXG4gICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlID0gKHJlc3RhdXJhbnQpID0+IGBcclxuICA8ZGl2IGlkPVwicmVzdGFyYW50LWl0ZW1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXJhbnQtbGlzdF9faGVhZGVyXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJyZXN0YXJhbnQtbGlzdF9faGVhZGVyX19pbWFnZVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiXHJcbiAgICAgICAgICAgc3JjPVwiJHtyZXN0YXVyYW50LnBpY3R1cmVJZCA/IENPTkZJRy5CQVNFX0lNQUdFX1VSTCArIHJlc3RhdXJhbnQucGljdHVyZUlkIDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC82NjYvODAwLzQ1MD9ncmF5c2NhbGUnfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19oZWFkZXJfX3JhdGluZ1wiPlxyXG4gICAgICAgIDxwPuKtkO+4jzxzcGFuIGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19oZWFkZXJfX3JhdGluZ19fc2NvcmVcIj4ke3Jlc3RhdXJhbnQucmF0aW5nfTwvc3Bhbj48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19jb250ZW50XCI+XHJcbiAgICAgIDxoMz48YSBocmVmPVwiLyMvZGV0YWlsLyR7cmVzdGF1cmFudC5pZH1cIj4ke3Jlc3RhdXJhbnQubmFtZX08L2E+PC9oMz5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUmVzdGF1cmFudExpc3RUZW1wbGF0ZSwgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlIH07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjcyOTgwMzRmMWFmNTUyODhhOGY0XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9