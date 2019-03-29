import React from 'react';
import PropTypes from 'prop-types';
// Components
import ModalContent from './ModalContent';
import ModalWrapper from '../../../ui/Modal';

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
  extraDetails: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default DetailsModal;
