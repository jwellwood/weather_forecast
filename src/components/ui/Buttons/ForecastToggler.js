import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const ForecastToggler = props => {
  const {
    classes,
    getForecast,
    forecastData,
    showForecast,
    toggleForecast,
  } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.rightButton}
      onClick={forecastData.length !== 0 ? toggleForecast : getForecast}
    >
      {showForecast ? (
        <KeyboardArrowUpIcon className={classes.leftIcon} />
      ) : (
        <KeyboardArrowDownIcon className={classes.leftIcon} />
      )}
      {showForecast ? 'forecast' : 'forecast'}
    </Button>
  );
};

export default ForecastToggler;
