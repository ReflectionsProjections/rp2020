import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TimelineBlock.scss';

class TimelineBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { event } = this.props;
    this.setState({
      title: event.title,
      date: event.date,
      content: event.content,
      background: event.background
    });
  }

  render() {
    const { title, date, content, background } = this.state;
    return (
      <div className="timeline-block">
        <div className="timeline-block-content">
          <h1 className="timeline-block-title">{title}</h1>
          <h3 className="timeline-block-date">{date}</h3>
          <p className="timeline-block-content">{content}</p>
          <img
            className="timeline-block-img"
            src={background}
            alt="background"
          />
        </div>
      </div>
    );
  }
}

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
