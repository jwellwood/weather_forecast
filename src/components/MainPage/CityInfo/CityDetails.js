import React from 'react';
import Map from './Maps/Map';
import { Container } from 'reactstrap';
import classes from './CityInfo.module.css';
import Flags from './Maps/Flags';

const CityDetails = props => {
  const { details } = props;
  return (
    <Container style={{ height: '200px' }}>
      <div className={classes.CityDetails}>
        {details.city}
        <Flags code={details.country} />
      </div>
      <Map longitude={details.longitude} latitude={details.latitude} />
    </Container>
  );
};

CityDetails.propTypes = {};

export default CityDetails;
