import React from 'react';

import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './FAQ.scss';

const Question = props => {
  const { question, answer, show, handleToggle } = props;
  return (
    <div className="animated fadeInUp">
      <Card onClick={() => handleToggle(question)}>
        <Card.Body>
          <Card.Title className="faq-question">
            <Row className="d-sm-none d-none d-md-flex">
              <div>{question}</div>
              <div className="ml-auto">
                {show ? <span>&#9650;</span> : <span>&#9660;</span>}
              </div>
            </Row>
            <div className="d-block d-md-none text-center question-card-mobile">
              <p>{question}</p>
              <p>
                {show ? (
                  <span className="arrow-center">&#9650;</span>
                ) : (
                  <span className="arrow-center">&#9660;</span>
                )}
              </p>
            </div>
          </Card.Title>
          {show && <Card.Text>{answer}</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
};
export default Question;
