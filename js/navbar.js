const createNavbar = () => {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light");

  const navbarBrand = document.createElement("a");
  navbarBrand.classList.add("navbar-brand");
  navbarBrand.href = "./index.html";
  navbarBrand.innerText = "Navbar";

  const navbarToggler = document.createElement("button");
  navbarToggler.classList.add("navbar-toggler");
  navbarToggler.type = "button";
  navbarToggler.setAttribute("data-toggle", "collapse");
  navbarToggler.setAttribute("data-target", "#navbarNav");
  navbarToggler.setAttribute("aria-controls", "navbarNav");
  navbarToggler.setAttribute("aria-expanded", "false");
  navbarToggler.setAttribute("aria-label", "Toggle navigation");

  const navbarTogglerIcon = document.createElement("span");
  navbarTogglerIcon.classList.add("navbar-toggler-icon");
  navbarToggler.appendChild(navbarTogglerIcon);

  const navbarCollapse = document.createElement("div");
  navbarCollapse.classList.add("collapse", "navbar-collapse");
  navbarCollapse.id = "navbarNav";

  const navbarNav = document.createElement("ul");
  navbarNav.classList.add("navbar-nav");

  const navItems = [
    { text: "Home", href: "../index.html", active: true },
    { text: "Alcoholic", href: "../alcolic.html" },
    { text: "CocktailGlass", href: "../cocktailGlassRender.html" },
    { text: "Disabled", href: "#", disabled: true },
  ];

  navItems.forEach((item) => {
    const navItem = document.createElement("li");
    navItem.classList.add("nav-item");
    if (item.active) navItem.classList.add("active");
    if (item.disabled) navItem.classList.add("disabled");

    const navLink = document.createElement("a");
    navLink.classList.add("nav-link");
    navLink.href = item.href;
    navLink.innerText = item.text;
    if (item.active) {
      const srOnly = document.createElement("span");
      srOnly.classList.add("sr-only");
      srOnly.innerText = "(current)";
      navLink.appendChild(srOnly);
    }

    navItem.appendChild(navLink);
    navbarNav.appendChild(navItem);
  });

  navbarCollapse.appendChild(navbarNav);
  navbar.appendChild(navbarBrand);
  navbar.appendChild(navbarToggler);
  navbar.appendChild(navbarCollapse);

  document.body.insertBefore(navbar, document.body.firstChild);
};

export default createNavbar;