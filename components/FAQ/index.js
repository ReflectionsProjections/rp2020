import React, { Component } from 'react';
import axios from 'axios';

import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Question from './Question';

import './FAQ.scss';

const questions = (section, currSection) => {
  const mid = Math.ceil(section.questions.length / 2);
  const left = section.questions.slice(0, mid);
  const right = section.questions.slice(mid);
  return (
    <Row style={currSection === section.name ? {} : { display: 'none' }}>
      <Col md={6}>
        <Row>
          {left.map(QA => (
            <Question question={QA.question} answer={QA.answer} />
          ))}
        </Row>
      </Col>
      <Col md={6}>
        <Row>
          {right.map(QA => (
            <Question question={QA.question} answer={QA.answer} />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

class FAQ extends Component {
  state = {
    sections: [],
    currSection: 'General'
  };

  componentDidMount() {
    axios.get('/static/data/faq.json').then(res => {
      const { sections } = res.data;
      this.setState({ sections });
    });
  }

  switchSection(sectionName) {
    return () => {
      this.setState({ currSection: sectionName });
    };
  }

  render() {
    const { sections, currSection } = this.state;
    return (
      <section className="faq-section">
        <div className="container">
          <h2 className="text-center section-header">FAQs</h2>
          <div id="faq-prompt" className="col-md-6 offset-md-3 text-center">
            <h3>What can we help you with?</h3>
            <div className="mx-auto">
              <Dropdown>
                <Dropdown.Toggle
                  size="lg"
                  variant="secondary"
                  id="faq-dropdown"
                >
                  {currSection}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.switchSection('General')}>
                    General
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.switchSection('MechMania')}>
                    MechMania
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={this.switchSection('Startup / Career Fair')}
                  >
                    Startup / Career Fair
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.switchSection('Symposium')}>
                    ACM Symposium
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <br />
          <div className="row questions">
            {sections.map(section => questions(section, currSection))}
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
