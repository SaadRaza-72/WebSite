"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    { id: 1, name: "Aklima", position: "COO, Amerimar Enterprises, Inc.", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.", image: "/image1.jpg", online: true },
    { id: 2, name: "John Doe", position: "CEO, Tech Corp", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", image: "/image2.jpg", online: false },
    { id: 3, name: "Jane Smith", position: "Marketing Director, Creative Solutions", text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", image: "/image3.jpg", online: false },
    { id: 4, name: "David Johnson", position: "Founder, Startup Hub", text: "Contrary to popular belief, Lorem Ipsum is not simply random text.", image: "/image4.jpg", online: false },
    { id: 5, name: "Emily White", position: "CTO, FinTech", text: "It has survived not only five centuries but also the leap into electronic typesetting.", image: "/image5.jpg", online: false },
    { id: 6, name: "Michael Brown", position: "CFO, Big Corp", text: "There are many variations of passages of Lorem Ipsum available.", image: "/image6.jpg", online: false },
    { id: 7, name: "Sophia Green", position: "HR Manager", text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.", image: "/image7.jpg", online: false },
    { id: 8, name: "Chris Wilson", position: "Product Manager", text: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'", image: "/image8.jpg", online: false },
  ];

  const [selected, setSelected] = useState(testimonials[0]);

  return (
    <section className="py-16 bg-gray-100 text-center">
      <motion.div
        key={selected.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-2xl md:text-3xl font-semibold text-gray-800">{selected.text}</p>
        <p className="mt-4 text-gray-600 uppercase font-bold">
          {selected.name} <span className="text-gray-500">- {selected.position}</span>
        </p>
      </motion.div>

      {/* Profile Images - Grid Layout: 5 in first row, 3 in second row */}
      <div className="flex flex-col items-center gap-6 mt-10">
        {/* First Row - 5 images */}
        <div className="flex gap-4">
          {testimonials.slice(0, 5).map((person) => (
            <motion.div
              key={person.id}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`relative w-10 h-10 md:w-28 md:h-28 overflow-hidden shadow-lg cursor-pointer bg-white flex items-center justify-center ${
                selected.id === person.id ? "ring-4 ring-red-500" : ""
              }`}
              onClick={() => setSelected(person)}
            >
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
              {person.online && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Second Row - 3 images */}
        <div className="flex gap-4">
          {testimonials.slice(5, 8).map((person) => (
            <motion.div
              key={person.id}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`relative w-13 h-13 md:w-28 md:h-28 overflow-hidden shadow-lg cursor-pointer bg-white flex items-center justify-center ${
                selected.id === person.id ? "ring-4 ring-red-500" : ""
              }`}
              onClick={() => setSelected(person)}
            >
              <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
