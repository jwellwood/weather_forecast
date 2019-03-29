import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const ForecastToggler = props => {
  const { getForecast, forecastData, showForecast, toggleForecast } = props;
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={forecastData.length !== 0 ? toggleForecast : getForecast}
    >
      {showForecast ? 'forecast' : 'forecast'}
      {showForecast ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </Button>
  );
};

export default ForecastToggler;
