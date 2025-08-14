import React from "react";

export default function TechStack() {
  const stack = ["React", "Next.js", "Node.js", "AWS", "MongoDB"];
  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
        <p className="text-gray-400 mb-12">
          Fast, scalable, and SEO-optimized solutions using cutting-edge tools.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {stack.map((tech, i) => (
            <div
              key={i}
              className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
