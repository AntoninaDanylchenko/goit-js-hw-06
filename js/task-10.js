const divForBoxes = document.getElementById("boxes");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const numberInputEl = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createColectionBoxes(number) {
  const arrayOfBoxes = [];

  for (let i = 0; i < number; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.height = `${30 + 10 * i}px`;
    newBox.style.marginTop = "10px";
    newBox.style.backgroundColor = getRandomHexColor();
    arrayOfBoxes.push(newBox);
  }

  return divForBoxes.prepend(...arrayOfBoxes);
}

let numberFromInput = 0;

numberInputEl.addEventListener("input", (event) => {
  numberFromInput = event.target.value;
  return numberFromInput;
});

btnCreateEl.addEventListener("click", () =>
  createColectionBoxes(numberFromInput)
);

btnDestroyEl.addEventListener("click", () => (divForBoxes.innerHTML = ""));
