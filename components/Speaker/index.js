import React, { useState } from 'react';
import Link from 'next/link';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Section from '../Util/Section';

import styles from './Speaker.scss';

const Speaker = ({ speakers }) => {
  const [hoveredSpeaker, setHoveredSpeaker] = useState('');

  const handleMouseHover = current => {
    return () => {
      setHoveredSpeaker(current);
    };
  };

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
                  const regularImageURL = `${image}.png`;
                  const cutoutImageURL = `${image}-Cutout.png`;
                  return (
                    <Col
                      className={styles.speakerCardContainer}
                      xs={6}
                      md={4}
                      lg={3}
                    >
                      <Link
                        key={name}
                        href={`/speaker?name=${name}`}
                        as={`/speaker/${name}`}
                      >
                        <Card className={styles.speakerCard} key={name}>
                          <Card.Img
                            variant="top"
                            src={
                              hoveredSpeaker === name
                                ? cutoutImageURL
                                : regularImageURL
                            }
                            className={styles.cardImage}
                            onMouseEnter={handleMouseHover(name)}
                            onMouseLeave={handleMouseHover('')}
                          />
                          <Card.Body>
                            <Card.Title className={styles.speakerName}>
                              {name}
                            </Card.Title>
                            <Card.Text className={styles.speakerTagline}>
                              {tagline}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
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
