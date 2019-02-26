import React from 'react'
import CustomHead from '../components/CustomHead'
import SVG from 'react-inlinesvg'
import CountdownTimer from '../components/CountdownTimer'

import ReactGA from 'react-ga';

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    ReactGA.initialize('UA-134729747-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render () {
    return (
      <div>
        <CustomHead />
        <div>
          <nav className="navbar bg-blue" id="rp-nav">
            <div className="left-nav">
              <a href="/">
              <img className="navbar-logo"
            src="/static/assets/2019logo.svg"/>
              </a>
            </div>
            <div className="right-nav">
              <div className="social-media-icons">
                <a href="https://www.facebook.com/acmrp/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/uiuc_rp/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/uiuc_rp?lang=en">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>

              <a className="btn nav-item" id="btn-register" href="https://acmrp.typeform.com/to/a05uAe">
                <div id="btn-register-text">Get Updates</div>
              </a>
            </div>
          </nav>
          <div className="container">
            <main role="main" className="text-white text-center">
              <SVG className="img-fluid wordmark animated fadeIn"
            src="/static/assets/wordmarkblack.svg"/>
              <h2 className="event-date animated fadeIn">Sept 16 - 21</h2>
              <h6 className="animated fadeInUp" id="tagline">Celebrating 25 Years</h6>
              <div>
                <CountdownTimer className="animated fadeIn"/>
              </div>
              <br/>
              <div className="text-white text-center footer-text animated fadeIn">
                <p id="organized">Organized by <a href="https://acm.illinois.edu/">ACM@UIUC</a></p>
                <p id="contact">Questions? Interested in sponsoring? Email us at <a href="mailto:contact@reflectionsprojections.org">contact@reflectionsprojections.org</a>
                </p>
              </div>
          </main>
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
      </div>
    )
  }
}

export default Index
