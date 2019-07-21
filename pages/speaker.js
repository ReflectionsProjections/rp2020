import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/Util/Layout';
import Section from '../components/Util/Section';
import Footer from '../components/Footer';

import styles from './speaker.scss';

const Speaker = ({ speakers, query }) => {
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
              <Row>
                <Col className="text-center">
                  <Link scroll href="/">
                    <span className="btn btn-primary">Back Home</span>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Section.Body>
        </Section>
      </div>
      <Footer />
    </Layout>
  );
};

Speaker.getInitialProps = async ({ query }) => {
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'http://acmrp.org'
      : 'http://localhost:3000';
  const res = await axios.get(`${prefix}/static/rp2019.json`);
  return {
    speakers: res.data.speakerSection.list,
    query
  };
};

export default Speaker;
