//get current year
let currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

//get last modified date
let lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastModified;

// Navigation / Hamburger menu
const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});


// dark mode 
const modeButton = document.querySelector("#mode");
const mainArea = document.querySelector("main");
modeButton.addEventListener("click", () => {
	modeButton.classList.toggle("dark");
	mainArea.classList.toggle("dark");
})

// visit counter
const displayVisits = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	displayVisits
.textContent = numVisits;
} else {
	displayVisits
.textContent = "This is your first visit!";
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
