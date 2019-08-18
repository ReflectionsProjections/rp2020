import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Section from '../Util/Section';

import SpeakerCard from './components/SpeakerCard';

import styles from './Speaker.scss';

const Speaker = ({ speakers }) => {
  return (
    <Section className="speaker-section">
      <Section.Header>
        <Section.Title>Speakers</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Row>
            {speakers.length === 0 ? (
              <h4>Loading...</h4>
            ) : (
              <>
                {speakers.map(speaker => {
                  const { name, image, tagline } = speaker;
                  const imageURL = `${image}.png`;
                  return (
                    <Col
                      className={styles.speakerCardContainer}
                      xs={6}
                      md={4}
                      lg={3}
                    >
                      <SpeakerCard
                        name={name}
                        cardImage={imageURL}
                        tagline={tagline}
                      />
                    </Col>
                  );
                })}
              </>
            )}
          </Row>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default Speaker;
