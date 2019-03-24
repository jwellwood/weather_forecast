import React from 'react';
import Map from './Maps/Map';
import classes from './CityInfo.module.css';
import Flags from './Maps/Flags';
import Paper from '@material-ui/core/Paper';

const CityDetails = props => {
  const { details } = props;
  return (
    <Paper
      style={{
        height: '180px',
        padding: '0px',
        background: 'rgba(10, 10, 10, 0.5)',
        margin: '10px auto',
      }}
    >
      <div className={classes.CityDetails} style={{ float: 'left' }}>
        <div>{details.city}</div>
        <div style={{ alignContent: 'center', alignItems: 'center' }}>
          <div className={classes.CountryCode}>{details.country}</div>{' '}
          <Flags code={details.country} />
        </div>
      </div>

      <Map longitude={details.longitude} latitude={details.latitude} />
    </Paper>
  );
};

CityDetails.propTypes = {};

export default CityDetails;
