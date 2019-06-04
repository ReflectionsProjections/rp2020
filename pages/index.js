import React from 'react';
import Head from 'next/head';
import SVG from 'react-inlinesvg';
import { Link, Element } from 'react-scroll';
import Layout from '../components/Util/Layout';
import CountdownTimer from '../components/CountdownTimer';

import About from '../components/About/index';
import Speaker from '../components/Speaker';
import FAQ from '../components/FAQ/index';

import './index.scss';
import '../static/stylesheets/animations.scss';

const Index = () => (
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
          <div className="lead-content text-white text-center">
            <SVG
              className="img-fluid wordmark animated fadeIn"
              src="/static/assets/wordmarkblack.svg"
            />
            <h2 className="event-date animated fadeIn">Sept 16 - 21</h2>
            <h6 className="animated fadeInUp" id="tagline">
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
            <span className="scroll-down">
              <span className="scroll-down-text">See More</span>
            </span>
          </Link>
        </div>
      </main>

      <Element name="about">
        <About />
      </Element>
      <Element name="speakers">
        <Speaker />
      </Element>
      <Element name="faq">
        <FAQ />
      </Element>
      <footer>
        <div className="text-white text-center footer-text animated fadeIn">
          <p id="organized">
            Organized by <a href="https://acm.illinois.edu/">ACM@UIUC</a>
          </p>
          <p id="contact">
            Questions? Interested in sponsoring? Email us at{' '}
            <a href="mailto:contact@reflectionsprojections.org">
              contact@reflectionsprojections.org
            </a>
          </p>
        </div>
      </footer>
    </Layout>
  </>
);
export default Index;
