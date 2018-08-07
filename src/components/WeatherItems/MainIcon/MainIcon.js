import React from 'react';
import classes from './MainIcon.module.css';

const MainIcon = props => {
  const { icon } = props;
  return (
    <img
      className={classes.MainIcon}
      src={`https://openweathermap.org/img/w/${icon}.png`}
      alt="icon"
    />
  );
};

export default MainIcon;
