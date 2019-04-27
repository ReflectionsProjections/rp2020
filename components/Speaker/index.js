import React, { Component } from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

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
              <Col>
                <img
                  src="/static/img/speakers/AlfredSpector.jpeg"
                  className="rounded float-left"
                  width="400em"
                  alt="Two Sigma CTO Alfred Spector"
                />
              </Col>
              <Col>
                <h3>Keynote Speaker: Alfred Spector</h3>
                <h4>CTO @ TwoSigma</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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
                  <CardColumns>
                    {speakers.map(speaker => {
                      const { name } = speaker;
                      const { image } = speaker;
                      const { tagline } = speaker;
                      return (
                        <Card>
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
                  </CardColumns>
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
