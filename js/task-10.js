const divForBoxes = document.getElementById("boxes");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const numberInputEl = document.querySelector("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const arrayOfBoxes = [];

function createColectionBoxes(number, array) {
  const lengthOfArray = array.length;

  for (let i = lengthOfArray; i < lengthOfArray + number; i += 1) {
    const newBox = document.createElement("div");

    newBox.style.width = `${30 + 10 * i}px`;
    newBox.style.height = `${30 + 10 * i}px`;

    newBox.style.marginTop = "10px";
    newBox.style.backgroundColor = getRandomHexColor();

    array.push(newBox);
  }
  console.log(array);
  return divForBoxes.append(...array);
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
