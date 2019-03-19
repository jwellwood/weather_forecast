import React from 'react';
import classes from './DateAndTime.module.css';

const DateAndTime = props => {
  const { date, time, sunrise, sunset } = props;
  return (
    <div className={classes.Container}>
      <div className={classes.DateAndTime}>
        <div>{date}</div>
        <div className={classes.Time}>{time}</div>
      </div>
      {sunrise || sunset ? (
        <div>
          <span>{sunrise} </span>
          <i
            className={`wi wi-sunrise ${classes.Icons} ${classes.Sunrise}`}
          />{' '}
          <i className={`wi wi-sunset ${classes.Icons} ${classes.Sunset}`} />
          <span> {sunset}</span>
        </div>
      ) : null}
    </div>
  );
};

export default DateAndTime;
