import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Navbar from 'react-bootstrap/Navbar';

import NavButton from './components/NavButton';
import NavSocialMediaIcon from './components/NavSocialMediaIcon';

import styles from './Nav.scss';

const Nav = () => (
  <Navbar className={classNames(styles.navbar, styles.bgBlue)}>
    <Navbar.Brand className={styles.leftNav}>
      <Link href="/">
        <img
          alt="Reflections Projections 2019 Logo"
          className={styles.navbarLogo}
          src="/static/assets/2019logo.svg"
        />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <div className={styles.rightNav}>
        <div className={styles.navSocialMediaIcons}>
          <NavSocialMediaIcon
            link="https://www.facebook.com/acmrp/"
            icon="fa-facebook-f"
          />
          <NavSocialMediaIcon
            link="https://www.instagram.com/uiuc_rp/"
            icon="fa-instagram"
          />
          <NavSocialMediaIcon
            link="https://twitter.com/uiuc_rp?lang=en"
            icon="fa-twitter"
          />
        </div>
        <NavButton />
      </div>
    </Navbar.Collapse>
  </Navbar>
);

export default Nav;
