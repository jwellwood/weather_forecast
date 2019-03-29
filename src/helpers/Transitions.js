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

export const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 80,
  },
};
