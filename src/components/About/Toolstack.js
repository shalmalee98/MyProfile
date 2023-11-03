import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiBitbucket, DiDocker, DiGithub } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiWindows,
  SiUbuntu,
  SiMacos,
  SiJenkins,
  SiGithubactions
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <h5>MacOS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>Visual Studio Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h5>Slack</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <h5>Jenkins</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <h5>Github Actions</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
        <h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBitbucket/>
        <h5>Bitbucket</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDocker/>
      <h5>Docker</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
