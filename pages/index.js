import React from 'react';
import Head from 'next/head';
import SVG from 'react-inlinesvg';
import { Link, Element } from 'react-scroll';

import Gate from '../UIComponents/Gate';
import Layout from '../UIComponents/Layout';
import Nav from '../components/Nav';
import CountdownTimer from '../components/CountdownTimer';
import About from '../components/About/index';
import Speaker from '../components/Speaker';
import Events from '../components/Events';
import SponsorSection from '../components/SponsorSection';
import Footer from '../components/Footer';
import NotifBanner from '../components/NotifBanner';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';

import { getQueryObject } from '../lib/path';
import useGetStaticData from '../services/useGetStaticData';

const Index = () => {
  let query = {};
  if (process.browser) {
    query = getQueryObject(window);
  }

  const { isLoaded, rpData, nav, gates } = useGetStaticData();
  const { events, speakerSection, sponsors } = rpData;

  return (
    <>
      <Head>
        <title>Reflections | Projections 2020</title>
        <meta
          name="description"
          content="Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign."
        />
        <meta property="og:title" content="Reflections | Projections 2020" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://reflectionsprojections.org/" />
        <meta property="og:image" content="/static/assets/facebook2.png" />
        <meta name="twitter:title" content="Reflections | Projections 2019" />
        <meta
          name="twitter:description"
          content="Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign."
        />
        <meta name="twitter:image" content="/static/assets/twitter1.png" />
        <meta name="twitter:site" content="@uiuc_rp" />
        <meta name="twitter:creator" content="@uiuc_rp" />
      </Head>
      <Layout>
        <main className="landing">
          <div className="container">
            <div className={`text-white text-center ${styles.leadContent}`}>
              <SVG
                className={`img-fluid animated fadeIn ${styles.wordmark}`}
                src="/static/assets/wordmarkblack.svg"
              />
              <h2 className={`animated fadeIn ${styles.eventDate}`}>
                Sept 21 - 26, 2020
              </h2>
              <div>
                <NotifBanner />
              </div>
              {/* <h6 className={`animated fadeInUp ${styles.tagline}`}>
                Celebrating 25 Years
              </h6> */}
              <div>
                <CountdownTimer className="animated fadeIn" />
              </div>
            </div>
            <Link
              activeClass="active"
              to="about"
              spy
              smooth="easeInOutQuad"
              duration={500}
              offset={-80}
            >
              <span className={styles.scrollDown}>
                <span className={styles.scrollDownText}>See More</span>
              </span>
            </Link>
          </div>
        </main>
        {isLoaded && (
          <>
            <Element>
              <Nav format={nav.index} />
            </Element>
            <Element name="about">
              <About />
            </Element>
            {/* <Element name="agenda">
              <Gate gatename="AGENDA_SECTION" gates={gates} query={query}>
                <Agenda events={events} />
              </Gate>
            </Element> */}
            <Element name="speakers">
              <Speaker speakers={speakerSection.list} />
            </Element>

            <Element name="events">
              <Gate gatename="EVENT_SECTION" gates={gates} query={query}>
                <Events events={events} />
              </Gate>
            </Element>
            {/* <Element name="faq">
              <FAQ faqData={faqSection} />
            </Element> */}
            <Element name="sponsor-section">
              <SponsorSection sponsors={sponsors} />
            </Element>
          </>
        )}

        <Footer />
      </Layout>
    </>
  );
};

export default Index;
