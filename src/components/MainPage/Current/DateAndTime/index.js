import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '../../../hoc/Container';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    background: 'rgba(10, 10, 10, 0.5)',
    padding: '0px 5px',
    margin: '5px auto',
  },
  detailsBar: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.secondary.light,
  },
  time: {
    color: '#2ECC71',
    background: 'rgba(20,20,20, 0.5)',
    padding: '3px',
  },
  icons: {
    fontSize: '15px',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    lineHeight: '25px',
    textShadow: '1px 1px #222',
    margin: '0px auto',
  },
  sun: {
    fontSize: '12px',
  },
  sunrise: {
    color: '#f5af19',
  },
  sunset: {
    color: '#ff8819',
  },
});

const DateAndTime = props => {
  const { classes, date, time, sunrise, sunset } = props;
  return (
    <Container>
      <div className={classes.detailsBar}>
        <div>{date}</div>
        <Paper className={classes.time}>{time}</Paper>
      </div>
      {sunrise || sunset ? (
        <div className={classes.sun}>
          <span>{sunrise} </span>
          <i
            className={`wi wi-sunrise ${classes.icons} ${classes.sunrise}`}
          />{' '}
          <i className={`wi wi-sunset ${classes.icons} ${classes.sunset}`} />
          <span> {sunset}</span>
        </div>
      ) : null}
    </Container>
  );
};

export default withStyles(styles)(DateAndTime);
