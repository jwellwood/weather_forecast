import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// Components
import DetailsModal from './DetailsModal';

const styles = theme => ({
  card: {
    margin: '2px',
    background: 'transparent',
    cursor: 'pointer',
  },
});

class Details extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes, children, extraDetails, date } = this.props;
    return (
      <div>
        <Card className={classes.card} onClick={this.handleClickOpen}>
          {children}
        </Card>
        <DetailsModal
          extraDetails={extraDetails}
          date={date}
          open={open}
          close={this.handleClose}
        />
      </div>
    );
  }
}

// Proptypes
Details.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  extraDetails: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);
