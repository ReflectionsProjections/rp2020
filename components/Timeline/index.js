import React, { Component } from 'react';
import axios from 'axios';
import TimelineBlock from './TimelineBlock';

import './Timeline.scss';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: undefined
    };
  }

  componentDidMount() {
    axios.get('/static/Timeline_data.json').then(response => {
      this.setState({
        events: response.data
      });
    });
  }

  render() {
    const { events } = this.state;
    if (!events) {
      return <div>Loading</div>;
    }
    return (
      <div>
        {events.map(event => (
          <TimelineBlock key={event} title={event} />
        ))}
      </div>
    );
  }
}
export default Timeline;
