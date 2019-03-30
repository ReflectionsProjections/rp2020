import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TimelineBlock.scss';

class TimelineBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Default Title',
      date: 'January 01, 1970',
      content: 'Default Content',
      background: 'static/assets/2019logo.png'
    };
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
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{content}</p>
        <img src={background} alt="background" />
      </div>
    );
  }
}

TimelineBlock.propTypes = {
  event: PropTypes.element.isRequired
};

export default TimelineBlock;
