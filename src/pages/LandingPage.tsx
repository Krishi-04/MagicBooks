import React from 'react';
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
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">Magic Books</span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-white">
            <Link to="/library" className="hover:text-purple-300 transition-colors">Browse Books</Link>
            <Link to="/search" className="hover:text-purple-300 transition-colors">Search</Link>
            <a href="#features" className="hover:text-purple-300 transition-colors">Features</a>
            <Link to="/about" className="hover:text-purple-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-purple-300 transition-colors">Contact</Link>
            <Link to="/auth" className="hover:text-purple-300 transition-colors">Sign In</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <header className="sr-only">
          <h1>Magic Books - Your Ultimate Book Discovery Platform</h1>
        </header>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight" role="banner">
                  Magic 
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Books
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-purple-200 leading-relaxed max-w-lg">
                Discover enchanting stories, explore magical worlds, and embark on extraordinary adventures through our curated collection of books.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/library">
                <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 hover:scale-105 hover:-translate-y-0.5">
                  <span>Start Reading</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <Link to="/auth">
                <button className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                  Join Community
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
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
            </div>
          </motion.div>

          {/* Right Content - Magical Girl */}
          <div className="relative h-[600px] flex items-center justify-center">
            <MagicalGirl />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section 
        id="features"
        className="relative z-10 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Magic Books?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
              <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                <Link to="/library" className="hover:text-purple-300 transition-colors">
                  Curated Collection
                </Link>
              </h3>
              <p className="text-purple-200 leading-relaxed">Handpicked books across all genres, from fantasy to mystery, romance to sci-fi. Every book is carefully selected for quality.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                <Link to="/dashboard" className="hover:text-purple-300 transition-colors">
                  Smart Recommendations
                </Link>
              </h3>
              <p className="text-purple-200 leading-relaxed">Get personalized book suggestions based on your reading history, preferences, and community ratings.</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
              <Users className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                <Link to="/profile" className="hover:text-purple-300 transition-colors">
                  Reader Community
                </Link>
              </h3>
              <p className="text-purple-200 leading-relaxed">Connect with fellow book lovers, share reviews, join discussions, and discover new favorites together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-purple-200 mb-8">
            Join thousands of readers who have already discovered their next favorite book
          </p>
          <div>
            <Link to="/auth">
              <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:scale-105 hover:-translate-y-1">
                Get Started Free
              </button>
            </Link>
          </div>
          
          {/* Additional Navigation Links */}
          <nav className="mt-12" aria-label="Quick navigation">
            <div className="flex flex-wrap justify-center gap-6 text-purple-300">
              <Link to="/library" className="hover:text-white transition-colors underline">
                Browse Our Library
              </Link>
              <Link to="/search" className="hover:text-white transition-colors underline">
                Search Books
              </Link>
              <Link to="/favorites" className="hover:text-white transition-colors underline">
                Create Your TBR List
              </Link>
              <Link to="/dashboard" className="hover:text-white transition-colors underline">
                Track Your Reading
              </Link>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};