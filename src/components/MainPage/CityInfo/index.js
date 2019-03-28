import React from 'react';
import PropTypes from 'prop-types';
// Components
import CityDetails from './CityDetails';

const CityInfo = props => {
  const { currentData } = props;
  const city = currentData.name;
  const country = currentData.sys.country;
  const sunriseUnix = new Date(currentData.sys.sunrise * 1000);
  const sunsetUnix = new Date(currentData.sys.sunset * 1000);
  const sunrise = sunriseUnix.toLocaleTimeString().slice(0, 5);
  const sunset = sunsetUnix.toLocaleTimeString().slice(0, 5);
  const latitude = currentData.coord.lat;
  const longitude = currentData.coord.lon;

  const cityDetails = {
    city,
    country,
    sunrise,
    sunset,
    longitude,
    latitude,
  };

  return <CityDetails details={cityDetails} />;
};

CityInfo.propTypes = {
  currentData: PropTypes.object.isRequired,
};

export default CityInfo;
