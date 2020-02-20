const emailField = document.getElementById('email');
const errorTxt = document.getElementById('error-text');
const form = document.getElementById('form');

// Show error message and apply error styling
function showError() {
  emailField.classList.add('error');
  errorTxt.classList.add('error');
  errorTxt.innerText = "Please provide a valid email address";
}

// Verify email address
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    console.log("Success!");
  } else {
    showError();
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  checkEmail(emailField);
});