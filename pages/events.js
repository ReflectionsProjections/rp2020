import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import Layout from '../UIComponents/Layout';
import Section from '../UIComponents/Section';
import Footer from '../components/Footer';

import styles from './speaker.scss';

import data from '../static/data/rp2019.json';

const { events } = data;

const Events = ({ query }) => {
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
  return {
    query
  };
};

export default Events;
