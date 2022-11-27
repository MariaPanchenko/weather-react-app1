import React from 'react';
import WeatherIcon from '../../common/WeatherIcon';
import './WeatherForecastDay.css';

export default function WeatherForecastDay(props) {
  return (
    <div className="WeekDay">
      <div className="week-day-label">{getCurrentDay(props.data.dt)}</div>
      <div className="week-day-temp">{Math.round(props.data.temp.max)} °C</div>
      <WeatherIcon code={props.data.weather[0].icon} size={26} />
    </div>
  );
}
function getCurrentDay(dt) {
  const date = new Date(dt * 1000);
  const dayIndex = date.getDay();

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  return days[dayIndex];
}
