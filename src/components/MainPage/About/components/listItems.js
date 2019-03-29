import React from 'react';

const listItem = (primary, secondary) => {
  return { primary, secondary };
};

export const listItems = [
  listItem(
    'Dates',
    'The dates displayed are determined by the browser. This means that if you search for "London", but you are currently in Paris, you will need to adjust the time shown by -1 hour, etc.',
  ),
  listItem('Browser time', Date()),
  listItem(
    'Images',
    <div>
      <div>
        Background: <span>chuttersnap on Unsplash</span>
      </div>
      <div>Day: Ant Rozetsky on Unsplash</div>
      <div>Night: https://image.ibb.co/mjnygo/stars.png</div>
      <div>Icons: https://erikflowers.github.io/weather-icons/</div>
    </div>,
  ),
  listItem(
    'Code',
    <a
      style={{ textDecoration: 'none' }}
      href="https://github.com/jwellwood/weather_forecast"
    >
      jwellwood on Github{' '}
      <span>
        <i className="fab fa-github" />
      </span>
    </a>,
  ),
];
