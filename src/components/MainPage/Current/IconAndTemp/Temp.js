import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './IconAndTemp.module.css';

const Temp = props => {
  const { celcius, fahrenheit, roundedCel, roundedFah } = props;
  return (
    <Container className={classes.TempBox}>
      <Row className={classes.MainTemp}>
        <Col>
          <div>
            {roundedCel}
            <span className={classes.TempSymbol}>ºC</span>
          </div>
          <div className={classes.ExactTemp}>{celcius}</div>
        </Col>
        <Col>
          <div>
            {roundedFah}
            <span className={classes.TempSymbol}>ºF</span>
          </div>
          <div className={classes.ExactTemp}>{fahrenheit}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Temp;
