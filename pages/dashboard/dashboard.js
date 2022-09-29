const $ = (domElem) => document.getElementById(domElem)

const logoutBtn = $('logout')

logoutBtn.addEventListener('click', () => {
  window.location.replace('../Home/home.html')
})