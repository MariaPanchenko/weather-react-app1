import React, { useState } from 'react';
import './Weather.css';
import WeatherForecastDay from './WeatherForecastDay';

import WeekDay from './WeekDay';

import axios from 'axios';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(props);

  function load() {
    let apiKey = '5201594abea9f3e38b70e65b11a80c24';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="bottom-content">
        <div className="weather-day">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        {/* <WeekDay
            label="Monday"
            temp={forecast[0].temp}
            iconType="CLEAR_DAY"
          />
          <WeekDay label="Tuesday" temp="+16" iconType="WIND" />
          <WeekDay label="Wednesday" temp="+15" iconType="FOG" /> */}
      </div>
    );
  } else {
    load();
    return null;
  }
}
