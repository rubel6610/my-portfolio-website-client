import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Hero from "../assets/banner.png"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-scroll";
import AOS from 'aos';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  useEffect(() => {
    AOS.refresh();
    
    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    return () => {
      x.stop();
      y.stop();
    };
  }, [x, y]);

  // Floating animation for the profile image
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Text reveal animation
  const textReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full bg-base-100 px-4 lg:px-20 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary opacity-10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent opacity-10 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary opacity-10 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Left Side - Info */}
        <motion.div 
          className="space-y-5 order-2 md:order-1 flex items-center flex-col"
          initial="hidden"
          animate="visible"
          variants={textReveal}
          data-aos="fade-right"
        >
          <motion.h1 
            className="text-4xl lg:text-5xl font-bold text-primary text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Md Rubel Hosen
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <TypeAnimation
              sequence={[
                "MERN Stack Developer", 2000,
                "Frontend Developer", 2000,
                "Full Stack Developer", 2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              className="text-xl lg:text-2xl text-accent font-semibold text-center"
            />
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4 pt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <motion.a
              href="https://facebook.com/arfanahmedrubel10"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-outline text-primary hover:bg-primary hover:text-white"
              data-aos="flip-left"
              data-aos-delay="700"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/rubelhosen13"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-outline text-primary hover:bg-primary hover:text-white"
              data-aos="flip-left"
              data-aos-delay="800"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/rubel6610"
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle btn-outline text-primary hover:bg-primary hover:text-white"
              data-aos="flip-left"
              data-aos-delay="900"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={20} />
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <motion.a
              href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view"
              className="btn btn-primary"
              data-aos="zoom-in"
              data-aos-delay="1100"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Resume
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="btn btn-outline btn-primary"
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Photo */}
        <motion.div 
          className="flex justify-center items-center order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-left"
        >
          <motion.div 
            className="rounded-4xl overflow-hidden shadow-2xl relative"
            style={{
              perspective: 1000,
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const xVal = (e.clientX - rect.left - rect.width / 2) / 10;
              const yVal = (e.clientY - rect.top - rect.height / 2) / 10;
              e.currentTarget.style.transform = `perspective(1000px) rotateY(${xVal}deg) rotateX(${-yVal}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
            }}
            animate={floatingAnimation}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            data-aos="zoom-in"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-4xl bg-gradient-to-r from-primary to-accent opacity-20 blur-xl -z-10"></div>
            
            <img
              src={Hero}
              alt="Md Rubel Hosen"
              className="w-72 h-72 lg:w-96 lg:h-96 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;