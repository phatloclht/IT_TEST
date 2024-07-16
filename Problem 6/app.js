// Define OpenWeatherMap API key
const apiKey = '5bb9b824f72faf71e6d401dcd20afff8';
const lat = 10.8333;
const lon = 106.6667;

// URL for the OpenWeatherMap API
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const seaLevel = data.main.sea_level;
    const description = data.weather[0].description;
    const country = data.sys.country;
    const city = data.name;

    console.log(`Temperature: ${temperature}°C`);
    console.log(`Humidity: ${humidity}%`);
    console.log(`Pressure: ${pressure}%`);
    console.log(`Sea Level: ${seaLevel}%`);
    console.log(`Description: ${description}`);
    console.log(`Country: ${country}`);
    console.log(`City: ${city}`);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

// Call the function to fetch weather data
fetchWeather();
