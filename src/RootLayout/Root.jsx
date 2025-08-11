import React from "react";
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from "../Pages/Projects/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Root = () => {
  return (
    <div>
      <div className="mb-16">
        <Navbar />
      </div>

      <div id="home">
        <Banner />
      </div>

      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
