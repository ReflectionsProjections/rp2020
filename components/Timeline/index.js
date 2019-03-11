import React, { Component } from 'react'
import TimelineBlock from './TimelineBlock'

import './Timeline.scss'

class Timeline extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <TimelineBlock title="Beginning"/>
            </div>
        )
    }
}

export default Timeline