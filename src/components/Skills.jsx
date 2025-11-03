import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';

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
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
};

const Skills = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="skills" className="w-full bg-base-200 px-4 lg:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          My Skills
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3 bg-base-100 p-5 rounded-xl shadow-md cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
                y: -15,
                rotate: [0, 2, -2, 0],
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                y: { type: "spring", stiffness: 400 },
                rotate: { duration: 0.5 }
              }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  rotate: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                <motion.img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </motion.div>
              <motion.span 
                className="text-base-content font-semibold text-center"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;