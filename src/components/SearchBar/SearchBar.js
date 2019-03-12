import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  const { getWeather, city, country } = props;
  let showCity = null;
  if (city) {
    showCity = (
      <div className={classes.SearchedCity}>
        {city}, {country}
      </div>
    );
  }
  return (
    <Form onSubmit={getWeather}>
      <Input
        name="city"
        action={{ icon: 'search', color: 'teal' }}
        placeholder="Search..."
      />
      {showCity}
    </Form>
  );
};

SearchBar.propTypes = {
  getWeather: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default SearchBar;
