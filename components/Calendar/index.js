import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from '../../UIComponents/Section';

import styles from './calendar.scss';

const Calendar = () => (
  <Section className={styles.calendarSection}>
    <Section.Header>
      <Section.Title>Schedule</Section.Title>
    </Section.Header>
    <Section.Body>
      <Container>
            <iframe src="https://calendar.google.com/calendar/embed?src=c_qfdpne2m3ggiac19f9ggf574i8%40group.calendar.google.com&ctz=America%2FChicago" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            
      </Container>
    </Section.Body>
  </Section>
);

export default Calendar;
