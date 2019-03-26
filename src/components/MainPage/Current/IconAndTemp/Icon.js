import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
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
      <Grow
        in={icon ? true : false}
        timeout={{ enter: 2500, exit: 300 }}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.icon}>
          <i
            className={`wi wi-owm-${icon}`}
            style={{
              color: iconColor(mainDesc),
            }}
          />
        </div>
      </Grow>
    </div>
  );
};

export default withStyles(styles)(Icon);
