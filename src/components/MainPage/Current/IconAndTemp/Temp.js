import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  main: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
  symbol: {
    fontSize: '15px',
    fontWeight: 'lighter',
  },
  exact: {
    fontSize: '12px',
    color: theme.palette.secondary.light,
    background: theme.palette.primary.dark,
    padding: '3px',
    width: '45%',
    margin: '0px auto',
  },
});

const Temp = props => {
  const { classes, mainTemp, exactTemp, symbol } = props;

  return (
    <div>
      <div className={classes.main}>
        {mainTemp}
        <span className={classes.symbol}>º{symbol}</span>
      </div>
      <Paper className={classes.exact}>{exactTemp}</Paper>
    </div>
  );
};

// Proptypes
Temp.propTypes = {
  classes: PropTypes.object.isRequired,
  mainTemp: PropTypes.string.isRequired,
  exactTemp: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  symbol: PropTypes.string.isRequired,
};

export default withStyles(styles)(Temp);
