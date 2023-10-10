import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Shalmalee_resume.pdf";
import Projects from "../Projects/Projects";
import ResumeNew from "../Resume/ResumeNew";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Experience from "../Experience/Experience";

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
                  style={{ maxWidth: "400px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              /> */}
              {/* <Tilt> */}
              <img style={{
                borderRadius: "50%",
                width: 400,
                // height: 300,
                // background: "red",
                display: "block"
              }} src={myImg} className="img-fluid" alt="avatar" />
            {/* </Tilt> */}
            </Col>
            
          </Row>

        </Container>
      </Container>
      {/* <Home2 /> */}
      <About/>
      <Experience/>
      <Projects/>
      <ResumeNew/>
    </section>
  );
}

export default Home;
