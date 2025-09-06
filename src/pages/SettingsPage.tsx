import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  BookOpen,
  Save,
  Eye,
  EyeOff,
  Trash2,
  Download
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [settings, setSettings] = useState({
    profile: {
      name: 'Krishi Jain',
      email: 'krishi.jain@email.com',
      bio: 'Passionate reader who loves fantasy, mystery, and sci-fi novels.',
      location: 'San Francisco, CA',
      website: 'https://harvey-reads.com'
    },
    notifications: {
      emailUpdates: true,
      bookRecommendations: true,
      friendActivity: false,
      weeklyDigest: true,
      newReleases: true
    },
    privacy: {
      profileVisibility: 'public',
      showReadingActivity: true,
      showReviews: true,
      allowFriendRequests: true
    },
    reading: {
      defaultGenre: 'fantasy',
      readingGoal: 50,
      autoAddToTBR: false,
      showSpoilers: false
    }
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'reading', label: 'Reading', icon: BookOpen },
    { id: 'appearance', label: 'Appearance', icon: Palette }
  ];

  const handleSave = () => {
    // Simulate saving settings
    console.log('Settings saved:', settings);
  };

  const handleInputChange = (section: string, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Full Name</label>
          <input
            type="text"
            value={settings.profile.name}
            onChange={(e) => handleInputChange('profile', 'name', e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-2">Email</label>
          <input
            type="email"
            value={settings.profile.email}
            onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-white font-medium mb-2">Bio</label>
        <textarea
          value={settings.profile.bio}
          onChange={(e) => handleInputChange('profile', 'bio', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 resize-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-medium mb-2">Location</label>
          <input
            type="text"
            value={settings.profile.location}
            onChange={(e) => handleInputChange('profile', 'location', e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
          />
        </div>
        <div>
          <label className="block text-white font-medium mb-2">Website</label>
          <input
            type="url"
            value={settings.profile.website}
            onChange={(e) => handleInputChange('profile', 'website', e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
          />
        </div>
      </div>

      <div className="border-t border-purple-500/20 pt-6">
        <h4 className="text-white font-semibold mb-4">Change Password</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Current Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                placeholder="Enter current password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                placeholder="Confirm new password"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      {Object.entries(settings.notifications).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <div>
            <h4 className="text-white font-medium capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <p className="text-purple-300 text-sm">
              {key === 'emailUpdates' && 'Receive email notifications about your account'}
              {key === 'bookRecommendations' && 'Get personalized book suggestions'}
              {key === 'friendActivity' && 'See when friends add books or write reviews'}
              {key === 'weeklyDigest' && 'Weekly summary of your reading activity'}
              {key === 'newReleases' && 'Notifications about new book releases'}
            </p>
          </div>
          <motion.button
            onClick={() => handleInputChange('notifications', key, !value)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              value ? 'bg-purple-500' : 'bg-gray-600'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
              animate={{ x: value ? 24 : 4 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      ))}
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white font-medium mb-3">Profile Visibility</label>
        <div className="space-y-2">
          {['public', 'friends', 'private'].map((option) => (
            <motion.button
              key={option}
              onClick={() => handleInputChange('privacy', 'profileVisibility', option)}
              className={`w-full p-4 rounded-xl text-left transition-all ${
                settings.privacy.profileVisibility === option
                  ? 'bg-purple-500/30 border border-purple-400'
                  : 'bg-white/5 border border-purple-500/20 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-white font-medium capitalize">{option}</div>
              <div className="text-purple-300 text-sm">
                {option === 'public' && 'Anyone can see your profile and reading activity'}
                {option === 'friends' && 'Only your friends can see your profile'}
                {option === 'private' && 'Your profile is completely private'}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {Object.entries(settings.privacy).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <div>
            <h4 className="text-white font-medium capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <p className="text-purple-300 text-sm">
              {key === 'showReadingActivity' && 'Display your reading progress and history'}
              {key === 'showReviews' && 'Make your book reviews visible to others'}
              {key === 'allowFriendRequests' && 'Allow other users to send friend requests'}
            </p>
          </div>
          <motion.button
            onClick={() => handleInputChange('privacy', key, !value)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              value ? 'bg-purple-500' : 'bg-gray-600'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
              animate={{ x: value ? 24 : 4 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      ))}
    </div>
  );

  const renderReadingSettings = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-white font-medium mb-2">Default Genre Preference</label>
        <select
          value={settings.reading.defaultGenre}
          onChange={(e) => handleInputChange('reading', 'defaultGenre', e.target.value)}
          className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400"
        >
          <option value="fantasy" className="bg-purple-900">Fantasy</option>
          <option value="fiction" className="bg-purple-900">Fiction</option>
          <option value="mystery" className="bg-purple-900">Mystery</option>
          <option value="romance" className="bg-purple-900">Romance</option>
          <option value="sci-fi" className="bg-purple-900">Science Fiction</option>
          <option value="non-fiction" className="bg-purple-900">Non-Fiction</option>
        </select>
      </div>

      <div>
        <label className="block text-white font-medium mb-2">Annual Reading Goal</label>
        <input
          type="number"
          value={settings.reading.readingGoal}
          onChange={(e) => handleInputChange('reading', 'readingGoal', parseInt(e.target.value))}
          className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
          min="1"
          max="365"
        />
        <p className="text-purple-300 text-sm mt-2">How many books do you want to read this year?</p>
      </div>

      {Object.entries(settings.reading).filter(([key]) => !['defaultGenre', 'readingGoal'].includes(key)).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
          <div>
            <h4 className="text-white font-medium capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <p className="text-purple-300 text-sm">
              {key === 'autoAddToTBR' && 'Automatically add recommended books to your TBR list'}
              {key === 'showSpoilers' && 'Show spoiler content in reviews and discussions'}
            </p>
          </div>
          <motion.button
            onClick={() => handleInputChange('reading', key, !value)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              value ? 'bg-purple-500' : 'bg-gray-600'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
              animate={{ x: value ? 24 : 4 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      ))}
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-white font-semibold mb-4">Theme</h4>
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            className="p-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl border-2 border-purple-400"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-white font-medium">Magic (Current)</div>
            <div className="text-purple-300 text-sm">Purple & Blue gradient</div>
          </motion.button>
          <motion.button
            className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-gray-600 opacity-50"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-white font-medium">Dark (Coming Soon)</div>
            <div className="text-gray-300 text-sm">Classic dark theme</div>
          </motion.button>
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">Font Size</h4>
        <div className="flex items-center space-x-4">
          <span className="text-purple-300">Small</span>
          <div className="flex-1 bg-white/10 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full w-1/2"></div>
          </div>
          <span className="text-purple-300">Large</span>
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold mb-4">Animation Level</h4>
        <div className="space-y-2">
          {['Full', 'Reduced', 'None'].map((level) => (
            <motion.button
              key={level}
              className={`w-full p-3 rounded-xl text-left transition-all ${
                level === 'Full'
                  ? 'bg-purple-500/30 border border-purple-400'
                  : 'bg-white/5 border border-purple-500/20 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.01 }}
            >
              <div className="text-white font-medium">{level} Animations</div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );

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
          <h1 className="text-4xl font-bold text-white mb-4">Settings</h1>
          <p className="text-purple-200 text-lg">Customize your Magic Books experience</p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeTab === tab.id
                        ? 'bg-purple-500/30 text-white border border-purple-400'
                        : 'text-purple-200 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white capitalize">{activeTab} Settings</h2>
                <motion.button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </motion.button>
              </div>

              {activeTab === 'profile' && renderProfileSettings()}
              {activeTab === 'notifications' && renderNotificationSettings()}
              {activeTab === 'privacy' && renderPrivacySettings()}
              {activeTab === 'reading' && renderReadingSettings()}
              {activeTab === 'appearance' && renderAppearanceSettings()}
            </div>

            {/* Danger Zone */}
            {activeTab === 'profile' && (
              <motion.div 
                className="mt-8 bg-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-xl font-bold text-red-400 mb-4">Danger Zone</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Export Data</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Account</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};