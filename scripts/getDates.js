//get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

//get last modified date
let lastModified = new Date(document.lastModified)
document.getElementById("lastModified").innerHTML = lastModified
