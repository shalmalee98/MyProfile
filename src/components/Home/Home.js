import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Shalmalee_resume.pdf";
import myImg from "../../Assets/profile.jpg";
import Experience from "../Experience/Experience";
import { pdfjs } from "react-pdf";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SHALMALEE SHENOLIKAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{padding: 50}}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img style={{
                borderRadius: "50%",
                width: 400,
                display: "block"
              }} src={myImg} className="img-fluid" alt="avatar" />
            </Col>
            
          </Row>

        </Container>
      </Container>
      {/* <Home2 /> */}
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <ResumeNew/>
    </section>
  );
}

export default Home;
