import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from '../Logo/Logo';
import classes from './Navbar.module.css';

export default class Example extends React.Component {
  state = { collapsed: true };

  toggleNavbar = () => {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Navbar className={classes.Navbar}>
          <NavbarBrand href="/" className="mr-auto">
            <Logo />
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className={classes.Navlink}
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
