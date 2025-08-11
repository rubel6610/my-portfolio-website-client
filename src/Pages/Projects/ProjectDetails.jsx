import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectInfo } from "./ProjectInfo";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";


const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const project = projectInfo.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center mt-10">Project not found.</p>;
  }

  return (
    <section className="w-full px-4 lg:px-20 py-16 bg-base-200">
      <div className="max-w-5xl mx-auto bg-base-100 shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <button  onClick={()=>navigate(-1)} className="btn btn-ghost btn-sm">
            <BsArrowLeft className="w-4 h-4 mr-1"/> Back
          </button>
          <div className="flex gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex items-center gap-2 transition hover:scale-105"
            >
              Live <FaExternalLinkAlt className="w-4 h-4" />
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary btn-sm flex items-center gap-2 transition hover:scale-105"
            >
              Repo <BsGithub className="w-4 h-4" />
            </a>
          </div>
        </div>

        <img
          src={project.img}
          alt={project.name}
          className="w-full h-70 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold text-primary mb-4">
          {project.name}
        </h1>
        <p className="mb-4">{project.description}</p>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Tech Stack:</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="badge badge-primary badge-outline"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Challenges:</h2>
          <ul className="list-disc list-inside">
            {project.challenges.map((ch, i) => (
              <li key={i}>{ch}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Future Plans:</h2>
          <ul className="list-disc list-inside">
            {project.futurePlans.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
