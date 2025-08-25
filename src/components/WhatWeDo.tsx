import { Code, BarChart3, PenTool, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import devices from "../assets/devices.svg";
import andrometa_logo from "../assets/AndroMetaTransparent.png";
import "./WhatWeDo.css";

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

// Design Card Background Elements
function DesignElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Dynamic Color Explosion */}
      <div className="absolute inset-0">
        <div className="absolute top-6 right-6 w-32 h-32">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/30 to-purple-600/30 animate-spin"
            style={{ animationDuration: "8s" }}
          >
            <div className="absolute top-2 left-2 w-4 h-4 bg-pink-300/60 rounded-full animate-ping"></div>
            <div
              className="absolute bottom-4 right-6 w-3 h-3 bg-violet-400/60 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-8 right-2 w-2 h-2 bg-purple-300/60 rounded-full animate-bounce"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Creative Brush Strokes */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-30">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <path
            d="M0,50 Q100,10 200,50 T400,30"
            stroke="url(#brushGradient)"
            strokeWidth="8"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,70 Q150,30 300,60 T400,40"
            stroke="url(#brushGradient2)"
            strokeWidth="4"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <defs>
            <linearGradient
              id="brushGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.4)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.6)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
            </linearGradient>
            <linearGradient
              id="brushGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.3)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3D Floating Design Elements */}
      <div className="absolute top-1/4 left-6">
        <div
          className="relative w-16 h-16 transform-gpu animate-bounce"
          style={{ animationDuration: "4s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-violet-600/40 rounded-2xl rotate-12 shadow-2xl"></div>
          <div className="absolute inset-1 bg-gradient-to-tl from-purple-300/30 to-pink-300/30 rounded-xl rotate-6"></div>
          <div className="absolute inset-3 bg-white/20 rounded-lg"></div>
        </div>
      </div>

      {/* Palette Wheel */}
      <div className="absolute bottom-20 right-8 w-20 h-20">
        <div
          className="relative w-full h-full animate-spin"
          style={{ animationDuration: "12s" }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, #ec4899, #a855f7, #8b5cf6, #d946ef, #ec4899)",
            }}
          >
            <div className="absolute inset-2 rounded-full bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-6 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>

      {/* Floating Creative Icons */}
      <div className="absolute top-12 left-12 opacity-40">
        <svg
          width="24"
          height="24"
          className="animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          <path
            d="M3 3h18v18H3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-pink-300"
          />
          <path
            d="M12 3v18M3 12h18"
            stroke="currentColor"
            strokeWidth="1"
            className="text-purple-400"
          />
        </svg>
      </div>
    </div>
  );
}

