const $ = (domElem) => {
  return document.getElementById(domElem);
};

const loginForm = $("loginForm");
const regBtn = $("submit");
const usernameInput = $("username");
const passwordInput = $("password");

const currUser = JSON.parse(localStorage.getItem('userCred'));

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === currUser?.username && password === currUser?.password) {
    setTimeout(() => {
      alert(`Welcome, ${currUser?.username}`)
      window.location.replace('../../dashboard/dashboard.html')
    }, 2000);
  } else if (username !== currUser?.username && password !== currUser?.password) {
    alert("Sorry, user doesn't exist. Please signup...")
    window.location.href = '../signup/signup.html'
  } else {
    alert('Sorry, wrong credentials')
    return;
  }
});