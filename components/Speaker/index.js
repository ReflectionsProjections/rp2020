import React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Section from '../Util/Section';

import styles from './Speaker.scss';

const Speaker = ({ speakers }) => (
  <Section className="speaker-section">
    <Section.Header>
      <Section.Title>Speakers</Section.Title>
    </Section.Header>
    <Section.Body>
      <Container>
        <Row>
          <div>
            {speakers.length === 0 ? (
              <h4>Loading...</h4>
            ) : (
              <CardDeck>
                {speakers.map(speaker => {
                  const { name, image, tagline } = speaker;
                  return (
                    <Link
                      key={name}
                      href={`/speaker?name=${name}`}
                      as={`/speaker/${name}`}
                    >
                      <Card className={styles.speakerCard} key={name}>
                        <Card.Img
                          variant="top"
                          src={image}
                          className={styles.cardImage}
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
                  );
                })}
              </CardDeck>
            )}
          </div>
        </Row>
      </Container>
    </Section.Body>
  </Section>
);

export default Speaker;
