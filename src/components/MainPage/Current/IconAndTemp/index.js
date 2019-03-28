import React from 'react';
import PropTypes from 'prop-types';
// Components
import Display from './Display';

const IconAndTemp = props => {
  const {
    details,
    showDetails,
    toggleDetails,
    getForecast,
    showForecast,
    toggleForecast,
    forecastData,
  } = props;
  return (
    <Display
      icon={details.weatherIcon}
      desc={details.description}
      mainDesc={details.mainDesc}
      celcius={details.temp}
      roundedCel={details.roundedTemp}
      fahrenheit={details.fahrenheit}
      roundedFah={details.roundedFahrenheit}
      details={details}
      showDetails={showDetails}
      toggleDetails={toggleDetails}
      getForecast={getForecast}
      showForecast={showForecast}
      toggleForecast={toggleForecast}
      forecastData={forecastData}
    />
  );
};

// Proptypes
IconAndTemp.propTypes = {
  details: PropTypes.object.isRequired,
  showDetails: PropTypes.bool.isRequired,
  toggleDetails: PropTypes.func.isRequired,
};

export default IconAndTemp;
