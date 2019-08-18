import React from 'react';

import Layout from '../components/Util/Layout';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

import { fetchConferenceData } from '../api/client';

const TimelinePage = ({ events }) => (
  <Layout>
    <Timeline events={events} />
    <Footer />
  </Layout>
);

TimelinePage.getInitialProps = async () => {
  const rpData = await fetchConferenceData();

  return {
    events: rpData.timelineSection.events
  };
};

export default TimelinePage;
