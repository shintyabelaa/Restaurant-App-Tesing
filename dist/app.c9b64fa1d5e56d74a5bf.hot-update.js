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
    init({ button, drawer, content}) {
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
/******/ 	__webpack_require__.h = () => ("02e60bfb8a49c76c10fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmM5YjY0ZmExZDVlNTZkNzRhNWJmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxlQUFlOzs7Ozs7OztVQ3RCOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy91dGlscy9kcmF3ZXItaW5pdGlhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRHJhd2VySW5pdGlhdG9yID0ge1xyXG4gICAgaW5pdCh7IGJ1dHRvbiwgZHJhd2VyLCBjb250ZW50fSkge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl90b2dnbGVEcmF3ZXIoZXZlbnQsIGRyYXdlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIF90b2dnbGVEcmF3ZXIoZXZlbnQsIGRyYXdlcikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGRyYXdlci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XHJcbiAgICB9LFxyXG4gICAgIFxyXG4gICAgICBfY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhd2VySW5pdGlhdG9yOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAyZTYwYmZiOGE0OWM3NmMxMGZlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9