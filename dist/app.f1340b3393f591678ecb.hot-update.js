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
    <img class="restaurant__image" src="${resCONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />${restaurant.pictureId ? _globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
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
/******/ 	__webpack_require__.h = () => ("ba043bc565d96772e882")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmYxMzQwYjMzOTNmNTkxNjc4ZWNiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELDBDQUEwQyxnREFBZ0QsU0FBUyxnQkFBZ0IsTUFBTSx1QkFBdUIsc0VBQXFCLDJFQUEyRTtBQUNoUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxXQUFXLGtCQUFrQjtBQUM3QjtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEUsa0JBQWtCLHVCQUF1QixzRUFBcUIsMkVBQTJFO0FBQ3pJO0FBQ0EscUVBQXFFLGtCQUFrQjtBQUN2RjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYyxJQUFJLGdCQUFnQjtBQUNqRSxXQUFXLEdBQUcsc0NBQXNDLEtBQUs7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDd0U7Ozs7Ozs7OztVQ3hDeEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDT05GSUcgZnJvbSAnLi4vLi4vZ2xvYmFscy9jb25maWcnO1xyXG5cclxuY29uc3QgY3JlYXRlUmVzdGF1cmFudERldGFpbFRlbXBsYXRlID0gKHJlc3RhdXJhbnQpID0+IGBcclxuICAgIDxoMiBjbGFzcz1cInJlc3RhdXJhbnRfbmFtZVwiPiR7cmVzdGF1cmFudC5uYW1lfTwvaDI+XHJcbiAgICA8aW1nIGNsYXNzPVwicmVzdGF1cmFudF9faW1hZ2VcIiBzcmM9XCIke3Jlc0NPTkZJRy5CQVNFX0lNQUdFX1VSTCArIHJlc3RhdXJhbnQucGljdHVyZUlkfVwiIGFsdD1cIiR7cmVzdGF1cmFudC5uYW1lfVwiIC8+JHtyZXN0YXVyYW50LnBpY3R1cmVJZCA/IENPTkZJRy5CQVNFX0lNQUdFX1VSTCArIHJlc3RhdXJhbnQucGljdHVyZUlkIDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC82NjYvODAwLzQ1MD9ncmF5c2NhbGUnfVwiXHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9faW5mb1wiPlxyXG4gICAgICA8aDM+SW5mb3JtYXRpb248L2gzPlxyXG4gICAgICA8aDQ+QWxhbWF0PC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmFkZHJlc3N9PC9wPlxyXG4gICAgICA8aDQ+S290YTwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jaXR5fSBtaW51dGVzPC9wPlxyXG4gICAgICA8aDQ+TWVudSBNYWthbmFuPC9oND5cclxuICAgICAgPHA+JHtyZXN0YXVyYW50LmZvb2RzfTwvcD5cclxuICAgICAgPGg0Pk1lbnUgTWludW1hbjwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5kcmlua3N9PC9wPlxyXG4gICAgICA8aDQ+Q29zdHVtZXIgUmV2aWV3czwvaDQ+XHJcbiAgICAgIDxwPiR7cmVzdGF1cmFudC5jdXN0b21lclJldmlld3N9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9kZXNjcmlwdGlvblwiPlxyXG4gICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxyXG4gICAgICA8cD4ke3Jlc3RhdXJhbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC9kaXY+XHJcbmA7XHJcblxyXG5jb25zdCBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlID0gKHJlc3RhdXJhbnQpID0+IGBcclxuICA8ZGl2IGlkPVwicmVzdGF1cmFudC1pdGVtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGFyYW50LWxpc3RfX2hlYWRlclwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwicmVzdGFyYW50LWxpc3RfX2hlYWRlcl9faW1hZ2VcIiBhbHQ9XCIke3Jlc3RhdXJhbnQubmFtZX1cIlxyXG4gICAgICAgICAgIHNyYz1cIiR7cmVzdGF1cmFudC5waWN0dXJlSWQgPyBDT05GSUcuQkFTRV9JTUFHRV9VUkwgKyByZXN0YXVyYW50LnBpY3R1cmVJZCA6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvNjY2LzgwMC80NTA/Z3JheXNjYWxlJ31cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtbGlzdF9faGVhZGVyX19yYXRpbmdcIj5cclxuICAgICAgICA8aDI+4q2Q77iPPHNwYW4gY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RfX2hlYWRlcl9fcmF0aW5nX19zY29yZVwiPiR7cmVzdGF1cmFudC5yYXRpbmd9PC9zcGFuPjwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1saXN0X19jb250ZW50XCI+XHJcbiAgICAgIDxoMz48YSBocmVmPVwiLyMvZGV0YWlsLyR7cmVzdGF1cmFudC5pZH1cIj4ke3Jlc3RhdXJhbnQubmFtZX08L2E+PC9oMz5cclxuICAgICAgPHA+JHtgJHtyZXN0YXVyYW50LmRlc2NyaXB0aW9uLnNsaWNlKDAsIDI1MCl9IC4uLmB9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbmA7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVSZXN0YXVyYW50TGlzdFRlbXBsYXRlLCBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUgfTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmEwNDNiYzU2NWQ5Njc3MmU4ODJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=