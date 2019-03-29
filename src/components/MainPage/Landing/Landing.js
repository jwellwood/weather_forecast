import React from 'react';
//Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
//Animation
import SplitText from 'react-pose-text';
import { charPoses } from '../../../helpers/Transitions';

const Landing = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div>the</div>
      <div className={classes.title}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          Weather
        </SplitText>
      </div>
      <div className={classes.icon}>
        <i className="wi wi-horizon-alt" />
      </div>
    </div>
  );
};

export default withStyles(styles)(Landing);
