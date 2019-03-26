import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '../../../hoc/Container';

const styles = theme => ({
  text: {
    textTransform: 'uppercase',
    fontSize: '12px',
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
    // width: '20px',
  },
  desc: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px auto',
    textAlign: 'center',
    width: '100%',
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
  },
});

const DetailsList = props => {
  const { classes, details } = props;
  const {
    clouds,
    pressure,
    humidity,
    windSpeed,
    windDirection,
    description,
  } = details;

  const data = (text, value, tag) => {
    return { text, value, tag };
  };

  const listItems = [
    data('Clouds', clouds, '%'),
    data('Pressure', pressure, 'hPa'),
    data('Humidity', humidity, '%'),
    data(' Wind Speed', windSpeed, 'kph'),
    data('Wind Direction', windDirection, 'º'),
  ];

  return (
    <Container>
      <Paper className={classes.desc}>{description}</Paper>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {listItems.map(item => (
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            key={Math.random()}
          >
            <div className={classes.text}>{item.text}</div>
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
    </Container>
  );
};

export default withStyles(styles)(DetailsList);
