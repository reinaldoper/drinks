import apiAlcoholic from "./apiAlcoholic.js";
import createNavbar from "./navbar.js";
import createH1 from "./createH1.js";

const ITEMS_PER_PAGE = 6; // Número de itens por página
let currentPage = 1;
let drinksData = [];

const renderDrinks = (data, page) => {
  const container = document.querySelector(".container-fluid");
  if (container) {
    container.remove();
  }

  const newContainer = document.createElement("div");
  newContainer.classList.add("container-fluid", "text-center", "mt-5");

  const row = document.createElement("div");
  row.classList.add("row");

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedData = data.slice(start, end);

  paginatedData.forEach((item) => {
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

    cardBody.appendChild(h5);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
  });

  newContainer.appendChild(row);
  document.body.appendChild(newContainer);

  renderPagination(data.length, page);
};

const renderPagination = (totalItems, currentPage) => {
  const paginationContainer = document.querySelector(".pagination-container");
  if (paginationContainer) {
    paginationContainer.remove();
  }

  const newPaginationContainer = document.createElement("div");
  newPaginationContainer.classList.add("d-flex", "justify-content-center", "my-4", "pagination-container");

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.classList.add("btn", "btn-secondary", "mx-1");
    if (i === currentPage) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => {
      renderDrinks(drinksData, i);
    });
    newPaginationContainer.appendChild(pageButton);
  }

  document.body.appendChild(newPaginationContainer);
};

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
    drinksData = data;

    spinnerContainer.remove();

    if (data.length === 0) {
      const noDataMessage = document.createElement('p');
      noDataMessage.innerText = 'No data available';
      noDataMessage.classList.add('text-center', 'my-4');
      document.body.appendChild(noDataMessage);
    } else {
      renderDrinks(data, currentPage);
    }
  });
};

createNavbar();
createH1("Alcoholic Drinks");
createButton();