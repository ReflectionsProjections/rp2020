import React, { useState } from 'react';
import moment from 'moment';

import { Form, Button, Row, Col } from "react-bootstrap"
import { isMobile } from 'react-device-detect';
import Container from 'react-bootstrap/Container';
import { DAY_FORMAT, TIME_FORMAT, EVENT_TYPE } from '../../constants/events';

import Section from '../../UIComponents/Section';
import UIButtonGroupSelect from '../../UIComponents/Input/UIButtonGroupSelect';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';

const RegistrationForm = () => {
  return (
    <Section>
      <Section.Header>
        <Section.Title>Reflections|Projections 2020 Registration</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
            <Form>
                <Form.Group as={Row} controlId="formFirstName">
                    <Form.Label column sm={2}>First Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="First Name"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formLastName">
                    <Form.Label column sm={2}>Last Name</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Last Name"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formEmail">
                    <Form.Label column sm={2}>Email</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formAge">
                    <Form.Label column sm={2}>Age</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" placeholder="Age"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formGender">
                    <Form.Label column sm={2}>Gender</Form.Label>
                    <Col sm={10}>
                        <Form.Control as="select">
                            <option selected disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Nonbinary</option>
                            <option>Other</option>
                            <option>I'd rather not reply</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group controlId="formRace">
                    {/* <Form.Label column sm={2}>Race</Form.Label> */}
                    <Form.Control as="select">
                        <option selected disabled>Race</option>
                        <option>American Indian or Alaska Native</option>
                        <option>Asian</option>
                        <option>Black or African American</option>
                        <option>Hispanic or Latino</option>
                        <option>Native Hawaiian or Other Pacific Islander</option>
                        <option>White</option>
                        <option>Other</option>
                        <option>I'd rather not reply</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGraduation">
                    {/* <Form.Label column sm={2}>Graduation Year</Form.Label> */}
                    <Form.Control as="select">
                        <option selected disabled>Graduation Year</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>Other</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSchool">
                    {/* <Form.Label column sm={2}>School</Form.Label> */}
                    <Form.Control as="select">
                        <option selected disabled>University</option>
                        <option>University of Illinois at Urbana-Champaign</option>
                        <option>Purdue</option>
                        <option>University of Chicago</option>
                        <option>University of Michigan at Ann-Arbor</option>
                        <option>University of Wisconsin - Madison</option>
                        <option>Other</option>
                        <option>Not Applicable</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formMajor">
                    {/* <Form.Label column sm={2}>Major</Form.Label> */}
                    <Form.Control as="select">
                        <option selected disabled>Major</option>
                        <option>Computer Science</option>
                        <option>Electrical and Computer Engineering</option>
                        <option>Informational Sciences</option>
                        <option>Other</option>
                        <option>Not Applicable</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formInterest">
                    {/* <Form.Label column sm={2}>I'm looking for a</Form.Label> */}
                        <Form.Control as="select">
                            <option selected disabled>I'm looking for a</option>
                            <option>Internship</option>
                            <option>Full-Time</option>
                            <option>Other</option>
                            <option>Currently not looking</option>
                        </Form.Control>
                </Form.Group>

                <Form.Group controlId="formRPKnowledge">
                    <Form.Label>How did you find out about Reflections Projections (select multiple)</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>Friends/Family</option>
                        <option>Email/Newsletter</option>
                        <option>Department</option>
                        <option>Courses</option>
                        <option>Slack</option>
                        <option>Previous Attendance</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group as={Row} controlId="formHorizontalAttendance">
                    <Col sm={10}>
                    <Form.Check label="Have you attended Reflections|Projections before?" />
                    </Col>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        id="fileUpload"
                        type="file"
                        accept=".pdf"
                    />
                </Form.Group> 

                <Form.Group as={Row}>
                    <Col sm={{ span: 50, offset: 2 }}>
                        <Button type="submit">Register</Button>
                        <Button type="reset">Reset</Button>
                    </Col>
                    
                </Form.Group>
            </Form>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default RegistrationForm;
