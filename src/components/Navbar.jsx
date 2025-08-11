import React, { useState } from "react";

import { FaBars, FaDownload, FaMoon, FaSun } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";


const Navbar = () => {
  const [theme, setTheme] = useState("dark");

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

  return (
    <div className="navbar fixed top-0  justify-between bg-base-100 shadow-md  z-50 px-4 lg:px-10">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Mobile Drawer Button */}
        <div className="lg:hidden">
          <label htmlFor="drawer-toggle" className="btn btn-ghost lg:hidden">
            <FaBars size={20} />
          </label>
        </div>

        {/* Logo */}

        <ScrollLink to="/" className="flex items-center  gap-2">
          <div className="text-xl font-extrabold tracking-wide text-primary">
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Md Rubel Hosen
            </span>
          </div>
        </ScrollLink>
      </div>

      {/* Middle Section (Menus for large screen) */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {menus.map((item, idx) => (
            <li key={idx}>
              <ScrollLink to={item.link} className="hover:text-primary duration-300"   smooth={true}
              duration={600}
              offset={-80}>
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <a href="/resume.pdf" download className="btn btn-sm btn-primary gap-2">
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

      {/* Drawer for Mobile */}
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-50">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-base-100 min-h-full text-lg">
          {menus.map((item, idx) => (
            <li key={idx}>
              <ScrollLink to={item.link} className="hover:text-primary duration-300">
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
