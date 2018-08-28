import React from 'react';
import PropTypes from 'prop-types';

import classes from './WeatherConditions.module.css';
import DateAndTime from '../DateAndTime/DateAndTime';
import MainIcon from '../MainIcon/MainIcon';
import Description from '../Description/Description';
import OtherDetails from '../OtherDetails/OtherDetails';
import Temperature from '../Temperature/Temperature';

const weatherConditions = ({ current }) => (
  <div className={classes.Container}>
    <div className={classes.outerContainer}>
      <div>
        <DateAndTime date={current.date} time={current.time.slice(0, -3)} />
      </div>
      <div className={classes.DescAndTemp}>
        <Temperature temp={current.temp} />
        <MainIcon icon={current.icon} />
        <Description description={current.description} />
      </div>
    </div>
    <div className={classes.OtherDetails}>
      <OtherDetails humidity={current.humidity} wind={current.wind} />
    </div>
    <div className={classes.Description} />
  </div>
);

weatherConditions.propTypes = { current: PropTypes.shape({}).isRequired };

export default weatherConditions;
