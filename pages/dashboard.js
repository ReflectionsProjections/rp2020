import React, { useState, useEffect } from 'react';

import Layout from '../components/Util/Layout';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

import { fetchConferenceData } from '../api/client';

const DashboardPage = ({ sponsorImages }) => (
  <Dashboard sponsorImages={sponsorImages} />
);

DashboardPage.getInitialProps = async () => {
  const rpData = await fetchConferenceData();
  let sponsorImages = [];
  const sponsors = rpData.sponsors;
  Object.keys(sponsors).map(tier => {
    sponsors[tier].map(sponsor => sponsorImages.push(sponsor.img));
  });
  console.log(sponsorImages);

  return {
    sponsorImages
  };
};

export default DashboardPage;
