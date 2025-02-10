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
                contentStyle={{ background: '#9125d2', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #9125d2' }}
                date="May 2024 - September 2024"
                iconStyle={{ background: '#9125d2', color: '#fff' }}
                icon={<SiWorkplace />}
            >
              <h3 className="vertical-timeline-element-title">Treatment Technologies & Insights Inc.</h3>
              <h5 className="vertical-timeline-element-title">Frontend Engineer</h5>
              <h5 style={{color: 'darkblue'}}>Los Angeles, CA, US</h5>
              <h6> • Solely developed the web HCP Care Portal for Wave Health delivering a fully functional system in 4 months. </h6>
              <h6> • Optimized features like administration, role hierarchies, and authentication, boosting user adoption by 41%. </h6>
              <h6> • Expanded users by 37% with accurate tracking of questionnaires, vitals, activity logs & 45% improved efficiency. </h6>
              <h6> • Optimized performance with PHP, Laravel, Livewire, HTML, CSS, cutting load times, boosting workflow by 60%. </h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#9125d2', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #9125d2' }}
                date="May 2024 - September 2024"
                iconStyle={{ background: '#9125d2', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Capital Market Solutions LLC</h3>
                <h5 className="vertical-timeline-element-title">Software Engineer Intern</h5>
                <h5 style={{color: 'darkblue'}}>NJ, US (Remote)</h5>
                <h6>
                • Revamped UI components for RSMS, improving FINRA exception detection & resolution efficiency by 30%.
                </h6>
                <h6>
                • Streamlined workflows with PrimeNG, Bootstrap, Angular v15, boosting efficiency & user engagement by 25%.
                </h6>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#9125d2', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #9125d2' }}
                date="September 2022 - September 2024"
                iconStyle={{ background: '#9125d2', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">X-Lab (University at Buffalo)</h3>
                <h5 className="vertical-timeline-element-title">Research Intern</h5>
                <h5 style={{color: 'darkblue'}}>Buffalo, NY, US</h5>
                <h6>
                • Led the development of a clinical trial management platform using MongoDB, reducing trial setup time by 30%.
                </h6>
                <h6>
                • Built mobile and web apps with React Native, Node.js, TailwindCSS, enhancing accessibility & user experience.
                </h6>
                <h6>
                • Enhanced data security by 98% using Neo4j, Firebase, OAuth2, & automated deployments via GitHub Actions.
                </h6>
            </VerticalTimelineElement>

          <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#9125d2', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #9125d2' }}
                date="May 2023 - August 2023"
                iconStyle={{ background: '#9125d2', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Roche Molecular Systems</h3>
                <h5 className="vertical-timeline-element-title">Software Developer Intern</h5>
                <h5 style={{color: 'darkblue'}}>Santa Clara, CA, US</h5>
                <h6>
                • Enabled secure EMR/EHR data access & integrated Roche APIs for 300+ clinicians using FHIR RESTful APIs
                </h6>
                <h6>
                • Architected a real-time communication system with AWS serverless tech, cutting data transfer latency by 60%.
                </h6>
                <h6>
                • Reduced errors by 95% through comprehensive testing with Selenium, Mocha, Chai, boosting system reliability
                </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#9125d2', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #9125d2' }}
                date="May 2019 - July 2022"
                iconStyle={{ background: '#9125d2', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Rocket Software</h3>
                <h5 className="vertical-timeline-element-title">Software Developer</h5>
                <h5 style={{color: 'darkblue'}}>Pune, India</h5>
                <h6>
                • Designed scalable Node.js REST APIs with Elasticsearch, Kafka, automating data processing with 99% accuracy.
                </h6>
                <h6>
                • Developed a React.js + Redux app, boosting efficiency by 40% with MaterialUI for a smooth, responsive UI.
                </h6>
                <h6>
                • Reduced critical issues by 90% using Jest for testing, & automated EDI processing, cutting manual work by 48%.
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