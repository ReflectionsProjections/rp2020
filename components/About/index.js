import React from 'react';

import { Link } from 'react-scroll';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './about.scss';

const About = () => (
  <Container>
    <section className="about-section">
      <Container>
        <h2 className="text-center section-header">About</h2>
        <br />
        <Row>
          <Col md={8} className="mb-5 px-lg-3">
            <div>
              <div>
                <h3>What is Reflections | Projections?</h3>
                <p>
                  Reflections | Projections is an annual technology conference
                  held at the University of Illinois at Urbana-Champaign.
                  Inviting premier speakers, influencers, and companies, it
                  features a puzzle competition, speaker events, and a 24 hour
                  AI hackathon. Reflections | Projections is coming on its 25th
                  anniversary this year, upholding its standards of excellence.
                </p>
              </div>
              <br />
              <div>
                <h3>Our Team</h3>
                <p>
                  We are students passionate about technology who embody the
                  diversity and excellence inherit at the University of Illinois
                  at a Urbana-Champaign. We bring industry and academia into one
                  conference to incite the spread of novel ideas. We connect
                  students with professional opportunities. We host a one of a
                  kind AI hackathon. And, we can&apos;t wait for you to come to
                  R|P 2019!
                </p>
                <img
                  className="rounded"
                  width="100%"
                  src="/static/img/team.jpg"
                  alt="Reflections Projections 2019 Staff"
                />
              </div>
            </div>
          </Col>
          <Col md={4} className="px-lg-3">
            <div>
              <h3>Learn More</h3>
              <hr />
              <div>
                <h4>FAQ</h4>
                <p>Still have unanswered questions?</p>
                <Link
                  activeClass="active"
                  to="faq"
                  spy
                  smooth="easeInOutQuad"
                  duration={500}
                  offset={-80}
                >
                  <span className="btn btn-primary">See FAQs</span>
                </Link>
              </div>
              <hr />
              <div>
                <h4>Social Media</h4>
                <p>Follow us to stay updated!</p>
                <div className="social-media-icons">
                  <a href="https://www.facebook.com/acmrp/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/uiuc_rp/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://twitter.com/uiuc_rp?lang=en">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Container>
);

export default About;
