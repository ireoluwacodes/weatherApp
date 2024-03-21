import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
const apiKey = process.env.API_KEY;

export const useGetWeather = () => {
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      )
        .then((resp) => resp.json())
        .then((resp) => {
          // console.log("hook", resp);
          if (resp["cod"] != 200) {
            setErrorMsg(`API error : ${resp}`);
            setLoading(false);
            return;
          }
          setWeather(resp);

          setLoading(false);
        });
    } catch (error) {
      setErrorMsg(`API error : ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let myLon = location.coords.longitude.toFixed(4);
      let myLat = location.coords.latitude.toFixed(4);
      myLon == lon ? "" : setLon(myLon);
      myLat == lat ? "" : setLat(myLat);
      if (lon && lat) {
        await fetchWeatherData();
      }
    })();
  }, [lon, lat]);
  return [loading, errorMsg, weather];
};
