/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function carousel() {
	const slider = document.querySelector(".carousel__items"),
		slides = document.querySelectorAll(".carousel__item"),
		button = document.querySelectorAll(".button");

	let current = 0,
		prev = 2,
		next = 1;

	for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
	}

	const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

	const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

	const gotoNum = number => {
		current = number;
		prev = current - 1;
		next = current + 1;

		for (let i = 0; i < slides.length; i++) {
			slides[i].classList.remove("active");
			slides[i].classList.remove("prev");
			slides[i].classList.remove("next");
		}

		if (next == 3) {
			next = 0;
		}

		if (prev == -1) {
			prev = 2;
		}

		slides[current].classList.add("active");
		slides[prev].classList.add("prev");
		slides[next].classList.add("next");
	};
}

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function hamburger() {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        mobileLink = document.querySelectorAll('.mobile-link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    mobileLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modal() {

    const modal = document.querySelector('.modal'),
        btnCall = document.querySelectorAll('#call'),
        btnSend = document.querySelectorAll('#send'),
        close = document.querySelectorAll('.modal__close'),
        modalData = document.querySelector('.modal-data'),
        modalThanks = document.querySelector('.modal-thanks'),
        modalForm = document.querySelector('#modal-form');

    btnCall.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modalData.classList.remove('hide');
            modalData.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    btnSend.forEach(btn => {
        btn.addEventListener('click', () => {
            if (modal.classList.contains('show')) {
                modalData.classList.add('hide');
                modalThanks.classList.add('show');
            } else {
                document.body.style.overflow = 'hidden';
                modal.classList.add('show');
                modalData.classList.add('hide');
                modalThanks.classList.add('show');
            }

            modalForm.reset();
            modalThanks.classList.remove('show');
            setTimeout(() => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }, 3000);
        });
        
    });

    close.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    });

//#more send
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carousel */ "./src/js/modules/carousel.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");




window.addEventListener('DOMContentLoaded', function() {
    (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map