import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { iconColor } from '../../../../assets/styles/iconColor';

const styles = theme => ({
  root: {
    fontSize: '22px',
  },
  icon: {
    margin: '2px auto',
    fontSize: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    lineHeight: '40px',
    background: 'rgba(10,10,10,0.3)',
  },
  temp: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  tempC: {
    fontWeight: 'bold',
  },
  tempF: {
    color: 'rgba(240,240,240,0.5)',
    fontSize: '14px',
  },
  symbol: {
    fontSize: '10px',
  },
});

const Main = props => {
  const { classes, details } = props;
  return (
    <div className={classes.Main}>
      <div className={classes.icon}>
        <i
          className={details.weatherIcon}
          style={{ color: iconColor(details.mainDesc) }}
        />
      </div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.temp}
      >
        <div className={classes.tempC}>
          {details.temp}
          <span className={classes.symbol}>ºC</span>
        </div>
        <div className={classes.tempF}>
          {details.fahrenheit}
          <span className={classes.symbol}>ºF</span>
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Main);
