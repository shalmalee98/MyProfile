import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAws,
  DiHtml5,
  DiCss3,
  DiAngularSimple,
  DiDocker,
  DiGoogleCloudPlatform
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiApachekafka,
  SiElasticsearch,
  SiMysql,
  SiNeo4J,
  SiTerraform,
  SiExpress,
  SiChai,
  SiMocha,
  SiGraphql,
  SiKubernetes
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>NodeJS</h5>
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
        <DiMongodb />
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h5>Postgresql</h5>
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
        <DiAngularSimple />
        <h5>Angular</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
        <h5>Apache Kafka</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <h5>AWS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5>Firebase</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiKubernetes/>
      <h5>Kubernetes</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDocker/>
      <h5>Docker</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
