import React, { useEffect } from "react";
import { Element } from 'react-scroll';

import Layout from '../UIComponents/Layout';
import Footer from '../components/Footer';
import RegistrationForm from '../components/RegistrationForm'

import { isAuthenticated, authenticate } from '../api/api';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';

const Register = () => {

  useEffect(() => {
    
    if (!isAuthenticated()) {
      authenticate('https://reflectionsprojections.org/auth')
    }
  });
    
    {
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
