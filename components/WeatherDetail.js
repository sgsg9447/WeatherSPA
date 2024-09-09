export const renderWeatherDetail = (container, item) => {
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
      <div class="temperature-current-value">${item.main.temp.toFixed(
        1
      )}℃</div>`;
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
