import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Home, Search, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        
        {/* Animated 404 */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            404
          </div>
          <motion.div
            className="flex justify-center space-x-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Floating Books Animation */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-8 h-12 bg-gradient-to-br ${
                  i === 1 ? 'from-red-400 to-pink-500' :
                  i === 2 ? 'from-blue-400 to-purple-500' :
                  'from-green-400 to-teal-500'
                } rounded-sm shadow-lg`}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              >
                <div className="w-full h-0.5 bg-white/60 rounded-t-sm"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-purple-200 mb-6 leading-relaxed">
            It looks like the page you're looking for has wandered off into another story. 
            Don't worry, even the best books have plot twists!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link to="/">
            <motion.button
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </motion.button>
          </Link>
          
          <Link to="/library">
            <motion.button
              className="flex items-center space-x-2 px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-5 h-5" />
              <span>Browse Books</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Search Suggestion */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Search className="w-6 h-6 text-purple-400" />
            <h3 className="text-white font-semibold">Looking for something specific?</h3>
          </div>
          <p className="text-purple-200 mb-4">
            Try searching for books, authors, or genres in our magical library
          </p>
          <Link to="/search">
            <motion.button
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search Books
            </motion.button>
          </Link>
        </motion.div>

        {/* Popular Pages */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h4 className="text-white font-semibold mb-4">Popular Pages</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/dashboard" className="text-purple-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link to="/favorites" className="text-purple-300 hover:text-white transition-colors">
              My TBR
            </Link>
            <Link to="/profile" className="text-purple-300 hover:text-white transition-colors">
              Profile
            </Link>
            <Link to="/about" className="text-purple-300 hover:text-white transition-colors">
              About
            </Link>
          </div>
        </motion.div>

        {/* Magical Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
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
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};