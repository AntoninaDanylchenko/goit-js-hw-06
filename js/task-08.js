const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(this.elements);

  event.currentTarget.reset();
}
