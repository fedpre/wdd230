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

// const dayNames = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday'
// ];

// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ];

// var todaysdate = new Date();
// const dayName = dayNames[todaysdate.getDay()];
// const monthName = months[todaysdate.getMonth()];
// const currentDate = `${dayName}, ${todaysdate.getDate()} ${monthName} ${todaysdate.getFullYear()}`; // Using the Template Literal

// document.querySelector('.current-date').textContent = currentDate;