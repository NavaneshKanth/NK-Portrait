import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            As a <span className="purple">Frontend Web Developer</span>, my journey is driven by a passion for transforming complex ideas into intuitive and engaging user experiences. Based out of <span className="purple">Tamil Nadu, India</span>, I thrive on crafting digital solutions that are not just functional but also delightful to interact with.
            <br />
            <br />
            I believe that great software is built on a foundation of clean code, thoughtful design, and a deep understanding of user needs. My commitment extends beyond development; it's about continuous learning and embracing new challenges to deliver impactful results.
            <br />
            <br />
            When I'm not immersed in code, you might find me:
          </p>
          <ul className="about-activity-list"> {/* Added a class for styling */}
            <li className="about-activity-item">
              <ImPointRight className="purple-icon" /> Diving into the pages of a good book, exploring new perspectives.
            </li>
            <li className="about-activity-item">
              <ImPointRight className="purple-icon" /> Advocating for justice and challenging societal inequalities, particularly against untouchability.
            </li>
            <li className="about-activity-item">
              <ImPointRight className="purple-icon" /> Observing birds, captivated by their freedom and the inherent unity they display beyond borders.
            </li>
            <li className="about-activity-item">
              <ImPointRight className="purple-icon" /> Losing myself in the serene beauty of nature, especially the majestic Western Ghats.
            </li>
            <li className="about-activity-item">
              <ImPointRight className="purple-icon" /> Pondering the vastness of space, the mysteries of galaxies, and the universe's grand design.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "30px" }}> {/* Added margin-top */}
            "My aim is to cultivate awareness, foster curiosity, and champion unity in a world often divided."
          </p>
          <footer className="blockquote-footer">Navaneshkanthna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;