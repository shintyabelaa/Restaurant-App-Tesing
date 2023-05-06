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
/******/ 	__webpack_require__.h = () => ("9c6d6fada08b0ca3ebb8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjM0ODEzM2I1YzJlNTc2Yzc3NWZkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsMEJBQTBCLFNBQVMsZ0JBQWdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RSxrQkFBa0IsdUJBQXVCLHNFQUFxQiwyRUFBMkU7QUFDekk7QUFDQSxvRUFBb0Usa0JBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjLElBQUksZ0JBQWdCO0FBQ2pFLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ3dFOzs7Ozs7Ozs7VUN4Q3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnJztcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgICA8aDIgY2xhc3M9XCJyZXN0YXVyYW50X25hbWVcIj4ke3Jlc3RhdXJhbnQubmFtZX08L2gyPlxyXG4gICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnRfX2ltYWdlXCIgc3JjPVwiJHtDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBvc3Rlcl9wYXRofVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9faW5mb1wiPlxyXG4gICAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG4gICAgICA8aDQ+QWxhbWF0PC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmFkZHJlc3N9PC9wPlxyXG4gICAgICA8aDQ+S290YTwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jaXR5fSBtaW51dGVzPC9wPlxyXG4gICAgICA8aDQ+TWVudSBNYWthbmFuPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmZvb2RzfTwvcD5cclxuICAgICAgPGg0Pk1lbnUgTWludW1hbjwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kcmlua3N9PC9wPlxyXG4gICAgICA8aDQ+Q29zdHVtZXIgUmV2aWV3czwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jdXN0b21lclJldmlld3N9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9kZXNjcmlwdGlvblwiPlxyXG4gICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlID0gKHJlc3RhdXJhbnQpID0+IGBcclxuICA8ZGl2IGlkPVwicmVzdGF1cmFudC1pdGVtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGFyYW50LWxpc3RfX2hlYWRlclwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVzdGFyYW50LWxpc3RfX2hlYWRlcl9faW1hZ2VcIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIlxyXG4gICAgICAgICAgIHNyYz1cIiR7cmVzdGF1cmFudC5waWN0dXJlSWQgPyBDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBpY3R1cmVJZCA6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvNjY2LzgwMC80NTA/Z3JheXNjYWxlJ31cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9faGVhZGVyX19yYXRpbmdcIj5cclxuICAgICAgICA8cD7irZDvuI88c3BhbiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9faGVhZGVyX19yYXRpbmdfX3Njb3JlXCI+JHtyZXN0YXVyYW50LnJhdGluZ308L3NwYW4+PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9fY29udGVudFwiPlxyXG4gICAgICA8aDM+PGEgaHJlZj1cIi8jL2RldGFpbC8ke3Jlc3RhdXJhbnQuaWR9XCI+JHtyZXN0YXVyYW50Lm5hbWV9PC9hPjwvaDM+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRMaXN0VGVtcGxhdGUsIGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSB9O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YzZkNmZhZGEwOGIwY2EzZWJiOFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==