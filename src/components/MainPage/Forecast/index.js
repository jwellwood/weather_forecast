import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Main from './Main';
import Date from './Date';
import monthFormat from '../../../helpers/DateFormat';
import background from '../../../assets/styles/Background.module.css';
import Details from './ExtraDetails';

const styles = theme => ({
  root: {
    background: 'rgba(10, 10, 10, 0.5)',
    margin: '10px auto',
    padding: '5px',
    marginBottom: '15vh',
  },
  card: {
    margin: '2px',
    background: 'transparent',
  },
});

const Forecast = props => {
  const { classes, data } = props;
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
            <Grid item xs={3} key={item.dt}>
              <Details extraDetails={extraDetails} date={dateDetails}>
                <div className={backgroundImage}>
                  <Date date={dateDetails} />
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

Forecast.propTypes = {};

export default withStyles(styles)(Forecast);
