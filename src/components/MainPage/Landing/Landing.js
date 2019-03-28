import React, { Component } from 'react';
//Styles
import { withStyles } from '@material-ui/core/styles';

//Animation
import SplitText from 'react-pose-text';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    transform: 'translateY(-50%)',
  },
  title: {
    fontSize: '30px',
    margin: '5px auto',
    fontFamily: 'Fredoka One, cursive',
    textAlign: 'center',
  },
  icon: {
    fontSize: '30px',
    color: '#f5af19',
  },
});

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 120,
  },
};

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
