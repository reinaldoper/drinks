import apiMargarita from "./apiMargarita.js";
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

    // Adicionar spinner de carregamento centralizado
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

    const data = await apiMargarita();

    // Remover spinner de carregamento
    spinnerContainer.remove();

    if (data.length === 0) {
      const noDataMessage = document.createElement('p');
      noDataMessage.innerText = 'No data available';
      noDataMessage.classList.add('text-center', 'my-4');
      document.body.appendChild(noDataMessage);
    } else {
      const container = document.createElement("div");
      container.classList.add("container-fluid", "text-center", "mt-5");

      const row = document.createElement("div");
      row.classList.add("row");

      data.forEach((item) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-3");

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.src = item.strDrinkThumb;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = item.strDrink;

        const pCategory = document.createElement("p");
        pCategory.classList.add("card-text");
        pCategory.innerText = `Category: ${item.strCategory}`;

        const pGlass = document.createElement("p");
        pGlass.classList.add("card-text");
        pGlass.innerText = `Glass: ${item.strGlass}`;

        const pInstructions = document.createElement("p");
        pInstructions.classList.add("card-text");
        pInstructions.innerText = `Instructions: ${item.strInstructions}`;

        const pIngredients = document.createElement("p");
        pIngredients.classList.add("card-text");
        pIngredients.innerText = "Ingredients:";

        const ul = document.createElement("ul");
        for (let i = 1; i <= 15; i++) {
          const ingredient = item[`strIngredient${i}`];
          const measure = item[`strMeasure${i}`];
          if (ingredient) {
            const li = document.createElement("li");
            li.innerText = `${measure ? measure : ""} ${ingredient}`;
            ul.appendChild(li);
          }
        }

        cardBody.appendChild(h5);
        cardBody.appendChild(img);
        cardBody.appendChild(pCategory);
        cardBody.appendChild(pGlass);
        cardBody.appendChild(pInstructions);
        cardBody.appendChild(pIngredients);
        cardBody.appendChild(ul);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });

      container.appendChild(row);
      document.body.appendChild(container);
    }
  });
};

createNavbar();
createH1("Margarita Drinks");
createButton();