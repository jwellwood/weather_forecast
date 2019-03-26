import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { iconColor } from '../../../../assets/styles/iconColor';

const styles = theme => ({
  icon: {
    margin: '10px auto',
    fontSize: '35px',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    lineHeight: '75px',
    background: 'rgba(10,10,10,0.3)',
  },
});
const Icon = props => {
  const { classes, icon, mainDesc } = props;

  return (
    <div>
      <div className={classes.icon}>
        <i
          className={`wi wi-owm-${icon}`}
          style={{
            color: iconColor(mainDesc),
          }}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(Icon);
