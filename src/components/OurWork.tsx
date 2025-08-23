import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye } from "lucide-react";
import ssmock from "../assets/mockups/ssmock.png";
import nestoramock from "../assets/mockups/nestora.png";
import nammaPgmock from "../assets/mockups/nammapgmock.png";
import nestmock from "../assets/mockups/nestMock.png";
import turfMock from "../assets/mockups/turf.png";

export default function OurWork() {
  const works = [
  { 
    img: ssmock, 
    alt: "SS Ultra", 
    desc: "A modern landing page designed for SS Ultra Readymix Concrete, showcasing their services, brand identity, and project portfolio. Built with a clean UI, responsive design, and optimized for lead generation." 
  },
  { 
    img: turfMock, 
    alt: "Turf Booking", 
    desc: "A seamless turf booking platform that allows users to search, view availability, and reserve sports turfs instantly. Features include real-time slot booking, payment integration, and an intuitive user-friendly interface." 
  },
  { 
    img: nestoramock, 
    alt: "Nestora", 
    desc: "Nestora is a powerful PG/Hostel management application built for owners and tenants. It simplifies room allocation, rent tracking, and maintenance requests, while providing a dashboard for better insights and operations." 
  },
  { 
    img: nestmock, 
    alt: "Nest", 
    desc: "Nest is a personal finance tracking application that helps users manage income, expenses, savings, and investments. It features interactive dashboards, insightful reports, and a clean design to simplify financial planning." 
  },
  { 
    img: nammaPgmock, 
    alt: "NammaPG", 
    desc: "NammaPG is an upcoming project." 
  },
];

  const [selectedWork, setSelectedWork] = useState<any>(null);

  // Scroll-based bobbing effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-full h-full "
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <canvas id="particle-bg" className="absolute inset-0"></canvas>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Our Work in Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mb-4 max-w-2xl mx-auto"
        >
          Take a look at some of the digital experiences we've built. These
          projects combine creativity, design, and interactive technology.
        </motion.p>

        {/* Work Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {works.map((work, i) => (
            <motion.div
              key={i}
              style={{ y }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative p-1 rounded-3xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={work.img}
                alt={work.alt}
                className="object-cover rounded-2xl w-full h-64"
                whileHover={{ scale: 1.08 }}
              />

              {/* Overlay + Eye */}
              <div className="absolute inset-0 bg-black/60 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <button
                  onClick={() => setSelectedWork(work)}
                  className="p-4 bg-white rounded-full text-black hover:scale-110 transition"
                >
                  <Eye className="w-6 h-6" />
                </button>
              </div>

              {/* Caption */}
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold">{work.alt}</h3>
                <p className="text-gray-400 text-sm line-clamp-1">{work.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-gray-900 rounded-2xl max-w-lg w-full relative p-6 shadow-2xl"
          >
            <button
              onClick={() => setSelectedWork(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <img
              src={selectedWork.img}
              alt={selectedWork.alt}
              className="rounded-xl mb-4 w-full"
            />
            <h3 className="text-2xl font-semibold mb-2">
              {selectedWork.alt}
            </h3>
            <p className="text-gray-400">{selectedWork.desc}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
