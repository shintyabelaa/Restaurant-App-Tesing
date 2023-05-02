"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../styles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
 /* for async await transpile */



fetch('DATA.json')
  .then((response) => {
    console.log('Response:', response);
    return response.json();
  })
  // response.json())
  .then((data) => {
    console.log('Data:', data);
    const restaurantsList = document.getElementById('restaurants-list');

    data.restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('div');
      restaurantItem.classList.add('restaurant-item');

      const restaurantPlace = document.createElement('h1');
      restaurantPlace.innerText = restaurant.city;
      restaurantItem.appendChild(restaurantPlace);

      const restaurantImage = document.createElement('img');
      restaurantImage.setAttribute('src', restaurant.pictureId);
      restaurantImage.setAttribute('alt', restaurant.name);
      restaurantItem.appendChild(restaurantImage);

      const restaurantRatings = document.createElement('h2');
      restaurantRatings.innerText = `Rating: ${restaurant.rating}`;
      restaurantItem.appendChild(restaurantRatings);

      const restaurantName = document.createElement('h3');
      restaurantName.innerText = restaurant.name;
      restaurantItem.appendChild(restaurantName);

      const restaurantDescription = document.createElement('p');
      restaurantDescription.innerText = restaurant.description;
      restaurantItem.appendChild(restaurantDescription);

      restaurantsList.appendChild(restaurantItem);
    });
  })
  .catch((error) => console.error(error));

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('.drawer-list');
const headerElement = document.querySelector('body');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

headerElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6088310d847e16d35513")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjViZWQ4MmQwNTZmN2RmZmZiOTJkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkIsQ0FBQztBQUNEO0FBQ1g7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztVQ3hERCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLyogZm9yIGFzeW5jIGF3YWl0IHRyYW5zcGlsZSAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzJ1xuXG5mZXRjaCgnREFUQS5qc29uJylcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlOicsIHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9KVxuICAvLyByZXNwb25zZS5qc29uKCkpXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RhdGE6JywgZGF0YSk7XG4gICAgY29uc3QgcmVzdGF1cmFudHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhdXJhbnRzLWxpc3QnKTtcblxuICAgIGRhdGEucmVzdGF1cmFudHMuZm9yRWFjaCgocmVzdGF1cmFudCkgPT4ge1xuICAgICAgY29uc3QgcmVzdGF1cmFudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtaXRlbScpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50UGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgcmVzdGF1cmFudFBsYWNlLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQuY2l0eTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRQbGFjZSk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgcmVzdGF1cmFudEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcmVzdGF1cmFudC5waWN0dXJlSWQpO1xuICAgICAgcmVzdGF1cmFudEltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcmVzdGF1cmFudC5uYW1lKTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRJbWFnZSk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRSYXRpbmdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgIHJlc3RhdXJhbnRSYXRpbmdzLmlubmVyVGV4dCA9IGBSYXRpbmc6ICR7cmVzdGF1cmFudC5yYXRpbmd9YDtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRSYXRpbmdzKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgcmVzdGF1cmFudE5hbWUuaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5uYW1lO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICByZXN0YXVyYW50RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gcmVzdGF1cmFudC5kZXNjcmlwdGlvbjtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREZXNjcmlwdGlvbik7XG5cbiAgICAgIHJlc3RhdXJhbnRzTGlzdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SXRlbSk7XG4gICAgfSk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcblxuY29uc3QgaGFtYnVyZ2VyQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXInKTtcbmNvbnN0IGRyYXdlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhd2VyLWxpc3QnKTtcbmNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmhhbWJ1cmdlckJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZHJhd2VyRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG5cbmhlYWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZHJhd2VyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MDg4MzEwZDg0N2UxNmQzNTUxM1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==