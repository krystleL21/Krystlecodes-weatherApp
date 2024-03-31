function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature")
    let temperature = response.data.temperature.current;
    let humidityT = response.data.temperature.humidity;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description")
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${humidityT}%`
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate(date) {
 let day = date.getDay();
 let minutes = date.getMinutes();
 let hours = date.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[date.getDay()];

if (minutes < 10) {
    miinutes = `0${minutes}`;
}

return `${day} ${hours}:${minutes}`

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


}

function searchCity(city) {
let apiKey = "b68t905a51397a01bf1fcdf4ao4dde24";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");


searchCity(searchInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);

searchCity("Jamaica");