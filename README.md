# WeatherSPA

## SPA(Single Page Application)

- API 받아오기
  - 어떻게 API_KEY 관리 하지? 일단 .env 로 하기
    - https://ko.vitejs.dev/guide/env-and-mode.html#env-files
  - github에서 페이지 배포했을 때 API_KEY 어떻게 해야하지?
  - 5일간 3시간 간격 API
    - api.openweathermap.org/data/2.5/forecast?lat={37.568}&lon={126.978}&appid={API key}
    - 
1. 메인 패이지 UI 구현 
2. 메인 페이지 API 연결
   2-1. 현재는 새로고침해야 API콜 하는데, setInterval과 같은 타이머 함수로 1분단위 API콜 구현하기 
3. 디테일 페이지 UI 구현 - Skeleton UI
4. 디테일 페이지 API 연결
   4-1. 라우팅 구현 후 url searchParam 으로 현재 location정보 받아와서 api콜하기 
5. 라우터 구현 (메인페이지에서 클릭시 디테일페이지로 이동)
6. 에러 핸들링 - 비동기 통신에서 실패 할 경우를 대비
7. 관심사 분리
8. 재사용 가능한 컴포넌트 설계