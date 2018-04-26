import React from "react";
import classes from "./CurrentWeather.module.css";

const displayCurrentWeather = ({ currentData, city }) => {
  return (
    <div className={classes.containerMain}>
      <div className={classes.topRow}>
        <div className={classes.city}>
          <h1>{city[0]}</h1>
            <hr />
              <p>{city[1]}</p>
                <h3>{currentData.date}</h3>
        </div>
      </div>
      <div className={classes.topRow}>
        <div className={classes.insideContainer}>
          <img 
            className={classes.icon} 
            src={`https://openweathermap.org/img/w/${currentData.icon}.png`}
            alt="icon"
          />
        </div>
        <div className={classes.time}>
          <p>{currentData.time}h</p>
        </div>
        <div className={classes.insideContainer}>
          <p className={classes.temp}><strong>{currentData.temp}ºC</strong></p>
        </div>
      </div>
      <div className={classes.bottomRow}>
        <p><strong>{currentData.description}</strong></p>
        <p>humidity: <strong>{currentData.humidity}%</strong></p>
        <p>wind speed: <strong>{currentData.wind} kph</strong></p>
      </div>
    </div>
  );
};

export default displayCurrentWeather;
