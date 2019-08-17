import React from 'react';

import Layout from '../components/Util/Layout';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

import rpData from '../static/data/rp2019.json';

const { events } = rpData.timelineSection;

const TimelinePage = () => (
  <Layout>
    <Timeline events={events} />
    <Footer />
  </Layout>
);

export default TimelinePage;
