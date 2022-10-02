const allCategories = document.querySelectorAll(".item");

console.log("Number of categories:", allCategories.length);

allCategories.forEach((liItem) => {
  const titleEl = liItem.querySelector("h2").textContent;
  console.log("Category:", titleEl);
  const numberOfEl = liItem.querySelectorAll("li");
  console.log("Elements:", numberOfEl.length);
});
