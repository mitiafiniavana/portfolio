import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/";
//import editor from "../../Assets/Projects/";
//import chatify from "../../Assets/Projects/";
//import suicide from "../../Assets/Projects/";
//import bitsOfCode from "../../Assets/Projects/";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={chatify}
              isBlog={false}
              title="CRUD"
              description="Create Read Uptade Delete made with JAVA."
              ghLink="https://github.com/mitiafiniavana/Crud"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={bitsOfCode}
              isBlog={false}
              title="G-Tech Project"
              description="Management of students and professors in a university: attendance, absence. Management of class hours and modules. Management of rooms: available rooms, occupied rooms. Grade report... Made with ReactJS and Laravel for the Backend."
              ghLink="https://github.com/mitiafiniavana/Proj"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={editor}
              isBlog={false}
              title="FrontEnd Awards"
              description="Result from the competition i've done with my team. Made with ReactJS"
              ghLink="https://github.com/mitiafiniavana/Front_End_Awards_2022"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={leaf}
              isBlog={false}
              title="Inscription"
              description="A type of incription with dark and ligth mode. Made with pur CSS."
              ghLink="https://github.com/mitiafiniavana/Inscription_Dark-Light"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={suicide}
              isBlog={false}
              title="Film App"
              description="An application where we search a title of a movie existing, made with JavaScript."
              ghLink="https://github.com/mitiafiniavana/testExamenpwa"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
