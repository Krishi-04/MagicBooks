import React from 'react';
import { motion } from 'framer-motion';

export const MagicalGirl: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Character Illustration */}
      <motion.div
        className="relative w-96 h-[500px] mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Library Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800/60 to-purple-900/80 rounded-3xl border border-purple-500/30">
          <div className="absolute inset-6 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-2xl border border-purple-400/30">
            
            {/* Bookshelves */}
            <div className="absolute top-6 left-4 right-4 h-4 bg-gradient-to-r from-orange-800 to-red-800 rounded-full opacity-90 shadow-lg"></div>
            <div className="absolute top-12 left-4 right-4 h-4 bg-gradient-to-r from-orange-800 to-red-800 rounded-full opacity-90 shadow-lg"></div>
            <div className="absolute top-18 left-4 right-4 h-4 bg-gradient-to-r from-orange-800 to-red-800 rounded-full opacity-90 shadow-lg"></div>
            <div className="absolute bottom-6 left-4 right-4 h-4 bg-gradient-to-r from-orange-800 to-red-800 rounded-full opacity-90 shadow-lg"></div>
            
            {/* Individual Books on Shelves */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-12 bg-gradient-to-b ${
                  ['from-red-500 to-red-700', 'from-blue-500 to-blue-700', 'from-green-500 to-green-700', 'from-yellow-500 to-yellow-700'][i % 4]
                } rounded-sm shadow-sm`}
                style={{
                  left: `${20 + (i % 6) * 10}%`,
                  top: i < 6 ? '24px' : '48px',
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              />
            ))}
            
            {/* Girl Figure */}
            <motion.div 
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Head */}
              <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full mx-auto relative shadow-lg">
                {/* Eyes */}
                <div className="absolute top-5 left-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div className="absolute top-5 right-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                {/* Nose */}
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-pink-400 rounded-full"></div>
                {/* Mouth */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-pink-400 rounded-full"></div>
              </div>
              
              {/* Hair */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full shadow-lg"></div>
              <div className="absolute -top-1 left-2 w-6 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full"></div>
              <div className="absolute -top-1 right-2 w-6 h-8 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full"></div>
              
              {/* Body */}
              <div className="w-12 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mt-2 shadow-lg relative">
                {/* Arms */}
                <div className="absolute -left-3 top-3 w-4 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full rotate-12 shadow-md"></div>
                <div className="absolute -right-3 top-3 w-4 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full -rotate-12 shadow-md"></div>
                
                {/* Dress Details */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white/30 rounded-full"></div>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white/20 rounded-full"></div>
              </div>

              {/* Legs */}
              <div className="flex justify-center space-x-1 mt-1">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full shadow-sm"></div>
                <div className="w-2 h-8 bg-gradient-to-b from-orange-300 to-orange-400 rounded-full shadow-sm"></div>
              </div>
            </motion.div>

            {/* Floating Books Around Girl */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`floating-${i}`}
                className={`absolute w-4 h-6 bg-gradient-to-br ${
                  ['from-red-400 to-red-600', 'from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-yellow-400 to-yellow-600'][i % 4]
                } rounded-sm shadow-lg`}
                style={{
                  left: `${30 + Math.cos(i * Math.PI / 4) * 25 + 25}%`,
                  top: `${40 + Math.sin(i * Math.PI / 4) * 20 + 20}%`,
                }}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                  x: [0, Math.cos(i * Math.PI / 4) * 5, 0],
                }}
                transition={{ 
                  duration: 3 + Math.random(), 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.3 
                }}
              >
                <div className="w-full h-0.5 bg-gradient-to-r from-white/60 to-white/30 rounded-t-sm"></div>
              </motion.div>
            ))}

            {/* Magical Sparkles Around Girl */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`magic-${i}`}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                style={{
                  left: `${25 + Math.random() * 50}%`,
                  top: `${25 + Math.random() * 50}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Glowing Orb */}
            <motion.div
              className="absolute top-1/3 right-8 w-6 h-6 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full shadow-lg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Quote */}
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <p className="text-lg text-purple-200 italic font-medium">
          "Every book is a portal to infinite possibilities"
        </p>
      </motion.div>

      {/* Ambient Light Effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-400/20 to-transparent rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};