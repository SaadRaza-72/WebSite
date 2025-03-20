"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function OurWorks() {
  const works = [
    { id: 1, image: "/image1.jpg", title: "Getting tickets to the big show" },
    { id: 2, image: "/image2.jpg", title: "Creative Branding Design" },
    { id: 3, image: "/image3.jpg", title: "Innovative Tech Solutions" },
    { id: 4, image: "/image4.jpg", title: "Social Media Strategy" },
    { id: 5, image: "/image5.jpg", title: "E-commerce Development" },
    { id: 6, image: "/image6.jpg", title: "SEO Optimization" },
    { id: 7, image: "/image7.jpg", title: "Marketing Campaigns" },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Heading & Subheading */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Works</h2>
        <p className="mt-3 text-gray-600 max-w-xl">
          Explore our latest projects crafted with creativity and innovation.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="container mx-auto px-4 mt-8 relative">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // Show 2 slides on small screens
            1024: { slidesPerView: 4 }, // Show 4 slides on large screens
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="relative"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id} className="p-2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg group">
                {/* Background Image */}
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Light Red Overlay */}
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Always-Visible Text & Button */}
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-sm text-white">Development</p>
                  <h3 className="text-xl font-bold text-white">{work.title}</h3>
                  <button className="mt-2 px-4 py-2 border border-white text-white text-sm hover:bg-white hover:text-black transition">
                    CASE STUDY
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styling for Pagination Dots */}
        <style jsx>{`
          .swiper-pagination {
            position: absolute;
            bottom: -20px !important; /* Moves dots below the slider */
          }
        `}</style>
      </div>
    </section>
  );
}
