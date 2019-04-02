import React from 'react';
import SVG from 'react-inlinesvg';
import Layout from '../components/Util/Layout';
import CountdownTimer from '../components/CountdownTimer';
import FAQ from '../components/FAQ/index';

import './index.scss';

const Index = () => (
  <Layout>
    <section className="text-white text-center">
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
    </section>
    <section className="faq-container">
      <FAQ />
    </section>
    <section>
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
    </section>
  </Layout>
);
export default Index;
