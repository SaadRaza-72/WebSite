"use client";

import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-16 h-auto md:h-[500px]">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24">
        
        {/* Image Section */}
        <div className="relative md:w-1/2 flex justify-center md:justify-start">
          <div className="rounded-lg shadow-lg overflow-hidden  md:-mt-28">
            <Image 
              src="/about-1.jpg" 
              alt="About Image" 
              width={500} 
              height={600} 
              className="object-cover w-[300px] h-auto md:h-[500px] rounded-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About</h2>
          <p className="text-gray-600 mt-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
            by injected humour, or randomised words which don’t look even slightly believable.
          </p>

          {/* Who We Are Sections */}
          <div className="flex flex-col md:flex-row mt-6 space-y-6 md:space-y-0 md:space-x-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900">Who we are</h3>
              <p className="text-gray-600 mt-2">
                There are many versions of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900">Who we are</h3>
              <p className="text-gray-600 mt-2">
                There are many versions of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
