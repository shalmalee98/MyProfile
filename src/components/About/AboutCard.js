import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{marginTop: '100px', marginBottom: '65px' }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", lineHeight: 1.75 }} >
            Hi Everyone, I am <span className="purple">Shalmalee Shenolikar </span>
            from <span className="purple"> San Francisco, CA.</span>
            <br /> I am a passionate <span className="purple">Full Stack Engineer</span> with a <span className="purple">Master's degree in Computer Science from the University at Buffalo</span>.  
            
            I specialize in <span className="purple">NodeJS, React, HTML/CSS, Javascript, Typescript, Web Developement, AWS</span>, with hands-on experience in successfully designing and optimizing complex web applications.
            
            My expertise includes creating innovative solutions and enhancing operational efficiency, cloud native application development.
         
            My goal is to make a meaningful impact with logic in an environment that values innovation and excellence.
           
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul style={{ display:'inline-block' ,textAlign: "center", lineHeight: 1.75 }} >
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)"}}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shalmalee</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
