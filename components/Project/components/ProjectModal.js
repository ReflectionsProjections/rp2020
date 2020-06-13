import React, { useState, useEffect } from 'react';

import Modal from "react-bootstrap/Modal";

import styles from './ProjectCard.scss';


const ProjectModal = ({name}) => {
  return (
    <Modal
        show={true}
        onHide={() => {
        props.setShowModal(false);
        }}
    >
        <Modal.Header>
        <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>hello</p>
        </Modal.Body>
    </Modal>
  );

};

export default ProjectModal;
