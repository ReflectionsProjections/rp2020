import React, { Component } from 'react'

class Sponsor extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.location = '/static/corporateletter.pdf'
  }

  render() {
    return null
  }
}

export default Sponsor
