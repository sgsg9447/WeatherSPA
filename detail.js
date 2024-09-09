const APIKEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const APIURL = `https://api.openweathermap.org/data/2.5/forecast?lat=37.568&lon=126.978&appid=${APIKEY}&units=metric&lang=kr`;

async function getData() {
  try {
    const response = await fetch(APIURL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log('json', json);

    const futureWeatherData = json.list;

    const detailPage = document.querySelector('.detail-page');

    const weatherLocation = document.createElement('div');
    weatherLocation.classList.add('detail-location');
    weatherLocation.textContent = json.city.name;
    detailPage.appendChild(weatherLocation);
    let lastDisplayedDate = ''; 

    futureWeatherData.forEach((item) => {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      const weatherTime = new Date(item.dt * 1000).toLocaleString(
        'ko-KR',
        options
      );

      if (weatherTime !== lastDisplayedDate) {
        const today = new Date().toLocaleString('ko-KR', options);
        if (weatherTime === today) {
          const weatherTimeDay = document.createElement('div');
          weatherTimeDay.classList.add('detail-time');
          weatherTimeDay.textContent = `${weatherTime} (오늘)`;
          detailPage.appendChild(weatherTimeDay);
          lastDisplayedDate = weatherTime;
          return;
        }

        const weatherTimeDay = document.createElement('div');
        weatherTimeDay.classList.add('detail-time');
        weatherTimeDay.textContent = weatherTime;
        detailPage.appendChild(weatherTimeDay);
        lastDisplayedDate = weatherTime;
      }

      const weatherCard = document.createElement('div');
      weatherCard.classList.add('weather-info-card');

      const weatherForecastTime = document.createElement('div');
      weatherForecastTime.classList.add('weather-forecast-time');
      weatherForecastTime.textContent = new Date(
        item.dt * 1000
      ).toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      });

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

      weatherCard.appendChild(weatherForecastTime);
      weatherCard.appendChild(weatherDetails);
      detailPage.appendChild(weatherCard);
    });
  } catch (error) {
    console.error(error.message);
  }
}

await getData();
