import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{ marginTop: "100px", marginBottom: "65px" }}
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div className="about-card-intro">
            <p>
              Hi, I&apos;m{" "}
              <span className="purple">Shal</span> (
              <span className="purple">Shalmalee Shenolikar</span>
              ) - a <span className="purple">full-stack engineer</span> in{" "}
              <span className="purple">San Francisco</span> with a{" "}
              <span className="purple">
                Master&apos;s in Computer Science (University at Buffalo)
              </span>
              . I build for <span className="purple">enterprise, healthcare,</span>{" "}
              and <span className="purple">regulated</span> environments.
            </p>
            <p>
              <span className="purple">Rocket Software</span> (supply chain),{" "}
              <span className="purple">Roche</span> (clinical data &amp; APIs),
              and now{" "}
              <span className="purple">
                CarePortal at Treatment Technologies &amp; Insights
              </span>
               - React, APIs, and dependable releases for patients and partners. I
              care about{" "}
              <span className="purple">
                owning products end to end, crisp UX, and scalable systems
              </span>
              .
            </p>
          </div>

          <p className="about-card-tagline">
            &ldquo;Build things that earn trust in production.&rdquo;
          </p>
          <footer className="blockquote-footer">Shalmalee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
