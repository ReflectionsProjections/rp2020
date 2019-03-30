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
    axios.get('/static/data/timeline.json').then(res => {
      const events = res.data;
      this.setState({ events });
    });
  }

  render() {
    // Utilize this.state.events here for your components
    // console.log(this.state.events);
    return <TimelineBlock title="In the Beginning" />;
  }
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
      <div className="timeline-container">
        {events.map(event => (
          <TimelineBlock key={event.content} event={event} />
        ))}
      </div>
    );
  }
}
export default Timeline;
