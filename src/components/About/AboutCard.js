import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card
      className="quote-card-view about-card-pro"
      style={{ marginTop: "100px", marginBottom: "65px" }}
    >
      <Card.Body className="about-card-body">
        <p className="about-card-eyebrow">About</p>
        <h2 className="about-card-heading">
          <span className="about-card-name">Shalmalee Shenolikar</span>
          <span className="about-card-sub">
            Full-stack engineer · San Francisco
          </span>
        </h2>
        <ul className="about-card-pills" aria-label="Focus areas">
          <li>Product &amp; platform</li>
          <li>Healthcare &amp; regulated tech</li>
          <li>Performance &amp; reliability</li>
        </ul>

        <div className="about-card-intro">
          <p>
            I&apos;m a <span className="purple">full-stack engineer</span> with a{" "}
            <span className="purple">
              Master&apos;s in Computer Science (University at Buffalo)
            </span>
            . I gravitate toward work where{" "}
            <span className="purple">clarity, scale, and compliance</span> all have
            to land together - especially in{" "}
            <span className="purple">enterprise and healthcare</span> settings.
          </p>
          <p>
            That thread runs from{" "}
            <span className="purple">Rocket Software</span> (supply chain systems) to{" "}
            <span className="purple">Roche</span> (clinical data and APIs), and today{" "}
            <span className="purple">
              CarePortal at Treatment Technologies &amp; Insights
            </span>
            , where I ship <span className="purple">React</span> front ends,{" "}
            <span className="purple">APIs</span>, and releases that hold up for patients
            and partners. I care about{" "}
            <span className="purple">
              owning features end to end, crisp UX, and systems that stay observable
              in production
            </span>
            .
          </p>
        </div>

        <p className="about-card-tagline">
          &ldquo;Make the boring parts reliable so the interesting parts can
          shine.&rdquo;
        </p>
        <footer className="blockquote-footer about-card-signoff">
          Shalmalee Shenolikar
        </footer>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
