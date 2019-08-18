import React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gate from '../UIComponents/Gate';
import Nav from '../components/Nav';
import Layout from '../UIComponents/Layout';
import Section from '../UIComponents/Section';
import Footer from '../components/Footer';

import OtherSpeakers from '../components/Speaker/OtherSpeakers';

import styles from './speaker.scss';

import { fetchConferenceData, fetchNavData, fetchGates } from '../api/client';

const Speaker = ({ query, nav, speakers, gates }) => {
  let speaker = {};
  if (speakers !== undefined) {
    speakers.forEach(s => {
      if (s.name === query.name) {
        speaker = s;
      }
    });
  }
  const { name, tagline, bio, image } = speaker;
  const imageURL = `${image}.png`;
  return (
    <Layout>
      <Gate gatename="NAV" gates={gates} query={query}>
        <Nav format={nav.speaker} />
      </Gate>
      <Gate gatename="SPEAKER_SECTION" gates={gates} query={query}>
        <div className={`animated fadeIn ${styles.topPadding}`}>
          <Section>
            <Section.Title>
              <span className={`animated fadeIn ${styles.delayHalf}`}>
                {name}
              </span>
            </Section.Title>
            <Section.Subtitle>
              <span className={`animated fadeIn ${styles.delayHalf}`}>
                {tagline}
              </span>
            </Section.Subtitle>
            <Section.Body>
              <Container className={`animated fadeIn ${styles.delay}`}>
                <Row>
                  <Col md={{ span: 12 }} lg={{ span: 6 }}>
                    <img
                      className={`img-fluid ${styles.image}`}
                      alt={`Reflections Projections 2019 Speaker - ${name}`}
                      src={imageURL}
                    />
                  </Col>
                  <Col md={{ span: 12 }} lg={{ span: 6 }}>
                    <p className={styles.bio}>{bio}</p>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col className="text-center">
                    <Link scroll href={{ pathname: '/', query }}>
                      <span className="btn btn-primary">Back Home</span>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Section.Body>
          </Section>
          <OtherSpeakers
            speakers={speakers.filter(s => s.name !== query.name).slice(0, 4)}
          />
        </div>
      </Gate>
      <Footer />
    </Layout>
  );
};

Speaker.getInitialProps = async ({ query }) => {
  const rpData = await fetchConferenceData();
  const nav = await fetchNavData();
  const gates = await fetchGates();

  return {
    speakers: rpData.speakerSection.list,
    nav,
    gates,
    query
  };
};

export default Speaker;
