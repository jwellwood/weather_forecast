import React from "react";
import classes from "./DisplayForecastWeather.module.css";

const displayForecastWeather = ({ forecastData }) => {
  return (
    <div>
      {forecastData.map((data, i) => {
        const unixTime = new Date(data.dt * 1000);
        const dates = unixTime.toDateString();

        return (
          <div key={i} className={classes.forecast}>
            <div className={classes.dateAndTime}>
              <p className={classes.date}>{dates.slice(0, -11)}</p>
              <p className={classes.time}>{data.dt_txt.slice(11, -6)}h</p>
            </div>

            <div className={classes.icons}>
              <p className={classes.temp}>{Math.round(data.main.temp)}º</p>
              <img
                className={classes.weatherIcon}
                src={`https://openweathermap.org/img/w/${
                  data.weather[0].icon
                }.png`}
                alt="icon"
              />
            </div>

            {/* <p className={classes.description}>{data.weather[0].description}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default displayForecastWeather;
