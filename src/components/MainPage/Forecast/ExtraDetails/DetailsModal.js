import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Animations
import Slide from '@material-ui/core/Slide';
// Components
import Container from '../../../hoc/Container';
import DetailsList from './DetailsList';

function Transition(props) {
  return (
    <Slide
      direction="up"
      {...props}
      timeout={{
        enter: 1000,
        exit: 600,
      }}
    />
  );
}

const styles = theme => ({
  title: {
    color: theme.palette.secondary.light,
  },
  time: {
    color: '#2ECC71',
  },
  paper: {
    backgroundColor: 'rgba(0,0,0, 0.85)',
    boxShadow: 'none',
    overflow: 'hidden',
    border: '2px solid',
    borderColor: theme.palette.secondary.dark,
  },
});

const DetailsModal = props => {
  const { classes, extraDetails, date, open, close } = props;
  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        fullWidth
        maxWidth="xl"
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          classes: {
            root: classes.paper,
          },
        }}
      >
        <Container>
          <DialogTitle id="alert-dialog-slide-title">
            <Grid container direction="row" justify="space-between">
              <div className={classes.title}>
                {date.date} {date.month} {date.year}
              </div>
              <div className={classes.time}>{date.time}</div>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <DetailsList details={extraDetails} />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={close} color="secondary">
              Back
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
};

// Proptypes
DetailsModal.propTypes = {
  classes: PropTypes.object.isRequired,
  extraDetails: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default withStyles(styles)(DetailsModal);
