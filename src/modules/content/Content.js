import React from 'react';
import './Content.css';
import WeatherIcon from '../../common/WeatherIcon';

export default function Content(props) {
  return (
    <div className="WeatherInfo ">
      <div className="overview">
        <h1 className="city-name aligned">{props.data.city}</h1>
        <div>
          <span className="weather-descr aligned">
            {props.data.description}
          </span>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature aligned">
              <WeatherIcon code={props.data.icon} />
              {/* <img
                  src={props.data.icon}
                  alt={props.data.description}
                  className="float-left"
                /> */}
              <div className="float-left aligned">
                <strong className="temp">
                  {Math.round(props.data.temperature)}
                </strong>
                <br />
                <br />
                <br />
                <span className="units aligned">
                  <a href="/" className="degrees">
                    °C
                  </a>
                  <span className="line"> | </span>
                  <a href="/" className="degrees">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 weather-info">
            <ul>
              <li className="weater-status aligned">
                Humidity: {props.data.humidity}%
              </li>
              <li className="weater-status aligned">
                Wind: {Math.round(props.data.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
