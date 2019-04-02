import React from 'react';
import './Nav.scss';

const Nav = () => (
  <nav className="navbar bg-blue" id="rp-nav">
    <div className="left-nav">
      <a href="/">
        <img
          alt="Reflections Projections 2019 Logo"
          className="navbar-logo"
          src="/static/assets/2019logo.svg"
        />
      </a>
    </div>
    <div className="right-nav">
      <div className="social-media-icons">
        <a href="https://www.facebook.com/acmrp/">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://www.instagram.com/uiuc_rp/">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://twitter.com/uiuc_rp?lang=en">
          <i className="fab fa-twitter" />
        </a>
      </div>

      <a
        className="btn nav-item"
        id="btn-register"
        href="https://acmrp.typeform.com/to/a05uAe"
      >
        <div id="btn-register-text">Get Updates</div>
      </a>
    </div>
  </nav>
);

export default Nav;
