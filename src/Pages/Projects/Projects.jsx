import React from "react";
import { Link } from "react-router-dom";
import { projectInfo } from "./ProjectInfo";

const Projects = () => {



  return (
    <section id="projects" className="w-full bg-base-200 px-4 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
          {projectInfo.map((project) => (
            <div
              key={project.id}
              className="bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition border md:border-none"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col items-center">
                <h3 className="text-xl font-semibold text-center mb-4">
                  {project.name}
                </h3>
                <Link
                  to={`/project/${project.id}`}
                  className="btn btn-primary btn-sm"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
