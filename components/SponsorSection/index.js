import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import './SponsorSection.scss';

const ImageViewer = props => {
  const { size, images } = props;
  console.log(props);
  return (
    <Container>
      {images.map(image => {
        return <Image src={image.image_url} width={`${size}%`} fluid />;
      })}
    </Container>
  );
};

class SponsorSection extends Component {
  state = {
    sponsors: []
  };

  componentDidMount() {
    axios.get('/static/data/sponsor.json').then(res => {
      const { sponsors } = res.data;
      this.setState({ sponsors });
    });
  }

  render() {
    const { sponsors } = this.state;
    const tierPB = sponsors.filter(e => e.tier == 'pb');
    const tierTB = sponsors.filter(e => e.tier == 'tb');
    const tierGB = sponsors.filter(e => e.tier == 'gb');
    const tierMB = sponsors.filter(e => e.tier == 'mb');

    return (
      <Container className="sponsor-section">
        <div className="container">
          <h2 className="text-center section-header">Sponsors</h2>
          <div id="sponsor-tier" className="col-md-6 offset-md-3 text-center">
            <div id="peta-tier">
              <h3>Petabyte</h3>
              <ImageViewer
                className="imageView"
                id="petab"
                images={tierPB}
                size={65}
              />
            </div>

            <div id="tera-tier">
              <h3>Terabyte</h3>
              <ImageViewer images={tierTB} size={50} />
            </div>

            <div id="gig-tier">
              <h3>Gigabyte</h3>
              <ImageViewer images={tierGB} size={40} />
            </div>

            <div id="mega-tier">
              <h3>Megabyte</h3>
              <ImageViewer images={tierMB} size={30} />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default SponsorSection;
