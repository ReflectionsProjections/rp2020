import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './FAQ.scss';

const Question = props => {
  const { question, answer } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  const toggle = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <Col md={12} className="animated fadeInUp">
      <Card onClick={toggle}>
        <Card.Body>
          <Card.Title className="faq-question">
            <Row className="d-sm-none d-none d-md-flex">
              <div>{question}</div>
              <div className="ml-auto">
                {showAnswer ? <span>&#9650;</span> : <span>&#9660;</span>}
              </div>
            </Row>
            <div className="d-block d-md-none text-center question-card-mobile">
              <p>{question}</p>
              <p>
                {showAnswer ? (
                  <span className="arrow-center">&#9650;</span>
                ) : (
                  <span className="arrow-center">&#9660;</span>
                )}
              </p>
            </div>
          </Card.Title>

          {showAnswer && <Card.Text>{answer}</Card.Text>}
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Question;
