import React from 'react';

import Footer from '../components/Footer';
import Layout from '../components/Util/Layout';
import Nav from '../components/Nav';
import Timeline from '../components/Timeline';

import useGetStaticData from '../services/useGetStaticData';

const TimelinePage = () => {
  const { isLoaded, rpData, nav } = useGetStaticData();
  const events = rpData.timelineSection ? rpData.timelineSection.events : [];

  return (
    <Layout>
      {isLoaded && (
        <>
          <Nav format={nav.timeline} />
          <Timeline events={events} />
        </>
      )}
      <Footer />
    </Layout>
  );
};

export default TimelinePage;
