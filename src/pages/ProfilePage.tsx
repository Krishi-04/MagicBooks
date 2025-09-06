import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Calendar, 
  BookOpen, 
  Star, 
  Trophy, 
  Settings,
  Camera,
  Edit3,
  Save,
  X
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Krishi Jain',
    email: 'krishi.jain@email.com',
    bio: 'Passionate reader who loves fantasy, mystery, and sci-fi novels. Always looking for the next great adventure in books!',
    joinDate: 'January 2023',
    location: 'San Francisco, CA'
  });

  const [editData, setEditData] = useState(profileData);

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const achievements = [
    { title: 'Bookworm', description: 'Read 50 books', icon: BookOpen, color: 'from-green-400 to-emerald-500' },
    { title: 'Reviewer', description: 'Wrote 25 reviews', icon: Star, color: 'from-yellow-400 to-orange-500' },
    { title: 'Explorer', description: 'Read 10 genres', icon: Trophy, color: 'from-purple-400 to-pink-500' },
  ];

  const readingStats = [
    { label: 'Books Read', value: '127', icon: BookOpen },
    { label: 'Pages Read', value: '45,230', icon: Calendar },
    { label: 'Reading Streak', value: '23 days', icon: Trophy },
    { label: 'Avg Rating', value: '4.2', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Profile Header */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            {/* Profile Picture */}
            <div className="relative">
              <motion.div 
                className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {profileData.name.split(' ').map(n => n[0]).join('')}
              </motion.div>
              <motion.button 
                className="absolute bottom-2 right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Camera className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({...editData, name: e.target.value})}
                      className="text-3xl font-bold text-white bg-white/10 border border-purple-500/30 rounded-lg px-3 py-2 focus:outline-none focus:border-purple-400"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold text-white">{profileData.name}</h1>
                  )}
                  
                  <div className="flex items-center space-x-2 mt-2 text-purple-200">
                    <Mail className="w-4 h-4" />
                    {isEditing ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({...editData, email: e.target.value})}
                        className="bg-white/10 border border-purple-500/30 rounded px-2 py-1 text-sm focus:outline-none focus:border-purple-400"
                      />
                    ) : (
                      <span>{profileData.email}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-1 text-purple-200">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {profileData.joinDate}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  {isEditing ? (
                    <>
                      <motion.button
                        onClick={handleSave}
                        className="p-2 bg-green-500 hover:bg-green-600 rounded-lg text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Save className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        onClick={handleCancel}
                        className="p-2 bg-gray-500 hover:bg-gray-600 rounded-lg text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X className="w-4 h-4" />
                      </motion.button>
                    </>
                  ) : (
                    <motion.button
                      onClick={() => setIsEditing(true)}
                      className="p-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit3 className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">About</h3>
                {isEditing ? (
                  <textarea
                    value={editData.bio}
                    onChange={(e) => setEditData({...editData, bio: e.target.value})}
                    className="w-full p-3 bg-white/10 border border-purple-500/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 resize-none"
                    rows={3}
                  />
                ) : (
                  <p className="text-purple-200 leading-relaxed">{profileData.bio}</p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Reading Stats */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Reading Statistics</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {readingStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <stat.icon className="w-6 h-6 text-purple-400 mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-purple-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Reading Activity Chart */}
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-white font-bold mb-6">Reading Activity</h3>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 49 }, (_, i) => (
                  <motion.div
                    key={i}
                    className={`aspect-square rounded-sm ${
                      Math.random() > 0.7 ? 'bg-purple-500' :
                      Math.random() > 0.5 ? 'bg-purple-600/50' :
                      Math.random() > 0.3 ? 'bg-purple-700/30' : 'bg-white/10'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 1 + i * 0.01 }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-purple-300 text-xs mt-2">
                <span>7 weeks ago</span>
                <span>Today</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Achievements</h2>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{achievement.title}</h4>
                      <p className="text-purple-300 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Settings */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Settings</h3>
              <div className="space-y-3">
                <motion.button 
                  className="w-full flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/20 text-white hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Settings className="w-5 h-5 text-purple-400" />
                  <span>Account Settings</span>
                </motion.button>
                
                <motion.button 
                  className="w-full flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/20 text-white hover:bg-white/15 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <User className="w-5 h-5 text-purple-400" />
                  <span>Privacy Settings</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};