import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => {
  return (
    <div>
      <div className={classes.Loader} />
    </div>
  );
};

export default Spinner;
