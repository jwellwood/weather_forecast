import React from 'react';
import classes from './Temperature.module.css';

const Temperature = props => {
  const { temp } = props;
  return (
    <div className={classes.Temp}>
      <h1>
        {temp}º
        <span className={classes.Degrees}>C</span>
      </h1>
    </div>
  );
};

export default Temperature;
