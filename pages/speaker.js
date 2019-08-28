import React from 'react';

import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gate from '../UIComponents/Gate';
import Nav from '../components/Nav';
import Layout from '../UIComponents/Layout';
import Section from '../UIComponents/Section';
import Footer from '../components/Footer';
import OtherSpeakers from '../components/Speaker/OtherSpeakers';

import { getQueryObject } from '../lib/path';
import useGetStaticData from '../services/useGetStaticData';

import styles from './speaker.scss';

const Speaker = () => {
  let query;
  if (query === undefined && process.browser) {
    query = getQueryObject(window);
  }

  const { isLoaded, nav, rpData, gates } = useGetStaticData();
  if (!isLoaded) {
    return <></>;
  }
  const speakers = rpData.speakerSection.list;

  let speaker = {};
  if (speakers !== undefined) {
    speakers.forEach(s => {
      if (s.name === query.name) {
        speaker = s;
      }
    });
  }
  const { name, tagline, bio, image, badge } = speaker;

  const createMarkup = () => ({
    __html: bio
  });

  const badgeJSX = badge ? <Badge variant="primary">{badge}</Badge> : null;

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
                <br />
                {badgeJSX}
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
                    <p
                      className={styles.bio}
                      // eslint-disable-next-line react/no-danger
                      dangerouslySetInnerHTML={createMarkup()}
                    ></p>
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

export default Speaker;
