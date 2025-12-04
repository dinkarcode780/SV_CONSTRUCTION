import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50  to-gray-100">
      
      {/* Top Small Navbar */}
      <nav className="bg-white shadow-sm  top-0 left-0 w-full mt-0.9 z-9999">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            
            {/* Logo Text */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-[#009688]">
                  SV Construction
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-[#009688] px-3 py-2 text-sm font-medium"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Hero Section */}
          <div className="relative bg-[#009688] py-16 px-6 sm:py-20 sm:px-12 lg:px-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#009688] to-[#00b19d] opacity-90"></div>
            <div className="relative max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                About SV Construction
              </h1>
              <p className="mt-3 text-xl text-blue-100">
                Building Trust, Quality & Strong Foundations for a Better Tomorrow
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="prose prose-lg max-w-none text-gray-700">

              {/* INTRODUCTION */}
              <section className="mb-12">
                <p className="text-lg leading-7">
                  SV Construction is one of the most trusted names in Civil Engineering, 
                  delivering high-quality residential, commercial, and infrastructure 
                  projects with unmatched precision and craftsmanship.  
                  Since our inception, we have focused on excellence, timely delivery, 
                  and customer satisfaction, ensuring every project stands strong for generations.
                </p>
              </section>

              {/* MISSION & VISION */}
              <section className="mb-12 grid md:grid-cols-2 gap-8">
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-[#009688] mb-4">
                    Our Mission
                  </h2>
                  <p>
                    To deliver world-class construction solutions with innovation, 
                    efficiency, and uncompromised quality — ensuring safe, sustainable, 
                    and long-lasting structures for every client.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold text-[#009688] mb-4">
                    Our Vision
                  </h2>
                  <p>
                    To become the most reliable and preferred construction company, 
                    known for transforming ideas into reality with engineering excellence 
                    and customer-first values.
                  </p>
                </div>

              </section>

              {/* WHAT WE DO */}
              <section className="mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  What We Do
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {[
                    {
                      title: "Residential Construction",
                      content: "We build high-quality homes with modern designs, strong structures, and premium finishing.",
                      icon: "🏡"
                    },
                    {
                      title: "Commercial Projects",
                      content: "From offices to complexes, we develop commercial spaces that enhance functionality and durability.",
                      icon: "🏢"
                    },
                    {
                      title: "Renovation & Remodeling",
                      content: "We transform old spaces into modern, efficient, and beautiful environments.",
                      icon: "🛠️"
                    },
                    {
                      title: "Road & Infrastructure Work",
                      content: "Strong foundation work, road construction, drainage, and public infrastructure development.",
                      icon: "🚧"
                    },
                    {
                      title: "Architecture & Planning",
                      content: "Smart structural planning, elevation design, and project supervision.",
                      icon: "📐"
                    },
                    {
                      title: "Material Supply",
                      content: "Quality construction materials including sand, cement, bricks, and aggregates.",
                      icon: "🏗️"
                    }
                  ].map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}

                </div>
              </section>

              {/* CTA */}
              <section className="bg-gray-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  We Build with Commitment and Excellence
                </h2>
                <p className="mb-6 max-w-2xl mx-auto">
                  Whether you are planning a residential home, commercial building, or 
                  renovation project — SV Construction is your trusted partner for 
                  reliable, affordable, and quality-driven results.
                </p>
                
                <Link
                  to="/"
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-[#009688] hover:bg-[#0a8378] transition duration-200"
                >
                  Back to Home
                </Link>

              </section>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default About;
