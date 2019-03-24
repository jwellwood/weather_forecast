import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from './Icon';
import Paper from '@material-ui/core/Paper';
import Temp from './Temp';
import background from '../../../../assets/styles/Background.module.css';

const styles = theme => ({
  root: {
    // backgroundImage: background,
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
  } = props;
  let backgroundImage = background.Day;
  if (icon.includes('night')) {
    backgroundImage = background.Night;
  }
  return (
    <Paper>
      <div className={backgroundImage}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Temp mainTemp={roundedCel} exactTemp={celcius} symbol="C" />
          </Grid>
          <Grid item xs={6}>
            <Icon icon={icon} desc={desc} />
          </Grid>
          <Grid item xs={3}>
            <Temp mainTemp={roundedFah} exactTemp={fahrenheit} symbol="F" />
          </Grid>
        </Grid>
        <Grid>
          <div className={classes.Desc}>{desc}</div>
        </Grid>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(Display);
