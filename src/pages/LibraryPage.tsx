import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Star, TrendingUp, Clock, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BookCard } from '../components/BookCard';
import { books } from '../data/books';

export const LibraryPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', 'fiction', 'fantasy', 'mystery', 'romance', 'sci-fi', 'non-fiction'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBook = books[0];

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
          <h1 className="text-4xl font-bold text-white mb-4">Happy reading, Krishi</h1>
          <p className="text-purple-200 text-lg">Wow! You've dived deep into the wizarding world's secrets. Have Harry's parents died yet? Oops, looks like you're not there yet. Get reading now!</p>
        </motion.div>

        {/* Featured Book Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              
              {/* Book Cover */}
              <motion.div 
                className="w-40 h-56 rounded-xl shadow-2xl overflow-hidden flex-shrink-0"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={featuredBook.coverImage} 
                  alt={featuredBook.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Book Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">{featuredBook.title}</h3>
                <p className="text-xl text-purple-200 mb-4">by {featuredBook.author}</p>
                <p className="text-purple-200 mb-6 leading-relaxed">{featuredBook.description}</p>
                
                <div className="flex items-center justify-center lg:justify-start gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-white ml-2 font-medium">{featuredBook.rating}/5</span>
                  </div>
                  <span className="text-purple-300">{featuredBook.currentPage} / {featuredBook.pages} pages</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-purple-900/50 rounded-full h-3 mb-6">
                  <motion.div 
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(featuredBook.currentPage / featuredBook.pages) * 100}%` }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
                
                <motion.button 
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={`/read/${featuredBook.id}`}>
                    Continue Reading →
                  </Link>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search books, authors, editions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
            />
          </div>

          {/* Filters and View Options */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Filter:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/10 text-purple-200 hover:bg-white/20'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* View Toggle */}
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
          </div>
        </motion.div>

        {/* Popular Now Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Popular Now</h2>
            </div>
            <button className="text-purple-300 hover:text-white transition-colors">See all →</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {books.slice(0, 6).map((book, index) => (
              <motion.div
                key={book.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Link to={`/book/${book.id}`}>
                  <div className="aspect-[3/4] rounded-lg shadow-lg mb-3 overflow-hidden">
                    <img 
                      src={book.coverImage} 
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors line-clamp-2">{book.title}</h4>
                  <p className="text-purple-300 text-xs">{book.author}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* New Series Collection */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">New Series Collection</h2>
            <button className="text-purple-300 hover:text-white transition-colors">See all →</button>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-28 rounded-lg shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg" 
                  alt="Series Cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">A Legend of Ice and Fire: The Ice Horse</h3>
                <p className="text-purple-200 text-sm mb-2">8 chapters each vol</p>
                <p className="text-purple-300 text-sm mb-4">2 vol</p>
                <motion.button 
                  className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={`/book/4`}>
                    Start Series
                  </Link>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Books Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Books' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Books`}
            </h2>
            <span className="text-purple-300">{filteredBooks.length} books found</span>
          </div>

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
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <BookCard book={book} viewMode={viewMode} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};