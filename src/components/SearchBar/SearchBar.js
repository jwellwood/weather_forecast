import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Form } from 'reactstrap';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  const { getWeather, city, country } = props;
  let showCity = null;
  if (city) {
    showCity = (
      <div className={classes.SearchedCity}>
        {city} {country}
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <Form onSubmit={getWeather}>
            <input className={classes.Input} type="text" name="city" placeholder="e.g. Madrid" />
            <button className={classes.Button} type="submit">
              <i className="fas fa-search" />
            </button>
          </Form>
        </Col>
        <Row>
          <Col xs={12}>{showCity}</Col>
        </Row>
      </Row>
    </Container>
  );
};

SearchBar.propTypes = {
  getWeather: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default SearchBar;
