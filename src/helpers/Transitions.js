import React from 'react';
import Slide from '@material-ui/core/Slide';

export const modalUp = props => (
  <Slide
    direction="up"
    {...props}
    timeout={{
      enter: 700,
      exit: 300,
    }}
  />
);
