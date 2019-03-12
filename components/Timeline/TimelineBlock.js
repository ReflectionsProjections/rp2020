import React, { Component } from 'react';

import './TimelineBlock.scss';

class TimelineBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Default Title'
    };
  }

  componentDidMount() {
    const { title } = this.props;
    this.setState({
      title
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default TimelineBlock;
