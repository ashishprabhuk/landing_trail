import React from "react";
import { motion } from "framer-motion";
import ssmock from "../assets/mockups/ssmock.png";
import nestoramock from "../assets/mockups/nestora.png";
import nammaPgmock from "../assets/mockups/nammapgmock.png";
import nestmock from "../assets/mockups/nestMock.png";
import turfMock from "../assets/mockups/turf.png";

export default function OurWork() {
  const works = [
    { img: ssmock, alt: "SS mockup" },
    { img: turfMock, alt: "turf mock" },
    { img: nestoramock, alt: "nestora mockup" },
    { img: nestmock, alt: "nest mockup" },
    { img: nammaPgmock, alt: "NammaPG mockz" },
  ];

  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Work in Action</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Take a look at some of the digital experiences we've built. Here's a
          glimpse of how our work looks on mobile and desktop.
        </p>

        {/* Single Glassmorphism Card */}
        <div>
        <div className="flex flex-wrap justify-center gap-8">
      {works.map((work, i) => (
        <motion.div
          key={i}
          whileTap={{ scale: 0.95 }} // press effect
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
        >
          <motion.img
            src={work.img}
            alt={work.alt}
            className="object-contain min-h-[200px] min-w-[250px] max-h-[300px] max-w-[350px] rounded-xl"
            whileHover={{
              scale: 1.1,
              rotate: -2,
            }}
          />

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      ))}
    </div>

        </div>
      </div>
    </section>
  );
}
