import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  date: {
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    fontSize: '10px',
  },
  time: {
    color: '#2ECC71',
    fontSize: '14px',
  },
});

const ForecastDate = props => {
  const { classes, date } = props;
  return (
    <div>
      <div className={classes.date}>
        {date.date} {date.month}
      </div>

      <div className={classes.time}> {date.time}</div>
    </div>
  );
};

// Proptypes
ForecastDate.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForecastDate);
