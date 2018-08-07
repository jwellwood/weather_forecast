import React from 'react';
import classes from './DateAndTime.module.css';

const DateAndTime = props => {
  const { date, time } = props;
  return (
    <div className={classes.DateAndTime}>
      <p className={classes.Date}>{date}</p>
      <p className={classes.Time}>{time}</p>
    </div>
  );
};

export default DateAndTime;
