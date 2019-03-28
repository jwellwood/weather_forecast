import React from 'react';
import PropTypes from 'prop-types';
// Components
import IconAndTemp from './IconAndTemp';
import DateAndTime from './DateAndTime';
// Helpers
import windDir from '../../../helpers/windDirection';
import Grow from '@material-ui/core/Grow';

const Current = props => {
  const {
    data,
    showDetails,
    toggleDetails,
    showForecast,
    toggleForecast,
    forecastData,
    getForecast,
  } = props;
  // DATES
  const unixTime = new Date(data.dt * 1000);
  const date = unixTime.toDateString();
  const time = unixTime.toLocaleTimeString().slice(0, 5);
  const sunriseUnix = new Date(data.sys.sunrise * 1000);
  const sunsetUnix = new Date(data.sys.sunset * 1000);
  const sunrise = sunriseUnix.toLocaleTimeString().slice(0, 5);
  const sunset = sunsetUnix.toLocaleTimeString().slice(0, 5);
  // TEMP
  const dataTemp = data.main.temp;
  const temp = dataTemp ? dataTemp : null;
  const roundedTemp = dataTemp ? dataTemp.toFixed(0) : null;
  const fahrenheit = ((temp * 9) / 5 + 32).toFixed(2);
  const roundedFahrenheit = ((temp * 9) / 5 + 32).toFixed(0);
  // ICON
  const dataWeather = data.weather[0];
  const description = dataWeather ? dataWeather.description : null;
  const mainDesc = dataWeather ? dataWeather.main : null;
  const iconCode = dataWeather ? dataWeather.icon : null;
  const iconId = dataWeather ? dataWeather.id : null;
  const weatherIcon = iconCode.includes('n')
    ? `wi wi-owm-night-${iconId}`
    : `wi wi-owm-${iconId}`;
  // WIND
  const dataWind = data.wind;
  const windSpeed =
    dataWind.speed !== undefined ? (dataWind.speed * 3.6).toFixed(1) : null;
  const dir = dataWind.deg !== undefined ? dataWind.deg.toFixed(0) : null;
  const windDirection = windDir(dir);
  // OTHER
  const dataMain = data.main;
  const clouds = data.clouds.all !== undefined ? data.clouds.all : null;
  const visibility =
    data.visibility !== undefined
      ? (data.visibility / 1000).toLocaleString()
      : null;
  const humidity = dataMain.humidity !== undefined ? dataMain.humidity : null;
  const pressure = dataMain.pressure !== undefined ? dataMain.pressure : null;

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
    mainDesc,
    visibility,
    clouds,
    humidity,
    pressure,
    windSpeed,
    dir,
    windDirection,
  };

  return (
    <div>
      <DateAndTime
        date={details.date}
        time={details.time}
        sunrise={details.sunrise}
        sunset={details.sunset}
      />
      <IconAndTemp
        details={details}
        showDetails={showDetails}
        toggleDetails={toggleDetails}
        showForecast={showForecast}
        getForecast={getForecast}
        toggleForecast={toggleForecast}
        forecastData={forecastData}
      />
    </div>
  );
};

Current.propTypes = {
  data: PropTypes.object.isRequired,
  showDetails: PropTypes.bool.isRequired,
};

export default Current;
