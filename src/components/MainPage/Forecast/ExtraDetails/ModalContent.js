import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Components
import DetailsList from './DetailsList';

const ModalContent = props => {
  const { classes, date, extraDetails, close } = props;
  return (
    <div>
      <DialogTitle>
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
    </div>
  );
};

ModalContent.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  extraDetails: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};

export default withStyles(styles)(ModalContent);
