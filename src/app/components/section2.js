"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  { icon: "/icon-01.png", title: "Business Strategy", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered." },
  { icon: "/icon-02.png", title: "Website Development", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered." },
  { icon: "/icon-03.png", title: "Marketing & Reporting", description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered." }
];

export default function SecondSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000); // Auto-change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16 h-[480px] md:h-[600px] flex items-center">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 uppercase">
          A Digital Agency
        </h2>

        {/* Carousel for Mobile | Grid for Larger Screens */}
        <div className="mt-12">
          {/* Mobile Carousel */}
          <div className="block md:hidden relative w-full">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-gray-900 rounded-lg shadow-lg text-center"
            >
              <img src={services[currentIndex].icon} alt={services[currentIndex].title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold">{services[currentIndex].title}</h3>
              <p className="text-gray-400 mt-3">{services[currentIndex].description}</p>
            </motion.div>
          </div>

          {/* Grid Layout for Tablets & Desktops */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-8 bg-gray-900 rounded-lg shadow-lg">
                <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-400 mt-3">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
