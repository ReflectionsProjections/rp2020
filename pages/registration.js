import React, { Component } from 'react';
import SVG from 'react-inlinesvg';
import { Form, Row, Col, Container } from 'react-bootstrap';
import Layout from '../components/Util/Layout';

import './registration.scss';
import './index.scss';
import '../static/stylesheets/animations.scss';

class Registration extends Component {
  // state = {
  //   firstName: '',
  //   lastName: '',
  //   phoneNumber: '',
  //   email: '',
  //   gender: '',
  //   studentType: '',
  //   major: '',
  //   school: '',
  //   transportation: '',
  //   shirtSize: '',
  //   diet: '',
  //   graduationClass: '',
  //   jobInterest: '',
  //   professionalInterest: '',
  //   heardFrom: '',
  //   rpInterest: ''
  // };

  componentDidMount() {
    return () => {};
  }

  render() {
    // const {
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   email,
    //   gender,
    //   studentType,
    //   major,
    //   school,
    //   transportation,
    //   shirtSize,
    //   diet,
    //   graduationClass,
    //   jobInterest,
    //   professionalInterest,
    //   heardFrom,
    //   rpInterest
    // } = this.state;
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
                <Form.Row>
                  <Col>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Col>
                </Form.Row>
                <Row>
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type="number" placeholder="2173333426" />
                </Row>
                <Row>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Row>
                <Row>
                  <Form.Label>Gender:</Form.Label>
                  <Form.Control as="select">
                    <option>Female</option>
                    <option>Male</option>
                    <option>Nonbinary</option>
                    <option>Other</option>
                    <option>Prefer not to disclose</option>
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Year in School:</Form.Label>
                  <Form.Control type="text" placeholder="Freshman" />
                </Row>
                <Row>
                  <Form.Label>Major:</Form.Label>
                  <Form.Control type="text" placeholder="Computer Science" />
                </Row>
                <Row>
                  <Form.Label>School:</Form.Label>
                  <Form.Control type="text" placeholder="UIUC" />
                </Row>
                <Row>
                  <Form.Label>Transportation:</Form.Label>
                  <Form.Control type="text" placeholder="Transportation" />
                </Row>
                <Row>
                  <Form.Label>Shirt Size:</Form.Label>
                  <Form.Control as="select">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Dietary Restriction:</Form.Label>
                  <Form.Control as="select">
                    <option>None</option>
                    <option>Vegetarian</option>
                    <option>Vegan</option>
                    <option>Other</option>
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>School Year:</Form.Label>
                  <Form.Control as="select">
                    <option>Freshman</option>
                    <option>Sophomore</option>
                    <option>Junior</option>
                    <option>Senior</option>
                    <option>Graduate Student</option>
                  </Form.Control>
                </Row>
                <Row>
                  <Form.Label>Job Interest:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Looking for Summer Internship"
                  />
                </Row>
                <Row>
                  <Form.Label>Proffesional Interest:</Form.Label>
                  <Form.Control type="text" placeholder="ML, AI and Big Data" />
                </Row>
                <Row>
                  <Form.Label>Heard From:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="R|P reached out to me"
                  />
                </Row>
                <Row>
                  <Form.Label>R|P Interest:</Form.Label>
                  <Form.Control type="text" placeholder="Very(????)" />
                </Row>
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
