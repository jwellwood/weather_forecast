import React from 'react';

const CityDetails = props => {
  const { details } = props;
  return (
    <div style={{ border: '1px solid black' }}>
      CITY INFO
      <div>
        <div>
          {details.city}, {details.country}
        </div>

        <div>{details.sunrise}</div>
        <div>{details.sunset}</div>
      </div>
    </div>
  );
};

CityDetails.propTypes = {};

export default CityDetails;
