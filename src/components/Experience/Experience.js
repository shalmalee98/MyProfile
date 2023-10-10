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
                contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="May 2023 - August 2023"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Roche Molecular Systems - Software Developer Intern</h3>
                <h5 style={{color: 'darkblue'}}>Santa Clara, CA</h5>
                <h6>
                • Empowered 300+ clinicians with secure patient data access via seamless healthcare system integration using ExpressJS
RESTful APIs, enhancing workflows and accessibility. Optimized deployment efficiency by 60% using Roche Navify,
Docker, AWS, and Terraform, streamlining software delivery.
                </h6>
                <h6>
                • Designed scalable AWS Lambda architecture, leveraging Kinesis, S3, RDS, Step Functions, and API Gateway for
serverless Data Integration streams, ensuring high-performance transaction management and data integrity </h6>
                <h6>
                • Conducted thorough testing using Mocha and Chai, resulting in a 95% reduction in critical errors, ensuring code
reliability and functionality. </h6>
                <h6>
                • Enhanced workflows using GitHub Actions for CI/CD, automating build, test, and deployment, leading to 40% faster
releases and elevated code quality for seamless project delivery </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="October 2020 - July 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Rocket SOftware - Software Developer</h3>
                <h5 style={{color: 'darkblue'}}>Pune, India</h5>
                <h6>
                • Constructed NodeJS REST APIs with asynchronous functions to enhance scalability for features like notifications and
                dashboards and facilitated automated data processing with an accuracy rate of 95%.
                </h6>
                <h6>
                • Utilized ReactJS, NodeJS, Elasticsearch, Kafka & AWS to create features such as notifications, filters, authentication,
                dashboard, tables, and forms; resulting in a 25% increase in performance. </h6>
                <h6>
                • Developed UI applications using React/Redux, integrating MaterialUI components alongside HTML & CSS to enhance
                efficiency, resulting in performance improvements of up to 30%. </h6>
                <h6>
                • Implemented comprehensive testing with Jest, ensuring feature robustness and boosting code reliability by achieving
                an impressive 90% reduction in critical issues. </h6>
                <h6>
                • Integrated advanced tech features into Rocket’s EDX6 product, automating EDI message processing and handling
                non-EDI file formats, resulting in a 20% reduction in manual processes.
                </h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="June 2019 - August 2019"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SiWorkplace />}
            >
                <h3 className="vertical-timeline-element-title">Rocket Software - Software Developer Intern</h3>
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
            </VerticalTimelineElement>
            </VerticalTimeline>
          </Row>

        </Container>
      </Container>
    </section>
  );
}

export default Experience;