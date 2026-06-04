import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CareerGuidance from './pages/CareerGuidance';
import SkillsPage from './pages/SkillsPage';
import ChatbotPage from './pages/ChatbotPage';
import FloatingChatBot from './components/FloatingChatBot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/career" element={<CareerGuidance />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingChatBot />
      </div>
    </Router>
  );
}

export default App;