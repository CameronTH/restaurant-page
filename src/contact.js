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

export { createContact };
