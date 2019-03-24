import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    zIndex: 10,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fabButton: {
    position: 'absolute',
    zIndex: 11,
    top: -25,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

const Footer = props => {
  const { classes, city, getForecast } = props;
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {city ? (
          <Fab
            color="secondary"
            size="medium"
            aria-label="Forecast"
            className={classes.fabButton}
            onClick={getForecast}
          >
            <i className="wi wi-night-cloudy" />
          </Fab>
        ) : null}

        <IconButton color="secondary">
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);