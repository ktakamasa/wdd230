const lat = "40.12553412958195";
const lon = "-83.16034569661029";
const key = "58f0d0f204c9a8f0d01dbf9e766b5458";

const urlCurrent = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
const urlForecast = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weatherDesc");

//current weather
async function getCurrentWeather() {
  try {
    const responseCurrent = await fetch(urlCurrent);
    if (responseCurrent.ok) {
      const dataCurrent = await responseCurrent.json();
      // console.log(dataCurrent); //testing
      displayCurrentWeather(dataCurrent);
    } else {
      throw Error(await responseCurrent.text());
    }
  } catch (error) {
    console.log(error);
  }
}
getCurrentWeather();

//forecast weather
async function getForecastWeather() {
  try {
    const responseForecast = await fetch(urlForecast);
    if (responseForecast.ok) {
      const dataForecast = await responseForecast.json();
      // console.log(dataForecast); //testing
      displayForecastWeather(dataForecast);
    } else {
      throw Error(await responseForecast.text());
    }
  } catch (error) {
    console.log(error);
  }
}
getForecastWeather();

function displayCurrentWeather(data) {
  // console.log(data);
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecastWeather(data) {
  // console.log(data);
  const highs = document.querySelector("#forecastHigh");
  const lows = document.querySelector("#forecastLow");

  for (let i = 0; i < 3; i++) {
    // console.table(data.daily[i]);
    const dayHigh = document.createElement("td");
    const dayLow = document.createElement("td");

    dayHigh.innerHTML = `${data.list[i].main.temp_max}&deg;F`;
    // console.log(dayHigh);
    dayLow.innerHTML = `${data.list[i].main.temp_min}&deg;F`;
    // console.log(dayLow);

    highs.appendChild(dayHigh);
    lows.appendChild(dayLow);
  }
}
