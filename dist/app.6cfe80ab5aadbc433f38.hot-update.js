"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/utils/drawer-initiator.js":
/*!***********************************************!*\
  !*** ./src/scripts/utils/drawer-initiator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("877857aed3e8f92a2a25")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjZjZmU4MGFiNWFhZGJjNDMzZjM4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsU0FBUyx5QkFBeUI7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7OztVQ3RCL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy91dGlscy9kcmF3ZXItaW5pdGlhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRHJhd2VySW5pdGlhdG9yID0ge1xyXG4gIGluaXQoeyBidXR0b24sIGRyYXdlciwgY29udGVudCB9KSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5fdG9nZ2xlRHJhd2VyKGV2ZW50LCBkcmF3ZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9jbG9zZURyYXdlcihldmVudCwgZHJhd2VyKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIF90b2dnbGVEcmF3ZXIoZXZlbnQsIGRyYXdlcikge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkcmF3ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xyXG4gIH0sXHJcblxyXG4gIF9jbG9zZURyYXdlcihldmVudCwgZHJhd2VyKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlckluaXRpYXRvcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODc3ODU3YWVkM2U4ZjkyYTJhMjVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=