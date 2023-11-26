import { createPageHeader, createPageContent } from "./pageLoad";
import { createMenu } from "./menu";
import { createContact } from "./contact";

createPageHeader();
createPageContent();

const navHome = document.querySelector(".home");
const navMenu = document.querySelector(".menu");
const navContact = document.querySelector(".contact");

function clearContent() {
  const mainContent = document.querySelector(".main-content");
  mainContent.remove();
}

navHome.addEventListener("click", () => {
  clearContent();
  createPageContent();
});

navMenu.addEventListener("click", () => {
  clearContent();
  createMenu();
});

navContact.addEventListener("click", () => {
  clearContent();
  createContact();
});
