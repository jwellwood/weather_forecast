import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    background: theme.palette.primary.light,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

const DetailsList = props => {
  const { classes, details } = props;
  const createItem = (icon, text, value, tag) => {
    return { icon, text, value, tag };
  };

  const listItems = [
    createItem(
      <i className={details.weatherIcon} />,
      details.description,
      '',
      '',
    ),
    createItem(<i className="" />, 'Clouds', details.clouds, '%'),
    createItem(<i className="" />, 'Humidity', details.humidity, '%'),
    createItem(<i className="" />, 'Pressure', details.pressure, 'hPa'),
    createItem(<i className="" />, 'Wind Speed', details.windSpeed, 'kph'),
    createItem(
      <i className="" />,
      'Wind Direction',
      details.windDirection,
      'º',
    ),
  ];

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <List dense className={classes.root}>
          {listItems.map(item => (
            <ListItem key={Math.random()}>
              <ListItemAvatar>
                <Avatar>{item.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.text} />
              <ListItemSecondaryAction>
                {item.value}
                {item.tag}
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

DetailsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsList);
