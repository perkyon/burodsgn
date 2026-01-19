"use client";

import { motion } from "framer-motion";

export const LiquidGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* Пятна градиента */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#FFEEE2] blur-[80px] opacity-60"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-[#FFEECC] blur-[100px] opacity-50"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] left-[30%] w-[50%] h-[50%] rounded-full bg-[#d37133] blur-[120px] opacity-[0.15]"
      />

      {/* Слой с шумом (Grain) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Мягкое виньетирование для глубины */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-white/40 pointer-events-none" />
    </div>
  );
};

