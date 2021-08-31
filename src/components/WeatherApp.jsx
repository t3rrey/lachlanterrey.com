import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/weather.css";
import locationButton from "../assets/icons/locationButton.svg";
const APIKEY = "cb003ec57d263f77619fc9e12e90b5a4";
const unit = "metric";

const WeatherApp = (props) => {
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&units=${unit}&appid=${APIKEY}`
      )
      .then((res) => {
        console.log(res);
        setWeather(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const setAppBackground = () => {};

  if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="main-wrapper">
        <div className="main-search-wrapper">
          <div className="search-wrapper">
            <input type="text" />
            <img src={locationButton} alt="" width="20" />
          </div>
        </div>
        <div className="main-address-wrapper">
          <h1>{weather.timezone}</h1>
        </div>
        <div className="main-temp-wrapper">
          <div className="current-temp-wrapper">
            {Math.round(weather.current.temp)}c
          </div>
          <div className="current-weather-wrapper">
            {weather.current.humidity},{weather.current.wind_speed} KPH,
            {Math.round(weather.current.feels_like)}
          </div>
        </div>
        <div className="main-hourly-wrapper"></div>
        <div className="main-weekly-wrapper"></div>
      </div>
    );
  }
};

export default WeatherApp;
