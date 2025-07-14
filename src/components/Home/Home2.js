// Home2.js
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt"; 
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center justify-content-center flex-column-reverse flex-md-row">
          <Col md={8} className="home-about-description text-center text-md-start">
            <h1 className="about-heading">
              LET ME <strong className="purple">INTRODUCE</strong> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple">Navaneshkanth</b>, a passionate{" "}
              <b className="purple">Frontend Developer</b> based in Dubai 🇦🇪.
              With over <b className="purple">3 years of experience</b>, I love
              building modern, intuitive, and high-performing web applications.
              <br />
              <br />
              My expertise lies in
              <b className="purple"> React.js, JavaScript, HTML, CSS,</b> and
              <b className="purple"> Tailwind CSS</b>. I'm also proficient in
              integrating <b className="purple">REST APIs</b> and have hands-on
              experience with backend frameworks like{" "}
              <b className="purple">Spring Boot</b> and
              <b className="purple"> Express.js</b>.
              <br />
              <br />
              What truly drives me is crafting{" "}
              <b className="purple">seamless UI/UX experiences</b> and developing{" "}
              <b className="purple">scalable web solutions</b>. I thrive on
              collaboration, continuous learning, and contributing to innovative
              projects.
              <br />
              <br />
              I'm currently seeking exciting opportunities where I can apply my
              skills and grow further in the dynamic field of modern web
              development. Let's build something amazing together!
            </p>
          </Col>

          {/* Avatar Column */}
          <Col md={4} className="myAvtar text-center mb-5 mb-md-0">
            <Tilt className="avatar-tilt-effect">
              <img src={myImg} className="img-fluid home-avatar-img" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Social Media Section */}
        <Row className="mt-5">
          <Col md={12} className="home-about-social text-center">
            <h1 className="social-heading">FIND ME ON</h1>
            <p className="social-connect-text">
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/navaneshkanth"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Navanesh_kanth?s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/navaneshkanth/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/navanesh_kanth?igsh=MXIwbTJuY2VlYXcwZg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;