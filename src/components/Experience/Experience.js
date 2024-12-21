import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiWorkplace } from "react-icons/si";

function Experience() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
        <h1 className="project-heading" style={{textAlign: 'center'}}>
          <strong className="purple">Experience</strong>
        </h1>
          <VerticalTimeline>
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#6A1B9A', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="May 2024 - September 2024"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
              <h3 className="vertical-timeline-element-title">Treatment Technologies & Insights Inc.</h3>
              <h5 className="vertical-timeline-element-title">Frontend Engineer</h5>
              <h5 style={{color: 'darkblue'}}>Los Angeles, CA, US</h5>
              <h6>
              • Designed and developed responsive web interfaces for cancer and chronic illness treatment portals usingPHP, Laravel, and Livewire to create seamless user experiences for admin, staff, and patients.
              </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#C70039', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="May 2024 - September 2024"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Capital Market Solutions LLC</h3>
                <h5 className="vertical-timeline-element-title">Software Engineer</h5>
                <h5 style={{color: 'darkblue'}}>Remote, NJ, US</h5>
                <h6>
                • Designed user-friendly UI components with PrimeNG, Material, Bootstrap using Angular v15.
                </h6>
                <h6>
                • Created ETL pipelines for Regulatory Surveillance Management System product identifying daily shares transaction exceptions and resolves it using Spring Boot, Java, MySQL, JWT token.
                </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FFC300', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="September 2022 - September 2024"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">X-Lab (University at Buffalo)</h3>
                <h5 className="vertical-timeline-element-title">Research Intern</h5>
                <h5 style={{color: 'darkblue'}}>Buffalo, NY, US</h5>
                <h6>
                • Spearheaded a comprehensive healthcare platform for clinical trial management, utilizing React.js, Node.js, React Native, MongoDB, Docker, and Kubernetes, featuring tailored questionnaires, targeted user groups, notifications, data collection, data visualisation, deployed on AppStore.
                </h6>
                <h6>
                • Crafted TailwindCSS, React, Node and React Native powered mobile and web app for research paper collections with graded assignments, boosting accessibility with 80% surge in user engagement.
                </h6>
                <h6>
                • Integrated Neo4j APIs to establish robust data storage framework, while leveraging Firebase and OAuth2 to improve authentication security by 98%, ensuring data integrity and user trust.
                </h6>
            </VerticalTimelineElement>

          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="May 2023 - August 2023"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Roche Molecular Systems</h3>
                <h5 className="vertical-timeline-element-title">Software Developer Intern</h5>
                <h5 style={{color: 'darkblue'}}>Santa Clara, CA, US</h5>
                <h6>
                • Orchestrated secure patient EHR data access for 300+ clinicians through FHIR RESTful APIs.
                </h6>
                <h6>
                • Led the development of a real-time communication system connecting labs, doctors, patients, optimizing information flow and boosting deployment efficiency by 60% with Docker, K8s.
                </h6>
                <h6>
                • Inspired the team to adopt AWS tech like Kinesis, SNS, SQS, API Gateway, Step Functions for streamlined lab data processing, real-time report generation & high-performance data integration.
                </h6>
                <h6>
                • Executed robust Selenium, Mocha, Chai testing, reducing errors by 95% for enhanced reliability. </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="October 2020 - July 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Rocket Software</h3>
                <h5 className="vertical-timeline-element-title">Software Developer</h5>
                <h5 style={{color: 'darkblue'}}>Pune, India</h5>
                <h6>
                • Constructed scalable NodeJS REST APIs using React, Elasticsearch, Kafka, Go, Jenkins, for features like notification, filters, dashboard, tables, automated data processing with 99% accuracy.
                </h6>
                <h6>
                •  Developed React/Redux UI app, optimizing efficiency by 40% through MaterialUI components
                </h6>
                <h6>
                •  Implemented Jest for testing, achieving a 90% reduction in critical issues for feature robustness.
                </h6>
                <h6>
                • Automated EDI message processing in Rocket's EDX6, reducing manual processes by 40%.
                </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#FF5733', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2019 - August 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Rocket Software</h3>
                <h5 className="vertical-timeline-element-title">Software Developer Intern</h5>
                <h5 style={{color: 'darkblue'}}>Pune, India</h5>
                <h6>
                • Created a cloud-ready, multi-lingual Android app and backend system to streamline the farming workflow and real-time
information flow to farmers, enhancing efficiency by 30%.
                </h6>
                <h6>
                • Integrated Spring Boot with Java & Zuul API gateway for authentication & authorization, allowing efficient data storage
with MySQL database
                </h6>
                <h6>
                • Built computerized pipelines leveraging AWS CodePipeline & Lambda functions enabling 24/7 availability of the application services decreasing downtime by 20%
                </h6>
                <h6>
                Synthesized RESTful APIs with microservices for UI, crop workflows, farmer/agronomist messaging, authentication &
real-time news to facilitate cloud deployment.
                </h6>
                <h6>
                • Created a revolutionary Low Code Application Builder with drag-and-drop components & customizable features, using React, Spring Boot, Java, Github for fast & easy app development.

                </h6>
            </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>

        </Container>
      </Container>
    </section>
  );
}

export default Experience;