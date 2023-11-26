/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContact: () => (/* binding */ createContact)
/* harmony export */ });
const contactItems = [
  {
    name: "The Restraunt - Los Angeles",
    number: "0111-2345-123",
    email: "therestrauntla@gmail.com",
  },
  {
    name: "The Restraunt - Fresno",
    number: "0111-2689-321",
    email: "therestrauntfresno@gmail.com",
  },
  {
    name: "The Restraunt - Las Vegas",
    number: "0115-4800-568",
    email: "therestrauntlv@gmail.com",
  },
];

function createContact() {
  const container = document.querySelector("#content");

  const tabHeading = document.createElement("h1");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.style.display = "flex";
  mainContentContainer.style.flexDirection = "column";
  mainContentContainer.style.alignItems = "center";
  mainContentContainer.classList.add("main-content");
  container.append(mainContentContainer);
  tabHeading.textContent = "Contact Information";
  mainContentContainer.append(tabHeading);
  contactItems.forEach((item) => {
    const mainDisplay = document.createElement("div");
    const contactHeading = document.createElement("h3");
    const contactNumber = document.createElement("p");
    const contactEmail = document.createElement("p");

    mainDisplay.style.display = "flex";
    mainDisplay.style.flexDirection = "column";
    mainDisplay.style.alignItems = "center";

    contactHeading.textContent = item.name;
    contactNumber.textContent = item.number;
    contactEmail.textContent = item.email;

    contactNumber.style.maxWidth = "600px";

    mainDisplay.append(contactHeading, contactNumber, contactEmail);

    mainContentContainer.append(mainDisplay);
  });
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
const menuItems = [
  {
    name: "Bourbon Street Chicken and Shrimp",
    description:
      "Cajun-seasoned chicken and blackened shrimp jazzed up in buttery garlic and parsley, served sizzling with sautéed mushrooms & onions and garlic mashed potatoes",
    price: "£21",
  },
  {
    name: "Chicken Tender Platter",
    description:
      "Crispy breaded chicken tenders are a grill and bar classic. Served with choice of side. Pictured with signature coleslaw and classic fries.",
    price: "£17",
  },
  {
    name: "Original BBQ Chicken Pizza",
    description:
      "The Original BBQ Chicken Pizza has a hand-tossed crust, chicken smothered in CPK's own barbecue sauce, smoked gouda, red onions, and fresh cilantro.",
    price: "£19",
  },
  {
    name: "Chicken Alfredo",
    description:
      "The creamiest most cheesiest pasta sauce, served with a delicious chicken breast, bursting with peppery notes and a hint of spice.",
    price: "£15",
  },
];

function createMenu() {
  const container = document.querySelector("#content");
  const tabHeading = document.createElement("h1");
  const mainContentContainer = document.createElement("div");
  mainContentContainer.style.display = "flex";
  mainContentContainer.style.flexDirection = "column";
  mainContentContainer.style.alignItems = "center";
  mainContentContainer.classList.add("main-content");
  container.append(mainContentContainer);
  tabHeading.textContent = "The Menu";

  mainContentContainer.append(tabHeading);
  menuItems.forEach((item) => {
    const mainDisplay = document.createElement("div");
    const mainDisplayLeft = document.createElement("div");
    const mainItemHeading = document.createElement("h3");
    const mainDescription = document.createElement("p");
    const mainItemPrice = document.createElement("p");
    const mainDisplayRight = document.createElement("div");

    mainDisplay.style.display = "flex";
    mainDisplay.style.gap = "4rem";
    mainDisplay.style.padding = "1rem";

    mainItemHeading.textContent = item.name;
    mainDescription.textContent = item.description;
    mainItemPrice.textContent = item.price;

    mainDescription.style.maxWidth = "600px";

    mainDisplayLeft.append(mainItemHeading, mainDescription, mainItemPrice);
    mainDisplay.append(mainDisplayLeft, mainDisplayRight);

    mainContentContainer.append(mainDisplay);
  });
}




/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPageContent: () => (/* binding */ createPageContent),
/* harmony export */   createPageHeader: () => (/* binding */ createPageHeader)
/* harmony export */ });
function createPageHeader() {
  const container = document.querySelector("#content");
  const header = document.createElement("header");
  const headerLeft = document.createElement("div");
  const logo = document.createElement("h1");
  const headerRight = document.createElement("div");
  const headerLinks = document.createElement("ul");
  const headerHome = document.createElement("li");
  const headerMenu = document.createElement("li");
  const headerContact = document.createElement("li");

  logo.textContent = "The Restaurant";
  header.style.backgroundColor = "gray";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.justifyContent = "space-around";

  headerLinks.style.display = "flex";
  headerLinks.style.gap = "1.3rem";
  headerLinks.style.listStyleType = "none";

  headerHome.textContent = "Home";
  headerHome.classList.add("nav", "home");

  headerMenu.textContent = "Menu";
  headerMenu.classList.add("nav", "menu");

  headerContact.textContent = "Contact";
  headerContact.classList.add("nav", "contact");

  headerLeft.append(logo);
  headerLinks.append(headerHome, headerMenu, headerContact);
  headerRight.append(headerLinks);

  header.append(headerLeft, headerRight);

  container.append(header);
}

