import React from "react";

const Service = () => {
  const services = [
    {
      title: "Residential Construction",
      desc: "Modern homes with premium quality material, strong foundation, and long-lasting structure.",
      icon: "🏡",
    },
    {
      title: "Commercial Building",
      desc: "Shops, complexes, office buildings designed for durability and heavy usage.",
      icon: "🏢",
    },
    {
      title: "Road Construction",
      desc: "High-quality road work, drainage, foundation, and public civil infrastructure.",
      icon: "🛣️",
    },
    {
      title: "Renovation & Remodeling",
      desc: "Old property ko naya modern look dena with strong finishing & perfect designs.",
      icon: "🛠️",
    },
    {
      title: "Architecture & Planning",
      desc: "House map, elevation design, 3D design, and structural planning.",
      icon: "📐",
    },
    {
      title: "Material Supply",
      desc: "Sand, bricks, cement, aggregates—high-quality construction material delivery.",
      icon: "🏗️",
    },
    {
      title: "Boundary Wall & Foundation",
      desc: "Strong durable foundation and boundary wall construction with expert supervision.",
      icon: "🧱",
    },
    {
      title: "Water Tank & Plumbing Work",
      desc: "Overhead & underground tank construction, pipeline setup, and fittings.",
      icon: "🚰",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E9EEFF] pt-17 pb-16 px-4 sm:px-8 lg:px-16">
      {/* Header / Title */}
      <h1 className="text-4xl font-bold text-center text-[#009688] mb-12">
        Our Construction Services
      </h1>

      {/* Service Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}

      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Need Construction Work?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us today for home building, renovation, planning, or commercial construction services.
        </p>

        <a
          href="tel:+91XXXXXXXXXX"
          className="px-8 py-3 bg-[#009688] text-white text-lg rounded-full shadow-md hover:bg-[#087f73] transition"
        >
          Call Now
        </a>
      </div>
    </div>
  );
};

export default Service;
