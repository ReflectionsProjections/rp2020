import React from 'react';

import Button from 'react-bootstrap/Button';

import styles from './NavButton.scss';

const NavButton = () => (
  <a
    className={styles.a}
    href="https://acmrp.typeform.com/to/a05uAe"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className={styles.btn}>
      <div className={`align-self-middle ${styles.btnRegisterText}`}>
        Get Updates
      </div>
    </Button>
  </a>
);
export default NavButton;
