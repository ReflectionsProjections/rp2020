// import React from 'react';
// import Head from 'next/head';

// import Dashboard from '../components/Dashboard';
// import styles from './dashboard.scss';

// import { fetchConferenceData } from '../api/client';

// const DashboardPage = ({ events, sponsorImages }) => (
//   <div>
//     <Head>
//       <link
//         rel="stylesheet"
//         href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
//         integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
//         crossOrigin="anonymous"
//       />
//     </Head>
//     <div className={styles.dashboard}>
//       <Dashboard events={events} sponsorImages={sponsorImages} />
//     </div>
//   </div>
// );

// DashboardPage.getInitialProps = async () => {
//   const rpData = await fetchConferenceData();
//   const sponsorImages = [];
//   const { events, sponsors } = rpData;
//   Object.keys(sponsors).forEach(tier => {
//     if (Array.isArray(sponsors[tier])) {
//       sponsors[tier].map(sponsor => sponsorImages.push(sponsor.img));
//     } else {
//       sponsors[tier].divTier1.map(sponsor => sponsorImages.push(sponsor.img));
//       sponsors[tier].divTier2.map(sponsor => sponsorImages.push(sponsor.img));
//     }
//   });

//   return {
//     events: Object.values(events.byId),
//     sponsorImages
//   };
// };

// export default DashboardPage;
