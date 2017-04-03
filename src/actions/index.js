import React from 'react';
import axios from 'axios';

const API_KEY = '566595743acad5748478bb55b4f4bcb3';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
