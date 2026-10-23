import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiAngularSimple,
  DiDocker,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiApachekafka,
  SiMysql,
  SiGraphql,
  SiKubernetes,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiAmazonaws,
} from "react-icons/si";
import { FaRobot } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h5>TypeScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
        <h5>PHP</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <h5>Laravel</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h5>Java</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h5>HTML5</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h5>CSS3</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <h5>Angular</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <h5>GraphQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <h5>MySQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h5>PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h5>Redis</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <h5>Apache Kafka</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h5>AWS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot />
        <h5>LLMs / AI</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <h5>Kubernetes</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <h5>Docker</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
