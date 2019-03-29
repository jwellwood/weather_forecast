import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  title: {
    color: theme.palette.secondary.light,
  },
  text: {
    color: '#fff',
    fontSize: '12px',
  },
});

const AboutContent = props => {
  const { classes, close } = props;
  return (
    <div>
      <DialogTitle>
        <div className={classes.title}>About</div>
      </DialogTitle>
      <DialogContent className={classes.text}>
        <div>
          APIs
          <div>Weather: Open Weather Map</div>
          <div>Map: Google Maps</div>
        </div>
        <hr />
        <div>
          Dates and times:
          <div>All times are browser times</div>
        </div>
        <hr />
        <div>
          Picture credits:
          <div>Background: chuttersnap on Unsplash</div>
          <div>Day: Ant Rozetsky on Unsplash</div>
          <div>Night: Unknown source</div>
        </div>
        <hr />
        <div>Weather Icons: https://erikflowers.github.io/weather-icons/</div>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={close} color="secondary">
          Back
        </Button>
      </DialogActions>
    </div>
  );
};

export default withStyles(styles)(AboutContent);
