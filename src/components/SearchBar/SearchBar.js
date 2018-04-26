import React from 'react';
import classes from './SearchBar.module.css';

const searchBar = (props) => {
  return (
    <div>
      <form>
        <input  className={classes.searchBar} type='text' placeholder='search city' onSubmit={props.submitted}/>
      </form>
    </div>
  )
}

export default searchBar;