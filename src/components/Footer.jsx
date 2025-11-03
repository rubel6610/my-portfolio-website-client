import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.refresh();
    
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative">
      <motion.div 
        className="text-center bg-base-300 py-5 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-aos="fade-up"
      >
        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          © {new Date().getFullYear()} MD RUBEL HOSEN. All rights reserved.
        </motion.p>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={scrollToTop}
          className="btn btn-primary btn-circle btn-lg shadow-lg"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;