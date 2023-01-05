//get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

//get last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;
