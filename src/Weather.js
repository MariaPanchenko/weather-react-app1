import React, { useState } from 'react';
import './Weather.css';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({ ready: false });
  // const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  // function displayWeather(response) {
  //   setWeather({
  //     temperature: response.data.main.temp,
  //     wind: response.data.wind.speed,
  //     humidity: response.data.main.humidity,
  //     icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  //     description: response.data.weather[0].description,
  //   });
  // }

  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      // description: response.data.Weather[0].description,
      icon: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
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

  if (weatherData.ready) {
    return (
      <div className="weather-all">
        <div className="Weather">
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="row search-form">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  autoComplete="off"
                  onChange={handleCityChange}
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
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();

    return 'Loading..';
  }

  // let weatherData = {
  //   city: 'Lviv',
  //   temperature: 19,
  //   // date: 'Tuesday 10:00',
  //   description: 'Cloudy',
  //   icon: 'https://ssl.gstatic.com/onebox/weather/64/sunny.png',
  //   humidity: 80,
  //   wind: 10,
  // };
}
