import React, { Component } from 'react';
import posed from 'react-pose';

const Box = posed.div({
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
});

class Landing extends Component {
  state = { isVisible: false };

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: true });
    }, 1000);
  }
  render() {
    return (
      <Box pose={this.state.isVisible ? 'visible' : 'hidden'}>
        <div>Landing</div>
      </Box>
    );
  }
}

export default Landing;
