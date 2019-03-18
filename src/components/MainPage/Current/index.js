import React from 'react';
import IconAndTemp from './IconAndTemp';
import DateAndTime from './DateAndTime';
import OtherDetails from './OtherDetails';

const Current = props => {
  const { data } = props;
  const clouds = data.clouds.all;
  const unixTime = new Date(data.dt * 1000);
  const date = unixTime.toDateString();
  const time = unixTime.toLocaleTimeString().slice(0, 5);

  const sunriseUnix = new Date(data.sys.sunrise * 1000);
  console.log(sunriseUnix);
  const sunsetUnix = new Date(data.sys.sunset * 1000);
  const sunrise = sunriseUnix.toLocaleTimeString().slice(0, 5);
  const sunset = sunsetUnix.toLocaleTimeString().slice(0, 5);

  const visibility = (data.visibility / 1000).toLocaleString();
  const temp = data.main.temp;
  const roundedTemp = data.main.temp.toFixed(0);
  const fahrenheit = ((temp * 9) / 5 + 32).toFixed(2);
  const roundedFahrenheit = ((temp * 9) / 5 + 32).toFixed(0);
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const windSpeed = (data.wind.speed * 3.6).toFixed(1);
  const windDirection = data.wind.deg;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconId = data.weather[0].id;
  const weatherIcon = iconCode.includes('n')
    ? `wi wi-owm-night-${iconId}`
    : `wi wi-owm-${iconId}`;

  const details = {
    date,
    time,
    sunrise,
    sunset,
    temp,
    roundedTemp,
    fahrenheit,
    roundedFahrenheit,
    weatherIcon,
    description,
    visibility,
    clouds,
    humidity,
    pressure,
    windSpeed,
    windDirection,
  };

  return (
    <div>
      <DateAndTime date={details.date} time={details.time} />
      <IconAndTemp
        details={details}
        sunrise={details.sunrise}
        sunset={details.sunset}
      />
      <OtherDetails details={details} />
    </div>
  );
};

export default Current;
