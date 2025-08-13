import React from "react";

export default function MeetingsHero() {
  return (
    <div className="relative w-full min-h-screen bg-[#0B0B1F] overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Star Field Layer */}
      <div className="absolute inset-0 z-0">
        {/* Dark radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(13,15,40,0.95)_0%,_rgba(0,0,0,1)_100%)]" />

        {/* Stars */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-screen" />
      </div>

      {/* Nebula Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-pink-500/30 blur-[120px]" />

      {/* Arc Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] blur-3xl opacity-80">
        <svg
          viewBox="0 0 900 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full rotate-180"
        >
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6B5BFF" />
            </linearGradient>
          </defs>
          <path
            d="M0,150 Q450,-150 900,150 L900,300 L0,300 Z"
            fill="url(#arcGradient)"
          />
        </svg>
      </div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />

      {/* Badge */}
      <span className="relative z-10 px-4 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
      Andrometa
      </span>

      {/* Heading */}
      <h1 className="relative z-10 mt-4 text-4xl sm:text-5xl font-semibold text-white leading-tight">
      Simplify Technology <br /> Amplify Efficiency
      </h1>

      {/* Subtext */}
      <p className="relative z-10 mt-4 max-w-xl text-gray-300 text-sm sm:text-base">
      We help businesses harness the power of technology to <br />automate, innovate, and scale - smarter and faster.
      </p>

      {/* Static Calendar Mock */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 opacity-30 z-0">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-28 h-72 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/10"
          />
        ))}
      </div>
    </div>
  );
}
