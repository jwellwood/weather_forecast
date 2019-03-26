import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from './Icon';
import Paper from '@material-ui/core/Paper';
import Temp from './Temp';
import background from '../../../../assets/styles/Background.module.css';

const styles = theme => ({
  desc: {
    fontSize: '1.5rem',
  },
  background: {
    background: 'transparent',
  },
});

const Display = props => {
  const {
    classes,
    celcius,
    fahrenheit,
    roundedCel,
    roundedFah,
    icon,
    desc,
    mainDesc,
  } = props;

  let backgroundImage = background.Day;
  if (icon.includes('night')) {
    backgroundImage = background.Night;
  }
  return (
    <Paper className={classes.background}>
      <div className={backgroundImage}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          alignContent="center"
        >
          <Grid item xs={3}>
            <Temp mainTemp={roundedCel} exactTemp={celcius} symbol="C" />
          </Grid>
          <Grid item xs={6}>
            <Icon icon={icon} desc={desc} mainDesc={mainDesc} />
          </Grid>
          <Grid item xs={3}>
            <Temp mainTemp={roundedFah} exactTemp={fahrenheit} symbol="F" />
          </Grid>
        </Grid>
        <Grid>
          <div className={classes.desc}>{desc}</div>
        </Grid>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Display);
