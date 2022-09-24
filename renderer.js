const darkmodeToggle = document.getElementById('toggle_dark')
const toggleSystem = document.getElementById('toggle_system')
const loginBtn = document.getElementById('login')

const theme = document.getElementById('theme_source');

darkmodeToggle.addEventListener('click', async () => {
  const isDarkmode = await window.darkMode.toggle()
  // theme.innerHTML = isDarkmode ? 'Dark' : 'Light'
  darkmodeToggle.innerText = isDarkmode ? 'Light' : 'Dark'
})

toggleSystem.addEventListener('click', async () => {
  await window.darkMode.system()
  theme.innerHTML = 'System'
})


loginBtn.addEventListener('click', login)