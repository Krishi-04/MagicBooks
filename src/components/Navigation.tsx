import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Search, Heart, User, Home, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/library', icon: BookOpen, label: 'Library' },
    { path: '/search', icon: Search, label: 'Search' },
    { path: '/favorites', icon: Heart, label: 'TBR' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-900/95 to-blue-900/95 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Magic Books
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link key={path} to={path}>
                <motion.div 
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === path 
                      ? 'bg-purple-500/30 text-purple-300 border border-purple-500/50' 
                      : 'text-white hover:text-purple-300 hover:bg-white/10'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{label}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* User Avatar */}
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <User className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};