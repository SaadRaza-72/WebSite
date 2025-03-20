"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const newsArticles = [
  {
    id: 1,
    category: "Development",
    title: "Getting tickets to the big show",
    image: "/image1.jpg",
  },
  {
    id: 2,
    category: "Management",
    title: "A big ticket gone to be an interesting",
    image: "/image6.jpg",
  },
  {
    id: 3,
    category: "Design",
    title: "The Home of the Future Could Bebes",
    image: "/image7.jpg",
  },
];

export default function LatestNews() {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Latest News</h2>
          <p className="mt-2 text-gray-700 text-lg max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* News Grid (Desktop) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <motion.div
              key={article.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={500}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                priority
                unoptimized={true} 
              />

              {/* Text & Button Container */}
              <div className="absolute left-6 right-6 bottom-6 flex flex-col items-center text-center transition-all duration-500 ease-in-out group-hover:bottom-20">
                <p className="text-sm uppercase text-gray-300">{article.category}</p>
                <h3 className="text-lg font-semibold text-white">{article.title}</h3>
              </div>

              {/* Read More Button */}
              <a
                href="#"
                className="absolute left-1/2 bottom-6 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-500 ease-in-out px-4 py-2 text-sm text-white border border-white rounded-md bg-transparent hover:bg-red-500 hover:border-red-500"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>

        {/* News Carousel (Mobile) */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full"
          >
            {newsArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={500}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                    unoptimized={true} 
                  />
                  <div className="absolute left-6 right-6 bottom-6 flex flex-col items-center text-center transition-all duration-500 ease-in-out">
                    <p className="text-sm uppercase text-gray-300">{article.category}</p>
                    <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                  </div>
                  <a
                    href="#"
                    className="absolute left-1/2 bottom-6 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-10 transition-all duration-500 ease-in-out px-4 py-2 text-sm text-white border border-white rounded-md bg-transparent hover:bg-red-500 hover:border-red-500"
                  >
                    Read More
                  </a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All News Link (Desktop & Mobile) */}
        <div className="relative flex justify-center md:justify-end mt-8 md:mt-2">
          <a
            href="#"
            className=" text-red-500 font-medium transition-all duration-500 ease-in-out 
              md:absolute md:right-4 md:top-0 md:hover:underline md:before:absolute md:before:left-0 md:before:bottom-0 md:before:w-0 md:before:h-0.5 md:before:bg-red-500 
              md:hover:before:w-full md:hover:before:transition-all md:hover:before:duration-700 md:hover:before:ease-in-out"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
}
