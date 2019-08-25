import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { REGISTRATION_FIELDS } from '../constants/registration';

import UISuggestiveSelect from '../UIComponents/Input/UISuggestiveSelect';
import Layout from '../UIComponents/Layout';
import Footer from '../components/Footer';
import Section from '../UIComponents/Section';

import { fetchRegistrationConfig } from '../api/client';

import styles from './register.scss';

const createOptions = arr => {
  if (arr === undefined) {
    return <option key="loading">loading...</option>;
  }
  return [
    <option key="default">Select an option</option>,
    ...arr.map(option => <option key={option}>{option}</option>)
  ];
};

const FormSection = ({ title, children }) => {
  return (
    <div className="pb-4">
      <Row>
        <Col md={12}>
          <h3>{title}</h3>
        </Col>
      </Row>
      {children}
    </div>
  );
};

const Registration = () => {
  /*
   *  Configure Registration Form
   */
  const [hasFetched, setHasFetched] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formOptions, setFormOptions] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      const registrationConfig = await fetchRegistrationConfig();
      setFormOptions(registrationConfig);
      setIsLoaded(true);
    };
    if (!hasFetched) {
      setHasFetched(true);
      fetchConfig();
    }
  });

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
  } = formOptions.config || {};

  /*
   *  Define Registration Fields
   */
  const [userInput, setUserInput] = useState({
    /* Basic Information */
    [REGISTRATION_FIELDS.FIRST_NAME]: '',
    [REGISTRATION_FIELDS.LAST_NAME]: '',
    [REGISTRATION_FIELDS.EMAIL]: '',
    [REGISTRATION_FIELDS.GENDER]: '',
    /* School */
    [REGISTRATION_FIELDS.ACADEMIC_YEAR]: '',
    [REGISTRATION_FIELDS.MAJOR]: [],
    [REGISTRATION_FIELDS.SCHOOL]: [],
    /* Logistics */
    [REGISTRATION_FIELDS.TRANSPORTATION]: '',
    [REGISTRATION_FIELDS.SHIRT_SIZE]: '',
    [REGISTRATION_FIELDS.DIETARY_RESTRICTIONS]: '',
    /* Interests */
    [REGISTRATION_FIELDS.JOB_INTERESTS]: [],
    [REGISTRATION_FIELDS.PROFESSIONAL_INTERESTS]: [],
    /* Feedback */
    [REGISTRATION_FIELDS.LEAD_SOURCE]: ''
  });

  /*
   *  Handle Form Validation
   */
  const isInputValid = (field, value) => {
    switch (field) {
      case REGISTRATION_FIELDS.FIRST_NAME:
      case REGISTRATION_FIELDS.LAST_NAME:
      case REGISTRATION_FIELDS.TRANSPORTATION: {
        if (value.length > 0) {
          return true;
        }
        break;
      }
      case REGISTRATION_FIELDS.EMAIL: {
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
      }
      case REGISTRATION_FIELDS.GENDER:
      case REGISTRATION_FIELDS.ACADEMIC_YEAR:
      case REGISTRATION_FIELDS.SHIRT_SIZE:
      case REGISTRATION_FIELDS.DIETARY_RESTRICTIONS:
      case REGISTRATION_FIELDS.JOB_INTERESTS:
      case REGISTRATION_FIELDS.PROFESSIONAL_INTERESTS: {
        if (value !== 'Select an option' && value !== 'loading...') {
          return true;
        }
        break;
      }

      default: {
        return false;
      }
    }
    return false;
  };
  const [validated, setValidated] = useState(false);
  const [userInputValid, setUserInputValid] = useState({
    /* Basic Information */
    [REGISTRATION_FIELDS.FIRST_NAME]: false,
    [REGISTRATION_FIELDS.LAST_NAME]: false,
    [REGISTRATION_FIELDS.EMAIL]: false,
    [REGISTRATION_FIELDS.GENDER]: false,
    /* School */
    [REGISTRATION_FIELDS.ACADEMIC_YEAR]: false,
    [REGISTRATION_FIELDS.MAJOR]: false,
    [REGISTRATION_FIELDS.SCHOOL]: false,
    /* Logistics */
    [REGISTRATION_FIELDS.TRANSPORTATION]: false,
    [REGISTRATION_FIELDS.SHIRT_SIZE]: false,
    [REGISTRATION_FIELDS.DIETARY_RESTRICTIONS]: false,
    /* Interests */
    [REGISTRATION_FIELDS.JOB_INTERESTS]: false,
    [REGISTRATION_FIELDS.PROFESSIONAL_INTERESTS]: false,
    /* Feedback */
    [REGISTRATION_FIELDS.LEAD_SOURCE]: false
  });

  /*
   * Handle Form Submission
   */

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(userInput)
    // const form = e.currentTarget;
    // if (false) {
    //   e.stopPropagation();
    // }

    setValidated(true);
  };

  /*
   *  Handle Form Changes
   */
  const makeHandleBasicChange = field => {
    return e => {
      setUserInputValid({
        ...userInputValid,
        [field]: isInputValid(field, e.target.value)
      });
      setUserInput({
        ...userInput,
        [field]: e.target.value
      });
    };
  };
  const makeHandleSelectChange = field => {
    return selected => {
      setUserInput({
        ...userInput,
        [field]: selected
      });
    };
  };

  /*
   *  Render Form
   */
  const renderForm = () => (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <FormSection title="basic information">
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>first name</Form.Label>
              <Form.Control
                onChange={makeHandleBasicChange(REGISTRATION_FIELDS.FIRST_NAME)}
                value={userInput[REGISTRATION_FIELDS.FIRST_NAME]}
                placeholder="first name"
                isValid={userInputValid[REGISTRATION_FIELDS.FIRST_NAME]}
                required
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your first name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>last name</Form.Label>
              <Form.Control
                onChange={makeHandleBasicChange(REGISTRATION_FIELDS.LAST_NAME)}
                value={userInput[REGISTRATION_FIELDS.LAST_NAME]}
                placeholder="Last name"
                isValid={userInputValid[REGISTRATION_FIELDS.LAST_NAME]}
                required
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your last name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>email</Form.Label>
          <Form.Control
            onChange={makeHandleBasicChange(REGISTRATION_FIELDS.EMAIL)}
            value={userInput[REGISTRATION_FIELDS.EMAIL]}
            placeholder="Enter email"
            isValid={userInputValid[REGISTRATION_FIELDS.EMAIL]}
            required
            type="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>gender</Form.Label>
          <Form.Control
            as="select"
            onChange={makeHandleBasicChange(REGISTRATION_FIELDS.GENDER)}
            value={userInput[REGISTRATION_FIELDS.GENDER]}
            isValid={userInputValid[REGISTRATION_FIELDS.GENDER]}
            required
          >
            {createOptions(genders)}
          </Form.Control>
        </Form.Group>
      </FormSection>
      <FormSection title="school">
        <Form.Group>
          <Form.Label>academic year</Form.Label>
          <Form.Control
            as="select"
            onChange={makeHandleBasicChange(REGISTRATION_FIELDS.ACADEMIC_YEAR)}
            value={userInput[REGISTRATION_FIELDS.ACADEMIC_YEAR]}
            isValid={userInputValid[REGISTRATION_FIELDS.ACADEMIC_YEAR]}
            required
          >
            {createOptions(years)}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>major</Form.Label>
          <UISuggestiveSelect
            id="major"
            onChange={makeHandleSelectChange(REGISTRATION_FIELDS.MAJOR)}
            selected={userInput[REGISTRATION_FIELDS.MAJOR]}
            isValid={userInputValid[REGISTRATION_FIELDS.MAJOR]}
            options={majors || []}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>school</Form.Label>
          <UISuggestiveSelect
            id="school"
            onChange={makeHandleSelectChange(REGISTRATION_FIELDS.SCHOOL)}
            selected={userInput[REGISTRATION_FIELDS.SCHOOL]}
            isValid={userInputValid[REGISTRATION_FIELDS.SCHOOL]}
            options={schools || []}
          />
        </Form.Group>
      </FormSection>
      <FormSection title="logistics">
        <Form.Group>
          <Form.Label>transportation</Form.Label>
          <Form.Control
            onChange={makeHandleBasicChange(REGISTRATION_FIELDS.TRANSPORTATION)}
            value={userInput[REGISTRATION_FIELDS.TRANSPORTATION]}
            type="text"
            placeholder="Transportation"
            isValid={userInputValid[REGISTRATION_FIELDS.TRANSPORTATION]}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>shirt size</Form.Label>
          <Form.Control
            as="select"
            isValid={userInputValid[REGISTRATION_FIELDS.SHIRT_SIZE]}
            required
          >
            {createOptions(shirts)}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>dietary restrictions</Form.Label>
          <Form.Control
            as="select"
            isValid={userInputValid[REGISTRATION_FIELDS.DIETARY_RESTRICTIONS]}
            required
          >
            {createOptions(diets)}
          </Form.Control>
        </Form.Group>
      </FormSection>
      <FormSection title="interests">
        <Form.Group>
          <Form.Label>job interests</Form.Label>
          <UISuggestiveSelect
            id="jobInterests"
            isValid={userInputValid[REGISTRATION_FIELDS.JOB_INTERESTS]}
            options={jobtype || []}
            onChange={makeHandleSelectChange(REGISTRATION_FIELDS.JOB_INTERESTS)}
            selected={userInput[REGISTRATION_FIELDS.JOB_INTERESTS]}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>professional interests</Form.Label>
          <UISuggestiveSelect
            id="professionalInterests"
            options={proftype || []}
            isValid={userInputValid[REGISTRATION_FIELDS.PROFESSIONAL_INTERESTS]}
            onChange={makeHandleSelectChange(
              REGISTRATION_FIELDS.PROFESSIONAL_INTERESTS
            )}
            selected={userInput[REGISTRATION_FIELDS.PROFESSIONAL_INTERESTS]}
          />
        </Form.Group>
      </FormSection>
      <FormSection title="feedback">
        <Form.Group>
          <Form.Label>where did you hear about us?</Form.Label>
          <Form.Control
            as="select"
            isValid={userInputValid[REGISTRATION_FIELDS.LEAD_SOURCE]}
            onChange={makeHandleBasicChange(REGISTRATION_FIELDS.LEAD_SOURCE)}
            required
          >
            {createOptions(heardFrom)}
          </Form.Control>
        </Form.Group>
      </FormSection>
      <Button type="submit">Submit form</Button>
    </Form>
  );

  return (
    <>
      <Layout>
        <div className={styles.topPadding} onSubmit={handleSubmit}>
          <Section>
            <Section.Title>Conference Registration</Section.Title>
            <Section.Body>
              <Container>{isLoaded && renderForm()}</Container>
            </Section.Body>
          </Section>
          <Footer />
        </div>
      </Layout>
    </>
  );
};

export default Registration;
