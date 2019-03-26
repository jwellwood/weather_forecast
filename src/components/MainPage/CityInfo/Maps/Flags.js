import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import posed from 'react-pose';

const FlagAnim = posed.div({
  attention: {
    scale: 1.3,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 0,
    },
  },
});

const Flags = props => {
  const { code } = props;
  return (
    <FlagAnim>
      <ReactCountryFlag
        code={code}
        svg
        styleProps={{
          width: '40px',
          height: '40px',
        }}
      />
    </FlagAnim>
  );
};

export default Flags;
