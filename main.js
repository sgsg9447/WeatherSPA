const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const APIURL = `https://api.openweathermap.org/data/2.5/weather?lat=37.568&lon=126.978&appid=${APIKEY}&units=metric&lang=kr`;

async function getData() {
  try {
    const response = await fetch(APIURL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    const weather = json.weather[0];
    const weatherIcon = weather.icon;
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    const weatherLocation = json.name;
    const weatherTime = new Date(json.dt * 1000).toLocaleString(
      'ko-KR',
      options
    );
    const weatherIconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    const weatherDescription = weather.description;
    const weatherTemp = json.main.temp.toFixed(1) + '℃';
    const weatherTempMax = json.main.temp_max.toFixed(1) + '℃';
    const weatherTempMin = json.main.temp_min.toFixed(1) + '℃';

    document.querySelector('.weather-location').textContent = weatherLocation;
    document.querySelector('.weather-time').textContent = weatherTime;
    document.querySelector('.weather-summary-icon').src = weatherIconURL;
    document.querySelector('.weather-summary-description').textContent =
      weatherDescription;
    document.querySelector('.temperature-current-value').textContent =
      weatherTemp;

    document.querySelector(
      '.temperature-min-max-value'
    ).textContent = `${weatherTempMin} / ${weatherTempMax}`;
  } catch (error) {
    console.error(error.message);
  }
}

await getData();
