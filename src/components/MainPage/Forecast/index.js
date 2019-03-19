import React from 'react';
import { Button } from 'reactstrap';
import DateAndTime from '../Current/DateAndTime';
import Main from './Main';
import ExtraDetails from './ExtraDetails';

const Forecast = props => {
  const { data, getForecast } = props;
  return (
    <div>
      <Button onClick={getForecast}>Forecast</Button>
      {data.map(data => {
        const dateUnix = new Date(data.dt * 1000);
        const date = dateUnix.toDateString().slice(0, 10);
        const time = dateUnix.toLocaleTimeString().slice(0, 5);
        const clouds = data.clouds.all;
        const humidity = data.main.humidity;
        const pressure = data.main.pressure.toFixed(0);
        const temp = data.main.temp.toFixed(0);
        const fahrenheit = ((temp * 9) / 5 + 32).toFixed(0);
        const windSpeed = (data.wind.speed * 3.6).toFixed(1);
        const windDirection = data.wind.deg.toFixed(0);
        const description = data.weather[0].description;

        const iconCode = data.weather[0].icon;
        const iconId = data.weather[0].id;
        const weatherIcon = iconCode.includes('n')
          ? `wi wi-owm-night-${iconId}`
          : `wi wi-owm-${iconId}`;

        const mainDetails = {
          weatherIcon,
          description,
          temp,
          fahrenheit,
        };

        const extraDetails = {
          clouds,
          humidity,
          pressure,
          windSpeed,
          windDirection,
        };
        return (
          <div key={data.dt} style={{ border: '1px solid black' }}>
            <DateAndTime date={date} time={time} />
            <Main details={mainDetails} />
            <ExtraDetails details={extraDetails} />
          </div>
        );
      })}
    </div>
  );
};

Forecast.propTypes = {};

export default Forecast;
