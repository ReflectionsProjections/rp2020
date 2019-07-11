import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './SponsorSection.scss';

const ImageViewer = props => {
  const { id, images } = props;
  console.log(props);

  let xs = 12;
  let sm = 12;
  let md = 12;
  let lg = 12;

  if (id == 'petab') {
    xs = 12;
    sm = 12;
    md = 12;
    lg = 12;
  } else if (id == 'terab') {
    xs = 6;
    sm = 6;
    md = 6;
    lg = 4;
  } else if (id == 'gigab') {
    xs = 6;
    sm = 6;
    md = 4;
    lg = 4;
  } else if (id == 'megab') {
    xs = 4;
    sm = 4;
    md = 4;
    lg = 3;
  }

  return (
    <Row>
      {images.map(image => {
        return (
          <Col xs={xs} sm={sm} md={md} lg={lg} className="mb-3 col d-flex align-items-center justify-content-center">
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
    const { sponsors } = this.state;
    return (
      <Container className="sponsor-section">
        <div className="container">
          <h2 className="text-center section-header">Sponsors</h2>
          <div id="sponsor-tier" className="col-md-12 col-lg-10 offset-lg-1 col-xs-12 col-sm-12 text-center">
            {!this.state.loaded ? (
              <h1>Loading</h1>
            ) : (
              <div>
                <div id="peta-tier">
                  <h3 className="mb-3">Petabyte</h3>
                  <ImageViewer
                    className="imageView"
                    id="petab"
                    images={sponsors.tier1}
                    size={65}
                  />
                </div>

                <div id="tera-tier">
                  <h3 className="mb-3">Terabyte</h3>
                  <ImageViewer images={sponsors.tier2} id="terab" size={50} />
                </div>

                <div id="gig-tier">
                  <h3 className="mb-3">Gigabyte</h3>
                  <ImageViewer images={sponsors.tier3} id="gigab" size={40} />
                </div>

                <div id="mega-tier">
                  <h3 className="mb-3">Megabyte</h3>
                  <ImageViewer images={sponsors.tier4} id="megab" size={30} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    );
  }
}

export default SponsorSection;
