const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", onInputNotFocus);

function onInputNotFocus(event) {
  event.currentTarget.value.length ===
  Number(textInput.getAttribute("data-length"))
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");
}
function onInputFocus(event) {
  textInput.classList.remove("valid");
  textInput.classList.remove("invalid");
}

textInput.addEventListener("focus", onInputFocus);
