"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FunFacts() {
  const facts = [
    { id: 1, value: 199, label: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those." },
    { id: 2, value: 575, label: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those." },
    { id: 3, value: 69, label: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those." },
  ];

  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Fun Facts</h2>

      {/* Stats Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {facts.map((fact) => (
          <div key={fact.id} className="flex flex-col items-center">
            {/* Animated Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold text-red-500"
            >
              <Counter value={fact.value} />+
            </motion.div>
            <p className="mt-2 text-gray-600 max-w-xs">{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Counter Component
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};
