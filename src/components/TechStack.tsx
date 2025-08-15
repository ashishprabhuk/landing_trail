import React from "react";
import {
  Code, Cloud, Database, Server, Layers,
  Container, Smartphone, Zap, Brain, Palette,
  Globe, Shield, BarChart3, Box, Phone
} from "lucide-react";

// React component for the Figma SVG
const FigmaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-5 h-5">
    <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"/>
    <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"/>
    <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"/>
    <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/>
    <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"/>
  </svg>
);

export default function TechStack() {
  const techStack = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "Node.js", icon: Server },
    { name: "AWS", icon: Cloud },
    { name: "MongoDB", icon: Database },
    { name: "GCP", icon: Cloud },
    { name: "Azure", icon: Cloud },
    { name: "Databricks", icon: BarChart3 },
    { name: "Docker", icon: Container },
    { name: "Figma", icon: FigmaIcon },
    { name: "Kubernetes", icon: Box },
    { name: "React Native", icon: Smartphone },
    { name: "Flutter", icon: Phone },
    { name: "FastAPI", icon: Zap },
    { name: "Tensorflow", icon: Brain },
    { name: "Pytorch", icon: Brain },
    { name: "Adobe Illustrator", icon: Palette }
  ];

  const firstRow = techStack.slice(0, 9);
  const secondRow = techStack.slice(9);

  return (
    <section className="py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Built with Modern Technology</h2>
        <p className="text-gray-400 mb-12">
          Fast, scalable, and SEO-optimized solutions using cutting-edge tools.
        </p>
      </div>

      <div className="relative">
        {/* First row */}
        <div className="flex mb-8 overflow-hidden relative group">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-left group-hover:pause gap-6 whitespace-nowrap">
            {[...firstRow, ...firstRow].map((tech, i) => (
              <div
                key={i}
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center gap-3"
              >
                <tech.icon size={20} className="text-blue-400" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="flex overflow-hidden relative group">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll-right group-hover:pause gap-6 whitespace-nowrap">
            {[...secondRow, ...secondRow].map((tech, i) => (
              <div
                key={i}
                className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center gap-3"
              >
                <tech.icon size={20} className="text-green-400" />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
