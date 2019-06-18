import React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import styles from './Speaker.scss';

const Speaker = ({ speakers }) => (
  <Container>
    <section className="speaker-section" id="speakers">
      <Container>
        <h2 className="text-center section-header">Speakers</h2>
        <br />
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
    </section>
  </Container>
);

export default Speaker;
