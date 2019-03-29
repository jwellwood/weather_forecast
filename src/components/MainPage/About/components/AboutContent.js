import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../styles/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// Data
import { listItems } from './listItems';

const AboutContent = props => {
  const { classes } = props;
  return (
    <div>
      <List dense className={classes.root}>
        {listItems.map(item => (
          <ListItem key={item.primary}>
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
