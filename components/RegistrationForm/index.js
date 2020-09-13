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
import axios from 'axios';



const RegistrationForm = () => {
    const [validated, setValidated] = useState(false);
    const [previousAttendance, setPreviousAttendance] = useState(true);
    const [schoolSelected, setSchoolSelected] = useState(""); 
    const [otherSchool, setOtherSchool] = useState(""); 

    let query = {};
    if (process.browser) {
        query = getQueryObject(window);
        console.log(query)
    }

    function autofill(response) {
        let firstName = document.querySelector("#firstnamefield");
        // firstName.value = response.data.
        let lastName = document.querySelector("#lastnamefield");
        let email = document.querySelector("#emailfield");
        let gender = document.querySelector("#genderfield");
        let race = document.querySelector("#firstname");
        let graduationYear = document.querySelector("#graduationfield");
        let school = document.querySelector("#schoolfield");
        let major = document.querySelector("#majorfield");
        let interest = document.querySelector("#interestfield");
        let rpKnowledge = document.querySelector("#rpknowledgefield");
        let attendance = document.querySelector("#attendancefield");
    }

    useEffect(() => {
        if (sessionStorage.getItem('successfulRegistration') === 'true') {
            // window.location.replace('http://localhost:3000/?registered=true')
            window.location.replace('https://reflectionsprojections.org/?registered=true')
            axios.get('registration/').then(function (response) {
                autofill(response);
            }).catch(function (error) {
                console.log(error);
            })
        }
        
    }, []);

    const handleSchoolChange = (event) => {
        setSchoolSelected(event.target.value); 
    }

    const handleOtherSchoolChange = (event) => {
        setOtherSchool(event.target.value); 
    }

    const setData = (form) => {
        return {
            "firstName": form.formFirstName.value,
            "lastName": form.formLastName.value,
            "email": form.formEmail.value,
            "age": 100,
            "gender": form.formGender.value,
            "race": form.formRace.value,
            "graduationYear": parseInt(form.formGraduation.value),
            "school": form.formSchool.value === "Other" ? otherSchool : form.formSchool.value,
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
            alert("Successfully registered!");
        }

        setValidated(true);
        

        if (form.fileUpload.value != '') {
            uploadFile(form.fileUpload.value, 'resume')
        }
    };

    // const uploadResume = (event) => {
    //     if (event.target.value == '') {
    //         console.log('invalid value')
    //     } else {
    //         uploadFile(event.target.value, 'resume')
    //     }
    // }

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
                                    id="firstnamefield"
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
                                    id="lastnamefield"
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
                                    id="emailfield"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formGraduation">
                                <Form.Control required as="select" id="graduationfield">
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

                        <Form.Group as={Row} controlId="formSchool">
                                <Form.Control required as="select" id="schoolfield" onChange={handleSchoolChange}>
                                    <option selected disabled value="">University</option>
                                    <option>University of Illinois at Urbana-Champaign</option>
                                    <option>University of Illinois at Chicago</option>
                                    <option>University of Illinois at Springfield</option>
                                    <option>Purdue</option>
                                    <option>Indiana University</option>
                                    <option>University of Chicago</option>
                                    <option>University of Michigan at Ann-Arbor</option>
                                    <option>University of Wisconsin - Madison</option>
                                    <option>Rutgers University</option>
                                    <option>Other</option>
                                    <option>Not Applicable</option>
                                </Form.Control>

                                {schoolSelected === 'Other' && 
                                <Form.Group as={Row} controlId="otherSchool">
                                    <Col>
                                        <Form.Control 
                                            required
                                            type="text" 
                                            placeholder="Type your university name here"
                                            onChange={handleOtherSchoolChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid school. 
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                            }
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid school.
                            </Form.Control.Feedback>
                            
                        </Form.Group>

                        <Form.Group as={Row} controlId="formMajor">
                            <Form.Control required as="select" id="majorfield">
                                <option selected disabled value="">Major</option>
                                <option>Computer Science</option>
                                <option>Electrical and Computer Engineering</option>
                                <option>Information Science</option>
                                <option>Other</option>
                                <option>Not Applicable</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid major.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formInterest">
                            <Form.Control required as="select" id="interestfield">
                                <option selected disabled value="">I'm looking for a: </option>
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
                            <Form.Label>How did you find out about Reflections | Projections?</Form.Label>
                            <Form.Control required as="select" id="rpknowledgefield" multiple>
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
                        
                        {/*<Form.Group as={Row} controlId="formHorizontalAttendance">
                            <Col sm={10}>
                            <Form.Check label="Have you attended Reflections | Projections before?" onChange={checkboxFunction} />
                            </Col>
                        </Form.Group>*/}

                        <Form.Group controlId="formAttendance">
                            {/* <Form.Label column sm={2}>Race</Form.Label> */}
                            <Form.Control required as="select" id="attendancefield">
                                <option selected disabled value="">Have you attended RP in the past?</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid answer
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formGender">
                                <Form.Control as="select" id="genderfield">
                                    <option selected disabled value="">Gender (Optional)</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Nonbinary</option>
                                    <option>Other</option>
                                    <option>I'd rather not reply</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid gender.
                                </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formRace">
                                <Form.Control as="select" id="racefield">
                                    <option selected disabled value="">Race (Optional)</option>
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


                        <Form.Group>
                            <Form.Label>Upload your resume (optional)</Form.Label>
                            <Form.Control
                                id="fileUpload"
                                type="file"
                                accept=".pdf"
                                // onChange={uploadResume}
                            />
                        </Form.Group> 

                        <Form.Group as={Row}>
                            <Col />
                            <Col >
                                <Button type="submit" style={{marginLeft:'2em'}}>Register</Button>
                                <Button type="reset" onClick={resetValidation} style={{marginLeft:'2em', color:'#FF6347'}}>Reset</Button>
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
