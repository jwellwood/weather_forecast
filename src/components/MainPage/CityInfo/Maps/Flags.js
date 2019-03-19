import React from 'react';
import ReactCountryFlag from 'react-country-flag';
const Flags = props => {
  const { code } = props;
  return (
    <ReactCountryFlag
      code={code}
      svg
      styleProps={{
        width: '40px',
        height: '40px',
      }}
    />
  );
};

export default Flags;
