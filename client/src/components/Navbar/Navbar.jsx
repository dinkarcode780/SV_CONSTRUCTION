import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaGraduationCap,
  FaPhone,
} from "react-icons/fa";

const Navbar = () => {
  const commonNavItems = [
    { name: "Home", icon: <FaHome />, href: "/" },
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
    { name: "Service", icon: <FaGraduationCap />, href: "/service" },
    { name: "Blog", icon: <FaInfoCircle />, href: "/blog" },
    { name: "Contact", icon: <FaPhone />, href: "/contact" },
  ];

  return (
    // <nav className="w-full bg-white shadow-md py-4 px-4 fixed top-0 left-0 z-50">
    <nav className="w-full bg-white shadow-md py-4 px-4 fixed top-0 left-0 z-50">

      <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">

        {/* Logo - Fixed Left Alignment */}
        <Link to="/" className="flex items-center">
          <img
            src="/svCons.png"
            alt="svCons"
            className="h-12 w-auto object-contain"
          />
          {/* <h1 className="text-xl font-bold text-blue-600">SV Construction</h1> */}
        </Link>

        {/* Nav Items */}
        <ul className="flex items-center gap-7">
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

      </div>
    </nav>
  );
};

export default Navbar;
