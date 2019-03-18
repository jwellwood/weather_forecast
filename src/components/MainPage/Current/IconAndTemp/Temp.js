import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './IconAndTemp.module.css';

const Temp = props => {
  const { celcius, fahrenheit, roundedCel, roundedFah } = props;
  return (
    <Container className={classes.TempBox}>
      <Row className={classes.MainTemp}>
        <Col>
          {roundedCel}
          <span className={classes.TempSymbol}>ºC</span>
        </Col>
        <Col>
          {roundedFah}
          <span className={classes.TempSymbol}>ºF</span>
        </Col>
      </Row>
      <Row className={classes.ExactTemp}>
        <Col>{celcius}</Col>
        <Col>{fahrenheit}</Col>
      </Row>
    </Container>
  );
};

export default Temp;
