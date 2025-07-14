import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { FaCode, FaReact, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

function Home() {
  const infoCards = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      text: "Writing scalable and maintainable code.",
    },
    {
      icon: <FaReact />,
      title: "React Specialist",
      text: "Expert in building UI with React.js.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack",
      text: "Handling both frontend and backend APIs.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive UI",
      text: "Mobile-first and adaptive layout design.",
    },
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">Navanesh Kanth</strong>
              </h1>

              <div style={{ padding: 30, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="d-flex justify-content-center align-items-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          {/* Cards Row */}
          <Row className="mt-5 g-4">
            {infoCards.map((card, index) => (
              <Col md={3} sm={6} xs={12} key={index}>
                <Card className="text-center h-100 shadow-lg p-3 rounded bg-dark text-light">
                  <div style={{ fontSize: "2rem", color: "#915EFF" }}>
                    {card.icon}
                  </div>
                  <h5 className="mt-3">{card.title}</h5>
                  <p style={{ fontSize: "0.9rem" }}>{card.text}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
