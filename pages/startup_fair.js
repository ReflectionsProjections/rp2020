import React from 'react';
import { isMobile } from 'react-device-detect';
import PDFViewer from '../UIComponents/PDFViewer';

const StartupFair = () => (
  <PDFViewer
    filepath={
      isMobile ? '/static/startup-fair-map.jpg' : '/static/startup-fair-map.pdf'
    }
  />
);

export default StartupFair;
