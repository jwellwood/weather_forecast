import React, { Component } from 'react';
//Styles
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ModalWrapper from '../../ui/Modal';
import TitleAndActions from './components/TitleAndActions';

class About extends Component {
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
    return (
      <div>
        <IconButton color="secondary" onClick={this.handleClickOpen}>
          <HelpOutlineIcon />
        </IconButton>
        <ModalWrapper open={open} close={this.handleClose}>
          <TitleAndActions close={this.handleClose} />
        </ModalWrapper>
      </div>
    );
  }
}

export default About;
