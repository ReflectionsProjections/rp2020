import React from 'react'
import Head from 'next/head'
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
        <Head>
          <title>Reflections | Projections 2019</title>
          <meta name="description" content="Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign."/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>

          <link rel="apple-touch-icon" sizes="57x57" href="/static/assets/icons/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/static/assets/icons/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/static/assets/icons/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/assets/icons/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/static/assets/icons/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/static/assets/icons/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/static/assets/icons/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/static/assets/icons/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/icons/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/static/assets/icons/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/static/assets/icons/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/assets/icons/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>

          <link rel="stylesheet" href="/static/stylesheets/styles.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
        </Head>
        <div>
          <nav className="navbar bg-blue" id="rp-nav">
            <a className="navbar-brand" href="/">
              <SVG className="navbar-logo"
                src="/static/assets/logowhitecircle.svg"/>
            </a>
            <a className="btn nav-item" id="btn-register" href="https://acmrp.typeform.com/to/a05uAe">
              <div id="btn-register-text">Stay Informed</div>
            </a>
          </nav>
          <div className="container">
            <main role="main" className="text-white text-center">
              <h4 className="event-date animated fadeIn">SEPT 16 - 21</h4>
              <SVG className="wordmark animated fadeIn"
                src="/static/assets/wordmarkblack.svg"/>
              <p className="animated fadeInUp" id="tagline">Celebrating 25 Years</p>
              <div>
                <CountdownTimer className="animated fadeIn"/>
              </div>
              <br/>
              <div className="text-white text-center footer-text animated fadeIn">
                <p id="organized">Organized by University of Illinois at Urbana-Champaign ACM Chapter</p>
                <p id="contact">Questions? Interested in sponsoring? Email us at contact@reflectionsprojections.org</p>
              </div>
          </main>
          </div>
        </div>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
      </div>
    )
  }
}

export default Index
