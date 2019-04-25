import React, { Component } from 'react';
import axios from 'axios';

import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Question from './Question';

import './FAQ.scss';

class FAQ extends Component {
  state = {
    sections: [],
    currSection: 'General',
    currQuestion: ''
  };

  componentDidMount() {
    axios.get('/static/data/faq.json').then(res => {
      const { sections } = res.data;
      this.setState({ sections });
    });
  }

  handleToggle = question => {
    this.setState(state => ({
      currQuestion: state.currQuestion === question ? '' : question
    }));
  };

  switchSection(sectionName) {
    return () => {
      this.setState({
        currSection: sectionName,
        currQuestion: ''
      });
    };
  }

  render() {
    const { sections, currSection, currQuestion } = this.state;
    return (
      <Container>
        <section className="faq-section">
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
            {sections.map(section => {
              const mid = Math.ceil(section.questions.length / 2);
              const left = section.questions.slice(0, mid);
              const right = section.questions.slice(mid);
              return (
                <Row
                  key={section.name}
                  style={
                    currSection === section.name ? {} : { display: 'none' }
                  }
                >
                  <Col md={6}>
                    <Row>
                      {left.map(QA => (
                        <Question
                          key={QA.question}
                          question={QA.question}
                          answer={QA.answer}
                          show={QA.question === currQuestion}
                          handleToggle={this.handleToggle}
                        />
                      ))}
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      {right.map(QA => (
                        <Question
                          key={QA.question}
                          question={QA.question}
                          answer={QA.answer}
                          show={QA.question === currQuestion}
                          handleToggle={this.handleToggle}
                        />
                      ))}
                    </Row>
                  </Col>
                </Row>
              );
            })}
          </div>
        </section>
      </Container>
    );
  }
}

export default FAQ;
