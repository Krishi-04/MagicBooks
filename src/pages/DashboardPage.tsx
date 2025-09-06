import React from 'react';
import { motion } from 'framer-motion';
import { Book, Clock, TrendingUp, Calendar, Users, Bookmark, Target, Award, Star } from 'lucide-react';
import { ReadingProgress } from '../components/ReadingProgress';
import { books } from '../data/books';

export const DashboardPage: React.FC = () => {
  const currentlyReading = books.slice(0, 3);
  const recentlyFinished = books.slice(3, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Welcome Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Happy reading, Krishi</h1>
          <p className="text-purple-200 text-lg">Welcome back! Ready to dive into new adventures?</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Reading Stats Cards */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Book className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white">24</div>
                <div className="text-purple-300 text-sm">Books Read</div>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Clock className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white">127h</div>
                <div className="text-purple-300 text-sm">Reading Time</div>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <TrendingUp className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-purple-300 text-sm">Day Streak</div>
              </motion.div>

              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Target className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-2xl font-bold text-white">48%</div>
                <div className="text-purple-300 text-sm">Goal Progress</div>
              </motion.div>
            </motion.div>
            
            {/* Currently Reading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Continue Reading</h2>
              <div className="space-y-4">
                {currentlyReading.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <ReadingProgress book={book} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recently Finished */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Recently Finished</h2>
                <button className="text-purple-300 hover:text-white transition-colors">See all →</button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {recentlyFinished.map((book, index) => (
                  <motion.div
                    key={book.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:bg-white/15 transition-all duration-300">
                      <div className="aspect-[3/4] rounded-lg shadow-lg mb-3 overflow-hidden">
                        <img 
                          src={book.coverImage} 
                          alt={book.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors line-clamp-2">{book.title}</h4>
                      <p className="text-purple-300 text-xs mb-2">{book.author}</p>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Reading Goal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">2025 Reading Goal</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-white">24 / 50</div>
                  <div className="text-purple-300">Books Read</div>
                </div>
                
                <div className="w-full bg-purple-900/50 rounded-full h-3 mb-4">
                  <motion.div 
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '48%' }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </div>
                
                <p className="text-purple-200 text-sm text-center">
                  You're 48% of the way to your goal!
                </p>
              </div>
            </motion.div>
            
            {/* Schedule Reading */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Schedule Reading</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="text-center text-purple-300 text-xs font-medium">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 7 }, (_, i) => (
                    <motion.button
                      key={i}
                      className={`aspect-square rounded-lg text-sm font-medium transition-all ${
                        i === 3 ? 'bg-purple-500 text-white' : 'text-purple-200 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {11 + i}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Reader Friends */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Reader Friends</h3>
                <button className="text-purple-300 hover:text-white transition-colors text-sm">See all →</button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-500/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Roberto Jordan</h4>
                    <p className="text-purple-200 text-sm mb-1">What a delightful and magical chapter 4! It really made me transport readers to the wizarding world.</p>
                    <p className="text-purple-300 text-xs">Chapter Five: Diagon Alley • 3 min ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-purple-500/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Anna Henry</h4>
                    <p className="text-purple-200 text-sm mb-1">I finished reading this chapter last night and absolutely loved it!</p>
                    <p className="text-purple-300 text-xs">The Midnight Library • 1 hour ago</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Recent Achievements</h3>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg border border-yellow-500/20"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Award className="w-8 h-8 text-yellow-400" />
                  <div>
                    <h4 className="text-white font-medium">Bookworm</h4>
                    <p className="text-yellow-300 text-sm">Read 25 books this year</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg border border-purple-500/20"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Users className="w-8 h-8 text-purple-400" />
                  <div>
                    <h4 className="text-white font-medium">Social Reader</h4>
                    <p className="text-purple-300 text-sm">Wrote 10 helpful reviews</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};