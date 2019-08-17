import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Section from '../Util/Section';

import { getQueryObject } from '../../lib/path';

import styles from './styles.scss';

const EventListing = ({ title, image, description }) => {
  const [hrefObj, setHrefObj] = useState({});

  useEffect(() => {
    setHrefObj({
      pathname: '/#',
      query: getQueryObject(window)
    });
  });

  return (
    <Row className={styles.eventListing}>
      <Col sm={6} md={5}>
        <Image className={styles.eventImage} src={image} fluid rounded />
      </Col>
      <Col className={styles.eventInfo} sm={6} md={7}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventDescription}>{description}</p>
        <Link href={hrefObj}>
          <span className={styles.eventLink}>View Event Details</span>
        </Link>
      </Col>
    </Row>
  );
};
const Events = ({ events }) => (
  <Section>
    <Section.Title>Events</Section.Title>
    <Section.Body>
      <Container>
        {events.map(event => (
          <EventListing
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </Container>
    </Section.Body>
  </Section>
);

export default Events;
