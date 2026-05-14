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
              ). I&apos;m a frontend and full-stack engineer based in{" "}
              <span className="purple">San Francisco, CA</span>, with a{" "}
              <span className="purple">
                Master&apos;s in Computer Science from the University at Buffalo
              </span>
              . I build and scale products across{" "}
              <span className="purple">
                enterprise systems, healthcare, and startups
              </span>
              .
            </p>
            <p>
              I started at{" "}
              <span className="purple">Rocket Software</span>, on a platform for
              supply-chain data exchange—owning backend services and shipping
              alongside design, QA, and product so releases stayed dependable for
              real-world transactions. During my master&apos;s, I interned at{" "}
              <span className="purple">Roche</span>, connecting patient records,
              lab data, and clinicians through standardized APIs and cloud
              pipelines so critical information was easier to access. Today I
              lead work on{" "}
              <span className="purple">
                CarePortal at Treatment Technologies &amp; Insights
              </span>
              , from a focused frontend
              role into full-stack ownership: legacy-to-React migration, APIs,
              and reliability for global healthcare and public-sector partners.
            </p>
            <p>
              I care about owning products end to end, tightening user
              experience, and shipping systems that stay{" "}
              <span className="purple">impactful, observable, and scalable</span>
              .
            </p>
          </div>

          <p style={{ color: "rgb(155 126 172)" }}>
            &ldquo;Build things that earn trust in production.&rdquo;
          </p>
          <footer className="blockquote-footer">Shalmalee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
