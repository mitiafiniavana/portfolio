import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey , just call me <span className="purple"> Mitia </span>
            I'm from <span className="purple"> Anosizato, Antananarivo, Madagascar.</span>
            <br />
            I have completed 3 years of undergraduate studies in web development, specializing in full-stack JavaScript.
            <br />
            Additionally, I have expertise in the field of Frontend development.
            <br />
            <br />
            Apart from coding and working, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing  Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing BasketBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "!"{" "}
          </p>
          <footer className="blockquote-footer">Mitia Finiavana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
