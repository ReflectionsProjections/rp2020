import React, { Component } from 'react'
import PDFViewer from '../components/Util/PDFViewer'

class Sponsor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <PDFViewer filepath='/static/corporateletter.pdf'/>
    )
  }
}

export default Sponsor
