import React from 'react';

import Container from 'react-bootstrap/Container';

import TimelineBlock from './TimelineBlock';

import styles from './Timeline.scss';

const Timeline = ({ events }) => (
  <Container className={styles.section}>
    <section>
      <Container>
        <h2 className="text-center section-header">Timeline</h2>
        <div className={styles['timeline-container']}>
          {events.map(event => (
            <TimelineBlock key={event.content} event={event} />
          ))}
        </div>
      </Container>
    </section>
  </Container>
);
export default Timeline;
