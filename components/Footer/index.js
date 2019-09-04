import React from 'react';

import styles from './styles.scss';

const Footer = () => (
  <footer>
    <div
      className={`text-white text-center animated fadeIn ${styles.footerText}`}
    >
      <p className={styles.organized}>
        Organized by{' '}
        <a className={styles.link} href="https://acm.illinois.edu/">
          ACM@UIUC
        </a>
      </p>
      <p className={styles.contact}>
        Questions? Interested in sponsoring? Email us at{' '}
        <a
          className={styles.link}
          href="mailto:contact@reflectionsprojections.org"
        >
          contact@reflectionsprojections.org
        </a>
      </p>
    </div>
  </footer>
);
export default Footer;
