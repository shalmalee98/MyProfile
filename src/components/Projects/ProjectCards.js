import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const hasGithub = Boolean(props.ghLink);
  const hasDemo = Boolean(props.demoLink);

  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.imgAlt || props.title || "Project preview"}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="project-card-actions">
          {hasGithub ? (
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub /> &nbsp;
              {props.isBlog === true ? "Blog" : "GitHub"}
            </Button>
          ) : null}
          {hasDemo ? (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite /> &nbsp;Demo
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
