import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Clock, Filter, Grid, List, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookCard } from '../components/BookCard';
import { books } from '../data/books';

export const FavoritesPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterBy, setFilterBy] = useState('all');

  // Simulate user's TBR list (first 6 books)
  const tbrBooks = books.slice(0, 6);
  const readBooks = books.slice(6, 10);

  const filterOptions = [
    { value: 'all', label: 'All Books' },
    { value: 'tbr', label: 'To Be Read' },
    { value: 'read', label: 'Already Read' },
    { value: 'reading', label: 'Currently Reading' }
  ];

  const getFilteredBooks = () => {
    switch (filterBy) {
      case 'tbr':
        return tbrBooks;
      case 'read':
        return readBooks;
      case 'reading':
        return books.slice(0, 3);
      default:
        return [...tbrBooks, ...readBooks];
    }
  };

  const filteredBooks = getFilteredBooks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="w-8 h-8 text-red-400" />
            <h1 className="text-4xl font-bold text-white">My Library</h1>
          </div>
          <p className="text-purple-200 text-lg">Your personal collection of books to read and favorites</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <Heart className="w-8 h-8 text-red-400 mb-3" />
            <div className="text-2xl font-bold text-white">{tbrBooks.length}</div>
            <div className="text-red-300">To Be Read</div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <BookOpen className="w-8 h-8 text-green-400 mb-3" />
            <div className="text-2xl font-bold text-white">{readBooks.length}</div>
            <div className="text-green-300">Books Read</div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <Clock className="w-8 h-8 text-blue-400 mb-3" />
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-blue-300">Currently Reading</div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <Star className="w-8 h-8 text-yellow-400 mb-3" />
            <div className="text-2xl font-bold text-white">4.2</div>
            <div className="text-yellow-300">Avg Rating</div>
          </motion.div>
        </motion.div>

        {/* Filters and View Options */}
        <motion.div 
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => setFilterBy(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filterBy === option.value
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center bg-white/10 rounded-lg p-1">
            <motion.button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-500' : 'hover:bg-white/10'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Grid className="w-4 h-4 text-white" />
            </motion.button>
            <motion.button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-500' : 'hover:bg-white/10'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <List className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </motion.div>

        {/* Books Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No books in this category</h3>
              <p className="text-purple-200 mb-6">Start building your library by adding books to your TBR list</p>
              <Link to="/library">
                <motion.button
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl text-white font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Books
                </motion.button>
              </Link>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'
                : 'space-y-4'
            }>
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <BookCard book={book} viewMode={viewMode} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Reading Goals Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Reading Goals</h3>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">2025 Reading Challenge</h4>
              <span className="text-purple-300">24 / 50 books</span>
            </div>
            
            <div className="w-full bg-purple-900/50 rounded-full h-3 mb-4">
              <motion.div 
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '48%' }}
                transition={{ duration: 1.5, delay: 1 }}
              />
            </div>
            
            <p className="text-purple-200 text-sm">
              You're 48% of the way to your goal! Keep up the great reading momentum.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};