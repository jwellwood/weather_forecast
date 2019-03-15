import React from 'react';
import CityDetails from './CityDetails';

const CityInfo = props => {
  const { data } = props;
  const city = data.name;
  const country = data.sys.country;
  const sunriseUnix = new Date(data.sys.sunrise * 1000);
  const sunrise = sunriseUnix.toLocaleTimeString().slice(0, 5);
  const sunsetUnix = new Date(data.sys.sunset * 1000);
  const sunset = sunsetUnix.toLocaleTimeString().slice(0, 5);
  const longitude = data.coord.lon;
  const latitude = data.coord.lat;

  const cityDetails = {
    city,
    country,
    sunrise,
    sunset,
    longitude,
    latitude,
  };

  return (
    <div>
      <div>
        <CityDetails details={cityDetails} />
      </div>
    </div>
  );
};

export default CityInfo;
