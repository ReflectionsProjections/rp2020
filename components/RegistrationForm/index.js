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
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    function resetValidation() {
        setValidated(false);
      }

    return (
        <Section>
            <Section.Header>
                <Section.Title>Reflections|Projections 2020 Registration</Section.Title>
            </Section.Header>
            <Section.Body>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="formFirstName">
                            <Form.Label column sm={2}>First Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                  required
                                  type="text" 
                                  placeholder="First Name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid first name.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formLastName">
                            <Form.Label column sm={2}>Last Name</Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                  required
                                  type="text" 
                                  placeholder="Last Name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid last name.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formEmail">
                            <Form.Label column sm={2}>Email</Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                  required
                                  type="email" 
                                  placeholder="Email"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAge">
                            <Form.Label column sm={2}>Age</Form.Label>
                            <Col sm={10}>
                                <Form.Control 
                                  required
                                  type="number" 
                                  placeholder="Age"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid age.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formGender">
                            <Form.Label column sm={2}>Gender</Form.Label>
                            <Col sm={10}>
                                <Form.Control required as="select">
                                    <option selected disabled value="">Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Nonbinary</option>
                                    <option>Other</option>
                                    <option>I'd rather not reply</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid gender.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formRace">
                            {/* <Form.Label column sm={2}>Race</Form.Label> */}
                            <Form.Control required as="select">
                                <option selected disabled value="">Race</option>
                                <option>American Indian or Alaska Native</option>
                                <option>Asian</option>
                                <option>Black or African American</option>
                                <option>Hispanic or Latino</option>
                                <option>Native Hawaiian or Other Pacific Islander</option>
                                <option>White</option>
                                <option>Other</option>
                                <option>I'd rather not reply</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid race.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formGraduation">
                            {/* <Form.Label column sm={2}>Graduation Year</Form.Label> */}
                            <Form.Control required as="select">
                                <option selected disabled value="">Graduation Year</option>
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
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid graduation year.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formSchool">
                            {/* <Form.Label column sm={2}>School</Form.Label> */}
                            <Form.Control required as="select">
                                <option selected disabled value="">University</option>
                                <option>University of Illinois at Urbana-Champaign</option>
                                <option>Purdue</option>
                                <option>University of Chicago</option>
                                <option>University of Michigan at Ann-Arbor</option>
                                <option>University of Wisconsin - Madison</option>
                                <option>Other</option>
                                <option>Not Applicable</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid school.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMajor">
                            {/* <Form.Label column sm={2}>Major</Form.Label> */}
                            <Form.Control required as="select">
                                <option selected disabled value="">Major</option>
                                <option>Computer Science</option>
                                <option>Electrical and Computer Engineering</option>
                                <option>Informational Sciences</option>
                                <option>Other</option>
                                <option>Not Applicable</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid major.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formInterest">
                            {/* <Form.Label column sm={2}>I'm looking for a</Form.Label> */}
                                <Form.Control required as="select">
                                    <option selected disabled value="">I'm looking for a</option>
                                    <option>Internship</option>
                                    <option>Full-Time</option>
                                    <option>Other</option>
                                    <option>Currently not looking</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please select an option.
                                </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formRPKnowledge">
                            <Form.Label>How did you find out about Reflections|Projections (select multiple)</Form.Label>
                            <Form.Control required as="select" multiple>
                                <option>Friends/Family</option>
                                <option>Email/Newsletter</option>
                                <option>Department</option>
                                <option>Courses</option>
                                <option>Slack</option>
                                <option>Previous Attendance</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select how you found out about Reflections|Projections.
                            </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group as={Row} controlId="formHorizontalAttendance">
                            <Col sm={10}>
                            <Form.Check label="Have you attended Reflections|Projections before?" />
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Upload your resume (optional)</Form.Label>
                            <Form.Control
                                id="fileUpload"
                                type="file"
                                accept=".pdf"
                            />
                        </Form.Group> 

                        <Form.Group as={Row}>
                            <Col sm={{ span: 50, offset: 2 }} >
                                <Button type="submit" style={{marginLeft:'2em'}}>Register</Button>
                                <Button type="reset" onClick={resetValidation} style={{marginLeft:'2em'}}>Reset</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Section.Body>
        </Section>
    );
};

export default RegistrationForm;
