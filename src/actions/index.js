import axios from 'axios';

const API_KEY = '21b05ef26d7964118078df91c8d76f4a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=${API_KEY}`;
const UNSPLASH_ID = `dfdb7d6ed1929eab0fb64396839298aa06c6b3fc993ce9dbc211ec4ebed388a5`;
const Image_URL = `https://api.unsplash.com/search/photos?client_id=${UNSPLASH_ID}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_DETAIL = 'FETCH_WEATHER_DETAIL';
export const FETCH_WEATHER_IMAGE = 'FETCH_WEATHER_IMAGE';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function fetchWeatherDetail(id) {
    const url = `${ROOT_URL}&id=${id}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER_DETAIL,
        payload: request
    }
}

export function fetchImage(city) {
    const url = `${Image_URL}&page=1&query=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER_IMAGE,
        payload: request
    }
}