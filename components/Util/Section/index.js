import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';

import styles from './Section.scss';

const Section = ({ children }) => (
  <Container>
    <section>
      <Container>{children}</Container>
    </section>
  </Container>
);

Section.Title = ({ children }) => <h1 className={styles.title}>{children}</h1>;

Section.Subtitle = ({ children }) => (
  <h2 className={styles.subtitle}>{children}</h2>
);

Section.Body = ({ children }) => <>{children}</>;

Section.propTypes = {
  children: PropTypes.node.isRequired
};

export default Section;
