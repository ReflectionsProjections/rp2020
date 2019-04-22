import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import './SponsorSection.scss';


const ImageViewer = (props) => {
  const { size, images } = props;
  console.log(props);
  return (
    <Container>
      {images.map(image => {
        return <Image src={image.image_url} width = {`${size}%`} fluid />
      })}

    </Container>
  )

}

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
    const tierMB = sponsors.filter(e => e.tier == "mb");
    const tierGB = sponsors.filter(e => e.tier == "gb");
    const tierTB = sponsors.filter(e => e.tier == "tb");
    const tierPB = sponsors.filter(e => e.tier == "pb");

    return (
      <Container className="sponsor-section">
        <div className="container">
          <ImageViewer images = {tierPB} size = {100}></ImageViewer>
          <ImageViewer images = {tierTB} size = {80}></ImageViewer>
          <ImageViewer images = {tierGB} size = {60}></ImageViewer>
          <ImageViewer images = {tierMB} size = {40}></ImageViewer>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
          </div>
        </div>
      </Container>
    );
  }
}

export default SponsorSection;





// figure out how to loop through and display images

// const SponsorSection = () => (
//   <div>

//     {<Container>
//            <Row>
//                 <Col xs={6} md={2}>
//                     <Image src="https://www.hackillinois.org/static/media/Fulcrum.303a6d78.png" fluid />
//                 </Col>
//             </Row>
//     </Container> }
//   </div>
// );

/*
res = {
    data: {
        sponsors: ___,
        status: __,

    },
    ...
}

*/