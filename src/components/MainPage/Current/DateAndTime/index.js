import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '../../../hoc/Container';

const styles = () => ({
  root: {
    background: 'rgba(10, 10, 10, 0.5)',
    padding: '0px 5px',
    margin: '5px auto',
  },
  detailsBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  time: {
    color: '#2ECC71',
  },
  icons: {
    fontSize: '15px',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    lineHeight: '25px',
    textShadow: '1px 1px #222',
    margin: '5px auto',
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
        <div className={classes.time}>{time}</div>
      </div>
      {sunrise || sunset ? (
        <div>
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
