const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const APIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=37.568&lon=126.978&appid=${APIKEY}&units=metric&lang=kr`;

const formatDate = (timestamp, options) => {
  return new Date(timestamp * 1000).toLocaleString('ko-KR', options);
};

const renderWeatherDetail = (container, item) => {
  const weatherDetails = document.createElement('div');
  weatherDetails.classList.add('weather-details');

  const weatherSummary = document.createElement('div');
  weatherSummary.classList.add('weather-summary');

  const weatherIcon = document.createElement('img');
  weatherIcon.classList.add('weather-summary-icon');
  weatherIcon.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
  weatherSummary.appendChild(weatherIcon);

  const weatherDescription = document.createElement('div');
  weatherDescription.classList.add('weather-summary-description');
  weatherDescription.textContent = item.weather[0].description;
  weatherSummary.appendChild(weatherDescription);

  const temperatureInfo = document.createElement('div');
  temperatureInfo.classList.add('weather-temperature-info');

  const temperatureCurrent = document.createElement('div');
  temperatureCurrent.classList.add('temperature-current');
  temperatureCurrent.innerHTML = `<div class="temperature-current-label">현재</div>
    <div class="temperature-current-value">${item.main.temp.toFixed(1)}℃</div>`;
  temperatureInfo.appendChild(temperatureCurrent);

  const temperatureMinMax = document.createElement('div');
  temperatureMinMax.classList.add('temperature-min-max');
  temperatureMinMax.innerHTML = `<div class="temperature-min-max-label">최저/최고</div>
    <div class="temperature-min-max-value">${item.main.temp_min.toFixed(
      1
    )}℃ / ${item.main.temp_max.toFixed(1)}℃</div>`;
  temperatureInfo.appendChild(temperatureMinMax);

  weatherDetails.appendChild(weatherSummary);
  weatherDetails.appendChild(temperatureInfo);
  container.appendChild(weatherDetails);
};

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
  const detailPage = document.querySelector('.detail-page');
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

await getData();
