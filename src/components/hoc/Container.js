import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  root: {
    background: 'rgba(0,0,0,0.5)',
    margin: '5px auto',
    padding: '0px 5px',
  },
});

const Container = props => {
  const { classes, children } = props;
  return <Paper className={classes.root}>{children}</Paper>;
};

// Proptypes
Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Container);
