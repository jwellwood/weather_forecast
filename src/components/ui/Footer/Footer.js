import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Grid } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    zIndex: 10,
  },
  toolbar: {
    fontSize: '15px',
    color: theme.palette.primary.light,
  },
});

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
          <IconButton color="secondary">
            <HelpOutlineIcon />
          </IconButton>
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
