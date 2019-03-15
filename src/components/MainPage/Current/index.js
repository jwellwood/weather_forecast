import React from 'react';
//   const dateDetails = new Date(currentWeather.dt * 1000);
//   const date = dateDetails.toLocaleDateString();
//   const time = dateDetails.toLocaleTimeString();
//
// const dates = ;
const CurrentWeather = props => {
  const { data } = props;
  console.log(data);
  const clouds = data.clouds.all;
  const unixTime = new Date(data.dt * 1000);

  const date = unixTime.toDateString();
  const time = unixTime.toLocaleTimeString().slice(0, 5);
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
  return (
    <div style={{ border: '1px solid black' }}>
      CURRENT WEATHER
      <div>Clouds: {clouds}%</div>
      <div>My Date: {date}</div>
      <div>My Time: {time}</div>
      <div>Vis: {visibility}km</div>
      <div>Pressure: {pressure}hPa</div>
      <div>temp: {temp}ºC</div>
      <div>Rounded: {roundedTemp}ºC</div>
      <div>temp: {fahrenheit}ºF</div>
      <div>Rounded: {roundedFahrenheit}ºF</div>
      <div>humid: {humidity}%</div>
      <div>wind: {windSpeed}kph</div>
      <div>wind Direction: {windDirection}º</div>
      <div>{description}</div>
      <div>
        <i
          className={`wi wi-owm-${weatherIcon}`}
          style={{ fontSize: '40px' }}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
