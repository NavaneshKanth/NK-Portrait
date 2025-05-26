import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Your commonly used tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>

      {/* Optional tools, keep/remove as per your workflow */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> {/* Slack - Communication */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Figma - Design tool */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel - Hosting */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify /> {/* Netlify - Hosting */}
      </Col>

      {/* Your OS platform */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos /> {/* MacOS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows /> {/* Windows */}
      </Col>
    </Row>
  );
}

export default Toolstack;
