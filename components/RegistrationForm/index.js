import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { Form, Button, Row, Col } from "react-bootstrap"
import { isMobile } from 'react-device-detect';
import Container from 'react-bootstrap/Container';
import { DAY_FORMAT, TIME_FORMAT, EVENT_TYPE } from '../../constants/events';

import Section from '../../UIComponents/Section';
import UIButtonGroupSelect from '../../UIComponents/Input/UIButtonGroupSelect';
import { UITimeline, UITimelineEvent } from '../../UIComponents/UITimeline';
import { getRegistration, register, uploadFile } from '../../api/api';
import { getQueryObject } from '../../lib/path';

const RegistrationForm = () => {
    const [validated, setValidated] = useState(false);
    const [previousAttendance, setPreviousAttendance] = useState(true);

    let query = {};
    if (process.browser) {
        query = getQueryObject(window);
        console.log(query)
    }

    useEffect(() => {
        if (sessionStorage.getItem('successfulRegistration') === 'true') {
            //window.location.replace('http://localhost:3000/?registered=true')
            window.location.replace('https://reflectionsprojections.org/?registered=true')
        }
    });

    const setData = (form) => {
        return {
            "firstName": form.formFirstName.value,
            "lastName": form.formLastName.value,
            "email": form.formEmail.value,
            "age": 100,
            "gender": form.formGender.value,
            "race": form.formRace.value,
            "graduationYear": parseInt(form.formGraduation.value),
            "school": form.formSchool.value,
            "major": form.formMajor.value,
            "interests": form.formInterest.value,
            "rpKnowledge": form.formRPKnowledge.value,
            "priorAttendance": true
        };
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            const registrationData = JSON.stringify(setData(form))

            let isEditing = false
    
            if (getRegistration('attendee') !== null) {
                isEditing = true
            }
            register(isEditing, 'attendee', registrationData)
        }

        setValidated(true);

        /*if (form.fileUpload.value != '') {
            uploadFile(form.fileUpload.value, 'resume')
        }*/
    };

    const uploadResume = (event) => {
        if (event.target.value == '') {
            console.log('invalid value')
        }
        uploadFile(event.target.value, 'resume')
    }

    function resetValidation() {
        setValidated(false);
    }
    const change = (event) => {
        const form = event.currentTarget
    }


    return (
        <Section>
            <Section.Header>
                <Section.Title>Reflections | Projections 2020 Registration</Section.Title>
            </Section.Header>
            <Section.Body>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} onChange={change}>
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
                                <option>University of Illinois at Chicago</option>
                                <option>University of Illinois at Springfield</option>
                                <option>Purdue</option>
                                <option>Indiana University</option>
                                <option>University of Chicago</option>
                                <option>University of Michigan at Ann-Arbor</option>
                                <option>University of Wisconsin - Madison</option>
                                <option>Rutgers</option>
                                <option>UC Berkeley</option>
                                <option>Carnegie Mellon University</option>
                                <option>Stanford</option>
                                <option>Cornell</option>
                                <option>University of Waterloo</option>
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
                                <option>Information Science</option>
                                <option>Other</option>
                                <option>Not Applicable</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid major, or select other.
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
                            <Form.Label>How did you find out about Reflections | Projections</Form.Label>
                            <Form.Control required as="select" multiple>
                                <option>Friends/Family</option>
                                <option>Email/Newsletter</option>
                                <option>Department</option>
                                <option>Courses</option>
                                <option>Slack</option>
                                <option>Previous Attendance</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please select how you found out about Reflections | Projections.
                            </Form.Control.Feedback>
                        </Form.Group>
                        

                        <Form.Group controlId="formAttendance">
                            {/* <Form.Label column sm={2}>Race</Form.Label> */}
                            <Form.Control required as="select">
                                <option selected disabled value="">Have you attended RP in the past?</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid answer
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formGender">
                            <Form.Control required as="select">
                                <option selected disabled value="">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Nonbinary</option>
                                <option>Other</option>
                                <option>I'd rather not reply</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid option.
                            </Form.Control.Feedback>
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
                                Please provide a valid option.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Upload your resume (optional) : You can update this at a later time</Form.Label>
                            <Form.Control
                                id="fileUpload"
                                type="file"
                                accept=".pdf"
                                onChange={uploadResume}
                            />
                        </Form.Group> 

                        <Form.Group as={Row}>
                            <Col />
                            <Col className="text-center" >
                                <Button type="submit">Register</Button>
                            </Col>
                            <Col />
                        </Form.Group>
                    </Form>
                </Container>
            </Section.Body>
        </Section>
    );
    
};

export default RegistrationForm;
