import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Rocket, Star, Zap, Globe, Users, ArrowRight, Menu, X, Satellite, Orbit, Command } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced Floating Star with Framer Motion
  const FloatingStar = ({ delay, duration, size = "w-1 h-1", x, y }: { 
    delay: number; 
    duration: number; 
    size?: string;
    x: number;
    y: number;
  }) => (
    <motion.div 
      className={`absolute ${size} bg-white rounded-full opacity-70`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        y: [-20, 20, -20],
        rotate: [0, 180, 360],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );

  // Enhanced Planet with 3D-like effects
  const PlanetOrb = ({ size, color, position, animationDelay, hasRings = false }: { 
    size: string; 
    color: string; 
    position: React.CSSProperties; 
    animationDelay: number;
    hasRings?: boolean;
  }) => (
    <motion.div 
      className={`absolute ${size} ${color} rounded-full opacity-20 blur-sm`}
      style={{
        ...position,
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: animationDelay,
        ease: "linear"
      }}
    >
      {hasRings && (
        <div className="absolute inset-0 rounded-full border-2 border-blue-300 border-opacity-30 transform rotate-45 scale-150"></div>
      )}
    </motion.div>
  );

  // Nebula Cloud Component
  const NebulaCloud = ({ x, y, size, color }: { x: number; y: number; size: number; color: string }) => (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-30"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  // Asteroid Field Component
  const AsteroidField = ({ x, y, count = 15 }: { x: number; y: number; count?: number }) => (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gray-400 rounded-full opacity-40"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 200}px`,
            top: `${Math.random() * 100}px`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-white overflow-hidden relative">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }
        @keyframes slideInFromSpace {
          0% { transform: translateY(-100px) rotate(-10deg); opacity: 0; }
          100% { transform: translateY(0) rotate(0deg); opacity: 1; }
        }
        @keyframes cosmic-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes hologram-scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes data-stream {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .cosmic-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3);
        }
        .stellar-gradient {
          background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
        }
        .nebula-text {
          background: linear-gradient(45deg, #60a5fa, #3b82f6, #1d4ed8, #2563eb, #1e40af);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nebula-shift 8s ease-in-out infinite;
        }
        @keyframes nebula-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .parallax-cursor {
          transform: translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px);
        }
        .hologram-border {
          border: 1px solid rgba(59, 130, 246, 0.3);
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(16, 16, 32, 0.2));
          backdrop-filter: blur(10px);
        }
        .hologram-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          animation: hologram-scan 3s linear infinite;
        }
        .data-stream {
          position: relative;
          overflow: hidden;
        }
        .data-stream::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #60a5fa, transparent);
          animation: data-stream 2s linear infinite;
        }
        .space-control-panel {
          background: linear-gradient(135deg, rgba(16, 16, 32, 0.8), rgba(30, 64, 175, 0.2));
          border: 1px solid rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(20px);
        }
      `}</style>

      {/* Enhanced Cinematic Deep Space Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Detailed Galaxy Arms with Multiple Layers */}
        <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 blur-2xl" width="1400" height="1400" viewBox="0 0 1400 1400" fill="none">
          <defs>
            <radialGradient id="galaxyCore" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="armGlow1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="armGlow2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <ellipse cx="700" cy="700" rx="500" ry="150" fill="url(#armGlow1)" transform="rotate(-25 700 700)" />
          <ellipse cx="700" cy="700" rx="400" ry="120" fill="url(#armGlow2)" transform="rotate(35 700 700)" />
          <ellipse cx="700" cy="700" rx="300" ry="80" fill="url(#armGlow1)" transform="rotate(60 700 700)" />
          <ellipse cx="700" cy="700" rx="200" ry="50" fill="url(#galaxyCore)" />
        </svg>

        {/* Multiple Nebula Clouds */}
        <NebulaCloud x={20} y={30} size={300} color="#3b82f6" />
        <NebulaCloud x={80} y={60} size={250} color="#60a5fa" />
        <NebulaCloud x={60} y={20} size={200} color="#1e40af" />

        {/* Asteroid Fields */}
        <AsteroidField x={10} y={40} count={20} />
        <AsteroidField x={85} y={70} count={15} />

        {/* Enhanced Star Clusters */}
        {[...Array(120)].map((_, i) => (
          <FloatingStar 
            key={i} 
            delay={i * 0.05} 
            duration={2 + Math.random() * 3}
            size={Math.random() > 0.9 ? "w-2 h-2" : "w-1 h-1"}
            x={Math.random() * 100}
            y={Math.random() * 100}
          />
        ))}
      </div>

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Enhanced Orbiting Planets with Rings */}
        <PlanetOrb 
          size="w-48 h-48" 
          color="bg-blue-500" 
          position={{ top: '15%', right: '5%' }}
          animationDelay={0}
          hasRings={true}
        />
        <PlanetOrb 
          size="w-32 h-32" 
          color="bg-cyan-400" 
          position={{ bottom: '25%', left: '10%' }}
          animationDelay={-8}
        />
        <PlanetOrb 
          size="w-20 h-20" 
          color="bg-blue-300" 
          position={{ top: '70%', right: '15%' }}
          animationDelay={-15}
          hasRings={true}
        />

        {/* Enhanced Rotating Neon Planet */}
        <motion.svg 
          className="absolute left-1/4 top-2/3 opacity-70" 
          width="100" height="100" 
          viewBox="0 0 100 100" 
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="35" stroke="#60a5fa" strokeWidth="8" fill="#1e40af" fillOpacity="0.8" />
          <ellipse cx="50" cy="50" rx="40" ry="10" fill="#3b82f6" fillOpacity="0.3" />
          <circle cx="50" cy="50" r="25" stroke="#a5b4fc" strokeWidth="2" fill="transparent" />
        </motion.svg>

        {/* Enhanced Meteor Trails with Framer Motion */}
        {[...Array(8)].map((_,i)=>(
          <motion.svg 
            key={i}
            className="absolute" 
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              zIndex: 20
            }}
            width="80" height="10" 
            viewBox="0 0 80 10" 
            fill="none"
            initial={{ x: -40, opacity: 0, scaleX: 0.7 }}
            animate={{ x: 60, opacity: [0, 1, 0], scaleX: [0.7, 1.2, 0.7] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <defs>
              <linearGradient id={`meteor${i}`} x1="0" y1="5" x2="80" y2="5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="0.5" stopColor="#3b82f6" stopOpacity="0.7" />
                <stop offset="1" stopColor="#1e40af" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="3" width="80" height="4" rx="2" fill={`url(#meteor${i})`} />
          </motion.svg>
        ))}
      </div>

      {/* Enhanced Navigation - Space Control Center Style */}
      <motion.nav 
        className="relative z-50 p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full cosmic-glow"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-3xl font-bold nebula-text">ANDROMETA</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                className="hover:text-blue-300 transition-all duration-300 hover:scale-110 relative group space-control-panel px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-300 transition-colors space-control-panel p-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section - Immersive Space Control Interface */}
      <motion.section 
        className="relative z-20 min-h-screen flex items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="mb-12"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-2xl md:text-8xl font-extrabold mb-8 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <span className="text-white">Welcome to </span>
              <span className="nebula-text">ANDROMETA</span>
            </motion.h1>
            
            <motion.div 
              className="mb-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-blue-300 mb-6">
                Explore the Andromeda Galaxy of Technology
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed max-w-5xl mx-auto">
                Experience a new era of digital innovation, automation, and cosmic-scale efficiency. 
                Your journey to the stars begins here.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button 
              className="group px-12 py-6 bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full font-bold text-2xl hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 cosmic-glow flex items-center space-x-3 shadow-2xl backdrop-blur-md hologram-border"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              <span>Request a Free Consultation</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              className="px-12 py-6 border-2 border-blue-400 rounded-full font-bold text-2xl hover:bg-blue-400 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-md shadow-lg hologram-border"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.button>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-10 h-10 text-blue-300" />
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Features Section - Floating Holographic Control Panels */}
      <motion.section 
        className="relative z-20 py-24 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="nebula-text">What We Do</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              At Andrometa, we offer end-to-end digital solutions designed to help you thrive in the modern business landscape.
            </p>
          </motion.div>
          
          <motion.h3 
            className="text-4xl font-bold text-center mb-16 text-blue-300"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Star className="w-12 h-12" />,
                title: "Design",
                description: "Logo creation, brand identity assets, and visual communication that resonates with your audience and drives engagement.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Software Development",
                description: "Custom web and mobile applications tailored to your business logic, built with cutting-edge technology for optimal performance.",
                color: "from-cyan-500 to-blue-600"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Digital Solutions",
                description: "End-to-end technology solutions that help you automate processes, innovate faster, and scale your business efficiently.",
                color: "from-blue-600 to-purple-600"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="group p-12 rounded-3xl bg-white bg-opacity-10 backdrop-blur-2xl border border-blue-500 border-opacity-40 hover:border-opacity-80 transition-all duration-500 shadow-2xl cosmic-glow relative overflow-hidden space-control-panel"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Holographic shine overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(120deg,rgba(59,130,246,0.08) 40%,rgba(16,16,32,0.1) 100%)'}}></div>
                
                <motion.div 
                  className={`text-center mb-6 p-4 rounded-full bg-gradient-to-r ${feature.color} w-20 h-20 mx-auto flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-6 text-white group-hover:text-blue-300 transition-colors text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section - Holographic Command Center */}
      <motion.section 
        className="relative z-20 py-24 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
            className="p-16 rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 bg-opacity-60 backdrop-blur-2xl border border-blue-500 border-opacity-40 cosmic-glow shadow-2xl relative overflow-hidden space-control-panel"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Holographic shine overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(120deg,rgba(59,130,246,0.10) 40%,rgba(16,16,32,0.12) 100%)'}}></div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to <span className="nebula-text">Transform</span> Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join forward-thinking businesses who have partnered with Andrometa to simplify their technology and amplify their efficiency.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="group px-14 py-6 bg-gradient-to-r from-cyan-500 to-blue-700 rounded-full font-bold text-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 cosmic-glow flex items-center space-x-3 shadow-2xl backdrop-blur-md hologram-border"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-7 h-7" />
                <span>Get Started Today</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Mobile Menu - Holographic Interface */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black bg-opacity-95 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-center justify-center h-full space-y-8 text-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href="#" 
                  className="hover:text-blue-300 transition-colors duration-300 space-control-panel px-6 py-3 rounded-lg"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;