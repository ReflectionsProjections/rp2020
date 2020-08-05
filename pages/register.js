import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    if (process.browser) {
        return (
            <Formik
                initialValues={{
                    title: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
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
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required'),
                    acceptTerms: Yup.bool()
                        .oneOf([true], 'Accept Ts & Cs is required')
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
            >
                {({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group col-5">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-5">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <Field name="age" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="age" component="div" className="invalid-feedback" />
                        </div>
                        <div class="form-group col">
                            <label>Gender</label>
                            <Field name="gender" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                <option value="Female">Female</option> {/*TODO: add type in if 'other*/}
                                <option value="Male">Male</option>
                                <option value="Nonbinary">Nonbinary</option>
                                <option value="Other">Other</option>
                            </Field>
                            <ErrorMessage name="major" component="div" className="invalid-feedback" />
                        </div>
                        <div class="form-group col">
                            <label>Graduation Year</label>
                            <Field name="graduation_year" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
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
                        <div class="form-group col">
                            <label>School</label>
                            <Field name="school" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                <option value="UIUC">University of Illinois at Urbana-Champaign</option>
                                <option value="Other">Other</option>
                                <option value="NA">N/A</option>
                            </Field>
                            <ErrorMessage name="school" component="div" className="invalid-feedback" />
                        </div>
                        <div class="form-group col">
                            <label>Major</label>
                            <Field name="major" as="select" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')}>
                                <option value="CS">Computer Science</option> {/*TODO: add more majors*/}
                                <option value="Other">Other</option>
                                <option value="NA">N/A</option>
                            </Field>
                            <ErrorMessage name="major" component="div" className="invalid-feedback" />
                        </div>
                        {/*TODO: interests checkbox, prior attendance checkbox, skills? rpknowledge? createdat, updatedat*/}

                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-group form-check">
                            <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
      }
      return null; 
        
};

export default Register;
