import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Mitia6.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              So, <span className="purple"> what about ME? </span> 
            </h1>
            <p className="home-about-body">
              I am a young technology enthusiast..
              <br />
              <br />Also extremely motivate to constantly deveolopp 
              <i>
                <b className="purple"> my SKILLS </b>
              </i>
              <br />
              <br />
              and grow
                <b className="purple">PROFESSIONALLY . </b>
              <br />
              <br />

              I am confident in my ability to come up 
              with <b className="purple">interesting ideas</b> to

                <b className="purple">
                  {" "}
                  move the project forward
                </b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>YOU ARE INTERESTED ?</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mitiafiniavana"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Mitia_Fi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mitia-finiavana-jos%C3%A9-heriniaina-tafitasoa-4b19b72ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://web.facebook.com/mitia.grosminet"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
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
