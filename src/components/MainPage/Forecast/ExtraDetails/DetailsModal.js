import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DetailsList from './DetailsList';
import Container from '../../../hoc/Container';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const DetailsModal = props => {
  const { extraDetails, date, open, close } = props;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Container>
          <DialogTitle id="alert-dialog-slide-title">
            {date.date} {date.month} {date.year}
          </DialogTitle>
          <DialogContent>
            <DetailsList details={extraDetails} />
          </DialogContent>
          <DialogActions>
            <Button onClick={close} color="primary">
              Back
            </Button>
          </DialogActions>
        </Container>
      </Dialog>
    </div>
  );
};

export default DetailsModal;
