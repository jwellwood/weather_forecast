import React from 'react';
import Fab from '@material-ui/core/Fab';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import BarChartIcon from '@material-ui/icons/BarChart';

const DetailsToggler = props => {
  const { toggleDetails, showDetails } = props;
  return (
    <Fab
      color="primary"
      aria-label="Add"
      size="small"
      // className={classes.fab}
      onClick={toggleDetails}
    >
      {showDetails ? (
        <CloudQueueIcon color="secondary" />
      ) : (
        <BarChartIcon color="secondary" />
      )}
    </Fab>
  );
};

export default DetailsToggler;
