import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const index = props => {
  const { details } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <i className={details.weatherIcon} />
          </Col>
          <Col>{details.description}</Col>
          <Col>
            {details.temp}ºC, {details.fahrenheit}ºF
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default index;
