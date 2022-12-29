const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
  isValid = form.checkValidity();
  if (!isValid) {
    //Style main message
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    return;
  }
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match";
    message.style.color = "red";
  }
  isValid && passwordsMatch
    ? (message.textContent = "Successfully Registered!")
    : false;
};

const processFormData = (e) => {
  e.preventDefault();
  validateForm();
};

// Event Listner
form.addEventListener("submit", processFormData);
