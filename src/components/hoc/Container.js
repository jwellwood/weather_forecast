import React from 'react';
import PropTypes from 'prop-types';

const Container = props => {
  const { children } = props;
  return <div>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
