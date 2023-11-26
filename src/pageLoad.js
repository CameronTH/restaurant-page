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

export { createPageHeader, createPageContent };
