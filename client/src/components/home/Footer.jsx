import React from 'react'
import { FaEnvelope, FaHeart, FaHome, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa'
import { FcAbout } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className=" md:block  right-0 z-10 bg-gray-900 text-white pt-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
            {/* Company Info */}
            <div className='' >
              <div className="mb-4">
                <img src="/logo_w.png" alt="Logo" className="h-4" />
              </div>
             <p className="text-sm text-gray-400 mb-3">
  Building strong foundations with quality, trust, and expert civil construction services across India.
</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt /> In front off Middle School Shivajinagar, Samastipur, Bihar 848117
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope />svconstruction@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt />7889191830, 9324474833
                </li>
              </ul>
            </div>

            {/* For Candidates */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">For Candidates</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/blog" className="hover:text-white">All Bloges</a></li>
                <li><a href="/login" className="hover:text-white">Candidates login</a></li>

                <li><a href="/register" className="hover:text-white">Candidates</a></li>
                {/* <li><a href="#" className="hover:text-white">Job Alerts</a></li> */}
                {/* <li><a href="#" className="hover:text-white">Bookmarks</a></li> */}
              </ul>
            </div>

            {/* For Employers */}
            <div>
              {/* <h4 className="text-lg font-semibold mb-4 text-white">For Employers</h4> */}
              <ul className="space-y-2 text-sm text-gray-300">
                {/* <li><a href="#" className="hover:text-white">Browse Candidates</a></li> */}
                {/* <li><a href="#" className="hover:text-white">Dashboard</a></li> */}
                {/* <li><a href="/employeLogin" className="hover:text-white">Employee Login</a></li> */}
                {/* <li><a href="/employerRegister" className="hover:text-white">Employee Register</a></li> */}
              </ul>
            </div>

            {/* Helpful Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Helpful Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {/* <li><a href="#" className="hover:text-white">Site Map</a></li>   */}
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                {/* <li><a href="#" className="hover:text-white">Terms of Use</a></li> */}
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
                 <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="/refund-policy" className="hover:text-white">Refund & Cancellation</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400">
            <p>© 2025 https://sv-construction.in/ — Devloped by <a href="https://github.com/dinkarcode780"> Dinkar Paswan</a>.</p>
            {/* <div className="flex gap-4 mt-4 md:mt-0 text-xl">
              <a href="#" title="Facebook" className="hover:scale-110 transition-transform" style={{ color: '#1877F2' }}>
                <FaFacebook />
              </a>
              <a href="#" title="Twitter" className="hover:scale-110 transition-transform" style={{ color: '#1DA1F2' }}>
                <FaTwitter />
              </a>
              <a href="#" title="Instagram" className="hover:scale-110 transition-transform" style={{ color: '#E4405F' }}>
                <FaInstagram />
              </a>
              <a href="#" title="LinkedIn" className="hover:scale-110 transition-transform" style={{ color: '#0077B5' }}>
                <FaLinkedin />
              </a>
            </div> */}
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
   {/* // Footer me upar define kar lo: */}


<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md py-2 px-6 flex justify-around items-center border-t border-gray-300 z-50">
  <a href="/" className="flex flex-col items-center text-blue-600">
    <FaHome className="text-xl" />
    <span className="text-xs">Home</span>
  </a>

  <a href="/about" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
<FcAbout />    <span className="text-xs">About</span>
  </a>

  <a href="/service" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
    <FaHeart className="text-xl" />
    <span className="text-xs">Service</span>
  </a>


    {/* <button
    //   onClick={handleLogout}
      className="flex flex-col items-center text-red-600 hover:text-red-800 bg-transparent border-none outline-none"
    >
      <FaUser className="text-xl" />
      <span className="text-xs">Logout</span>
    </button> */}
 
    {/* <button
    //   onClick={handleProfileClick}
      className="flex flex-col items-center text-gray-500 hover:text-blue-600 bg-transparent border-none outline-none"
    >
      <FaUser className="text-xl" />
      <span className="text-xs">Login</span>
    </button> */}
  
</div>

    </>
  )
}

export default Footer