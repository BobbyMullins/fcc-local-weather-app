    //Geo Location
    var x = document.getElementById("geoLocation");
    function getLocation() {
        if (navigator.geolocation) {
            x.innerHTML = navigator.geolocation.getCurrentPosition;
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

$.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139' , function(data){
    console.log(data);
    
    //display location 
    var displayLocation = document.getElementById('location');
    displayLocation.textContent = data.name;
    
    //display temp
    var displayTemp = document.getElementById('temp'); 
    displayTemp.textContent = Math.floor(data.main.temp) + " " + "Degrees Celsius"; 
    
    //display weather
    var displayWeather = document.getElementById('weather'); 
    displayWeather.textContent = data.weather.description; 
    
    //display wind speed
    var displayWindSpeed = document.getElementById('windSpeed'); 
    displayWindSpeed.textContent = data.wind.speed; 
    
    //display wind direction
    var displayWindDirection= document.getElementById('windDirection'); 
    displayWindDirection.textContent = data.wind.deg; 
    
}); 
     
 