function createPageContent() {
  const container = document.querySelector("#content");
  const mainContentContainer = document.createElement("div");
  const mainDisplay = document.createElement("div");
  const mainDisplayLeft = document.createElement("div");
  const mainHeading = document.createElement("h2");
  const mainDescription = document.createElement("p");
  const mainDisplayRight = document.createElement("div");
  const mainImage = document.createElement("img");

  mainContentContainer.style.display = "flex";
  mainContentContainer.style.justifyContent = "center";
  mainContentContainer.classList.add("main-content");

  mainDisplay.style.display = "flex";
  mainDisplay.style.gap = "4rem";
  mainDisplay.style.padding = "2.5rem";

  mainHeading.textContent = "Welcome To The Resaurant";
  mainDescription.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam.";

  mainImage.setAttribute(
    "src",
    "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
  );
  mainImage.style.borderRadius = "1rem";
  mainImage.style.width = "100%";
  mainImage.style.minWidth = "180px";
  mainImage.style.maxWidth = "500px";

  mainDisplay.style.minWidth = "400px";
  mainDescription.style.minWidth = "200px";
  mainDescription.style.maxWidth = "600px";

  mainDisplayLeft.append(mainHeading, mainDescription);
  mainDisplayRight.append(mainImage);
  mainDisplay.append(mainDisplayLeft, mainDisplayRight);

  mainContentContainer.append(mainDisplay);

  container.append(mainContentContainer);
}




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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createPageHeader)();
(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createPageContent)();

const navButtons = document.querySelectorAll(".nav");

navButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("home")) {
      (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createPageContent)();
    } else if (element.classList.contains("menu")) {
      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();
    } else if (element.classList.contains("contact")) {
      (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();
    }
    const mainContent = document.querySelector(".main-content");
    mainContent.remove();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDeUI7Ozs7Ozs7Ozs7Ozs7OztBQ3BEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytDOzs7Ozs7O1VDbkYvQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOaUU7QUFDN0I7QUFDTTtBQUMxQztBQUNBLDJEQUFnQjtBQUNoQiw0REFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBaUI7QUFDdkIsTUFBTTtBQUNOLE1BQU0saURBQVU7QUFDaEIsTUFBTTtBQUNOLE1BQU0sdURBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlRoZSBSZXN0cmF1bnQgLSBMb3MgQW5nZWxlc1wiLFxyXG4gICAgbnVtYmVyOiBcIjAxMTEtMjM0NS0xMjNcIixcclxuICAgIGVtYWlsOiBcInRoZXJlc3RyYXVudGxhQGdtYWlsLmNvbVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaGUgUmVzdHJhdW50IC0gRnJlc25vXCIsXHJcbiAgICBudW1iZXI6IFwiMDExMS0yNjg5LTMyMVwiLFxyXG4gICAgZW1haWw6IFwidGhlcmVzdHJhdW50ZnJlc25vQGdtYWlsLmNvbVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaGUgUmVzdHJhdW50IC0gTGFzIFZlZ2FzXCIsXHJcbiAgICBudW1iZXI6IFwiMDExNS00ODAwLTU2OFwiLFxyXG4gICAgZW1haWw6IFwidGhlcmVzdHJhdW50bHZAZ21haWwuY29tXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBjb25zdCB0YWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluQ29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcclxuICBjb250YWluZXIuYXBwZW5kKG1haW5Db250ZW50Q29udGFpbmVyKTtcclxuICB0YWJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IEluZm9ybWF0aW9uXCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kKHRhYkhlYWRpbmcpO1xyXG4gIGNvbnRhY3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBjb250YWN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbnN0IGNvbnRhY3ROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIG1haW5EaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5EaXNwbGF5LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgbWFpbkRpc3BsYXkuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcblxyXG4gICAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gaXRlbS5udW1iZXI7XHJcbiAgICBjb250YWN0RW1haWwudGV4dENvbnRlbnQgPSBpdGVtLmVtYWlsO1xyXG5cclxuICAgIGNvbnRhY3ROdW1iZXIuc3R5bGUubWF4V2lkdGggPSBcIjYwMHB4XCI7XHJcblxyXG4gICAgbWFpbkRpc3BsYXkuYXBwZW5kKGNvbnRhY3RIZWFkaW5nLCBjb250YWN0TnVtYmVyLCBjb250YWN0RW1haWwpO1xyXG5cclxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZChtYWluRGlzcGxheSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3QgfTtcclxuIiwiY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiQm91cmJvbiBTdHJlZXQgQ2hpY2tlbiBhbmQgU2hyaW1wXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDYWp1bi1zZWFzb25lZCBjaGlja2VuIGFuZCBibGFja2VuZWQgc2hyaW1wIGphenplZCB1cCBpbiBidXR0ZXJ5IGdhcmxpYyBhbmQgcGFyc2xleSwgc2VydmVkIHNpenpsaW5nIHdpdGggc2F1dMOpZWQgbXVzaHJvb21zICYgb25pb25zIGFuZCBnYXJsaWMgbWFzaGVkIHBvdGF0b2VzXCIsXHJcbiAgICBwcmljZTogXCLCozIxXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNoaWNrZW4gVGVuZGVyIFBsYXR0ZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkNyaXNweSBicmVhZGVkIGNoaWNrZW4gdGVuZGVycyBhcmUgYSBncmlsbCBhbmQgYmFyIGNsYXNzaWMuIFNlcnZlZCB3aXRoIGNob2ljZSBvZiBzaWRlLiBQaWN0dXJlZCB3aXRoIHNpZ25hdHVyZSBjb2xlc2xhdyBhbmQgY2xhc3NpYyBmcmllcy5cIixcclxuICAgIHByaWNlOiBcIsKjMTdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiT3JpZ2luYWwgQkJRIENoaWNrZW4gUGl6emFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoZSBPcmlnaW5hbCBCQlEgQ2hpY2tlbiBQaXp6YSBoYXMgYSBoYW5kLXRvc3NlZCBjcnVzdCwgY2hpY2tlbiBzbW90aGVyZWQgaW4gQ1BLJ3Mgb3duIGJhcmJlY3VlIHNhdWNlLCBzbW9rZWQgZ291ZGEsIHJlZCBvbmlvbnMsIGFuZCBmcmVzaCBjaWxhbnRyby5cIixcclxuICAgIHByaWNlOiBcIsKjMTlcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2hpY2tlbiBBbGZyZWRvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGUgY3JlYW1pZXN0IG1vc3QgY2hlZXNpZXN0IHBhc3RhIHNhdWNlLCBzZXJ2ZWQgd2l0aCBhIGRlbGljaW91cyBjaGlja2VuIGJyZWFzdCwgYnVyc3Rpbmcgd2l0aCBwZXBwZXJ5IG5vdGVzIGFuZCBhIGhpbnQgb2Ygc3BpY2UuXCIsXHJcbiAgICBwcmljZTogXCLCozE1XCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IHRhYkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBtYWluQ29udGVudENvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICBtYWluQ29udGVudENvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICBtYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmQobWFpbkNvbnRlbnRDb250YWluZXIpO1xyXG4gIHRhYkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoZSBNZW51XCI7XHJcblxyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZCh0YWJIZWFkaW5nKTtcclxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbWFpbkRpc3BsYXlMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG1haW5JdGVtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbnN0IG1haW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgbWFpbkl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgbWFpbkRpc3BsYXlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgbWFpbkRpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgbWFpbkRpc3BsYXkuc3R5bGUuZ2FwID0gXCI0cmVtXCI7XHJcbiAgICBtYWluRGlzcGxheS5zdHlsZS5wYWRkaW5nID0gXCIxcmVtXCI7XHJcblxyXG4gICAgbWFpbkl0ZW1IZWFkaW5nLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgbWFpbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICAgIG1haW5JdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xyXG5cclxuICAgIG1haW5EZXNjcmlwdGlvbi5zdHlsZS5tYXhXaWR0aCA9IFwiNjAwcHhcIjtcclxuXHJcbiAgICBtYWluRGlzcGxheUxlZnQuYXBwZW5kKG1haW5JdGVtSGVhZGluZywgbWFpbkRlc2NyaXB0aW9uLCBtYWluSXRlbVByaWNlKTtcclxuICAgIG1haW5EaXNwbGF5LmFwcGVuZChtYWluRGlzcGxheUxlZnQsIG1haW5EaXNwbGF5UmlnaHQpO1xyXG5cclxuICAgIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZChtYWluRGlzcGxheSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlUGFnZUhlYWRlcigpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBoZWFkZXJMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IGhlYWRlclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZWFkZXJMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICBjb25zdCBoZWFkZXJIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgaGVhZGVyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiVGhlIFJlc3RhdXJhbnRcIjtcclxuICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmF5XCI7XHJcbiAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBoZWFkZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgaGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcclxuXHJcbiAgaGVhZGVyTGlua3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIGhlYWRlckxpbmtzLnN0eWxlLmdhcCA9IFwiMS4zcmVtXCI7XHJcbiAgaGVhZGVyTGlua3Muc3R5bGUubGlzdFN0eWxlVHlwZSA9IFwibm9uZVwiO1xyXG5cclxuICBoZWFkZXJIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgaGVhZGVySG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2XCIsIFwiaG9tZVwiKTtcclxuXHJcbiAgaGVhZGVyTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdlwiLCBcIm1lbnVcIik7XHJcblxyXG4gIGhlYWRlckNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuICBoZWFkZXJDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXZcIiwgXCJjb250YWN0XCIpO1xyXG5cclxuICBoZWFkZXJMZWZ0LmFwcGVuZChsb2dvKTtcclxuICBoZWFkZXJMaW5rcy5hcHBlbmQoaGVhZGVySG9tZSwgaGVhZGVyTWVudSwgaGVhZGVyQ29udGFjdCk7XHJcbiAgaGVhZGVyUmlnaHQuYXBwZW5kKGhlYWRlckxpbmtzKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0LCBoZWFkZXJSaWdodCk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFnZUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBtYWluRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWFpbkRpc3BsYXlMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBtYWluSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBjb25zdCBtYWluRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBtYWluRGlzcGxheVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBtYWluSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICBtYWluQ29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XHJcblxyXG4gIG1haW5EaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBtYWluRGlzcGxheS5zdHlsZS5nYXAgPSBcIjRyZW1cIjtcclxuICBtYWluRGlzcGxheS5zdHlsZS5wYWRkaW5nID0gXCIyLjVyZW1cIjtcclxuXHJcbiAgbWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgVG8gVGhlIFJlc2F1cmFudFwiO1xyXG4gIG1haW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XHJcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBNb3JiaSBub24gYXJjdSByaXN1cyBxdWlzIHZhcml1cyBxdWFtLlwiO1xyXG5cclxuICBtYWluSW1hZ2Uuc2V0QXR0cmlidXRlKFxyXG4gICAgXCJzcmNcIixcclxuICAgIFwiaHR0cHM6Ly90My5mdGNkbi5uZXQvanBnLzAzLzI0LzczLzkyLzM2MF9GXzMyNDczOTIwM19rZWVxOHVkdnYwUDJoMU1MWUowR0xTbFRCYWdvWFM0OC5qcGdcIlxyXG4gICk7XHJcbiAgbWFpbkltYWdlLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMXJlbVwiO1xyXG4gIG1haW5JbWFnZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gIG1haW5JbWFnZS5zdHlsZS5taW5XaWR0aCA9IFwiMTgwcHhcIjtcclxuICBtYWluSW1hZ2Uuc3R5bGUubWF4V2lkdGggPSBcIjUwMHB4XCI7XHJcblxyXG4gIG1haW5EaXNwbGF5LnN0eWxlLm1pbldpZHRoID0gXCI0MDBweFwiO1xyXG4gIG1haW5EZXNjcmlwdGlvbi5zdHlsZS5taW5XaWR0aCA9IFwiMjAwcHhcIjtcclxuICBtYWluRGVzY3JpcHRpb24uc3R5bGUubWF4V2lkdGggPSBcIjYwMHB4XCI7XHJcblxyXG4gIG1haW5EaXNwbGF5TGVmdC5hcHBlbmQobWFpbkhlYWRpbmcsIG1haW5EZXNjcmlwdGlvbik7XHJcbiAgbWFpbkRpc3BsYXlSaWdodC5hcHBlbmQobWFpbkltYWdlKTtcclxuICBtYWluRGlzcGxheS5hcHBlbmQobWFpbkRpc3BsYXlMZWZ0LCBtYWluRGlzcGxheVJpZ2h0KTtcclxuXHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuYXBwZW5kKG1haW5EaXNwbGF5KTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChtYWluQ29udGVudENvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBhZ2VIZWFkZXIsIGNyZWF0ZVBhZ2VDb250ZW50IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlUGFnZUhlYWRlciwgY3JlYXRlUGFnZUNvbnRlbnQgfSBmcm9tIFwiLi9wYWdlTG9hZFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5cclxuY3JlYXRlUGFnZUhlYWRlcigpO1xyXG5jcmVhdGVQYWdlQ29udGVudCgpO1xyXG5cclxuY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2XCIpO1xyXG5cclxubmF2QnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG9tZVwiKSkge1xyXG4gICAgICBjcmVhdGVQYWdlQ29udGVudCgpO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVcIikpIHtcclxuICAgICAgY3JlYXRlTWVudSgpO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImNvbnRhY3RcIikpIHtcclxuICAgICAgY3JlYXRlQ29udGFjdCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICAgIG1haW5Db250ZW50LnJlbW92ZSgpO1xyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9