import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LibraryPage } from './pages/LibraryPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { SearchPage } from './pages/SearchPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';
import { AuthPage } from './pages/AuthPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SettingsPage } from './pages/SettingsPage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ReadingPage } from './pages/ReadingPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route 
            path="/read/:id" 
            element={
              <>
                <Navigation />
                <ReadingPage />
              </>
            } 
          />
          <Route 
            path="/library" 
            element={
              <>
                <Navigation />
                <LibraryPage />
              </>
            } 
          />
          <Route 
            path="/book/:id" 
            element={
              <>
                <Navigation />
                <BookDetailPage />
              </>
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <>
                <Navigation />
                <DashboardPage />
              </>
            } 
          />
          <Route 
            path="/search" 
            element={
              <>
                <Navigation />
                <SearchPage />
              </>
            } 
          />
          <Route 
            path="/favorites" 
            element={
              <>
                <Navigation />
                <FavoritesPage />
              </>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <>
                <Navigation />
                <ProfilePage />
              </>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <>
                <Navigation />
                <SettingsPage />
              </>
            } 
          />
          <Route path="/x9z8y7w6v5u4t3s2r1q0p" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;