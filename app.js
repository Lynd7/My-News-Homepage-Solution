const header = document.querySelector('header');
const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('open');
    header.classList.toggle('open');
})
