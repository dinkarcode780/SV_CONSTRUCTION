import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-8">
          If you have any questions, feel free to reach out to us.  
          We are always here to help you.
        </p>

        <form className="space-y-5">
          
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 font-semibold">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 font-semibold">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 font-semibold">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-1 font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
