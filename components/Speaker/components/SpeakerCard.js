import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Card from 'react-bootstrap/Card';

import styles from './SpeakerCard.scss';
import { getQueryObject } from '../../../lib/path';

const SpeakerCard = ({ name, cardImage, tagline }) => {
  const [hrefObj, setHrefObj] = useState({});
  useEffect(() => {
    setHrefObj({
      pathname: '/speaker',
      query: {
        ...getQueryObject(window),
        name
      }
    });
  });

  return (
    <Link key={name} href={hrefObj}>
      <Card className={styles.speakerCard} key={name}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImage} />
        <Card.Body>
          <Card.Title className={styles.speakerName}>{name}</Card.Title>
          <Card.Text className={styles.speakerTagline}>{tagline}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default SpeakerCard;
