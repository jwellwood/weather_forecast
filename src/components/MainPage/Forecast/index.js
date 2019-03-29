import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import background from '../../../assets/styles/Background.module.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// Components
import Main from './Main';
import ForecastDate from './Date';

import Details from './ExtraDetails';
// Helpers
import monthFormat from '../../../helpers/DateFormat';

const Forecast = props => {
  const { classes, forecastData } = props;
  const data = forecastData;
  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map(item => {
          const systemDate = item.dt_txt;
          const year = systemDate.substring(0, 4);
          const monthNumber = systemDate.substring(5, 7);
          const month = monthFormat(monthNumber);
          const date = systemDate.substring(8, 10);
          const time = systemDate.substring(11, 16);
          const clouds = item.clouds.all;
          const humidity = item.main.humidity;
          const pressure = item.main.pressure.toFixed(0);
          const temp = item.main.temp.toFixed(0);
          const fahrenheit = ((temp * 9) / 5 + 32).toFixed(0);
          const windSpeed = (item.wind.speed * 3.6).toFixed(1);
          const windDirection = item.wind.deg.toFixed(0);
          const description = item.weather[0].description;
          const mainDesc = item.weather[0].main;

          const iconCode = item.weather[0].icon;
          const iconId = item.weather[0].id;
          const weatherIcon = iconCode.includes('n')
            ? `wi wi-owm-night-${iconId}`
            : `wi wi-owm-${iconId}`;
          let backgroundImage = background.Day;
          if (iconCode.includes('n')) {
            backgroundImage = background.Night;
          }
          const dateDetails = {
            year,
            month,
            date,
            time,
          };
          const mainDetails = {
            weatherIcon,
            description,
            temp,
            fahrenheit,
            mainDesc,
          };

          const extraDetails = {
            clouds,
            humidity,
            pressure,
            windSpeed,
            windDirection,
            description,
            weatherIcon,
          };

          return (
            <Grid item xs={2} key={item.dt}>
              <Details extraDetails={extraDetails} date={dateDetails}>
                <div className={backgroundImage}>
                  <ForecastDate date={dateDetails} />
                  <Main details={mainDetails} />
                </div>
              </Details>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

// Proptypes
Forecast.propTypes = {
  classes: PropTypes.object.isRequired,
  forecastData: PropTypes.array.isRequired,
};

export default withStyles(styles)(Forecast);
