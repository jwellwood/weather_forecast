import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import classes from './MainDetails.module.css';

const MainDetails = props => {
  const { temp, icon, description } = props;
  return (
    <div className={classes.Main}>
      <Container>
        <Row>
          <Col xs="6" sm="4">
            <h1>
              {temp}º<span className={classes.Degrees}>C</span>
            </h1>
          </Col>
          <Col xs="6" sm="4">
            <i className={`wi wi-owm-${icon}`} style={{ fontSize: '40px' }} />

            {/* <img
              className={classes.MainIcon}
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt="icon"
            /> */}
          </Col>
          <Col sm="4">
            {' '}
            <h3>
              <strong>{description}</strong>
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

MainDetails.propTypes = {
  temp: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MainDetails;
