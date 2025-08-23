import { motion } from "framer-motion";
import { Code, BarChart3, PenTool, Lightbulb } from "lucide-react";

export default function ContactIllustration() {
  return (
    <div className="flex justify-center items-center relative w-full h-64 md:h-80">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        {/* Background Gradient Circles */}
        <defs>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated Background Rings */}
        <motion.circle
          cx="250"
          cy="200"
          r="80"
          stroke="#60A5FA"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          animate={{ r: [80, 120, 80] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <motion.circle
          cx="250"
          cy="200"
          r="120"
          stroke="#34D399"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          animate={{ r: [120, 160, 120] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        {/* Central Hub with Gradient */}
        <motion.circle
          cx="250"
          cy="200"
          r="35"
          fill="url(#centerGradient)"
          stroke="#3B82F6"
          strokeWidth="2"
          filter="url(#glow)"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* Communication Network Paths */}
        {/* Curved connection paths */}
        <motion.path
          d="M 250 200 Q 150 100 100 80"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 250 200 Q 350 120 400 100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M 250 200 Q 150 280 80 320"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d="M 250 200 Q 350 280 420 320"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Communication Nodes with Icons */}
        {/* Email Node */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0 }}
        >
          <circle cx="100" cy="80" r="25" fill="#7affceff" opacity="0.2" />
          <circle cx="100" cy="80" r="20" fill="#10B981" stroke="#059669" strokeWidth="2" />
          <text x="100" y="87" fontSize="16" textAnchor="middle" fill="white">☎︎</text>
        </motion.g>

        {/* Phone Node */}
        <motion.g
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
        >
          <circle cx="400" cy="100" r="25" fill="#60A5FA" opacity="0.2" />
          <circle cx="400" cy="100" r="20" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
          <text x="400" y="107" fontSize="16" textAnchor="middle" fill="white">✉️</text>
        </motion.g>

        {/* Chat Node */}
        <motion.g
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 1 }}
        >
          <circle cx="80" cy="320" r="25" fill="#F59E0B" opacity="0.2" />
          <circle cx="80" cy="320" r="20" fill="#ffc567ff" stroke="#D97706" strokeWidth="2" />
          <text x="80" y="327" fontSize="16" textAnchor="middle" fill="white">💬</text>
        </motion.g>

        {/* Social Media Node */}
        <motion.g
          animate={{ x: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, delay: 1.5 }}
        >
          <circle cx="420" cy="320" r="25" fill="#ffffffff" opacity="0.2" />
          <circle cx="420" cy="320" r="20" fill="#ff6161ff" stroke="#ff6161ff" strokeWidth="2" />
          <text x="420" y="327" fontSize="16" textAnchor="middle" fill="white">⚲</text>
        </motion.g>

        {/* Floating Data Particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.circle
            key={i}
            cx={150 + (i * 25)}
            cy={150 + Math.sin(i) * 30}
            r="2"
            fill={i % 2 === 0 ? "#60A5FA" : "#34D399"}
            opacity="0.6"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 + (i * 0.2), 
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Signal Waves */}
        <motion.g opacity="0.4">
          <motion.path
            d="M 230 180 Q 240 170 250 180 Q 260 190 270 180"
            stroke="#60A5FA"
            strokeWidth="2"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 225 185 Q 240 165 255 185 Q 270 205 285 185"
            stroke="#34D399"
            strokeWidth="2"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 220 190 Q 240 160 260 190 Q 280 220 300 190"
            stroke="#F59E0B"
            strokeWidth="2"
            fill="none"
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 3, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Connection Labels */}
        <motion.text
          x="170"
          y="140"
          fontSize="12"
          fill="#99a9c3ff"
          opacity="0.7"
          textAnchor="middle"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Connect
        </motion.text>

        <motion.text
          x="330"
          y="260"
          fontSize="12"
          fill="#abbedcff"
          opacity="0.7"
          textAnchor="middle"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
        >
          Communicate
        </motion.text>
      </svg>
    </div>
  );
}