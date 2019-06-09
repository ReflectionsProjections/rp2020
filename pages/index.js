import React from 'react';
import SVG from 'react-inlinesvg';
import { Link, Element } from 'react-scroll';
import axios from 'axios';

import Layout from '../components/Util/Layout';
import CountdownTimer from '../components/CountdownTimer';
import About from '../components/About/index';
import FAQ from '../components/FAQ/index';
import Speaker from '../components/Speaker/index';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';

const Index = props => {
  const { speakerSection, faqSection } = props;
  return (
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

      <Element name="about">
        <About />
      </Element>
      <Element name="speakers">
        <Speaker speakers={speakerSection.list} />
      </Element>
      <Element name="faq">
        <FAQ faqData={faqSection} />
      </Element>

      <footer>
        <div
          className={`text-white text-center animated fadeIn ${
            styles.footerText
          }`}
        >
          <p className={styles.organized}>
            Organized by <a href="https://acm.illinois.edu/">ACM@UIUC</a>
          </p>
          <p className={styles.contact}>
            Questions? Interested in sponsoring? Email us at{' '}
            <a href="mailto:contact@reflectionsprojections.org">
              contact@reflectionsprojections.org
            </a>
          </p>
        </div>
      </footer>
    </Layout>
  );
};

Index.getInitialProps = async ({ req }) => {
  if (req) {
    const prefix =
      process.env.NODE_ENV === 'production'
        ? 'http://acmrp.org'
        : 'http://localhost:3000';
    const res = await axios.get(`${prefix}/static/rp2019.json`);
    return res.data;
  }
  return {};
};

export default Index;
