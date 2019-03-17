import React from 'react';
import ReactCountryFlag from 'react-country-flag';
const Flags = props => {
  const { code } = props;
  return (
    <ReactCountryFlag
      code={code}
      svg
      styleProps={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        backgroundColor: '#fff',
      }}
    />
  );
};

export default Flags;
