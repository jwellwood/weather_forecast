import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/index';
import Dialog from '@material-ui/core/Dialog';
// Animations
import { modalUp } from '../../../helpers/Transitions';

const ModalWrapper = props => {
  const { classes, children, open, close } = props;
  return (
    <Dialog
      open={open}
      fullWidth
      TransitionComponent={modalUp}
      keepMounted
      scroll="paper"
      onClose={close}
      PaperProps={{
        classes: {
          root: classes.paper,
        },
      }}
    >
      {children}
    </Dialog>
  );
};

// Proptypes
ModalWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default withStyles(styles)(ModalWrapper);
