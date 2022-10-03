const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("ul");

const makeList = (options) => {
  return options.map((option) => {
    const newItem = document.createElement("li");
    newItem.textContent = option;
    newItem.classList.add("item");
    return newItem;
  });
};

const itemArrayEl = makeList(ingredients);

listEl.append(...itemArrayEl);
