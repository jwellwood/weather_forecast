import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/index';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import AboutContent from './AboutContent';

const TitleAndActions = props => {
  const { classes, close } = props;
  return (
    <div>
      <DialogTitle>
        <div className={classes.title}>About</div>
      </DialogTitle>
      <AboutContent />
      <DialogActions>
        <Button variant="contained" onClick={close} color="secondary">
          Back
        </Button>
      </DialogActions>
    </div>
  );
};

TitleAndActions.propTypes = {
  classes: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default withStyles(styles)(TitleAndActions);
