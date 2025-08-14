import React from "react";

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="mb-4">
            A team of passionate technologists, creators, and strategists focused on transforming businesses through intelligent digital experiences.
          </p>

          <h3 className="text-xl font-semibold mt-6">Our Vision</h3>
          <p className="mb-4">
            To lead the future of IT through intelligent automation, seamless digital solutions, and a commitment to making work easier, faster, and smarter.
          </p>

          <h3 className="text-xl font-semibold mt-6">Our Mission</h3>
          <p>
            Empowering businesses with cutting-edge IT solutions, driving automation, and simplifying work. At Andrometa, we innovate to enhance efficiency, boost security, and make technology work for people—not the other way around.
          </p>
        </div>

        {/* Right Visual */}
        <div className="bg-gray-300 h-80 rounded-xl flex items-center justify-center">
          {/* Replace with team image or illustration */}
          <span className="text-gray-600">[Team Visual Here]</span>
        </div>
      </div>
    </section>
  );
}
