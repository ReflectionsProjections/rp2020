import React, { Component } from 'react';
import axios from 'axios';

import './FAQ.scss'

class FAQSection extends FAQ {
  state = {
    questions: []
  }

  componentDidMount() {
    axios.get("/static/json/FAQ.json")
      .then(res => {
        const questions = res.data;
        this.setState({ questions });
      })
  }



  render() {
      return(
        <div>
          <div className="faq-container faq-column-container">
            {questions.map((question, answer) =>
              <section className="faq-column">
                <h2>{question}</h2>
                <p>{answer}</p>
              </section>
            )}
          </div>
        </div>
      );
  }
}   


export default FAQSection;
