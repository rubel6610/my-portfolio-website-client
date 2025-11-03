import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapperRef = useRef(null);

  const menus = [
    { name: "Home", link: "home" },
    { name: "About Me", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  // Close menu if click outside
  useEffect(() => {
    AOS.refresh();
    
    const handleClickOutside = (e) => {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <motion.div 
      className="navbar fixed top-0 justify-between bg-base-100 shadow-md z-50 px-4 lg:px-10 py-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      data-aos="fade-down"
    >
      {/* Left Section */}
      <div className="flex items-center relative">
        {/* Mobile Menu Wrapper */}
        <div className="md:hidden relative" ref={menuWrapperRef}>
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="btn btn-ghost lg:hidden"
            whileTap={{ scale: 0.9 }}
            data-aos="fade-right"
          >
            <FaBars size={20} />
          </motion.button>

          {/* Dropdown Card */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="absolute left-0 mt-2 w-56 bg-base-100 shadow-lg rounded-lg overflow-hidden z-50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                data-aos="fade-right"
              >
                <ul className="menu p-2 text-lg font-medium">
                  {menus.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <ScrollLink
                        to={item.link}
                        smooth={true}
                        duration={600}
                        offset={-80}
                        className="hover:text-primary duration-300 py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </ScrollLink>
                    </motion.li>
                  ))}
                  <motion.li 
                    className="mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menus.length * 0.1 }}
                  >
                    <a
                      href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view"
                      className="btn btn-primary btn-sm gap-2 w-full"
                      target="_blank"
                      onClick={() => setMenuOpen(false)}
                    >
              
                      Resume
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ml-2">
          <motion.div 
            className="md:text-xl text-sm font-extrabold tracking-wide text-primary"
            whileHover={{ scale: 1.05 }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Md Rubel Hosen
            </span>
          </motion.div>
        </Link>
      </div>

      {/* Middle Section (Large screen menus) */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {menus.map((item, idx) => (
            <motion.li 
              key={idx}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              data-aos="fade-down"
              data-aos-delay={300 + idx * 100}
            >
              <ScrollLink
                to={item.link}
                className="hover:text-primary duration-300 px-3 py-2"
                smooth={true}
                duration={600}
                offset={-80}
              >
                {item.name}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right Section (Only large screens) */}
      <div className="flex items-center gap-3">
        <motion.a
          href="https://drive.google.com/file/d/1qoQWwNiDSKHdXK7sBPPWGlc4OEBquKRZ/view"
          className="btn hidden md:flex mr-3 md:btn-md  btn-xs btn-primary gap-2"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-aos="fade-left"
          data-aos-delay="800"
        >
          Resume
        </motion.a>

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="btn btn-sm btn-outline btn-circle"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          data-aos="fade-left"
          data-aos-delay="900"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Navbar;