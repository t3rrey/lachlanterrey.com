import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/weather.css";
import styled from "styled-components";
import AddressSearch from "./AddressSearch";

const WeatherAppContainer = styled.div`
  width: 700px;
  height: 500px;
  background: blue;
`;

const AddressMetaDataContainer = styled.div``;

const AddressHeader = styled.h1`
  color: white;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-family: "Space Grotesk", sans-serif;
  padding: 10px 0px 0px 10px;
`;

const DateHeader = styled.h2`
  color: white;
  font-size: 15px;
  font-family: "Space Grotesk", sans-serif;
  padding: 0px 0px 0px 10px;
`;

const WeatherHighlightDailyContainer = styled.div``;

const IntraDayWeatherContainer = styled.div``;

const IntraWeekWeatherContainer = styled.div``;

const APIKEY = "cb003ec57d263f77619fc9e12e90b5a4";
const unit = "metric";

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

  return (
    <WeatherAppContainer>
      <AddressSearch />
      <AddressMetaDataContainer>
        <AddressHeader>Chatswood, NSW, Australia</AddressHeader>
        <DateHeader>Friday, February 23rd, 2022 | 11:20 am</DateHeader>
      </AddressMetaDataContainer>
      <WeatherHighlightDailyContainer></WeatherHighlightDailyContainer>
      <IntraDayWeatherContainer></IntraDayWeatherContainer>
      <IntraWeekWeatherContainer></IntraWeekWeatherContainer>
    </WeatherAppContainer>
  );
};

export default WeatherApp;
