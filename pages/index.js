import React from 'react'
const Index = () => (
  <div>
    <link rel="stylesheet" href="/static/stylesheets/styles.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossOrigin="anonymous"></script>
    <div>
      <div className="container">
        <main role="main" className="">
          <img className="logo mb-3" src="/static/img/logo.png" />
          <div className="text-center text-white">
            <h2 className="brand-title">reflections <span className="seperator">|</span> projections 2019</h2>
            <p className="brand-description">Sep 16 - Sep 21</p>
          </div>
          <br/>
          <div className="text-white text-center">
            <h4 className="coming-soon">Coming Soon</h4>
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
