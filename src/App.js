import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import AboutCard from "./components/About/AboutCard";
import PageLayout from "./components/PageLayout";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<PageLayout><Projects /></PageLayout>} />
          <Route path="/about" element={<PageLayout className="route-page-about"><AboutCard /></PageLayout>} />
          <Route path="/skills" element={<PageLayout><About /></PageLayout>} />
          <Route path="/resume" element={<PageLayout><Resume /></PageLayout>} />
          <Route path="/experience" element={<PageLayout><Experience /></PageLayout>} />
          <Route path="/education" element={<PageLayout><Education /></PageLayout>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
