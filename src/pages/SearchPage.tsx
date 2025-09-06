import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Clock, Star } from 'lucide-react';
import { BookCard } from '../components/BookCard';
import { books } from '../data/books';

export const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  const genres = ['all', 'fantasy', 'fiction', 'mystery', 'romance', 'sci-fi', 'non-fiction'];
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const trendingSearches = [
    'Harry Potter', 'Game of Thrones', 'Lord of the Rings', 
    'Dune', 'The Witcher', 'Brandon Sanderson'
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || book.category === selectedGenre;
    return matchesSearch && matchesGenre;
  });

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
          <h1 className="text-4xl font-bold text-white mb-4">Search Books</h1>
          <p className="text-purple-200 text-lg">Find your next great read from our magical collection</p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Search Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="sticky top-8 space-y-6">
              
              {/* Search Input */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-white font-bold mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search books, authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center space-x-2 mb-4">
                  <Filter className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-bold">Filters</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Genre</label>
                    <select
                      value={selectedGenre}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400"
                    >
                      {genres.map(genre => (
                        <option key={genre} value={genre} className="bg-purple-900">
                          {genre.charAt(0).toUpperCase() + genre.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value} className="bg-purple-900">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Trending Searches */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <h3 className="text-white font-bold">Trending</h3>
                </div>
                
                <div className="space-y-2">
                  {trendingSearches.map((search, index) => (
                    <motion.button
                      key={search}
                      onClick={() => setSearchQuery(search)}
                      className="block w-full text-left px-3 py-2 text-purple-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search Results */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {searchQuery ? `Results for "${searchQuery}"` : 'All Books'}
              </h2>
              <span className="text-purple-300">{filteredBooks.length} books found</span>
            </div>

            {/* No Results */}
            {filteredBooks.length === 0 && searchQuery && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Search className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No books found</h3>
                <p className="text-purple-200 mb-6">Try adjusting your search terms or filters</p>
                <motion.button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedGenre('all');
                  }}
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl text-white font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}

            {/* Search Results Grid */}
            {filteredBooks.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <BookCard book={book} viewMode="grid" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Popular Authors Section */}
            {!searchQuery && (
              <motion.div 
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Popular Authors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'J.K. Rowling', books: '7 books', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
                    { name: 'George R.R. Martin', books: '5 books', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
                    { name: 'Stephen King', books: '12 books', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg' },
                    { name: 'Agatha Christie', books: '8 books', image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' }
                  ].map((author, index) => (
                    <motion.div
                      key={author.name}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-3 overflow-hidden">
                        <img 
                          src={author.image} 
                          alt={author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-white font-medium text-center mb-1">{author.name}</h4>
                      <p className="text-purple-300 text-sm text-center">{author.books}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};