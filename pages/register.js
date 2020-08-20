import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap"

import styles from './register.scss';

const Register = () => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.whiteBox}>
                <Form className={styles.form}>
                    <Form.Group as={Row} controlId="formFirstName">
                        {/* <Form.Label column sm={2}>First Name</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="First Name" className={styles.inputBox}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formLastName">
                        {/* <Form.Label column sm={2}>Last Name</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Last Name" className={styles.inputBox} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formEmail">
                        {/* <Form.Label column sm={2}>Email</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" className={styles.inputBox} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formAge">
                        {/* <Form.Label column sm={2}>Age</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="Age" className={styles.inputBox} />
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formGender">
                        {/* <Form.Label column sm={2}>Gender</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control as="select" className={styles.inputBox}>
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
                        <Col sm={10}>
                            <Form.Control as="select" className={styles.inputBox}>
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
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formGraduation">
                        {/* <Form.Label column sm={2}>Graduation Year</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control as="select" className={styles.inputBox}>
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
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formSchool">
                        {/* <Form.Label column sm={2}>School</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control as="select" className={styles.inputBox}>
                                <option selected disabled>University</option>
                                <option>University of Illinois at Urbana-Champaign</option>
                                <option>Purdue</option>
                                <option>University of Chicago</option>
                                <option>University of Michigan at Ann-Arbor</option>
                                <option>University of Wisconsin - Madison</option>
                                <option>Other</option>
                                <option>Not Applicable</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formMajor">
                        {/* <Form.Label column sm={2}>Major</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control as="select" className={styles.inputBox}>
                                <option selected disabled>Major</option>
                                <option>Computer Science</option>
                                <option>Electrical and Computer Engineering</option>
                                <option>Informational Sciences</option>
                                <option>Other</option>
                                <option>Not Applicable</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formInterest">
                        {/* <Form.Label column sm={2}>I'm looking for a</Form.Label> */}
                        <Col sm={10}>
                            <Form.Control as="select" className={styles.inputBox}>
                                <option selected disabled>I'm looking for a</option>
                                <option>Internship</option>
                                <option>Full-Time</option>
                                <option>Other</option>
                                <option>Currently not looking</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formRPKnowledge">
                        <Form.Label>How did you find out about Reflections Projections (select multiple)</Form.Label>
                        <Form.Control as="select" multiple className={styles.inputBox}>
                            <option>Friends/Family</option>
                            <option>Email/Newsletter</option>
                            <option>Department</option>
                            <option>Courses</option>
                            <option>Slack</option>
                            <option>Previous Attendance</option>
                        </Form.Control>
                    </Form.Group>
                    
                    <Form.Group as={Row} controlId="formHorizontalAttendance">
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Have you attended Reflections|Projections before?" />
                        </Col>
                    </Form.Group>

                    {/* <Form.Group>
                        <Form.File id="resumeFile" label="Resume" />
                    </Form.Group> */}

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" className={styles.btn}>Register</Button>
                        <Button type="reset" className={styles.btn}>Reset</Button>
                        </Col>
                        
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};

export default Register;