import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Navbar from 'react-bootstrap/Navbar';
import styles from './NotifBanner.scss';

const NotifBanner = () => {

  useEffect(() => {
  });

  return (
    <>
    <div className={styles.bannerContainer}>
        <div className={styles.updateDate}>07/05 EVENT UPDATE</div>
        <div className={styles.notifContainer}>
            <br />
            <h6 className={styles.line1}>Reflections | Projections 2020 will make history as our first ever virtual conference.</h6>
            <h6 className={styles.line2}>Read more about our decision to go virtual below.</h6>
        </div>      
    </div>  
    </>
  );
};

export default NotifBanner;
