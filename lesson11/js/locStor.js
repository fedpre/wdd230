const daysSinceLastVisit = document.querySelector('#days-since');
const hoursSinceLastVisit = document.querySelector('#hours-since');
const minutesSinceLastVisit = document.querySelector('#minutes-since');
const secondsSinceLastVisit = document.querySelector('#seconds-since');

let daysPassed = 0;
let hoursPassed = 0;
let minutesPassed = 0;
let secondsPassed = 0;

let lastVisited;
let visitedToday = new Date()


const populateStorage = () => {
    localStorage.setItem('lastVisited', visitedToday.getTime());
    localStorage.setItem('visitedToday', visitedToday.getTime());
}

const setNewDate = () => {
    localStorage.setItem('visitedToday', visitedToday.getTime());
    daysPassed = calculateDays();
    hoursPassed = calculateHours();
    minutesPassed = calculateMinutes();
    secondsPassed = calculateSeconds();
}

const calculateDays = () => {
    let last = localStorage.getItem('lastVisited');
    let now = localStorage.getItem('visitedToday');
    // console.log(last)
    // console.log(now)

    let difference = now - last

    daysPassed = difference / (1000 * 3600 * 24)
    daysPassed = Math.round(daysPassed);
    return daysPassed
}

const calculateHours = () => {
    let last = localStorage.getItem('lastVisited');
    let now = localStorage.getItem('visitedToday');

    let difference = now - last

    hoursPassed = difference / (1000 * 3600)

    if (hoursPassed / 24 >= 1) {
        hoursPassed = hoursPassed % 24;
        hoursPassed = Math.round(hoursPassed)
    } else {
        hoursPassed = Math.round(hoursPassed);
    }

    return hoursPassed
}

const calculateMinutes = () => {
    let last = localStorage.getItem('lastVisited');
    let now = localStorage.getItem('visitedToday');

    let difference = now - last

    minutesPassed = difference / (1000 * 60)

    if (minutesPassed / 60 >= 1) {
        minutesPassed = minutesPassed % 60;
        minutesPassed = Math.round(minutesPassed)
    } else {
        minutesPassed = Math.round(minutesPassed);
    }
    
    return minutesPassed
}

const calculateSeconds = () => {
    let last = localStorage.getItem('lastVisited');
    let now = localStorage.getItem('visitedToday');

    let difference = now - last

    secondsPassed = difference / (1000)

    if (secondsPassed / 60 >= 1) {
        secondsPassed = secondsPassed % 60;
        secondsPassed = Math.round(secondsPassed)
    } else {
        secondsPassed = Math.round(secondsPassed);
    }
    return secondsPassed;
}

if(!localStorage.getItem('lastVisited')) {
    populateStorage();
    daysPassed = calculateDays();
} else {
    setNewDate();
}

daysSinceLastVisit.innerHTML = daysPassed;
hoursSinceLastVisit.innerHTML = hoursPassed;
minutesSinceLastVisit.innerHTML = minutesPassed;
secondsSinceLastVisit.innerHTML = secondsPassed;

localStorage.setItem('lastVisited', visitedToday.getTime());
