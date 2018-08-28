import React from 'react';
import PropTypes from 'prop-types';
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

MainIcon.propTypes = { icon: PropTypes.string.isRequired };

export default MainIcon;
