var cityName = "Hyderabad";

var API_KEY = "54842d265812b6cc8304415da4090e1a";



function LoadWeather(){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

    .then(function(response){

        return response.json();

    })

    .then(function(data){

        document.getElementById("lblCity").innerHTML = data.name;

        document.getElementById("lblTemp").innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;

        document.getElementById("lblDescription").innerHTML = data.weather[0].description.toUpperCase();

        document.getElementById("lblHumidity").innerHTML = `${data.main.humidity} <span class="bi bi-thermometer"></span>`

        document.getElementById("lblSpeed").innerHTML = `${data.wind.speed.toLocaleString('en-in',{ style:'unit', unit:'kilometer-per-hour' })} <span class="bi bi-wind"></span>`;

    })

}



function SearchClick(){

    cityName = document.getElementById("txtCity").value;

    LoadWeather();

}

function CityWeather(cityname){

    cityName = cityname;

    LoadWeather();

}