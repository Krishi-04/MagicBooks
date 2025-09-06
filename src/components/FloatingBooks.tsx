import React from 'react';
import { motion } from 'framer-motion';

export const FloatingBooks: React.FC = () => {
  const books = [
    { id: 1, rotation: 15, x: '10%', y: '20%', delay: 0, color: 'from-red-400 to-pink-500' },
    { id: 2, rotation: -10, x: '80%', y: '15%', delay: 0.5, color: 'from-blue-400 to-purple-500' },
    { id: 3, rotation: 25, x: '15%', y: '70%', delay: 1, color: 'from-green-400 to-teal-500' },
    { id: 4, rotation: -20, x: '85%', y: '60%', delay: 1.5, color: 'from-yellow-400 to-orange-500' },
    { id: 5, rotation: 10, x: '5%', y: '45%', delay: 2, color: 'from-purple-400 to-indigo-500' },
    { id: 6, rotation: -15, x: '90%', y: '35%', delay: 2.5, color: 'from-pink-400 to-rose-500' },
    { id: 7, rotation: 20, x: '25%', y: '10%', delay: 3, color: 'from-cyan-400 to-blue-500' },
    { id: 8, rotation: -25, x: '75%', y: '80%', delay: 3.5, color: 'from-emerald-400 to-green-500' },
  ];

  return (
    <>
      {books.map((book) => (
        <motion.div
          key={book.id}
          className="absolute w-12 h-16 md:w-16 md:h-20 z-5"
          style={{
            left: book.x,
            top: book.y,
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            rotate: book.rotation,
          }}
          animate={{ 
            opacity: 0.8,
            scale: 1,
            rotate: book.rotation,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            delay: book.delay,
            y: {
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <div className={`w-full h-full bg-gradient-to-br ${book.color} rounded-sm shadow-2xl`}>
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-sm border border-white/30 p-1">
              <div className="w-full h-1 bg-gradient-to-r from-white/60 to-white/30 rounded-t-sm mb-1"></div>
              <div className="text-white text-xs font-bold leading-tight opacity-90">
                Book
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Magical Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Sparkles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};