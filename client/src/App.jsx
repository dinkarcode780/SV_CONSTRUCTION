import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import About from "./pages/About";
import Service from "./pages/Service";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import Footer from "./components/home/Footer";

const App = () => {
  return (
    <div className="bg-[#E9EEFF] min-h-screen flex flex-col">
      <Navbar />

      {/* FIX: Content ko navbar ke neeche lane ke liye margin-top */}
      <div className="flex-grow mt-20"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
          <Footer />
    </div>
  );
};

export default App;
