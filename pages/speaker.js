// import React from 'react';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import Nav from '../components/Nav';
// import Layout from '../UIComponents/Layout';
// import Section from '../UIComponents/Section';
// import Footer from '../components/Footer';
// import OtherSpeakers from '../components/Speaker/OtherSpeakers';

// import { getQueryObject } from '../lib/path';
// import useGetStaticData from '../services/useGetStaticData';

// import styles from './speaker.scss';

// const Speaker = () => {
//   let query;
//   if (query === undefined && process.browser) {
//     query = getQueryObject(window);
//   }

//   const { isLoaded, nav, rpData } = useGetStaticData();
//   if (!isLoaded) {
//     return <></>;
//   }
//   const speakers = rpData.speakerSection.list;

//   let speaker = {};
//   if (speakers !== undefined) {
//     speakers.forEach(s => {
//       if (s.name === query.name) {
//         speaker = s;
//       }
//     });
//   }
//   const { name, tagline, bio, image, badge } = speaker;

//   const createMarkup = () => ({
//     __html: bio
//   });

//   const badgeStyles = {
//     textAlign: 'center'
//   };
//   const badgeJSX = badge ? (
//     <span className="badge badge-primary" style={badgeStyles}>
//       {badge}
//     </span>
//   ) : null;

//   const imageURL = `${image}.png`;
//   return (
//     <Layout>
//       <Nav format={nav.speaker} />
//       <div className={`animated fadeIn ${styles.topPadding}`}>
//         <Section>
//           <Section.Title>
//             <span className={`animated fadeIn ${styles.delayHalf}`}>
//               <Row>
//                 <Col md={12}>{name}</Col>
//                 <Col md={12}>{badgeJSX}</Col>
//               </Row>
//             </span>
//           </Section.Title>
//           <Section.Subtitle>
//             <span className={`animated fadeIn ${styles.delayHalf}`}>
//               {tagline}
//             </span>
//           </Section.Subtitle>
//           <Section.Body>
//             <Container className={`animated fadeIn ${styles.delay}`}>
//               <Row>
//                 <Col md={{ span: 12 }} lg={{ span: 6 }}>
//                   <img
//                     className={`img-fluid ${styles.image}`}
//                     alt={`Reflections Projections 2019 Speaker - ${name}`}
//                     src={imageURL}
//                   />
//                 </Col>
//                 <Col md={{ span: 12 }} lg={{ span: 6 }}>
//                   <p
//                     className={styles.bio}
//                     // eslint-disable-next-line react/no-danger
//                     dangerouslySetInnerHTML={createMarkup()}
//                   ></p>
//                 </Col>
//               </Row>
//             </Container>
//           </Section.Body>
//         </Section>
//         <OtherSpeakers
//           speakers={speakers.filter(s => s.name !== query.name).slice(0, 3)}
//         />
//       </div>
//       <Footer />
//     </Layout>
//   );
// };

// export default Speaker;
