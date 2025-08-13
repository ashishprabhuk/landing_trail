// import React, { useState, useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Stars, OrbitControls, useTexture } from '@react-three/drei';
// import * as THREE from 'three';

// const Andro = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
//   const handleMouseMove = (e) => {
//     setCursorPosition({ x: e.clientX, y: e.clientY });
//   };
  
//   return (
//     <div 
//       className="relative w-full min-h-screen overflow-hidden bg-black"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Custom cursor effect */}
//       <div 
//         className="fixed w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-20 pointer-events-none z-0"
//         style={{
//           left: cursorPosition.x - 128,
//           top: cursorPosition.y - 128,
//           transform: 'scale(0.8)',
//           transition: 'transform 0.1s ease-out'
//         }}
//       />
      
//       {/* Space Background */}
//       <div className="absolute inset-0 z-0">
//         <Canvas>
//           <ambientLight intensity={0.1} />
//           <pointLight position={[10, 10, 10]} color="#00a2ff" intensity={1.5} />
//           <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
//           <GalaxyModel />
//           <NebulaEffects />
//           <CosmicDustParticles />
//           <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
//         </Canvas>
//       </div>
      
//       {/* Cosmic Dust Overlay */}
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,40,60,0.1)_100%)]"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,162,255,0.05)_0%,rgba(0,40,60,0)_70%)]"></div>
//       </div>
      
//       {/* Glowing Grid Overlay */}
//       <div className="absolute inset-0 z-5 pointer-events-none">
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDE2MiwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-20"></div>
//       </div>
      
//       {/* Main Content */}
//       <div className="relative z-30 min-h-screen flex flex-col">
//         {/* Navigation Bar */}
//         <motion.nav 
//           className="sticky top-0 z-50 p-6 backdrop-blur-md"
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 cosmic-glow flex items-center justify-center">
//                 <div className="w-2 h-2 rounded-full bg-white"></div>
//               </div>
//               <span className="text-2xl font-bold nebula-text">VIEWSPACE</span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-8 bg-black/30 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-500/30">
//               {['Home', 'Interactives', 'Videos', 'Resources'].map((item) => (
//                 <motion.a
//                   key={item}
//                   href="#"
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                     activeSection === item.toLowerCase() 
//                       ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30 cosmic-glow-sm' 
//                       : 'text-gray-300 hover:text-blue-300'
//                   }`}
//                   onClick={() => setActiveSection(item.toLowerCase())}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//             </div>
            
//             <motion.button 
//               className="px-6 py-2 bg-transparent border border-blue-500 rounded-full text-blue-300 glow-blue-hover text-sm"
//               whileHover={{ scale: 1.05 }}
//             >
//               SIGN IN
//             </motion.button>
            
//             {/* Mobile Menu Button */}
//             <button 
//               className="md:hidden text-blue-300 z-50"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
          
//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <motion.div 
//               className="absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl z-40 md:hidden pt-24"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="flex flex-col items-center space-y-6 p-8">
//                 {['Home', 'Interactives', 'Videos', 'Resources'].map((item) => (
//                   <motion.a
//                     key={item}
//                     href="#"
//                     className={`text-xl px-6 py-3 w-full text-center rounded-xl ${
//                       activeSection === item.toLowerCase() 
//                         ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 cosmic-glow-sm' 
//                         : 'text-gray-300 hover:text-blue-300'
//                     }`}
//                     onClick={() => {
//                       setActiveSection(item.toLowerCase());
//                       setIsMenuOpen(false);
//                     }}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {item}
//                   </motion.a>
//                 ))}
//                 <motion.button 
//                   className="mt-4 px-6 py-3 bg-transparent border border-blue-500 rounded-xl text-blue-300 glow-blue-hover text-xl w-full"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   SIGN IN
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </motion.nav>
        
