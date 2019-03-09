import React, { Component } from 'react';

import './FAQ.scss'

class SubFaq extends FAQ {
    constructor(props) {
      super(props);
  
      this.state = {
      };
    }

    render() {
        return(
          // Some map here
          <section className={props.sectionName}>
            <div className="faq-container faq-column-container">
            {/* Some map here */}
              <section className="faq-column">
                <h2>{props.question}</h2>
                <p>{props.answer}</p>
              </section>
            </div>
          </section>
        );
    }
}   


export default SubFaq;
