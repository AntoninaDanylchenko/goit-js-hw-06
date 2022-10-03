const valueEl = document.getElementById("value");
let counterValue = Number(valueEl.textContent);

const buttonDecrement = document.querySelector('[data-action="decrement"]');

const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener("click", () => {
  counterValue = counterValue - 1;
  valueEl.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue = counterValue + 1;
  valueEl.textContent = counterValue;
});
