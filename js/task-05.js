const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  return (output.textContent = event.currentTarget.value.trim().length
    ? event.currentTarget.value
    : "Anonymous");
}
