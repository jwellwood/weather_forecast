import React from 'react';
import classes from './Main.module.css';

const Main = props => {
  const { details } = props;

  return (
    <div className={classes.Main}>
      <div className={classes.Icon}>
        <i className={details.weatherIcon} />
      </div>
      <div className={classes.TempC}>
        {details.temp}
        <span className={classes.Symbol}>ºC</span>
      </div>
      <div className={classes.TempF}>
        {details.fahrenheit}
        <span className={classes.Symbol}>ºF</span>
      </div>
    </div>
  );
};

export default Main;
