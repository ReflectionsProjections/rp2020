import React from 'react';
import moment from 'moment';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TIME_FORMAT } from '../../constants/events';

import Section from '../../UIComponents/Section';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';

const getEvents = events => {
  return events.order.map(id => events.byId[id]);
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
        {getEvents(events).map(event => (
          <UITimelineEvent>
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
          <DayAgenda label="Monday" events={events} />
          <DayAgenda label="Tuesday" events={events} />
          <DayAgenda label="Wednesday" events={events} />
          <DayAgenda label="Thursday" events={events} />
          <DayAgenda label="Friday" events={events} />
          <DayAgenda label="Saturday" events={events} />
        </Row>
      </Container>
    </Section.Body>
  </Section>
);

export default Agenda;
