import './Nav.scss'

const Nav = () => (
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
)

export default Nav
