import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from '../../UIComponents/Section';

import styles from './about.scss';

const About = () => (
  <Section className={styles.aboutSection}>
    <Section.Header>
      <Section.Title>About</Section.Title>
    </Section.Header>
    <Section.Body>
      <Container>
        <Row>
          <Col
            className="mb-5 px-lg-3"
            md={{
              span: 10,
              offset: 1
            }}
          >
            <div className="pb-4">
              <h3>What is Reflections | Projections?</h3>
              <p>
                Reflections | Projections is an annual technology conference
                held at the University of Illinois at Urbana-Champaign. Inviting
                premier speakers, influencers, and companies, it features a
                puzzle competition, speaker events, and a 24-hour AI hackathon.
                Reflections | Projections is coming on its 26th anniversary this
                year, upholding its standards of excellence.
              </p>
            </div>
            <div className="pb-4">
              <h3>Our Team</h3>
              <p>
                We are students passionate about technology who embody the
                diversity and excellence inherent at the University of Illinois
                at Urbana-Champaign. We bring industry and academia into one
                conference to incite the spread of novel ideas. We connect
                students with professional opportunities. We host a one of a
                kind AI hackathon. And, we can&apos;t wait for you to come to
                R|P 2020!
              </p>
              {/*<img
                className="rounded"
                width="100%"
                src="/static/img/team.jpg"
                alt="Reflections Projections 2019 Staff"
              />*/}
            </div>
            <div className="pb-4">
              <h3>Virtual Conference</h3>
              <p>
                As a result of the novel coronavirus pandemic, we are moving the conference to a virtual format. We are excited about the opportunity to leverage this virtual format to make our talks and conference events more accessible to people throughout the global CS community.
              </p>
            </div>
            {/* <Row>
              <Col className="pb-4" md={4}>
                <h3>25 Years of History</h3>
                <p>See how far our conference has come.</p>
                <NextLink href="/timeline">
                  <Button>Timeline</Button>
                </NextLink>
              </Col>
              <Col className="pb-4" md={4}>
                <h3>Social Media Challenge</h3>
                <p>Win a giveaway!</p>
                <NextLink href="/challenge">
                  <Button>Challenge Details</Button>
                </NextLink>
              </Col>
              <Col className="pb-4" md={4}>
                <h3>Social Media</h3>
                <p>Follow us to stay updated!</p>
                <div className={styles.socialMediaIcons}>
                  <a href="https://www.facebook.com/acmrp/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/uiuc_rp/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://twitter.com/uiuc_rp">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </Col>
            </Row> */}
          </Col>
        </Row>
      </Container>
    </Section.Body>
  </Section>
);

export default About;
