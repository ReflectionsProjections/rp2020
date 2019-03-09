import React, { Component } from 'react';

import './FAQ.scss'

class FAQ extends Component {
    constructor() {
      super();
  
      this.state = {
      };
    }

    render() {
        return(
          <section className="faq">
            <SubFaq />
          </section>
        );
    }
}   


export default FAQ;
