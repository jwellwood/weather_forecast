import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core';
import { styles } from './styles/index';

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
