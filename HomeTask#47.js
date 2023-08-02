fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(response => response.json())
  .then(data => {
      const weatherDataElement = document.getElementById('weatherData');
      weatherDataElement.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Pressure: ${data.main.pressure} hPa</p>
          <p>Description: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
          <p>Wind Direction: ${data.wind.deg}°</p>
          <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon">
      `;
  })
  .catch(error => {
      console.error('Error fetching weather data:', error);
  });
