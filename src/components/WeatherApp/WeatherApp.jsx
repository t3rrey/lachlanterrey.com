import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/weather.css";
import AddressSearch from "../WeatherApp/AddressSearch";

const APIKEY = "cb003ec57d263f77619fc9e12e90b5a4";
const unit = "metric";

const weatherClasses = {
  "clear sky": "clear-sky",
};

const WeatherApp = (props) => {
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [position, setPosition] = useState({ lat: 30, lng: 150 });

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lng}&units=${unit}&appid=${APIKEY}`
      )
      .then((res) => {
        console.log(res);
        setWeather(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [position]);

  console.log({ latLng: position });

  if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className={`main-wrapper ${weather.current.weather[0].description.replace(
          " ",
          "-"
        )}`}
      >
        <div className="main-search-wrapper">
          <AddressSearch setLatLng={setPosition} />
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
        {position && (
          <div className="">
            {position.lat} - {position.lng}
          </div>
        )}
      </div>
    );
  }
};

export default WeatherApp;
