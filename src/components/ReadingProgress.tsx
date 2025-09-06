import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';
import { Book } from '../types/Book';

interface ReadingProgressProps {
  book: Book;
}

export const ReadingProgress: React.FC<ReadingProgressProps> = ({ book }) => {
  const progressPercentage = (book.currentPage / book.pages) * 100;

  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:bg-white/15 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <div className="flex gap-6">
        <Link to={`/book/${book.id}`}>
          <motion.div 
            className="w-24 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-lg border border-white/30 p-3 flex flex-col justify-between">
              <div>
                <div className="w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-2"></div>
                <h4 className="text-white font-bold text-xs leading-tight">{book.title}</h4>
              </div>
              <div className="text-white/60 text-xs">{book.pages}p</div>
            </div>
          </motion.div>
        </Link>
        
        <div className="flex-1">
          <Link to={`/book/${book.id}`}>
            <h3 className="text-xl font-bold text-white hover:text-purple-300 transition-colors mb-2">{book.title}</h3>
          </Link>
          <p className="text-purple-200 mb-4">{book.author}</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-purple-300">{book.currentPage} / {book.pages} pages</span>
              <span className="text-purple-300">{Math.round(progressPercentage)}% complete</span>
            </div>
            
            <div className="w-full bg-purple-900/50 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-purple-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>Est. 2h 30m remaining</span>
              </div>
              
              <motion.button
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/read/${book.id}`}>
                  Continue Reading
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};