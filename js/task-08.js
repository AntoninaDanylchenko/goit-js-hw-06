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

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  event.currentTarget.reset();
}
