import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import './Speaker.scss';

class Speaker extends Component {
  state = {
    speakers: []
  };

  componentDidMount() {
    axios.get('/static/data/speaker.json').then(res => {
      const { speakers } = res.data;
      this.setState({ speakers });
    });
  }

  render() {
    const { speakers } = this.state;

    return (
      <Container>
        <section className="speaker-section">
          <Container>
            <h2 className="text-center section-header">Speakers</h2>
            <br />
            <Row>
              <Col md={5}>
                <img
                  src="/static/img/speakers/AlfredSpector.jpeg"
                  className="rounded float-left mb-5"
                  width="100%"
                  alt="Two Sigma CTO Alfred Spector"
                />
              </Col>
              <Col md={7}>
                <h3>Keynote Speaker: Alfred Spector</h3>
                <h4>CTO and Head of Engineering @ TwoSigma</h4>
                <p>
                  Alfred Spector is the current Chief Technology Officer and
                  Head of Engineering at TwoSigma, an investment management
                  company that leverages Machine Learning and Distributed
                  Computing. Previously, he was the Vice President of Research
                  and Special Initiatives at Google and, before that, the Vice
                  President of Strategy & Technology at IBM. Alfred recieved his
                  PhD in Computer Science at Stanford University and attended
                  Harvard University for his undergraduate studies. We are glad
                  to welcome Alfred as our keynote speaker for RP 2019!
                </p>
              </Col>
            </Row>
            <br />
            <hr />
            <Row>
              <div className="text-center">
                {speakers.length === 0 ? (
                  <h4>Loading...</h4>
                ) : (
                  <CardDeck>
                    {speakers.map(speaker => {
                      const { name } = speaker;
                      const { image } = speaker;
                      const { tagline } = speaker;
                      return (
                        <Card className="speaker-card">
                          <Card.Img
                            variant="top"
                            className="rounded"
                            src={image}
                          />
                          <Card.Body className="text-center">
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{tagline}</Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </CardDeck>
                )}
              </div>
            </Row>
          </Container>
        </section>
      </Container>
    );
  }
}

export default Speaker;
