import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Dashboard from '../components/Dashboard';
import styles from './dashboard.scss';

import { fetchConferenceData, fetchEventsData } from '../api/client';

const DashboardPage = ({ events, sponsorImages }) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
    </Head>
    <div className={styles.videoContainer}>
      <video autoPlay muted loop id="video-background">
        <source src="../static/assets/dashboard_background.mp4" type="video/mp4" />
      </video>
      <Dashboard events={events} sponsorImages={sponsorImages} />
    </div>
  </div>
);

DashboardPage.getInitialProps = async () => {
  const rpData = await fetchConferenceData();
  const events = await fetchEventsData();
  let sponsorImages = [];
  const sponsors = rpData.sponsors;
  Object.keys(sponsors).map(tier => {
    sponsors[tier].map(sponsor => sponsorImages.push(sponsor.img));
  });

  return {
    events: events.events,
    sponsorImages
  };
};

export default DashboardPage;
