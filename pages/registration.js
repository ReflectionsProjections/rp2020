import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import Layout from '../components/Util/Layout';

import './registration.scss';
import './index.scss';
import '../static/stylesheets/animations.scss';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOptions: undefined
    };
  }

  componentDidMount() {
    axios.get('/static/data/registration.json').then(response => {
      this.setState({
        formOptions: response.data
      });
    });
  }

  render() {
    const { formOptions } = this.state;
    let genders;
    let years;
    let shirts;
    let diets;
    let jobtype;
    let proftype;
    let majors;
    let schools;
    let heardFrom;
    if (formOptions) {
      ({
        genders,
        years,
        shirts,
        diets,
        jobtype,
        proftype,
        majors,
        schools,
        heardFrom
      } = formOptions);
    }
    return (
      <>
        <Layout>
          <div className="registration-landing">
            <div className="container">
              <div className="lead-content text-white text-center">
                <SVG
                  className="img-fluid wordmark animated fadeIn"
                  src="/static/assets/wordmarkblack.svg"
                />
                <h2 className="event-date animated fadeIn">
                  Event Registration
                </h2>
              </div>
            </div>
          </div>

          <Container>
            <section className="registration-section">
              <Form>
                <Row>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Col>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Col>
                </Row>
                <Row>
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="text" placeholder="2173333426" />
                </Row>
                <Row>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Row>
                <Row>
                  <Form.Label>Gender:</Form.Label>
                  <Form.Control as="select">
                    {genders ? (
                      genders.map(gender => (
                        <option key={gender}>{gender}</option>
                      ))
                    ) : (
                      <option>Genders</option>
                    )}
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>School Year:</Form.Label>
                  <Form.Control as="select">
                    {years ? (
                      years.map(year => <option key={year}>{year}</option>)
                    ) : (
                      <option>Years</option>
                    )}
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Major:</Form.Label>
                  <Form.Control as="select">
                    {majors ? (
                      majors.map(major => <option key={major}>{major}</option>)
                    ) : (
                      <option>Major</option>
                    )}
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>School:</Form.Label>
                  <Form.Control as="select">
                    {schools ? (
                      schools.map(school => (
                        <option key={school}>{school}</option>
                      ))
                    ) : (
                      <option>School</option>
                    )}
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Transportation:</Form.Label>
                  <Form.Control type="text" placeholder="Transportation" />
                </Row>
                <Row>
                  <Form.Label>Shirt Size:</Form.Label>
                  <Form.Control as="select">
                    {shirts ? (
                      shirts.map(shirt => <option key={shirt}>{shirt}</option>)
                    ) : (
                      <option>Shirts</option>
                    )}
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Dietary Restriction:</Form.Label>
                  <Form.Control as="select">
                    {diets ? (
                      diets.map(diet => <option key={diet}>{diet}</option>)
                    ) : (
                      <option>Dietary Restrictions</option>
                    )}
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Job Interest:</Form.Label>
                  <Form.Control as="select">
                    {jobtype ? (
                      jobtype.map(jobInterest => (
                        <option key={jobInterest}>{jobInterest}</option>
                      ))
                    ) : (
                      <option>Job Interest</option>
                    )}
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Professional Interest:</Form.Label>
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
                </Row>
                <Row>
                  <Form.Label>Heard From:</Form.Label>
                  <Form.Control as="select">
                    {heardFrom ? (
                      heardFrom.map(from => <option key={from}>{from}</option>)
                    ) : (
                      <option>Heard From</option>
                    )}
                  </Form.Control>
                </Row>
                <Button type="submit">Submit form</Button>
              </Form>
            </section>
          </Container>

          <footer>
            <div className="text-white text-center footer-text animated fadeIn">
              <p id="organized">
                Organized by <a href="https://acm.illinois.edu/">ACM@UIUC</a>
              </p>
              <p id="contact">
                Questions? Interested in sponsoring? Email us at{' '}
                <a href="mailto:contact@reflectionsprojections.org">
                  contact@reflectionsprojections.org
                </a>
              </p>
            </div>
          </footer>
        </Layout>
      </>
    );
  }
}

export default Registration;
