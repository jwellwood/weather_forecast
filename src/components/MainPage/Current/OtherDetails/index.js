import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '../../../hoc/Container';

const styles = theme => ({
  icon: {
    color: theme.palette.secondary.main,
    marginRight: theme.spacing.unit,
    width: '40px',
  },
  text: {
    textTransform: 'uppercase',
    fontSize: '12px',
    margin: theme.spacing.unit,
  },
  value: {
    fontSize: '15px',
    color: theme.palette.secondary.light,
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: '12px',
    color: theme.palette.secondary.dark,
    margin: '0 auto',
    width: '30px',
  },
});

const OtherDetails = props => {
  const { classes, details } = props;
  const {
    clouds,
    visibility,
    pressure,
    humidity,
    windSpeed,
    windDirection,
  } = details;

  const data = (icon, text, value, tag) => {
    return { icon, text, value, tag };
  };

  const listItems = [
    data('wi wi-cloudy', 'Clouds', clouds, '%'),
    data('far fa-eye', 'Visibility', visibility, 'km'),
    data('wi wi-barometer', 'Pressure', pressure, 'hPa'),
    data('wi wi-humidity', 'Humidity', humidity, '%'),
    data('wi wi-small-craft-advisory', ' Wind Speed', windSpeed, 'kph'),
    data('wi wi-wind-direction', 'Wind Direction', windDirection, 'º'),
  ];

  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          {listItems.map(item => (
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              key={Math.random()}
            >
              <div>
                <i className={item.icon + ' ' + classes.icon} />{' '}
                <span className={classes.text}>{item.text}</span>
              </div>
              <div className={classes.value}>
                {item.value !== undefined &&
                item.value !== 'NaN' &&
                item.value !== null
                  ? item.value
                  : '--'}
                <div className={classes.tag}>{item.tag}</div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(OtherDetails);
