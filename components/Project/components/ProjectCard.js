import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Modal from "react-bootstrap/Modal";

import ProjectModal from "./ProjectModal"

import styles from './ProjectCard.scss';
import { getQueryObject } from '../../../lib/path';

const ProjectCard = ({ name, cardImage, tagline, badge }) => {
  const [hrefObj, setHrefObj] = useState(undefined);
  const [showModal, setShowModal] = useState(false); 
  
  useEffect(() => {
    if (hrefObj === undefined) {
      setHrefObj({
        pathname: '/speaker',
        query: {
          ...getQueryObject(window),
          name
        }
      });
    }
  });

  const badgeJSX = badge ? <Badge variant="primary">{badge}</Badge> : null;

  return (
    <Link key={name}>
      {/*showModal && <ProjectModal props={name}/>*/}
      <Card className={styles.projectCard} key={name}  onClick={() => {setShowModal(true);}}>
        <Card.Img variant="top" src={cardImage} className={styles.cardImage} />
        <Card.Body>
          <Card.Title className={styles.projectName}>
            {name}
            <br />
            {badgeJSX}
          </Card.Title>
          <Card.Text className={styles.projectTagline}>{tagline}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProjectCard;
