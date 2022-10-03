const rangeInput = document.getElementById("font-size-control");
const fontSpanAction = document.getElementById("text");

rangeInput.addEventListener("input", onInputRange);

function onInputRange(event) {
  fontSpanAction.style.fontSize = `${event.currentTarget.value}px`;
}
