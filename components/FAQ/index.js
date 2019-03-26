import React, { Component } from 'react';
import axios from 'axios';

import './FAQ.scss';
// import FAQSection from './FAQSection';

class FAQ extends Component {
  state = {
    sections: [],
    currSection: 'General'
  };

  componentDidMount() {
    axios.get('/static/data/FAQ.json').then(res => {
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
      <>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />

        <section className="faq">
          <div className="container button">
            <div className="row">
              {sections.map(section => (
                <div className="col-sm">
                  <section className={section.name}>
                    <button
                      type="submit"
                      name={section.name}
                      id={section.name}
                      autoComplete="off"
                      onClick={this.switchSection(section.name)}
                    >
                      {' '}
                      {section.name}{' '}
                    </button>
                  </section>
                </div>
              ))}
            </div>
          </div>
          <div className="container questions">
            {sections.map(section => (
              <div
                className="row"
                style={currSection === section.name ? {} : { display: 'none' }}
              >
                {section.questions.map(QA => (
                  <div className="col-sm">
                    <section className={QA.question}>
                      <h2> {QA.question} </h2>
                      <p> {QA.answer} </p>
                    </section>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default FAQ;
