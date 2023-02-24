


let weather = {
    apiKey: "ff4fc8d7f3a1751b99c5118599ce6e7a",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        +"&units=metric&appid="
        + this.apiKey 
        
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(weatherData){
        const {name} = weatherData;
        const icon = weatherData.weather[0].icon;
        const weatherDescription = weatherData.weather[0].description;
        const {temp, humidity} = weatherData.main;
        const {speed} = weatherData.wind;
       
       document.querySelector(".city").innerHTML = "Weather in " + name;
       document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
       document.querySelector(".description").innerHTML = weatherDescription;
       document.querySelector(".temp").innerHTML= temp + "°C";
       document.querySelector(".humidity").innerHTML="Humidity: " + humidity + "%";
       document.querySelector(".wind").innerHTML= "Windspeed: " + speed + "km/h";
       document.querySelector(".weather").classList.remove("loading");
       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".searchBar").value);
    }
   
   
};

document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
} );

document.querySelector(".searchBar").addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        weather.search();
    }
});


weather.fetchWeather("Nigeria");