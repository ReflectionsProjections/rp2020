import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

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
      const {sponsors} = res.data;
      this.setState({ sponsors });
    });
  }

  render() {
    const { sponsors } = this.state;
    return (
      <div>
        {sponsors.map(sponsor => {
          return (
            <Container>
              <Row>
                <Col xs={6} md={2}>
                  <Image src={sponsor.image_url} fluid />
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    );
  }
}

export default SponsorSection;
