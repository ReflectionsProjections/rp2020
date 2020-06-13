import React from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Section from '../../UIComponents/Section';

import ProjectCard from './components/ProjectCard';

import styles from './Project.scss';

const Project = ({ projects }) => {
  return (
    <Section className="project-section">
      <Section.Header>
        <Section.Title>Projects</Section.Title>
      </Section.Header>
      <Section.Body>
        <Container>
          <Row>
            {projects.length === 0 ? (
              <h4>Loading...</h4>
            ) : (
              <>
                {projects.map(project => {
                  const { name, image, tagline, badge, bio } = project;
                  console.log(bio); 
                  const imageURL = `${image}.png`;
                  return (
                    <Col
                      className={styles.projectCardContainer}
                      sm={12}
                      md={6}
                      lg={4}
                    >
                      <ProjectCard
                        name={name}
                        cardImage={imageURL}
                        tagline={tagline}
                        badge={badge}
                        bio={bio}
                      />
                    </Col>
                  );
                })}
              </>
            )}
          </Row>
        </Container>
      </Section.Body>
    </Section>
  );
};

export default Project;
