import React, { useState } from 'react';
import moment from 'moment';

import { isMobile } from 'react-device-detect';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { DAY_FORMAT, TIME_FORMAT, EVENT_TYPE } from '../../constants/events';

import Section from '../../UIComponents/Section';
import UIButtonGroupSelect from '../../UIComponents/Input/UIButtonGroupSelect';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';

/* Grabs all events */
const getEventsList = events => {
  if (typeof events !== 'object') {
    return [];
  }
  return events.allIds.map(id => {
    const event = events.byId[id];
    return {
      ...event,
      id,
      key: id
    };
  });
};

/* */
const filterEvents = (events, day, type) => {
  if (!Array.isArray(events)) {
    return [];
  }

  return events
    .filter(({ displayInAgenda, time }) =>
      day
        ? moment(time.start, TIME_FORMAT).isSame(
            moment(day, DAY_FORMAT),
            'day'
          ) && displayInAgenda
        : true
    )
    .filter(event => (type !== '' ? event.type === type : true))
    .sort((a, b) =>
      moment(a.time.start, TIME_FORMAT).isBefore(
        moment(b.time.start, TIME_FORMAT)
      )
        ? -1
        : 1
    );
};

const formatTime = time => {
  const start = moment(time.start, TIME_FORMAT).format('hh:mma');
  const end = moment(time.end, TIME_FORMAT).format('hh:mma');
  return `${start} - ${end}`;
};

const DayAgenda = ({ label, events }) => {
  if (!events || events.length === 0) {
    return null;
  }
  return (
    <Col xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }}>
      <UITimeline>
        <UITimeline.Title>{label}</UITimeline.Title>
        <UITimeline.Body>
          {events.map(event => (
            <UITimelineEvent key={event.title}>
              <UITimelineEvent.Time>
                {formatTime(event.time)}
              </UITimelineEvent.Time>
              <UITimelineEvent.Body>
                <a href={event.link}>{event.title} </a>
                <br />
                <span style={{ fontWeight: 200 }}><a href={event.link}>{event.location}</a></span>
                {event.hasPage && (
                  <>
                    <br />
                    <a
                      href={`/events/?id=${event.id}`}
                      style={{ fontWeight: '400' }}
                    >
                      More Info &#8250;
                    </a>
                  </>
                )}
              </UITimelineEvent.Body>
            </UITimelineEvent>
          ))}
        </UITimeline.Body>
      </UITimeline>
    </Col>
  );
};

const Agenda = ({ events }) => {
  const allEvents = getEventsList(events);

  const [selectedType, setSelectedType] = useState('');
  const handleSelect = value => {
    setSelectedType(value);
  };


  return (
    <Section>
      <Section.Header>
        <Section.Title>Agenda</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Row className="pb-4">
            <Col className="text-center">
              <UIButtonGroupSelect
                options={[
                  { label: 'All Events', value: '' },
                  { label: 'Conference Events', value: EVENT_TYPE.CONFERENCE },
                  { label: 'Corporate Events', value: EVENT_TYPE.CORPORATE }
                ]}
                onSelect={handleSelect}
              />
            </Col>
          </Row>
          <Row>
            <DayAgenda
              label="Monday Sep 21st"
              events={filterEvents(allEvents, '09-21-2020', selectedType)}
            />
            <DayAgenda
              label="Tuesday Sep 22nd"
              events={filterEvents(allEvents, '09-22-2020', selectedType)}
            />
            <DayAgenda
              label="Wednesday Sep 23rd"
              events={filterEvents(allEvents, '09-23-2020', selectedType)}
            />
            <DayAgenda
              label="Thursday Sep 24th"
              events={filterEvents(allEvents, '09-24-2020', selectedType)}
            />
            <DayAgenda
              label="Friday Sep 25th"
              events={filterEvents(allEvents, '09-25-2020', selectedType)}
            />
            <DayAgenda
              label="Saturday Sep 26th"
              events={filterEvents(allEvents, '09-26-2020', selectedType)}
            />
          </Row>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default Agenda;
