import React from 'react';

import Section from '../Util/Section';

import TimelineBlock from './components/TimelineBlock';

import styles from './Timeline.scss';

const Timeline = ({ events }) => (
  <div className={styles.topPadding}>
    <Section>
      <Section.Header>
        <Section.Title>Timeline</Section.Title>
        <Section.Subtitle>
          Celebrating 25 Years of <wbr />
          <span style={{ display: 'inline-block' }}>
            Reflections | Projections
          </span>
        </Section.Subtitle>
      </Section.Header>
      <Section.Body>
        <div className={styles.timelineContainer}>
          {events.map(event => (
            <TimelineBlock key={event.content} event={event} />
          ))}
        </div>
      </Section.Body>
    </Section>
  </div>
);
export default Timeline;
