import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Layout from '../components/Util/Layout';
import Section from '../components/Util/Section';
import Footer from '../components/Footer';

import styles from './speaker.scss';

const Events = ({ events, query }) => {
  if (query.name === undefined) {
    return null;
  }
  const name = events[query.name].title;
  return (
    <Layout>
      <div className={`animated fadeIn ${styles.topPadding}`}>
        <Section>
          <Section.Title>
            <span className={`animated fadeIn ${styles.delayHalf}`}>
              {name}
            </span>
          </Section.Title>
          <Section.Body>
            <Container className={`animated fadeIn ${styles.delay}`}>
              <Row>
                <h3>Some cool information</h3>
              </Row>
            </Container>
          </Section.Body>
        </Section>
      </div>
      <Footer />
    </Layout>
  );
};

Events.getInitialProps = async ({ query }) => {
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'http://acmrp.org'
      : 'http://localhost:3000';
  const res = await axios.get(`${prefix}/static/rp2019.json`);
  return {
    events: res.data.events,
    query
  };
};

export default Events;
