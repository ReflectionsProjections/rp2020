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
    const { children } = this.props;
    return (
      <div>
        <CustomHead />
        <div>
          <Nav />
          <div className="container">{children}</div>
        </div>
      </div>
    );
  }
}
export default Layout;
