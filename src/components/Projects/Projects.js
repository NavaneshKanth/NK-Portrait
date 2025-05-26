import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import edi from "../../Assets/Projects/edi.png";
// import erp from "../../Assets/Projects/erp.png";
// import blood from "../../Assets/Projects/bloodbank.png";
// import excelBilling from "../../Assets/Projects/excel_billing.png";
// import bearBilling from "../../Assets/Projects/bear_billing.png";
// import darkroom from "../../Assets/Projects/darkroom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={edi}
              isBlog={false}
              title="EDI Custom Clearance Import"
              description="Web-based system for streamlining import documentation and logistics management. Built using React.js for frontend and Spring Boot backend."
              ghLink="https://github.com/NavaneshKanth/ng_import_app_v1.git"
              demoLink="http://65.0.1.125:8080/ngpillai_import/#/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={erp}
              isBlog={false}
              title="ERP System"
              description="Enterprise Resource Planning system for managing inventory, billing, and client workflows. Developed with React.js and Spring Boot API integration."
              ghLink="https://github.com/NavaneshKanth/Erp_fullpackage.git"
              demoLink="http://35.154.221.117:8081/ngp_erp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={blood}
              isBlog={false}
              title="Blood Bank Web App"
              description="React-based blood bank application for managing donors, requests, and availability. Integrated backend for seamless updates and user management."
              ghLink="https://github.com/NavaneshKanth/-Blood-Bank-Management-System.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={Revive}
              isBlog={false}
              title="Revive Musical – Billing & Repair Management Web App"
              description="Custom billing software for a music instrument shop. Built using React.js and Express.js for product handling, invoice creation, and customer management."
              ghLink="https://github.com/NavaneshKanth/Revive-Musical-Billing-Repair-Management-Web-App.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={SupermarketBilling}
              isBlog={false}
              title="Supermarket Billing System"
              description="A role-based, multi-user supermarket billing application designed for individual shop owners to manage sales, inventory, and staff operations efficiently."
              ghLink="https://github.com/NavaneshKanth/Supermarket-Billing-System.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={darkroom}
              isBlog={false}
              title="DARKROOM Photography Website"
              description="Freelance project for a wedding and events photographer. Features a stylish dark-themed gallery, contact page, and service showcase built using React.js."
              ghLink="https://github.com/NavaneshKanth/Darkroom_Photography.git"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
