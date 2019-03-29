import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import Paper from '@material-ui/core/Paper';
//Animation
import SplitText from 'react-pose-text';
import { charPoses } from '../../../helpers/Transitions';
// Components
import Map from './Maps/Map';
import Flags from './Maps/Flags';

const CityDetails = props => {
  const { classes, details } = props;
  const { city, country, longitude, latitude } = details;
  return (
    <Paper className={classes.paper}>
      <div className={classes.root} style={{ float: 'left' }}>
        <div>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            {city}
          </SplitText>
        </div>
        <div style={{ alignContent: 'center', alignItems: 'center' }}>
          <div className={classes.countryCode}>{country}</div>{' '}
          <Flags code={country} />
        </div>
      </div>

      <Map longitude={longitude} latitude={latitude} />
    </Paper>
  );
};

// Proptypes
CityDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityDetails);
