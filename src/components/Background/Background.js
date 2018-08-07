import React from 'react';
import classes from './Background.module.css';

const Background = props => (
  <div className={classes.backgroundContainer}>
    <img
      alt=""
      src="https://images.unsplash.com/photo-1523194370211-ba028386e9ad?ixlib=rb-0.3.5&s=89bc37b06fca542e1af0ca9683a73a76&auto=format&fit=crop&w=1113&q=80"
      className={classes.backgroundImage}
    />
  </div>
);

export default Background;
