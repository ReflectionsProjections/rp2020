import React, { useState, useEffect } from "react";
import { Element } from 'react-scroll';

import Layout from '../UIComponents/Layout';
import Footer from '../components/Footer';

import { getToken } from '../api/api';

import styles from './index.scss';
import '../static/stylesheets/animations.scss';

import { getQueryObject } from '../lib/path';

const Auth = () => {
    
  let query = {};
  if (process.browser) {
      query = getQueryObject(window);
      console.log(query)
  }

  useEffect(() => {
    if (query.code !== undefined) {
        getToken(query.code).then(token => {
            sessionStorage.setItem('rptoken', token);
            window.location.replace('https://reflectionsprojections.org/register')
            //window.location.replace('http://localhost:3000/register')
        })
        //sessionStorage.setItem('rptoken', query.code);
        //window.location.replace('http://localhost:3000/register')
    }
  });

    
    {
      return (
          <>
        <Layout>
          <div className={`text-white text-center ${styles.leadContent}`}>
              Loading...
          </div>
          <Footer />
        </Layout>
      </>
      );
    }    
};

export default Auth;