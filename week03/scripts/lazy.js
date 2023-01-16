//get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

//get last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;