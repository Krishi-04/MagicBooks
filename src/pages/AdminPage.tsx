import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  AlertTriangle
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Users', value: '25,847', change: '+12%', icon: Users, color: 'from-blue-400 to-purple-500' },
    { label: 'Total Books', value: '10,234', change: '+5%', icon: BookOpen, color: 'from-purple-400 to-pink-500' },
    { label: 'Reviews', value: '89,432', change: '+18%', icon: BarChart3, color: 'from-pink-400 to-red-500' },
    { label: 'Active Sessions', value: '1,247', change: '+3%', icon: Eye, color: 'from-green-400 to-teal-500' }
  ];

  const recentUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', joined: '2 hours ago', status: 'active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', joined: '5 hours ago', status: 'active' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', joined: '1 day ago', status: 'pending' },
    { id: 4, name: 'David Wilson', email: 'david@example.com', joined: '2 days ago', status: 'active' }
  ];

  const recentBooks = [
    { id: 1, title: 'The Midnight Library', author: 'Matt Haig', added: '1 hour ago', status: 'approved' },
    { id: 2, title: 'Project Hail Mary', author: 'Andy Weir', added: '3 hours ago', status: 'pending' },
    { id: 3, title: 'The Seven Husbands', author: 'Taylor Jenkins Reid', added: '6 hours ago', status: 'approved' },
    { id: 4, title: 'Dune Messiah', author: 'Frank Herbert', added: '1 day ago', status: 'rejected' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-purple-300 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-6">Recent Users</h3>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">{user.name}</h4>
                  <p className="text-purple-300 text-sm">{user.email}</p>
                  <p className="text-purple-400 text-xs">{user.joined}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-6">Recent Books</h3>
          <div className="space-y-4">
            {recentBooks.map((book) => (
              <div key={book.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                <div>
                  <h4 className="text-white font-medium">{book.title}</h4>
                  <p className="text-purple-300 text-sm">{book.author}</p>
                  <p className="text-purple-400 text-xs">{book.added}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  book.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                  book.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {book.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">User Management</h3>
        <motion.button
          className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          <span>Add User</span>
        </motion.button>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-white font-medium">User</th>
                <th className="px-6 py-4 text-left text-white font-medium">Email</th>
                <th className="px-6 py-4 text-left text-white font-medium">Status</th>
                <th className="px-6 py-4 text-left text-white font-medium">Joined</th>
                <th className="px-6 py-4 text-left text-white font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id} className="border-t border-purple-500/20">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-purple-200">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-purple-300">{user.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <motion.button
                        className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderBooks = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Book Management</h3>
        <motion.button
          className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-4 h-4" />
          <span>Add Book</span>
        </motion.button>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-white font-medium">Book</th>
                <th className="px-6 py-4 text-left text-white font-medium">Author</th>
                <th className="px-6 py-4 text-left text-white font-medium">Status</th>
                <th className="px-6 py-4 text-left text-white font-medium">Added</th>
                <th className="px-6 py-4 text-left text-white font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentBooks.map((book) => (
                <tr key={book.id} className="border-t border-purple-500/20">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex-shrink-0"></div>
                      <span className="text-white font-medium">{book.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-purple-200">{book.author}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      book.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                      book.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {book.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-purple-300">{book.added}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <motion.button
                        className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Edit className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="p-2 text-red-400 hover:text-red-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">System Settings</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h4 className="text-white font-semibold mb-4">Site Configuration</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-purple-200 text-sm mb-2">Site Name</label>
              <input
                type="text"
                defaultValue="Magic Books"
                className="w-full px-3 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-purple-200 text-sm mb-2">Maintenance Mode</label>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="rounded" />
                <span className="text-white">Enable maintenance mode</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <h4 className="text-white font-semibold mb-4">Security</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-purple-200 text-sm mb-2">Max Login Attempts</label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-3 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-purple-200 text-sm mb-2">Session Timeout (minutes)</label>
              <input
                type="number"
                defaultValue="30"
                className="w-full px-3 py-2 bg-white/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/20">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <h4 className="text-red-400 font-semibold">Danger Zone</h4>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear All Cache
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Database
          </motion.button>
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
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-red-400" />
            <h1 className="text-4xl font-bold text-white">Admin Panel</h1>
          </div>
          <p className="text-purple-200 text-lg">System administration and management</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          
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
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'users' && renderUsers()}
            {activeTab === 'books' && renderBooks()}
            {activeTab === 'settings' && renderSettings()}
          </motion.div>
        </div>
      </div>
    </div>
  );
};