"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex items-center cursor-pointer">
          <span className="bg-gradient-to-r from-yellow-500 to-red-500 text-black px-2 py-1 rounded">M</span>
          <span className="ml-2">trydo</span>
        </div>

        {/* Menu Button for Mobile & Tablet */}
        <div className="flex items-center md:flex lg:hidden">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items - Visible on Large Screens */}
        <ul className="hidden lg:flex lg:space-x-6">
          {["Home", "Service", "About", "Pages", "Blocks", "Contact"].map((item) => (
            <li key={item} className="px-4 py-2 hover:text-red-500">
              <a href="#" className="block">{item}</a>
            </li>
          ))}
          <li className="hidden md:block text-center px-4 py-2">
            <a href="#" className="border border-white px-4 py-2 rounded hover:bg-red-500 hover:text-white">
              BUY NOW
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile & Tablet Menu */}
      <ul
        className={`absolute top-16 left-0 w-full bg-black text-white shadow-lg z-50 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } lg:hidden`}
      >
        {["Home", "Service", "About", "Pages", "Blocks", "Contact"].map((item) => (
          <li key={item} className="px-4 py-2 text-center hover:text-red-500">
            <a href="#" className="block">{item}</a>
          </li>
        ))}
        <li className="text-center px-4 py-2">
          <a href="#" className="border border-white px-4 py-2 rounded hover:bg-red-500 hover:text-white">
            BUY NOW
          </a>
        </li>
      </ul>
    </nav>
  );
}
