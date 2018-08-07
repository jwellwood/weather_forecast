import React from 'react';
import classes from './Navbar.module.css';
import Logo from '../Logo/Logo';

const navbar = () => (
  <div className={classes.nav}>
    <nav>
      <div className={classes.navLogo}>
        <Logo />
      </div>
      <div>
        <a className={classes.navLink} href="/">
          About
        </a>
      </div>
    </nav>
  </div>
);

export default navbar;
