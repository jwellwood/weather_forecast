import React from 'react';

const Icon = props => {
  const { id, icon, placement, value, text } = props;
  return (
    <div>
      <i className={`wi wi-${icon}`} id={id} />
      {value}
      <UncontrolledTooltip placement={placement} target={id}>
        {text}
      </UncontrolledTooltip>
    </div>
  );
};

export default Icon;
