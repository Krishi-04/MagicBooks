import React from 'react';

export const MagicalGirl: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Character Illustration */}
      <div className="relative w-96 h-[500px] mx-auto">
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
              <div
                key={i}
                className={`absolute w-2 h-12 bg-gradient-to-b ${
                  ['from-red-500 to-red-700', 'from-blue-500 to-blue-700', 'from-green-500 to-green-700', 'from-yellow-500 to-yellow-700'][i % 4]
                } rounded-sm shadow-sm`}
                style={{
                  left: `${20 + (i % 6) * 10}%`,
                  top: i < 6 ? '24px' : '48px',
                }}
              />
            ))}
            
            {/* Girl Figure */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
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
            </div>

            {/* Floating Books Around Girl */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`floating-${i}`}
                className={`absolute w-4 h-6 bg-gradient-to-br ${
                  ['from-red-400 to-red-600', 'from-blue-400 to-blue-600', 'from-green-400 to-green-600', 'from-yellow-400 to-yellow-600'][i % 4]
                } rounded-sm shadow-lg animate-pulse`}
                style={{
                  left: `${30 + Math.cos(i * Math.PI / 4) * 25 + 25}%`,
                  top: `${40 + Math.sin(i * Math.PI / 4) * 20 + 20}%`,
                }}
              >
                <div className="w-full h-0.5 bg-gradient-to-r from-white/60 to-white/30 rounded-t-sm"></div>
              </div>
            ))}

            {/* Magical Sparkles Around Girl */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`magic-${i}`}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
                style={{
                  left: `${25 + Math.random() * 50}%`,
                  top: `${25 + Math.random() * 50}%`,
                }}
              />
            ))}

            {/* Glowing Orb */}
            <div className="absolute top-1/3 right-8 w-6 h-6 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full shadow-lg animate-pulse">
              <div className="w-full h-full bg-gradient-to-br from-white/40 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quote */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-xs">
        <p className="text-lg text-purple-200 italic font-medium">
          "Every book is a portal to infinite possibilities"
        </p>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-400/20 to-transparent rounded-full animate-pulse" />
    </div>
  );
};