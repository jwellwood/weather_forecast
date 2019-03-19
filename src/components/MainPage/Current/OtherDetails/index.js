import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './OtherDetails.module.css';

const OtherDetails = props => {
  const { details } = props;

  const data = (icon, value, tag) => {
    return { icon, value, tag };
  };

  const listItems = [
    data('wi wi-cloudy', details.clouds, '%'),
    data('far fa-eye', details.visibility, 'km'),
    data('wi wi-barometer', details.pressure, 'hPa'),
    data('wi wi-humidity', details.humidity, '%'),
    data('wi wi-small-craft-advisory', details.windSpeed, 'kph'),
    data('wi wi-wind-direction', details.windDirection, 'º'),
  ];

  return (
    <Container>
      <Row className={classes.Container}>
        {listItems.map(item => (
          <Col key={Math.random()}>
            <div>
              <i className={item.icon + ' ' + classes.Icon} />
              <div className={classes.Value}>
                {item.value}
                <span className={classes.Tag}>{item.tag}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OtherDetails;
