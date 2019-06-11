import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './TimelineBlock.scss';

const TimelineBlock = ({ event: { date, content } }) => (
  <Row className={styles.timelineBlock}>
    <Col md={2} className="text-md-right">
      <h3 className={styles.date}>{date}</h3>
    </Col>
    <Col md={{ md: 9, offset: 1 }} className={styles.content}>
      <ul className={styles.list}>
        {content.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </Col>
  </Row>
);

TimelineBlock.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default TimelineBlock;
