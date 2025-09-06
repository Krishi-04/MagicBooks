import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Heart, 
  Share2, 
  BookOpen, 
  Clock, 
  Users, 
  ArrowLeft,
  MessageCircle,
  ThumbsUp,
  Play
} from 'lucide-react';
import { books } from '../data/books';
import { ReviewCard } from '../components/ReviewCard';

export const BookDetailPage: React.FC = () => {
  const { id } = useParams();
  const [isInTBR, setIsInTBR] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState('');

  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Book not found</div>
      </div>
    );
  }

  const handleSubmitReview = () => {
    if (reviewText.trim() && userRating > 0) {
      // Here you would typically submit to your backend
      setShowReviewForm(false);
      setReviewText('');
      setUserRating(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link to="/library">
            <motion.button 
              className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Library</span>
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Book Cover and Actions */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-8">
              <motion.div 
                className="w-full max-w-sm mx-auto rounded-xl shadow-2xl overflow-hidden mb-6"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={book.coverImage} 
                  alt={book.title}
                  className="w-full aspect-[3/4] object-cover"
                />
              </motion.div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={`/read/${book.id}`} className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Start Reading</span>
                  </Link>
                </motion.button>
                
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    onClick={() => setIsInTBR(!isInTBR)}
                    className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isInTBR 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Heart className={`w-4 h-4 ${isInTBR ? 'fill-current' : ''}`} />
                    <span>{isInTBR ? 'In TBR' : 'Add TBR'}</span>
                  </motion.button>
                  
                  <motion.button
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </motion.button>
                </div>

                {/* Book Stats */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <h4 className="text-white font-semibold mb-3">Book Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-300">Pages:</span>
                      <span className="text-white">{book.pages}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Published:</span>
                      <span className="text-white">{book.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Readers:</span>
                      <span className="text-white">{book.readCount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-300">Category:</span>
                      <span className="text-white capitalize">{book.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Book Details */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Title and Rating */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">{book.title}</h1>
              <p className="text-2xl text-purple-300 mb-6">by {book.author}</p>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`w-6 h-6 ${star <= book.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} 
                    />
                  ))}
                  <span className="text-white font-medium ml-2">{book.rating}/5</span>
                </div>
                <span className="text-purple-300">({book.reviewCount.toLocaleString()} reviews)</span>
              </div>

              <div className="flex flex-wrap gap-6 text-purple-200">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{book.pages} pages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Published {book.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{book.readCount.toLocaleString()} readers</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">About this book</h3>
              <p className="text-purple-200 leading-relaxed text-lg">{book.description}</p>
            </div>

            {/* Your Rating */}
            <motion.div 
              className="mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Rate this book</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      onClick={() => setUserRating(star)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Star 
                        className={`w-8 h-8 cursor-pointer transition-colors ${
                          star <= userRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400 hover:text-yellow-300'
                        }`} 
                      />
                    </motion.button>
                  ))}
                </div>
                {userRating > 0 && (
                  <span className="text-white">Your rating: {userRating}/5</span>
                )}
              </div>
              
              <motion.button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Write a Review</span>
              </motion.button>

              {showReviewForm && (
                <motion.div
                  className="mt-6 space-y-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your thoughts about this book..."
                    className="w-full p-4 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
                    rows={4}
                  />
                  <div className="flex gap-3">
                    <motion.button
                      onClick={handleSubmitReview}
                      className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Submit Review
                    </motion.button>
                    <motion.button
                      onClick={() => setShowReviewForm(false)}
                      className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Reviews Section */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Reader Reviews</h3>
                <span className="text-purple-300">{book.reviews.length} reviews</span>
              </div>
              
              {book.reviews.length === 0 ? (
                <div className="text-center py-12 bg-white/5 rounded-xl border border-purple-500/20">
                  <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">No reviews yet</h4>
                  <p className="text-purple-200">Be the first to share your thoughts about this book!</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {book.reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    >
                      <ReviewCard review={review} />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Related Books */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">You might also like</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {books.filter(b => b.id !== book.id && b.category === book.category).slice(0, 4).map((relatedBook, index) => (
                  <motion.div
                    key={relatedBook.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  >
                    <Link to={`/book/${relatedBook.id}`}>
                      <motion.div 
                        className="group"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <div className="aspect-[3/4] rounded-lg shadow-lg mb-3 overflow-hidden">
                          <img 
                            src={relatedBook.coverImage} 
                            alt={relatedBook.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h4 className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors line-clamp-2">{relatedBook.title}</h4>
                        <p className="text-purple-300 text-xs">{relatedBook.author}</p>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};