"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");

// import UrlParser from '../routes/url-parser';
// import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  // async renderPage() {
  //   const url = UrlParser.parseActiveUrlWithCombiner();
  //   const page = routes[url];
  //   this._content.innerHTML = await page.render();
  //   await page.afterRender();
  // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0114ee0953021069219")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmY3ZjY3ZTBkMWJhZTg5OTY4ZWU0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9FQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7OztVQzdCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJhd2VySW5pdGlhdG9yIGZyb20gJy4uL3V0aWxzL2RyYXdlci1pbml0aWF0b3InO1xyXG4vLyBpbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcclxuLy8gaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMvcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoeyBidXR0b24sIGRyYXdlciwgY29udGVudCB9KSB7XHJcbiAgICB0aGlzLl9idXR0b24gPSBidXR0b247XHJcbiAgICB0aGlzLl9kcmF3ZXIgPSBkcmF3ZXI7XHJcbiAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsQXBwU2hlbGwoKTtcclxuICB9XHJcblxyXG4gIF9pbml0aWFsQXBwU2hlbGwoKSB7XHJcbiAgICBEcmF3ZXJJbml0aWF0b3IuaW5pdCh7XHJcbiAgICAgIGJ1dHRvbjogdGhpcy5fYnV0dG9uLFxyXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcclxuICAgICAgY29udGVudDogdGhpcy5fY29udGVudCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gYXN5bmMgcmVuZGVyUGFnZSgpIHtcclxuICAvLyAgIGNvbnN0IHVybCA9IFVybFBhcnNlci5wYXJzZUFjdGl2ZVVybFdpdGhDb21iaW5lcigpO1xyXG4gIC8vICAgY29uc3QgcGFnZSA9IHJvdXRlc1t1cmxdO1xyXG4gIC8vICAgdGhpcy5fY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xyXG4gIC8vICAgYXdhaXQgcGFnZS5hZnRlclJlbmRlcigpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMDExNGVlMDk1MzAyMTA2OTIxOVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==