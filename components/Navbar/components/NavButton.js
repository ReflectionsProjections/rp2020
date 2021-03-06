import React from 'react';
import Button from 'react-bootstrap/Button';

import styles from './NavButton.scss';

const NavButton = () => (
  <a
    className={styles.a}
    href="/register"
    rel="noopener noreferrer"
  >
    <Button className={styles.btn}>
      <div className={`align-self-middle ${styles.btnRegisterText}`}>
        Register
      </div>
    </Button> 
  </a>
);
export default NavButton;
