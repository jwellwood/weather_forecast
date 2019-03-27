import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Buttons from '../Buttons';

const styles = () => ({
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
    top: -20,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

const Footer = props => {
  const { classes, ...other } = props;
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Buttons {...other} />
      </Toolbar>
    </AppBar>
  );
};

// Proptypes
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
