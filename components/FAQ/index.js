import React, { Component } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import Dropdown from 'react-bootstrap/Dropdown';

import './FAQ.scss';

const questions = (section, currSection) => {
  return (
    <div
      className="container"
      style={currSection === section.name ? {} : { display: 'none' }}
    >
      <Masonry>
        {section.questions.map(QA => (
          <div className="col-md-4">
            <div className="card animated fadeInUp">
              <div className="card-body">
                <h5 className="card-title"> {QA.question} </h5>
                <p> {QA.answer} </p>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
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
          <div className="row mx-auto" />
          <div className="col-md-6 offset-md-3">
            <h3>What can we help you with?</h3>
            <div className="mx-auto">
              <Dropdown size="lg">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
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
                    Symposium
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
