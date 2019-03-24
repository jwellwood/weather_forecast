import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ErrorMessage from './ErrorMessage';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    marginLeft: theme.spacing.unit,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  inputRoot: {
    color: 'inherit',
    width: 'auto',
    padding: theme.spacing.unit,
  },
  inputInput: {
    padding: theme.spacing.unit,
  },
});

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

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchBar);
