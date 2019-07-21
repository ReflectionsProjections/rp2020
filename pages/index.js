import React from 'react';
import Head from 'next/head';
import SVG from 'react-inlinesvg';
import { Link, Element } from 'react-scroll';
import axios from 'axios';

import Layout from '../components/Util/Layout';
import CountdownTimer from '../components/CountdownTimer';
import About from '../components/About/index';
import Speaker from '../components/Speaker';
import FAQ from '../components/FAQ/index';
import SponsorSection from '../components/SponsorSection';
import Footer from '../components/Footer';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';

const Index = ({ speakerSection, faqSection }) => (
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

      <Element name="about">
        <About />
      </Element>
      <Element name="speakers">
        <Speaker speakers={speakerSection.list} />
      </Element>
      <Element name="faq">
        <FAQ faqData={faqSection} />
      </Element>
      <Element name="sponsor-section">
        <SponsorSection />
      </Element>
      <Footer />
    </Layout>
  </>
);

Index.getInitialProps = async () => {
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'http://acmrp.org'
      : 'http://localhost:3000';
  const res = await axios.get(`${prefix}/static/rp2019.json`);
  return res.data;
};

export default Index;
