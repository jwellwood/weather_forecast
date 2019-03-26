import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const styles = theme => ({
  root: {
    margin: '0 auto',
  },
  // button: {
  //   padding: theme.spacing.unit,
  //   width: '100%',
  //   margin: '0px 5px',
  // },
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
    toggleDetails,
    getForecast,
    showDetails,
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
            className={classes.leftButton}
            onClick={toggleDetails}
          >
            {showDetails ? 'details' : 'details'}
            {showDetails ? (
              <KeyboardArrowDownIcon className={classes.rightIcon} />
            ) : (
              <KeyboardArrowUpIcon className={classes.rightIcon} />
            )}
          </Button>
        </Grid>
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

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);
