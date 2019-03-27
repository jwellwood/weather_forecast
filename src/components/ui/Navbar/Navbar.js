import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// Components
import Logo from './Logo/Logo';
import SearchBar from './Search/SearchBar';

const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  bar: {
    justifyContent: 'space-between',
    padding: theme.spacing.unit,
  },
});

const MainNavbar = props => {
  const { classes, ...other } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Logo />
          <SearchBar {...other} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

// Proptypes
MainNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainNavbar);
