import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaGraduationCap,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const commonNavItems = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
    { name: "Service", icon: <FaGraduationCap />, href: "/service" },
    { name: "Blog", icon: <FaInfoCircle />, href: "/blog" },
    { name: "Contact", icon: <FaPhone />, href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md py-4 px-4 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/svCons.png"
            alt="svCons"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-7">
          {commonNavItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition"
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-lg p-4">
          <ul className="flex flex-col gap-4">
            {commonNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 transition"
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
