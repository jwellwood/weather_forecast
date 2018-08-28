import React from 'react';
import PropTypes from 'prop-types';
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

Description.propTypes = { description: PropTypes.string.isRequired };

export default Description;
