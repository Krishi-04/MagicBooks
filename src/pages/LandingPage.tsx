import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Users, Sparkles, ArrowRight } from 'lucide-react';
import { FloatingBooks } from '../components/FloatingBooks';
import { MagicalGirl } from '../components/MagicalGirl';

export const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/481516/pexels-photo-481516.jpeg')] opacity-5 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
      </div>

      {/* Floating Books */}
      <FloatingBooks />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">Magic Books</span>
          </motion.div>
          
          <motion.div 
            className="hidden md:flex space-x-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#features" className="hover:text-purple-300 transition-colors">Features</a>
            <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact</Link>
            <Link to="/auth" className="hover:text-purple-300 transition-colors">Sign In</Link>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Magic 
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Books
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-xl text-purple-200 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Discover enchanting stories, explore magical worlds, and embark on extraordinary adventures through our curated collection of books.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link to="/library">
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Reading</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link to="/auth">
                <motion.button
                  className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Community
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-purple-300">Books</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-purple-300">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25K+</div>
                <div className="text-purple-300">Readers</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Magical Girl */}
          <div className="relative h-[600px] flex items-center justify-center">
            <MagicalGirl />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div 
        id="features"
        className="relative z-10 py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            Why Choose Magic Books?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Curated Collection</h3>
              <p className="text-purple-200 leading-relaxed">Handpicked books across all genres, from fantasy to mystery, romance to sci-fi. Every book is carefully selected for quality.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Smart Recommendations</h3>
              <p className="text-purple-200 leading-relaxed">Get personalized book suggestions based on your reading history, preferences, and community ratings.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Reader Community</h3>
              <p className="text-purple-200 leading-relaxed">Connect with fellow book lovers, share reviews, join discussions, and discover new favorites together.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="relative z-10 py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p 
            className="text-xl text-purple-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.7 }}
          >
            Join thousands of readers who have already discovered their next favorite book
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.9 }}
          >
            <Link to="/auth">
              <motion.button
                className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};