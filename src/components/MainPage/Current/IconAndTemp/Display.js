import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './IconAndTemp.module.css';
import Icon from './Icon';

const Display = props => {
  const { celcius, fahrenheit, roundedCel, roundedFah, icon, desc } = props;
  return (
    <Container className={classes.MainBox}>
      <Row className={classes.MainTemp}>
        <Col>
          <div>
            {roundedCel}
            <span className={classes.TempSymbol}>ºC</span>
          </div>
          <div className={classes.ExactTemp}>{celcius}</div>
        </Col>
        <Col>
          <Icon icon={icon} desc={desc} />
        </Col>
        <Col>
          <div>
            {roundedFah}
            <span className={classes.TempSymbol}>ºF</span>
          </div>
          <div className={classes.ExactTemp}>{fahrenheit}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={classes.Desc}>{desc}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Display;
