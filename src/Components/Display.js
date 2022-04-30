import React from "react";
import "../Styles/Temp.css";

export default function Display({ tempD, srch }) {
  return (
    <>
      {tempD ? (
        <div className="conatiner1">
          <h1>{tempD.name}</h1>
        </div>
      ) : null}

      {tempD && (
        <div className="conatiner">
          <img
            id="img2"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sun-hot.svg"
            alt="img"
          />
          {/* <img
            id="img2"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
            alt="img"
          /> */}
          <h1 id="imgH1">{tempD.temp} °C</h1>
          <img
            id="img1"
            src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer-celsius.svg"
            alt="img"
          />
          <h1>
            Min : {tempD.temp_max} °C | Max : {tempD.temp_min} °C
          </h1>
          <h2>Weather Cond : {tempD.weatherCond}</h2>
        </div>
      )}
    </>
  );
}
