import React from 'react';
import PropTypes from 'prop-types';
// Packages
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

// Proptypes
Flags.propTypes = {
  code: PropTypes.string.isRequired,
};
export default Flags;
