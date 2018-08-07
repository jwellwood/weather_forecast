import React from 'react';
import classes from './OtherDetails.module.css';

const MainIcon = props => {
  const { humidity, wind } = props;
  return (
    <div className={classes.OtherDetails}>
      <h4>
        humidity: <span className={classes.Data}>{humidity}%</span>
      </h4>
      <h4>
        wind speed: <span className={classes.Data}>{wind}kph</span>
      </h4>
    </div>
  );
};

export default MainIcon;
