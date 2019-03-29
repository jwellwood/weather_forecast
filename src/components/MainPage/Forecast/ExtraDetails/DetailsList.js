import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles/index';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// Components
import Container from '../../../hoc/Container';
// Helpers
import windDir from '../../../../helpers/windDirection';

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
    data('Wind Direction', windDir(windDirection), `${windDirection}º`),
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

// Proptypes
DetailsList.propTypes = {
  classes: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsList);
