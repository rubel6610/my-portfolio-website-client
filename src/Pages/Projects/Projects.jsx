import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectInfo } from "./ProjectInfo";
import { motion } from "framer-motion";
import AOS from 'aos';
import { FaUsers } from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  // Animation for project cards on hover
  const cardHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        type: "tween"
      }
    }
  };

  return (
    <section id="projects" className="w-full bg-base-200 px-4 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-aos="fade-up"
        >
          My Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectInfo.map((project, index) => (
            <motion.div
              key={project.id}
              variants={index % 2 === 0 ? itemVariants : itemVariantsRight}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border md:border-none relative"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <div className="h-52 overflow-hidden m-2 rounded-md">
                  <motion.img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="badge badge-primary badge-lg">
                    {project.name.includes("RideX") ? "Featured" : "Project"}
                  </span>
                  {project.isTeamProject && (
                    <span className="badge badge-secondary badge-lg flex items-center gap-1">
                      <FaUsers size={12} /> Team
                    </span>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6 flex flex-col items-center">
                <motion.h3 
                  className="text-xl font-bold text-center mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.name}
                </motion.h3>
                
                {project.isTeamProject && (
                  <div className="text-sm text-secondary mb-2 flex items-center gap-1">
                    <FaUsers size={14} /> 
                    <span>Team Project ({project.teamSize} members)</span>
                  </div>
                )}
                
                <motion.p 
                  className="text-base-content text-center mb-4 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.description.substring(0, 100)}...
                </motion.p>
                
                <div className="flex flex-wrap gap-1 my-2 justify-center">
                  {project.stack.slice(0, 4).map((tech, index) => (
                    <motion.span
                      key={index}
                      className="badge badge-primary badge-outline badge-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.1, y: -5 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/project/${project.id}`}
                    className="btn btn-primary btn-sm mt-4"
                  >
                    View Details
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;