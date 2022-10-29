import React from 'react';
import './Weather.css';
import axios from 'axios';

export default function Weather() {
  function handleSubmit(response) {
    let apiKey = '7b33e98fb3b0406841a50cf97f2e248a';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=$lviv&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }

  let weatherData = {
    city: 'Lviv',
    temperature: 19,
    date: 'Tuesday 10:00',
    description: 'Cloudy',
    imgUrl: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className=" col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 submit-search"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
