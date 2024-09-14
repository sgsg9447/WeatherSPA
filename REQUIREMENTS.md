# 프로젝트 요구사항

## 목적

- **SPA**
  - Vainilla Javascript로 SPA 라우터를 직접 구현해보며 SPA의 동작 원리를 이해합니다.
  - SPA를 직접 만들어보며 React의 동작 원리와 개발시 고려한 점들을 경험합니다.
- **비동기**
  - 실제 동작하는 API를 통한 비동기 통신을 구현합니다.
- **UX**
  - 사용자 경험을 고려한 화면을 구현합니다.
- [x] **컴포넌트 (선택 사항)**
  - 컴포넌트 개념을 학습하고, 컴포넌트 단위로 모듈화하여 개발합니다.
  - UI를 컴포넌트 단위로 생각하고 개발하는 연습을 합니다.
  - 재사용 가능한 컴포넌트를 설계해봅니다.

## 목적이 아닌 것

- SPA 동작 원리 및 비동기를 제외하고 너무 많은 시간을 투자하는 경우, 위의 목적을 다시 읽고 선택과 집중을 하는 것이 좋습니다.

## 기능 요구사항

- [x] **서울의 현재 날씨 표시**

  - [x] [OpenWeather Current Weather Data](https://openweathermap.org/current)를 사용하여 서울의 현재 날씨를 표시합니다.
    - `https://api.openweathermap.org/data/2.5/weather?lat=37.568&lon=126.978&appid=${APIKEY}&units=metric&lang=kr`;
  - [x] 온도는 °C로 표현되며, API 응답도 °C로 받습니다.
    - API 요청시 `units=metric` 추가
  - [x] 날씨 아이콘은 [icon URL](https://openweathermap.org/weather-conditions#How-to-get-icon-URL)을 참고하여 표시합니다.
    - `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`

- [ ] **현재 날씨 클릭 시 지역의 5일간 기상 상태 표시**

  - [x] [OpenWeather 5day Weather Forecast Data](https://openweathermap.org/forecast5)를 사용하여 해당 지역의 앞으로 5일간의 기상 상태를 3시간 간격으로 표시합니다.
  - 리스트에 대한 Skeleton UI를 구현합니다.

- [ ] **배포**
  - GitHub Pages 기능을 이용하여 실행 가능한 페이지를 배포합니다.
  - 배포된 페이지의 링크를 PR과 README에 작성합니다.

## 프로그래밍 요구사항

- [ ] 비동기 통신에서 실패 할 경우를 대비해요.
  - 비동기 통신에서 일어날 수 있는 다양한 상황을 고려해봐요.
- [ ] 특정한 패턴에 사고를 끼워 맞추지 않고 단지 역할과 책임에 따라 관심사를 분리해요.
  - 어떠한 관점에서 역할과 책임에 따라 관심사를 분리하였는지 리뷰어에게 설명할 수 있어야 해요.
- [ ] 라우터를 직접 구현해봐요.
  - 라우터를 직접 구현해보며 SPA가 어떻게 구현되는지 이해해요.
  - 라우팅을 구현하기 위해 사용되는 기술들에 대한 이해
    - URL 구조
    - History 객체를 기반으로 어떻게 브라우저에서 상태를 관리하는지
- [ ] Vainilla Scripts로 SPA 라우터를 직접 구현해봐요.
  - 라우터를 직접 사용해보며 DX를 보기 (내가 작성한 라우터를 내가 직접 쓰는데, 쓰기 편한가?)
