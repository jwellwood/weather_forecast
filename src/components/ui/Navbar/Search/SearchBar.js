import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../styles/index';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBack from '@material-ui/icons/ArrowBack';
// Components
import ErrorMessage from './ErrorMessage';

const SearchBar = props => {
  const { classes, getCurrentWeather, onReset, error } = props;

  return (
    <div className={classes.search}>
      <form onSubmit={getCurrentWeather}>
        <div className={classes.root}>
          <InputBase
            name="city"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            placeholder="Search city"
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="Search"
            color="secondary"
          >
            <SearchIcon />
          </IconButton>
          <IconButton type="reset" onClick={onReset} color="primary">
            <ArrowBack />
          </IconButton>
        </div>
      </form>
      <ErrorMessage error={error} onReset={onReset} />
    </div>
  );
};

// Proptypes
SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  getCurrentWeather: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SearchBar);
