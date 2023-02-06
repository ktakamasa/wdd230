const lat = "40.12553412958195";
const lon = "-83.16034569661029";
const part = "minutely,hourly,alerts";
<<<<<<< HEAD
const key = "437209d363a4387bb2f5dffcea58bbee";
=======
const key = "58f0d0f204c9a8f0d01dbf9e766b5458";
>>>>>>> a33db27 (fix error and add chamber)
const urlWeather = `//api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${key}&units=imperial`;

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#weatherDesc");

async function getWeather() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); //testing
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getWeather();

function displayWeather(data) {
  // console.table(data);
  //current
  currentTemp.innerHTML = `${data.current.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.current.weather[0].icon}.png`;
  let desc = data.current.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;

  //forecast 
  const highs = document.querySelector("#forecastHigh");
  const lows = document.querySelector("#forecastLow");
  // const expected = document.querySelector("#expectedWeather");

  for (let i = 0; i < 3; i++) {
    // console.table(data.daily[i]);
    const dayHigh = document.createElement("td");
    const dayLow = document.createElement("td");
    // const dayWeather = document.createElement("td");

    dayHigh.innerHTML = `${data.daily[i].temp.max}&deg;F`;
    // console.log(dayHigh);
    dayLow.innerHTML = `${data.daily[i].temp.min}&deg;F`;
    // console.log(dayLow);
    // dayWeather.innerHTML = `${data.daily[i].weather[0].description}`;
    // console.log(dayWeather);

    highs.appendChild(dayHigh);
    lows.appendChild(dayLow);
    // expected.appendChild(dayWeather);
  }

}