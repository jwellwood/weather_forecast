import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const styles = theme => ({
  root: {
    margin: '0 auto',
  },
  leftButton: {
    padding: theme.spacing.unit,
    width: '100%',
    textAlign: 'right',
    marginRight: '5px',
  },
  rightButton: {
    padding: theme.spacing.unit,
    width: '100%',
    textAlign: 'left',
    marginLeft: '5px',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const ButtonSizes = props => {
  const {
    classes,
    forecastData,
    toggleForecast,
    getForecast,
    showForecast,
    city,
  } = props;
  if (city) {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        className={classes.root}
      >
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.rightButton}
            onClick={forecastData.length !== 0 ? toggleForecast : getForecast}
          >
            {showForecast ? (
              <KeyboardArrowDownIcon className={classes.leftIcon} />
            ) : (
              <KeyboardArrowUpIcon className={classes.leftIcon} />
            )}
            {showForecast ? 'forecast' : 'forecast'}
          </Button>
        </Grid>
      </Grid>
    );
  }
  return null;
};

// Proptypes
ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
  forecastData: PropTypes.array.isRequired,
  toggleForecast: PropTypes.func.isRequired,
  toggleDetails: PropTypes.func.isRequired,
  getForecast: PropTypes.func.isRequired,
  showDetails: PropTypes.bool.isRequired,
  showForecast: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
};

export default withStyles(styles)(ButtonSizes);
