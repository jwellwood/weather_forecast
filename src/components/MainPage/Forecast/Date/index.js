import React from 'react';
import classes from './Date.module.css';

const Date = props => {
  const { date } = props;
  return (
    <div>
      <div className={classes.Date}>
        {date.date} {date.month}
      </div>

      <div className={classes.Time}> {date.time}</div>
    </div>
  );
};

export default Date;
