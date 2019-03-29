import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import AboutContent from './AboutContent';

const styles = theme => ({
  title: {
    color: theme.palette.secondary.light,
    fontFamily: 'Didact Gothic',
  },
});

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

export default withStyles(styles)(TitleAndActions);
