import React from 'react';
import classes from './Message.module.css';

const Message = props => {
  return (
    <div className={classes.Message}>
      <p>Type a city to search</p>
    </div>
  );
};

export default Message;
