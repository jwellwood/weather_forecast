import React from 'react';

const Temp = props => {
  const { mainTemp, exactTemp, symbol } = props;

  return (
    <div>
      <div>
        {mainTemp}
        <span>º{symbol}</span>
      </div>
      <div>{exactTemp}</div>
    </div>
  );
};

export default Temp;
