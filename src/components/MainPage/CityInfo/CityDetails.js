import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//Animation
import SplitText from 'react-pose-text';
// Components
import Map from './Maps/Map';
import Flags from './Maps/Flags';

const styles = () => ({
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

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 80,
  },
};

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
        <div>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            {details.city}
          </SplitText>
        </div>
        <div style={{ alignContent: 'center', alignItems: 'center' }}>
          <div className={classes.countryCode}>{details.country}</div>{' '}
          <Flags code={details.country} />
        </div>
      </div>

      <Map longitude={details.longitude} latitude={details.latitude} />
    </Paper>
  );
};

// Proptypes
CityDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityDetails);
