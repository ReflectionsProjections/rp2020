import React, { Component } from 'react';
import axios from 'axios';
import TimelineBlock from './TimelineBlock';

import './Timeline.scss';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: []
    };
  }

  componentDidMount() {
    axios.get('/static/Timeline_data.json').then(response => {
      this.setState({
        blocks: response.data
      });
    });
  }

  render() {
    const { blocks } = this.state;
    return (
      <div>
        {blocks.map(block => (
          <TimelineBlock key={block} title={block} />
        ))}
      </div>
    );
  }
}
export default Timeline;
