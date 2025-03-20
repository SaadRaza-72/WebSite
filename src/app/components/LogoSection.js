"use client";
import Image from "next/image";

const logos = [
  { src: "/brand-01.png", alt: "Martha Smither Logo" },
  { src: "/brand-02.png", alt: "Jes Wedding Agency" },
  { src: "/brand-03.png", alt: "Hand Crafted Sara Ann" },
  { src: "/brand-04.png", alt: "Studio by A. Lin" },
  { src: "/brand-05.png", alt: "Fashion Live Style" },
  { src: "/brand-06.png", alt: "Pure S. James Handmade" },
  { src: "/brand-07.png", alt: "Jes Wedding Agency" },
  { src: "/brand-08.png", alt: "Hand Crafted Sara Ann" },
  { src: "/brand-09.png", alt: "Studio by A. Lin" },
];

export default function LogoSection() {
  return (
    <section className="py-12 bg-white flex justify-center items-center min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* First row - Always 5 logos */}
        <div className="grid grid-cols-5 sm:grid-cols-5 gap-6 justify-center items-center">
          {logos.slice(0, 5).map((logo, index) => (
            <div
              key={index}
              className="w-28 sm:w-36 md:w-48 h-auto flex justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain"
                priority
                unoptimized={true}
              />
            </div>
          ))}
        </div>
        {/* Second row - Always 4 logos */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 justify-center items-center mt-6">
          {logos.slice(5).map((logo, index) => (
            <div
              key={index}
              className="w-28 sm:w-30 md:w-48 h-auto flex justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain"
                priority
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
