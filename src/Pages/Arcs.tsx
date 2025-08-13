import React from 'react';

export default function Arcs() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/30 rounded-full blur-2xl"></div>
      
      {/* Navigation */}

      {/* Arc element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 800 800" className="absolute">
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
            </linearGradient>
          </defs>
          <path
            d="M 150 400 Q 400 150 650 400"
            stroke="url(#arcGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M 200 450 Q 400 200 600 450"
            stroke="url(#arcGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M 250 500 Q 400 250 550 500"
            stroke="url(#arcGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-8">
        {/* Blue badge */}
        {/* <div className="mb-8">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            AI-Powered for startups
          </span>
        </div> */}
        
        {/* Main heading */}
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
            <br />
            <span className="font-light">Simplify Technology</span>
            <br />
            <span className="font-light">Amplify Efficiency</span>
          </h1>
        </div>
        
        {/* Subheading */}
        <div className="text-center max-w-2xl mb-12">
          <p className="text-gray-400 text-lg leading-relaxed">
          We help businesses harness the power of technology to automate, innovate, and scale — smarter and faster.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors">
            <span>Our Services</span>
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}