import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './TimelineBlock.scss';

const TimelineBlock = ({ event: { date, content } }) => (
  <Row className={styles.timelineBlock}>
    <Col
      xs={{ span: 10, offset: 2 }}
      sm={{ span: 10, offset: 2 }}
      md={{ span: 10, offset: 2 }}
      lg={{ span: 2, offset: 1 }}
      className="text-lg-right"
    >
      <h3 className={styles.date}>{date}</h3>
    </Col>
    <Col
      xs={{ span: 10, offset: 2 }}
      sm={{ span: 10, offset: 2 }}
      md={{ span: 8, offset: 2 }}
      lg={{ span: 6, offset: 1 }}
      className={styles.content}
    >
      <ul className={styles.list}>
        {content.map(item => (
          <li className={styles.timelineItem}>{item}</li>
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
