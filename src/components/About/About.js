import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"; // Assuming Particle component for background
import Techstack from "./Techstack"; // Your tech stack icons
import Aboutcard from "./AboutCard"; // Your About Me text card
import laptopImg from "../../Assets/about.png"; // Your about section image
import Toolstack from "./Toolstack"; // Your tools stack icons
import Github from "./Github"; // Your GitHub Calendar

// Import your custom CSS for About section
// import "./About.css"; // Make sure to create this file or add to your main CSS

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row" style={{ padding: "10px" }}>
          {/* About Card Column */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }} className="about-main-heading">
              A Bit More <strong className="purple">About My Journey</strong>
            </h1>
            <Aboutcard />
          </Col>
          {/* Image Column */}
          <Col
            md={5}
            className="about-img"
            style={{ paddingTop: "60px", paddingBottom: "50px" }} // Adjusted padding for better alignment
          >
            <img src={laptopImg} alt="about" className="img-fluid about-laptop-img" />
          </Col>
        </Row>

        <h1 className="skillset-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="tools-heading">
          <strong className="purple">Tools</strong> I Use
        </h1>
        <Toolstack />

        <Github /> {/* Now rendering the Github component */}
      </Container>
    </Container>
  );
}

export default About;