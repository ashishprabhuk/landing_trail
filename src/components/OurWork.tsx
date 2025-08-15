import React from "react";
import mock1 from "../assets/mockups/ssmock.png";
import mock2 from "../assets/mockups/nammapgmock.png";
import mock3 from "../assets/mockups/nammapgmock.png";

export default function OurWork() {
  const works = [
    { img: mock1, alt: "MacBook mockup" },
    { img: mock2, alt: "iPhone mockup" },
    { img: mock3, alt: "Another MacBook mockup" },
  ];

  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Work in Action</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Take a look at some of the digital experiences we've built. Here's a glimpse of how our work looks on mobile and desktop.
        </p>

        {/* Glassmorphism Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <div
              key={i}
              className="h-64 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 overflow-hidden flex items-center justify-center"
            >
              <img
                src={work.img}
                alt={work.alt}
                className="object-contain max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
