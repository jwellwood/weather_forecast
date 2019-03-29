import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import { iconColor } from '../../../../assets/styles/iconColor';
import Grid from '@material-ui/core/Grid';

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

// Proptypes
Main.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
