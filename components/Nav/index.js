import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

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
          <a
            href="https://www.facebook.com/acmrp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://www.instagram.com/uiuc_rp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/uiuc_rp?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>

        <a
          className={`nav-item ${styles.btnRegister}`}
          href="https://acmrp.typeform.com/to/a05uAe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>
            <div className={styles.btnRegisterText}>Get Updates</div>
          </Button>
        </a>
      </div>
    </Navbar.Collapse>
  </Navbar>
);

export default Nav;
