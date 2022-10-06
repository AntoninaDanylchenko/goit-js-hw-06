const divForBoxes = document.getElementById("boxes");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const numberInputEl = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const arrayOfBoxes = [];

function createColectionBoxes(number, array) {
  const lengthOfArray = array.length;

  for (let i = lengthOfArray; i < lengthOfArray + number; i += 1) {
    const newBox = createOneBox(i);
    array.push(newBox);
  }

  return divForBoxes.append(...array);
}

function createOneBox(increm) {
  const newBox = document.createElement("div");

  newBox.style.width = `${30 + 10 * increm}px`;
  newBox.style.height = `${30 + 10 * increm}px`;

  newBox.style.marginTop = "10px";
  newBox.style.backgroundColor = getRandomHexColor();

  return newBox;
}

let numberFromInput = 0;

numberInputEl.addEventListener("input", (event) => {
  numberFromInput = Number(event.target.value);
  return numberFromInput;
});

btnCreateEl.addEventListener("click", () => {
  createColectionBoxes(numberFromInput, arrayOfBoxes);
});

btnDestroyEl.addEventListener("click", () => {
  divForBoxes.innerHTML = "";
  arrayOfBoxes.length = 0;
});
