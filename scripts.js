 let appId = "507824bf352e7faab662b7bd7bb04b55";
 let units = "imperial";
 let searchMethod;

 function getSearchMethod(searchTerm) {
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
      searchMethod ='zip';
    else 
      searchMethod ='q';
 }

 function searchWeather(searchTerm) {
   getSearchMethod(searchTerm);
   fetch('https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId&units}').then(result =>{
      return result.json();
 }).then(result => {
      init(result);
 })
 }

 function init (resultFromServer) {
   console.log(resultFromServer);
 }

 document.getElementById('searchBtn').addEventListener('click', () => {
   let searchTerm = document.getElementById("searchInput").value;
   if(searchTerm)
    searchWeather(searchTerm);
 })









// function farenheitToCelsius(k) {
//     return Math.round((k - 32) * 0.5556 );
//   }
  
//   function humidityPercentage(h) {
//     return Math.round(h * 100);
//   }
  
//   function degreesToDirection(degrees) {
//       var range = 360/16;
//       var low = 360 - range/2;
//       var high = (low + range) % 360;
//       var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
//       for (i in angles) {
  
//           if(degrees>= low && degrees < high)
//               return angles[i];
  
//           low = (low + range) % 360;
//           high = (high + range) % 360;
//       }
//   }var weatherImages = {
//     "clear-day": "clear-day.svg",
//     "clear-night": "clear-night.svg",
//     "rain": "rain.svg",
//     "snow": "snow.svg",
//     "sleet": "sleet.svg",
//     "wind": "wind.svg",
//     "fog": "fog.svg",
//     "cloudy": "cloudy.svg",
//     "partly-cloudy-day": "partly-cloudy-day.svg",
//     "partly-cloudy-night": "partly-cloudy-night.svg",
//     "hail": "hail.svg",
//     "thunderstorm": "thunderstorm.svg",
//     "tornado": "tornado.svg"
//   }
  
  
//   var object;
  
//    function displayWeather(object) {
//       humidity.innerHTML = "Humidity: " + humidityPercentage(object.currently.humidity) + "%";
//       weatherIcon.src = "images/" + weatherImages[object.currently.icon]; <!--  Attaching our icons to the weather data here...  -->
//       pressure.innerHTML = "Pressure: " + object.currently.pressure + " mb";
//       uvIndex.innerHTML = "uvIndex: " + object.currently.uvIndex;
//       temperatureIcon.src = "images/thermometer.svg";
//       temperature.innerHTML = farenheitToCelsius(object.currently.temperature) + " C" + " / " + object.currently.temperature + " F";
//       windBearing.innerHTML = "Wind Direction: " + degreesToDirection(object.currently.windBearing);
//       windSpeed.innerHTML = "Wind Speed: " + knotsToKilometres(object.currently.windSpeed) + " km/h";
//       weatherSummary.innerHTML = "Current Location: " + object.timezone + " <br/> <br/> Weather Summary: " + object.currently.summary;
//       document.getElementById("current-icon").style.backgroundColor = "#002db3"; 
//       document.getElementById("weather-summary").style.backgroundColor = "#002db3"; 
//       console.log(object);
  
//    }
