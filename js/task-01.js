const allCategories = document.querySelectorAll(".item");

console.log("Number of categories:", allCategories.length);

allCategories.forEach((Item) => {
  const titleEl = Item.querySelector("h2").textContent;
  console.log("Category:", titleEl);
  const numberOfEl = Item.querySelectorAll("li");
  console.log("Elements:", numberOfEl.length);
});
