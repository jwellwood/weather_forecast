import React from 'react';
import Map from './Maps/Map';
import { Container } from 'reactstrap';
import classes from './CityInfo.module.css';
import Flags from './Maps/Flags';

const CityDetails = props => {
  const { details } = props;
  return (
    <Container style={{ height: '140px', padding: '0px' }}>
      <div className={classes.CityDetails} style={{ float: 'left' }}>
        <div>{details.city}</div>
        <div>
          <span className={classes.CountryCode}>{details.country}</span>{' '}
          <Flags code={details.country} />
        </div>
      </div>

      <Map longitude={details.longitude} latitude={details.latitude} />
    </Container>
  );
};

CityDetails.propTypes = {};

export default CityDetails;
