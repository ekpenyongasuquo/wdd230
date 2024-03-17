const currentTemp = document.querySelector("#currenttemp");
const weatherIcon = document.querySelector("#weathericon");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=4.98&lon=8.33&appid=e4f7804c3f42b044c16d7859a3b85cf6&units=metric";

//async function to try fetching and taking response
async function fetchAPI() {
    try {
        //try to fetch, whatever is fetched is stored
        //in the response variable.
        const response = await fetch(url);
        //if the response is not null..
        if (response.ok) {
            //store the response in a variable named data
            const data = await response.json();
            //and plug that response into our other function
            displayResults(data);
            console.table(data);
        } else {
            //all else, throw an error with the awaitted
            //response text as the error..
            throw Error(await response.text());
        }
        //that is then caught from line 20 and logged in console
    } catch (error) {
        console.log(error);
    }
}


//displays results to the document query selectors
function displayResults(data) {
    //Rounding the temperature as 55.65 degrees
    //is relatively useless to display.
    var temp = Math.round(data.main.temp, 0);
    //set the current temperature that is fetched to
    //the query selector in the HTML.
    currentTemp.innerHTML = `${temp}&deg;F`;
    //icon using api's url
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    //description index according to fetch function.
    let description = data.weather[0].description;
    //setting the constants of query selectors to the
    //data we have above.
    weatherIcon.setAttribute("src", icon);
    weatherIcon.setAttribute("alt", description);
}

//Call the fetch.
fetchAPI();
