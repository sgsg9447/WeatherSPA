# 프로젝트 요구사항

## 목적

- **SPA**
  - Vainilla Javascript로 SPA 라우터를 직접 구현해보며 SPA의 동작 원리를 이해합니다.
  - SPA를 직접 만들어보며 React의 동작 원리와 개발시 고려한 점들을 경험합니다.
- **비동기**
  - 실제 동작하는 API를 통한 비동기 통신을 구현합니다.
- **UX**
  - 사용자 경험을 고려한 화면을 구현합니다.
- **컴포넌트 (선택 사항)**
  - 컴포넌트 개념을 학습하고, 컴포넌트 단위로 모듈화하여 개발합니다.
  - UI를 컴포넌트 단위로 생각하고 개발하는 연습을 합니다.
  - 재사용 가능한 컴포넌트를 설계해봅니다.

## 목적이 아닌 것

- SPA 동작 원리 및 비동기를 제외하고 너무 많은 시간을 투자하는 경우, 위의 목적을 다시 읽고 선택과 집중을 하는 것이 좋습니다.

## 기능 요구사항

- [ ] **서울의 현재 날씨 표시**

  - [OpenWeather Current Weather Data](https://openweathermap.org/current)를 사용하여 서울의 현재 날씨를 표시합니다.
  - 온도는 °C로 표현되며, API 응답도 °C로 받습니다.
  - 날씨 아이콘은 [icon URL](https://openweathermap.org/weather-conditions#How-to-get-icon-URL)을 참고하여 표시합니다.

- [ ] **현재 날씨 클릭 시 지역의 5일간 기상 상태 표시**

  - [OpenWeather 5day Weather Forecast Data](https://openweathermap.org/forecast5)를 사용하여 해당 지역의 앞으로 5일간의 기상 상태를 3시간 간격으로 표시합니다.
  - 리스트에 대한 Skeleton UI를 구현합니다.

- [ ] **배포**
  - GitHub Pages 기능을 이용하여 실행 가능한 페이지를 배포합니다.
  - 배포된 페이지의 링크를 PR과 README에 작성합니다.
