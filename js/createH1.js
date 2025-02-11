const createH1 = (text) => {
  const h1 = document.createElement("h1");
  h1.innerText = `${text}`;
  h1.classList.add("text-center", "my-4");
  document.body.appendChild(h1);
};


export default createH1;