import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Star, Heart, ArrowLeft, Sparkles, Target, Award } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Curated Collection',
      description: 'Over 10,000 carefully selected books across all genres, from bestsellers to hidden gems.',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with fellow readers, share reviews, and discover books through community recommendations.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Star,
      title: 'Smart Recommendations',
      description: 'AI-powered suggestions based on your reading history, preferences, and community ratings.',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: Heart,
      title: 'Personal Library',
      description: 'Track your reading progress, maintain your TBR list, and set reading goals.',
      color: 'from-red-400 to-orange-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Books Available' },
    { number: '25K+', label: 'Active Readers' },
    { number: '100K+', label: 'Reviews Written' },
    { number: '500K+', label: 'Books Read' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      description: 'Passionate reader with 15+ years in tech, dedicated to connecting readers with their perfect books.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Curation',
      description: 'Former librarian and book critic, ensures our collection maintains the highest quality standards.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      description: 'Builds and nurtures our reading community, fostering meaningful connections between readers.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
    }
  ];

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
          <Link to="/">
            <motion.button 
              className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <BookOpen className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Magic Books
            </h1>
            <Sparkles className="w-12 h-12 text-purple-400" />
          </div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            We believe that every reader deserves to find their perfect book. Magic Books is more than just a recommendation platform – it's a community where book lovers discover, share, and celebrate the magic of reading.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-purple-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-purple-200 max-w-4xl mx-auto leading-relaxed">
                To create a magical space where readers can discover their next favorite book, connect with like-minded book lovers, and track their reading journey. We're passionate about making reading more social, personalized, and enjoyable for everyone.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Makes Us Special</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-purple-200 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-300 font-medium mb-3">{member.role}</p>
                <p className="text-purple-200 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <Award className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Reading Community</h2>
            <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
              Ready to discover your next favorite book? Join thousands of readers who have already found their literary home with Magic Books.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                </motion.button>
              </Link>
              <Link to="/library">
                <motion.button
                  className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Books
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};