// Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectdetails from '../../Assets/projectdetails.json'; // Your project data

// Import your custom CSS for Projects section
// import "./Projects.css"; // Make sure to create this file or add to your main CSS

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="project-subheading">
          Here are some of the projects I've built, showcasing my expertise and problem-solving skills.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectdetails.map((project) => (
            <Col md={6} lg={4} className="project-card-col" key={project.id}> {/* Changed md to 6 and added lg for better responsiveness */}
              <ProjectCard
                title={project.title}
                shortDescription={project.shortDescription} // Renamed prop for clarity
                fullDescription={project.fullDescription}
                techStack={project.techStack}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                images={project.images}
                note={project.note}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;