import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
// Components
import ModalContent from './ModalContent';
import ModalWrapper from '../../../ui/Modal';

const styles = theme => ({
  paper: {
    backgroundColor: 'rgba(0,0,0, 0.95)',
    boxShadow: 'none',
    overflow: 'hidden',
    border: '2px solid',
    borderColor: theme.palette.secondary.dark,
  },
});

const DetailsModal = props => {
  const { classes, open, close, ...other } = props;
  return (
    <ModalWrapper open={open} close={close}>
      <ModalContent {...other} close={close} />
    </ModalWrapper>
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
