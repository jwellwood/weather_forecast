import React from 'react';
import { Accordion, Label } from 'semantic-ui-react';
import ForecastBar from '../../ForecastWeather/ForecastBar/ForecastBar';

const ForecastDropdown = props => {
  const { forecast } = props;
  const panels = [
    {
      key: 'forecast',
      title: {
        content: <Label color="teal" content={'Show 24-hour forecast'} />,
      },
      content: [<ForecastBar forecast={forecast} />],
    },
  ];
  return <Accordion panels={panels} />;
};

export default ForecastDropdown;
