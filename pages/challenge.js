// import React from 'react';

// import Container from 'react-bootstrap/Container';

// import Footer from '../components/Footer';
// import Layout from '../UIComponents/Layout';
// import Nav from '../components/Nav';
// import Section from '../UIComponents/Section';

// import useGetStaticData from '../services/useGetStaticData';

// const ChallengePage = () => {
//   const { isLoaded, nav } = useGetStaticData();

//   return (
//     <Layout>
//       {isLoaded && (
//         <>
//           <Nav format={nav.challenge} />
//           <div style={{ paddingTop: '6em' }}>
//             <Section>
//               <Section.Title>Social Media Challenge</Section.Title>
//               <Section.Subtitle>
//                 Reflections | Projections Giveaway
//               </Section.Subtitle>
//               <Section.Body>
//                 <Container>
//                   <h2>Overview</h2>
//                   <p>
//                     The Social Media Challenge is a Reflections | Projections
//                     raffle giveaway aimed at increasing event exposure.
//                     Participants can post a photo for each event attended to
//                     earn raffle entries. There is no limit to the amount of
//                     entries one may have, but note that raffle entries are
//                     associated with the social media account used to post the
//                     photo. Social media accounts must be set to public for the
//                     duration of the event in order to track entries.
//                   </p>
//                   <h2>Participation</h2>
//                   <p>
//                     Any R|P event attendee may participate in the Social Media
//                     Challenge by posting a picture of the activity/event
//                     attended on social media and using the hashtag #RPgiveaway
//                     to enter. Posting via Instagram, Twitter, and/or Facebook
//                     using appropriate hashtags constitutes giveaway entry. The
//                     event name should be mentioned as well in said post. Social
//                     media profiles must be public for the duration of the event
//                     in order to collect entry data.
//                   </p>
//                   <h2>Points</h2>
//                   <p>
//                     Each activity/event has an associated point value
//                     pre-determined by the R|P staff. Points earned directly
//                     translate into raffle entries for the giveaway.
//                   </p>
//                   <h2>Winners</h2>
//                   <p>
//                     Winners are randomly chosen from the entire raffle
//                     participant pool. There will be 10 winners total. One person
//                     will win an iPad, two people will take home a Google Home
//                     Mini, and the other seven winners will receive a Panera gift
//                     card.
//                   </p>
//                 </Container>
//               </Section.Body>
//             </Section>
//           </div>
//         </>
//       )}
//       <Footer />
//     </Layout>
//   );
// };
// export default ChallengePage;
