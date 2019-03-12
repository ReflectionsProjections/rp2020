import React, { Component } from 'react';

import ReactGA from 'react-ga';
import CustomHead from './CustomHead';
import Nav from '../Nav';
import Timeline from '../Timeline';

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
<<<<<<< HEAD
          {children}
=======
          <div className="container">{children}</div>
          <Timeline />
>>>>>>> stateless component and class component
        </div>
      </div>
    );
  }
}
export default Layout;
