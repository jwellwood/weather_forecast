import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '../../../hoc/Container';

const styles = theme => ({});

const OtherDetails = props => {
  const { classes, details } = props;

  const data = (icon, value, tag) => {
    return { icon, value, tag };
  };

  const listItems = [
    data('wi wi-cloudy', details.clouds, '%'),
    data('far fa-eye', details.visibility, 'km'),
    data('wi wi-barometer', details.pressure, 'hPa'),
    data('wi wi-humidity', details.humidity, '%'),
    data('wi wi-small-craft-advisory', details.windSpeed, 'kph'),
    data('wi wi-wind-direction', details.windDirection, 'º'),
  ];

  return (
    <Container style={{ background: 'transparent', padding: '5px' }}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {listItems.map(item => (
          <Grid item key={Math.random()}>
            <div>
              <i className={item.icon + ' ' + classes.Icon} />
              <div className={classes.Value}>
                {item.value}
                <span className={classes.Tag}>{item.tag}</span>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(OtherDetails);
