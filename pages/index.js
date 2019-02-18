import React from 'react'
import Head from 'next/head'
import SVG from 'react-inlinesvg'
import CountdownTimer from '../components/CountdownTimer'

const Index = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/stylesheets/styles.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
    </Head>
    <div>
      <div className="container">
        <main role="main" className="">
          <div className="text-white text-center">
            <h4 className="event-date">SEPT 16 - 21</h4>
          </div>
          <SVG className="wordmark"
            src="/static/assets/wordmarkblack.svg"/>
          <br/>
          <div>
            <CountdownTimer />
          </div>
          <br/>
          <div className="text-white text-center">
            <p className="contact">Questions? Interested in sponsoring? Email us at someemail@illinois.edu</p>
          </div>
      </main>
      </div>
    </div>
  </div>
)

export default Index
