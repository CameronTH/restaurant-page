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

export { createMenu };
