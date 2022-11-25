import React, { Fragment } from 'react';
import './Weather.css';
// import WeatherForecast from './WeatherForecast';
import WeekDay from './WeekDay';
import WeatherIcon from './WeatherIcon';
import WeatherForecast from './WeatherForecast';

export default function WeatherInfo(props) {
  console.log(props);
  // if (weatherData.ready) {
  return (
    <Fragment>
      <div className="WeatherInfo Weather">
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

          <div className="bottom-list">
            <ul>
              <li className="bottom-lists">
                <a href="/weather" className="bottom-lists">
                  Weather
                </a>
              </li>
              <li className="bottom-lists">
                <a href="/news" className="bottom-lists">
                  News
                </a>
              </li>
              <li className="bottom-lists">
                <a href="/photos" className="bottom-lists">
                  Photos
                </a>
              </li>
            </ul>
          </div>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
          {/* <WeatherForecast coordinates={weatherData.coordinates} /> */}
          {/* <WeatherForecast coordinates={props.data.coordinates} /> */}
          {/* <div className="bottom-content">
            <ul className="weather-day">
              <WeekDay label="Monday" temp="+13" iconType="CLEAR_DAY" />
              <WeekDay label="Tuesday" temp="+16" iconType="WIND" />
              <WeekDay label="Wednesday" temp="+15" iconType="FOG" />
            </ul>
          </div> */}
        </div>
      </div>
      <footer>
        <div>
          <small>
            <a
              className="link-git"
              href="https://github.com/MariaPanchenko/weather-react-app1"
              target="_blank"
              rel="noreferrer"
            >
              open-source code
            </a>
            {''} by Mariia Panchenko
          </small>
        </div>
      </footer>
      );
      {/* } else {
    search()

    return 'Loading..';
  } */}
    </Fragment>
  );
}
