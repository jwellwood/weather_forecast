import React from 'react';
import PropTypes from 'prop-types';
import classes from './ForecastBar.module.css';
const ForecastBar = ({ forecast }) => (
  <div>
    {forecast.map(data => {
      const unixTime = new Date(data.dt * 1000);
      const dates = unixTime.toDateString();
      let dayOrNight = data.weather[0].icon;
      let icon = `wi wi-owm-${data.weather[0].id}`;
      if (dayOrNight.includes('n')) {
        icon = `wi wi-owm-night-${data.weather[0].id}`;
      }
      return (
        <div key={unixTime} className={classes.OutsideContainer}>
          <div className={classes.ForecastContainer}>
            <div>
              <i className={icon} />
            </div>
            <div className={classes.DateAndTime}>
              <p className={classes.Date}>
                {dates.slice(0, -11)}
                <span className={classes.Time}>
                  {data.dt_txt.slice(11, -3)}
                </span>
              </p>
              <h3 className={classes.Description}>
                {data.weather[0].description}
              </h3>
            </div>
            <div className={classes.Temp}>
              <h1>
                {data.main.temp.toFixed(0)}º
                <span className={classes.Degrees}>C</span>
              </h1>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

ForecastBar.propTypes = { forecast: PropTypes.array.isRequired };

export default ForecastBar;
