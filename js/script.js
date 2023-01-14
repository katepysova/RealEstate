/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst headerEl = document.querySelector(\".header\");\nconst menuBtn = document.querySelector(\".menu-btn\");\nconst wrapper = document.querySelector(\".wrapper\");\n\nconst tabsContentEls = document.querySelectorAll(\".tabs__content\");\nconst tabsLinks = document.querySelectorAll(\".tabs__link\");\n\nconst activeTab = document.querySelector(\".tabs__link--active\");\n\nconst currentYear = document.querySelector(\".copyright__year\");\n\ncurrentYear.innerHTML = new Date().getFullYear();\n\n\nconst navLinks = document.querySelectorAll(\".nav__link\");\n\nnavLinks.forEach((link) => {\n  link.addEventListener(\"click\", function(event){\n    event.preventDefault();\n    const href = link.getAttribute('href');\n    if(href === \"#\") {\n      window.scrollTo({\n        top: 0,\n        behavior: \"smooth\",\n      })\n    } else if (href !== \"#\" && href.startsWith(\"#\")) {\n      const target = document.querySelector(href);\n      headerEl.classList.remove(\"nav--open\");\n      wrapper.classList.remove(\"u-overflow-hidden\");\n      target.scrollIntoView({\n        behavior: \"smooth\",\n      });\n    }\n  });\n});\n\n\nmenuBtn.addEventListener(\"click\", function () {\n  headerEl.classList.toggle(\"nav--open\");\n  wrapper.classList.toggle(\"u-overflow-hidden\");\n});\n\nconst swiper = new Swiper(\".swiper\", {\n  loop: false,\n  navigation: {\n    nextEl: \".swiper-button-next-unique\",\n    prevEl: \".swiper-button-prev-unique\",\n  },\n});\n\n\ntabsLinks.forEach(function(link){\n  link.addEventListener(\"click\", function(event){\n    event.preventDefault();\n\n    if(link.classList.contains(\"active\")) {\n      return;\n    }\n\n    for (let i = 0; i < tabsLinks.length; i++) {\n      tabsLinks[i].classList.remove(\"active\");\n      tabsContentEls[i].style.display = \"none\";\n    }\n\n    link.classList.add(\"active\");\n\n    const goal = link.getAttribute(\"data-for\");\n\n    const currentTabContent = [...tabsContentEls].filter((tabs) =>\n      tabs.getAttribute(\"data-goal\") === goal\n    );\n\n    if (currentTabContent.length > 0) {\n      currentTabContent[0].style.display = \"block\";\n    }\n  });\n})\n\n\nactiveTab.click();\n\n//# sourceURL=webpack://realestate/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;