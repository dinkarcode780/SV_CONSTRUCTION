import React from "react";
import Slider from "../components/home/Slider";

export const HomePage = () => {
  const blogs = [
    {
      id: 1,
      title: "Strong Foundation Tips",
      img: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg",
      desc: "How to build solid foundation for long-lasting structures.",
    },
    {
      id: 2,
      title: "Modern Home Architecture",
      img: "https://tse2.mm.bing.net/th/id/OIP.Vkw1HPamHKbxd1HvQjShhQHaD4?pid=Api&P=0&h=220",
      desc: "Latest trends in modern architecture and home design.",
    },
    {
      id: 3,
      title: "Top Construction Materials",
      img: "https://images.pexels.com/photos/209266/pexels-photo-209266.jpeg",
      desc: "Which materials provide the best strength & durability?",
    },
    {
      id: 4,
      title: "Construction Workflow",
      img: "https://tse4.mm.bing.net/th/id/OIP.HuMNWClATy_U-II56xOalwHaE8?pid=Api&P=0&h=220",
      desc: "Understanding step-by-step construction workflow.",
    },
  ];

  return (
    <div className="pt-0">
      {/* ----------- Main Slider ----------- */}
      <Slider />

      {/* ----------- Blog Section ----------- */}
      <section className="mt-12 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-[#009688] text-center mb-6">
          Latest Blogs
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition cursor-pointer"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>

                <p classname="text-sm text-gray-600 mt-1">{blog.desc}</p>

                <button className="mt-3 text-[#009688] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ----------- Testimonial Section ----------- */}
<section className="mt-16 px-4 sm:px-8 lg:px-16">
  <h2 className="text-3xl font-bold text-[#009688] text-center mb-10">
    What Our Happy Customers Say
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
      <p className="text-gray-700 italic">
        "SV Construction ne mera ghar perfect tarike se banaya. Work quality 
        aur finishing superb! Time se project complete kiya.”
      </p>

      <div className="flex items-center mt-4">
        <img
          src="https://i.pravatar.cc/80?img=32"
          alt="customer"
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900">Ritu Sharma</h4>
          <p className="text-sm text-gray-500">Home Owner</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
      <p className="text-gray-700 italic">
        "Inka Commercial project work top class hai. Strong foundation, 
        fast work & professional team. Highly recommended!"
      </p>

      <div className="flex items-center mt-4">
        <img
          src="https://i.pravatar.cc/80?img=12"
          alt="customer"
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900">Amit Verma</h4>
          <p className="text-sm text-gray-500">Business Owner</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">
      <p className="text-gray-700 italic">
        "Renovation ka kaam bohot hi accha kiya. Budget me sab complete, 
        aur finishing priceless. Great experience!"
      </p>

      <div className="flex items-center mt-4">
        <img
          src="https://i.pravatar.cc/80?img=48"
          alt="customer"
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900">Suman Tiwari</h4>
          <p className="text-sm text-gray-500">Renovation Client</p>
        </div>
      </div>
    </div>

  </div>
</section>


      <div className="mt-10"></div>
    </div>
  );
};
