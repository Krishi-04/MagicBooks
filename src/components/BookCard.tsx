import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, BookOpen, Clock } from 'lucide-react';
import { Book } from '../types/Book';

interface BookCardProps {
  book: Book;
  viewMode: 'grid' | 'list';
}

export const BookCard: React.FC<BookCardProps> = ({ book, viewMode }) => {
  const [isInTBR, setIsInTBR] = useState(false);

  if (viewMode === 'list') {
    return (
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:bg-white/15 transition-all duration-300"
        whileHover={{ scale: 1.01, y: -2 }}
      >
        <div className="flex gap-6">
          <Link to={`/book/${book.id}`}>
            <motion.div 
              className="w-24 h-32 rounded-lg shadow-lg flex-shrink-0 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Link>
          
          <div className="flex-1">
            <Link to={`/book/${book.id}`}>
              <h3 className="text-xl font-bold text-white hover:text-purple-300 transition-colors mb-2">{book.title}</h3>
            </Link>
            <p className="text-purple-200 mb-3">{book.author}</p>
            <p className="text-purple-300 text-sm mb-4 line-clamp-2">{book.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-4 h-4 ${star <= book.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
                    />
                  ))}
                  <span className="text-purple-200 text-sm ml-2">{book.rating}</span>
                </div>
                <span className="text-purple-300 text-sm">{book.pages} pages</span>
              </div>
              
              <motion.button
                onClick={() => setIsInTBR(!isInTBR)}
                className={`p-2 transition-colors ${isInTBR ? 'text-red-400' : 'text-purple-300 hover:text-red-400'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart className={`w-5 h-5 ${isInTBR ? 'fill-current' : ''}`} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:bg-white/15 transition-all duration-300 h-full">
        
        {/* Book Cover */}
        <Link to={`/book/${book.id}`}>
          <motion.div 
            className="w-full aspect-[3/4] rounded-lg shadow-lg mb-4 overflow-hidden relative"
            whileHover={{ rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={book.coverImage} 
              alt={book.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-2 left-2 right-2">
              <h4 className="text-white font-bold text-sm leading-tight">{book.title}</h4>
              <p className="text-white/80 text-xs">{book.author}</p>
            </div>
          </motion.div>
        </Link>

        {/* Book Info */}
        <div className="space-y-2">
          <Link to={`/book/${book.id}`}>
            <h3 className="text-white font-bold group-hover:text-purple-300 transition-colors line-clamp-2">
              {book.title}
            </h3>
          </Link>
          <p className="text-purple-200 text-sm">{book.author}</p>
          
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsInTBR(!isInTBR);
              }}
              className={`p-1 transition-colors ${isInTBR ? 'text-red-400' : 'text-purple-300 hover:text-red-400'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Heart className={`w-4 h-4 ${isInTBR ? 'fill-current' : ''}`} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};