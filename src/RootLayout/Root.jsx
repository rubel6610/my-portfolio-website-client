import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from "../Pages/Projects/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import AOS from 'aos';

const Root = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="mb-16">
        <Navbar />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div id="home">
          <Banner />
        </div>

        <motion.div
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AboutMe />
        </motion.div>
        
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Projects />
        </motion.div>
        
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.div>
        
        <div>
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};

export default Root;