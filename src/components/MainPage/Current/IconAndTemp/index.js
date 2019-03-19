import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Display from './Display';
import classes from './IconAndTemp.module.css';
import background from '../../../../assets/styles/Background.module.css';

const IconAndTemp = props => {
  const { details } = props;
  let backgroundImage = background.Day;
  if (details.weatherIcon.includes('night')) {
    backgroundImage = background.Night;
  }
  return (
    <Container>
      <Row className={classes.Container + ' ' + backgroundImage}>
        <Col>
          <Display
            icon={details.weatherIcon}
            desc={details.description}
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
