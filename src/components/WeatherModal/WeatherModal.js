import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import ForecastBar from '../ForecastBar/ForecastBar';
import classes from './Modal.module.css';

class WeatherModal extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });

  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;
    const { city, country, forecast } = this.props;

    return (
      <div>
        <Button onClick={this.show('blurring')}>24-Hour forecast</Button>
        <Modal className={classes.Modal} dimmer={dimmer} open={open} onClose={this.close}>
          <ForecastBar forecast={forecast} />
        </Modal>
      </div>
    );
  }
}

export default WeatherModal;
