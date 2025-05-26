import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Navaneshkanthna</span>
            &nbsp;from <span className="purple">Tamil Nadu, India</span>.
            <br />
            I am a Frontend Web Developer passionate about building impactful digital experiences.
            <br />
            <br />
            Apart from coding, here’s a little more about me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Book Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Speaking out against untouchability and injustice
            </li>
            <li className="about-activity">
              <ImPointRight /> Admiring birds for their freedom and unity beyond borders
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the beauty of nature, especially the Western Ghats
            </li>
            <li className="about-activity">
              <ImPointRight /> Thinking deeply about space, galaxies, and the universe
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to stay aware, stay curious, and stand for unity beyond divisions."
          </p>
          <footer className="blockquote-footer">Navaneshkanthna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
