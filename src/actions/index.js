import axios from 'axios';

// http://openweathermap.org/api  get api key from website
const API_KEY = 'key!!';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // Axios will return a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
    // Redux promise middleware will manipulate the payload (if it is a Promise) 
    // once the request finishes...it upwraps the Promise once it resolves and is sent off.
  };
}