import React from 'react';
import classNames from 'classnames';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Section from '../../UIComponents/Section';
import styles from './SponsorSection.scss';

const ImageViewer = props => {
  const { id, images } = props;

  let rowMax = 0;
  if (id === 'petab') {
    rowMax = 1;
  } else if (id === 'terab') {
    rowMax = 2;
  } else if (id === 'gigab') {
    rowMax = 3;
  } else if (id === 'megab') {
    rowMax = 4;
  } else if (id === 'allTiers') {
    rowMax = 4;
  }

  //  Bootstrap Has a 12 Column Grid Layout
  const GRID_NUM_COLUMNS = 12;
  const columnSize = GRID_NUM_COLUMNS / rowMax;

  const imageRows = [];
  let currRow = [];
  images.forEach(image => {
    currRow.push(
      <Col
        md={columnSize}
        key={image.name}
        className={classNames(
          'mb-3 col d-flex align-items-center justify-content-center',
          styles.image
        )}
      >
        <Image src={image.img} fluid />
      </Col>
    );
    if (currRow.length === rowMax) {
      imageRows.push(<Row>{currRow}</Row>);
      currRow = [];
    }
  });

  //  Need to calculate offset for last row if length !== rowMax to properly center
  if (currRow.length !== 0) {
    //  Figures out how many empty columns there are and divides it by two to center
    const offset = (GRID_NUM_COLUMNS - currRow.length * columnSize) / 2;
    const offsetCol = <Col md={offset} />;
    imageRows.push(
      <Row>
        {// Prepend empty offsetting column
        [offsetCol, ...currRow]}
      </Row>
    );
  }
  return imageRows;
};

const SponsorSection = ({ sponsors }) => {
  const hasAllTiersSection = (sponsors.allTiers || []).length > 0;
  return (
    <Section>
      <Section.Title className={styles.sponsorTitle}>Sponsors</Section.Title>
      <Section.Body>
        <Container>
          <Col
            id="sponsor-tier"
            lg={{ span: 10, offset: 1 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            className="text-center"
          >
            {sponsors.tier1 && sponsors.tier1.length > 0 && (
              <div
                className={classNames(styles.tier, {
                  [styles.firstTierSection]: !hasAllTiersSection
                })}
              >
                <ImageViewer id="petab" images={sponsors.tier1} />
              </div>
            )}

            {sponsors.tier2 && sponsors.tier2.length > 0 && (
              <div className={styles.tier}>
                <ImageViewer images={sponsors.tier2} id="terab" />
              </div>
            )}

            {sponsors.tier3 && sponsors.tier3.length > 0 && (
              <div className={styles.tier}>
                <ImageViewer images={sponsors.tier3} id="gigab" />
              </div>
            )}

            {sponsors.tier4 && sponsors.tier4.length > 0 && (
              <div className={styles.tier}>
                <ImageViewer images={sponsors.tier4} id="megab" />
              </div>
            )}

            {hasAllTiersSection && (
              <div className={styles.tier}>
                <ImageViewer images={sponsors.allTiers} id="allTiers" />
              </div>
            )}
          </Col>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default SponsorSection;
