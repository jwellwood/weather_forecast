import React from 'react';
import PropTypes from 'prop-types';
// Styles
import Grid from '@material-ui/core/Grid';

const PageContainer = props => {
  const { children } = props;
  return (
    <Grid container alignContent="center" style={{ padding: '2px' }}>
      <Grid
        item
        style={{ textAlign: 'center', margin: 'auto', padding: 0 }}
        xs={12}
        sm={12}
        m={10}
        lg={6}
      >
        {children}
      </Grid>
    </Grid>
  );
};

// PropTypes
PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
