import React from 'react';
import PropTypes from 'prop-types';

import classes from './CurrentWeather.module.css';
import DateAndTime from './DateAndTime/DateAndTime';
import OtherDetails from './OtherDetails/OtherDetails';
import MainDetails from './MainDetails/MainDetails';

const weatherConditions = ({ current }) => {
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

weatherConditions.propTypes = { current: PropTypes.shape({}).isRequired };

export default weatherConditions;
