import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';

const AboutMe = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Staggered animation for paragraphs
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Floating animation for decorative elements
  const floatingElements = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="about" className="w-full bg-base-100 px-4 lg:px-20 py-16 relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-10 right-10 w-16 h-16 rounded-full bg-primary opacity-10 blur-xl"
        animate={floatingElements.animate}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-accent opacity-10 blur-xl"
        animate={floatingElements.animate}
        style={{ animationDelay: '1s' }}
      ></motion.div>
      
      <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6 relative z-10">
        
        {/* Heading */}
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          About Me
        </motion.h2>

        {/* Animated content container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Introduction */}
          <motion.p 
            variants={item}
            className="text-lg text-base-content leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Hello! I'm <span className="font-semibold text-primary">Md Rubel Hosen</span>, 
            a passionate <span className="text-accent">Full Stack Developer</span> with 
            a strong enthusiasm for building clean, functional, and user-friendly web applications.
            My programming journey began with HTML, CSS, and PHP, but I soon discovered the 
            limitless possibilities of JavaScript and started developing full-stack projects.
          </motion.p>

          {/* Work Preference */}
          <motion.p 
            variants={item}
            className="text-lg text-base-content leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            I truly enjoy working on interactive user interfaces, optimizing backend APIs, and 
            creating products that solve real-world problems. My favorite type of work combines 
            problem-solving with creativity, and I love collaborating with other developers to 
            bring ideas to life.
          </motion.p>

          {/* Team Leadership */}
          <motion.p 
            variants={item}
            className="text-lg text-base-content leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            I have experience leading development teams, including managing a team of <span className="font-semibold text-primary">6 developers</span> for the RideX project. 
            As the project lead, I was responsible for architecture decisions, task delegation, code reviews, 
            and ensuring timely delivery of features while maintaining code quality standards.
          </motion.p>

          {/* Hobbies */}
          <motion.p 
            variants={item}
            className="text-lg text-base-content leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            When I'm not coding, I spend time exploring nature, playing cricket, and watching 
            science documentaries. I also have a keen interest in photography, especially capturing 
            candid and scenic moments.
          </motion.p>

          {/* Personality */}
          <motion.p 
            variants={item}
            className="text-lg text-base-content leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            I'm curious by nature, detail-oriented, and constantly looking for opportunities to 
            learn and grow. I believe in adaptability, continuous improvement, and creating 
            meaningful work that leaves a positive impact.
          </motion.p>
        </motion.div>

        {/* Animated skill tags */}
        <motion.div 
          className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          {['Problem Solving', 'Team Leadership', 'Project Management', 'Continuous Learning'].map((skill, index) => (
            <motion.span
              key={index}
              className="badge badge-primary badge-lg py-3 px-4"
              whileHover={{ 
                scale: 1.1,
                y: -3,
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              data-aos="fade-up"
              data-aos-delay={700 + index * 100}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;