import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    day = date.getDay();

    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    return days[day];
  }

  return (
    <div>
      <div>{day()}</div>
      <div>{Math.round(props.data.temp)} °C</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
    </div>
  );
}
