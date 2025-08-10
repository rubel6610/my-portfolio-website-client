import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="w-full bg-base-100 px-4 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto text-center lg:text-left space-y-6">
        
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-primary">
          About Me
        </h2>

        {/* Introduction */}
        <p className="text-lg text-base-content leading-relaxed">
          Hello! I’m <span className="font-semibold text-primary">Md Rubel Hosen</span>, 
          a passionate <span className="text-accent">Full Stack Developer</span> with 
          a strong enthusiasm for building clean, functional, and user-friendly web applications.
          My programming journey began with HTML, CSS, and PHP, but I soon discovered the 
          limitless possibilities of JavaScript and started developing full-stack projects.
        </p>

        {/* Work Preference */}
        <p className="text-lg text-base-content leading-relaxed">
          I truly enjoy working on interactive user interfaces, optimizing backend APIs, and 
          creating products that solve real-world problems. My favorite type of work combines 
          problem-solving with creativity, and I love collaborating with other developers to 
          bring ideas to life.
        </p>

        {/* Hobbies */}
        <p className="text-lg text-base-content leading-relaxed">
          When I’m not coding, I spend time exploring nature, playing cricket, and watching 
          science documentaries. I also have a keen interest in photography, especially capturing 
          candid and scenic moments.
        </p>

        {/* Personality */}
        <p className="text-lg text-base-content leading-relaxed">
          I’m curious by nature, detail-oriented, and constantly looking for opportunities to 
          learn and grow. I believe in adaptability, continuous improvement, and creating 
          meaningful work that leaves a positive impact.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
