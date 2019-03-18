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
          <i className="wi wi-sunrise" id="sunrise" /> {sunrise}
          <i className="wi wi-sunset" id="sunset" />
          {sunset}
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
