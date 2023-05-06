self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/routes/url-parser.js":
/*!******************************************!*\
  !*** ./src/scripts/routes/url-parser.js ***!
  \******************************************/
/***/ (() => {

// const UrlParser = {
//   parseActiveUrlWithCombiner() {
//     const url = window.location.hash.slice(1).toLowerCase();
//     const splitedUrl = this._urlSplitter(url);
//     return this._urlCombiner(splitedUrl);
//   },

//   parseActiveUrlWithoutCombiner() {
//     const url = window.location.hash.slice(1).toLowerCase();
//     return this._urlSplitter(url);
//   },

//   _urlSplitter(url) {
//     const urlsSplits = url.split('/');
//     return {
//       resource: urlsSplits[1] || null,
//       id: urlsSplits[2] || null,
//       verb: urlsSplits[3] || null,
//     };
//   },

//   _urlCombiner(splitedUrl) {
//     return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
//       + (splitedUrl.id ? '/:id' : '')
//       + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
//   },
// };

// export default UrlParser;


/***/ }),

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_routes_url_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ "./src/scripts/routes/routes.js");




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

  async renderPage() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1___default().parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6dbe229232bc7d7f85b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjYxMjUxN2I2MjQ5OTI1NWY2Yjk4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHlDQUF5QyxvQkFBb0I7QUFDN0Q7QUFDQSxrQ0FBa0MsZ0JBQWdCO0FBQ2xELE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ3RDtBQUNYO0FBQ1A7QUFDdEM7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0ZBQW9DO0FBQ3BELGlCQUFpQixzREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7O1VDakNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3JvdXRlcy91cmwtcGFyc2VyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IFVybFBhcnNlciA9IHtcclxuLy8gICBwYXJzZUFjdGl2ZVVybFdpdGhDb21iaW5lcigpIHtcclxuLy8gICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbi8vICAgICBjb25zdCBzcGxpdGVkVXJsID0gdGhpcy5fdXJsU3BsaXR0ZXIodXJsKTtcclxuLy8gICAgIHJldHVybiB0aGlzLl91cmxDb21iaW5lcihzcGxpdGVkVXJsKTtcclxuLy8gICB9LFxyXG5cclxuLy8gICBwYXJzZUFjdGl2ZVVybFdpdGhvdXRDb21iaW5lcigpIHtcclxuLy8gICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XHJcbi8vICAgICByZXR1cm4gdGhpcy5fdXJsU3BsaXR0ZXIodXJsKTtcclxuLy8gICB9LFxyXG5cclxuLy8gICBfdXJsU3BsaXR0ZXIodXJsKSB7XHJcbi8vICAgICBjb25zdCB1cmxzU3BsaXRzID0gdXJsLnNwbGl0KCcvJyk7XHJcbi8vICAgICByZXR1cm4ge1xyXG4vLyAgICAgICByZXNvdXJjZTogdXJsc1NwbGl0c1sxXSB8fCBudWxsLFxyXG4vLyAgICAgICBpZDogdXJsc1NwbGl0c1syXSB8fCBudWxsLFxyXG4vLyAgICAgICB2ZXJiOiB1cmxzU3BsaXRzWzNdIHx8IG51bGwsXHJcbi8vICAgICB9O1xyXG4vLyAgIH0sXHJcblxyXG4vLyAgIF91cmxDb21iaW5lcihzcGxpdGVkVXJsKSB7XHJcbi8vICAgICByZXR1cm4gKHNwbGl0ZWRVcmwucmVzb3VyY2UgPyBgLyR7c3BsaXRlZFVybC5yZXNvdXJjZX1gIDogJy8nKVxyXG4vLyAgICAgICArIChzcGxpdGVkVXJsLmlkID8gJy86aWQnIDogJycpXHJcbi8vICAgICAgICsgKHNwbGl0ZWRVcmwudmVyYiA/IGAvJHtzcGxpdGVkVXJsLnZlcmJ9YCA6ICcnKTtcclxuLy8gICB9LFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgVXJsUGFyc2VyO1xyXG4iLCJpbXBvcnQgRHJhd2VySW5pdGlhdG9yIGZyb20gJy4uL3V0aWxzL2RyYXdlci1pbml0aWF0b3InO1xyXG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMvcm91dGVzJztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoeyBidXR0b24sIGRyYXdlciwgY29udGVudCB9KSB7XHJcbiAgICB0aGlzLl9idXR0b24gPSBidXR0b247XHJcbiAgICB0aGlzLl9kcmF3ZXIgPSBkcmF3ZXI7XHJcbiAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsQXBwU2hlbGwoKTtcclxuICB9XHJcblxyXG4gIF9pbml0aWFsQXBwU2hlbGwoKSB7XHJcbiAgICBEcmF3ZXJJbml0aWF0b3IuaW5pdCh7XHJcbiAgICAgIGJ1dHRvbjogdGhpcy5fYnV0dG9uLFxyXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcclxuICAgICAgY29udGVudDogdGhpcy5fY29udGVudCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcclxuICAgIGNvbnN0IHVybCA9IFVybFBhcnNlci5wYXJzZUFjdGl2ZVVybFdpdGhDb21iaW5lcigpO1xyXG4gICAgY29uc3QgcGFnZSA9IHJvdXRlc1t1cmxdO1xyXG4gICAgdGhpcy5fY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xyXG4gICAgYXdhaXQgcGFnZS5hZnRlclJlbmRlcih7XHJcbiAgICAgIGJ1dHRvbjogdGhpcy5fYnV0dG9uLFxyXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcclxuICAgICAgY29udGVudDogdGhpcy5fY29udGVudCxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNmRiZTIyOTIzMmJjN2Q3Zjg1YlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==