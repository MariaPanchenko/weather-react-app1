import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';
import WeatherForecastDay from './WeatherForecastDay';

// import WeekDay from './WeekDay';

import axios from 'axios';

export default function WeatherForecast({ coordinates }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    if (coordinates !== undefined) {
      let apiKey = '5201594abea9f3e38b70e65b11a80c24';
      let longitude = coordinates.lon;
      let latitude = coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
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
