import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Multi-topic Information Retrieval Chatbot (University at Buffalo)"
              description="Engineered an NLP interface employing BERT deep learning for contextual bot replies via IR doc search. Implemented neural search with dense vector representations for document-query matching, resulting in ranked results
              by relevance. Integrated chitchat dataset for 99% accurate fallback responses in non-relevant scenarios"
              ghLink="https://github.com/shalmalee98/IR-chatbot"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Northstar (University at Buffalo)"
              description=" Crafted React-powered mobile and web apps for curated research paper collections with level assignments. Seamlessly integrated neo4j APIs for robust data storage, elevating authentication by 40%. Spearheaded a platform enabling collection sharing, propelling an 80% surge in user engagement"
              demoLink='https://alasia.info/'
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Application Developer (Rocket Software)"
              description="Worked in a team to develop a Low Code Application Builder using React for UI, Java for apis to retrive data. Using
              this Builder, users can create applications, add functional code, drag and drop components (buttons, textboxes, radio
              buttons, charts for data visualization), edit components using colors, fonts, sizes and also download, share and run the
              application."
              ghLink="https://github.com/shalmalee98/Application-builder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Decentralized Pharmaceutical Supply Chain Management (University at Buffalo)"
              description="Led design, development, and implementation of a pioneering pharmaceutical supply chain solution using blockchain
              and Solidity smart contracts. Streamlined collaboration among stakeholders for a transparent, traceable, and trusted drug supply chain. Transformed the pharmaceutical supply chain by establishing a single source of truth for drug transactions"
              ghLink="https://github.com/shalmalee98/PharmaSupplyChain-SmartContract"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={null}
              title="Intruder Detection System for Smart Homes (CCOEW, Pune)"
              description="Created an Automatic Visitor Monitoring System using IoT facilitating devices like PIR Sensor, Pi Camera and Raspberry Pi Minicomputer. When visitor comes near the door, sensor will sense his/her presence, capture visitor image and
              email it as attachment to user using ssmtp, mailutils, MIME."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={null}
              title="Interface for sanctions screening of transactions (CitiCorp, Pune)"
              description="Created an interface for sanctions screening of transactions against a predefined list of keywords to detect fraudful
              transactions and block them or authorize them using JavaServlets, JSP, mySQl, Apache Tomcat and AngularJS."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
