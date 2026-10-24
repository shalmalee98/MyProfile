import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RevealOnScroll from "../RevealOnScroll";
import irChatbot from "../../Assets/Projects/ir-chatbot.jpg";
import northstar from "../../Assets/Projects/northstar.jpg";
import appBuilder from "../../Assets/Projects/app-builder.jpg";
import pharmaChain from "../../Assets/Projects/pharma-chain.jpg";
import smartHomeIot from "../../Assets/Projects/smart-home-iot.jpg";
import sanctionsScreening from "../../Assets/Projects/sanctions-screening.jpg";

const projects = [
  {
    imgPath: irChatbot,
    imgAlt: "Information retrieval chatbot with search and conversation UI",
    title: "Multi-topic Information Retrieval Chatbot",
    subtitle: "University at Buffalo",
    description:
      "Built an NLP chatbot that answers questions with BERT-powered contextual replies and information-retrieval document search. Used dense vector neural search for document-query matching and ranked results by relevance, with a chitchat fallback path for off-topic prompts.",
    ghLink: "https://github.com/shalmalee98/IR-chatbot",
  },
  {
    imgPath: northstar,
    imgAlt: "Northstar research paper collection web and mobile app",
    title: "Northstar",
    subtitle: "University at Buffalo",
    description:
      "Crafted React-powered web and mobile experiences for curated research paper collections with level assignments. Integrated Neo4j APIs for data storage and sharing workflows that improved authentication reliability and boosted collection engagement.",
    ghLink: "https://github.com/shalmalee98/northstar-webLocal",
  },
  {
    imgPath: appBuilder,
    imgAlt: "Low-code application builder with drag-and-drop components",
    title: "Low-Code Application Builder",
    subtitle: "Rocket Software",
    description:
      "Collaborated on a low-code builder with a React UI and Java APIs. Users can create apps, drag and drop components (buttons, inputs, charts), style them, add behavior, then save, share, download, and run the application.",
    ghLink: "https://github.com/shalmalee98/Application-builder",
    demoLink: "https://shalmalee98.github.io/Application-builder/",
  },
  {
    imgPath: pharmaChain,
    imgAlt: "Blockchain pharmaceutical supply chain tracking concept",
    title: "Decentralized Pharmaceutical Supply Chain",
    subtitle: "University at Buffalo",
    description:
      "Led design and implementation of a pharmaceutical supply-chain solution using blockchain and Solidity smart contracts. Improved transparency and traceability across stakeholders with a shared source of truth for drug transactions.",
    ghLink: "https://github.com/shalmalee98/PharmaSupplyChain-SmartContract",
    demoLink: "https://blockchain-578bb.web.app",
  },
  {
    imgPath: smartHomeIot,
    imgAlt: "Smart home IoT intruder detection with camera and sensors",
    title: "Intruder Detection System for Smart Homes",
    subtitle: "CCOEW, Pune",
    description:
      "Built an automatic visitor monitoring system with IoT devices (PIR sensor, Pi Camera, Raspberry Pi). On detection, the system captures a visitor image and emails it to the homeowner using ssmtp, mailutils, and MIME.",
  },
  {
    imgPath: sanctionsScreening,
    imgAlt: "Financial sanctions screening interface for transactions",
    title: "Sanctions Screening Interface for Transactions",
    subtitle: "CitiCorp, Pune",
    description:
      "Created an interface to screen transactions against a keyword watchlist, helping flag, block, or authorize potentially fraudulent activity. Built with Java Servlets, JSP, MySQL, Apache Tomcat, and AngularJS.",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section page-section">
      <Particle />
      <RevealOnScroll>
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p className="section-lead">
            Selected projects across healthcare, enterprise tooling, research,
            and IoT - with links where the code or demos are public.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((project) => (
              <Col md={4} className="project-card" key={project.title}>
                <ProjectCard
                  imgPath={project.imgPath}
                  imgAlt={project.imgAlt}
                  title={`${project.title} (${project.subtitle})`}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </RevealOnScroll>
    </Container>
  );
}

export default Projects;
