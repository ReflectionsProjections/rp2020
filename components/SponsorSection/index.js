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
        return <Image src={image.img} width={`${size}%`} fluid />;
      })}
    </Container>
  );
};

class SponsorSection extends Component {
  state = {
    sponsors: undefined,
    loaded: false
  };

  componentDidMount() {
    axios.get('/static/data/sponsor.json').then(res => {
      this.setState({ sponsors : res.data.sponsors, loaded: true });
    });
  }

  render() {
    const { sponsors } = this.state;

    return (
      <Container className="sponsor-section">
        <div className="container">
          <h2 className="text-center section-header">Sponsors</h2>
          <div id="sponsor-tier" className="col-md-6 offset-md-3 text-center">
            
            {!this.state.loaded ? (
              <h1>Loading</h1>
            ) : (
              <div>
                <div id="peta-tier">
                  <h3>Petabyte</h3>
                  <ImageViewer
                    className="imageView"
                    id="petab"
                    images={sponsors.tier1}
                    size={65}
                  />
                </div>

                <div id="tera-tier">
                  <h3>Terabyte</h3>
                  <ImageViewer images={sponsors.tier2} size={50} />
                </div>

                <div id="gig-tier">
                  <h3>Gigabyte</h3>
                  <ImageViewer images={sponsors.tier3} size={40} />
                </div>

                <div id="mega-tier">
                  <h3>Megabyte</h3>
                  <ImageViewer images={sponsors.tier4} size={30} />
                </div> 
            </div>
            )
          }
          </div>
        </div>
      </Container>
    );
  }
}

export default SponsorSection;
