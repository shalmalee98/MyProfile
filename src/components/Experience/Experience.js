import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiWorkplace } from "react-icons/si";

function Experience() {
  const experiences = [
    {
      date: "Sept 2024 – Present",
      company: "Treatment Technologies & Insights Inc.",
      role: "Frontend Engineer",
      location: "San Francisco, CA, US",
      bullets: [
        "Led end-to-end development of a scalable Care Portal (React, TypeScript, Node.js, Laravel, Livewire, AWS) serving 5+ organizations, multiple sites, and 10K+ patients & clinicians.",
        "Architected reusable UI components (Tailwind CSS, Redux, Livewire), reducing rendering latency by 37%.",
        "Integrated secure auth workflows with OAuth2, MFA, and SSO, ensuring HIPAA compliance and cutting compliance vulnerabilities by 41%.",
        "Migrated from server-side rendering to Inertia.js, doubling development speed and raising productivity by 23%."
      ]
    },
    {
      date: "May 2024 – Sept 2024",
      company: "Capital Market Solutions LLC",
      role: "Software Engineer Intern",
      location: "San Francisco, CA, US",
      bullets: [
        "Revamped RSMS UI components, improving FINRA exception detection and resolution efficiency by 17%.",
        "Streamlined workflows with Java, J2EE, Angular v15, boosting efficiency and user engagement by 25%."
      ]
    },
    {
      date: "Sept 2022 – Sept 2024",
      company: "X-Lab (University at Buffalo)",
      role: "Research Intern",
      location: "Buffalo, NY, US",
      bullets: [
        "Led a team to develop a clinical trial management platform, reducing trial setup time by 30%.",
        "Built iOS & web apps with React Native, Node.js, TailwindCSS, Vite, enhancing accessibility and user experience.",
        "Boosted scalability and reliability using Docker and Kubernetes.",
        "Automated deployments and streamlined workflows via GitHub Actions."
      ]
    },
    {
      date: "May 2023 – Aug 2023",
      company: "Roche Molecular Systems",
      role: "Software Engineer Intern",
      location: "Santa Clara, CA, US",
      bullets: [
        "Enabled secure EMR/EHR data access for 300+ clinicians via Roche APIs and FHIR RESTful standards.",
        "Architected a real-time communication system with AWS serverless, reducing latency by 60%.",
        "Improved system reliability by 95% through comprehensive testing with Selenium and Mocha."
      ]
    },
    {
      date: "Oct 2020 – Jul 2022",
      company: "Rocket Software",
      role: "Software Developer",
      location: "Pune, India",
      bullets: [
        "Designed scalable Python REST APIs with Elasticsearch and Kafka, achieving 99% data processing accuracy.",
        "Built a React.js + Redux app with Material UI, improving efficiency by 40%.",
        "Reduced critical issues by 90% through Jest testing and automated EDI workflows, cutting manual work by 48%.",
        "Enhanced UX using Figma, Material UI, and Bootstrap; optimized performance with Webpack, Babel, npm, and Axios."
      ]
    }
  ];

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
              <strong className="purple">Experience</strong>
            </h1>
            <VerticalTimeline>
              {experiences.map((exp, idx) => (
                <VerticalTimelineElement
                  key={idx}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "linear-gradient(135deg, #ffffff, #f8f9fc)",
                    color: "#333",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    padding: "20px"
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #f8f9fc" }}
                  date={exp.date}
                  dateClassName="experience-date"
                  iconStyle={{
                    background: "linear-gradient(135deg, #8e44ad, #9b59b6)",
                    color: "#fff",
                    boxShadow: "0 0 8px rgba(155, 89, 182, 0.6)"
                  }}
                  icon={<SiWorkplace />}
                >
                  <h3 className="vertical-timeline-element-title" style={{ color: "#8e44ad" }}>
                    {exp.company}
                  </h3>
                  <h5 className="vertical-timeline-element-title" style={{ marginBottom: "5px" }}>
                    {exp.role}
                  </h5>
                  <h6 style={{ color: "#34495e", marginBottom: "15px" }}>{exp.location}</h6>
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {exp.bullets.map((point, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: "1.6rem",
                          marginBottom: "8px"
                        }}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </Row>
        </Container>
      </Container>

      <style jsx>{`
        .purple {
          color: #8e44ad;
        }
        .experience-date {
          color: #ffff !important;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}

export default Experience;
