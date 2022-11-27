import React from 'react';
import WeatherIcon from '../../common/WeatherIcon';
import './WeatherForecastDay.css';

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
    <div className="WeekDay">
      <div className="week-day-label">{day()}</div>
      <div className="week-day-temp">{Math.round(props.data.temp.max)} °C</div>
      <WeatherIcon code={props.data.weather[0].icon} size={26} />
    </div>
  );
}
