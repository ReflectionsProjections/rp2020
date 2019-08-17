import React from 'react';
import Link from 'next/link';

import Card from 'react-bootstrap/Card';

import styles from './SpeakerCard.scss';

const SpeakerCard = ({ name, cardImage, tagline }) => (
  <Link key={name} href={`/speaker?name=${name}`} as={`/speaker/${name}`}>
    <Card className={styles.speakerCard} key={name}>
      <Card.Img variant="top" src={cardImage} className={styles.cardImage} />
      <Card.Body>
        <Card.Title className={styles.speakerName}>{name}</Card.Title>
        <Card.Text className={styles.speakerTagline}>{tagline}</Card.Text>
      </Card.Body>
    </Card>
  </Link>
);

export default SpeakerCard;
