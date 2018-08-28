import React from 'react';
import PropTypes from 'prop-types';

import classes from './SearchBar.module.css';

const SearchBar = props => {
  const { getWeather, city, country } = props;
  return (
    <div className={classes.SearchContainer}>
      <div className={classes.SearchBar}>
        <form onSubmit={getWeather}>
          <input className={classes.Input} type="text" name="city" placeholder="search city" />
          <button className={classes.Button} type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>

      <div className={classes.SearchedCity}>
        <span className={classes.cityCountry}>
          {city} {country}
        </span>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  getWeather: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default SearchBar;
