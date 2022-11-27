import React, { useState, Fragment, useEffect } from 'react';
import Content from '../content/Content';
import Header from '../header/Header';
import './AppWeather.css';

import axios from 'axios';
import Tabs from '../tabs/Tabs';
import WeatherForecast from '../weather-forecast/WeatherForecast';

export default function AppWeather() {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState('Lviv');

  useEffect(() => {
    search();
  }, []);

  function handleResponse(response) {
    setweatherData({
      coordinates: response.data.coord,
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      // description: response.data.Weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = '7b33e98fb3b0406841a50cf97f2e248a';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    // search();
  }

  return (
    <Fragment>
      <div className="weather-all">
        <div className="Weather">
          <Header
            handleSubmit={handleSubmit}
            handleCityChange={handleCityChange}
          />
          <Content data={weatherData} />
          <Tabs />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
      <footer>
        <div>
          <small>
            <a
              className="link-git"
              href="https://github.com/MariaPanchenko/weather-react-app1"
              target="_blank"
              rel="noreferrer"
            >
              open-source code
            </a>
            {''} by Mariia Panchenko
          </small>
        </div>
      </footer>
    </Fragment>
  );
}
