import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Social Icons */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            <img src="./logo.png" alt="" />
          </h2>
          <p className="mt-3 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec sagittis dolor.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
            <li><a href="#" className="hover:text-blue-600">How It Works</a></li>
            <li><a href="#" className="hover:text-blue-600">Authorized Partners</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg">Services</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Accidental Damage</a></li>
            <li><a href="#" className="hover:text-blue-600">Guaranteed Repair</a></li>
            <li><a href="#" className="hover:text-blue-600">Theft/Total Loss</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg">Contact Info</h3>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-2">
              <GoLocation className="text-blue-600" />
              <span>2774 Oak Drive, Maitama, Abuja, Nigeria.</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-blue-600" />
              <span>+2349034567890</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-blue-600" />
              <span>info@monaprotect.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-10 pt-5 text-center text-sm">
        Copyright © 2025 Monaprotect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
