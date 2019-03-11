import React from 'react';
import PropTypes from 'prop-types';
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

DateAndTime.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default DateAndTime;
