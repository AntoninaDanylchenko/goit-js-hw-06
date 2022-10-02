const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("ul");

// const markup = ingredients
//   .map((ingredient) => '<li class="list-item">${ingredient}</li>')
//   .join("");

// listEl.innerHTML = markup;

ingredients.forEach((ingredient) => {
  const newItem = document.createElement("li");
  listEl.append(newItem);
  newItem.textContent = ingredient;
});
