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
  headerHome.classList.add("home");

  headerMenu.textContent = "Menu";
  headerMenu.classList.add("menu");

  headerContact.textContent = "Contact";
  headerContact.classList.add("contact");

  headerLeft.append(logo);
  header.append(headerLeft);

  headerLinks.append(headerHome, headerMenu, headerContact);
  headerRight.append(headerLinks);

  header.append(headerRight);

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

const navHome = document.querySelector(".home");
const navMenu = document.querySelector(".menu");
const navContact = document.querySelector(".contact");

function clearContent() {
  const mainContent = document.querySelector(".main-content");
  mainContent.remove();
}

navHome.addEventListener("click", () => {
  clearContent();
  (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__.createPageContent)();
});

navMenu.addEventListener("click", () => {
  clearContent();
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();
});

navContact.addEventListener("click", () => {
  clearContent();
  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContact)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDeUI7Ozs7Ozs7Ozs7Ozs7OztBQ3BEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQzs7Ozs7OztVQ3JGL0M7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmlFO0FBQzdCO0FBQ007QUFDMUM7QUFDQSwyREFBZ0I7QUFDaEIsNERBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQWlCO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFVO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJUaGUgUmVzdHJhdW50IC0gTG9zIEFuZ2VsZXNcIixcclxuICAgIG51bWJlcjogXCIwMTExLTIzNDUtMTIzXCIsXHJcbiAgICBlbWFpbDogXCJ0aGVyZXN0cmF1bnRsYUBnbWFpbC5jb21cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGhlIFJlc3RyYXVudCAtIEZyZXNub1wiLFxyXG4gICAgbnVtYmVyOiBcIjAxMTEtMjY4OS0zMjFcIixcclxuICAgIGVtYWlsOiBcInRoZXJlc3RyYXVudGZyZXNub0BnbWFpbC5jb21cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVGhlIFJlc3RyYXVudCAtIExhcyBWZWdhc1wiLFxyXG4gICAgbnVtYmVyOiBcIjAxMTUtNDgwMC01NjhcIixcclxuICAgIGVtYWlsOiBcInRoZXJlc3RyYXVudGx2QGdtYWlsLmNvbVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgdGFiSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XHJcbiAgY29udGFpbmVyLmFwcGVuZChtYWluQ29udGVudENvbnRhaW5lcik7XHJcbiAgdGFiSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBJbmZvcm1hdGlvblwiO1xyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZCh0YWJIZWFkaW5nKTtcclxuICBjb250YWN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb25zdCBjb250YWN0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBtYWluRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBtYWluRGlzcGxheS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgIG1haW5EaXNwbGF5LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG5cclxuICAgIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgY29udGFjdE51bWJlci50ZXh0Q29udGVudCA9IGl0ZW0ubnVtYmVyO1xyXG4gICAgY29udGFjdEVtYWlsLnRleHRDb250ZW50ID0gaXRlbS5lbWFpbDtcclxuXHJcbiAgICBjb250YWN0TnVtYmVyLnN0eWxlLm1heFdpZHRoID0gXCI2MDBweFwiO1xyXG5cclxuICAgIG1haW5EaXNwbGF5LmFwcGVuZChjb250YWN0SGVhZGluZywgY29udGFjdE51bWJlciwgY29udGFjdEVtYWlsKTtcclxuXHJcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmQobWFpbkRpc3BsYXkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWN0IH07XHJcbiIsImNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkJvdXJib24gU3RyZWV0IENoaWNrZW4gYW5kIFNocmltcFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQ2FqdW4tc2Vhc29uZWQgY2hpY2tlbiBhbmQgYmxhY2tlbmVkIHNocmltcCBqYXp6ZWQgdXAgaW4gYnV0dGVyeSBnYXJsaWMgYW5kIHBhcnNsZXksIHNlcnZlZCBzaXp6bGluZyB3aXRoIHNhdXTDqWVkIG11c2hyb29tcyAmIG9uaW9ucyBhbmQgZ2FybGljIG1hc2hlZCBwb3RhdG9lc1wiLFxyXG4gICAgcHJpY2U6IFwiwqMyMVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDaGlja2VuIFRlbmRlciBQbGF0dGVyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDcmlzcHkgYnJlYWRlZCBjaGlja2VuIHRlbmRlcnMgYXJlIGEgZ3JpbGwgYW5kIGJhciBjbGFzc2ljLiBTZXJ2ZWQgd2l0aCBjaG9pY2Ugb2Ygc2lkZS4gUGljdHVyZWQgd2l0aCBzaWduYXR1cmUgY29sZXNsYXcgYW5kIGNsYXNzaWMgZnJpZXMuXCIsXHJcbiAgICBwcmljZTogXCLCozE3XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk9yaWdpbmFsIEJCUSBDaGlja2VuIFBpenphXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGUgT3JpZ2luYWwgQkJRIENoaWNrZW4gUGl6emEgaGFzIGEgaGFuZC10b3NzZWQgY3J1c3QsIGNoaWNrZW4gc21vdGhlcmVkIGluIENQSydzIG93biBiYXJiZWN1ZSBzYXVjZSwgc21va2VkIGdvdWRhLCByZWQgb25pb25zLCBhbmQgZnJlc2ggY2lsYW50cm8uXCIsXHJcbiAgICBwcmljZTogXCLCozE5XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNoaWNrZW4gQWxmcmVkb1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVGhlIGNyZWFtaWVzdCBtb3N0IGNoZWVzaWVzdCBwYXN0YSBzYXVjZSwgc2VydmVkIHdpdGggYSBkZWxpY2lvdXMgY2hpY2tlbiBicmVhc3QsIGJ1cnN0aW5nIHdpdGggcGVwcGVyeSBub3RlcyBhbmQgYSBoaW50IG9mIHNwaWNlLlwiLFxyXG4gICAgcHJpY2U6IFwiwqMxNVwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb25zdCB0YWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYWluQ29udGVudENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcclxuICBjb250YWluZXIuYXBwZW5kKG1haW5Db250ZW50Q29udGFpbmVyKTtcclxuICB0YWJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUaGUgTWVudVwiO1xyXG5cclxuICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmQodGFiSGVhZGluZyk7XHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG1haW5EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG1haW5EaXNwbGF5TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBtYWluSXRlbUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb25zdCBtYWluRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IG1haW5JdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IG1haW5EaXNwbGF5UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIG1haW5EaXNwbGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIG1haW5EaXNwbGF5LnN0eWxlLmdhcCA9IFwiNHJlbVwiO1xyXG4gICAgbWFpbkRpc3BsYXkuc3R5bGUucGFkZGluZyA9IFwiMXJlbVwiO1xyXG5cclxuICAgIG1haW5JdGVtSGVhZGluZy50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgIG1haW5EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XHJcbiAgICBtYWluSXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuXHJcbiAgICBtYWluRGVzY3JpcHRpb24uc3R5bGUubWF4V2lkdGggPSBcIjYwMHB4XCI7XHJcblxyXG4gICAgbWFpbkRpc3BsYXlMZWZ0LmFwcGVuZChtYWluSXRlbUhlYWRpbmcsIG1haW5EZXNjcmlwdGlvbiwgbWFpbkl0ZW1QcmljZSk7XHJcbiAgICBtYWluRGlzcGxheS5hcHBlbmQobWFpbkRpc3BsYXlMZWZ0LCBtYWluRGlzcGxheVJpZ2h0KTtcclxuXHJcbiAgICBtYWluQ29udGVudENvbnRhaW5lci5hcHBlbmQobWFpbkRpc3BsYXkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNZW51IH07XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZVBhZ2VIZWFkZXIoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVhZGVyTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBoZWFkZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGVhZGVyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgaGVhZGVySG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGhlYWRlckNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIlRoZSBSZXN0YXVyYW50XCI7XHJcbiAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JheVwiO1xyXG4gIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgaGVhZGVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gIGhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYXJvdW5kXCI7XHJcblxyXG4gIGhlYWRlckxpbmtzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICBoZWFkZXJMaW5rcy5zdHlsZS5nYXAgPSBcIjEuM3JlbVwiO1xyXG4gIGhlYWRlckxpbmtzLnN0eWxlLmxpc3RTdHlsZVR5cGUgPSBcIm5vbmVcIjtcclxuXHJcbiAgaGVhZGVySG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIGhlYWRlckhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcblxyXG4gIGhlYWRlck1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG5cclxuICBoZWFkZXJDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgaGVhZGVyQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgaGVhZGVyTGVmdC5hcHBlbmQobG9nbyk7XHJcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJMZWZ0KTtcclxuXHJcbiAgaGVhZGVyTGlua3MuYXBwZW5kKGhlYWRlckhvbWUsIGhlYWRlck1lbnUsIGhlYWRlckNvbnRhY3QpO1xyXG4gIGhlYWRlclJpZ2h0LmFwcGVuZChoZWFkZXJMaW5rcyk7XHJcblxyXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyUmlnaHQpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGhlYWRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VDb250ZW50KCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWFpbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG1haW5EaXNwbGF5TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWFpbkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29uc3QgbWFpbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgbWFpbkRpc3BsYXlSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWFpbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgbWFpbkNvbnRlbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICBtYWluQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xyXG5cclxuICBtYWluRGlzcGxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgbWFpbkRpc3BsYXkuc3R5bGUuZ2FwID0gXCI0cmVtXCI7XHJcbiAgbWFpbkRpc3BsYXkuc3R5bGUucGFkZGluZyA9IFwiMi41cmVtXCI7XHJcblxyXG4gIG1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJXZWxjb21lIFRvIFRoZSBSZXNhdXJhbnRcIjtcclxuICBtYWluRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gTW9yYmkgbm9uIGFyY3UgcmlzdXMgcXVpcyB2YXJpdXMgcXVhbS5cIjtcclxuXHJcbiAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZShcclxuICAgIFwic3JjXCIsXHJcbiAgICBcImh0dHBzOi8vdDMuZnRjZG4ubmV0L2pwZy8wMy8yNC83My85Mi8zNjBfRl8zMjQ3MzkyMDNfa2VlcTh1ZHZ2MFAyaDFNTFlKMEdMU2xUQmFnb1hTNDguanBnXCJcclxuICApO1xyXG4gIG1haW5JbWFnZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjFyZW1cIjtcclxuICBtYWluSW1hZ2Uuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICBtYWluSW1hZ2Uuc3R5bGUubWluV2lkdGggPSBcIjE4MHB4XCI7XHJcbiAgbWFpbkltYWdlLnN0eWxlLm1heFdpZHRoID0gXCI1MDBweFwiO1xyXG5cclxuICBtYWluRGlzcGxheS5zdHlsZS5taW5XaWR0aCA9IFwiNDAwcHhcIjtcclxuICBtYWluRGVzY3JpcHRpb24uc3R5bGUubWluV2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgbWFpbkRlc2NyaXB0aW9uLnN0eWxlLm1heFdpZHRoID0gXCI2MDBweFwiO1xyXG5cclxuICBtYWluRGlzcGxheUxlZnQuYXBwZW5kKG1haW5IZWFkaW5nLCBtYWluRGVzY3JpcHRpb24pO1xyXG4gIG1haW5EaXNwbGF5UmlnaHQuYXBwZW5kKG1haW5JbWFnZSk7XHJcbiAgbWFpbkRpc3BsYXkuYXBwZW5kKG1haW5EaXNwbGF5TGVmdCwgbWFpbkRpc3BsYXlSaWdodCk7XHJcblxyXG4gIG1haW5Db250ZW50Q29udGFpbmVyLmFwcGVuZChtYWluRGlzcGxheSk7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQobWFpbkNvbnRlbnRDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQYWdlSGVhZGVyLCBjcmVhdGVQYWdlQ29udGVudCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVBhZ2VIZWFkZXIsIGNyZWF0ZVBhZ2VDb250ZW50IH0gZnJvbSBcIi4vcGFnZUxvYWRcIjtcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuXHJcbmNyZWF0ZVBhZ2VIZWFkZXIoKTtcclxuY3JlYXRlUGFnZUNvbnRlbnQoKTtcclxuXHJcbmNvbnN0IG5hdkhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbmNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbmNvbnN0IG5hdkNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XHJcblxyXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcclxuICBtYWluQ29udGVudC5yZW1vdmUoKTtcclxufVxyXG5cclxubmF2SG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIGNyZWF0ZVBhZ2VDb250ZW50KCk7XHJcbn0pO1xyXG5cclxubmF2TWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNsZWFyQ29udGVudCgpO1xyXG4gIGNyZWF0ZU1lbnUoKTtcclxufSk7XHJcblxyXG5uYXZDb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY2xlYXJDb250ZW50KCk7XHJcbiAgY3JlYXRlQ29udGFjdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9