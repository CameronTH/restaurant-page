import { createPageHeader, createPageContent } from "./pageLoad";
import { createMenu } from "./menu";
import { createContact } from "./contact";

createPageHeader();
createPageContent();

const navButtons = document.querySelectorAll(".nav");

navButtons.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.classList.contains("home")) {
      createPageContent();
    } else if (element.classList.contains("menu")) {
      createMenu();
    } else if (element.classList.contains("contact")) {
      createContact();
    }
    const mainContent = document.querySelector(".main-content");
    mainContent.remove();
  });
});