//         {/* Hero Section */}
//         <div className="flex-grow flex flex-col items-center justify-center px-6 py-12">
//           <motion.div 
//             className="text-center max-w-4xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//               className="inline-block mb-8"
//             >
//               <div className="w-4 h-4 rounded-full bg-blue-400 inline-block mr-2 animate-pulse"></div>
//               <div className="w-4 h-4 rounded-full bg-blue-400 inline-block mr-2 animate-pulse delay-75"></div>
//               <div className="w-4 h-4 rounded-full bg-blue-400 inline-block animate-pulse delay-150"></div>
//             </motion.div>
            
//             <motion.h1 
//               className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.2 }}
//             >
//               explore the galaxy
//             </motion.h1>
            
//             <motion.p 
//               className="text-xl md:text-3xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.4 }}
//             >
//               you'll find out lots of things
//             </motion.p>
            
//             <motion.div 
//               className="flex flex-col sm:flex-row justify-center gap-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 1.6 }}
//             >
//               <motion.button 
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 162, 255, 0.7)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold rounded-full font-space uppercase tracking-wider cosmic-glow flex items-center justify-center space-x-2"
//               >
//                 <span>START EXPLORING</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                 </svg>
//               </motion.button>
              
//               <motion.button 
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 162, 255, 0.4)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-300 rounded-full font-space uppercase tracking-wider"
//               >
//                 WATCH TRAILER
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
        
//         {/* Featured Content */}
//         <div className="py-16 px-6">
//           <motion.div 
//             className="max-w-7xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   title: "Planetary Systems",
//                   description: "Explore exotic planets with unique ecosystems and breathtaking landscapes",
//                   icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   ),
//                   color: "from-blue-600 to-cyan-600"
//                 },
//                 {
//                   title: "Deep Space Anomalies",
//                   description: "Investigate cosmic phenomena that defy conventional physics",
//                   icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                     </svg>
//                   ),
//                   color: "from-cyan-600 to-blue-700"
//                 },
//                 {
//                   title: "Alien Civilizations",
//                   description: "Discover ancient cultures and advanced technologies",
//                   icon: (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                   ),
//                   color: "from-blue-700 to-indigo-700"
//                 }
//               ].map((item, index) => (
//                 <motion.div 
//                   key={index}
//                   className="p-8 rounded-2xl bg-black/30 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 cosmic-glow-sm relative overflow-hidden"
//                   whileHover={{ y: -10 }}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
//                     <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
//                   </div>
                  
//                   <div className={`mb-6 w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center cosmic-glow-sm`}>
//                     {item.icon}
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-blue-300 mb-4">{item.title}</h3>
//                   <p className="text-gray-300">{item.description}</p>
                  
//                   <motion.button 
//                     className="mt-6 px-4 py-2 text-sm bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 flex items-center space-x-1"
//                     whileHover={{ backgroundColor: 'rgba(0, 162, 255, 0.2)' }}
//                   >
//                     <span>Learn More</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </motion.button>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Asteroid Field */}
//       <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden z-20">
//         <AsteroidBelt />
//       </div>
      
//       {/* Footer */}
//       <footer className="relative z-30 py-8 px-6 border-t border-blue-500/20">
//         <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
//           <p>© {new Date().getFullYear()} VIEWSPACE Galactic Exploration Initiative</p>
//           <p className="mt-2">Designed among the stars of Andromeda</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// // Nebula Effects Component
// const NebulaEffects = () => {
//   const nebulaRef = useRef<THREE.Mesh>(null);
// //   const nebulaTexture = useTexture("../../assets/nebula-texture.jpg"); // Replace with actual nebula texture path
  
//   useFrame(({ clock }) => {
//     if (nebulaRef.current) {
//       nebulaRef.current.rotation.x = clock.getElapsedTime() * 0.02;
//       nebulaRef.current.rotation.y = clock.getElapsedTime() * 0.01;
//     }
//   });

//   return (
//     <group ref={nebulaRef}>
//       {/* Main Nebula Cloud */}
//       <mesh position={[30, -20, -150]}>
//         <sphereGeometry args={[40, 32, 32]} />
//         <meshStandardMaterial
//           color="#00a2ff"
//           transparent
//           opacity={0.4}
//           emissive="#00a2ff"
//           emissiveIntensity={0.3}
//         />
//       </mesh>
      
