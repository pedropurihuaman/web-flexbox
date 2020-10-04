const toggleMenu = document.getElementById('toggle-menu')
const navegation = document.getElementById('navegation')

toggleMenu.addEventListener('click', () => {
	navegation.classList.toggle('menu__show')
})
