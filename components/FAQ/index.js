import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Question from './Question';

import styles from './FAQ.scss';

class FAQ extends Component {
  constructor(props) {
    super(props);
    const { faqData } = this.props;
    this.state = {
      sections: faqData.sections,
      currSection: 'General',
      currQuestion: ''
    };
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
        <section className={styles.faqSection}>
          <h2 className="text-center section-header">FAQs</h2>
          <Col
            md={{ span: 6, offset: 3 }}
            className={`text-center ${styles.faqPrompt}`}
          >
            <h3>What can we help you with?</h3>
            <div className="mx-auto">
              <Dropdown>
                <Dropdown.Toggle
                  size="lg"
                  variant="secondary"
                  id="faq-dropdown"
                  className={styles.faqDropdown}
                >
                  {currSection}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={this.switchSection('General')}>
                    General
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.switchSection('Events')}>
                    Events
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.switchSection('MechMania')}>
                    MechMania
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.switchSection('PuzzleBang')}>
                    PuzzleBang
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.switchSection('R|P Symposium')}>
                    R|P Symposium
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <br />
          <Container>
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
                    {left.map(QA => (
                      <Question
                        key={QA.question}
                        question={QA.question}
                        answer={QA.answer}
                        show={QA.question === currQuestion}
                        handleToggle={this.handleToggle}
                      />
                    ))}
                  </Col>
                  <Col md={6}>
                    {right.map(QA => (
                      <Question
                        key={QA.question}
                        question={QA.question}
                        answer={QA.answer}
                        show={QA.question === currQuestion}
                        handleToggle={this.handleToggle}
                      />
                    ))}
                  </Col>
                </Row>
              );
            })}
          </Container>
        </section>
      </Container>
    );
  }
}

export default FAQ;
