import React from 'react';
import Display from './Display';
const IconAndTemp = props => {
  const { details } = props;
  return (
    <Display
      icon={details.weatherIcon}
      desc={details.description}
      mainDesc={details.mainDesc}
      celcius={details.temp}
      roundedCel={details.roundedTemp}
      fahrenheit={details.fahrenheit}
      roundedFah={details.roundedFahrenheit}
    />
  );
};

export default IconAndTemp;
