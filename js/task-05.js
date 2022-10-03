const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  output.textContent = event.currentTarget.value;
}
