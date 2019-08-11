import React from 'react';
import axios from 'axios';

import Layout from '../components/Util/Layout';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const TimelinePage = ({ timelineSection: { events } }) => (
  <Layout>
    <Timeline events={events} />
    <Footer />
  </Layout>
);

TimelinePage.getInitialProps = async ({ req }) => {
  if (req) {
    const prefix =
      process.env.NODE_ENV === 'production'
        ? 'http://acmrp.org'
        : 'http://localhost:3000';
    const res = await axios.get(`${prefix}/static/data/rp2019.json`);
    return res.data;
  }
  return {};
};

export default TimelinePage;
