import React from 'react';
import moment from 'moment';

import Container from 'react-bootstrap/Container';

import Layout from '../UIComponents/Layout';
import Section from '../UIComponents/Section';

import Footer from '../components/Footer';
import Nav from '../components/Nav';

import { getQueryObject } from '../lib/path';
import { TIME_FORMAT } from '../constants/events';
import useGetStaticData from '../services/useGetStaticData';

import styles from './speaker.scss';

const formatTime = time => {
  const start = moment(time.start, TIME_FORMAT).format('HH:mm');
  const end = moment(time.end, TIME_FORMAT).format('HH:mm MMM Do');
  return `${start}-${end}`;
};

const Events = () => {
  let query = {};
  if (process.browser) {
    query = getQueryObject(window);
  }

  const { isLoaded, rpData, nav } = useGetStaticData();
  const { events } = rpData;

  if (!events || !events.byId[query.id]) {
    return null;
  }
  const event = events.byId[query.id];

  const { title, time, location, pageContent } = event;

  const createMarkup = () => ({
    __html: pageContent
  });

  return (
    <Layout>
      <div className={`animated fadeIn ${styles.topPadding}`}>
        {isLoaded && (
          <>
            <Nav format={nav.events} />
            <Section>
              <Section.Header className={`animated fadeIn ${styles.delayHalf}`}>
                <Section.Title>{title}</Section.Title>
                <Section.Subtitle>
                  {location}
                  <br />
                  {formatTime(time)}
                </Section.Subtitle>
              </Section.Header>
              <Section.Body>
                <Container className={`animated fadeIn ${styles.delay}`}>
                  <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={createMarkup()}
                  ></div>
                </Container>
              </Section.Body>
            </Section>
          </>
        )}
      </div>
      <Footer />
    </Layout>
  );
};

export default Events;
