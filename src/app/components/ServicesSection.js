"use client";

import { FaChartLine, FaLaptopCode, FaUsers, FaMobileAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { icon: <FaChartLine />, title: "Business Strategy" },
    { icon: <FaLaptopCode />, title: "Website Development" },
    { icon: <FaUsers />, title: "Marketing & Reporting" },
    { icon: <FaMobileAlt />, title: "Mobile App Development" },
  ];

  return (
    <section className="bg-gray-50 py-16 min-h-[500px] flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex flex-col items-center lg:items-start"
        >
          {/* Left Section (Title & Text) */}
          <div className="text-center w-full mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Services</h2>
            <p className="text-gray-600 mt-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
            </p>
            <a href="#" className="mt-4 inline-block text-lg font-semibold text-pink-600 hover:underline">
              Request Custom Service
            </a>
          </div>

          {/* Right Section - Services with Carousel on Mobile */}
          <div className="w-full">
            {/* Show as Grid on Larger Screens */}
            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg bg-transparent transition duration-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-white hover:cursor-pointer hover:shadow-lg hover:scale-105"
                >
                  <div className="text-pink-600 text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    I throw myself down among the tall grass by the stream as I lie close to the earth.
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Show as Carousel on Mobile */}
            <div className="block sm:hidden">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto slide every 5 seconds
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg bg-transparent transition duration-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-white hover:cursor-pointer hover:shadow-lg hover:scale-105"
                    >
                      <div className="text-pink-600 text-4xl mb-3">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">
                        I throw myself down among the tall grass by the stream as I lie close to the earth.
                      </p>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
