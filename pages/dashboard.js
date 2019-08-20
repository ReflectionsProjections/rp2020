import React, { useState, useEffect } from 'react';

import Layout from '../components/Util/Layout';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

const DashboardPage = ({ events }) => <Dashboard />;

// DashboardPage.getInitialProps = async () => {
//   const rpData = await fetchConferenceData();

//   return {
//     events: rpData.timelineSection.events
//   };
// };

export default DashboardPage;
