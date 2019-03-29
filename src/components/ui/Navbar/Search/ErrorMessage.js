import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

const ErrorMessage = props => {
  const { classes, error, onReset } = props;

  return (
    <div style={{ zIndex: 500 }}>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={error}
        autoHideDuration={6000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={
          <span
            id="message-id"
            style={{ color: '#FF5722', fontWeight: 'bold' }}
          >
            No city found
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onReset}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
};

// Proptypes
ErrorMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  error: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default withStyles(styles)(ErrorMessage);