//       {/* Secondary Nebula Clouds */}
//       <mesh position={[-50, 30, -100]} rotation={[0.5, 0.3, 0]}>
//         <sphereGeometry args={[25, 32, 32]} />
//         <meshStandardMaterial
//           color="#0066ff"
//           transparent
//           opacity={0.3}
//           emissive="#0066ff"
//           emissiveIntensity={0.2}
//         />
//       </mesh>
//     </group>
//   );
// };

// // Cosmic Dust Particles Component
// const CosmicDustParticles = () => {
//   const particlesRef = useRef<THREE.Points>(null);
//   const count = 1000;
  
//   // Only generate positions once
//   const positions = React.useMemo(() => {
//     const arr = new Float32Array(count * 3);
//     for (let i = 0; i < count * 3; i++) {
//       arr[i] = (Math.random() - 0.5) * 2000;
//     }
//     return arr;
//   }, [count]);

//   useFrame(() => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.x += 0.0001;
//       particlesRef.current.rotation.y += 0.0001;
//     }
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry attach="geometry">
//         <bufferAttribute
//           attach="attributes-position"
//           count={positions.length / 3}
//           array={positions}
//           itemSize={3}
//           args={[positions.length / 3, positions]}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         attach="material"
//         size={0.5}
//         sizeAttenuation={true}
//         color="#00a2ff"
//         transparent
//         opacity={0.8}
//       />
//     </points>
//   );
// };

// // Asteroid Belt Component
// const AsteroidBelt = () => {
//   // SSR-safe window check
//   const [width, setWidth] = useState(1920);
  
//   useEffect(() => {
//     setWidth(window.innerWidth);
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
//   const asteroids = React.useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
//     id: i,
//     x: Math.random() * width,
//     y: Math.random() * 50,
//     size: Math.random() * 3 + 1,
//     speed: Math.random() * 2 + 0.5,
//     delay: Math.random() * 5
//   })), [width]);

//   return (
//     <div className="absolute inset-0">
//       {asteroids.map((asteroid) => (
//         <motion.div
//           key={asteroid.id}
//           initial={{ x: asteroid.x, y: asteroid.y, opacity: 0 }}
//           animate={{ 
//             x: asteroid.x + width,
//             y: asteroid.y + (Math.random() * 40 - 20),
//             opacity: [0, 1, 1, 0]
//           }}
//           transition={{
//             duration: asteroid.speed * 10,
//             delay: asteroid.delay,
//             repeat: Infinity,
//             repeatDelay: Math.random() * 10
//           }}
//           className="absolute rounded-full bg-gray-400"
//           style={{
//             width: `${asteroid.size}px`,
//             height: `${asteroid.size}px`,
//             boxShadow: '0 0 5px rgba(0, 162, 255, 0.8)'
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Galaxy Model Component
// const GalaxyModel = () => {
//   return (
//     <mesh position={[0, 0, -200]}>
//       <sphereGeometry args={[50, 32, 32]} />
//       <shaderMaterial
//         uniforms={{
//           time: { value: 0 },
//           color1: { value: new THREE.Color(0x00a2ff) },
//           color2: { value: new THREE.Color(0x0055ff) },
//         }}
//         vertexShader={galaxyVertexShader}
//         fragmentShader={galaxyFragmentShader}
//         transparent={true}
//         opacity={0.8}
//       />
//     </mesh>
//   );
// };

// // Shaders
// const galaxyVertexShader = `
//   varying vec2 vUv;
//   void main() {
//     vUv = uv;
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
// `;

// const galaxyFragmentShader = `
//   uniform vec3 color1;
//   uniform vec3 color2;
//   varying vec2 vUv;
  
//   void main() {
//     // Create a spiral galaxy effect
//     float distanceFromCenter = distance(vUv, vec2(0.5, 0.5));
//     float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
//     float spiral = sin(angle * 10.0 + distanceFromCenter * 50.0);
    
