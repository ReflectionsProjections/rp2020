import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { Form, Button, Row, Col } from "react-bootstrap"
import { isMobile } from 'react-device-detect';
import Container from 'react-bootstrap/Container';
import { DAY_FORMAT, TIME_FORMAT, EVENT_TYPE } from '../../constants/events';

import styles from '../../pages/index.scss';
import styles2 from '../Navbar/components/NavButton.scss'; 
import styles3 from '../Speaker/Speaker.scss';

import Section from '../../UIComponents/Section';
import UIButtonGroupSelect from '../../UIComponents/Input/UIButtonGroupSelect';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';
import { getRegistration, register, uploadFile } from '../../api/api';
import { getQueryObject } from '../../lib/path';
import axios from 'axios';

const RegistrationForm = () => {
    return (
        <>

    <Section>
        <Section.Body>
            <Row>
                <Col
                    className={styles3.speakerCardContainer}
                    sm={12}
                    md={10}
                    lg={5}
                >
                    <Section.Title>


                    <a
                    className={styles2.a}
                    href="/register"
                    rel="noopener noreferrer" 
                    >
                        <Button className={styles2.btnSelect}>
                        {/* ${'registered=true' in window.location.pathname ? styles.btnRegistered : ''} */}
                        <div className={`align-self-middle ${styles2.btnSelectText}`}>
                            Register using GitHub!
                        </div>
                        </Button> 
                    </a>
                    </Section.Title>
                    
                </Col>
                <Col
                    className={styles3.speakerCardContainer}
                    sm={12}
                    md={6}
                    lg={5}
                >
                    <Section.Title>

                    <a
                        className={styles2.a}
                        href="www.google.com"
                        rel="noopener noreferrer"
                    >
                        <Button className={styles.btnSelect}>
                        {/* ${'registered=true' in window.location.pathname ? styles.btnRegistered : ''} */}
                        <div className={`align-self-middle ${styles2.btnSelectText}`}>
                        Sign up for the R|P mailing list!
                        </div>
                        </Button> 
                    </a>
                    </Section.Title>
                   
                </Col>
            </Row>
                
        </Section.Body>
    </Section>
    </>
    );
    
};

export default RegistrationForm;