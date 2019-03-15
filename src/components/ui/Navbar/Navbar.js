import React from 'react';
import { Navbar, NavItem, NavbarBrand, Nav } from 'reactstrap';
import Logo from './Logo/Logo';

const MainNavbar = props => {
  const {} = props;

  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <Nav>
        <NavItem>About</NavItem>
        <NavItem>
          <i className="fab fa-github" />
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default MainNavbar;
