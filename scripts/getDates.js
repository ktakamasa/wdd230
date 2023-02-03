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

// weather 
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weatherDesc");

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=58f0d0f204c9a8f0d01dbf9e766b5458&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); //testing
      displayResults(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}


// JSON Dynamic Links 
const urlLinks = "dynamic-links.json";

async function getWeeksActivities() {
  try {
    const response = await fetch(urlLinks);
    if (response.ok) {
      const data = await response.json();
      // console.log(data.weeks);
      displayActivities(data.weeks);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getWeeksActivities();

function displayActivities(weeks) {
  weeks.forEach((week) => {
    const list = document.querySelector(".weeks");
    const activities = document.createElement("li");
    const weekNum = week.week;
    const title1 = week.links[0].title;
    const url1 = week.links[0].url;
    const title2 = week.links[1].title;
    const url2 = week.links[1].url;
    const title3 = week.links[2].title;
    const url3 = week.links[2].url;
    const title4 = week.links[3].title;
    const url4 = week.links[3].url;
  
    if (title4 == "" && url4 == "") {
      activities.innerHTML = `${weekNum}: <a href="${url1}">${title1}</a> | <a href="${url2}">${title2}</a> | <a href="${url3}">${title3}</a>`;
    } else {
      activities.innerHTML = `${weekNum}: <a href="${url1}">${title1}</a> | <a href="${url2}">${title2}</a> | <a href="${url3}">${title3}</a> | <a href="${url4}">${title4}</a>`;
    }
    list.appendChild(activities);
  });
}