//     vec3 color = mix(color1, color2, distanceFromCenter * 2.0);
//     color = mix(color, vec3(0.0), smoothstep(0.4, 0.6, distanceFromCenter));
//     color = mix(color, vec3(1.0), smoothstep(0.3, 0.4, spiral));
    
//     gl_FragColor = vec4(color, 0.8);
//   }
// `;

// export default Andro;


import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Andrometa = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden bg-gray-950"
      onMouseMove={handleMouseMove}
    >
      {/* Custom cursor effect */}
      <div 
        className="fixed w-64 h-64 rounded-full bg-blue-500 blur-3xl opacity-10 pointer-events-none z-0"
        style={{
          left: cursorPosition.x - 128,
          top: cursorPosition.y - 128,
          transform: 'scale(0.8)',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} color="#00a2ff" intensity={1.5} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <GalaxyModel />
          <NebulaEffects />
          <CosmicDustParticles />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
        </Canvas>
      </div>
      
      {/* Cosmic Dust Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,40,60,0.1)_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,162,255,0.05)_0%,rgba(0,40,60,0)_70%)]"></div>
      </div>
      
      {/* Glowing Grid Overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDApIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDE2MiwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz4KPC9zdmc+')] opacity-10"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-30 min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <motion.nav 
          className="sticky top-0 z-50 p-6 backdrop-blur-md"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 cosmic-glow flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span className="text-2xl font-bold nebula-text">ANDROMETA</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 bg-black/30 backdrop-blur-lg px-6 py-3 rounded-full border border-blue-500/30">
              {['Home', 'Services', 'About', 'Work', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase() 
                      ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30 cosmic-glow-sm' 
                      : 'text-gray-300 hover:text-blue-300'
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <motion.button 
              className="px-6 py-2 bg-transparent border border-blue-500 rounded-full text-blue-300 glow-blue-hover text-sm"
              whileHover={{ scale: 1.05 }}
            >
              CONTACT US
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blue-300 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              className="absolute top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl z-40 md:hidden pt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center space-y-6 p-8">
                {['Home', 'Services', 'About', 'Work', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-xl px-6 py-3 w-full text-center rounded-xl ${
                      activeSection === item.toLowerCase() 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 cosmic-glow-sm' 
                        : 'text-gray-300 hover:text-blue-300'
                    }`}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  className="mt-4 px-6 py-3 bg-transparent border border-blue-500 rounded-xl text-blue-300 glow-blue-hover text-xl w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  CONTACT US
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.nav>
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <motion.div 
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block mb-8"
            >
              <div className="w-4 h-4 rounded-full bg-blue-400 inline-block mr-2 animate-pulse"></div>
              <div className="w-4 h-4 rounded-full bg-blue-400 inline-block mr-2 animate-pulse delay-75"></div>
              <div className="w-4 h-4 rounded-full bg-blue-400 inline-block animate-pulse delay-150"></div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Welcome to Andrometa
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-3xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Simplify Technology. Amplify Efficiency.
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              We help businesses harness the power of technology to automate, innovate, and scale—smarter and faster.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 162, 255, 0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold rounded-full font-space uppercase tracking-wider cosmic-glow flex items-center justify-center space-x-2"
              >
                <span>REQUEST A FREE CONSULTATION</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 162, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-300 rounded-full font-space uppercase tracking-wider"
              >
                EXPLORE OUR SERVICES
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
        
        {/* What We Do Section */}
        <section id="services" className="py-20 px-6 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mb-6">What We Do</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                At Andrometa, we offer end-to-end digital solutions designed to help you thrive in the modern business landscape.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Design",
                  description: "Logo creation, brand identity assets, and visual communication that resonates.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                  color: "from-blue-600 to-cyan-600"
                },
                {
                  title: "Software Development",
                  description: "Custom web and mobile applications tailored to your business logic.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                  color: "from-cyan-600 to-blue-700"
                },
                {
                  title: "Cybersecurity",
                  description: "Advanced security solutions to keep your digital assets safe and compliant.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  color: "from-blue-700 to-indigo-700"
                },
                {
                  title: "Data Analytics & AI",
                  description: "Actionable insights and smart automation through AI-driven solutions.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ),
                  color: "from-indigo-700 to-purple-700"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-8 rounded-2xl bg-black/30 backdrop-blur-md border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 cosmic-glow-sm relative overflow-hidden"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
                  </div>
                  
                  <div className={`mb-6 w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center cosmic-glow-sm`}>
                    {item.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">{item.title}</h3>
                  <p className="text-gray-300 mb-6">{item.description}</p>
                  
                  <motion.button 
                    className="px-4 py-2 text-sm bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300"
                    whileHover={{ backgroundColor: 'rgba(0, 162, 255, 0.2)' }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mb-6">About Andrometa</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Who We Are</h3>
                  <p className="text-gray-300 mb-6">
                    A team of passionate technologists, creators, and strategists focused on transforming businesses through intelligent digital experiences.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Our Vision</h3>
                  <p className="text-gray-300">
                    To lead the future of IT through intelligent automation, seamless digital solutions, and a commitment to making work easier, faster, and smarter.
                  </p>
                </motion.div>
              </div>
              
              <div>
                <motion.div 
                  className="mb-12 p-8 bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-2xl cosmic-glow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Our Mission</h3>
                  <p className="text-gray-300 italic">
                    "Empowering businesses with cutting-edge IT solutions, driving automation, and simplifying work. At Andrometa, we innovate to enhance efficiency, boost security, and make technology work for people—not the other way around."
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-blue-300 mb-6">Why Choose Us?</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Industry-grade security and reliability",
                      "Agile and scalable digital solutions",
                      "Transparent communication and delivery",
                      "Proven results across multiple domains"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Work Section */}
        <section id="work" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mb-6">Our Work in Action</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Take a look at some of the digital experiences we've built. Here's a glimpse of how our work looks on mobile and desktop.
              </p>
            </motion.div>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6">Mobile Screens</h3>
                <div className="relative mx-auto w-64 h-[500px] bg-gray-900 border-2 border-blue-500/30 rounded-[2rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-500/30 rounded-full"></div>
                  <div className="absolute inset-4 bg-gray-800 rounded-[1.5rem] overflow-hidden">
                    <div className="h-1/3 bg-gradient-to-r from-blue-700/30 to-cyan-700/30"></div>
                    <div className="h-1/3 bg-gradient-to-r from-cyan-700/30 to-blue-700/30"></div>
                    <div className="h-1/3 bg-gradient-to-r from-blue-700/30 to-cyan-700/30"></div>
                  </div>
                </div>
                <p className="mt-4 text-gray-400">Showcase of intuitive app interfaces</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6">Laptop Views</h3>
                <div className="relative mx-auto w-[500px] h-[300px] bg-gray-900 border-2 border-blue-500/30 rounded-lg overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-r from-gray-800 to-gray-900"></div>
                  <div className="absolute inset-4 inset-y-8 bg-gray-800 rounded overflow-hidden">
                    <div className="h-1/2 bg-gradient-to-r from-blue-700/30 to-cyan-700/30"></div>
                    <div className="h-1/2 bg-gradient-to-r from-cyan-700/30 to-blue-700/30"></div>
                  </div>
                </div>
                <p className="mt-4 text-gray-400">Web platforms designed for clarity and performance</p>
              </motion.div>
            </div> */}
          </div>
        </section>
        
        {/* Trusted By Section */}
        <section className="py-20 px-6 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mb-6">Trusted By</h2>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              {Array.from({ length: 12 }).map((_, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-black/30 backdrop-blur-md border border-blue-500/20 rounded-xl flex items-center justify-center h-32"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(0, 162, 255, 0.5)' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-8 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-md"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="p-12 bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-3xl cosmic-glow relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mt-16 -mr-16"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mb-16 -ml-16"></div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's discuss how our solutions can drive innovation and efficiency for your organization.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 162, 255, 0.7)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold rounded-full font-space uppercase tracking-wider cosmic-glow"
              >
                GET STARTED TODAY
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="relative z-30 py-8 px-6 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 cosmic-glow flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-bold nebula-text">ANDROMETA</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center">
              <p>© {new Date().getFullYear()} Andrometa Digital Solutions</p>
              <p className="mt-1">Designed among the stars of innovation</p>
            </div>
            
            <div className="flex space-x-4 mt-6 md:mt-0">
              {[0, 1, 2, 3].map((_, index) => (
                <motion.a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-blue-500/20 flex items-center justify-center text-blue-300"
                  whileHover={{ backgroundColor: 'rgba(0, 162, 255, 0.2)', scale: 1.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Nebula Effects Component
const NebulaEffects = () => {
  const nebulaRef = useRef<THREE.Mesh>(null);
//   const nebulaTexture = useTexture("../../assets/nebula-texture.jpg"); // Replace with actual nebula texture path
  
  useFrame(({ clock }) => {
    if (nebulaRef.current) {
      nebulaRef.current.rotation.x = clock.getElapsedTime() * 0.02;
      nebulaRef.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <group ref={nebulaRef}>
      {/* Main Nebula Cloud */}
      <mesh position={[30, -20, -150]}>
        <sphereGeometry args={[40, 32, 32]} />
        <meshStandardMaterial
          color="#00a2ff"
          transparent
          opacity={0.4}
          emissive="#00a2ff"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Secondary Nebula Clouds */}
      <mesh position={[-50, 30, -100]} rotation={[0.5, 0.3, 0]}>
        <sphereGeometry args={[25, 32, 32]} />
        <meshStandardMaterial
          color="#0066ff"
          transparent
          opacity={0.3}
          emissive="#0066ff"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

// Cosmic Dust Particles Component
const CosmicDustParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 1000;
  
  // Only generate positions once
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 2000;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0001;
      particlesRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions.length / 3, positions]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.5}
        sizeAttenuation={true}
        color="#00a2ff"
        transparent
        opacity={0.8}
      />
    </points>
  );
};

// Asteroid Belt Component
const AsteroidBelt = () => {
  // SSR-safe window check
  const [width, setWidth] = useState(1920);
  
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const asteroids = React.useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * width,
    y: Math.random() * 50,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 0.5,
    delay: Math.random() * 5
  })), [width]);

  return (
    <div className="absolute inset-0">
      {asteroids.map((asteroid) => (
        <motion.div
          key={asteroid.id}
          initial={{ x: asteroid.x, y: asteroid.y, opacity: 0 }}
          animate={{ 
            x: asteroid.x + width,
            y: asteroid.y + (Math.random() * 40 - 20),
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: asteroid.speed * 10,
            delay: asteroid.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 10
          }}
          className="absolute rounded-full bg-gray-400"
          style={{
            width: `${asteroid.size}px`,
            height: `${asteroid.size}px`,
            boxShadow: '0 0 5px rgba(0, 162, 255, 0.8)'
          }}
        />
      ))}
    </div>
  );
};

// Galaxy Model Component
const GalaxyModel = () => {
  return (
    <mesh position={[0, 0, -200]}>
      <sphereGeometry args={[50, 32, 32]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 },
          color1: { value: new THREE.Color(0x00a2ff) },
          color2: { value: new THREE.Color(0x0055ff) },
        }}
        vertexShader={galaxyVertexShader}
        fragmentShader={galaxyFragmentShader}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

// Shaders
const galaxyVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const galaxyFragmentShader = `
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;
  
  void main() {
    // Create a spiral galaxy effect
    float distanceFromCenter = distance(vUv, vec2(0.5, 0.5));
    float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
    float spiral = sin(angle * 10.0 + distanceFromCenter * 50.0);
    
    vec3 color = mix(color1, color2, distanceFromCenter * 2.0);
    color = mix(color, vec3(0.0), smoothstep(0.4, 0.6, distanceFromCenter));
    color = mix(color, vec3(1.0), smoothstep(0.3, 0.4, spiral));
    
    gl_FragColor = vec4(color, 0.8);
  }
`;

export default Andrometa;