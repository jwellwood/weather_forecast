import React from 'react';
import classes from './Icon.module.css';

const Icon = props => {
  const { icon, desc } = props;
  return (
    <div>
      <div className={classes.Icon}>
        <i className={`wi wi-owm-${icon}`} />
      </div>
      <div className={classes.Desc}>{desc}</div>
    </div>
  );
};

export default Icon;
