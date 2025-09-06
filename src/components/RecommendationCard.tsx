import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Plus } from 'lucide-react';
import { Book } from '../types/Book';

interface RecommendationCardProps {
  book: Book;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ book }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:bg-white/15 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Link to={`/book/${book.id}`} className="block">
        <motion.div 
          className="w-full aspect-[3/4] bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg shadow-lg mb-4"
          whileHover={{ rotateY: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-lg border border-white/30 p-3 flex flex-col justify-between">
            <div>
              <div className="w-full h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-2"></div>
              <h3 className="text-white font-bold text-sm leading-tight">{book.title}</h3>
            </div>
          </div>
        </motion.div>

        <h3 className="text-white font-bold mb-1 hover:text-purple-300 transition-colors">
          {book.title}
        </h3>
        <p className="text-purple-200 text-sm mb-2">{book.author}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`w-3 h-3 ${star <= book.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
              />
            ))}
            <span className="text-purple-200 text-xs ml-1">{book.rating}</span>
          </div>
          
          <motion.button
            className="p-1 text-purple-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};