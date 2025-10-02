"use client";

import { motion } from "framer-motion";

// Animated Unfold-style Template Icon
export function AnimatedTemplate() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className="w-full h-full"
    >
      {/* Template layers */}
      <motion.rect
        x="20"
        y="15"
        width="40"
        height="50"
        rx="6"
        fill="url(#templateGradient1)"
        stroke="#8b5cf6"
        strokeWidth="2"
        animate={{
          y: [15, 13, 15],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.rect
        x="22"
        y="18"
        width="36"
        height="44"
        rx="4"
        fill="url(#templateGradient2)"
        stroke="#a855f7"
        strokeWidth="1"
        animate={{
          y: [18, 16, 18],
          scale: [1, 1.01, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      {/* Content lines */}
      <motion.rect x="26" y="25" width="20" height="2" rx="1" fill="#8b5cf6" 
        animate={{ width: [20, 24, 20] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect x="26" y="30" width="28" height="2" rx="1" fill="#a855f7"
        animate={{ width: [28, 24, 28] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.rect x="26" y="35" width="16" height="2" rx="1" fill="#c084fc"
        animate={{ width: [16, 20, 16] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      
      {/* Floating design elements */}
      <motion.circle
        cx="65"
        cy="25"
        r="3"
        fill="#ec4899"
        animate={{
          y: [0, -5, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.polygon
        points="15,35 18,30 21,35"
        fill="#06b6d4"
        animate={{
          y: [0, 3, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <defs>
        <linearGradient id="templateGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="templateGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Animated Palette Icon with brush strokes
export function AnimatedPalette() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className="w-full h-full"
    >
      {/* Main palette */}
      <motion.ellipse
        cx="40"
        cy="45"
        rx="25"
        ry="20"
        fill="url(#paletteGradient)"
        stroke="#6366f1"
        strokeWidth="2"
      />
      
      {/* Color spots */}
      <circle cx="30" cy="35" r="3" fill="#ef4444" />
      <circle cx="50" cy="35" r="3" fill="#3b82f6" />
      <circle cx="35" cy="50" r="3" fill="#10b981" />
      <circle cx="45" cy="50" r="3" fill="#f59e0b" />
      
      {/* Animated brush */}
      <motion.g
        animate={{
          rotate: [-5, 5, -5],
          x: [0, 2, 0],
          y: [0, -1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="55" y="15" width="3" height="20" fill="#8b5cf6" rx="1.5" />
        <ellipse cx="56.5" cy="37" rx="4" ry="2" fill="#6366f1" />
      </motion.g>
      
      {/* Animated brush strokes */}
      <motion.path
        d="M60 20 Q65 25 70 30"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut"
        }}
      />
      
      <motion.path
        d="M65 15 Q70 20 75 25"
        stroke="#ec4899"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut"
        }}
      />
      
      <defs>
        <linearGradient id="paletteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Animated AI Bot with blinking eyes and moving antenna
export function AnimatedAIBot() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className="w-full h-full"
    >
      {/* Bot body */}
      <motion.rect
        x="25"
        y="35"
        width="30"
        height="35"
        rx="8"
        fill="url(#botGradient)"
        stroke="#3b82f6"
        strokeWidth="2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Bot head */}
      <motion.rect
        x="30"
        y="20"
        width="20"
        height="20"
        rx="6"
        fill="url(#botGradient)"
        stroke="#3b82f6"
        strokeWidth="2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Animated antenna */}
      <motion.line
        x1="40"
        y1="20"
        x2="40"
        y2="10"
        stroke="#3b82f6"
        strokeWidth="2"
        animate={{
          y2: [10, 8, 10]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.circle
        cx="40"
        cy="10"
        r="2"
        fill="#ef4444"
        animate={{
          cy: [10, 8, 10],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Blinking eyes */}
      <motion.circle
        cx="35"
        cy="28"
        r="2"
        fill="#1e40af"
        animate={{
          scaleY: [1, 0.1, 1]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
      
      <motion.circle
        cx="45"
        cy="28"
        r="2"
        fill="#1e40af"
        animate={{
          scaleY: [1, 0.1, 1]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />
      
      {/* Bot mouth */}
      <motion.path
        d="M35 32 Q40 35 45 32"
        stroke="#1e40af"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        animate={{
          d: ["M35 32 Q40 35 45 32", "M35 33 Q40 36 45 33", "M35 32 Q40 35 45 32"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Bot arms */}
      <rect x="20" y="45" width="4" height="15" rx="2" fill="#64748b" />
      <rect x="56" y="45" width="4" height="15" rx="2" fill="#64748b" />
      
      <defs>
        <linearGradient id="botGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Animated Gemini AI Brain
export function AnimatedAIBrain() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className="w-full h-full"
    >
      {/* Brain outline */}
      <motion.path
        d="M25 35 C25 25, 35 20, 45 25 C50 20, 60 25, 60 35 C65 40, 60 50, 55 50 C55 55, 50 60, 45 55 C40 60, 30 55, 25 50 C20 45, 25 35, 25 35 Z"
        fill="url(#brainGradient)"
        stroke="#3b82f6"
        strokeWidth="2"
        animate={{
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Neural connections */}
      <motion.g
        animate={{
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <line x1="35" y1="35" x2="45" y2="40" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="40" y1="30" x2="50" y2="35" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="30" y1="45" x2="40" y2="50" stroke="#ec4899" strokeWidth="1.5" />
        <line x1="50" y1="45" x2="55" y2="40" stroke="#10b981" strokeWidth="1.5" />
      </motion.g>
      
      {/* Pulsing nodes */}
      <motion.circle
        cx="35"
        cy="35"
        r="2"
        fill="#06b6d4"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.circle
        cx="45"
        cy="40"
        r="2"
        fill="#8b5cf6"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
      
      <motion.circle
        cx="50"
        cy="35"
        r="2"
        fill="#ec4899"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
      />
      
      {/* AI sparks */}
      <motion.g
        animate={{
          opacity: [0, 1, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <polygon points="40,20 41,23 44,22 41,25 40,28 39,25 36,22 39,23" fill="#fbbf24" />
        <polygon points="60,30 61,32 63,31 61,34 60,36 59,34 57,31 59,32" fill="#f59e0b" />
        <polygon points="25,40 26,42 28,41 26,44 25,46 24,44 22,41 24,42" fill="#fbbf24" />
      </motion.g>
      
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="50%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

// Animated Lightning Bolt with glowing pulse effect
export function AnimatedLightning() {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className="w-full h-full"
    >
      {/* Outer glow */}
      <motion.path
        d="M45 10 L25 35 L35 35 L30 65 L55 30 L45 30 L45 10 Z"
        fill="url(#lightningGlow)"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main lightning bolt */}
      <motion.path
        d="M45 15 L30 35 L35 35 L32 60 L50 30 L45 30 L45 15 Z"
        fill="url(#lightningGradient)"
        stroke="#f59e0b"
        strokeWidth="1"
        animate={{
          fill: ["#fbbf24", "#f59e0b", "#fbbf24"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Sparks */}
      <motion.g
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut"
        }}
      >
        <circle cx="20" cy="25" r="1.5" fill="#fbbf24" />
        <circle cx="55" cy="20" r="1" fill="#f59e0b" />
        <circle cx="60" cy="40" r="1.5" fill="#fbbf24" />
        <circle cx="25" cy="55" r="1" fill="#f59e0b" />
      </motion.g>
      
      {/* Energy lines */}
      <motion.g
        animate={{
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 1.2,
          ease: "easeInOut"
        }}
      >
        <line x1="35" y1="20" x2="38" y2="23" stroke="#fbbf24" strokeWidth="1" />
        <line x1="47" y1="35" x2="50" y2="38" stroke="#f59e0b" strokeWidth="1" />
        <line x1="32" y1="45" x2="29" y2="48" stroke="#fbbf24" strokeWidth="1" />
      </motion.g>
      
      <defs>
        <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        
        <radialGradient id="lightningGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}