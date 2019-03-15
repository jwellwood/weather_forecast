import React from 'react';
import { Button } from 'reactstrap';

const Forecast = props => {
  const { data, getForecast } = props;
  return (
    <div>
      FORECAST
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
        const wind = (data.wind.speed * 3.6).toFixed(1);
        const windDirection = data.wind.deg.toFixed(0);
        const description = data.weather[0].description;
        const iconId = data.weather[0].id;
        const dayIcon = `wi wi-owm-${iconId}`;
        const nightIcon = `wi wi-owm-night-${iconId}`;
        return (
          <div key={data.dt} style={{ border: '1px solid black' }}>
            <div>{date}</div>
            <div>{time}</div>
            <div>Clouds: {clouds}%</div>
            <div>Humidity: {humidity}%</div>
            <div>Pressure: {pressure} hPa</div>
            <div>Temp: {temp}ºC</div>
            <div>Temp: {fahrenheit}ºF</div>
            <div>wind: {wind}kph</div>
            <div>wind Direction: {windDirection}º</div>
            <div>{description}</div>
            <div>
              <i
                className={data.sys.pod === 'n' ? nightIcon : dayIcon}
                style={{ fontSize: '40px' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

Forecast.propTypes = {};

export default Forecast;
