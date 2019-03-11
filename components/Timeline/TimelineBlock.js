import React, { Component } from 'react'

import './TimelineBlock.scss'

class TimelineBlock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default TimelineBlock