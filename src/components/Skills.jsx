import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS / Tailwind", img: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "React.js", img: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  { name: "Node.js", img: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
  { name: "Express.js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s" },
  { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
  { name: "Firebase", img: "https://www.gstatic.com/devrel-devsite/prod/vb244fb0dab77cf09df3dd61e8c4258531fb94a362bc9ca956ecc500440a3fd0c/firebase/images/touchicon-180.png" },
  { name: "Next Js", img: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" },
  { name: "Git & GitHub", img: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
 
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-base-200 px-4 lg:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
          My Skills
        </h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3 bg-base-100 p-5 rounded-xl shadow-md cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.1, boxShadow: "0 10px 15px rgba(59, 130, 246, 0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <span className="text-base-content font-semibold text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
