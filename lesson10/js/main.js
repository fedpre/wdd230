// Make the hamburger nav responsive and to toggle open/close in the small view

const navHam = document.querySelector('.responsive');
const mainNav = document.querySelector('.navigation');

navHam.addEventListener('click', toggleMenu)

function toggleMenu() {
    mainNav.classList.toggle('navigation');
}

// Create a new Date object and inject in the DOM the current date

const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

document.querySelector('.current-date').innerHTML = new Date().toLocaleDateString('en-UK', options);

// Toggle on/off the banne at the top

const bannerEl = document.querySelector('.banner-show');
const newDateObj = new Date();
const today = newDateObj.getDay();

if (today == 5){
    bannerEl.classList.toggle('banner-show');
}
