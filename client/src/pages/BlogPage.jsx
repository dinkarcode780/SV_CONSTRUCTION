import React from "react";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Tips for Building a Strong Foundation in Construction",
      desc: "A solid foundation is essential for any building. Here are the top engineering practices for long-lasting structures.",
      img: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
    },
    {
      id: 2,
      title: "Why Modern Homes Need Smart Architectural Designs",
      desc: "Learn how modern planning improves comfort, cost-saving, and space usage in residential projects.",
      img: "https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg",
    },
    {
      id: 3,
      title: "Top Construction Materials for Durability & Safety",
      desc: "Choosing the right materials ensures your project remains strong for decades. Here’s what experts prefer today.",
      img: "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg",
    },
    {
      id: 4,
      title: "Understanding the Construction Workflow – Step by Step",
      desc: "From planning to handover, know how a construction project progresses smoothly and safely.",
      img: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    },
    {
      id: 4,
      title: "Understanding the Construction Workflow – Step by Step",
      desc: "From planning to handover, know how a construction project progresses smoothly and safely.",
      img: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    },

    {
      id: 4,
      title: "Understanding the Construction Workflow – Step by Step",
      desc: "From planning to handover, know how a construction project progresses smoothly and safely.",
      img: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg",
    },
  ];

  return (
    <div className="min-h-screen pt-17 pb-12 bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#009688]">
        Our Latest Blogs
      </h1>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2">{blog.desc}</p>

              <button className="mt-4 inline-block bg-[#009688] text-white px-4 py-2 rounded-md hover:bg-[#0a8378] transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
