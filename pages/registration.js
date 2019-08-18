import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// import UISelect from '../UIComponents/'
import Layout from '../UIComponents/Layout';
import Footer from '../components/Footer';
import Section from '../UIComponents/Section';

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

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Layout>
        <div className={styles.topPadding} onSubmit={handleSubmit}>
          <Section>
            <Section.Title>Conference Registration</Section.Title>
            <Section.Body>
              <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <FormSection title="basic information">
                    <Form.Group>
                      <Form.Label>first name</Form.Label>
                      <Form.Control
                        placeholder="first name"
                        required
                        type="text"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your first name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>last name</Form.Label>
                      <Form.Control
                        placeholder="Last name"
                        required
                        type="text"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your last name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>phone number</Form.Label>
                      <Form.Control
                        placeholder="xxx-xxx-xxxx"
                        required
                        type="text"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>email</Form.Label>
                      <Form.Control
                        placeholder="Enter email"
                        required
                        type="email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>gender</Form.Label>
                      <Form.Control as="select" required>
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
                      <Form.Control as="select" required>
                        {years ? (
                          years.map(year => <option key={year}>{year}</option>)
                        ) : (
                          <option>Years</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>major</Form.Label>
                      <Form.Control as="select" required>
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
                      <Form.Control as="select" required>
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
                      <Form.Control as="select" required>
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
                      <Form.Control as="select" required>
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
                      <Form.Control as="select" required>
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
                      <Form.Control as="select" required>
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
                      <Form.Control as="select" required>
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
