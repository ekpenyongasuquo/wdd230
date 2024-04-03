const weatherURL = "https://api.openweathermap.org/data/2.5/weather?appid=a1a44291512a7fa1df8d006b7b784f14&units=imperial&id=3530103";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?appid=a1a44291512a7fa1df8d006b7b784f14&units=imperial&id=3530103";

const dayNames = [
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat"
];
const monthNames = [
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
    "December"
];


async function getWeather(url) {
    let response = await fetch(url);
    if (response.ok)    {
        let weatherObject = await response.json();
        console.log(weatherObject);
        showWeather(weatherObject);
    }
}

async function getForecast(url) {
    let response = await fetch(url);
    if (response.ok)    {
        let data = await response.json();
        showForecast(data); 
    }
}

function showWeather(weatherObject)  {
    document.querySelector(".white-h3").textContent = weatherObject.name + " " + "Weather";
    document.querySelector(".t-temp-icon").setAttribute("src", "https://openweathermap.org/img/wn/" + weatherObject.weather[0].icon + ".png");
    document.querySelector(".t-temp-icon").style.marginLeft = "-10px";
    document.querySelector(".t-desc").textContent = weatherObject.weather[0].description;
    document.querySelector(".t-temp").innerHTML = `${weatherObject.main.temp}&deg;F`;
    document.querySelector(".humidity").innerHTML = `Humidity: ${weatherObject.main.humidity}&deg;F`;
}

function showForecast(data)  {
    data.list.filter((x) =>   
        x.dt_txt.includes("12:00:00")       
    ).forEach(item => {
        console.log(item);
        let forecastContainer = document.querySelector(".forecast-container");
        let dayWeather = document.createElement("div");
        let day = document.createElement("p");
        let iconHtml = document.createElement("img");
        let tempHtml = document.createElement("span");

        let forecastDate = new Date(item.dt_txt);

        day.textContent = dayNames[forecastDate.getDay()] + ":";
        day.style.color = "black";

        iconHtml.setAttribute("src", "https://openweathermap.org/img/wn/" + item.weather[0].icon + ".png");
        dayWeather.style.display = "flex";
        dayWeather.style.alignItems = "center";
        tempHtml.innerHTML = `${item.main.temp}&deg;F`;

        dayWeather.append(day);
        dayWeather.appendChild(iconHtml);
        dayWeather.appendChild(tempHtml);
        forecastContainer.append(dayWeather);
    });
}

getWeather(weatherURL);
getForecast(forecastURL);
