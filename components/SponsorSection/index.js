import React, { Component } from 'react';
import axios from 'axios';
import classNames from 'classnames';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from '../Util/Section';
import styles from './SponsorSection.scss';

const ImageViewer = props => {
  const { id, images } = props;

  let xs = 12;
  let sm = 12;
  let md = 12;
  let lg = 12;

  if (id === 'petab') {
    xs = 12;
    sm = 12;
    md = 12;
    lg = 12;
  } else if (id === 'terab') {
    xs = 6;
    sm = 6;
    md = 6;
    lg = 6;
  } else if (id === 'gigab') {
    xs = 4;
    sm = 3;
    md = 4;
    lg = 4;
  } else if (id === 'megab') {
    xs = 3;
    sm = 2;
    md = 3;
    lg = 3;
  }

  return (
    <Row>
      {images.map(image => {
        return (
          <Col
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            className="mb-3 col d-flex align-items-center justify-content-center"
          >
            <Image src={image.img} fluid />
          </Col>
        );
      })}
    </Row>
  );
};

class SponsorSection extends Component {
  state = {
    sponsors: undefined,
    loaded: false
  };

  componentDidMount() {
    axios.get('/static/data/sponsor.json').then(res => {
      this.setState({ sponsors: res.data.sponsors, loaded: true });
    });
  }

  render() {
    const { sponsors, loaded } = this.state;
    return (
      <Section>
        <Section.Title className={styles.sponsorTitle}>Sponsors</Section.Title>
        <Section.Body>
          <Container>
            <Col
              id="sponsor-tier"
              lg={{ span: 10, offset: 1 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              className="text-center"
            >
              {!loaded ? (
                <h1>Loading</h1>
              ) : (
                <div>
                  <div className={classNames(styles.tier, styles.petaTier)}>
                    <h3 className="mb-3">Petabyte</h3>
                    <ImageViewer
                      className="imageView"
                      id="petab"
                      images={sponsors.tier1}
                      size={65}
                    />
                  </div>

                  <div className={styles.tier}>
                    <h3 className="mb-3">Terabyte</h3>
                    <ImageViewer images={sponsors.tier2} id="terab" size={50} />
                  </div>

                  <div className={styles.tier}>
                    <h3 className="mb-3">Gigabyte</h3>
                    <ImageViewer images={sponsors.tier3} id="gigab" size={40} />
                  </div>

                  <div className={styles.tier}>
                    <h3 className="mb-3">Megabyte</h3>
                    <ImageViewer images={sponsors.tier4} id="megab" size={30} />
                  </div>
                </div>
              )}
            </Col>
          </Container>
        </Section.Body>
      </Section>
    );
  }
}

export default SponsorSection;
