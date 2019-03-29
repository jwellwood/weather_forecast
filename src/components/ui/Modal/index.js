import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
// Animations
import { modalUp } from '../../../helpers/Transitions';

const styles = theme => ({
  paper: {
    backgroundColor: 'rgba(0,0,0, 0.85)',
    boxShadow: 'none',
    // overflow: 'hidden',
    border: '2px solid',
    borderColor: theme.palette.secondary.dark,
  },
});

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
