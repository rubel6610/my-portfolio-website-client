import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Hero from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="w-full bg-base-100 px-4 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Info */}
        <div className="space-y-5 order-2 lg:order-1 flex items-center flex-col ">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary">
            Md Rubel Hosen
          </h1>

          {/* Typing animation */}
          <TypeAnimation
            sequence={[
              "MERN Stack Developer", 2000,
              "Frontend Developer", 2000,
              "Full Stack Developer", 2000,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
            className="text-xl  lg:text-2xl text-accent font-semibold"
          />

          {/* Social Links */}
          <div className="flex gap-4 pt-3">
            <a
              href="https://facebook.com/arfanahmedrubel10"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-outline text-primary hover:bg-primary hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rubelhosen13"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-outline text-primary hover:bg-primary hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/rubel6610"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-outline text-primary hover:bg-primary hover:text-white"
            >
              <FaGithub size={20} />
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary mt-5"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side - Photo */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <div className="rounded-4xl overflow-hidden shadow-lg animate-bounce-slow">
            {/* Replace with your photo */}
            <img
              src={Hero}
              alt="Md Rubel Hosen"
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
