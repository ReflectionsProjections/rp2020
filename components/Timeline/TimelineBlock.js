import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineBlock.scss';

const TimelineBlock = ({ event: { date, title, content } }) => (
  <div className={styles.timelineBlock}>
    <h3 className={styles.date}>{date}</h3>
    <div className={styles.content}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{content}</p>
    </div>
  </div>
);

TimelineBlock.defaultProps = {
  event: PropTypes.shape({
    title: 'Default Title',
    date: 'January 01, 1970',
    content: 'Default Content',
    background: 'static/assets/2019logo.png'
  })
};

TimelineBlock.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
  })
};

export default TimelineBlock;
