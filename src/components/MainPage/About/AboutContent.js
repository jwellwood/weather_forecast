import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    background: 'transparent',
    fontFamily: 'Didact Gothic',
  },
  list: {
    color: '#fff',
  },
  primary: {
    color: theme.palette.secondary.light,
    fontWeight: 'bold',
    fontFamily: 'Didact Gothic',
  },
  secondary: {
    color: theme.palette.secondary.dark,
    fontFamily: 'Didact Gothic',
  },
});

const listItem = (primary, secondary) => {
  return { primary, secondary };
};

const listItems = [
  listItem(
    'Dates',
    'The dates displayed are determined by the browser. This means that times outside of the browsers timezone need to be converted +/- number of hours difference.',
  ),
  listItem('Browser time', Date()),
  listItem(
    'Images',
    <div>
      <div>Background: chuttersnap on Unsplash</div>
      <div>Day: Ant Rozetsky on Unsplash</div>
      <div>Night: https://image.ibb.co/mjnygo/stars.png</div>
      <div>Icons: https://erikflowers.github.io/weather-icons/</div>
    </div>,
  ),
  listItem(
    'Code',
    <a
      style={{ textDecoration: 'none' }}
      href="https://github.com/jwellwood/weather_forecast"
    >
      jwellwood on Github{' '}
      <span>
        <i className="fab fa-github" />
      </span>
    </a>,
  ),
];

const AboutContent = props => {
  const { classes } = props;
  return (
    <div>
      <List dense className={classes.root}>
        {listItems.map(item => (
          <ListItem key={item.primary} className={classes.list}>
            <ListItemText
              classes={{
                primary: classes.primary,
                secondary: classes.secondary,
                textDense: 'true',
              }}
              secondaryTypographyProps={{ component: 'span' }}
              primary={item.primary}
              secondary={item.secondary}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

AboutContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutContent);
