import { Code, BarChart3, PenTool, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import devices from "../assets/devices.svg";
import andrometa_logo from "../assets/AndroMetaTransparent.png";

const services = [
  {
    title: "Design",
    text: "Logo creation, brand identity assets, and visual communication that resonates.",
    icon: <PenTool className="w-8 h-8 text-white" />,
    gridSize: "col-span-2 row-span-2", // Large card
    gradient: "from-pink-500/20 via-purple-500/20 to-violet-600/20",
    hoverGradient: "from-pink-400/30 via-purple-400/30 to-violet-500/30",
  },
  {
    title: "Software Development",
    text: "Custom web and mobile applications tailored to your business logic.",
    icon: <Code className="w-8 h-8 text-white" />,
    gridSize: "col-span-1 row-span-3", // Tall card
    gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-600/20",
    hoverGradient: "from-cyan-400/30 via-blue-400/30 to-indigo-500/30",
  },
  {
    title: "Technology Consulting",
    text: "Expert guidance for digital transformation, IT strategy, and technology adoption.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
    gridSize: "col-span-1 row-span-2", // Medium card
    gradient: "from-amber-500/20 via-orange-500/20 to-red-600/20",
    hoverGradient: "from-amber-400/30 via-orange-400/30 to-red-500/30",
  },
  {
    title: "Data Analytics & AI",
    text: "Actionable insights and smart automation through AI-driven solutions.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    gridSize: "col-span-2 row-span-1", // Wide card
    gradient: "from-emerald-500/20 via-teal-500/20 to-green-600/20",
    hoverGradient: "from-emerald-400/30 via-teal-400/30 to-green-500/30",
  },
];

function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: "100px 100px",
      }}
    />
  );
}

function FloatingShape({ delay = 0, duration = 20 }) {
  return (
    <div
      className="absolute w-32 h-32 rounded-full blur-3xl opacity-20 animate-pulse"
      style={{
        background:
          "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: "translateZ(0)",
      }}
    />
  );
}

export default function WhatWeDo({ openModal }: { openModal: () => void }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Magnetic cursor follower - Desktop only */}
      <div
        className="fixed w-6 h-6 bg-blue-400/30 rounded-full blur-sm pointer-events-none z-50 transition-transform duration-100 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: hoveredCard !== null ? "scale(2)" : "scale(1)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            At Andrometa, we craft digital experiences that push the boundaries
            of innovation
          </p>
        </div>

        {/* Abstract Grid Layout - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-4 gap-6 max-w-6xl mx-auto h-[800px] mb-20 relative">
          {services.map((service, i) => (
            <div
              key={i}
              className={`${service.gridSize} group relative cursor-pointer`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-full w-full rounded-3xl overflow-hidden transform transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Background with noise */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10`}
                >
                  <NoiseOverlay />
                </div>

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Animated border */}
                <div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    animation:
                      hoveredCard === i
                        ? "borderSweep 2s ease-in-out infinite"
                        : "none",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col justify-between">
                  {/* Icon with micro-animation */}
                  <div className="flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-grow flex flex-col justify-end">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 transform transition-all duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed transform transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
                      {service.text}
                    </p>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`absolute w-2 h-2 bg-white/30 rounded-full transition-all duration-1000 ${
                          hoveredCard === i ? "animate-ping" : "opacity-0"
                        }`}
                        style={{
                          left: `${20 + idx * 30}%`,
                          top: `${10 + idx * 20}%`,
                          animationDelay: `${idx * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </div>
          ))}

          {/* Centered Logo Overlay */}
          <div
            className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center pointer-events-none mt-25"
            style={{ width: "260px" }} // adjust width as needed
          >
            <img
              src={andrometa_logo}
              alt="Andrometa Logo"
              className="w-28 h-28 object-contain mb-4 drop-shadow-lg"
              draggable={false}
            />
            {/* <h4 className="text-xl font-bold text-white tracking-wide">
              ANDROMETA
            </h4>
            <p className="text-sm text-gray-400">DIGITAL SOLUTIONS</p> */}
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {services.map((service, i) => (
            <div
              key={`tablet-${i}`}
              className="group relative cursor-pointer h-80"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full w-full rounded-3xl overflow-hidden transform transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10`}
                >
                  <NoiseOverlay />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  <div className="flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white mb-3 transform transition-all duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed transform transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
                      {service.text}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 mb-20">
          {services.map((service, i) => (
            <div
              key={`mobile-${i}`}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 w-full rounded-3xl overflow-hidden transform transition-all duration-500 ease-out active:scale-[0.98]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/10`}
                >
                  <NoiseOverlay />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-active:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex-shrink-0 transform transition-all duration-300 group-active:scale-110">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-active:bg-white/20 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/50 font-mono">
                        0{i + 1}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-active:translate-x-full transition-transform duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center px-4">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Can't find exactly what you're looking for?
              <span className="block mt-2 text-blue-400 text-xl sm:text-2xl lg:text-3xl font-light">
                We'll craft a custom solution just for you
              </span>
            </h3>
          </div>

          {/* Devices SVG */}
          <div className="mb-8 flex justify-center">
            <img
              src={devices}
              alt="Multi-device application development"
              className="w-full max-w-[700px] h-auto"
            />
          </div>

          <button onClick={openModal} className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white text-base sm:text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes borderSweep {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
