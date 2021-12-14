const menuBtn = document.querySelector('.nav-button');
const navShow = document.querySelector('.nav-container')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navShow.classList.toggle('nav-toggle');
});