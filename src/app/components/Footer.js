"use client";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row relative">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-red-500 to-pink-500 p-10 flex flex-col justify-center items-start text-white relative">
        {/* Background Image Positioned */}
        <div className="absolute left-50 top-30 md:left-55 md:top-5">
          <Image
            src="/image9.jpg" // Update with your image path
            alt="Support Team"
            width={150}
            height={140}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="text-sm uppercase tracking-wide relative z-10">Ready to do this</p>
        <h2 className="text-4xl font-bold mt-2 relative z-10">
          Let&apos;s get to work
        </h2>
        <button className="mt-6 px-6 py-2 border border-white text-white text-lg font-medium hover:bg-white hover:text-red-500 transition relative z-10">
          Contact Us
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-gray-900 p-10 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Link</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-white transition">Work</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Let&apos;s Talk</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Say Hello</h3>
            <p className="mt-2">admin@example.com</p>
            <p className="mt-1">hr@example.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8 text-center md:text-left">
          Copyright &copy; 2022 Rainbow-Themes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
