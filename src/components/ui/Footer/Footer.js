import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/index';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import About from '../../MainPage/About';

const Footer = props => {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <div>jwellwood 2019</div>
          <About />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

// Proptypes
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
