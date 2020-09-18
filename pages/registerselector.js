import React, { useEffect } from "react";
import { Element } from 'react-scroll';
import Button from 'react-bootstrap/Button';

import Layout from '../UIComponents/Layout';
import Footer from '../components/Footer';
import RegistrationSelect from '../components/RegistrationSelect'

import { isAuthenticated, authenticate } from '../api/api';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';
import Section from "../UIComponents/Section";

const Register = () => {

  useEffect(() => {
   
  });
    
    {
      return (
        <>
          <Layout>
            <div className={`text-white text-center ${styles.leadContent}`}>
            </div>
            <div className={styles.registrationForm}>
                <Element name="registration-form">
                    <RegistrationSelect />
                </Element>
            </div>

          <Footer />
        </Layout>
      </>
      );
    }    
};

export default Register;
