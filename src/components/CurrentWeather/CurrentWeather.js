import React from 'react';
import PropTypes from 'prop-types';

import classes from './CurrentWeather.module.css';
import DateAndTime from '../WeatherItems/DateAndTime/DateAndTime';
import OtherDetails from '../WeatherItems/OtherDetails/OtherDetails';
import MainDetails from '../WeatherItems/MainDetails/MainDetails';

const CurrentWeather = ({ current }) => {
  const { date, time, temp, icon, description, humidity, wind } = current;
  console.log(icon);
  return (
    <div className={classes.Container}>
      <div className={classes.outerContainer}>
        <div>
          <DateAndTime date={date} time={time.slice(0, -3)} />
        </div>
        <MainDetails temp={temp} icon={icon} description={description} />
      </div>
      <div className={classes.OtherDetails}>
        <OtherDetails humidity={humidity} wind={wind} />
      </div>
      <div className={classes.Description} />
    </div>
  );
};

CurrentWeather.propTypes = { current: PropTypes.shape({}).isRequired };

export default CurrentWeather;
