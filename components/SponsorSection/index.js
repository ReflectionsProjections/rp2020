import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import './SponsorSection.scss';
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
    return (
      <Container className="sponsor-section">
        {sponsors.map(sponsor => {
          // if ()
          return (
            <div class="container">
              <div class="row-2">
                <div class="col-3">
                  <Image src={sponsor.image_url} fluid />
                </div>
              </div>
            </div>

            // <Container>
            //   <Row>
            //     <Col xs={6} md={2}>
            //       <Image src={sponsor.image_url} fluid />
            //     </Col>
            //   </Row>
            // </Container>
          );
        })}

        <div class="container">
          <div class="row">
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
            <div class="col-sm">One of three columns</div>
          </div>
        </div>
      </Container>
    );
  }
}

export default SponsorSection;
