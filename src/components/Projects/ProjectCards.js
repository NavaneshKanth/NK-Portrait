// ProjectCards.js
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge"; // Import Badge for tech stack
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa"; // For View Details icon

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Split techStack string into an array for individual badges
  const techStackArray = props.techStack ? props.techStack.split(',').map(tech => tech.trim()) : [];

  return (
    <>
      <Card className="project-card-view">
        {props.images && props.images.length > 0 && (
          <div className="project-image-container">
            <Card.Img
              variant="top"
              src={props.images[0]} // Use the first image as the card's main visual
              alt="card-img"
              className="project-main-image"
            />
            <div className="image-overlay">
              <Button variant="primary" onClick={handleShow} className="overlay-button">
                <FaExternalLinkAlt /> &nbsp; View Details
              </Button>
            </div>
          </div>
        )}

        <Card.Body>
          <Card.Title className="project-card-title">{props.title}</Card.Title>
          <Card.Text className="project-card-description">
            {props.shortDescription}
          </Card.Text>

          {techStackArray.length > 0 && (
            <div className="tech-stack-badges">
              {techStackArray.slice(0, 3).map((tech, index) => ( // Show up to 3 tech badges on card
                <Badge key={index} pill className="tech-badge-card">
                  {tech}
                </Badge>
              ))}
              {techStackArray.length > 3 && (
                <Badge pill className="tech-badge-card">
                  ...
                </Badge>
              )}
            </div>
          )}

          <div className="project-buttons">
            {props.ghLink && (
              <Button variant="dark" href={props.ghLink} target="_blank" className="project-btn github-btn">
                <BsGithub /> &nbsp; GitHub
              </Button>
            )}
            {props.demoLink && (
              <Button
                variant="dark"
                href={props.demoLink}
                target="_blank"
                className="project-btn demo-btn"
              >
                <CgWebsite /> &nbsp; Demo
              </Button>
            )}
            {/* The "View Details" button is now part of the image overlay for better UX */}
          </div>
        </Card.Body>
      </Card>

      {/* Modal for Project Details */}
      <Modal show={show} onHide={handleClose} size="lg" centered className="project-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="modal-title-custom">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          {props.images && props.images.length > 0 && (
            <Carousel className="project-carousel">
              {props.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 project-carousel-img"
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}

          <h4 className="modal-section-title mt-4">Description:</h4>
          {props.fullDescription ? (
            // Render fullDescription with line breaks if it's a multi-line string
            props.fullDescription.split('\n').map((paragraph, index) => (
              <p key={index} className="modal-description-paragraph">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="modal-description-paragraph">{props.shortDescription}</p>
          )}


          {techStackArray.length > 0 && (
            <>
              <h4 className="modal-section-title mt-4">Tech Stack:</h4>
              <div className="tech-stack-badges-modal">
                {techStackArray.map((tech, index) => (
                  <Badge key={index} pill className="tech-badge-modal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </>
          )}

          {props.note && (
            <p className="modal-note-text mt-4">
              <strong>Note:</strong> {props.note}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          {props.ghLink && (
            <Button variant="dark" href={props.ghLink} target="_blank" className="project-modal-btn">
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}
          {props.demoLink && (
            <Button
              variant="dark"
              href={props.demoLink}
              target="_blank"
              className="project-modal-btn"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose} className="project-modal-btn">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCards;