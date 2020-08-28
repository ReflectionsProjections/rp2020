import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap"
import Head from 'next/head';
import SVG from 'react-inlinesvg';
import { Element } from 'react-scroll';

import Layout from '../UIComponents/Layout';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm'

import { isAuthenticated, authenticate } from '../api/api';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';

import { getQueryObject } from '../lib/path';
import useGetStaticData from '../services/useGetStaticData';

const Register = () => {

    let query = {};
    if (process.browser) {
        query = getQueryObject(window); 
    }

    const { isLoaded, rpData, nav, gates } = useGetStaticData();
    const { events, faqSection, speakerSection, projectSection, sponsors } = rpData;

    if (isAuthenticated()) {
      return (
        <Layout>
          <h1>hello</h1>
        </Layout>
      ); 
    } else {
      return (
          <>
        <Layout>
          <div className={`text-white text-center ${styles.leadContent}`}>
          </div>
          <div className={styles.registrationForm}>
          <Element name="registration-form">
              <RegistrationForm />
          </Element>
          </div>

          <Footer />
        </Layout>
      </>
      );
    }    
};

export default Register;