const darkmodeToggle = document.getElementById('toggle_dark')
const toggleSystem = document.getElementById('toggle_system')
// const loginBtn = document.getElementById('login')

const addProd = document.getElementById('addProd')
const addProdModal = document.getElementById('addProd_modal')
const updateProd_modal = document.getElementById('updateProd_modal')
const cancelAddBtn = document.getElementById('cancelAddBtn')
const editBtn = document.getElementById('editBtn')
const delBtn = document.getElementById('delBtn')
const cancelUpdateBtn = document.getElementById('cancelUpdateBtn')

const addForm = document.getElementById('addForm')
const updateForm = document.getElementById('updateForm')


const theme = document.getElementById('theme_source');


// TOGGLE DARK AND LIGHT THEME...
darkmodeToggle.addEventListener('click', async () => {
  const isDarkmode = await window.darkMode.toggle()
  // theme.innerHTML = isDarkmode ? 'Dark' : 'Light'
  darkmodeToggle.innerText = isDarkmode ? 'Light' : 'Dark'
})

toggleSystem.addEventListener('click', async () => {
  await window.darkMode.system()
  theme.innerHTML = 'System'
})


// ADD
addProd.addEventListener('click', () => {
  addProdModal.classList.add('show');
})

cancelAddBtn.addEventListener('click', () => {
  addProdModal.classList.remove('show')
})


// UPDATE
editBtn.addEventListener('click', () => {
  updateProd_modal.classList.add('show')
})

cancelUpdateBtn.addEventListener('click', () => {
  updateProd_modal.classList.remove('show')
})


// Click anywhere on the window to close the modal
window.addEventListener('click', (e) => {
  if(e.target === addProdModal) {
    addProdModal.classList.remove('show')
  }

  if(e.target === updateProd_modal) {
    updateProd_modal.classList.remove('show')
  }
})
