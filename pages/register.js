import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
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
                        graduationYear: '',
                        school: '',
                        major: '',
                        acceptTerms: false
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
                        acceptTerms: Yup.bool()
                            .oneOf([true], 'Accept Ts & Cs is required')
                    })}
                    onSubmit={fields => {
                        alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    }}
                >
                    {({ errors, status, touched }) => (
                        <Form className={styles.form}>
                            <h3>Reflections|Projections 2020 Registration</h3>
                            <div className={styles.field}>
                                <Field name="firstName" placeholder="First Name" type="text" className={styles.inputBox + ' form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
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
                                <Field name="age" placeholder="Age" type="text" className={styles.inputBox + ' form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="age" component="div" className="invalid-feedback" />
                            </div>
                            <div className={styles.field}>
                                <label>Gender</label> <br />
                                <Field name="gender" placeholder="Gender" as="select" className={styles.inputBox + ' form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="Female">Female</option> {/*TODO: add type in if 'other*/}
                                    <option value="Male">Male</option>
                                    <option value="Nonbinary">Nonbinary</option>
                                    <option value="Other">Other</option>
                                </Field>
                                <ErrorMessage name="major" component="div" className="invalid-feedback" />
                            </div>
                            <div className={styles.field}>
                                <label>Graduation Year</label> <br />
                                <Field name="graduation_year" placeholder="Graduation Year" as="select" className={styles.inputBox + ' form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
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
                                <ErrorMessage name="graduation_year" component="div" className="invalid-feedback" />
                            </div>
                            <div className={styles.field}>
                                <label>School</label> <br />
                                <Field name="school" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="UIUC">University of Illinois at Urbana-Champaign</option>
                                    <option value="Other">Other</option>
                                    <option value="NA">N/A</option>
                                </Field>
                                <ErrorMessage name="school" component="div" className="invalid-feedback" />
                            </div>
                            <div className={styles.field}>
                                <label>Major</label> <br />
                                <Field name="major" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="CS">Computer Science</option> {/*TODO: add more majors*/}
                                    <option value="Other">Other</option>
                                    <option value="NA">N/A</option>
                                </Field>
                                <ErrorMessage name="major" component="div" className="invalid-feedback" />
                            </div>
                            {/*TODO: interests checkbox, prior attendance checkbox, skills? rpknowledge? createdat, updatedat*/}

                            <div className={styles.field}>
                                <label htmlFor="acceptTerms" className="form-check-label">
                                    <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                                    Accept Terms & Conditions
                                </label>
                                <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
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
