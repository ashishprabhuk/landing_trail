import React from "react";
import { 
  Code, Cloud, Database, Server, Layers, Figma, 
  Container, Smartphone, Zap, Brain, Palette, 
  Globe, Shield, BarChart3, Box, Phone
} from "lucide-react";

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
    { name: "Figma", icon: Figma },
    { name: "Kubernetes", icon: Box },
    { name: "React Native", icon: Smartphone },
    { name: "Flutter", icon: Phone },
    { name: "FastAPI", icon: Zap },
    { name: "Tensorflow", icon: Brain },
    { name: "Pytorch", icon: Brain },
    { name: "Adobe Illustrator", icon: Palette }
  ];

  // Split into two rows
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
        {/* First row - moving left to right */}
        <div className="flex mb-8 overflow-hidden relative group">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent z-10 pointer-events-none"></div>
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-left group-hover:pause gap-6 whitespace-nowrap">
            {[...firstRow, ...firstRow].map((tech, i) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={i}
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center gap-3"
                >
                  <IconComponent size={20} className="text-blue-400" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second row - moving right to left */}
        <div className="flex overflow-hidden relative group">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent z-10 pointer-events-none"></div>
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-right group-hover:pause gap-6 whitespace-nowrap">
            {[...secondRow, ...secondRow].map((tech, i) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={i}
                  className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex-shrink-0 flex items-center gap-3"
                >
                  <IconComponent size={20} className="text-green-400" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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