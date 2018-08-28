import React from 'react';
import PropTypes from 'prop-types';
import classes from './OtherDetails.module.css';

const OtherDetails = props => {
  const { humidity, wind } = props;
  return (
    <div className={classes.OtherDetails}>
      <h4>
        humidity: <span className={classes.Data}>{humidity}%</span>
      </h4>
      <h4>
        wind speed:{' '}
        <span className={classes.Data}>
          {wind}
          kph
        </span>
      </h4>
    </div>
  );
};

OtherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default OtherDetails;
