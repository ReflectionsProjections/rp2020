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
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
          integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
          crossOrigin="anonymous"
        />
      </div>
    );
  }
}
export default Layout;
