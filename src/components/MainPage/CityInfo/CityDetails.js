import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Map from './Maps/Map';
import Flags from './Maps/Flags';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '50%',
    fontSize: '30px',
    margin: '5px auto',
    fontFamily: 'Fredoka One, cursive',
    textAlign: 'center',
  },
  countryCode: {
    fontSize: '15px',
  },
});

const CityDetails = props => {
  const { classes, details } = props;
  return (
    <Paper
      style={{
        height: '180px',
        padding: '0px',
        background: 'rgba(10, 10, 10, 0.5)',
        margin: '5px auto',
      }}
    >
      <div className={classes.root} style={{ float: 'left' }}>
        <div>{details.city}</div>
        <div style={{ alignContent: 'center', alignItems: 'center' }}>
          <div className={classes.countryCode}>{details.country}</div>{' '}
          <Flags code={details.country} />
        </div>
      </div>

      <Map longitude={details.longitude} latitude={details.latitude} />
    </Paper>
  );
};

CityDetails.propTypes = {};

export default withStyles(styles)(CityDetails);
