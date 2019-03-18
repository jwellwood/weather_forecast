import React from 'react';
import classes from '../CurrentWeather.module.css';

const DateAndTime = props => {
  const { date, time } = props;
  return (
    <div className={classes.DateAndTime}>
      <div>{date}</div>
      <div className={classes.Time}>{time}</div>
    </div>
  );
};

export default DateAndTime;
