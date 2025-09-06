import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  BookOpen, 
  Settings, 
  Bookmark, 
  Share2, 
  Volume2,
  Sun,
  Moon,
  Type,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react';
import { books } from '../data/books';

export const ReadingPage: React.FC = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Book not found</div>
      </div>
    );
  }

  const totalPages = book.pages;
  const progressPercentage = (currentPage / totalPages) * 100;

  // Sample book content
  const bookContent = `Chapter ${Math.ceil(currentPage / 20)}: The Adventure Continues

  The magical world unfolded before our protagonist as they stepped through the ancient doorway. The air shimmered with possibilities, and every breath carried the scent of adventure and mystery.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  The character's journey through this enchanted realm would test their courage, wisdom, and determination. Each step forward revealed new challenges and unexpected allies.

  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

  As the story unfolds, we discover the true power that lies within each of us - the power to change our destiny and shape the world around us through our choices and actions.`;

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900' 
        : 'bg-gradient-to-br from-amber-50 to-orange-50'
    }`}>
      
      {/* Reading Header */}
      <motion.div 
        className={`sticky top-0 z-20 backdrop-blur-sm border-b transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800/90 border-gray-700' 
            : 'bg-white/90 border-orange-200'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Left Controls */}
            <div className="flex items-center space-x-4">
              <Link to={`/book/${book.id}`}>
                <motion.button 
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-orange-100'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <h1 className="font-bold text-lg">{book.title}</h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  by {book.author}
                </p>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={() => setShowBookmarks(!showBookmarks)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-orange-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bookmark className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-orange-100'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-lg transition-colors ${
                  showSettings 
                    ? (isDarkMode ? 'bg-gray-700 text-white' : 'bg-orange-100 text-orange-600')
                    : (isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-orange-100')
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Settings className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className={`w-full h-1 rounded-full ${
              isDarkMode ? 'bg-gray-700' : 'bg-orange-200'
            }`}>
              <motion.div 
                className="h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                Page {currentPage} of {totalPages}
              </span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {Math.round(progressPercentage)}% complete
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Settings Panel */}
      {showSettings && (
        <motion.div 
          className={`fixed top-20 right-6 z-30 p-6 rounded-xl shadow-2xl border ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-orange-200'
          }`}
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={`font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Reading Settings
          </h3>
          
          <div className="space-y-4 w-64">
            {/* Font Size */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Font Size
              </label>
              <div className="flex items-center space-x-3">
                <Type className="w-4 h-4" />
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="flex-1"
                />
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {fontSize}px
                </span>
              </div>
            </div>

            {/* Theme Toggle */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Theme
              </label>
              <div className="flex items-center space-x-3">
                <Sun className="w-4 h-4" />
                <motion.button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
                    animate={{ x: isDarkMode ? 24 : 4 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
                <Moon className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Reading Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <motion.div 
          className={`rounded-xl p-8 shadow-lg ${
            isDarkMode 
              ? 'bg-gray-800 text-gray-100' 
              : 'bg-white text-gray-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: `${fontSize}px` }}
        >
          <div className="prose prose-lg max-w-none leading-relaxed">
            {bookContent.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {paragraph.trim()}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div 
          className="flex items-center justify-between mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
              currentPage === 1
                ? (isDarkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400')
                : (isDarkMode 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  )
            }`}
            whileHover={currentPage > 1 ? { scale: 1.05 } : {}}
            whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </motion.button>

          <div className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <div className="text-sm">Chapter {Math.ceil(currentPage / 20)}</div>
            <div className="text-xs">Page {currentPage}</div>
          </div>

          <motion.button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
              currentPage === totalPages
                ? (isDarkMode ? 'bg-gray-700 text-gray-500' : 'bg-gray-200 text-gray-400')
                : (isDarkMode 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  )
            }`}
            whileHover={currentPage < totalPages ? { scale: 1.05 } : {}}
            whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};