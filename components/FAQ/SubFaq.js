import React, { Component } from 'react';

import './FAQ.scss'

class SubFaq extends FAQ {
    constructor(props) {
      super(props);
      this.state = {
        sections : props.sections
      };
    }

    render() {
        return(
         {sections.map((sectionName) =>
           <section className={sectionName}>
            <div className="faq-container faq-column-container">
            {questions.map((question, answer) =>
              <section className="faq-column">
                <h2>{question}</h2>
                <p>{answer}</p>
              </section>
            )}
            </div>
          </section>
         )}
        );
    }
}   


export default SubFaq;
