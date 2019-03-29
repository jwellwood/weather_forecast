import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import Paper from '@material-ui/core/Paper';
// Animation
import SplitText from 'react-pose-text';
import { charPoses } from '../../../../helpers/Transitions';
// Components
import Container from '../../../hoc/Container';

const DateAndTime = props => {
  const { classes, date, time, sunrise, sunset } = props;
  return (
    <Container>
      <div className={classes.detailsBar}>
        <div>
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            {date}
          </SplitText>
        </div>

        <Paper className={classes.time}>{time}</Paper>
      </div>

      {sunrise || sunset ? (
        <div className={classes.sun}>
          <span>{sunrise} </span>
          <i
            className={`wi wi-sunrise ${classes.icons} ${classes.sunrise}`}
          />{' '}
          <i className={`wi wi-sunset ${classes.icons} ${classes.sunset}`} />
          <span> {sunset}</span>
        </div>
      ) : null}
    </Container>
  );
};

DateAndTime.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
};

export default withStyles(styles)(DateAndTime);
