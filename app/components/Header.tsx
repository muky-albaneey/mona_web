import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* 🔹 Top Bar (Always Visible) */}
      <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt />
            <span>27/14 Oak Drive, Maitama, Abuja</span>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>09034667890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>monaprotect@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar (Sticky) */}
      <nav
        className={`w-full bg-white shadow-md transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-blue-700 font-bold text-xl">
            <img src="./logo.png" alt="" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-gray-700 font-semibold">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">How It Works</li>
            <li className="hover:text-blue-500 cursor-pointer">Authorized Partners</li>
          </ul>

          {/* Contact Us Button (Desktop) */}
          <button className="hidden lg:block bg-blue-600 text-white !important px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
  Contact Us
</button>


          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu (Fixed Overlay) */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50 transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={28} className="text-gray-700" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="text-gray-700 text-center space-y-6 pt-10 font-semibold text-lg">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Services</li>
            <li className="hover:text-blue-500 cursor-pointer">How It Works</li>
            <li className="hover:text-blue-500 cursor-pointer">Authorized Partners</li>
            <li>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
