import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import RevealOnScroll from "../RevealOnScroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRocket, FaHeartbeat, FaFlask } from "react-icons/fa";
import { MdScience, MdOutlineTrendingUp } from "react-icons/md";

const experiences = [
  {
    date: "Sept 2024 – Present",
    company: "Treatment Technologies & Insights Inc.",
    role: "Full-stack Engineer",
    location: "San Francisco, CA, US",
    headline:
      "Own CarePortal end to end - modern React UI, APIs, and HIPAA-aware workflows for global healthcare and government partners.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "PHP",
      "Laravel",
      "Livewire",
      "HTML",
      "CSS",
      "TailwindCSS",
      "Docker",
      "Git",
      "AWS",
      "HIPAA",
    ],
    bullets: [
      "Lead development of CarePortal, the core product (React, TypeScript, Node.js, Laravel, Livewire, AWS) across multiple organizations, sites, and 10K+ patients and clinicians.",
      "Led migration from a legacy system to a modern React application, improving performance and everyday UX for patients and care teams.",
      "Shipped secure auth (OAuth2, MFA, SSO) and reusable UI architecture (Tailwind, Redux, Livewire), reducing render latency about 37% and strengthening compliance posture.",
      "Built scalable APIs and reliability practices as the platform serves public-sector and healthcare partners worldwide.",
    ],
    icon: "health",
    accentFrom: "#4ea1f0",
    accentTo: "#3b82c4",
  },
  {
    date: "May 2024 – Sept 2024",
    company: "Capital Market Solutions LLC",
    role: "Software Engineer Intern",
    location: "San Francisco, CA, US",
    headline:
      "Improved regulated capital-markets tooling - faster UI workflows and clearer exception handling for operations teams.",
    tags: ["Java", "J2EE", "Angular", "FINRA", "Enterprise UI"],
    bullets: [
      "Revamped RSMS UI components, improving FINRA exception detection and resolution efficiency by about 17%.",
      "Streamlined workflows with Java, J2EE, and Angular 15, boosting efficiency and user engagement about 25%.",
    ],
    icon: "finance",
    accentFrom: "#5eb0e8",
    accentTo: "#3d7aab",
  },
  {
    date: "Sept 2022 – Sept 2024",
    company: "X-Lab (University at Buffalo)",
    role: "Research Intern",
    location: "Buffalo, NY, US",
    headline:
      "Research-grade web and mobile software for clinical trials - Dockerized services, automated delivery, and accessible UX.",
    tags: ["React Native", "Node.js", "Docker", "Kubernetes", "GitHub Actions"],
    bullets: [
      "Led development of a clinical trial management platform, reducing trial setup time about 30%.",
      "Built iOS and web apps with React Native, Node.js, Tailwind CSS, and Vite, improving accessibility and UX.",
      "Improved scalability and reliability using Docker and Kubernetes; automated deployments with GitHub Actions.",
    ],
    icon: "lab",
    accentFrom: "#4ea1f0",
    accentTo: "#2d6aa0",
  },
  {
    date: "May 2023 – Aug 2023",
    company: "Roche Molecular Systems",
    role: "Software Engineer Intern",
    location: "Santa Clara, CA, US",
    headline:
      "Made healthcare data easier to use - standard APIs linking patient records, lab results, and clinicians, plus cloud pipelines for safer flow of information.",
    tags: ["FHIR", "REST APIs", "AWS", "EMR/EHR", "Healthcare data"],
    bullets: [
      "Enabled secure EMR and EHR access for 300+ clinicians using Roche APIs and FHIR-aligned REST standards.",
      "Contributed to a cloud-based data pipeline to streamline how clinical information moves between systems and stakeholders.",
      "Improved reliability through automated testing (Selenium, Mocha) and serverless patterns on AWS, cutting latency about 60% for key paths.",
    ],
    icon: "science",
    accentFrom: "#5eb0e8",
    accentTo: "#3b82c4",
  },
  {
    date: "Oct 2020 – Jul 2022",
    company: "Rocket Software",
    role: "Software Developer",
    location: "Pune, India",
    headline:
      "Backend-heavy platform work for supply-chain data exchange - stable services, real business transactions, and tight collaboration with design, QA, and product.",
    tags: ["Python", "Kafka", "Elasticsearch", "React", "EDI"],
    bullets: [
      "Built and maintained backend services for a platform that powers data exchange between supply chain partners at enterprise scale.",
      "Worked closely with design, testing, and product teams on dependable releases for high-volume transactional workloads.",
      "Delivered Python REST APIs with Elasticsearch and Kafka; internal React and Redux tooling; automated EDI workflows that cut manual work about 48%.",
      "Raised quality with Jest and process improvements, reducing critical defects about 90%.",
    ],
    icon: "rocket",
    accentFrom: "#4ea1f0",
    accentTo: "#2d6aa0",
  },
];

