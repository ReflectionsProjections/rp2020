import React, { Component } from 'react';
import { Form, Row } from 'react-bootstrap';
// import './Registration.scss';

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
      <div>
        <Form>
          <Row>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Row>
          <Row>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Row>
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
            <Form.Control type="text" placeholder="Gender" />
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
            <Form.Control type="text" placeholder="Large" />
          </Row>
          <Row>
            <Form.Label>Dietary Restriction:</Form.Label>
            <Form.Control type="text" placeholder="Vegan" />
          </Row>
          <Row>
            <Form.Label>Graduation Class:</Form.Label>
            <Form.Control type="text" placeholder="2023 Fall" />
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
            <Form.Control type="text" placeholder="R|P reached out to me" />
          </Row>
          <Row>
            <Form.Label>R|P Interest:</Form.Label>
            <Form.Control type="text" placeholder="Very(????)" />
          </Row>
        </Form>
      </div>
    );
  }
}

export default Registration;
