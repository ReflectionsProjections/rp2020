import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Layout from '../components/Util/Layout';
import Footer from '../components/Footer';
import Section from '../components/Util/Section';

import { fetchRegistrationConfig } from '../api/client';

import styles from './registration.scss';

const FormSection = ({ title, children }) => {
  return (
    <div className={styles.formSection}>
      <Row>
        <Col md={12}>
          <h3>{title}</h3>
        </Col>
      </Row>
      {children}
    </div>
  );
};

const Registration = ({ formOptions }) => {
  const {
    genders,
    years,
    shirts,
    diets,
    jobtype,
    proftype,
    majors,
    schools,
    heardFrom
  } = formOptions;
  return (
    <>
      <Layout>
        <div className={styles.topPadding}>
          <Section>
            <Section.Title>Conference Registration</Section.Title>
            <Section.Body>
              <Container>
                <Form>
                  <FormSection title="basic information">
                    <Form.Group>
                      <Form.Label>first name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="first name"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>last name</Form.Label>
                      <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>phone number</Form.Label>
                      <Form.Control type="text" placeholder="xxx-xxx-xxxx" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>gender</Form.Label>
                      <Form.Control as="select">
                        {genders ? (
                          genders.map(gender => (
                            <option key={gender}>{gender}</option>
                          ))
                        ) : (
                          <option>Genders</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                  </FormSection>
                  <FormSection title="school">
                    <Form.Group>
                      <Form.Label>academic year</Form.Label>
                      <Form.Control as="select">
                        {years ? (
                          years.map(year => <option key={year}>{year}</option>)
                        ) : (
                          <option>Years</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>major</Form.Label>
                      <Form.Control as="select">
                        {majors ? (
                          majors.map(major => (
                            <option key={major}>{major}</option>
                          ))
                        ) : (
                          <option>major</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>school</Form.Label>
                      <Form.Control as="select">
                        {schools ? (
                          schools.map(school => (
                            <option key={school}>{school}</option>
                          ))
                        ) : (
                          <option>School</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                  </FormSection>
                  <FormSection title="logistics">
                    <Form.Group>
                      <Form.Label>transportation</Form.Label>
                      <Form.Control type="text" placeholder="Transportation" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>shirt size</Form.Label>
                      <Form.Control as="select">
                        {shirts ? (
                          shirts.map(shirt => (
                            <option key={shirt}>{shirt}</option>
                          ))
                        ) : (
                          <option>Shirts</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>dietary restrictions</Form.Label>
                      <Form.Control as="select">
                        {diets ? (
                          diets.map(diet => <option key={diet}>{diet}</option>)
                        ) : (
                          <option>Dietary Restrictions</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                  </FormSection>
                  <FormSection title="interests">
                    <Form.Group>
                      <Form.Label>job interests</Form.Label>
                      <Form.Control as="select">
                        {jobtype ? (
                          jobtype.map(jobInterest => (
                            <option key={jobInterest}>{jobInterest}</option>
                          ))
                        ) : (
                          <option>Job Interest</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>professional interests</Form.Label>
                      <Form.Control as="select">
                        {proftype ? (
                          proftype.map(professionalInterest => (
                            <option key={professionalInterest}>
                              {professionalInterest}
                            </option>
                          ))
                        ) : (
                          <option>Professional Interest</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                  </FormSection>
                  <FormSection title="feedback">
                    <Form.Group>
                      <Form.Label>where did you hear about us?</Form.Label>
                      <Form.Control as="select">
                        {heardFrom ? (
                          heardFrom.map(from => (
                            <option key={from}>{from}</option>
                          ))
                        ) : (
                          <option>Heard From</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                  </FormSection>
                  <Button type="submit">Submit form</Button>
                </Form>
              </Container>
            </Section.Body>
          </Section>
          <Footer />
        </div>
      </Layout>
    </>
  );
};

Registration.getInitialProps = async () => {
  const registration = await fetchRegistrationConfig();
  return {
    formOptions: registration.config
  };
};

export default Registration;