// Software Development Card Background Elements
function CodeElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Matrix-style Falling Code */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-xs font-mono opacity-30"
            style={{
              left: `${10 + i * 12}%`,
              animation: `fall ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div className="flex flex-col space-y-1 text-cyan-400/60">
              <span>01</span>
              <span>11</span>
              <span>00</span>
              <span>10</span>
              <span>01</span>
              <span>11</span>
            </div>
          </div>
        ))}
      </div>

      {/* Holographic Code Editor */}
      <div className="absolute inset-4">
        <div className="relative h-full bg-black/30 rounded-xl border border-cyan-500/20 backdrop-blur-sm overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center space-x-2 ml-12 lg:ml-0 mt-5 lg:mt-20 p-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-400/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
          </div>

          {/* Code Content with Typewriter Effect */}
          <div className="p-3 font-mono text-xs leading-relaxed">
            <div className="mb-1">
              <span className="text-purple-400 animate-pulse">function</span>
              <span className="text-white/80"> Andrometa</span>
              <span className="text-cyan-400">()</span>
              <span className="text-white/80"> {`{`}</span>
            </div>
            <div className="ml-4 mb-1">
              <span
                className="text-blue-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                const
              </span>
              <span className="text-white/80"> future = </span>
              <span
                className="text-green-400 animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                'now'
              </span>
              <span className="text-white/80">;</span>
            </div>
            <div className="ml-4 mb-1">
              <span
                className="text-orange-400 animate-pulse"
                style={{ animationDelay: "1.5s" }}
              >
                return
              </span>
              <span className="text-white/80"> magic;</span>
            </div>
            <div className="text-white/80">
              <span
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
              >{`}`}</span>
            </div>

            {/* Cursor */}
            <div className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1"></div>
          </div>

          {/* Scan Lines Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-8 animate-pulse"
              style={{
                animation: "scan 3s linear infinite",
                transform: "translateY(-100%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* 3D Floating Code Symbols */}
      <div className="absolute top-6 right-6">
        <div className="relative">
          <div
            className="text-4xl text-cyan-400/40 font-mono animate-spin transform-gpu"
            style={{ animationDuration: "8s" }}
          >
            &lt;/&gt;
          </div>
          <div className="absolute -top-2 -right-2 text-2xl text-blue-400/60 font-mono animate-bounce">
            {`{}`}
          </div>
          <div className="absolute -bottom-4 -left-4 text-lg text-indigo-400/50 font-mono animate-pulse">
            []
          </div>
        </div>
      </div>

      {/* Binary Orbit */}
      <div className="absolute bottom-8 left-8 w-16 h-16">
        <div
          className="relative w-full h-full animate-spin"
          style={{ animationDuration: "6s" }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400/60 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400/60 rounded-full transform -translate-x-1/2"></div>
          <div className="absolute left-0 top-1/2 w-1 h-1 bg-indigo-400/60 rounded-full transform -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-2 h-2 bg-purple-400/60 rounded-full transform -translate-y-1/2"></div>
          <div className="absolute inset-4 border border-cyan-400/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

// Technology Consulting Card Background Elements
function ConsultingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Neural Network Visualization */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Main Hub */}
          <circle
            cx="100"
            cy="100"
            r="8"
            fill="rgba(251, 191, 36, 0.6)"
            className="animate-pulse"
          >
            <animate
              attributeName="r"
              values="8;12;8"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Satellite Nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const x = 100 + 50 * Math.cos((angle * Math.PI) / 180);
            const y = 100 + 50 * Math.sin((angle * Math.PI) / 180);
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="rgba(249, 115, 22, 0.6)"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <line
                  x1="100"
                  y1="100"
                  x2={x}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </g>
            );
          })}

          {/* Data Pulse Animation */}
          <circle
            cx="100"
            cy="100"
            r="25"
            fill="none"
            stroke="rgba(251, 191, 36, 0.3)"
            strokeWidth="1"
          >
            <animate
              attributeName="r"
              values="25;60;25"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      {/* Holographic Display */}
      <div className="absolute top-4 right-4 w-24 h-16 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-lg border border-orange-400/30 backdrop-blur-sm">
        <div className="p-2 h-full flex flex-col justify-between text-xs text-orange-200/80 font-mono">
          <div className="flex justify-between">
            <span>CPU</span>
            <span className="text-green-400 animate-pulse">98%</span>
          </div>
          <div className="flex justify-between">
            <span>MEM</span>
            <span
              className="text-yellow-400 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              76%
            </span>
          </div>
          <div className="flex justify-between">
            <span>NET</span>
            <span
              className="text-blue-400 animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              234MB
            </span>
          </div>
        </div>
      </div>

      {/* 3D Gear Assembly */}
      <div className="absolute bottom-6 left-6 w-16 h-16">
        <div className="relative w-full h-full">
          {/* Main Gear */}
          <div
            className="absolute inset-0 border-4 border-amber-400/40 rounded-full animate-spin"
            style={{ animationDuration: "4s" }}
          >
            {/* Gear Teeth */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-1 bg-orange-400/60 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${i * 45}deg) translateY(-32px)`,
                }}
              />
            ))}
          </div>

          {/* Smaller Gear */}
          <div
            className="absolute top-2 right-2 w-8 h-8 border-2 border-orange-500/50 rounded-full animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-0.5 bg-amber-500/60 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${i * 60}deg) translateY(-16px)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Digital Constellation */}
      <div className="absolute top-8 left-8 w-20 h-20 opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/60 rounded-full animate-ping"
            style={{
              left: `${30 + 20 * Math.cos((i * 30 * Math.PI) / 180)}px`,
              top: `${30 + 20 * Math.sin((i * 30 * Math.PI) / 180)}px`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>

      {/* Flowing Data Streams */}
      <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
        <div className="flex space-x-4 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-16 h-1 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent rounded-full"
              style={{
                animation: `slide ${2 + i * 0.3}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Data Analytics & AI Card Background Elements
function AnalyticsElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* AI Neural Brain Visualization */}
      <div className="absolute top-4 right-4 w-32 h-20">
        <svg viewBox="0 0 120 80" className="w-full h-full">
          {/* Neural Network Layers */}
          <g className="opacity-60">
            {/* Input Layer */}
            {[0, 1, 2, 3].map((i) => (
              <circle
                key={`input-${i}`}
                cx="10"
                cy={15 + i * 15}
                r="3"
                fill="rgba(16, 185, 129, 0.6)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}

            {/* Hidden Layer */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle
                key={`hidden-${i}`}
                cx="60"
                cy={8 + i * 12}
                r="2"
                fill="rgba(20, 184, 166, 0.6)"
                className="animate-pulse"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              />
            ))}

            {/* Output Layer */}
            {[0, 1, 2].map((i) => (
              <circle
                key={`output-${i}`}
                cx="110"
                cy={20 + i * 15}
                r="3"
                fill="rgba(6, 182, 212, 0.6)"
                className="animate-pulse"
                style={{ animationDelay: `${1 + i * 0.3}s` }}
              />
            ))}

            {/* Connections */}
            {[0, 1, 2, 3].map((i) =>
              [0, 1, 2, 3, 4, 5].map((j) => (
                <line
                  key={`conn1-${i}-${j}`}
                  x1="13"
                  y1={15 + i * 15}
                  x2="57"
                  y2={8 + j * 12}
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="0.5"
                  className="animate-pulse"
                  style={{ animationDelay: `${(i + j) * 0.1}s` }}
                />
              ))
            )}
          </g>
        </svg>
      </div>

      {/* 3D Data Visualization */}
      <div className="absolute bottom-6 left-6 w-40 h-24">
        <div className="relative w-full h-full perspective-1000">
          {/* Animated 3D Bars */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-gradient-to-t from-emerald-500/60 to-teal-400/60 rounded-t transform-gpu"
              style={{
                left: `${i * 12}%`,
                width: "8%",
                height: `${30 + Math.sin(i * 0.5) * 20}%`,
                animation: `barGrow ${
                  2 + i * 0.2
                }s ease-in-out infinite alternate`,
                animationDelay: `${i * 0.1}s`,
                transformStyle: "preserve-3d",
                transform: "rotateX(-10deg) rotateY(5deg)",
              }}
            >
              {/* Bar highlight */}
              <div className="absolute inset-x-0 top-0 h-2 bg-white/30 rounded-t"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Real-time Analytics Dashboard */}
      <div className="absolute top-6 left-6 w-28 h-16 bg-black/40 rounded-lg border border-emerald-400/30 p-2 backdrop-blur-sm">
        <div className="text-xs text-emerald-300/80 font-mono space-y-1">
          <div className="flex justify-between">
            <span>ACC:</span>
            <span className="text-green-400 animate-pulse">94.7%</span>
          </div>
          <div className="flex justify-between">
            <span>F1:</span>
            <span
              className="text-teal-400 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            >
              0.92
            </span>
          </div>
          <div className="flex justify-between">
            <span>AUC:</span>
            <span
              className="text-cyan-400 animate-pulse"
              style={{ animationDelay: "0.6s" }}
            >
              0.89
            </span>
          </div>
        </div>

        {/* Processing indicator */}
        <div className="absolute top-1 right-1 w-2 h-2 bg-green-400/60 rounded-full animate-ping"></div>
      </div>

      {/* Data Flow Streams */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-32 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute right-0 w-full h-1 opacity-40"
            style={{
              top: `${i * 20}%`,
              background: `linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.6), transparent)`,
              animation: `streamFlow ${1.5 + i * 0.3}s linear infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Circular Progress Indicators */}
      <div className="absolute bottom-8 right-8 w-16 h-16">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(16, 185, 129, 0.2)"
            strokeWidth="2"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(16, 185, 129, 0.8)"
            strokeWidth="2"
            strokeDasharray="75, 100"
            className="animate-pulse"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;75,100;0,100"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs text-emerald-300 font-mono">
          AI
        </div>
      </div>
    </div>
  );
}

// Function to render card-specific elements
function renderCardElements(index: number) {
  switch (index) {
    case 0: // Design
      return <DesignElements />;
    case 1: // Software Development
      return <CodeElements />;
    case 2: // Technology Consulting
      return <ConsultingElements />;
    case 3: // Data Analytics & AI
      return <AnalyticsElements />;
    default:
      return null;
  }
}

export default function WhatWeDo({ openModal }: { openModal: () => void }) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

                {/* Card-specific design elements */}
                {renderCardElements(i)}

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
                <div className="relative z-20 h-full p-6 lg:p-8 flex flex-col justify-between">
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

                {/* Card-specific design elements for tablet */}
                {renderCardElements(i)}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-20 h-full p-6 flex flex-col justify-between">
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

                {/* Card-specific design elements for mobile */}
                {renderCardElements(i)}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverGradient} opacity-0 group-active:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-20 h-full p-6 flex flex-col justify-between">
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

          <button
            onClick={openModal}
            className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white text-base sm:text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
