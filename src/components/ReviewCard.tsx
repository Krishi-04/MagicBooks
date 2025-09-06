import React from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp } from 'lucide-react';
import { Review } from '../types/Review';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
          {review.userName.charAt(0)}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-white font-semibold">{review.userName}</h4>
            <span className="text-purple-300 text-sm">{review.date}</span>
          </div>
          
          <div className="flex items-center space-x-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
              />
            ))}
            <span className="text-purple-200 text-sm ml-2">{review.rating}/5</span>
          </div>
          
          <p className="text-purple-200 leading-relaxed mb-4">{review.content}</p>
          
          <motion.button 
            className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ThumbsUp className="w-4 h-4" />
            <span className="text-sm">Helpful ({review.helpfulCount})</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};