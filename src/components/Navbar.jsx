import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

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
    <div className="navbar fixed top-0 justify-between bg-base-100 shadow-md z-50 px-4 lg:px-10">
      {/* Left Section */}
      <div className="flex items-center relative">
        {/* Mobile Menu Wrapper */}
        <div className="md:hidden relative" ref={menuWrapperRef}>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="btn btn-ghost lg:hidden"
          >
            <FaBars size={20} />
          </button>

          {/* Dropdown Card */}
          <div
            className={`absolute left-0 mt-2 w-56 bg-base-100 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 origin-top
              ${menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
          >
            <ul className="menu p-2 text-lg font-medium">
              {menus.map((item, idx) => (
                <li key={idx}>
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    className="hover:text-primary duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="btn btn-primary btn-sm gap-2 w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaDownload />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ml-2">
          <div className="md:text-xl text-sm font-extrabold tracking-wide text-primary">
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Md Rubel Hosen
            </span>
          </div>
        </Link>
      </div>

      {/* Middle Section (Large screen menus) */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {menus.map((item, idx) => (
            <li key={idx}>
              <ScrollLink
                to={item.link}
                className="hover:text-primary duration-300"
                smooth={true}
                duration={600}
                offset={-80}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Only large screens) */}
      
        <a
          href="/resume.pdf"
          download
          className="btn hidden md:flex mr-3 md:btn-sm btn-xs btn-primary gap-2"
        >
          <FaDownload />
          Download Resume
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-outline btn-circle"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
  
    </div>
  );
};

export default Navbar;
 