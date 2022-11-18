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
    let apiKey = 'caa883a4a60d93878755b08a933f74ea';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="bottom-content">
        <div className="weather-day">
          <WeatherForecastDay data={forecast[0]} />
          {/* <WeekDay
            label="Monday"
            temp={forecast[0].temp}
            iconType="CLEAR_DAY"
          />
          <WeekDay label="Tuesday" temp="+16" iconType="WIND" />
          <WeekDay label="Wednesday" temp="+15" iconType="FOG" /> */}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
