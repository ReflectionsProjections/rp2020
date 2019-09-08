import React from 'react';
import moment from 'moment';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TIME_FORMAT } from '../../constants/events';

import Section from '../../UIComponents/Section';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';

const getEvents = (events, day) => {
  return events.allIds
    .map(id => events.byId[id])
    .filter(
      ({ displayInAgenda, time: { start } }) =>
        moment(start, TIME_FORMAT).isSame(day, 'day') && displayInAgenda
    )
    .sort((a, b) =>
      moment(a.time.start, TIME_FORMAT).isBefore(b.time.start, 'minute')
        ? -1
        : 1
    );
};

const formatTime = time => {
  const start = moment(time.start, TIME_FORMAT).format('hh:mm');
  const end = moment(time.end, TIME_FORMAT).format('hh:mma');
  return `${start} - ${end}`;
};

const DayAgenda = ({ label, events }) => (
  <Col
    xs={{ span: 10, offset: 1 }}
    sm={{ span: 8, offset: 2 }}
    md={{ span: 6, offset: 0 }}
  >
    <UITimeline>
      <UITimeline.Title>{label}</UITimeline.Title>
      <UITimeline.Body>
        {events.map(event => (
          <UITimelineEvent key={event.title}>
            <UITimelineEvent.Time>
              {formatTime(event.time)}
            </UITimelineEvent.Time>
            <UITimelineEvent.Body>
              {event.title}
              <br />
              <span style={{ fontWeight: 200 }}>{event.location}</span>
            </UITimelineEvent.Body>
          </UITimelineEvent>
        ))}
      </UITimeline.Body>
    </UITimeline>
  </Col>
);

const Agenda = ({ events }) => (
  <Section>
    <Section.Header>
      <Section.Title>Agenda</Section.Title>
    </Section.Header>
    <Section.Body>
      <Container>
        <Row>
          <DayAgenda
            label="Monday Sep 16th"
            events={getEvents(events, '09-16-2019')}
          />
          <DayAgenda
            label="Tuesday Sep 17th"
            events={getEvents(events, '09-17-2019')}
          />
          <DayAgenda
            label="Wednesday Sep 18th"
            events={getEvents(events, '09-18-2019')}
          />
          <DayAgenda
            label="Thursday Sep 19th"
            events={getEvents(events, '09-19-2019')}
          />
          <DayAgenda label="Friday" events={getEvents(events, '09-20-2019')} />
          <DayAgenda
            label="Saturday Sep 20th"
            events={getEvents(events, '09-21-2019')}
          />
        </Row>
      </Container>
    </Section.Body>
  </Section>
);

export default Agenda;
