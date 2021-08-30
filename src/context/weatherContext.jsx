import { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

export function Provider(props) {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lon}&exclude=${EXCLUDE}&appid=${APIKEY}`
      )
      .then((res) => {
        console.log(res);
        setWeather(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <Context.Provider value={{ weather }} {...props} />;
}

export default Context;
