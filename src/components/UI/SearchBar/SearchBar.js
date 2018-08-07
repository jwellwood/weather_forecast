import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = props => {
  const { getWeather } = props;
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
          {props.city} {props.country}
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
