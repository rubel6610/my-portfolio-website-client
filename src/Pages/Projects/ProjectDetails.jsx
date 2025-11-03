import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectInfo } from "./ProjectInfo";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt, FaUsers, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from 'aos';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectInfo.find((p) => p.id === parseInt(id));

  useEffect(() => {
    AOS.refresh();
  }, []);

  if (!project) {
    return <p className="text-center mt-10">Project not found.</p>;
  }

  // Special styling for RideX project
  const isRideX = project.name.includes("RideX");

  return (
    <motion.section 
      className="w-full px-4 lg:px-20 py-16 bg-base-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-base-100 shadow-lg rounded-xl p-6">
        <motion.div 
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          data-aos="fade-down"
        >
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-ghost btn-sm"
            data-aos="fade-right"
          >
            <BsArrowLeft className="w-4 h-4 mr-1"/> Back
          </button>
          <div className="flex gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex items-center gap-2 transition hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              Live <FaExternalLinkAlt className="w-4 h-4" />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm flex items-center gap-2 transition hover:scale-105"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Repo <BsGithub className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          data-aos="zoom-in"
        >
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h1 className={`text-3xl font-bold ${isRideX ? 'text-primary' : 'text-primary'}`} data-aos="fade-up">
              {project.name}
            </h1>
            
            {project.isTeamProject && (
              <div className="flex items-center gap-2 badge badge-secondary py-3" data-aos="fade-up" data-aos-delay="100">
                <FaUsers /> 
                <span>Team Project ({project.teamSize} members)</span>
              </div>
            )}
          </div>
          
          {project.isTeamProject && (
            <div className="flex items-center gap-2 mb-4 text-secondary" data-aos="fade-up" data-aos-delay="200">
              <FaUserTie /> 
              <span><span className="font-semibold">My Role:</span> {project.role}</span>
            </div>
          )}
          
          {isRideX && (
            <span className="badge badge-lg badge-accent mb-4" data-aos="fade-up" data-aos-delay="100">Featured</span>
          )}
          
          <div className="mb-6">
            <p className="mb-4 text-lg" data-aos="fade-up" data-aos-delay="300">{project.description}</p>
            
            {isRideX && (
              <div className="bg-base-200 p-4 rounded-lg mb-4" data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl font-bold text-primary mb-2">Key Features of RideX:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li data-aos="fade-up" data-aos-delay="500">AI integrated chatbot for intelligent support</li>
                  <li data-aos="fade-up" data-aos-delay="600">Real-time tracking with Leaflet maps</li>
                  <li data-aos="fade-up" data-aos-delay="700">Rider verification using face comparison technology</li>
                  <li data-aos="fade-up" data-aos-delay="800">Secure authentication with JWT</li>
                  <li data-aos="fade-up" data-aos-delay="900">Intuitive dashboard for users, riders, and admins</li>
                  <li data-aos="fade-up" data-aos-delay="1000">Content generation capabilities</li>
                </ul>
                
                <div className="mt-4 p-3 bg-primary/10 rounded-lg" data-aos="fade-up" data-aos-delay="1100">
                  <h4 className="font-bold text-primary mb-2">Team Leadership:</h4>
                  <p>
                    As the project lead for this team of {project.teamSize} developers, I was responsible for:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Architecture decisions and technical direction</li>
                    <li>Task delegation and sprint planning</li>
                    <li>Code reviews and quality assurance</li>
                    <li>Coordination between frontend and backend teams</li>
                    <li>Integration of complex features like real-time tracking and face verification</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3" data-aos="fade-up" data-aos-delay="500">Tech Stack:</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="badge badge-primary badge-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 100}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-base-200 p-4 rounded-lg" data-aos="fade-right" data-aos-delay="700">
              <h2 className="text-xl font-semibold mb-3">Challenges:</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.challenges.map((ch, i) => (
                  <li key={i} data-aos="fade-up" data-aos-delay={800 + i * 100}>{ch}</li>
                ))}
              </ul>
            </div>

            <div className="bg-base-200 p-4 rounded-lg" data-aos="fade-left" data-aos-delay="800">
              <h2 className="text-xl font-semibold mb-3">Future Plans:</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.futurePlans.map((plan, i) => (
                  <li key={i} data-aos="fade-up" data-aos-delay={900 + i * 100}>{plan}</li>
                ))}
              </ul>
            </div>
          </div>

          {isRideX && (
            <motion.div 
              className="alert alert-info shadow-lg mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>RideX is my flagship project showcasing advanced full-stack development skills with real-time features and AI integration. As the team lead, I successfully coordinated a team of 6 developers to deliver this complex platform.</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;