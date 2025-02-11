import apiAlcoholic from "./apiAlcoholic.js";
import createNavbar from "./navbar.js";
import createH1 from "./createH1.js";

const createButton = () => {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("d-flex", "justify-content-center", "my-4");

  const button = document.createElement("button");
  button.innerText = "Load Drinks";
  button.type = "button";
  button.classList.add("btn", "btn-primary");
  buttonContainer.appendChild(button);
  document.body.appendChild(buttonContainer);

  button.addEventListener("click", async () => {
    if (document.querySelector(".container-fluid")) {
      document.querySelector(".container-fluid").remove();
    }

    
    const spinnerContainer = document.createElement('div');
    spinnerContainer.classList.add('d-flex', 'justify-content-center', 'my-4');
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner-border', 'text-primary');
    divSpinner.setAttribute('role', 'status');
    const spanSpinner = document.createElement('span');
    spanSpinner.classList.add('sr-only');
    spanSpinner.innerText = 'Loading...';
    divSpinner.appendChild(spanSpinner);
    spinnerContainer.appendChild(divSpinner);
    document.body.appendChild(spinnerContainer);

    const data = await apiAlcoholic();

   
    spinnerContainer.remove();

    if (data.length === 0) {
      const noDataMessage = document.createElement('p');
      noDataMessage.innerText = 'No data available';
      noDataMessage.classList.add('text-center', 'my-4');
      document.body.appendChild(noDataMessage);
    } else {
      const container = document.createElement("div");
      container.classList.add("container-fluid", "text-center", "mt-5");

      data.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3");

        const img = document.createElement("img");
        img.src = item.strDrinkThumb;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = item.strDrink;

        cardBody.appendChild(h5);
        card.appendChild(img);
        card.appendChild(cardBody);
        container.appendChild(card);
      });

      document.body.appendChild(container);
    }
  });
};

createNavbar();
createH1("Alcoholic Drinks");
createButton();