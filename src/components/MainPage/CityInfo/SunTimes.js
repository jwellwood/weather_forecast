import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

const SunTimes = props => {
  const { details } = props;
  return (
    <div>
      <div>
        <i className="wi wi-sunrise" id="sunrise" />
        {details.sunrise}
        <UncontrolledTooltip placement="bottom" target="sunrise">
          sunrise
        </UncontrolledTooltip>
      </div>
      <div>
        <i className="wi wi-sunset" id="sunset" />
        {details.sunset}
        <UncontrolledTooltip placement="bottom" target="sunset">
          sunset
        </UncontrolledTooltip>
      </div>
    </div>
  );
};

export default SunTimes;
