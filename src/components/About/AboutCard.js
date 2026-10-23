import React from "react";
import Card from "react-bootstrap/Card";
import RevealOnScroll from "../RevealOnScroll";

function AboutCard() {
  return (
    <RevealOnScroll className="about-card-reveal">
      <Card className="quote-card-view about-card-pro">
        <Card.Body className="about-card-body">
          <p className="about-card-eyebrow">About</p>
          <h2 className="about-card-heading">
            <span className="about-card-name">Shalmalee Shenolikar</span>
            <span className="about-card-sub">
              Full-stack engineer · San Francisco
            </span>
          </h2>
          <ul className="about-card-pills" aria-label="Focus areas">
            <li>Full-stack product</li>
            <li>Healthcare &amp; regulated tech</li>
            <li>LLMs &amp; AI tooling</li>
          </ul>

          <div className="about-card-intro">
            <p>
              I&apos;m a <span className="purple">full-stack engineer</span> with a{" "}
              <span className="purple">
                Master&apos;s in Computer Science (University at Buffalo)
              </span>
              . I build across the stack -{" "}
              <span className="purple">
                React/TypeScript front ends, Laravel and Node APIs, cloud, data,
                and LLM features
              </span>{" "}
              - especially where{" "}
              <span className="purple">clarity, scale, and compliance</span> have
              to land together.
            </p>
            <p>
              That path runs from{" "}
              <span className="purple">Rocket Software</span> (enterprise
              platforms) to <span className="purple">Roche</span> (clinical data
              and FHIR), and today{" "}
              <span className="purple">
                Care Portal at Treatment Technologies &amp; Insights
              </span>
              , where I own product delivery for patients and clinicians - including{" "}
              <span className="purple">
                AWS Bedrock LLM chat, OAuth/auth reliability, and AI-assisted
                engineering workflows
              </span>
              . I care about shipping systems that stay{" "}
              <span className="purple">
                trustworthy, observable, and ready for production
              </span>
              .
            </p>
          </div>

          <p className="about-card-tagline">
            &ldquo;Own the product end to end - UI, APIs, data, and the AI that
            makes it useful.&rdquo;
          </p>
          <footer className="blockquote-footer about-card-signoff">
            Shalmalee Shenolikar
          </footer>
        </Card.Body>
      </Card>
    </RevealOnScroll>
  );
}

export default AboutCard;
