import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import ForecastBar from '../ForecastBar/ForecastBar';
import classes from './Forecast.module.css';

class WeatherModal extends Component {
  state = { modal: false };

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  render() {
    const { modal } = this.state;
    const { forecast } = this.props;

    return (
      <div>
        <Button block color="info" onClick={this.toggle}>
          View 24-hour forecast
        </Button>
        <Modal isOpen={modal} toggle={this.toggle} className={classes.Modal}>
          <ModalBody>
            <ForecastBar forecast={forecast} />
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.toggle}>
              Go back
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

WeatherModal.propTypes = { forecast: PropTypes.array.isRequired };

export default WeatherModal;
