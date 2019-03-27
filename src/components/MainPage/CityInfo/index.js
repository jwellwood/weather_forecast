import React from 'react';
import PropTypes from 'prop-types';
// Components
import CityDetails from './CityDetails';

const CityInfo = props => {
  const { data } = props;
  const city = data.name;
  const country = data.sys.country;
  const sunriseUnix = new Date(data.sys.sunrise * 1000);
  const sunsetUnix = new Date(data.sys.sunset * 1000);
  const sunrise = sunriseUnix.toLocaleTimeString().slice(0, 5);
  const sunset = sunsetUnix.toLocaleTimeString().slice(0, 5);
  const latitude = data.coord.lat;
  const longitude = data.coord.lon;

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
  data: PropTypes.object.isRequired,
};

export default CityInfo;
