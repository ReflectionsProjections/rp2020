import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { Form, Button, Row, Col } from "react-bootstrap"
import { isMobile } from 'react-device-detect';
import Container from 'react-bootstrap/Container';
import { DAY_FORMAT, TIME_FORMAT, EVENT_TYPE } from '../../constants/events';

import styles from '../../pages/index.scss';
import styles2 from '../Navbar/components/NavButton.scss'; 
import styles3 from './RegistrationSelect.scss';
import styles4 from '../Navbar/components/NavSocialMediaIcon.scss'

import NavSocialMediaIcon from '../Navbar/components/NavSocialMediaIcon';
import Section from '../../UIComponents/Section';
import UIButtonGroupSelect from '../../UIComponents/Input/UIButtonGroupSelect';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';
import { getRegistration, register, uploadFile } from '../../api/api';
import { getQueryObject } from '../../lib/path';
import axios from 'axios';

import { isAuthenticated, authenticate } from '../../api/api';

const RegistrationForm = () => {
    function auth() {
        if (!isAuthenticated()) {
            authenticate('https://reflectionsprojections.org/auth')
          }
    }
    
    return (
        <>

    <Section>
            <Row>
                <Section.Title>
                    <p>Sign up using</p>
                    <div className={styles3.center} style={{marginLeft: '6em'}}>
                        <a onClick={auth} rel="noopener noreferrer" className={styles3.a}>
                            <i className={`fab fa-github fa-3x ${styles4.icon}`} />
                        </a>
                    </div>
                    
                    <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'grey',
                            height: 2
                        }}
                    />

                    <p>or...</p>
                    <div className={styles3.center}>
                        <a
                            className={styles2.a}
                            href="www.google.com"
                            rel="noopener noreferrer"
                        >
                            <Button className={styles.btnSelect}>
                            <div className={`align-self-middle ${styles2.btnSelectText}`}>
                            Sign up for the R|P mailing list!
                            </div>
                            </Button> 
                        </a>
                    </div>
                    
                    
                </Section.Title>
            </Row>
                 
{/* 
                <Col
                    className={styles3.speakerCardContainer}
                    sm={12}
                    md={6}
                    lg={5}
                >
                    <Section.Title>


                    </Section.Title>
                   
                </Col>
            </Row>
                 */}
    </Section>
    </>
    );
    
};

export default RegistrationForm;