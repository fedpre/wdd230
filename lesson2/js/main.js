const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const lastModified = document.lastModified;

document.querySelector('.current-year').textContent = currentYear;
document.querySelector('.last-modified').innerHTML = lastModified;