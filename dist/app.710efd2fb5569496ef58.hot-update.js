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
  <div id="restarants">
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
/******/ 	__webpack_require__.h = () => ("09027c95cc7aca2af37f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjcxMGVmZDJmYjU1Njk0OTZlZjU4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxzRUFBcUIsMEJBQTBCLFNBQVMsZ0JBQWdCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RSxrQkFBa0IsdUJBQXVCLHNFQUFxQiwyRUFBMkU7QUFDekk7QUFDQSxvRUFBb0Usa0JBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjLElBQUksZ0JBQWdCO0FBQ2pFLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ3dFOzs7Ozs7Ozs7VUN4Q3hFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvdGVtcGxhdGVzL3RlbXBsYXRlLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ09ORklHIGZyb20gJy4uLy4uL2dsb2JhbHMvY29uZmlnJztcclxuXHJcbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSA9IChyZXN0YXVyYW50KSA9PiBgXHJcbiAgICA8aDIgY2xhc3M9XCJyZXN0YXVyYW50X25hbWVcIj4ke3Jlc3RhdXJhbnQubmFtZX08L2gyPlxyXG4gICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnRfX2ltYWdlXCIgc3JjPVwiJHtDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBvc3Rlcl9wYXRofVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9faW5mb1wiPlxyXG4gICAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG4gICAgICA8aDQ+QWxhbWF0PC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmFkZHJlc3N9PC9wPlxyXG4gICAgICA8aDQ+S290YTwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jaXR5fSBtaW51dGVzPC9wPlxyXG4gICAgICA8aDQ+TWVudSBNYWthbmFuPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmZvb2RzfTwvcD5cclxuICAgICAgPGg0Pk1lbnUgTWludW1hbjwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kcmlua3N9PC9wPlxyXG4gICAgICA8aDQ+Q29zdHVtZXIgUmV2aWV3czwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jdXN0b21lclJldmlld3N9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9kZXNjcmlwdGlvblwiPlxyXG4gICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlID0gKHJlc3RhdXJhbnQpID0+IGBcclxuICA8ZGl2IGlkPVwicmVzdGFyYW50c1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInJlc3RhcmFudC1saXN0X19oZWFkZXJfX2ltYWdlXCIgYWx0PVwiJHtyZXN0YXVyYW50Lm5hbWV9XCJcclxuICAgICAgICAgICBzcmM9XCIke3Jlc3RhdXJhbnQucGljdHVyZUlkID8gQ09ORklHLkJBU0VfSU1BR0VfVVJMICsgcmVzdGF1cmFudC5waWN0dXJlSWQgOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzY2Ni84MDAvNDUwP2dyYXlzY2FsZSd9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2hlYWRlcl9fcmF0aW5nXCI+XHJcbiAgICAgICAgPHA+4q2Q77iPPHNwYW4gY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2hlYWRlcl9fcmF0aW5nX19zY29yZVwiPiR7cmVzdGF1cmFudC5yYXRpbmd9PC9zcGFuPjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2NvbnRlbnRcIj5cclxuICAgICAgPGgzPjxhIGhyZWY9XCIvIy9kZXRhaWwvJHtyZXN0YXVyYW50LmlkfVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvYT48L2gzPlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlLCBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUgfTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDkwMjdjOTVjYzdhY2EyYWYzN2ZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=