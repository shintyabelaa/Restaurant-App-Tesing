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
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./src/styles/responsive.css");
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
/******/ 	__webpack_require__.h = () => ("b1ecbc7a883fb1e561cb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjIwNWJlYWQ0MDI0MzY2ZmI4ODQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkIsQ0FBQztBQUNEO0FBQ0s7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7OztVQ3hERCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLyogZm9yIGFzeW5jIGF3YWl0IHRyYW5zcGlsZSAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcblxuZmV0Y2goJ0RBVEEuanNvbicpXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTonLCByZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLy8gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdEYXRhOicsIGRhdGEpO1xuICAgIGNvbnN0IHJlc3RhdXJhbnRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXVyYW50cy1saXN0Jyk7XG5cbiAgICBkYXRhLnJlc3RhdXJhbnRzLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3RhdXJhbnRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICByZXN0YXVyYW50SXRlbS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWl0ZW0nKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudFBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgIHJlc3RhdXJhbnRQbGFjZS5pbm5lclRleHQgPSByZXN0YXVyYW50LmNpdHk7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50UGxhY2UpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgIHJlc3RhdXJhbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJlc3RhdXJhbnQucGljdHVyZUlkKTtcbiAgICAgIHJlc3RhdXJhbnRJbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHJlc3RhdXJhbnQubmFtZSk7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50UmF0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICByZXN0YXVyYW50UmF0aW5ncy5pbm5lclRleHQgPSBgUmF0aW5nOiAke3Jlc3RhdXJhbnQucmF0aW5nfWA7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50UmF0aW5ncyk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQubmFtZTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQuZGVzY3JpcHRpb247XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuXG4gICAgICByZXN0YXVyYW50c0xpc3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEl0ZW0pO1xuICAgIH0pO1xuICB9KVxuICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG5cbmNvbnN0IGhhbWJ1cmdlckJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyJyk7XG5jb25zdCBkcmF3ZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYXdlci1saXN0Jyk7XG5jb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5oYW1idXJnZXJCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGRyYXdlckVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuXG5oZWFkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGRyYXdlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjFlY2JjN2E4ODNmYjFlNTYxY2JcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=