import { renderWeatherDetail } from './components/WeatherDetail';
import { formatDate } from './utils/date';

const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const APIURL = `https://api.openweathermap.org/data/2.5/weather?lat=37.568&lon=126.978&appid=${APIKEY}&units=metric&lang=kr`;

const renderWeatherData = (data) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const weatherInfoCard = document.createElement('div');
  weatherInfoCard.classList.add('weather-info-card');

  const weatherLocation = document.createElement('div');
  weatherLocation.classList.add('weather-location');
  weatherLocation.textContent = data.name;
  weatherInfoCard.appendChild(weatherLocation);

  const weatherTime = document.createElement('div');
  weatherTime.classList.add('weather-time');
  weatherTime.textContent = formatDate(data.dt, options);

  weatherInfoCard.appendChild(weatherTime);
  renderWeatherDetail(weatherInfoCard, data);

  document.body.appendChild(weatherInfoCard);
};

async function getData() {
  try {
    const response = await fetch(APIURL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    renderWeatherData(json);
  } catch (error) {
    console.error(error.message);
  }
}

await getData();
