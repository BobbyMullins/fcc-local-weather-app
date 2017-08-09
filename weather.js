$(document).ready(function(){
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    
          var api = "https://fcc-weather-api.glitch.me/api/current?";
          var lat = 'lat=' + position.coords.latitude; 
          var lon = 'lon=' + position.coords.longitude;   
    
          $.getJSON(api + lat + '&' + lon, function(data){
              
              //location
              var displayLocation = document.getElementById('location');
              displayLocation.textContent = 'Location: ' + data.name;
            
              //temperature
              var displayTemp = document.getElementById('temp'); 
              displayTemp.textContent = Math.floor(data.main.temp) + " " + "Degrees Celsius";
            
              //weather
              var displayWeather = document.getElementById('weather'); 
              displayWeather.textContent = data.weather.description;
            
              //wind speed
              var displayWindSpeed = document.getElementById('windSpeed'); 
              displayWindSpeed.textContent = 'Wind Speed: ' + ' ' + Math.floor(data.wind.speed) + " " + "MPH";
            
              //wind direction
              var displayWindDirection= document.getElementById('windDirection'); 
              displayWindDirection.textContent = data.wind.deg; 
          })
    
       }); 

    } 
  
}); 

     
 