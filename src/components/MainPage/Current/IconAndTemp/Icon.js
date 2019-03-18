import React from 'react';

const Icon = props => {
  const { icon, desc } = props;
  return (
    <div>
      <div>{desc}</div>
      <div>
        <i className={`wi wi-owm-${icon}`} style={{ fontSize: '40px' }} />
      </div>
    </div>
  );
};

export default Icon;
