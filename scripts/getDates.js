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
});

// visit counter
const displayVisits = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
  displayVisits.textContent = numVisits;
} else {
  displayVisits.textContent = "This is your first visit!";
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

//Form 
//slider
const rating = document.querySelector("#rating");
const rangeValue = document.querySelector("#r");

function displayRatingValue() {
  rating.textContent = rangeValue.value;
}

rangeValue.addEventListener("change", displayRatingValue);
rangeValue.addEventListener("input", displayRatingValue);

//username
const user1 = document.querySelector("#username1");
const user2 = document.querySelector("#username2");
const message = document.querySelector("#usernameMessage");

user2.addEventListener("focusout", checkSameUsername);

function checkSameUsername() {
  if (user1.value !== user2.value) {
    message.textContent = "Usernames DO NOT MATCH!";
    message.style.display = "block";
    user2.style.backgroundColor = "red";
    user2.style.color = "#fff";
    user2.focus();
    user2.value = "";
  } else {
    message.style.display = "none";
    user2.style.backgroundColor = "#fff";
    user2.style.color = "#000";
  }
}

//submit form
const submitBtn = document.querySelector("#submitBtn");
const submitReview = document.querySelector(".submitReview tbody");
const reviewForm = document.querySelector("#reviewForm");

document.querySelector("#reviewForm").addEventListener("submit", function (event) {
  event.preventDefault();
});

submitBtn.addEventListener("click", () => {
  submitReview.textContent = "";
  const inputName = document.querySelector("input[name=fname]");
  addLines("Name", inputName.value);
  const inputEmail = document.querySelector("input[name=email]");
  addLines("Email", inputEmail.value);
  const inputRating = document.querySelector("input[type=range]");
  addLines("Rating", inputRating.value);
  const inputUsername = document.querySelector("input[name=username1]");
  addLines("Username", inputUsername.value);
});

function addLines(field, value) {
  const column1 = document.createElement("td");
  column1.textContent = field;
  const column2 = document.createElement("td");
  column2.textContent = value;
  const row = document.createElement("tr");
  row.appendChild(column1);
  row.appendChild(column2);
  submitReview.appendChild(row);
}
