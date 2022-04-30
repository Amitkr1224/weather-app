import React from "react";
import { useState, useEffect } from "react";
import "../Styles/input.css";
import axios from "axios";
import Display from "./Display";

export default function Input() {
  const [temps, setTemps] = useState(0);
  const [search, setSearch] = useState("");
  //   const [load, setLoad] = useState(false);

  const chngeHandler = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  const handleEnterBtn = (e) => {
    if (e.keyCode === 13) {
      fetchWeather(search);
      setSearch("")
    }
  };

  //   const handleClick = () => {
  //     fetchWeather(search);
  //   };

  const fetchWeather = (srchText) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${srchText}&units=metric&&appid=8119af36ee9af28518f9d72f78b934d8`
      )
      .then((res) => {
        console.log(res.data);
        const { temp, temp_max, temp_min } = res.data.main;
        const { main: weatherCond } = res.data.weather[0];
        const { country } = res.data.sys;
        const { name } = res.data;
        // const { speed } = res.data.wind;

        const tempInfo = {
          temp_max,
          temp_min,
          temp,
          weatherCond,
          country,
          name,
        };
        setTemps(tempInfo);
        console.log(tempInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   First Loading With Ranchi Data
  useEffect(() => {
    fetchWeather("Ranchi");
  }, []);

  return (
    <>
      <Display tempD={temps} srch={search} />
      <div className="srch">
        <input
          placeholder="Search With City"
          id="inp"
          value={search}
          onChange={chngeHandler}
          onKeyDown={handleEnterBtn}
        />
        {/* <button className="srchBtn" onClick={handleClick}>
    🔍
    </button> */}
      </div>
    </>
  );
}
