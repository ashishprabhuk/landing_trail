// src/components/Deep.jsx
import React from 'react';

const Deep = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-amber-50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Top navigation */}
        <div className="flex justify-between items-center py-6">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-gray-900">Brand</span>
            <span className="text-blue-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Product', 'Solutions', 'Resources', 'Pricing'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium hidden sm:block">Sign in</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Hero text */}
        <div className="mt-16 md:mt-32 text-center">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="block text-gray-900">Smart.</span>
              <span className="block text-gray-900 mt-2 md:mt-4">Connected.</span>
              <span className="block text-gray-900 mt-2 md:mt-4">Future-Ready</span>
            </h1>
          </div>
          
          <p className="mt-8 md:mt-12 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            The next generation platform for intelligent business solutions. Transform your operations with our AI-powered technology.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
              Start Free Trial
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-8 py-4 rounded-xl transition-colors border border-gray-300 shadow-sm hover:shadow">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="relative z-10 mt-24 md:mt-32 w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "99.9%", label: "Uptime" },
            { value: "2.5x", label: "ROI Increase" },
            { value: "10K+", label: "Customers" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-12 left-10 hidden lg:block">
        <div className="flex items-center space-x-2 animate-bounce">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-600 font-medium">Scroll down</span>
        </div>
      </div>
    </div>
  );
};

export default Deep;