function roleIcon(kind) {
  switch (kind) {
    case "rocket":
      return <FaRocket aria-hidden />;
    case "health":
      return <FaHeartbeat aria-hidden />;
    case "lab":
      return <FaFlask aria-hidden />;
    case "science":
      return <MdScience aria-hidden />;
    case "finance":
      return <MdOutlineTrendingUp aria-hidden />;
    default:
      return <FaRocket aria-hidden />;
  }
}

function Experience() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (idx) => {
    setExpanded((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="experience-section page-section" id="experience">
      <Container fluid className="home-section">
        <Particle />
        <RevealOnScroll>
        <Container className="home-content">
          <Row>
            <h1
              className="project-heading experience-section-title"
              style={{ textAlign: "center", marginBottom: "12px" }}
            >
              <strong className="purple">Experience</strong>
            </h1>
            <p className="experience-section-sub">
              Tap a card to explore impact and tech - built for quick scanning and
              deeper reads.
            </p>
            <VerticalTimeline
              className="experience-vertical-timeline"
              lineColor="rgba(148, 163, 184, 0.22)"
            >
              {experiences.map((exp, idx) => {
                const isOpen = expanded === idx;
                const panelId = `exp-panel-${idx}`;
                const btnId = `exp-toggle-${idx}`;

                return (
                  <VerticalTimelineElement
                    key={exp.company + exp.date}
                    className="vertical-timeline-element--work experience-vte"
                    contentStyle={{
                      background: "transparent",
                      boxShadow: "none",
                      padding: 0,
                    }}
                    contentArrowStyle={{ display: "none" }}
                    date={exp.date}
                    dateClassName="experience-date experience-date-on-dark"
                    iconStyle={{
                      background: `linear-gradient(135deg, ${exp.accentFrom}, ${exp.accentTo})`,
                      color: "#fff",
                      boxShadow: `0 0 14px ${exp.accentFrom}66`,
                    }}
                    icon={roleIcon(exp.icon)}
                  >
                    <div className="experience-tilt-wrap">
                      <article
                        className={`experience-card ${
                          isOpen ? "experience-card--open" : ""
                        }`}
                      >
                        <div className="experience-card-inner">
                          <h3 className="experience-company">{exp.company}</h3>
                          {exp.companyLegal ? (
                            <p className="experience-company-legal">
                              {exp.companyLegal}
                            </p>
                          ) : null}
                          <h4 className="experience-role">{exp.role}</h4>
                          <p className="experience-location">{exp.location}</p>
                          <p className="experience-headline">{exp.headline}</p>
                          <ul
                            className="experience-tags"
                            aria-label="Technologies and domains"
                          >
                            {exp.tags.map((tag) => (
                              <li key={tag}>{tag}</li>
                            ))}
                          </ul>
                          <button
                            id={btnId}
                            type="button"
                            className="experience-expand-btn"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggle(idx)}
                          >
                            {isOpen ? "Hide highlights" : "View highlights"}
                            <span
                              className="experience-expand-chevron"
                              aria-hidden
                            >
                              {isOpen ? "▲" : "▼"}
                            </span>
                          </button>
                          <div
                            id={panelId}
                            role="region"
                            aria-labelledby={btnId}
                            aria-hidden={!isOpen}
                            className={`experience-panel ${
                              isOpen ? "experience-panel--open" : ""
                            }`}
                          >
                            <ul className="experience-bullets">
                              {exp.bullets.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </Row>
        </Container>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

export default Experience;
