import React, { Component } from 'react'

class PDFViewer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.location = this.props.filepath
  }

  render() {
    return null
  }
}

export default PDFViewer
