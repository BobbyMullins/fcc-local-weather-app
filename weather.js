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
//              var displayWindDirection= document.getElementById('windDirection'); 
//              displayWindDirection.textContent = data.wind.deg; 
              
              //Fahrenheit / Celsius Conversion 
          
              $('#btn-f').click(function(){
                  var cTemp = Math.floor(data.main.temp);
                  var cToFahr = (cTemp * 9) / 5 + 32;
                  $('#temp').html(cToFahr + ' Degrees Fahrenheit'); 
                  $('#btn-f').hide(); 
                  $('#btn-c').show();  
                   
                });
              
              $('#btn-c').click(function(){
                  $('#temp').html(Math.floor(data.main.temp) + ' Degrees Celsius'); 
                  $('#btn-f').show(); 
                  $('#btn-c').hide();  
                   
                });
              
          })
    
       });  

    } 
  
}); 

//Celsius to Fahrenheit
//function cToF(celsius){
//  var cTemp = celsius;
//  var cToFahr = cTemp * 9 / 5 + 32;
//}

//Fahrenheit to Celsisus
//function fToC(fahrenheit){
//  var fTemp = fahrenheit;
//  var fToCel = (fTemp - 32) * 5 / 9;
//  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//    console.log(message);
//} 

     
 