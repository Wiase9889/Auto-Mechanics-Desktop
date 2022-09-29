const $ = (domElem) => {
  return document.getElementById(domElem);
};

const registerForm = $("signin__form");
const regBtn = $("submit");
const usernameInput = $("username");
const passwordInput = $("password");
const confirmPassword = $("confirmPassword");

const userDB = [];

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmpassword = confirmPassword.value;

  // Creating a REGEX for validating the user's inputs...
  const lowerCase = /[a-z]/g;
  const upperCase = /[A-Z]/g;
  const numbers = /[0-9]/g;

  const userCred = { username, password };

  // const users = JSON.parse(localStorage.getItem("userCred"));

  // if (username === users.username || password === users.password) {
  //   alert(`Sorry, user with username ${username || password} already exists`);
  //   window.location.href = "../login/login.html";
  // }

  // Checking all user input values...
  if (!username) {
    alert("Please add a username");
  } else if (!password) {
    alert("Please add a password");
  } else if (!confirmpassword) {
    alert("Please confirm your password");
  } else if (confirmpassword !== password) {
    alert("Passwords do not match");
    return;
  } else if (!password.match(numbers)) {
    alert("Please add at least one number");
  } else if (!password.match(lowerCase)) {
    alert("Please add a lowercase letter");
  } else if (!password.match(upperCase)) {
    alert("Please add an uppercase letter");
  } else {
    // Saving our user's input into the LocalStorage as a local database...
    alert("Registration Successful");
    localStorage.setItem("userCred", JSON.stringify(userCred));
    // Replacing the current window with the Dashboard window
    // to prevent the user from going back to the signup screen...
    window.location.replace("../../dashboard/dashboard.html");
  }
});
