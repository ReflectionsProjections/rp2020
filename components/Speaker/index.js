import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import './Speaker.scss';

class Speaker extends Component {
  state = {
    speakers: []
  };

  componentDidMount() {
    axios.get('/static/data/speaker-test.json').then(res => {
      const { speakers } = res.data;
      this.setState({ speakers });
    });
  }

  render() {
    const { speakers } = this.state;

    const cards = [];
    speakers.forEach(data => {
      const { name } = data;
      const { image } = data;
      const { biography } = data;
      cards.push(
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{biography}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
    if (cards.length === 0) {
      cards.push(<Card />);
      cards.push(
        <Card>
          <Card.Body>
            <Card.Title>Speaker list coming soon!</Card.Title>
          </Card.Body>
        </Card>
      );
      cards.push(<Card />);
    }

    return (
      <section className="speaker-section">
        <div className="container">
          <h2 className="text-center section-header">Speakers</h2>
          <div className="row mx-auto" />
          <div>
            <CardColumns>{cards}</CardColumns>
          </div>
          <br />
        </div>
      </section>
    );
  }
}

export default Speaker;
