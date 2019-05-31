import React, { Component } from 'react';

import ReactGA from 'react-ga';
import CustomHead from './CustomHead';
import Nav from '../Nav';

class Layout extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-134729747-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { children, metadata } = this.props;
    return (
      <div>
        <CustomHead metadata={metadata} />
        <div>
          <Nav />
          {children}
        </div>
      </div>
    );
  }
}
export default Layout;
