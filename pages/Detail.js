import { renderWeatherDetail } from '../components/WeatherDetail';
import { formatDate } from '../utils/date';

const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const APIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=37.568&lon=126.978&appid=${APIKEY}&units=metric&lang=kr`;

const renderWeatherCard = (container, item) => {
  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-info-card');
  const weatherForecastTime = document.createElement('div');
  weatherForecastTime.classList.add('weather-forecast-time');
  weatherForecastTime.textContent = formatDate(item.dt, {
    hour: '2-digit',
    minute: '2-digit',
  });
  weatherCard.appendChild(weatherForecastTime);
  renderWeatherDetail(weatherCard, item);
  container.appendChild(weatherCard);
};

const renderTimeDay = (container, time, today) => {
  const weatherTimeDay = document.createElement('div');
  weatherTimeDay.classList.add('detail-time');
  weatherTimeDay.textContent = time === today ? `${time} (오늘)` : `${time}`;
  container.appendChild(weatherTimeDay);
};

const renderLocation = (container, location) => {
  const weatherLocation = document.createElement('div');
  weatherLocation.classList.add('detail-location');
  weatherLocation.textContent = location;
  container.appendChild(weatherLocation);
};

const renderWeatherForecastData = (data) => {
  const futureWeatherData = data.list;
  const detailPage = document.createElement('div');
  detailPage.classList.add('detail-page');
  document.body.appendChild(detailPage);
  renderLocation(detailPage, data.city.name);

  let lastDisplayedDate = '';
  futureWeatherData.forEach((item) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const weatherTime = formatDate(item.dt, options);
    const today = new Date().toLocaleString('ko-KR', options);

    if (weatherTime !== lastDisplayedDate) {
      renderTimeDay(detailPage, weatherTime, today);
      lastDisplayedDate = weatherTime;
    }

    renderWeatherCard(detailPage, item);
  });
};

async function getData() {
  try {
    const response = await fetch(APIURL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    renderWeatherForecastData(json);
  } catch (error) {
    console.error(error.message);
  }
}

export default function Detail() {
  getData();
}
