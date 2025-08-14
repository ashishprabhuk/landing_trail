import React from "react";

export default function OurWork() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Work in Action</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Take a look at some of the digital experiences we've built. Here's a glimpse of how our work looks on mobile and desktop.
        </p>

        {/* Glassmorphism Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="h-64 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
