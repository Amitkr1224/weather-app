import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Temp.css";
import Input from "./Input";
import Display from "./Display";

export default function Weather() {
  // const [temps, setTemps] = useState({});

  // let lat, lon;
  // let options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  // function success(pos) {
  //   let crd = pos.coords;
  //   lat = crd.latitude;
  //   lon = crd.longitude;
  //   fetchWeatherWithGeoLocation(lat, lon);
  //   // console.log(lat);
  // }
  // function showError(error) {
  //   switch (error.code) {
  //     case error.PERMISSION_DENIED:
  //       alert("User denied the request for Geolocation API.");
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       alert("USer location information is unavailable.");
  //       break;
  //     case error.TIMEOUT:
  //       alert("The request to get user location timed out.");
  //       break;
  //     case error.UNKNOWN_ERROR:
  //       alert("An unknown error occurred.");
  //       break;
  //   }
  // }

  // const fetchWeatherWithGeoLocation = (la, lo) => {
  //   setLoad(true);
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${la}&lon=${lo}&units=metric&&appid=8119af36ee9af28518f9d72f78b934d8`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       const { temp, temp_max, temp_min } = res.data.main;
  //       const { main: weatherCond } = res.data.weather[0];
  //       const { country } = res.data.sys;
  //       const { name } = res.data;

  //       const tempInfo = {
  //         temp_max,
  //         temp_min,
  //         temp,
  //         weatherCond,
  //         country,
  //         name,
  //       };
  //       setTemps(tempInfo);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   setLoad(false);
  // };

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(success, showError, options);
  // }, []);


  // Fetching when its load for 1st time

  return (
    <>
      {/* <Input /> */}
      {/* <Display tempD={temps} /> */}
    </>
  );
}
