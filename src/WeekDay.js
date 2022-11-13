import React from 'react';
import './WeekDay.css';
import ReactAnimatedWeather from 'react-animated-weather';

function WeekDay({ label, temp, iconType }) {
  return (
    <li className="WeekDay">
      <span className="week-day-label">{label}</span>
      <span className="week-day-temp">{temp}</span>
      <ReactAnimatedWeather
        icon={iconType}
        color="goldenrod"
        size={28}
        animate={true}
      />
    </li>
  );
}

export default WeekDay;
