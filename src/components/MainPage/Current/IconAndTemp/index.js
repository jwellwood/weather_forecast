import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Icon from './Icon';
import Temp from './Temp';
import classes from './IconAndTemp.module.css';

const IconAndTemp = props => {
  const { details, sunset, sunrise } = props;
  return (
    <Container>
      <Row className={classes.Container}>
        <Col>
          <Icon icon={details.weatherIcon} desc={details.description} />
        </Col>
        <Col>
          <Temp
            celcius={details.temp}
            roundedCel={details.roundedTemp}
            fahrenheit={details.fahrenheit}
            roundedFah={details.roundedFahrenheit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default IconAndTemp;
