import React, { Component } from 'react';
import axios from 'axios';

import './FAQ.scss'
import FAQSection from './FAQSection';

class FAQ extends Component {
  state = {
    sections: []
  }

  componentDidMount() {
    axios.get()
      .then(res => {
        const sections = res.data;
        this.setState({ sections });
      })
  }

  render() {
      return(
        <section className="faq">
          {this.state.sections.map((sectionName) =>
            <section className={sectionName}>
              <FAQSection className={sectionName} />
            </section>
          )}
        </section>
      );
  }
}   


export default FAQ;
