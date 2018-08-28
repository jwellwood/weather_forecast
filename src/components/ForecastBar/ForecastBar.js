import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxiliary';
import classes from './ForecastBar.module.css';

const ForecastBar = ({ forecast }) => (
  <Aux>
    {forecast.map(data => {
      const unixTime = new Date(data.dt * 1000);
      const dates = unixTime.toDateString();

      return (
        <div key={unixTime} className={classes.OutsideContainer}>
          <div className={classes.ForecastContainer}>
            <div>
              <img
                src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt="icon"
                className={classes.Image}
              />
            </div>
            <div className={classes.DateAndTime}>
              <p className={classes.Date}>
                {dates.slice(0, -11)}
                <span className={classes.Time}>{data.dt_txt.slice(11, -3)}</span>
              </p>
              <h3 className={classes.Description}>{data.weather[0].description}</h3>
            </div>
            <div className={classes.Temp}>
              <h1>
                {data.main.temp.toFixed(0)}º<span className={classes.Degrees}>C</span>
              </h1>
            </div>
          </div>
        </div>
      );
    })}
  </Aux>
);

ForecastBar.propTypes = { forecast: PropTypes.array.isRequired };

export default ForecastBar;
