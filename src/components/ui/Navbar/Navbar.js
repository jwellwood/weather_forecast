import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../Logo/Logo';

class MainNavbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted style={{ borderRadius: '0px' }}>
        <Menu.Item
          name="logo"
          active={activeItem === 'logo'}
          onClick={this.handleItemClick}
        >
          <Logo />
        </Menu.Item>

        <Menu.Item
          position="right"
          name="about"
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          href="https://github.com/jwellwood/weather_forecast"
          name="link"
          active={activeItem === 'link'}
        >
          <i className="fab fa-github" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default MainNavbar;
