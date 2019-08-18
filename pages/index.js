import React from 'react';
import Head from 'next/head';
import SVG from 'react-inlinesvg';
import { Link, Element } from 'react-scroll';

import Gate from '../components/Util/Gate';
import Layout from '../components/Util/Layout';
import Nav from '../components/Nav';
import CountdownTimer from '../components/CountdownTimer';
import About from '../components/About/index';
import Speaker from '../components/Speaker';
import Events from '../components/Events';
import FAQ from '../components/FAQ/index';
import SponsorSection from '../components/SponsorSection';
import Footer from '../components/Footer';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';

import { fetchConferenceData, fetchNavData, fetchGates } from '../api/client';
import { getQueryObject } from '../lib/path';

const Index = ({ rpData, gates, nav }) => {
  const { events, faqSection, speakerSection, sponsors } = rpData;
  let query = {};
  if (process.browser) {
    query = getQueryObject(window);
  }
  return (
    <>
      <Head>
        <title>Reflections | Projections 2019</title>
        <meta
          name="description"
          content="Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign."
        />
        <meta property="og:title" content="Reflections | Projections 2019" />
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
                Sept 16 - 21
              </h2>
              <h6 className={`animated fadeInUp ${styles.tagline}`}>
                Celebrating 25 Years
              </h6>
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
        <Element>
          <Gate gatename="NAV" gates={gates} query={query}>
            <Nav format={nav.index} />
          </Gate>
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="speakers">
          <Gate gatename="SPEAKER_SECTION" gates={gates} query={query}>
            <Speaker speakers={speakerSection.list} />
          </Gate>
        </Element>

        <Element name="events">
          <Gate gatename="EVENT_SECTION" gates={gates} query={query}>
            <Events events={events} />
          </Gate>
        </Element>
        <Element name="faq">
          <FAQ faqData={faqSection} />
        </Element>
        <Element name="sponsor-section">
          <Gate gatename="SPONSOR_SECTION" gates={gates} query={query}>
            <SponsorSection sponsors={sponsors} />
          </Gate>
        </Element>
        <Footer />
      </Layout>
    </>
  );
};

Index.getInitialProps = async () => {
  const conferenceData = await fetchConferenceData();
  const nav = await fetchNavData();
  const gates = await fetchGates();
  return {
    rpData: conferenceData,
    nav,
    gates
  };
};

export default Index;
