import React from 'react';
import classes from './Description.module.css';

const Description = props => {
  const { description } = props;
  return (
    <div className={classes.Description}>
      <h3>
        <strong>{description}</strong>
      </h3>
    </div>
  );
};

export default Description;
