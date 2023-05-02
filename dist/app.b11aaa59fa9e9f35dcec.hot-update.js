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
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/scripts/routes/url-parser.js");
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
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2173a7275fbec1afb8d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmIxMWFhYTU5ZmE5ZTlmMzVkY2VjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNYO0FBQ1A7QUFDdEM7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQW9DO0FBQ3BELGlCQUFpQixzREFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7VUM3Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvYXBwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYXdlckluaXRpYXRvciBmcm9tICcuLi91dGlscy9kcmF3ZXItaW5pdGlhdG9yJztcclxuaW1wb3J0IFVybFBhcnNlciBmcm9tICcuLi9yb3V0ZXMvdXJsLXBhcnNlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoeyBidXR0b24sIGRyYXdlciwgY29udGVudCB9KSB7XHJcbiAgICB0aGlzLl9idXR0b24gPSBidXR0b247XHJcbiAgICB0aGlzLl9kcmF3ZXIgPSBkcmF3ZXI7XHJcbiAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLl9pbml0aWFsQXBwU2hlbGwoKTtcclxuICB9XHJcblxyXG4gIF9pbml0aWFsQXBwU2hlbGwoKSB7XHJcbiAgICBEcmF3ZXJJbml0aWF0b3IuaW5pdCh7XHJcbiAgICAgIGJ1dHRvbjogdGhpcy5fYnV0dG9uLFxyXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcclxuICAgICAgY29udGVudDogdGhpcy5fY29udGVudCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcclxuICAgIGNvbnN0IHVybCA9IFVybFBhcnNlci5wYXJzZUFjdGl2ZVVybFdpdGhDb21iaW5lcigpO1xyXG4gICAgY29uc3QgcGFnZSA9IHJvdXRlc1t1cmxdO1xyXG4gICAgdGhpcy5fY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xyXG4gICAgYXdhaXQgcGFnZS5hZnRlclJlbmRlcigpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMTczYTcyNzVmYmVjMWFmYjhkM1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==