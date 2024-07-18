import React, {createRef} from "react";
import { Slide} from "react-reveal";
import { Row, Col } from "react-bootstrap";

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
      {
        schoolName: "University at Buffalo",
        logo: require("../../Assets/ub_logo.jpg"),
        subHeader: "Master of Science in Computer Science",
        duration: "August 2022 - January 2024",
        desc: "Relevant Coursework:",
        descBullets: [
          "Algorithms for Modern Computing Systems, Data Models and Query Language Processing, Blockchain, Machine Learning, Information Retrieval, Data Intensive Computing, MS Project Development"
        ]
      },
      {
        schoolName: "University of Pune, India",
        logo: require("../../Assets/puneuniversity_logo.jpg"),
        subHeader: "Bachelor of Technology in Computer Science",
        duration: "August 2016 - May 2020",
        desc: "Relevant Coursework:",
        descBullets: ["Operating Systems, Data Structures and Algorithms, Mathematics I II and III, Computer Networks, Object Oriented Programming, Artificial Intelligence and Machine Learning, Database Management Systems"]
      }
    ]
  };

function EducationCard({school}) {
  const imgRef = createRef();

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);
  return (
    <div>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={3}
            style={{
              justifyContent: "center",
              width: "300px",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {school.logo && (
            <div>
              <img
              style={{
                width: "300px",}}
                crossOrigin={"anonymous"}
                ref={imgRef}
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "50px", color: 'white' }}
          >
             <div>
            <h5>{school.schoolName}</h5>

            <div>
              <h5>
                {school.subHeader}
              </h5>
              <p>
                {school.duration}
              </p>
              <p>{school.desc}</p>
              <div>
                <ul>
                  {school.descBullets}
                </ul>
              </div>
            </div>
          </div>
          </Col>
        </Row>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}

export default function Education() {
    if (educationInfo.display) {
      return (
        <div id="education" style={{marginTop:'100px'}}>
          <h1 className="project-heading">
          <strong className="purple">Education</strong>
        </h1>
          <div>
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
      );
    }
    return null;
  }