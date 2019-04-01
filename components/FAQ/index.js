import React, { Component } from 'react';
import axios from 'axios';

import './FAQ.scss';

const questions = (section, currSection) => {
  return (
    <div
      className="row"
      style={currSection === section.name ? {} : { display: 'none' }}
    >
      {section.questions.map(QA => (
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"> {QA.question} </h5>
              <p> {QA.answer} </p>
            </div>
          </div>
        </div>
      ))}
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
      <div className="conainer">
        <div className="row col-md-8 offset-md-2">
          {sections.map(section => (
            <div className="col-md-3">
              <button
                className="btn btn-outline-dark btn-lg"
                type="submit"
                name={section.name}
                id={section.name}
                autoComplete="off"
                onClick={this.switchSection(section.name)}
              >
                {section.name}
              </button>
            </div>
          ))}
        </div>
        <div className="container questions">
          {sections.map(section => questions(section, currSection))}
        </div>
      </div>
    );
  }
}

export default FAQ;
