import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';

import Section from '../UIComponents/Section';
import styles from './register.scss';


const Register = () => {
    if (process.browser) {
        return (
            <div className={styles.backdrop}>
                <div className={styles.whiteBox}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        age: '',
                        gender: '',
                        race: '',
                        graduationYear: '',
                        school: '',
                        major: '',
                        interest: '',
                        rpKnowledge: '',
                        attendedBefore: false
                    }}
                    validationSchema={Yup.object().shape({
                        title: Yup.string()
                            .required('Title is required'),
                        firstName: Yup.string()
                            .required('First Name is required'),
                        lastName: Yup.string()
                            .required('Last Name is required'),
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        age: Yup.string()
                            .required('Age is required'),
                        race: Yup.string()
                            .required('Race is required'),
                        gender: Yup.string()
                            .required('Gender is required'),
                        graduationYear: Yup.string()
                            .required('Graduation Year is required'),
                        school: Yup.string()
                            .required('School is required'),
                        major: Yup.string()
                            .required('Major is required'),
                        interest: Yup.string()
                            .required('This field is required'),
                        rpKnowledge: Yup.string()
                            .required('This field is required')
                    })}
                    onSubmit={fields => {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
                >
                    {({ errors, status, touched }) => (
                        <Form className={styles.form}>
                            <Section.Header>
                                <Section.Title>Registration</Section.Title>
                            </Section.Header>
                            <Section.Body>
                                <div className={styles.field}>
                                    <Field name="firstName" placeholder="First Name" type="text" className={styles.inputBox + ' form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                                </div>
                                <div className={styles.field}>
                                    <Field name="lastName" placeholder="Last Name" type="text" className={styles.inputBox + ' form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <Field name="email" placeholder="Email" type="text" className={styles.inputBox + ' form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <Field name="age" placeholder="Age" type="text" className={styles.inputBox + ' form-control' + (errors.age && touched.email ? ' is-invalid' : '')} />
                                    <ErrorMessage name="age" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <label>Gender</label> <br />
                                    <Field name="gender" placeholder="Gender" as="select" className={styles.inputBox + ' form-control' + (errors.gender ? ' is-invalid' : '')}>
                                        <option value=""></option>
                                        <option value="Female">Female</option> {/*TODO: add type in if 'other*/}
                                        <option value="Male">Male</option>
                                        <option value="Nonbinary">Nonbinary</option>
                                        <option value="na">I'd rather not answer</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <label>Race</label> <br />
                                    <Field name="race" placeholder="Race" as="select" className={styles.inputBox + ' form-control' + (errors.gender ? ' is-invalid' : '')}>
                                        <option value=""></option>
                                        <option value="Asian">Asian</option> {/*TODO: add type in if 'other*/}
                                        <option value="Native American">Native American</option>
                                        <option value="Caucasian">Caucasian</option>
                                        <option value="na">I'd rather not answer</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <ErrorMessage name="race" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <label>Graduation Year</label> <br />
                                    <Field name="graduationYear" placeholder="Graduation Year" as="select" className={styles.inputBox + ' form-control' + (errors.graduationYear ? ' is-invalid' : '')}>
                                        <option value=""></option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                    </Field>
                                    <ErrorMessage name="graduationYear" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <label>School</label> <br />
                                    <Field name="school" as="select" className={styles.inputBox + ' form-control' + (errors.school ? ' is-invalid' : '')}>
                                        <option value=""></option>
                                        <option value="UIUC">University of Illinois at Urbana-Champaign</option>
                                        <option value="Other">Other</option>
                                        <option value="NA">N/A</option>
                                    </Field>
                                    <ErrorMessage name="school" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <label>Major</label> <br />
                                    <Field name="major" as="select" className={styles.inputBox + ' form-control' + (errors.major ? ' is-invalid' : '')}>
                                        <option value=""></option>
                                        <option value="CS">Computer Science</option> {/*TODO: add more majors*/}
                                        <option value="Other">Other</option>
                                        <option value="NA">N/A</option>
                                    </Field>
                                    <ErrorMessage name="major" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <label>I'm looking for a</label> <br />
                                    <Field name="interest" placeholder="Position" as="select" className={styles.inputBox + ' form-control' + (errors.interest ? ' is-invalid' : '')}>
                                        <option value=""></option>
                                        <option value="Internship">Internship</option>
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="NotLooking">Not Looking</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <ErrorMessage name="interest" component="div" className="invalid-feedback" />
                                </div>
                                {/* <div className={styles.field}>
                                    <label>What are your skills? </label> <br />
                                    <Field name="skills" placeholder="" type="text" className={styles.inputBox + ' form-control' + (errors.skills ? ' is-invalid' : '')} />
                                    <ErrorMessage name="skills" component="div" className="invalid-feedback" />
                                </div> */}
                                <div className={styles.field}>
                                    <label>How did you find out about Reflections Projections?</label> <br />
                                    {/* TODO: Replace with checkboxes */}
                                    <Field name="rpKnowledge" placeholder="rpKnowledge" as="select" className={styles.inputBox + ' form-control' + (errors.rpKnowledge ? ' is-invalid' : '')}>
                                        <option value=""></option>
                                        <option value="From word of mouth">From word of mouth</option>
                                        <option value="Full-Time">Full-Time</option>
                                        <option value="NotLooking">Not Looking</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <ErrorMessage name="rpKnowledge" component="div" className="invalid-feedback" />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="attendedBefore" className="form-check-label">
                                        <Field type="checkbox" name="attendedBefore" className={'form-check-input'} />
                                        Attended Reflections Projections Before
                                    </label>
                                </div>

                                <div className="form-group">
                                    <a
                                        className={styles.a}
                                        href="/register"
                                    >
                                        <Button className={styles.btn}>
                                            <div className={`align-self-middle ${styles.btnRegisterText}`}>
                                                Submit
                                            </div>
                                        </Button> 
                                    </a>
                                    
                                    <a
                                        className={styles.a}
                                        href="/register"
                                    >
                                        <Button className={styles.btn}>
                                            <div className={`align-self-middle ${styles.btnRegisterText}`}>
                                                Reset
                                            </div>
                                        </Button> 
                                    </a>
                                </div>
                            </Section.Body>
                            
                        </Form>
                    )}
                </Formik>
                </div>
            </div>
        )
      }
      return null; 
        
};

export default Register;


// TODO
// Resume upload, red text, remove scroll bar, material-ui, form width